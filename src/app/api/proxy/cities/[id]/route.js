import fs from 'fs/promises';
import path from 'path';

export async function GET(request, { params }) {
  const id = params?.id;
  const upstream = `https://airbnb-json-db.vercel.app/cities/${encodeURIComponent(id)}`;
  try {
    const res = await fetch(upstream, { cache: 'no-store' });
    if (res.ok) {
      const body = await res.text();
      return new Response(body, {
        status: res.status,
        headers: { 'content-type': res.headers.get('content-type') || 'application/json' }
      });
    }
  } catch (err) {
    // fallthrough to local
  }

  try {
    const dbPath = path.join(process.cwd(), 'src', 'FakeDB', 'db.json');
    const file = await fs.readFile(dbPath, 'utf-8');
    const json = JSON.parse(file);
    const item = (json.cities || []).find(c => String(c.id) === String(id) || String(c.id) === String(Number(id)));
    if (!item) return new Response(JSON.stringify({ message: 'Not Found' }), { status: 404, headers: { 'content-type': 'application/json' } });
    return new Response(JSON.stringify(item), { status: 200, headers: { 'content-type': 'application/json' } });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Upstream and fallback failed' }), { status: 502, headers: { 'content-type': 'application/json' } });
  }
}

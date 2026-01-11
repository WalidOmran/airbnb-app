import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  const upstream = 'https://airbnb-json-db.vercel.app/favorites';
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
    // fall through to local fallback
  }

  // Fallback to local FakeDB
  try {
    const dbPath = path.join(process.cwd(), 'src', 'FakeDB', 'db.json');
    const file = await fs.readFile(dbPath, 'utf-8');
    const json = JSON.parse(file);
    // No top-level favorites in FakeDB; return empty array as safe fallback
    const payload = [];
    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Upstream and fallback failed' }), { status: 502, headers: { 'content-type': 'application/json' } });
  }
}

export async function GET() {
  const upstream = 'https://airbnb-json-db.vercel.app/properties';
  const res = await fetch(upstream, { cache: 'no-store' });
  const body = await res.text();

  return new Response(body, {
    status: res.status,
    headers: { 'content-type': res.headers.get('content-type') || 'application/json' }
  });
}

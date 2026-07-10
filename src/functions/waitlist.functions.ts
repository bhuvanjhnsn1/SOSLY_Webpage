// Server function handling GET (list) and POST (add) for waitlist signups.
// Map this to your deployment's serverless/function route as appropriate (e.g. /api/waitlist).

export default async function handler(request: Request) {
  try {
    const url = new URL(request.url);
    const method = request.method.toUpperCase();

    if (method === 'GET') {
      const { listWaitlist } = await import('@/server/waitlist.server');
      const data = await listWaitlist();
      return new Response(JSON.stringify({ data }), { status: 200, headers: { 'content-type': 'application/json' } });
    }

    if (method === 'POST') {
      const { addSignup } = await import('@/server/waitlist.server');
      const body = await request.json().catch(() => ({}));
      const email = body?.email || url.searchParams.get('email');
      if (!email) return new Response(JSON.stringify({ error: 'email required' }), { status: 400, headers: { 'content-type': 'application/json' } });

      try {
        const data = await addSignup(email);
        return new Response(JSON.stringify({ data }), { status: 201, headers: { 'content-type': 'application/json' } });
      } catch (err: any) {
        const status = err?.code === 'invalid_email' ? 400 : 500;
        return new Response(JSON.stringify({ error: String(err?.message || err) }), { status, headers: { 'content-type': 'application/json' } });
      }
    }

    return new Response('Method Not Allowed', { status: 405 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'internal error' }), { status: 500, headers: { 'content-type': 'application/json' } });
  }
}

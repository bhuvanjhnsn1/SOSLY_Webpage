export async function listWaitlist() {
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');

  const { data, error } = await supabaseAdmin.from('waitlist_signups').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function addSignup(email: string) {
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');

  // basic email validation
  const emailNormalized = String(email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNormalized)) {
    const err: any = new Error('Invalid email');
    err.code = 'invalid_email';
    throw err;
  }

  // prevent duplicates
  const { data: existing } = await supabaseAdmin
    .from('waitlist_signups')
    .select('id')
    .eq('email', emailNormalized)
    .limit(1)
    .maybeSingle();

  if (existing) return existing;

  const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto ? (crypto as any).randomUUID() : Date.now().toString();

  const { data, error } = await supabaseAdmin
    .from('waitlist_signups')
    .insert([{ id, email: emailNormalized }])
    .select()
    .single();

  if (error) throw error;

  // TODO: integrate Resend (transactional email) here in future. Example placeholder:
  // await sendWelcomeEmailViaResend(emailNormalized);

  return data;
}

// Placeholder for future Resend integration. Implement using RESEND_API_KEY server-side.
export async function sendWelcomeEmailViaResend(email: string) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    throw new Error('Missing RESEND_API_KEY');
  }

  // Example POST to Resend - adapt payload per Resend API when integrating.
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'noreply@yourdomain.com',
      to: [email],
      subject: 'Thanks for joining',
      html: `<p>Thanks for joining our waitlist — we will be in touch.</p>`,
    }),
  });
}

export async function listWaitlist() {
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');

  const { data, error } = await supabaseAdmin.from('waitlist_signups').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function addSignup(email: string, name: string) {
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');

  // basic email validation
  const emailNormalized = String(email || '').trim().toLowerCase();
  const nameNormalized = String(name || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNormalized)) {
    const err: any = new Error('Invalid email');
    err.code = 'invalid_email';
    throw err;
  }

  if (!nameNormalized) {
    const err: any = new Error('Invalid name');
    err.code = 'invalid_name';
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
    .insert([{ id, email: emailNormalized, name: nameNormalized }])
    .select()
    .single();

  if (error) throw error;

  await sendWelcomeEmailViaResend(emailNormalized, nameNormalized);

  return data;
}

// Placeholder for future Resend integration. Implement using RESEND_API_KEY server-side.
export async function sendWelcomeEmailViaResend(email: string, name: string) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!resendApiKey) {
    throw new Error('Missing RESEND_API_KEY');
  }

  if (!fromEmail) {
    throw new Error('Missing RESEND_FROM_EMAIL');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [email],
      subject: 'You are on the SOSLY waitlist',
      html: `<p>Thanks for signing up, ${name}. We have saved your spot and will share updates soon.</p>`,
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new Error(`Resend request failed (${response.status}): ${body}`);
  }
}

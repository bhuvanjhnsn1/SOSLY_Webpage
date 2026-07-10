import { createServerFn } from '@tanstack/react-start';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';

export const getWaitlistSignups = createServerFn({ method: 'GET' })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const { listWaitlist } = await import('@/server/waitlist.server');
    const data = await listWaitlist();
    return data;
  });

export default getWaitlistSignups;

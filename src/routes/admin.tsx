import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import getWaitlistSignups from '@/server/admin-waitlist';
import { toast } from 'sonner';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

import type { Session } from '@supabase/supabase-js';

export const Route = createFileRoute('/admin')({
  head: () => ({ meta: [{ title: 'Admin — Waitlist' }] }),
  component: Admin,
});

function Admin() {
  const [session, setSession] = useState<Session | null | undefined>(undefined);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [signingIn, setSigningIn] = useState(false);

  const [signups, setSignups] = useState<Array<{ id: string; name: string | null; email: string; created_at: string }>>([]);
  const [loadingSignups, setLoadingSignups] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoadingAuth(true);
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session ?? null);
      setLoadingAuth(false);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_, nextSession) => {
      setSession(nextSession ?? null);
    });

    return () => {
      mounted = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    if (signingIn) return;
    setSigningIn(true);
    const { error: signError } = await supabase.auth.signInWithPassword({ email: emailInput, password: passwordInput });
    setSigningIn(false);
    if (signError) {
      toast.error(signError.message || 'Sign in failed');
    } else {
      toast.success('Signed in');
      await fetchSignups();
    }
  }

  async function fetchSignups() {
    setLoadingSignups(true);
    setError(null);
    try {
      const data = await getWaitlistSignups();
      setSignups(Array.isArray(data) ? data : []);
    } catch (err: any) {
      console.error(err);
      setError('Failed to load signups — your session may have expired. Please sign in again.');
    } finally {
      setLoadingSignups(false);
    }
  }

  useEffect(() => {
    if (session) fetchSignups();
  }, [session]);

  if (loadingAuth || session === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <Card>
          <CardContent>Checking authentication...</CardContent>
        </Card>
      </div>
    );
  }

  if (session === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin sign in</CardTitle>
            <CardDescription>Sign in with Supabase email/password</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <Label>Email</Label>
                <Input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} type="email" />
              </div>
              <div>
                <Label>Password</Label>
                <Input value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} type="password" />
              </div>
              <div className="flex justify-end">
                <Button type="submit" disabled={signingIn}>{signingIn ? 'Signing in...' : 'Sign in'}</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Waitlist signups ({signups.length})</h1>
        <div className="flex items-center gap-2">
          <Button onClick={() => fetchSignups()} disabled={loadingSignups}>{loadingSignups ? 'Refreshing...' : 'Refresh'}</Button>
          <Button onClick={async () => { await supabase.auth.signOut(); setSession(null); }}>Sign out</Button>
        </div>
      </div>

      {error ? (
        <Card className="mb-6">
          <CardContent className="text-destructive">{error}</CardContent>
        </Card>
      ) : null}

      {loadingSignups ? (
        <Card>
          <CardContent>Loading signups...</CardContent>
        </Card>
      ) : signups.length === 0 ? (
        <Card>
          <CardContent>No signups yet.</CardContent>
        </Card>
      ) : (
        <Table>
          <TableHeader>
            <tr>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Joined</TableHead>
            </tr>
          </TableHeader>
          <TableBody>
            {signups.map((s) => (
              <TableRow key={s.id}>
                <TableCell>{s.name ?? '—'}</TableCell>
                <TableCell>{s.email}</TableCell>
                <TableCell>{new Date(s.created_at).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

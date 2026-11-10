import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud, CloudOff, Loader2, LogOut, UserRound } from 'lucide-react';
import { signIn, signOut, useCloud } from '../lib/cloud';
import { Button, Card, cx } from '../components/ui';

/** The signed-in learner's account (visitors who aren't signed in see the landing page instead). */
export default function AccountPage() {
  const cloud = useCloud();
  const [busy, setBusy] = useState(false);
  if (!cloud.email) return <Card className="mx-auto max-w-md p-6"><AuthForm /></Card>;
  return (
    <Card className="mx-auto flex max-w-md flex-col items-center gap-3 p-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/15 text-brand-600 dark:text-brand-300"><UserRound size={28} /></div>
      <div>
        <div className="text-sm text-slate-500">Signed in as</div>
        <div className="font-semibold text-slate-900 dark:text-white">{cloud.email}</div>
      </div>
      <SyncBadge />
      <Button variant="secondary" onClick={() => { setBusy(true); signOut().finally(() => setBusy(false)); }} disabled={busy}>
        {busy ? <Loader2 size={16} className="animate-spin" /> : <LogOut size={16} />} Sign out
      </Button>
    </Card>
  );
}

/** Sign in / create account form. After it succeeds the learner goes to the home page. */
export function AuthForm({ initial = 'login' }: { initial?: 'login' | 'register' }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'login' | 'register'>(initial);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true); setError('');
    try { await signIn(email, password, mode === 'register'); setPassword(''); navigate('/'); }
    catch (err) { setError((err as Error).message === 'Failed to fetch' ? "Can't connect right now. Check your internet and try again." : (err as Error).message); }
    finally { setBusy(false); }
  };

  return (
    <div>
      <div className="mb-4 flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
        {(['register', 'login'] as const).map((m) => (
          <button key={m} type="button" onClick={() => { setMode(m); setError(''); }}
            className={cx('flex-1 rounded-lg py-2 text-sm font-semibold transition', mode === m ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300')}>
            {m === 'login' ? 'Sign in' : 'Create account'}
          </button>
        ))}
      </div>
      <form onSubmit={submit} className="flex flex-col gap-3">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Email
          <input type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="input mt-1" placeholder="you@example.com" />
        </label>
        <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Password
          <input type="password" autoComplete={mode === 'login' ? 'current-password' : 'new-password'} required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} className="input mt-1" />
          {mode === 'register' && <span className="mt-1 block text-xs font-normal text-slate-500">At least 8 characters.</span>}
        </label>
        {error && <div className="rounded-xl bg-rose-50 px-3 py-2 text-sm text-rose-700 dark:bg-rose-500/10 dark:text-rose-300">{error}</div>}
        <Button type="submit" size="lg" disabled={busy}>{busy && <Loader2 size={16} className="animate-spin" />} {mode === 'login' ? 'Sign in' : 'Create free account'}</Button>
      </form>
    </div>
  );
}

export function SyncBadge() {
  const { sync } = useCloud();
  return (
    <span className={cx('inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold',
      sync === 'error' ? 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300' : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300')}>
      {sync === 'saving' ? <Loader2 size={12} className="animate-spin" /> : sync === 'error' ? <CloudOff size={12} /> : <Cloud size={12} />}
      {sync === 'saving' ? 'Saving…' : sync === 'error' ? "Couldn't save — retrying" : 'Saved to your account'}
    </span>
  );
}

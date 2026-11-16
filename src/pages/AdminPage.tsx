import { Fragment, useEffect, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ChevronDown, Flame, Gift, Loader2, RefreshCw, Search } from 'lucide-react';
import { useCloud } from '../lib/cloud';
import { SKILLS } from '../components/SkillHeader';
import { Badge, Button, Card, PageHeader, cx } from '../components/ui';

/** Admin page (only for the emails in the server's ADMIN_EMAILS): every learner and their progress. */
interface AdminUser {
  id: number; email: string; createdAt: number; savedAt: number | null;
  xp: number; unitsCompleted: number; unitsStarted: number; mistakes: number; cardsLearned: number; myWords: number;
  readings: number; exams: number; streak: number; bestStreak: number; activeDays: number; lastDay: string | null;
  totalMinutes: number; sectionMinutes: Record<string, number>;
  last7: { date: string; minutes: number }[];
  prizesEarned: number; prizes: { blockEnd: string; earnedAt: number; delivered: boolean }[];
}

const fmtDate = (ms: number | null) => (ms ? new Date(ms).toLocaleString('es-AR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' }) : '—');
const fmtMin = (m: number) => (m >= 60 ? `${Math.floor(m / 60)} h ${m % 60} min` : `${m} min`);

export default function AdminPage() {
  const cloud = useCloud();
  const [users, setUsers] = useState<AdminUser[] | null>(null);
  const [error, setError] = useState('');
  const [q, setQ] = useState('');
  const [open, setOpen] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/admin', { credentials: 'same-origin' });
      const j = await res.json() as { users?: AdminUser[]; error?: string };
      if (!res.ok || !j.users) throw new Error(j.error || 'Could not load the users.');
      setUsers(j.users);
    } catch (e) { setError((e as Error).message); }
    finally { setLoading(false); }
  };
  useEffect(() => { if (cloud.admin) load(); }, [cloud.admin]);

  const shown = useMemo(() => (users ?? []).filter((u) => !q || u.email.toLowerCase().includes(q.toLowerCase())), [users, q]);

  if (cloud.checked && !cloud.admin) return <Navigate to="/" replace />;

  const deliver = async (u: AdminUser, blockEnd: string, delivered: boolean) => {
    const res = await fetch('/api/admin', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'deliver', userId: u.id, blockEnd, delivered }) });
    if (res.ok) setUsers((all) => all?.map((x) => x.id === u.id ? { ...x, prizes: x.prizes.map((p) => p.blockEnd === blockEnd ? { ...p, delivered } : p) } : x) ?? null);
  };

  const all = users ?? [];
  const weekAgo = Date.now() - 7 * 86400000;
  const stats = [
    { label: 'Users', value: all.length },
    { label: 'Active in the last 7 days', value: all.filter((u) => (u.savedAt ?? 0) > weekAgo && u.totalMinutes > 0).length },
    { label: 'Books to deliver', value: all.reduce((a, u) => a + u.prizes.filter((p) => !p.delivered).length, 0) },
    { label: 'Total study time', value: fmtMin(all.reduce((a, u) => a + u.totalMinutes, 0)) },
  ];

  return (
    <div>
      <PageHeader title="Admin" subtitle="Every learner and their progress. Only you can see this page."
        actions={<Button variant="secondary" size="sm" onClick={load} disabled={loading}>{loading ? <Loader2 size={15} className="animate-spin" /> : <RefreshCw size={15} />} Refresh</Button>} />

      <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="p-4">
            <div className="text-xs text-slate-500">{s.label}</div>
            <div className="mt-1 font-display text-2xl font-bold text-slate-900 dark:text-white">{s.value}</div>
          </Card>
        ))}
      </div>

      <div className="relative mb-4 max-w-sm">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input className="input pl-9" placeholder="Search by email…" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>

      {error && <div className="mb-4 rounded-xl bg-rose-50 px-3 py-2 text-sm text-rose-700 dark:bg-rose-500/10 dark:text-rose-300">{error}</div>}
      {!users && !error && <div className="flex justify-center py-16 text-slate-500"><Loader2 className="animate-spin" /></div>}

      {users && (
        <Card className="overflow-x-auto p-0">
          <table className="table-clean w-full">
            <thead>
              <tr><th className="pl-4">Email</th><th>XP</th><th>Streak</th><th>Units passed</th><th>Study time</th><th>Last day</th><th>Books</th><th /></tr>
            </thead>
            <tbody>
              {shown.map((u) => (
                <Fragment key={u.id}>
                  <tr onClick={() => setOpen(open === u.id ? null : u.id)} className="cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="pl-4 font-medium text-slate-900 dark:text-white">{u.email}</td>
                    <td className="tabular-nums">{u.xp}</td>
                    <td><span className="inline-flex items-center gap-1 tabular-nums"><Flame size={14} className={u.streak ? 'text-orange-500' : 'text-slate-400'} />{u.streak}</span></td>
                    <td className="tabular-nums">{u.unitsCompleted}</td>
                    <td className="tabular-nums">{fmtMin(u.totalMinutes)}</td>
                    <td className="tabular-nums">{u.lastDay ?? '—'}</td>
                    <td>{u.prizes.length ? <Badge tone={u.prizes.some((p) => !p.delivered) ? 'amber' : 'green'}>{u.prizes.filter((p) => p.delivered).length}/{u.prizes.length}</Badge> : <span className="text-slate-400">—</span>}</td>
                    <td className="pr-4"><ChevronDown size={16} className={cx('text-slate-400 transition', open === u.id && 'rotate-180')} /></td>
                  </tr>
                  {open === u.id && (
                    <tr>
                      <td colSpan={8} className="bg-slate-50 px-4 py-4 dark:bg-slate-900/60">
                        <Detail u={u} onDeliver={deliver} />
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
              {!shown.length && <tr><td colSpan={8} className="py-8 text-center text-slate-500">No users match.</td></tr>}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
}

function Detail({ u, onDeliver }: { u: AdminUser; onDeliver: (u: AdminUser, blockEnd: string, delivered: boolean) => void }) {
  const max = Math.max(120, ...u.last7.map((d) => d.minutes));
  const facts = [
    ['Registered', fmtDate(u.createdAt)], ['Last saved', fmtDate(u.savedAt)], ['Active days', u.activeDays], ['Best streak', `${u.bestStreak} days`],
    ['Units started', u.unitsStarted], ['Mistakes to fix', u.mistakes], ['Words learnt', u.cardsLearned], ['My words', u.myWords],
    ['Readings done', u.readings], ['Tests taken', u.exams],
  ] as const;
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <div>
        <div className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">Last 7 days</div>
        <div className="flex h-28 items-end gap-1.5">
          {u.last7.map((d) => (
            <div key={d.date} className="flex flex-1 flex-col items-center gap-1" title={`${d.date}: ${d.minutes} min`}>
              <div className={cx('w-full rounded-t', d.minutes >= 120 ? 'bg-orange-500' : 'bg-brand-500/60')} style={{ height: `${Math.max(2, (d.minutes / max) * 96)}px` }} />
              <span className="text-[10px] text-slate-500">{d.date.slice(8)}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">Time per section (all time)</div>
        <div className="flex flex-col gap-1.5">
          {SKILLS.map((s) => {
            const m = u.sectionMinutes[s.id] ?? 0;
            const top = Math.max(1, ...Object.values(u.sectionMinutes));
            return (
              <div key={s.id} className="flex items-center gap-2 text-xs">
                <span className="w-20 text-slate-600 dark:text-slate-300">{s.label}</span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"><div className="h-full rounded-full bg-brand-500" style={{ width: `${(m / top) * 100}%` }} /></div>
                <span className="w-14 text-right tabular-nums text-slate-500">{fmtMin(m)}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">Details</div>
        <dl className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
          {facts.map(([k, v]) => <Fragment key={k}><dt className="text-slate-500">{k}</dt><dd className="text-right font-medium text-slate-800 dark:text-slate-200">{v}</dd></Fragment>)}
        </dl>
        <div className="mt-4 mb-1 flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white"><Gift size={15} className="text-amber-500" /> Physical books</div>
        {u.prizes.length ? u.prizes.map((p) => (
          <label key={p.blockEnd} className="flex items-center justify-between gap-2 py-1 text-xs">
            <span className="text-slate-600 dark:text-slate-300">7 days in a row, ended {p.blockEnd}</span>
            <span className="flex items-center gap-1.5"><input type="checkbox" checked={p.delivered} onChange={(e) => onDeliver(u, p.blockEnd, e.target.checked)} className="h-4 w-4 accent-brand-500" /> Delivered</span>
          </label>
        )) : <div className="text-xs text-slate-500">None yet.</div>}
      </div>
    </div>
  );
}

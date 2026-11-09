import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown, Play, NotebookPen, CalendarCheck, BookOpen } from 'lucide-react';
import { MODULES } from '../content/modules';
import { UNIT_BY_ID, UNITS } from '../content';
import { nextUnit } from '../lib/adaptive';
import { useProgress } from '../store/progress';
import { cx } from '../components/ui';
import { SkillTabs } from '../components/SkillHeader';

/** Hex colours per module (used for the ring and the path line). */
const HEX: Record<string, string> = {
  indigo: '#6366f1', violet: '#8b5cf6', sky: '#0ea5e9', emerald: '#10b981', amber: '#f59e0b', rose: '#f43f5e', orange: '#f97316', teal: '#14b8a6',
  cyan: '#06b6d4', lime: '#84cc16', fuchsia: '#d946ef', pink: '#ec4899', yellow: '#eab308', blue: '#3b82f6', green: '#22c55e', purple: '#a855f7',
};

function NumberRing({ n, pct, color }: { n: number; pct: number; color: string }) {
  const r = 20, c = 2 * Math.PI * r;
  return (
    <div className="relative h-12 w-12 shrink-0">
      <svg viewBox="0 0 48 48" className="h-12 w-12 -rotate-90">
        <circle cx="24" cy="24" r={r} strokeWidth="4" className="fill-none stroke-slate-100 dark:stroke-slate-800" />
        <circle cx="24" cy="24" r={r} strokeWidth="4" strokeLinecap="round" fill="none" stroke={color} strokeDasharray={c} strokeDashoffset={c * (1 - pct)} className="transition-all duration-700" />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-display text-base font-bold text-slate-800 dark:text-slate-100">{pct >= 1 ? <Check size={18} style={{ color }} /> : n}</span>
    </div>
  );
}

export default function Courses() {
  const p = useProgress();
  const current = nextUnit(p);
  const currentModule = MODULES.find((m) => m.units.includes(current))?.id;
  const [open, setOpen] = useState<string | null>(currentModule ?? MODULES[0].id);
  const done = UNITS.filter((u) => p.units[u.id]?.completed).length;

  return (
    <div>
      <SkillTabs active="grammar" />
      <div className="flex items-end justify-between gap-3">
        <h1 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">Grammar</h1>
        <Link to="/grammar" className="pressable rounded-xl px-3 py-1.5 text-sm font-medium text-brand-600 hover:bg-brand-50 dark:text-brand-300 dark:hover:bg-brand-500/10">See contents</Link>
      </div>
      <p className="mt-1 text-slate-500">145 units in 16 topics. Go in order or choose the topic you need.</p>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="h-full rounded-full bg-brand-500 transition-all duration-700" style={{ width: `${(done / UNITS.length) * 100}%` }} />
        </div>
        <span className="text-sm font-medium text-slate-500">{done}/{UNITS.length}</span>
      </div>

      {/* Modules */}
      <div className="mt-6 flex flex-col gap-3">
        {MODULES.map((m, i) => {
          const units = m.units.map((id) => UNIT_BY_ID[id]).filter(Boolean);
          const c = units.filter((u) => p.units[u.id]?.completed).length;
          const isOpen = open === m.id;
          const color = HEX[m.color];
          return (
            <section key={m.id} className={cx('overflow-hidden rounded-3xl border bg-white transition-shadow duration-300 dark:bg-slate-900', isOpen ? 'border-slate-200 shadow-lg shadow-slate-200/60 dark:border-slate-700 dark:shadow-none' : 'border-slate-200/70 dark:border-slate-800')}>
              <button onClick={() => setOpen(isOpen ? null : m.id)} aria-expanded={isOpen} className="flex w-full items-center gap-4 p-4 text-left sm:p-5">
                <NumberRing n={i + 1} pct={units.length ? c / units.length : 0} color={color} />
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-slate-900 dark:text-white">{m.title}</div>
                  <div className="text-sm text-slate-500">{units.length} units · {c} passed</div>
                </div>
                {m.id === currentModule && !isOpen && <span className="hidden rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 sm:inline dark:bg-brand-500/15 dark:text-brand-200">You are here</span>}
                <ChevronDown size={20} className={cx('shrink-0 text-slate-400 transition-transform duration-300', isOpen && 'rotate-180')} />
              </button>

              <div className={cx('grid transition-all duration-500 ease-out', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                <div className="overflow-hidden">
                  <ol className="relative px-5 pb-5 sm:px-6">
                    {units.map((u, k) => {
                      const up = p.units[u.id];
                      const completed = !!up?.completed;
                      const isCurrent = u.id === current;
                      const startedU = (up?.step ?? 0) > 0;
                      const last = k === units.length - 1;
                      return (
                        <li key={u.id} className="relative flex items-start gap-4">
                          {/* line to the next node */}
                          {!last && <span className="absolute bottom-0 left-[19px] top-11 w-0.5 rounded-full bg-slate-200 dark:bg-slate-700" style={completed ? { background: color } : undefined} aria-hidden />}
                          <Link to={`/learn/${u.id}`} className="pressable relative z-10 mt-1 shrink-0" aria-label={`Unit ${u.n}`}>
                            <span
                              className={cx('flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold',
                                completed ? 'border-transparent text-white' : isCurrent ? 'border-transparent text-white ring-4 ring-offset-2 ring-offset-white dark:ring-offset-slate-900' : 'border-slate-200 bg-white text-slate-500 dark:border-slate-700 dark:bg-slate-900')}
                              style={completed || isCurrent ? { background: color, ['--tw-ring-color' as string]: `${color}40` } : undefined}
                            >
                              {completed ? <Check size={18} /> : u.n}
                            </span>
                            {isCurrent && <span className="absolute inset-0 animate-ping rounded-full opacity-30" style={{ background: color }} aria-hidden />}
                          </Link>
                          <Link to={`/learn/${u.id}`} className={cx('pressable -mx-2 mb-2 flex min-w-0 flex-1 items-center justify-between gap-3 rounded-2xl px-2 py-2', isCurrent ? 'bg-slate-50 dark:bg-slate-800/60' : 'hover:bg-slate-50 dark:hover:bg-slate-800/40')}>
                            <div className="min-w-0">
                              <div className={cx('truncate font-medium', isCurrent ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-200')}>{u.title}</div>
                              <div className="truncate text-xs text-slate-400">{u.title}</div>
                            </div>
                            {isCurrent ? (
                              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-semibold text-white" style={{ background: color }}>
                                <Play size={13} fill="currentColor" /> {startedU ? 'Continue' : 'Start'}
                              </span>
                            ) : completed ? (
                              <span className="shrink-0 text-xs font-semibold text-emerald-600 dark:text-emerald-400">{up!.best}%</span>
                            ) : startedU ? (
                              <span className="shrink-0 text-xs text-slate-400">Paso {Math.min(up!.step + 1, 5)}/5</span>
                            ) : null}
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                  <div className="flex justify-end border-t border-slate-100 px-5 py-3 dark:border-slate-800">
                    <Link to={`/exam/module/${m.id}`} className="pressable rounded-xl px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">Module test →</Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Other material, kept small */}
      <div className="mt-8 grid grid-cols-3 gap-3">
        {[
          { to: '/workbook', icon: NotebookPen, label: 'Objective First' },
          { to: '/readings', icon: BookOpen, label: 'Reading' },
          { to: '/plan', icon: CalendarCheck, label: '2-hour plan' },
        ].map(({ to, icon: Icon, label }) => (
          <Link key={to} to={to} className="pressable flex flex-col items-center gap-2 rounded-2xl bg-white p-4 text-center text-sm font-medium text-slate-700 hover:shadow-md dark:bg-slate-900 dark:text-slate-200">
            <Icon size={20} className="text-brand-500" /> {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

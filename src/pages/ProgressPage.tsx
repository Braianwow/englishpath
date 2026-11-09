import { useState } from 'react';
import { Award, BadgeCheck, BookA, BookOpen, CalendarCheck, Crown, Flame, Footprints, GraduationCap, Library, Medal, Rocket, Sparkles, Target, Trophy, Wrench, type LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = { Award, BadgeCheck, BookA, BookOpen, CalendarCheck, Crown, Flame, Footprints, GraduationCap, Library, Medal, Rocket, Sparkles, Target, Trophy, Wrench };
import { useProgress } from '../store/progress';
import { MODULES, COLOR } from '../content/modules';
import { UNIT_BY_ID, UNITS } from '../content';
import { ACHIEVEMENTS, levelInfo, streak } from '../lib/gamification';
import { estimatedLevel, overallAccuracy } from '../lib/adaptive';
import { addDays, fmtMinutes, todayKey } from '../lib/dates';
import { Card, PageHeader, Progress, Ring, cx } from '../components/ui';

type Metric = 'xp' | 'minutes' | 'exercises' | 'accuracy';

export default function ProgressPage() {
  const p = useProgress();
  const [metric, setMetric] = useState<Metric>('xp');
  const lv = levelInfo(p.xp);
  const st = streak(p);
  const est = estimatedLevel(p);
  const acc = overallAccuracy(p);
  const days = Array.from({ length: 14 }, (_, i) => addDays(todayKey(), i - 13));
  const values = days.map((d) => {
    const x = p.days[d];
    if (!x) return 0;
    if (metric === 'accuracy') return x.exercises ? Math.round((x.correct / x.exercises) * 100) : 0;
    return x[metric];
  });
  const max = Math.max(1, ...values);
  const totalMin = Object.values(p.days).reduce((a, d) => a + d.minutes, 0);
  const activeDays = Object.values(p.days).filter((d) => d.xp > 0 || d.cards > 0).length;

  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Progress" subtitle="Real statistics, calculated only from your activity." />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="flex items-center gap-4">
          <Ring value={lv.pct} size={96} stroke={9}><div className="text-xs text-slate-500">Level</div><div className="font-display text-2xl font-bold text-slate-900 dark:text-white">{lv.level}</div></Ring>
          <div><div className="font-semibold text-slate-900 dark:text-white">{p.xp} XP</div><div className="text-sm text-slate-500">{lv.need - lv.into} XP to level {lv.level + 1}</div></div>
        </Card>
        <Card>
          <div className="text-sm text-slate-500">Estimated English level</div>
          <div className="font-display text-3xl font-bold text-slate-900 dark:text-white">{est.label}</div>
          <div className="text-sm text-slate-500">{est.detail}</div>
        </Card>
        <Card>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div><div className="text-slate-500">Current streak</div><div className="text-xl font-bold text-slate-900 dark:text-white">{st.current} d</div></div>
            <div><div className="text-slate-500">Best streak</div><div className="text-xl font-bold text-slate-900 dark:text-white">{st.best} d</div></div>
            <div><div className="text-slate-500">Active days</div><div className="text-xl font-bold text-slate-900 dark:text-white">{activeDays}</div></div>
            <div><div className="text-slate-500">Total time</div><div className="text-xl font-bold text-slate-900 dark:text-white">{fmtMinutes(totalMin)}</div></div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div className="font-semibold text-slate-900 dark:text-white">Last 14 days</div>
          <div className="inline-flex rounded-xl bg-slate-100 p-1 text-sm dark:bg-slate-800">
            {([['xp', 'XP'], ['minutes', 'Minutes'], ['exercises', 'Exercises'], ['accuracy', '% correct']] as [Metric, string][]).map(([m, l]) => (
              <button key={m} onClick={() => setMetric(m)} className={cx('rounded-lg px-2.5 py-1 font-medium', metric === m ? 'bg-white shadow-sm dark:bg-slate-700' : 'text-slate-500')}>{l}</button>
            ))}
          </div>
        </div>
        <div className="flex h-44 items-end gap-1.5 sm:gap-2" role="img" aria-label="Activity chart for the last 14 days">
          {values.map((v, i) => (
            <div key={i} className="group flex h-full flex-1 flex-col items-center justify-end gap-1">
              <div className="text-[10px] font-semibold text-slate-500 opacity-0 transition group-hover:opacity-100">{v}</div>
              <div className={cx('w-full rounded-t-md transition-all', days[i] === todayKey() ? 'bg-brand-500' : 'bg-brand-300 dark:bg-brand-500/50')} style={{ height: `${(v / max) * 100}%`, minHeight: v ? 4 : 2 }} />
              <div className="text-[10px] text-slate-400">{days[i].slice(8)}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 text-sm text-slate-500">Overall accuracy: {acc === null ? '—' : `${Math.round(acc * 100)} %`}</div>
      </Card>

      <Card>
        <div className="mb-4 font-semibold text-slate-900 dark:text-white">Mastery by module</div>
        <div className="grid gap-4 md:grid-cols-2">
          {MODULES.map((m) => {
            const us = m.units.map((id) => UNIT_BY_ID[id]).filter(Boolean);
            const studied = us.filter((u) => (p.units[u.id]?.attempts ?? 0) > 0);
            const mastery = studied.length ? studied.reduce((a, u) => a + p.units[u.id].mastery, 0) / us.length : 0;
            const done = us.filter((u) => p.units[u.id]?.completed).length;
            return (
              <div key={m.id}>
                <div className="mb-1 flex justify-between text-sm"><span className="font-medium text-slate-800 dark:text-slate-200">{m.title}</span><span className="text-slate-500">{done}/{us.length} · {Math.round(mastery * 100)}%</span></div>
                <Progress value={mastery} color={COLOR[m.color].bar} />
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-slate-500">Mastery = weighted average of recent results in each unit of the module (units not studied count as 0). {UNITS.length} units in total.</p>
      </Card>

      <Card>
        <div className="mb-4 font-semibold text-slate-900 dark:text-white">Logros ({Object.keys(p.achievements).length}/{ACHIEVEMENTS.length})</div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a) => {
            const got = p.achievements[a.id];
            const Icon = ICONS[a.icon] ?? Award;
            return (
              <div key={a.id} className={cx('flex items-start gap-3 rounded-xl border p-3', got ? 'border-amber-200 bg-amber-50/60 dark:border-amber-500/30 dark:bg-amber-500/10' : 'border-slate-200 opacity-60 dark:border-slate-800')}>
                <div className={cx('rounded-lg p-2', got ? 'bg-amber-100 text-amber-600 dark:bg-amber-500/20' : 'bg-slate-100 text-slate-400 dark:bg-slate-800')}><Icon size={18} /></div>
                <div><div className="text-sm font-semibold text-slate-900 dark:text-white">{a.title}</div><div className="text-xs text-slate-500">{a.desc}</div>{got && <div className="mt-0.5 text-[11px] text-amber-700 dark:text-amber-300">{new Date(got).toLocaleDateString('en-GB')}</div>}</div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Check, Pause, Play } from 'lucide-react';
import { togglePlay, useStudyTime } from '../store/timer';
import { DAILY_GOAL_MIN, SECTION_GOAL_SECS, fmtClock, type SectionId } from '../lib/studyTime';
import { SKILLS } from './SkillHeader';
import { Ring, cx } from './ui';

/** 30-minute countdown for the section that is open, shown above the page. It only runs after Play. */
export function SectionTimer({ section }: { section: SectionId }) {
  const { secs, minutes, playing } = useStudyTime();
  const s = SKILLS.find((x) => x.id === section)!;
  const done = secs[section] ?? 0;
  const left = SECTION_GOAL_SECS - done;
  const complete = left <= 0;
  const on = playing;
  const hint = !on ? (complete ? `30 min of ${s.label} done · press Play to keep counting` : `${s.label} · press Play to start`)
    : complete ? `30 min of ${s.label} done` : `left in ${s.label}`;
  return (
    <div className="sticky top-[72px] z-20 -mx-4 mb-5 px-4 sm:mx-0 sm:px-0">
      <div className={cx('flex items-center gap-3 rounded-2xl border px-3 py-2 shadow-sm backdrop-blur transition-colors',
        complete ? 'border-emerald-200 bg-emerald-50/95 dark:border-emerald-500/30 dark:bg-emerald-950/80' : 'border-slate-200 bg-white/95 dark:border-slate-700 dark:bg-slate-900/90')}>
        <button type="button" onClick={togglePlay} aria-pressed={on} aria-label={on ? 'Pause timer' : 'Start timer'} title={on ? 'Pause' : 'Play'}
          className="pressable shrink-0 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500">
          <Ring value={Math.min(1, done / SECTION_GOAL_SECS)} size={38} stroke={4} color={complete ? 'stroke-emerald-500' : 'stroke-brand-500'}>
            {on ? <Pause size={14} className={complete ? 'text-emerald-600' : 'text-brand-500'} fill="currentColor" />
              : complete ? <Check size={15} className="text-emerald-600" />
              : <Play size={14} className="translate-x-px text-brand-500" fill="currentColor" />}
          </Ring>
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <span className={cx('font-mono text-lg font-bold tabular-nums', complete ? 'text-emerald-700 dark:text-emerald-300' : on ? 'text-slate-900 dark:text-white' : 'text-slate-400')} aria-live="off">
              {complete ? `+${fmtClock(-left)}` : fmtClock(left)}
            </span>
            <span className="truncate text-xs text-slate-500">{hint}</span>
          </div>
          <div className="mt-1 h-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div className={cx('h-full rounded-full transition-[width] duration-1000 ease-linear', complete ? 'bg-emerald-500' : 'bg-brand-500')} style={{ width: `${Math.min(100, (done / SECTION_GOAL_SECS) * 100)}%` }} />
          </div>
        </div>
        {!on && !complete && (
          <button type="button" onClick={togglePlay} className="pressable hidden shrink-0 items-center gap-1.5 rounded-xl bg-brand-500 px-3 py-1.5 text-sm font-semibold text-slate-950 hover:bg-brand-400 sm:inline-flex">
            <Play size={13} fill="currentColor" /> Play
          </button>
        )}
        <Link to="/" className="shrink-0 rounded-xl px-2 py-1 text-right hover:bg-slate-100 dark:hover:bg-slate-800" title="Daily goal: 2 hours">
          <div className={cx('text-sm font-bold tabular-nums', minutes >= DAILY_GOAL_MIN ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200')}>{Math.min(minutes, DAILY_GOAL_MIN)}/{DAILY_GOAL_MIN}</div>
          <div className="text-[11px] text-slate-500">min today</div>
        </Link>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Check, CheckCircle2, Flame, Gift, GraduationCap, Headphones, Info, Mic, PenLine, Target, X } from 'lucide-react';
import { useProgress } from '../store/progress';
import { useStudyTime } from '../store/timer';
import { UNIT_BY_ID } from '../content';
import { dueCards, estimatedLevel, nextUnit } from '../lib/adaptive';
import { streak } from '../lib/gamification';
import { PRIZE_STREAK, prizeBlocks } from '../lib/prize';
import { claimPrizes } from '../lib/cloud';
import { addDays, todayKey } from '../lib/dates';
import { DAILY_GOAL_MIN, SECTION_GOAL_SECS, dayMinutes, fmtClock } from '../lib/studyTime';
import { SKILLS } from '../components/SkillHeader';
import { LinkButton, cx } from '../components/ui';

const STEP_NAMES = ['Learn', 'Examples', 'Practice', 'Advanced practice', 'Test'];
const panel = 'rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900';

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? 'Good morning' : h < 20 ? 'Good afternoon' : 'Good evening';
}

function SectionTitle({ children, info, right }: { children: React.ReactNode; info?: string; right?: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h2 className="flex items-center gap-2 font-display text-xl font-bold text-slate-900 dark:text-white">
        {children}
        {info && <span title={info} className="cursor-help text-slate-400"><Info size={17} /></span>}
      </h2>
      {right}
    </div>
  );
}

export default function Dashboard() {
  const p = useProgress();
  const { secs, minutes } = useStudyTime();
  const st = streak(p, minutes);
  const level = estimatedLevel(p);
  const u = UNIT_BY_ID[nextUnit(p)];
  const step = Math.min(p.units[u.id]?.step ?? 0, 4);
  const started = (p.units[u.id]?.step ?? 0) > 0;
  const mistakes = Object.keys(p.mistakes).length;
  const cards = dueCards(p).length;

  return (
    <div className="flex flex-col gap-10">
      {/* Welcome */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-white">{greeting()} 👋</h1>
          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
            Tu nivel estimado: <span className="font-semibold text-brand-700 dark:text-brand-500">{level.label}</span>
            <span className="mx-1.5">·</span>
            You're on: <span className="font-semibold text-brand-700 dark:text-brand-500">Unit {u.n}</span>
          </p>
        </div>
      </div>

      <Topics />

      {/* Study + daily goal */}
      <div className="grid gap-4 min-[900px]:grid-cols-[1fr_1fr_0.9fr]">
        <div className="min-[900px]:col-span-2">
          <SectionTitle>Your study</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureCard
              tag="Grammar" title="Learn step by step" glow="lime" icon={GraduationCap}
              text={<>Unit {u.n}: <strong className="text-slate-900 dark:text-white">{u.title}</strong>. Step {step + 1} of 5 · {STEP_NAMES[step]}.</>}
              to={`/learn/${u.id}`} cta={started ? 'Continue' : 'Start'}
              extra={<div className="mt-4 flex gap-1">{STEP_NAMES.map((n, i) => <span key={n} className={cx('h-1.5 flex-1 rounded-full', i < step ? 'bg-brand-500' : i === step ? 'bg-brand-500/50' : 'bg-slate-200 dark:bg-slate-800')} />)}</div>}
            />
            <FeatureCard
              tag="Practice" title="Practise what you've learnt" glow="pink" icon={Target}
              text={<>{mistakes ? <><strong className="text-slate-900 dark:text-white">{mistakes} mistakes</strong> to fix</> : 'No mistakes to fix'}{cards ? <> and <strong className="text-slate-900 dark:text-white">{cards} words</strong> to review</> : ''}. Mixed exercises based on what you find hardest.</>}
              to={mistakes ? '/practice?mode=mistakes' : '/practice'} cta="Practise"
            />
          </div>
        </div>
        <div>
          <SectionTitle info="You need 2 hours of study every day (for example, 4 blocks of 30 minutes) for the day to count towards your streak." right={<LinkButton to="/progress" variant="secondary" size="sm" className="px-4 py-2">See progress</LinkButton>}>Daily goal</SectionTitle>
          <div className={cx(panel, 'flex flex-col p-4')}>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 font-display text-xl font-bold text-slate-900 dark:text-white">
                  <Flame size={19} className={st.activeToday ? 'text-orange-500' : 'text-slate-400'} /> {st.current} {st.current === 1 ? 'day' : 'days'}
                </div>
                <div className="text-xs text-slate-500">Streak · best: {st.best}</div>
              </div>
              <div className="text-right text-xs text-slate-500">{st.activeToday ? <span className="font-semibold text-brand-700 dark:text-brand-500">Done today!</span> : <>Still to go: <strong className="text-slate-800 dark:text-slate-200">{st.missingMin} min</strong></>}</div>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"><div className="h-full rounded-full bg-brand-500 transition-all duration-700" style={{ width: `${Math.min(100, (minutes / DAILY_GOAL_MIN) * 100)}%` }} /></div>
              <span className="text-xs tabular-nums text-slate-500">{Math.min(minutes, DAILY_GOAL_MIN)}/{DAILY_GOAL_MIN}</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {SKILLS.map(({ id, to, label }) => {
                const v = secs[id] ?? 0;
                const done = v >= SECTION_GOAL_SECS;
                return (
                  <Link key={id} to={to} className="pressable flex items-center justify-between rounded-lg bg-slate-100 px-2.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700" title={`${label}: ${fmtClock(v)} of 30:00`}>
                    {label}
                    {done ? <CheckCircle2 size={15} className="text-brand-600 dark:text-brand-500" /> : v > 0 ? <span className="tabular-nums text-slate-500">{Math.floor(v / 60)}m</span> : <CheckCircle2 size={15} className="text-slate-300 dark:text-slate-600" />}
                  </Link>
                );
              })}
            </div>
            <LinkButton to="/plan" variant="secondary" size="sm" className="mt-3 w-full">See study plan</LinkButton>
          </div>
        </div>
      </div>

      <Week />
    </div>
  );
}

const TOPICS = [
  { to: '/courses', label: 'Grammar', tag: 'All 145 units', text: 'The full syllabus, step by step.', cta: 'Open', icon: GraduationCap, glow: 'bg-brand-500', tint: 'text-brand-600 dark:text-brand-500', sec: 'grammar' },
  { to: '/vocabulary', label: 'Vocabulary', tag: 'Words that stick', text: 'Flashcards that come back just before you forget them.', cta: 'Learn', icon: Brain, glow: 'bg-violet-500', tint: 'text-violet-500', sec: 'vocabulary' },
  { to: '/listening', label: 'Listening', tag: 'Train your ear', text: 'Dictations and listening comprehension.', cta: 'Listen', icon: Headphones, glow: 'bg-sky-500', tint: 'text-sky-500', sec: 'listening' },
  { to: '/speaking', label: 'Speaking', tag: 'Talk with Jake', text: 'Pronunciation, shadowing and live conversation.', cta: 'Speak', icon: Mic, glow: 'bg-rose-500', tint: 'text-rose-500', sec: 'speaking' },
  { to: '/readings', label: 'Reading', tag: 'Real stories', text: 'Texts with comprehension questions.', cta: 'Read', icon: BookOpen, glow: 'bg-amber-500', tint: 'text-amber-500', sec: 'reading' },
  { to: '/writing', label: 'Writing', tag: 'Write with confidence', text: 'Letters, emails, essays and stories.', cta: 'Write', icon: PenLine, glow: 'bg-fuchsia-500', tint: 'text-fuchsia-500', sec: 'writing' },
] as const;

/** The six topics of the syllabus in one row of compact, wide cards; each one goes to its section. */
function Topics() {
  const { secs } = useStudyTime();
  return (
    <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 min-[900px]:grid-cols-6">
      {TOPICS.map(({ to, label, tag, cta, icon: Icon, glow, tint, sec }) => {
        const v = secs[sec] ?? 0;
        const min = Math.min(30, Math.floor(v / 60));
        return (
          <Link key={to} to={to} className={cx(panel, 'pressable group relative flex h-[118px] flex-col overflow-hidden p-3.5 transition hover:border-brand-500/50')}>
            <div className={cx('pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full opacity-30 blur-2xl', glow)} />
            <Icon size={48} strokeWidth={1.3} className={cx('pointer-events-none absolute -right-1 top-3 opacity-25', tint)} />
            <div className="relative truncate pr-8 text-[11px] text-slate-500 dark:text-slate-400">{tag}</div>
            <div className="relative font-display text-lg font-bold text-slate-900 dark:text-white">{label}</div>
            <div className="relative mt-auto flex items-center justify-between gap-2">
              <span className="truncate rounded-lg bg-brand-500 px-2.5 py-1 text-xs font-semibold text-slate-950 transition group-hover:bg-brand-400">{cta}</span>
              <span className="flex shrink-0 items-center gap-1 text-[11px] tabular-nums text-slate-500" title="Minutes studied today in this section (goal: 30)">
                {v >= SECTION_GOAL_SECS && <CheckCircle2 size={12} className="text-brand-600 dark:text-brand-500" />}
                {min}/30
              </span>
            </div>
          </Link>
        );
      })}
    </section>
  );
}

function FeatureCard({ tag, title, text, to, cta, icon: Icon, glow, extra }: {
  tag: string; title: string; text: React.ReactNode; to: string; cta: string; icon: typeof Brain; glow: 'lime' | 'pink'; extra?: React.ReactNode;
}) {
  return (
    <div className={cx(panel, 'relative flex min-h-[240px] flex-col overflow-hidden p-5')}>
      <div className={cx('pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full opacity-30 blur-3xl', glow === 'lime' ? 'bg-brand-500' : 'bg-fuchsia-500')} />
      <Icon size={96} strokeWidth={1.2} className={cx('pointer-events-none absolute -right-3 bottom-6 opacity-25', glow === 'lime' ? 'text-brand-600 dark:text-brand-500' : 'text-fuchsia-500')} />
      <div className="relative text-sm text-slate-600 dark:text-slate-300">EnglishPath <strong>{tag}</strong></div>
      <div className="relative mt-3 font-display text-xl font-bold text-slate-900 dark:text-white">{title}</div>
      <p className="relative mt-2 max-w-[17rem] text-sm text-slate-500 dark:text-slate-400">{text}</p>
      <div className="relative">{extra}</div>
      <div className="relative mt-auto pt-5">
        <LinkButton to={to} size="sm" className="px-5 py-2.5">{cta}</LinkButton>
      </div>
    </div>
  );
}

const PRIZES_SEEN = 'ep.prizesSeen';

/** Last 6 days, and the 7th square is the prize: a physical book for 7 days in a row reaching the daily goal. */
function Week() {
  const p = useProgress();
  const { minutes } = useStudyTime();
  const today = todayKey();
  const days = Array.from({ length: PRIZE_STREAK - 1 }, (_, i) => addDays(today, i - (PRIZE_STREAK - 2)));
  const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const st = streak(p, minutes);
  const won = st.current > 0 && st.current % PRIZE_STREAK === 0;
  const towards = won ? PRIZE_STREAK : st.current % PRIZE_STREAK;

  // prizes earned so far (today's minutes included); new ones are recorded for the owner
  const earned = prizeBlocks(p.days, { date: today, minutes }).length;
  const [seen, setSeen] = useState(() => { try { return Number(localStorage.getItem(PRIZES_SEEN) ?? earned); } catch { return earned; } });
  useEffect(() => { if (earned > 0) claimPrizes(); }, [earned]);
  const close = () => { setSeen(earned); try { localStorage.setItem(PRIZES_SEEN, String(earned)); } catch { /* ignore */ } };

  return (
    <section>
      <SectionTitle info="A day with 2 hours or more counts towards your streak (orange flame). 7 days in a row win a physical book.">Your week</SectionTitle>
      {earned > seen && (
        <div className="mb-3 flex items-center gap-3 rounded-xl border border-amber-400/40 bg-amber-400/10 px-4 py-3 text-sm text-slate-800 dark:text-slate-100">
          <Gift size={20} className="shrink-0 text-amber-500" />
          <span className="flex-1"><strong>You won a physical book!</strong> 7 days in a row. We'll contact you to deliver it.</span>
          <button onClick={close} aria-label="Close" className="rounded-lg p-1 text-slate-500 hover:text-slate-900 dark:hover:text-white"><X size={16} /></button>
        </div>
      )}
      <div className="grid grid-cols-7 gap-2">
        {days.map((k) => {
          const m = k === today ? minutes : dayMinutes(p.days[k]);
          const ok = m >= DAILY_GOAL_MIN;
          const [y, mo, d] = k.split('-').map(Number);
          return (
            <div key={k} className={cx(panel, 'flex flex-col items-center gap-1.5 px-1 py-3', k === today && 'border-brand-500/60 dark:border-brand-500/60')}>
              <span className="text-[11px] font-medium text-slate-500">{DOW[new Date(y, mo - 1, d).getDay()]} {d}</span>
              <span className={cx('flex h-9 w-9 items-center justify-center rounded-full', ok ? 'bg-orange-500 text-white' : m > 0 ? 'bg-orange-500/15 text-orange-500' : 'bg-slate-100 text-slate-400 dark:bg-slate-800')}>
                {ok ? <Flame size={16} /> : m > 0 ? <Check size={14} /> : <span className="text-xs">–</span>}
              </span>
              <span className="text-[11px] tabular-nums text-slate-500">{m} min</span>
            </div>
          );
        })}
        <div title="7 days in a row reaching the daily goal win a physical book, delivered in person"
          className={cx(panel, 'flex flex-col items-center gap-1.5 px-1 py-3', won ? 'border-amber-400/70 bg-amber-400/10 dark:border-amber-400/70 dark:bg-amber-400/10' : 'border-amber-400/30 dark:border-amber-400/30')}>
          <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400">Prize</span>
          <span className={cx('flex h-9 w-9 items-center justify-center rounded-full', won ? 'bg-amber-400 text-slate-950' : 'bg-amber-400/15 text-amber-500')}>
            <Gift size={16} />
          </span>
          <span className="text-center text-[11px] leading-tight text-slate-500"><span className="font-semibold text-slate-700 dark:text-slate-200">Physical book</span><br />{towards}/{PRIZE_STREAK} days</span>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { BookOpen, Brain, Check, CheckCircle2, Flame, Gift, GraduationCap, Headphones, Info, Mic, PenLine } from 'lucide-react';
import { useProgress } from '../store/progress';
import { useStudyTime } from '../store/timer';
import { UNIT_BY_ID } from '../content';
import { dueCards, estimatedLevel, nextUnit } from '../lib/adaptive';
import { streak } from '../lib/gamification';
import { STREAK_FOR_BOOK, booksEarned } from '../lib/books';
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
  const cards = dueCards(p).length;

  return (
    <div className="flex flex-col gap-10">
      {/* Welcome */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-white">{greeting()} 👋</h1>
          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
            Estimated level: <span className="font-semibold text-brand-700 dark:text-brand-500">{level.label}</span>
            <span className="mx-1.5">·</span>
            You're on: <span className="font-semibold text-brand-700 dark:text-brand-500">Unit {u.n}</span>
          </p>
        </div>
      </div>

      {/* Study + daily goal */}
      <div className="grid items-start gap-4 lg:grid-cols-[1fr_1fr_0.9fr]">
        <div className="lg:col-span-2">
          <SectionTitle>What do you want to study?</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureCard
              tag="Grammar" title="Learn step by step" glow="lime" icon={GraduationCap} secs={secs.grammar}
              text={<>Unit {u.n}: <strong className="text-slate-900 dark:text-white">{u.title}</strong>. Step {step + 1} of 5 · {STEP_NAMES[step]}.</>}
              to={`/learn/${u.id}`} cta={started ? 'Continue' : 'Start'}
              extra={<div className="mt-4 flex gap-1">{STEP_NAMES.map((n, i) => <span key={n} className={cx('h-1.5 flex-1 rounded-full', i < step ? 'bg-brand-500' : i === step ? 'bg-brand-500/50' : 'bg-slate-200 dark:bg-slate-800')} />)}</div>}
            />
            <FeatureCard
              tag="Vocabulary" title="Words that stick" glow="violet" icon={Brain} secs={secs.vocabulary}
              text={cards ? <><strong className="text-slate-900 dark:text-white">{cards} words</strong> to review today. Flashcards that come back just before you forget them.</> : 'Learn new words with flashcards that come back just before you forget them.'}
              to="/vocabulary" cta={cards ? 'Review' : 'Learn words'}
            />
            <FeatureCard
              tag="Listening" title="Train your ear" glow="sky" icon={Headphones} secs={secs.listening}
              text="Dictations and listening comprehension with natural voices, at your level."
              to="/listening" cta="Listen"
            />
            <FeatureCard
              tag="Speaking" title="Talk with Jake" glow="rose" icon={Mic} secs={secs.speaking}
              text="Pronunciation, shadowing and live voice conversations that correct you as you go."
              to="/speaking" cta="Speak"
            />
            <FeatureCard
              tag="Reading" title="Read real stories" glow="amber" icon={BookOpen} secs={secs.reading}
              text="Long stories with comprehension questions and the words you need."
              to="/readings" cta="Read"
            />
            <FeatureCard
              tag="Writing" title="Write with confidence" glow="fuchsia" icon={PenLine} secs={secs.writing}
              text="Emails, essays and stories, with a checklist to review what you wrote."
              to="/writing" cta="Write"
            />
          </div>
        </div>
        <div>
          <SectionTitle info="Study 1.5 hours a day, in the sections you choose (for example, 3 blocks of 30 minutes), for the day to count towards your streak." right={<Link to="/progress" className="pressable rounded-lg px-2.5 py-1 text-sm font-semibold text-brand-700 hover:bg-slate-100 dark:text-brand-500 dark:hover:bg-slate-800">See progress</Link>}>Daily goal</SectionTitle>
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
              <BookReward current={st.current} minutes={minutes} />
            </div>
            <LinkButton to="/plan" variant="secondary" size="sm" className="mt-3 w-full">See study plan</LinkButton>
          </div>
        </div>
      </div>

      <Week />
    </div>
  );
}

const GLOW = {
  lime: { bg: 'bg-brand-500', text: 'text-brand-600 dark:text-brand-500', dot: 'bg-brand-500' },
  violet: { bg: 'bg-violet-500', text: 'text-violet-500', dot: 'bg-violet-500' },
  sky: { bg: 'bg-sky-500', text: 'text-sky-500', dot: 'bg-sky-500' },
  rose: { bg: 'bg-rose-500', text: 'text-rose-500', dot: 'bg-rose-500' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-500', dot: 'bg-amber-500' },
  fuchsia: { bg: 'bg-fuchsia-500', text: 'text-fuchsia-500', dot: 'bg-fuchsia-500' },
} as const;

function FeatureCard({ tag, title, text, to, cta, icon: Icon, glow, extra, secs = 0 }: {
  tag: string; title: string; text: React.ReactNode; to: string; cta: string; icon: typeof Brain; glow: keyof typeof GLOW; extra?: React.ReactNode; secs?: number;
}) {
  const g = GLOW[glow];
  const min = Math.min(30, Math.floor(secs / 60));
  const done = secs >= SECTION_GOAL_SECS;
  return (
    <div className={cx(panel, 'relative flex min-h-[230px] flex-col overflow-hidden p-5')}>
      <div className={cx('pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full opacity-30 blur-3xl', g.bg)} />
      <Icon size={96} strokeWidth={1.2} className={cx('pointer-events-none absolute -right-3 bottom-6 opacity-25', g.text)} />
      <div className="relative text-sm text-slate-600 dark:text-slate-300">EnglishPath <strong>{tag}</strong></div>
      <div className="relative mt-3 font-display text-xl font-bold text-slate-900 dark:text-white">{title}</div>
      <p className="relative mt-2 max-w-[17rem] text-sm text-slate-500 dark:text-slate-400">{text}</p>
      <div className="relative">{extra}</div>
      <div className="relative mt-auto flex items-center gap-3 pt-5">
        <LinkButton to={to} size="sm" className="px-5 py-2.5">{cta}</LinkButton>
        <span className="flex items-center gap-1.5 text-xs tabular-nums text-slate-500" title="Minutes studied today in this section">
          {done ? <CheckCircle2 size={14} className="text-brand-600 dark:text-brand-500" /> : <span className={cx('h-1.5 w-1.5 rounded-full', min > 0 ? g.dot : 'bg-slate-300 dark:bg-slate-700')} />}
          {min}/30 min today
        </span>
      </div>
    </div>
  );
}

/** Last 7 days: which ones reached the 1.5 hours. */
function Week() {
  const p = useProgress();
  const { minutes } = useStudyTime();
  const today = todayKey();
  const days = Array.from({ length: 7 }, (_, i) => addDays(today, i - 6));
  const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <section>
      <SectionTitle info="A day with 1.5 hours or more counts towards your streak (orange flame).">Your week</SectionTitle>
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
      </div>
    </section>
  );
}

/** Weekly streak reward: a book every 7 days in a row (one chip, like the sections above). */
function BookReward({ current, minutes }: { current: number; minutes: number }) {
  const p = useProgress();
  const earned = booksEarned(p, minutes);
  const left = STREAK_FOR_BOOK - (current % STREAK_FOR_BOOK);
  return (
    <div className="col-span-2 flex items-center justify-between rounded-lg bg-slate-100 px-2.5 py-2 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200" title="Keep your streak 7 days in a row to get a book">
      <span className="flex items-center gap-1.5"><Gift size={14} className="text-amber-500" /> A book · weekly reward</span>
      <span className="tabular-nums text-slate-500">{left} {left === 1 ? 'day' : 'days'} left{earned > 0 && <> · 📚 {earned}</>}</span>
    </div>
  );
}

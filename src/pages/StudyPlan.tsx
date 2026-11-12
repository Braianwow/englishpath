import { Link } from 'react-router-dom';
import { BookOpen, Brain, Headphones, Layers, Check, ExternalLink } from 'lucide-react';
import { useProgress, toggleStudyBlock } from '../store/progress';
import { addDays, todayKey } from '../lib/dates';
import { VOCAB } from '../content/vocab';
import { UNIT_BY_ID } from '../content';
import { Card, PageHeader, Progress, SourceTag, cx } from '../components/ui';

/** Content of "PLAN DE ESTUDIO - INTERMEDIO.pdf" (2-hour B1–B2 study plan). */
const BLOCKS = [
  { id: 'grammar', title: 'Grammar', min: 30, icon: Layers, color: 'text-brand-600 bg-brand-50 dark:bg-brand-500/15',
    resources: ['English Grammar in Use', 'BBC 6 Minute Grammar'],
    rec: 'Do 1 to 3 English Grammar in Use topics a week. In your free time, watch a BBC 6 Minute Grammar video to practise any time.',
    to: '/courses', cta: 'Go to the units' },
  { id: 'vocab', title: 'Vocabulary', min: 30, icon: Brain, color: 'text-violet-600 bg-violet-50 dark:bg-violet-500/15',
    resources: ['Flashcards (Anki, Quizlet, paper…)'],
    rec: 'Spend 15–20 minutes a week reviewing your old cards and 10–15 minutes making new ones. Aim to learn between 20 and 60 new words a week.',
    to: '/vocabulary?tab=review', cta: 'Review cards' },
  { id: 'listening', title: 'Listening & Speaking', min: 30, icon: Headphones, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/15',
    resources: ['Speaking: Cambly group class', 'Shadowing 1 video/podcast a day', '1–3 “Learn English with TV series” videos'],
    rec: 'One Cambly group class a week (optional but highly recommended). Shadow one video or podcast a day: it only takes 5 minutes. Try to watch one Learn English with TV series video a day, before bed or when you wake up.',
    to: '/assistant', cta: 'Practise conversation' },
  { id: 'reading', title: 'Reading', min: 30, icon: BookOpen, color: 'text-amber-600 bg-amber-50 dark:bg-amber-500/15',
    resources: ['A book you like'],
    rec: 'Choose a book you like and read for at least 30 minutes a week. Read whenever you have free time: between classes, on the bus, at the doctor\'s, at the airport…',
    to: '/readings', cta: 'Platform reading texts' },
];

export default function StudyPlan() {
  const p = useProgress();
  const today = todayKey();
  const checked = p.studyPlanChecks[today] ?? [];
  // week stats (last 7 days, real data)
  const week = Array.from({ length: 7 }, (_, i) => addDays(today, i - 6));
  const weekStart = new Date(week[0]).getTime();
  const newWords = VOCAB.filter((w) => { const c = p.cards[w.id]; return c && c.lastSeen >= weekStart && c.reps + c.lapses <= 2 && c.reps > 0; }).length;
  const topics = Object.entries(p.units).filter(([id, u]) => UNIT_BY_ID[id] && u.lastStudied >= weekStart && u.step >= 2).length;
  const readingsWeek = Object.values(p.readings).filter((r) => r.at >= weekStart).length;
  const weekMinutes = week.reduce((a, d) => a + (p.days[d]?.minutes ?? 0), 0);

  return (
    <div>
      <PageHeader title="Study plan" subtitle="Pick the skills you want: 1.5 hours a day (for example, 3 blocks of 30 minutes) keeps your streak. The full B1–B2 routine from your PDF is below." actions={<SourceTag src="plan" />} />

      <div className="mb-6 grid gap-3 sm:grid-cols-4">
        <Card className="p-4"><div className="text-xs uppercase text-slate-500">Grammar topics (7 days)</div><div className="font-display text-2xl font-bold text-slate-900 dark:text-white">{topics}</div><div className="text-xs text-slate-500">Plan goal: 1–3 a week</div><Progress className="mt-2" value={topics / 3} /></Card>
        <Card className="p-4"><div className="text-xs uppercase text-slate-500">New words (7 days)</div><div className="font-display text-2xl font-bold text-slate-900 dark:text-white">{newWords}</div><div className="text-xs text-slate-500">Goal: 20–60 a week</div><Progress className="mt-2" value={newWords / 20} color="bg-violet-500" /></Card>
        <Card className="p-4"><div className="text-xs uppercase text-slate-500">Reading (7 days)</div><div className="font-display text-2xl font-bold text-slate-900 dark:text-white">{readingsWeek}</div><div className="text-xs text-slate-500">Goal: 30 min a week</div><Progress className="mt-2" value={readingsWeek / 2} color="bg-amber-500" /></Card>
        <Card className="p-4"><div className="text-xs uppercase text-slate-500">Time on the platform</div><div className="font-display text-2xl font-bold text-slate-900 dark:text-white">{weekMinutes} min</div><div className="text-xs text-slate-500">last 7 days</div></Card>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">Today</h2>
        <span className="text-sm text-slate-500">{checked.length}/4 bloques completados</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {BLOCKS.map((b) => {
          const done = checked.includes(b.id);
          const Icon = b.icon;
          return (
            <Card key={b.id} className={cx('flex flex-col gap-3 transition', done && 'ring-2 ring-emerald-400')}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={cx('rounded-xl p-2.5', b.color)}><Icon size={20} /></div>
                  <div><div className="font-semibold text-slate-900 dark:text-white">{b.title}</div><div className="text-sm text-slate-500">{b.min} minutes</div></div>
                </div>
                <button onClick={() => toggleStudyBlock(today, b.id)} className={cx('flex h-9 w-9 items-center justify-center rounded-xl border-2 transition', done ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300 text-transparent hover:border-emerald-400 dark:border-slate-600')} aria-label={done ? 'Mark as not done' : 'Mark as done'}>
                  <Check size={18} />
                </button>
              </div>
              <ul className="flex flex-wrap gap-1.5">{b.resources.map((r) => <li key={r} className="rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-medium dark:bg-slate-800">{r}</li>)}</ul>
              <p className="text-sm text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Recommendation: </strong>{b.rec}</p>
              <Link to={b.to} className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline">{b.cta} <ExternalLink size={14} /></Link>
            </Card>
          );
        })}
      </div>
      <p className="mt-6 text-sm text-slate-500">Cambly, BBC 6 Minute Grammar and “Learn English with TV series” are external resources mentioned in the plan; the platform doesn't include them, but you can mark the block as done when you use them.</p>
    </div>
  );
}

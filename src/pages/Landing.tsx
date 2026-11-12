import { useRef, useState } from 'react';
import {
  ArrowRight, BookOpen, Brain, Check, ClipboardCheck, Flame, GraduationCap, Headphones, LibraryBig, Mic, PenLine, Phone, Target, TrendingUp,
} from 'lucide-react';
import { AuthForm } from './AccountPage';
import { ThemeSwitch } from '../components/Layout';
import { Card } from '../components/ui';

/**
 * What visitors see before signing in: what EnglishPath is, and the form to create an account or sign in.
 * The lessons, exercises and progress are only for signed-in learners.
 */
const STATS = [
  { value: '145', label: 'grammar units' },
  { value: '2,400+', label: 'exercises' },
  { value: '6', label: 'skills every day' },
  { value: '1 s', label: 'voice replies from Jake' },
];

const FEATURES = [
  { icon: GraduationCap, title: 'A clear grammar path', text: '145 units in 16 modules, from B1 to B2. Short explanations, examples and a test at the end of each unit.' },
  { icon: Target, title: 'Practice that adapts', text: 'It remembers your mistakes and brings them back until you get them right, mixed with what you find hardest.' },
  { icon: Brain, title: 'Words that stick', text: 'Vocabulary by topic with spaced review: you see each word again just before you would forget it.' },
  { icon: Phone, title: 'Talk with Jake, live', text: 'A real-time voice call with an AI conversation partner. He follows the topic, corrects you and grades you at the end.' },
  { icon: BookOpen, title: 'Reading & listening', text: 'Long stories, dictations and listening exercises with natural voices, all at your level.' },
  { icon: PenLine, title: 'Writing & tests', text: 'Emails, essays and stories with checklists, plus mock exams to see where you stand.' },
];

const SKILLS = [
  { icon: GraduationCap, label: 'Grammar' }, { icon: Brain, label: 'Vocabulary' }, { icon: Headphones, label: 'Listening' },
  { icon: Mic, label: 'Speaking' }, { icon: BookOpen, label: 'Reading' }, { icon: PenLine, label: 'Writing' },
];

const STEPS = [
  { title: 'Create your free account', text: 'Just an email and a password. Your progress is saved to your account from day one.' },
  { title: 'Follow your daily plan', text: 'An hour and a half a day, in the skills you choose, with a timer and a streak to keep you going.' },
  { title: 'Watch yourself improve', text: 'XP, accuracy, mastered units and your estimated level, on any device you sign in from.' },
];

export default function Landing() {
  const [mode, setMode] = useState<'login' | 'register'>('register');
  const formRef = useRef<HTMLDivElement>(null);
  const goToForm = (m: 'login' | 'register') => {
    setMode(m);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* top bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <LibraryBig size={26} strokeWidth={2.2} className="text-brand-600 dark:text-brand-500" />
            <span className="font-display text-[15px] font-extrabold uppercase tracking-[0.14em] text-slate-900 dark:text-white">English<span className="text-brand-600 dark:text-brand-500">Path</span></span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button onClick={() => goToForm('login')} className="pressable whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">Sign in</button>
            <button onClick={() => goToForm('register')} className="pressable hidden whitespace-nowrap rounded-xl bg-brand-500 px-3.5 py-2 text-sm font-semibold text-slate-950 hover:bg-brand-400 sm:block">Get started</button>
            <ThemeSwitch />
          </div>
        </div>
      </header>

      <main>
        {/* hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl dark:bg-brand-500/10" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:py-20">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300">
                <Flame size={13} /> For Spanish speakers · B1 → B2
              </span>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                Reach B2 English,<br /><span className="text-brand-600 dark:text-brand-500">one step a day.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
                Grammar, vocabulary, reading, listening, writing and real conversations — in one plan that adapts to you and keeps your progress safe in your account.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {SKILLS.map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                    <Icon size={15} className="text-brand-600 dark:text-brand-500" /> {label}
                  </span>
                ))}
              </div>
              <dl className="mt-8 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-2xl font-extrabold text-slate-900 dark:text-white">{s.value}</dd>
                    <dd className="text-xs text-slate-500">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div ref={formRef} className="animate-fade-up lg:justify-self-end">
              <Card className="w-full p-6 shadow-xl shadow-slate-900/5 sm:p-7 lg:w-[420px] dark:shadow-black/30">
                <div className="mb-5">
                  <div className="font-display text-xl font-bold text-slate-900 dark:text-white">{mode === 'register' ? 'Start learning for free' : 'Welcome back'}</div>
                  <div className="text-sm text-slate-500">{mode === 'register' ? 'Create your account in seconds.' : 'Sign in to continue where you left off.'}</div>
                </div>
                <AuthForm key={mode} initial={mode} />
              </Card>
            </div>
          </div>
        </section>

        {/* features */}
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Everything you need to level up</h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">No jumping between apps: every skill, every day, in the same place.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="p-5 transition hover:-translate-y-0.5 hover:border-brand-500/40">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-700 dark:text-brand-400"><Icon size={20} /></div>
                <div className="font-semibold text-slate-900 dark:text-white">{title}</div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{text}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Jake */}
        <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-slate-900 p-7 sm:p-10 lg:grid-cols-2 dark:bg-slate-900/80 dark:ring-1 dark:ring-slate-800">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/15 px-2.5 py-1 text-xs font-semibold text-rose-300"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400" /> LIVE</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white">Lose the fear of speaking</h2>
              <p className="mt-3 text-slate-300">Call Jake and just talk, like on the phone. He answers out loud in about a second, keeps the conversation going and slips in a quick correction when you make a mistake. At the end you get a grade and the words to learn.</p>
              <ul className="mt-5 flex flex-col gap-2 text-sm text-slate-200">
                {['Seven topics: travel, tech, celebrities, Argentina and more', 'Spoken corrections, never boring', 'A score for fluency, grammar and vocabulary'].map((t) => (
                  <li key={t} className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-brand-400" /> {t}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-slate-950/60 p-5 ring-1 ring-white/5">
              <div className="flex items-start gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-lg">😏</div>
                <div className="rounded-2xl rounded-tl-sm bg-slate-800 px-4 py-3 text-sm text-slate-100">Hey trouble! If you could hop on a plane right now, where are we going?</div>
              </div>
              <div className="self-end rounded-2xl rounded-tr-sm bg-brand-500 px-4 py-3 text-sm text-slate-950">I go to Brazil last summer and it was amazing.</div>
              <div className="flex items-start gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-lg">😏</div>
                <div className="rounded-2xl rounded-tl-sm bg-slate-800 px-4 py-3 text-sm text-slate-100">Brazil? Pure vibes. Quick tip: it's <strong className="text-brand-400">"I went"</strong>, not "I go". Best part of the trip?</div>
              </div>
            </div>
          </div>
        </section>

        {/* how it works */}
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">How it works</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 font-display text-sm font-extrabold text-slate-950">{i + 1}</div>
                <div className="mt-3 font-semibold text-slate-900 dark:text-white">{s.title}</div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* final call to action */}
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <div className="flex flex-col items-start gap-5 rounded-3xl border border-brand-500/30 bg-brand-500/10 p-7 sm:flex-row sm:items-center sm:p-10">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-brand-700 dark:text-brand-400"><TrendingUp size={18} /><ClipboardCheck size={18} /></div>
              <h2 className="mt-2 font-display text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">Your B2 starts today.</h2>
              <p className="mt-1 text-slate-600 dark:text-slate-300">Free, no card, and your progress follows you to any device.</p>
            </div>
            <button onClick={() => goToForm('register')} className="pressable inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-brand-500/25 hover:bg-brand-400">
              Create free account <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-slate-800">EnglishPath · Learn English from B1 to B2</footer>
    </div>
  );
}

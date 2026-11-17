import { useRef, useState } from 'react';
import { LibraryBig } from 'lucide-react';
import { AuthForm } from './AccountPage';
import { ThemeSwitch } from '../components/Layout';

/**
 * What visitors see before signing in: what EnglishPath is (shown with real screenshots of the app),
 * and the form to create an account or sign in. The lessons and progress are only for signed-in learners.
 */
const STATS = [
  { value: '145', label: 'grammar units' },
  { value: '2,400+', label: 'exercises' },
  { value: '6', label: 'skills every day' },
  { value: '1 s', label: 'voice replies from Jake' },
];

const FEATURES = [
  { title: 'A clear grammar path', text: '145 units in 16 modules, from B1 to B2. Short explanations, examples and a test at the end of each unit.' },
  { title: 'Practice that adapts', text: 'It remembers your mistakes and brings them back until you get them right, mixed with what you find hardest.' },
  { title: 'Words that stick', text: 'Vocabulary by topic with spaced review: you see each word again just before you would forget it.' },
  { title: 'Talk with Jake, live', text: 'A real-time voice call with an AI conversation partner. He follows the topic, corrects you and grades you at the end.' },
  { title: 'Reading & listening', text: 'Long stories, dictations and listening exercises with natural voices, all at your level.' },
  { title: 'Writing & tests', text: 'Emails, essays and stories with checklists, plus mock exams to see where you stand.' },
];

/** A real screenshot of the app, framed like a window. */
function Shot({ src, alt, className, eager }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <figure className={`overflow-hidden rounded-lg border border-slate-200 bg-slate-900 shadow-2xl shadow-slate-900/20 dark:border-slate-800 dark:shadow-black/50 ${className ?? ''}`}>
      <img src={src} alt={alt} width={1280} height={800} loading={eager ? 'eager' : 'lazy'} className="block h-auto w-full" />
    </figure>
  );
}

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
            <button onClick={() => goToForm('login')} className="pressable whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">Sign in</button>
            <button onClick={() => goToForm('register')} className="pressable hidden whitespace-nowrap rounded-md bg-brand-500 px-3.5 py-2 text-sm font-semibold text-slate-950 hover:bg-brand-400 sm:block">Get started</button>
            <ThemeSwitch />
          </div>
        </div>
      </header>

      <main>
        {/* hero: left-aligned text and the sign-up form, then the real app right away */}
        <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:pt-16">
          <div className="grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div className="animate-fade-up">
              <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                English for Spanish speakers,<br />from B1 to <span className="text-brand-600 dark:text-brand-500">B2.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
                Grammar, vocabulary, reading, listening, writing and real conversations — in one plan that adapts to you and keeps your progress safe in your account.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500">Grammar · Vocabulary · Listening · Speaking · Reading · Writing</p>
              <dl className="mt-8 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 border-t border-slate-200 pt-6 sm:grid-cols-4 dark:border-slate-800">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-2xl font-extrabold text-slate-900 dark:text-white">{s.value}</dd>
                    <dd className="text-xs text-slate-500">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div ref={formRef} className="animate-fade-up w-full rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-7 lg:justify-self-end dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30">
              <div className="mb-5">
                <div className="font-display text-xl font-bold text-slate-900 dark:text-white">{mode === 'register' ? 'Start learning for free' : 'Welcome back'}</div>
                <div className="text-sm text-slate-500">{mode === 'register' ? 'Create your account in seconds.' : 'Sign in to continue where you left off.'}</div>
              </div>
              <AuthForm key={mode} initial={mode} />
            </div>
          </div>

          {/* the product, right away (offset to the right, cut by the next section) */}
          <div className="relative mt-12 lg:ml-24">
            <Shot src="screens/home.png" alt="The EnglishPath home page: the six skills, your current unit, your daily goal and your week" eager />
            <p className="mt-3 text-xs text-slate-500">Your home page: the six skills, the unit you're on, your daily goal and your week.</p>
          </div>
        </section>

        {/* features: a plain two-column list, no boxes */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Everything you need to level up</h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">No jumping between apps: every skill, every day, in the same place.</p>
          <dl className="mt-10 grid gap-x-12 sm:grid-cols-2">
            {FEATURES.map(({ title, text }) => (
              <div key={title} className="border-t border-slate-200 py-5 dark:border-slate-800">
                <dt className="font-display text-lg font-bold text-slate-900 dark:text-white">{title}</dt>
                <dd className="mt-1 text-sm text-slate-600 dark:text-slate-400">{text}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Jake */}
        <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div className="grid items-center gap-8 overflow-hidden rounded-lg bg-slate-900 p-7 sm:p-10 lg:grid-cols-2 dark:bg-slate-900/80 dark:ring-1 dark:ring-slate-800">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-400"><span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> Live voice call</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white">Lose the fear of speaking</h2>
              <p className="mt-3 text-slate-300">Call Jake and just talk, like on the phone. He answers out loud in about a second, keeps the conversation going and slips in a quick correction when you make a mistake. At the end you get a grade and the words to learn.</p>
              <ul className="mt-5 flex flex-col gap-2 text-sm text-slate-200">
                {['Seven topics: travel, tech, celebrities, Argentina and more', 'Spoken corrections, never boring', 'A score for fluency, grammar and vocabulary'].map((t) => (
                  <li key={t} className="flex items-start gap-2"><span className="mt-2 h-px w-3 shrink-0 bg-brand-400" /> {t}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 rounded-md bg-slate-950/60 p-5 ring-1 ring-white/5">
              <div className="flex items-start gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-lg">😏</div>
                <div className="rounded-lg rounded-tl-sm bg-slate-800 px-4 py-3 text-sm text-slate-100">Hey trouble! If you could hop on a plane right now, where are we going?</div>
              </div>
              <div className="self-end rounded-lg rounded-tr-sm bg-brand-500 px-4 py-3 text-sm text-slate-950">I go to Brazil last summer and it was amazing.</div>
              <div className="flex items-start gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-lg">😏</div>
                <div className="rounded-lg rounded-tl-sm bg-slate-800 px-4 py-3 text-sm text-slate-100">Brazil? Pure vibes. Quick tip: it's <strong className="text-brand-400">"I went"</strong>, not "I go". Best part of the trip?</div>
              </div>
            </div>
          </div>
        </section>

        {/* how a day of study looks, with the real app */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">A day on EnglishPath</h2>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <Shot src="screens/lesson.png" alt="A grammar lesson: the unit's learning goals and its five steps" />
              <p className="mt-3 text-xs text-slate-500">A grammar unit: learn, see examples, practise, then pass its test.</p>
            </div>
            <div className="flex flex-col gap-6 lg:pt-6">
              <p className="text-slate-600 dark:text-slate-300">
                You open the unit you're on and go through it in five steps, with a timer running for the skill you're practising.
                Mistakes go to your review list and come back until you get them right.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Then you pick what else to study today — words, a story, a dictation or a call with Jake — until you reach your daily goal and keep your streak.
                Everything is saved to your account, on any device.
              </p>
              <Shot src="screens/jake.png" alt="The Speaking section: choose a topic to talk about with Jake" className="lg:-ml-16" />
            </div>
          </div>
        </section>

        {/* final call to action */}
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <div className="flex flex-col items-start gap-5 border-t border-slate-200 pt-10 sm:flex-row sm:items-center dark:border-slate-800">
            <div className="flex-1">
              <h2 className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">Your B2 starts today.</h2>
              <p className="mt-1 text-slate-600 dark:text-slate-300">Free, no card, and your progress follows you to any device.</p>
            </div>
            <button onClick={() => goToForm('register')} className="pressable inline-flex items-center gap-2 rounded-md bg-brand-500 px-5 py-3 font-semibold text-slate-950 hover:bg-brand-400">
              Create free account →
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-slate-800">EnglishPath · Learn English from B1 to B2</footer>
    </div>
  );
}

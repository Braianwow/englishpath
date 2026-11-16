import { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {ClipboardCheck, Flame, GraduationCap, Home, LibraryBig, MessageCircle, Moon, Settings, Sun} from 'lucide-react';
import { cx } from './ui';
import { useProgress, useSettings } from '../store/progress';
import { useCloud } from '../lib/cloud';
import { CircleUserRound, LogIn, ShieldCheck } from 'lucide-react';
import { streak } from '../lib/gamification';
import { toggleThemeAnimated } from '../lib/theme';
import Toasts from './Toasts';
import { SectionTimer } from './StudyTimer';
import { SKILLS } from './SkillHeader';
import { useStudyTime, useStudyTimer } from '../store/timer';
import { sectionFor } from '../lib/studyTime';
import { useHomeZoom } from '../lib/zoom';


/** Top bar (and the phone bottom bar): Home · Learn · Assistant · Tests · Settings. */
const TOP = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/courses', label: 'Learn', icon: GraduationCap },
];
const TOP_BOX = [
  { to: '/assistant', label: 'Assistant', icon: MessageCircle },
  { to: '/exams', label: 'Tests', icon: ClipboardCheck },
  { to: '/settings', label: 'Settings', icon: Settings },
];


function Brand() {
  return (
    <NavLink to="/" aria-label="EnglishPath: go to home" title="Go to home" className="pressable -m-1.5 flex items-center gap-2.5 rounded-xl p-1.5 transition hover:opacity-80">
      <LibraryBig size={26} strokeWidth={2.2} className="text-brand-600 dark:text-brand-500" />
      <span className="font-display text-[15px] font-extrabold uppercase tracking-[0.14em] text-slate-900 dark:text-white">English<span className="text-brand-600 dark:text-brand-500">Path</span></span>
    </NavLink>
  );
}

/** Animated sun/moon switch. */
export function ThemeSwitch() {
  useSettings(); // re-render when the theme changes
  const dark = document.documentElement.classList.contains('dark');
  return (
    <button
      onClick={(e) => toggleThemeAnimated(e)}
      role="switch" aria-checked={dark} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative h-8 w-14 shrink-0 rounded-full bg-slate-200 transition-colors duration-500 dark:bg-slate-800"
    >
      <span className={cx(
        'absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow transition-all duration-500 [transition-timing-function:cubic-bezier(.34,1.56,.64,1)] dark:bg-slate-950',
        dark ? 'translate-x-6 rotate-[360deg]' : 'translate-x-0 rotate-0',
      )}>
        {dark ? <Moon size={14} className="text-brand-400" /> : <Sun size={14} className="text-amber-500" />}
      </span>
    </button>
  );
}

/** "Sign in" or the account icon (only on the site that has accounts). */
function AccountButton() {
  const c = useCloud();
  if (!c.available) return null;
  return c.email ? (
    <NavLink to="/account" title={`Signed in as ${c.email}`} aria-label="Your account"
      className="pressable flex h-9 w-9 items-center justify-center rounded-xl text-brand-600 hover:bg-slate-100 dark:text-brand-300 dark:hover:bg-slate-800">
      <CircleUserRound size={20} />
    </NavLink>
  ) : (
    <NavLink to="/account" title="Sign in" aria-label="Sign in"
      className="pressable inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl px-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 xl:px-3 dark:text-slate-300 dark:hover:bg-slate-800">
      <LogIn size={18} /> <span className="hidden sm:inline lg:hidden xl:inline">Sign in</span>
    </NavLink>
  );
}

function StreakPill() {
  const p = useProgress();
  const { minutes } = useStudyTime();
  const st = streak(p, minutes);
  return (
    <NavLink to="/" className={cx('pressable inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-semibold', st.activeToday ? 'bg-orange-50 text-orange-600 dark:bg-orange-500/15 dark:text-orange-300' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400')}
      title={st.activeToday ? 'Streak: you have done your 2 hours today' : `Streak: ${st.missingMin} min left today`}>
      <Flame size={15} /> {st.current}
    </NavLink>
  );
}

function TopLink({ to, label, icon: Icon, end }: { to: string; label: string; icon: typeof Home; end?: boolean }) {
  return (
    <NavLink
      to={to} end={end}
      className={({ isActive }) => cx(
        'pressable relative flex h-16 items-center gap-2 whitespace-nowrap px-2.5 text-sm font-semibold transition-colors',
        isActive ? 'text-slate-900 after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:rounded-full after:bg-brand-500 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
      )}
    >
      <Icon size={16} /> {label}
    </NavLink>
  );
}

export default function Layout() {
  const loc = useLocation();
  const cloud = useCloud();
  useEffect(() => { window.scrollTo(0, 0); }, [loc.pathname]);
  useHomeZoom(loc.pathname === '/'); // only the home page is shown bigger
  const section = sectionFor(loc.pathname);
  useStudyTimer(section, SKILLS.find((s) => s.id === section)?.label ?? '');

  return (
    <div className="min-h-screen">
      {/* Top navigation bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90">
        <div className="mx-auto flex h-16 max-w-5xl items-center gap-4 px-4 sm:px-6">
          <Brand />
          <span className="hidden h-6 w-px bg-slate-200 min-[900px]:block dark:bg-slate-800" />
          <nav className="hidden items-center min-[900px]:flex">
            {TOP.map((m) => <TopLink key={m.to} {...m} />)}
            {TOP_BOX.map((m) => <TopLink key={m.to} {...m} />)}
            {cloud.admin && <TopLink to="/admin" label="Admin" icon={ShieldCheck} />}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <StreakPill />
            <AccountButton />
            <ThemeSwitch />
          </div>
        </div>
      </header>

      <main className="pb-24 min-[900px]:pb-0">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:py-10 animate-fade-up" key={loc.pathname}>
          {section && <SectionTimer section={section} />}
          <Outlet />
        </div>
      </main>

      {/* Phone bottom bar: the same buttons as the top bar */}
      <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur min-[900px]:hidden dark:border-slate-800 dark:bg-slate-950/95">
        {[...TOP, ...TOP_BOX].map(({ to, label, icon: Icon, end }: { to: string; label: string; icon: typeof Home; end?: boolean }) => (
          <NavLink key={to} to={to} end={end} className={({ isActive }) => cx('pressable flex flex-col items-center gap-0.5 py-2 text-center text-[11px] leading-tight font-medium', isActive ? 'text-brand-700 dark:text-brand-400' : 'text-slate-500')}>
            <Icon size={21} /> {label}
          </NavLink>
        ))}
      </nav>

      <Toasts />
    </div>
  );
}

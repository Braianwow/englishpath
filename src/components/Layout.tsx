import { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  BookOpen, Brain, CalendarCheck, ClipboardCheck, Flame, GraduationCap, Home, Layers, LayoutGrid, LibraryBig,
  MessageCircle, Moon, MoreHorizontal, NotebookPen, Settings, Sun, Target, TrendingUp, X, BookText,
} from 'lucide-react';
import { cx } from './ui';
import { useProgress, useSettings } from '../store/progress';
import { streak } from '../lib/gamification';
import { toggleThemeAnimated } from '../lib/theme';
import Toasts from './Toasts';
import { SectionTimer } from './StudyTimer';
import { SKILLS } from './SkillHeader';
import { useStudyTime, useStudyTimer } from '../store/timer';
import { sectionFor } from '../lib/studyTime';

/** The five things a learner does every day. Everything else lives under "More". */
const MAIN = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/courses', label: 'Learn', icon: GraduationCap },
  { to: '/practice', label: 'Practise', icon: Target },
  { to: '/vocabulary', label: 'Words', icon: Brain },
  { to: '/my-words', label: 'My words', icon: NotebookPen },
  { to: '/progress', label: 'Progress', icon: TrendingUp },
];

const MORE = [
  { to: '/exams', label: 'Tests', icon: ClipboardCheck },
  { to: '/grammar', label: 'Grammar sheets', icon: Layers },
  { to: '/workbook', label: 'Objective First', icon: NotebookPen },
  { to: '/readings', label: 'Reading', icon: BookOpen },
  { to: '/assistant', label: 'Assistant', icon: MessageCircle },
  { to: '/plan', label: 'Study plan', icon: CalendarCheck },
  { to: '/reference', label: 'Reference', icon: BookText },
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

/** Desktop "apps" menu with the secondary pages. */
function MoreMenu({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const loc = useLocation();
  useEffect(() => setOpen(false), [loc.pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc); };
  }, [open]);
  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="More sections" title="More sections"
        className={cx('pressable flex h-9 w-9 items-center justify-center rounded-xl transition', open || active ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white' : 'text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800')}>
        <LayoutGrid size={18} />
      </button>
      {open && (
        <div className="absolute right-0 top-12 z-50 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl animate-fade-up dark:border-slate-700 dark:bg-slate-900">
          <div className="grid grid-cols-2 gap-1">
            {MORE.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} className={({ isActive }) => cx('pressable flex flex-col items-start gap-1.5 rounded-xl p-3 text-sm font-medium transition',
                isActive ? 'bg-brand-50 text-brand-800 dark:bg-brand-500/10 dark:text-brand-300' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800')}>
                <Icon size={18} className="text-brand-600 dark:text-brand-500" /> {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Layout() {
  const loc = useLocation();
  const inMore = MORE.some((m) => loc.pathname.startsWith(m.to));
  const inSheet = inMore || loc.pathname.startsWith('/progress');
  const [sheet, setSheet] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); setSheet(false); }, [loc.pathname]);
  const section = sectionFor(loc.pathname);
  useStudyTimer(section, SKILLS.find((s) => s.id === section)?.label ?? '');

  return (
    <div className="min-h-screen">
      {/* Top navigation bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90">
        <div className="mx-auto flex h-16 max-w-5xl items-center gap-4 px-4 sm:px-6">
          <Brand />
          <span className="hidden h-6 w-px bg-slate-200 lg:block dark:bg-slate-800" />
          <nav className="hidden items-center lg:flex">
            {MAIN.map((m) => <TopLink key={m.to} {...m} />)}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <StreakPill />
            <div className="hidden lg:block"><MoreMenu active={inMore} /></div>
            <ThemeSwitch />
          </div>
        </div>
      </header>

      <main className="pb-24 lg:pb-0">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:py-10 animate-fade-up" key={loc.pathname}>
          {section && <SectionTimer section={section} />}
          <Outlet />
        </div>
      </main>

      {/* Mobile bottom tab bar */}
      <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-6 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden dark:border-slate-800 dark:bg-slate-950/95">
        {MAIN.filter((m) => m.to !== '/progress').map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end} className={({ isActive }) => cx('pressable flex flex-col items-center gap-0.5 py-2 text-center text-[11px] leading-tight font-medium', isActive ? 'text-brand-700 dark:text-brand-400' : 'text-slate-500')}>
            <Icon size={21} /> {label}
          </NavLink>
        ))}
        <button onClick={() => setSheet(true)} className={cx('pressable flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium', inSheet ? 'text-brand-700 dark:text-brand-400' : 'text-slate-500')}>
          <MoreHorizontal size={21} /> More
        </button>
      </nav>

      {/* Mobile "More" sheet */}
      {sheet && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-slate-950/50 animate-[fade-in_.2s_ease-out]" onClick={() => setSheet(false)} />
          <div className="absolute inset-x-0 bottom-0 rounded-t-3xl bg-white p-4 pb-8 shadow-2xl animate-[sheet-up_.3s_cubic-bezier(.2,.8,.2,1)] dark:bg-slate-900">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="font-semibold text-slate-900 dark:text-white">More</span>
              <button onClick={() => setSheet(false)} className="pressable rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Close"><X size={20} /></button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[MAIN.find((m) => m.to === '/progress')!, ...MORE].map(({ to, label, icon: Icon }) => (
                <NavLink key={to} to={to} className="pressable flex items-center gap-2.5 rounded-2xl bg-slate-50 p-3 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <Icon size={18} className="text-brand-600 dark:text-brand-500" /> {label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
      <Toasts />
    </div>
  );
}

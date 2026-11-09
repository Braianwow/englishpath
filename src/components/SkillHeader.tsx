import { NavLink } from 'react-router-dom';
import { BookOpen, Brain, Ear, Layers, Mic, PenLine } from 'lucide-react';
import { cx } from './ui';

/** The six study areas from the 2-hour study plan, as a single selector. */
export const SKILLS = [
  { id: 'grammar', to: '/courses', label: 'Grammar', icon: Layers, desc: 'All 145 units, step by step.' },
  { id: 'vocabulary', to: '/vocabulary', label: 'Vocabulary', icon: Brain, desc: 'Flashcards with spaced repetition.' },
  { id: 'listening', to: '/listening', label: 'Listening', icon: Ear, desc: 'Dictation and listening comprehension.' },
  { id: 'speaking', to: '/speaking', label: 'Speaking', icon: Mic, desc: 'Pronunciation, shadowing and conversation.' },
  { id: 'reading', to: '/readings', label: 'Reading', icon: BookOpen, desc: 'Texts with comprehension questions.' },
  { id: 'writing', to: '/writing', label: 'Writing', icon: PenLine, desc: 'Letters, emails, essays and stories.' },
] as const;

export type SkillId = (typeof SKILLS)[number]['id'];

export function SkillTabs({ active }: { active: SkillId }) {
  return (
    <div className="-mx-4 mb-6 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
      <div className="inline-flex gap-1 rounded-2xl bg-slate-100 p-1 dark:bg-slate-800/70">
        {SKILLS.map(({ id, to, label, icon: Icon }) => (
          <NavLink key={id} to={to} className={cx('pressable inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium',
            active === id ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200')}>
            <Icon size={15} /> {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default function SkillHeader({ skill }: { skill: SkillId }) {
  const s = SKILLS.find((x) => x.id === skill)!;
  return (
    <>
      <SkillTabs active={skill} />
      <h1 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">{s.label}</h1>
      <p className="mb-6 mt-1 text-slate-500">{s.desc}</p>
    </>
  );
}

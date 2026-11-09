import { Link } from 'react-router-dom';
import { CheckCircle2, CircleDashed, Clock3, AlertCircle } from 'lucide-react';
import type { GrammarUnit, UnitProgress } from '../types';
import { Badge, Progress } from './ui';

export function unitStatus(up?: UnitProgress): { label: string; tone: 'slate' | 'brand' | 'green' | 'amber' | 'rose'; icon: JSX.Element } {
  if (!up || (up.step === 0 && up.attempts === 0)) return { label: 'New', tone: 'slate', icon: <CircleDashed size={18} className="text-slate-400" /> };
  if (up.completed && up.nextReview && up.nextReview <= Date.now()) return { label: 'Review', tone: 'amber', icon: <Clock3 size={18} className="text-amber-500" /> };
  if (up.completed) return { label: `Passed ${up.best}%`, tone: 'green', icon: <CheckCircle2 size={18} className="text-emerald-500" /> };
  if (up.testAttempts > 0) return { label: `Best score ${up.best}%`, tone: 'rose', icon: <AlertCircle size={18} className="text-rose-500" /> };
  return { label: `Step ${Math.min(up.step + 1, 5)}/5`, tone: 'brand', icon: <CircleDashed size={18} className="text-brand-500" /> };
}

export default function UnitRow({ u, up }: { u: GrammarUnit; up?: UnitProgress }) {
  const s = unitStatus(up);
  return (
    <Link to={`/learn/${u.id}`} className="group flex items-center gap-3 rounded-xl border border-transparent p-3 transition hover:border-slate-200 hover:bg-white dark:hover:border-slate-700 dark:hover:bg-slate-900">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 font-display text-sm font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{u.n}</div>
      <div className="min-w-0 flex-1">
        <div className="truncate font-medium text-slate-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">{u.title}</div>
        <div className="flex items-center gap-2 text-sm text-slate-500"><span className="truncate">{u.tags.slice(0, 2).join(' · ')}</span></div>
        {up && up.attempts > 0 && <Progress value={up.mastery} className="mt-1.5 h-1" color="bg-emerald-500" />}
      </div>
      <div className="hidden sm:block"><Badge tone={s.tone}>{s.label}</Badge></div>
      <div className="sm:hidden">{s.icon}</div>
    </Link>
  );
}

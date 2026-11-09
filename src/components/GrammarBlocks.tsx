import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ArrowLeftRight, Eye, EyeOff } from 'lucide-react';
import type { Example, GrammarUnit } from '../types';
import { UNIT_BY_ID } from '../content';
import { SpeakBtn } from './ExerciseView';
import { cx } from './ui';
import { useSettings, updateSettings } from '../store/progress';

export function FormTable({ rows }: { rows: string[][] }) {
  const [head, ...body] = rows;
  return (
    <div className="overflow-x-auto">
      <table className="table-clean">
        <thead><tr>{head.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
        <tbody>
          {body.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j} className={j === 0 ? 'font-medium text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ExampleList({ items, tone }: { items: Example[]; tone: 'aff' | 'neg' | 'q' }) {
  const { showTranslations } = useSettings();
  const color = tone === 'aff' ? 'border-emerald-400' : tone === 'neg' ? 'border-rose-400' : 'border-sky-400';
  if (!items.length) return <div className="text-sm text-slate-500">Esta unidad no tiene ejemplos de este tipo.</div>;
  return (
    <ul className="flex flex-col gap-2">
      {items.map((e, i) => (
        <li key={i} className={cx('flex items-start justify-between gap-2 rounded-xl border-l-4 bg-slate-50 px-4 py-3 dark:bg-slate-800/50', color)}>
          <div>
            <div className="text-[17px] font-medium text-slate-900 dark:text-white">{e.en}</div>
            {e.es && showTranslations && <div className="mt-0.5 text-sm text-slate-500">{e.es}</div>}
          </div>
          <SpeakBtn text={e.en} />
        </li>
      ))}
    </ul>
  );
}

export function ExamplesTabs({ u }: { u: GrammarUnit }) {
  const [tab, setTab] = useState<'aff' | 'neg' | 'q'>('aff');
  const { showTranslations } = useSettings();
  const tabs = [
    { id: 'aff' as const, label: 'Afirmativas', n: u.aff.length },
    { id: 'neg' as const, label: 'Negativas', n: u.neg.length },
    { id: 'q' as const, label: 'Preguntas', n: u.q.length },
  ];
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} className={cx('rounded-lg px-3 py-1.5 text-sm font-medium transition', tab === t.id ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200')}>
              {t.label} <span className="text-xs text-slate-400">{t.n}</span>
            </button>
          ))}
        </div>
        <button onClick={() => updateSettings({ showTranslations: !showTranslations })} className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
          {showTranslations ? <EyeOff size={15} /> : <Eye size={15} />} {showTranslations ? 'Ocultar traducción' : 'Mostrar traducción'}
        </button>
      </div>
      <ExampleList items={u[tab]} tone={tab} />
    </div>
  );
}

export function ErrorsList({ errors }: { errors: GrammarUnit['errors'] }) {
  return (
    <div className="flex flex-col gap-3">
      {errors.map(([w, r, note], i) => (
        <div key={i} className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
          <div className="flex items-start gap-2 text-rose-700 dark:text-rose-300"><X size={18} className="mt-0.5 shrink-0" /><span className="line-through decoration-rose-400/60">{w}</span></div>
          <div className="mt-1 flex items-start gap-2 font-medium text-emerald-700 dark:text-emerald-300"><Check size={18} className="mt-0.5 shrink-0" />{r}</div>
          {note && <div className="mt-1 pl-6 text-sm text-slate-500">{note}</div>}
        </div>
      ))}
    </div>
  );
}

export function CompareBox({ u }: { u: GrammarUnit }) {
  if (!u.compare) return null;
  return (
    <div className="rounded-xl bg-violet-50 p-4 dark:bg-violet-500/10">
      <div className="mb-1 flex items-center gap-2 font-semibold text-violet-800 dark:text-violet-200"><ArrowLeftRight size={16} /> Comparación con estructuras similares</div>
      <p className="text-slate-700 dark:text-slate-300">{u.compare.text}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {u.compare.with.map((id) => UNIT_BY_ID[id] && (
          <Link key={id} to={`/grammar/${id}`} className="rounded-lg bg-white px-2 py-1 text-sm font-medium text-violet-700 hover:underline dark:bg-slate-800 dark:text-violet-300">Unidad {UNIT_BY_ID[id].n}: {UNIT_BY_ID[id].es}</Link>
        ))}
      </div>
    </div>
  );
}

export function UsesList({ uses }: { uses: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {uses.map((x, i) => (
        <li key={i} className="flex items-start gap-3"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700 dark:bg-brand-500/20 dark:text-brand-200">{i + 1}</span><span>{x}</span></li>
      ))}
    </ul>
  );
}

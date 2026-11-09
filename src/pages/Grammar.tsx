import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Search } from 'lucide-react';
import { UNITS, tagLabel } from '../content';
import { MODULES } from '../content/modules';
import { useProgress } from '../store/progress';
import { cx } from '../components/ui';
import { normalize } from '../lib/grade';
import type { GrammarUnit } from '../types';

const APPENDICES: [number, string, string][] = [
  [1, 'Regular and irregular verbs', 'irregular'],
  [2, 'Present and past tenses', 'tenses'],
  [3, 'The future', 'future'],
  [4, 'Modal verbs (can/could/will/would etc.)', 'modals'],
  [5, 'Short forms (I’m / you’ve / didn’t etc.)', 'short'],
  [6, 'Spelling', 'spelling'],
  [7, 'American English', 'american'],
];

/** Renders a unit title with the part in brackets in bold, e.g. "Present continuous (**I am doing**)". */
function Title({ t }: { t: string }) {
  const m = t.match(/^(.*?)\s*\((.+)\)\s*$/);
  if (!m) return <>{t}</>;
  return <>{m[1]} (<strong className="font-semibold text-slate-900 dark:text-white">{m[2]}</strong>)</>;
}

function Row({ u, status }: { u: GrammarUnit; status: 'done' | 'started' | 'new' }) {
  return (
    <Link to={`/grammar/${u.id}`} className="pressable group flex items-baseline gap-3 rounded-lg px-2 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800/60">
      <span className="w-8 shrink-0 text-right text-sm tabular-nums text-slate-400">{u.n}</span>
      <span className="min-w-0 flex-1 text-[15px] text-slate-700 group-hover:text-brand-700 dark:text-slate-300 dark:group-hover:text-brand-300">
        <Title t={u.title} />
        <span className="ml-2 text-xs text-slate-400">{u.es}</span>
      </span>
      {status === 'done' && <Check size={15} className="shrink-0 self-center text-emerald-500" aria-label="aprobada" />}
      {status === 'started' && <span className="h-2 w-2 shrink-0 self-center rounded-full bg-brand-500" aria-label="en curso" />}
    </Link>
  );
}

export default function Grammar() {
  const p = useProgress();
  const [q, setQ] = useState('');
  const nq = normalize(q);

  const sections = useMemo(() => MODULES.map((m) => ({
    m,
    units: UNITS.filter((u) => u.module === m.id).filter((u) => {
      if (!nq) return true;
      const hay = normalize([u.title, u.es, String(u.n), u.tags.map(tagLabel).join(' ')].join(' '));
      return nq.split(' ').every((w) => hay.includes(w));
    }),
  })).filter((s) => s.units.length), [nq]);

  const status = (u: GrammarUnit) => (p.units[u.id]?.completed ? 'done' : (p.units[u.id]?.step ?? 0) > 0 ? 'started' : 'new') as 'done' | 'started' | 'new';

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-brand-600 dark:text-brand-300">Contents</h1>
      <p className="mt-1 text-slate-500">Gramática por temas. Tocá una unidad para ver su ficha y practicarla.</p>

      <div className="relative mt-5">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar un tema: since, passive, unless…" className="input pl-10" />
      </div>

      <div className="mt-6 rounded-3xl bg-white p-4 sm:p-6 dark:bg-slate-900">
        {sections.length === 0 && <p className="py-6 text-center text-slate-500">No hay unidades con esa búsqueda.</p>}
        {sections.map(({ m, units }, i) => (
          <section key={m.id} className={cx(i > 0 && 'mt-6')}>
            <h2 className="mb-1 px-2 text-[15px] italic text-slate-500">{m.title} <span className="not-italic text-slate-400">· {m.es}</span></h2>
            <div className="flex flex-col">
              {units.map((u) => <Row key={u.id} u={u} status={status(u)} />)}
            </div>
          </section>
        ))}
        {!nq && (
          <section className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
            <div className="flex flex-col">
              {APPENDICES.map(([n, label, tab]) => (
                <Link key={n} to={`/reference?tab=${tab}`} className="pressable group flex items-baseline gap-3 rounded-lg px-2 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800/60">
                  <span className="shrink-0 text-[15px] text-slate-500">Appendix {n}</span>
                  <span className="text-[15px] text-slate-700 group-hover:text-brand-700 dark:text-slate-300 dark:group-hover:text-brand-300">{label}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
      <p className="mt-3 flex items-center gap-4 px-2 text-xs text-slate-400">
        <span className="inline-flex items-center gap-1"><Check size={12} className="text-emerald-500" /> aprobada</span>
        <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-brand-500" /> en curso</span>
      </p>
    </div>
  );
}

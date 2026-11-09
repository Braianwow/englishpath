import { useMemo, useState } from 'react';
import { ChevronDown, Lightbulb } from 'lucide-react';
import type { Exercise, GrammarUnit } from '../types';
import { normalize } from '../lib/grade';
import { cx } from './ui';
import { SpeakBtn } from './ExerciseView';

/** What the learner has to do, in plain words, for each exercise type. */
const HOW: Record<string, string> = {
  mc: 'Leé la oración entera y elegí la opción que la completa bien.',
  gap: 'Escribí en el espacio la forma correcta. Si hay un verbo entre paréntesis, conjugalo según la regla.',
  order: 'Tocá las palabras en el orden correcto para armar la oración.',
  tr: 'Escribí la oración en inglés aplicando la regla de esta unidad.',
  fix: 'La oración tiene un error. Reescribila corregida.',
  spot: 'Tocá la palabra que está mal. Si está todo bien, tocá “La oración es correcta”.',
  match: 'Uní cada elemento de la izquierda con su pareja de la derecha.',
  build: 'Armá una oración completa con esas palabras, conjugando los verbos.',
};

function answerText(ex: Exercise): string {
  switch (ex.t) {
    case 'mc': return `${ex.q} ${ex.opts[ex.a]}`;
    case 'gap': case 'tr': case 'fix': case 'build': return `${'q' in ex ? ex.q : ''} ${ex.a.join(' ')}`;
    case 'order': return ex.a.join(' ');
    case 'spot': return ex.q;
    case 'match': return ex.pairs.flat().join(' ');
  }
}

/**
 * Shown above each grammar exercise during practice: the rule of the unit, its
 * structure and a worked example (never the answer to the current exercise),
 * so the learner understands what they are answering.
 */
export default function ExampleHint({ unit, ex }: { unit: GrammarUnit; ex: Exercise }) {
  const [open, setOpen] = useState(true);
  const { rule, example, formRow } = useMemo(() => {
    const ans = normalize(answerText(ex));
    const pool = [...unit.aff, ...unit.neg, ...unit.q].filter((e) => {
      const n = normalize(e.en);
      return !ans.includes(n) && !n.includes(ans.slice(0, 25));
    });
    // prefer an example that shares a keyword with the exercise (same structure)
    const words = new Set(ans.split(' ').filter((w) => w.length > 3));
    const scored = pool.map((e) => ({ e, s: normalize(e.en).split(' ').filter((w) => words.has(w)).length }));
    scored.sort((a, b) => b.s - a.s);
    const head = unit.form?.[0];
    const row = unit.form?.[1];
    return {
      rule: unit.uses[0],
      example: scored[0]?.e ?? unit.aff[0],
      formRow: head && row ? head.map((h, i) => `${h}: ${row[i]}`).join(' · ') : null,
    };
  }, [unit, ex]);

  return (
    <div className="rounded-2xl border border-amber-200/70 bg-amber-50/60 dark:border-amber-500/20 dark:bg-amber-500/5">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm font-semibold text-amber-800 dark:text-amber-200" aria-expanded={open}>
        <Lightbulb size={16} /> Antes de responder
        <ChevronDown size={16} className={cx('ml-auto transition-transform duration-300', open && 'rotate-180')} />
      </button>
      <div className={cx('grid transition-all duration-300', open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
        <div className="overflow-hidden">
          <div className="space-y-2 px-4 pb-4 text-[15px] text-slate-700 dark:text-slate-300">
            <div><span className="font-semibold text-slate-900 dark:text-white">Qué hacer: </span>{HOW[ex.t]}</div>
            <div><span className="font-semibold text-slate-900 dark:text-white">Regla ({unit.es}): </span>{rule}</div>
            {formRow && <div className="text-sm text-slate-500">{formRow}</div>}
            {example && (
              <div className="flex items-start justify-between gap-2 rounded-xl bg-white/80 px-3 py-2 dark:bg-slate-900/60">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">Ejemplo</div>
                  <div className="font-medium text-slate-900 dark:text-white">{example.en}</div>
                  {example.es && <div className="text-sm text-slate-500">{example.es}</div>}
                </div>
                <SpeakBtn text={example.en} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

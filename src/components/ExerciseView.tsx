import { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, XCircle, Lightbulb, ArrowRight, RotateCcw, Volume2 } from 'lucide-react';
import type { Exercise, GrammarUnit } from '../types';
import ExampleHint from './ExampleHint';
import { diffTokens, distance, matches, shuffle, tokensOf } from '../lib/grade';
import { Button, cx } from './ui';
import { speak } from '../lib/speech';

export interface Answered { ok: boolean; given: string; expected: string }

const TYPE_LABEL: Record<string, string> = {
  mc: 'Elegí la respuesta correcta', 'mc:tense': 'Elegí el tiempo verbal', 'mc:context': 'Elegí la palabra según el contexto',
  'mc:tr-en-es': 'Elegí la traducción correcta', 'mc:dialog': 'Completá la conversación', gap: 'Completá el espacio', order: 'Ordená las palabras',
  tr: 'Traducí al inglés', fix: 'Corregí la oración', spot: 'Tocá la palabra incorrecta', match: 'Relacioná cada par', build: 'Construí la oración',
};

export function typeLabel(ex: Exercise) {
  if (ex.t === 'mc' && ex.kind) return TYPE_LABEL[`mc:${ex.kind}`];
  return TYPE_LABEL[ex.t];
}

/** Expected answer as displayed text */
export function expectedText(ex: Exercise): string {
  switch (ex.t) {
    case 'mc': return ex.opts[ex.a];
    case 'gap': return fillGaps(ex.q, ex.a[0]);
    case 'order': case 'tr': case 'fix': case 'build': return ex.a[0];
    case 'spot': return ex.bad < 0 ? 'La oración es correcta.' : `${tokensOf(ex.q)[ex.bad]} → ${ex.ok}`;
    case 'match': return ex.pairs.map(([a, b]) => `${a} → ${b}`).join(' · ');
  }
}

export function promptText(ex: Exercise): string {
  switch (ex.t) {
    case 'order': return ex.es ?? 'Ordená las palabras';
    case 'match': return ex.q ?? 'Relacioná los pares';
    default: return ex.q;
  }
}

function fillGaps(q: string, answer: string) {
  const parts = answer.split(' / ');
  let i = 0;
  return q.replace(/___/g, () => `[${parts[i++] ?? '…'}]`);
}

interface Props {
  ex: Exercise;
  mode: 'practice' | 'exam';
  onDone: (a: Answered) => void; // called when learner presses Continue (practice) or Check (exam)
  onChecked?: (a: Answered) => void; // called immediately on check (practice) to record result
  seed?: number;
  /** Grammar unit of the exercise: shows the rule and a worked example before answering (practice only). */
  unit?: GrammarUnit;
}

export default function ExerciseView({ ex, mode, onDone, onChecked, seed, unit }: Props) {
  const [result, setResult] = useState<Answered | null>(null);
  const continueRef = useRef<HTMLButtonElement>(null);

  const check = (a: Answered) => {
    if (result) return;
    if (mode === 'exam') { onDone(a); return; }
    setResult(a);
    onChecked?.(a);
  };

  useEffect(() => { if (result) continueRef.current?.focus(); }, [result]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-300">{typeLabel(ex)}</span>
        {ex.src === 'cuad' && <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">Cuadernillo {ex.ref}</span>}
        {ex.src === 'set' && <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">Ejercicio {ex.ref}</span>}
      </div>
      {ex.ins && <div className="-mt-2 text-[15px] font-medium text-slate-700 dark:text-slate-200">{ex.ins}</div>}
      {unit && mode === 'practice' && <ExampleHint unit={unit} ex={ex} />}
      {/* the scene: the story that leads into the sentence below, so both read as one text */}
      {ex.sit && <p className="-mb-3 font-display text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">{ex.sit}</p>}
      <Body ex={ex} onCheck={check} locked={!!result} seed={seed} />
      {result && (
        <Feedback ex={ex} result={result}>
          <Button ref={continueRef} onClick={() => onDone(result)} size="lg" variant={result.ok ? 'success' : 'primary'} className="w-full sm:w-auto">
            Continuar <ArrowRight size={18} />
          </Button>
        </Feedback>
      )}
    </div>
  );
}

function Body({ ex, onCheck, locked, seed }: { ex: Exercise; onCheck: (a: Answered) => void; locked: boolean; seed?: number }) {
  switch (ex.t) {
    case 'mc': return <MC ex={ex} onCheck={onCheck} locked={locked} seed={seed} />;
    case 'gap': return <Gap ex={ex} onCheck={onCheck} locked={locked} />;
    case 'order': return <Order ex={ex} onCheck={onCheck} locked={locked} seed={seed} />;
    case 'tr': case 'fix': case 'build': return <FreeText ex={ex} onCheck={onCheck} locked={locked} />;
    case 'spot': return <Spot ex={ex} onCheck={onCheck} locked={locked} />;
    case 'match': return <Match ex={ex} onCheck={onCheck} locked={locked} seed={seed} />;
  }
}

function Prompt({ children }: { children: React.ReactNode }) {
  return <div className="font-display text-xl font-semibold leading-snug text-slate-900 sm:text-2xl dark:text-white">{children}</div>;
}

function MC({ ex, onCheck, locked, seed }: { ex: Extract<Exercise, { t: 'mc' }>; onCheck: (a: Answered) => void; locked: boolean; seed?: number }) {
  const order = useMemo(() => shuffle(ex.opts.map((_, i) => i), seed), [ex, seed]);
  const [picked, setPicked] = useState<number | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (locked) return;
      const n = Number(e.key);
      if (n >= 1 && n <= order.length) choose(order[n - 1]);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
  const choose = (i: number) => {
    if (locked) return;
    setPicked(i);
    onCheck({ ok: i === ex.a, given: ex.opts[i], expected: ex.opts[ex.a] });
  };
  return (
    <>
      <Prompt><GapText text={ex.q} /></Prompt>
      <div className="grid gap-2.5">
        {order.map((i, k) => {
          const state = !locked ? '' : i === ex.a ? 'correct' : i === picked ? 'wrong' : 'dim';
          return (
            <button
              key={i} onClick={() => choose(i)} disabled={locked}
              className={cx(
                'flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-base font-medium transition',
                state === '' && 'border-slate-200 bg-white hover:border-brand-400 hover:bg-brand-50 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:bg-brand-500/10',
                state === 'correct' && 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-500/15 dark:text-emerald-100',
                state === 'wrong' && 'border-rose-500 bg-rose-50 text-rose-900 animate-shake dark:bg-rose-500/15 dark:text-rose-100',
                state === 'dim' && 'border-slate-200 opacity-50 dark:border-slate-700',
              )}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-500 dark:bg-slate-700 dark:text-slate-300">{k + 1}</span>
              <span className="text-slate-900 dark:text-slate-100">{ex.opts[i]}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}

function GapText({ text }: { text: string }) {
  const parts = text.split('___');
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>{p}{i < parts.length - 1 && <span className="mx-1 inline-block min-w-[3.5rem] border-b-2 border-dashed border-brand-400 align-baseline">&nbsp;</span>}</span>
      ))}
    </>
  );
}

function Gap({ ex, onCheck, locked }: { ex: Extract<Exercise, { t: 'gap' }>; onCheck: (a: Answered) => void; locked: boolean }) {
  const parts = ex.q.split('___');
  const n = parts.length - 1;
  const [vals, setVals] = useState<string[]>(() => new Array(n).fill(''));
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  useEffect(() => { refs.current[0]?.focus(); }, []);
  const submit = () => {
    if (locked || vals.some((v) => !v.trim())) return;
    const ok = ex.a.some((alt) => {
      const pieces = alt.split(' / ');
      return pieces.length === n && pieces.every((p, i) => matches(vals[i], [p]));
    });
    onCheck({ ok, given: vals.join(' / '), expected: ex.a[0] });
  };
  return (
    <form onSubmit={(e) => { e.preventDefault(); submit(); }} className="flex flex-col gap-5">
      <div className="font-display text-xl leading-loose text-slate-900 sm:text-2xl dark:text-white">
        {parts.map((p, i) => (
          <span key={i}>
            {p}
            {i < n && (
              <input
                ref={(el) => { refs.current[i] = el; }} value={vals[i]} disabled={locked} autoComplete="off" autoCapitalize="off" spellCheck={false}
                onChange={(e) => setVals((v) => v.map((x, j) => (j === i ? e.target.value : x)))}
                className="mx-1 inline-block w-40 rounded-lg border-b-2 border-brand-400 bg-brand-50/60 px-2 py-0.5 text-center font-sans text-lg font-semibold text-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-400/40 sm:w-48 dark:bg-brand-500/10 dark:text-brand-100"
                aria-label={`Espacio ${i + 1}`}
              />
            )}
          </span>
        ))}
      </div>
      {ex.hint && <div className="text-sm text-slate-500">Pista: {ex.hint}</div>}
      {!locked && <Button type="submit" size="lg" disabled={vals.some((v) => !v.trim())} className="self-start">Comprobar</Button>}
    </form>
  );
}

function Order({ ex, onCheck, locked, seed }: { ex: Extract<Exercise, { t: 'order' }>; onCheck: (a: Answered) => void; locked: boolean; seed?: number }) {
  const tokens = useMemo(() => tokensOf(ex.a[0]), [ex]);
  const bank0 = useMemo(() => {
    let s = shuffle(tokens.map((_, i) => i), seed);
    if (tokens.length > 1 && s.every((v, i) => v === i)) s = [...s.slice(1), s[0]];
    return s;
  }, [tokens, seed]);
  const [chosen, setChosen] = useState<number[]>([]);
  const remaining = bank0.filter((i) => !chosen.includes(i));
  const submit = () => {
    const given = chosen.map((i) => tokens[i]).join(' ');
    const ok = ex.a.some((alt) => tokensOf(alt).join(' ') === given);
    onCheck({ ok, given, expected: ex.a[0] });
  };
  return (
    <>
      <Prompt>{ex.es ? <span>“{ex.es}”</span> : 'Formá la oración'}</Prompt>
      <div className="min-h-[64px] rounded-2xl border-2 border-dashed border-slate-300 p-3 dark:border-slate-700">
        <div className="flex flex-wrap gap-2">
          {chosen.map((i) => (
            <button key={i} className="chip animate-pop" disabled={locked} onClick={() => setChosen((c) => c.filter((x) => x !== i))}>{tokens[i]}</button>
          ))}
          {!chosen.length && <span className="px-1 py-2 text-sm text-slate-400">Tocá las palabras en orden…</span>}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {remaining.map((i) => (
          <button key={i} className="chip" disabled={locked} onClick={() => setChosen((c) => [...c, i])}>{tokens[i]}</button>
        ))}
      </div>
      {!locked && (
        <div className="flex gap-2">
          <Button size="lg" onClick={submit} disabled={chosen.length !== tokens.length}>Comprobar</Button>
          <Button size="lg" variant="ghost" onClick={() => setChosen([])} disabled={!chosen.length}><RotateCcw size={16} /> Reiniciar</Button>
        </div>
      )}
    </>
  );
}

function FreeText({ ex, onCheck, locked }: { ex: Extract<Exercise, { t: 'tr' | 'fix' | 'build' }>; onCheck: (a: Answered) => void; locked: boolean }) {
  const [val, setVal] = useState(ex.t === 'fix' ? ex.q : '');
  const placeholder = ex.t === 'tr' ? 'Escribí la traducción en inglés…' : ex.t === 'fix' ? 'Escribí la oración corregida…' : 'Escribí la oración completa…';
  const submit = () => {
    if (locked || !val.trim()) return;
    onCheck({ ok: matches(val, ex.a), given: val.trim(), expected: ex.a[0] });
  };
  return (
    <>
      <Prompt>
        {ex.t === 'tr' && <span>“{ex.q}”</span>}
        {ex.t === 'fix' && <span className="decoration-rose-400 decoration-wavy underline-offset-4 [text-decoration-line:underline]">{ex.q}</span>}
        {ex.t === 'build' && <span className="flex flex-wrap gap-2">{ex.q.split(' / ').map((w, i) => <span key={i} className="rounded-lg bg-slate-100 px-2 py-0.5 text-lg dark:bg-slate-800">{w}</span>)}</span>}
      </Prompt>
      {ex.t === 'build' && <div className="-mt-2 text-sm text-slate-500">Usá todas las palabras y conjugá los verbos cuando haga falta.</div>}
      <form onSubmit={(e) => { e.preventDefault(); submit(); }} className="flex flex-col gap-3">
        <textarea
          value={val} onChange={(e) => setVal(e.target.value)} disabled={locked} rows={2} autoFocus spellCheck={false} autoCapitalize="off"
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(); } }}
          placeholder={placeholder} className="input resize-none text-lg"
        />
        {!locked && <Button type="submit" size="lg" disabled={!val.trim()} className="self-start">Comprobar</Button>}
      </form>
    </>
  );
}

function Spot({ ex, onCheck, locked }: { ex: Extract<Exercise, { t: 'spot' }>; onCheck: (a: Answered) => void; locked: boolean }) {
  const toks = tokensOf(ex.q);
  const [picked, setPicked] = useState<number | null>(null);
  const choose = (i: number) => {
    if (locked) return;
    setPicked(i);
    onCheck({ ok: i === ex.bad, given: i < 0 ? 'La oración es correcta' : toks[i], expected: expectedText(ex) });
  };
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {toks.map((t, i) => (
          <button
            key={i} onClick={() => choose(i)} disabled={locked}
            className={cx('chip text-lg',
              locked && i === ex.bad && '!border-emerald-500 !bg-emerald-50 dark:!bg-emerald-500/15',
              locked && picked === i && i !== ex.bad && '!border-rose-500 !bg-rose-50 dark:!bg-rose-500/15')}
          >
            {t}
          </button>
        ))}
      </div>
      <button
        onClick={() => choose(-1)} disabled={locked}
        className={cx('self-start rounded-xl border-2 border-dashed px-4 py-2 text-sm font-semibold transition',
          locked && ex.bad < 0 ? 'border-emerald-500 text-emerald-700 dark:text-emerald-300' : locked && picked === -1 ? 'border-rose-500 text-rose-600' : 'border-slate-300 text-slate-600 hover:border-brand-400 hover:text-brand-700 dark:border-slate-600 dark:text-slate-300')}
      >
        ✓ La oración es correcta
      </button>
    </>
  );
}

function Match({ ex, onCheck, locked, seed }: { ex: Extract<Exercise, { t: 'match' }>; onCheck: (a: Answered) => void; locked: boolean; seed?: number }) {
  const left = useMemo(() => shuffle(ex.pairs.map((_, i) => i), seed), [ex, seed]);
  const right = useMemo(() => shuffle(ex.pairs.map((_, i) => i), (seed ?? 7) + 13), [ex, seed]);
  const [sel, setSel] = useState<number | null>(null);
  const [done, setDone] = useState<number[]>([]);
  const [errors, setErrors] = useState(0);
  const [flash, setFlash] = useState<number | null>(null);
  const pick = (r: number) => {
    if (locked || sel === null || done.includes(r)) return;
    if (r === sel) {
      const nd = [...done, r];
      setDone(nd);
      setSel(null);
      if (nd.length === ex.pairs.length) onCheck({ ok: errors === 0, given: errors === 0 ? 'Todos los pares correctos' : `${errors} intento(s) incorrecto(s)`, expected: expectedText(ex) });
    } else {
      setErrors((e) => e + 1);
      setFlash(r);
      setTimeout(() => setFlash(null), 400);
    }
  };
  return (
    <>
      {ex.q && <Prompt>{ex.q}</Prompt>}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          {left.map((i) => (
            <button key={i} disabled={locked || done.includes(i)} onClick={() => setSel(i)}
              className={cx('chip text-left text-sm sm:text-base', sel === i && '!border-brand-500 !bg-brand-50 dark:!bg-brand-500/15', done.includes(i) && '!border-emerald-400 !bg-emerald-50 opacity-70 dark:!bg-emerald-500/10')}>
              {ex.pairs[i][0]}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {right.map((i) => (
            <button key={i} disabled={locked || done.includes(i)} onClick={() => pick(i)}
              className={cx('chip text-left text-sm sm:text-base', flash === i && '!border-rose-500 animate-shake', done.includes(i) && '!border-emerald-400 !bg-emerald-50 opacity-70 dark:!bg-emerald-500/10')}>
              {ex.pairs[i][1]}
            </button>
          ))}
        </div>
      </div>
      {!locked && <div className="text-sm text-slate-500">Elegí un elemento de la izquierda y luego su pareja de la derecha. Errores: {errors}</div>}
    </>
  );
}

export function Feedback({ ex, result, children, compact }: { ex: Exercise; result: Answered; children?: React.ReactNode; compact?: boolean }) {
  const textual = ex.t === 'tr' || ex.t === 'fix' || ex.t === 'build' || ex.t === 'gap' || ex.t === 'order';
  const nearMiss = !result.ok && textual && ex.t !== 'order' && distance(result.given, ex.t === 'gap' ? ex.a[0] : result.expected) <= 2;
  return (
    <div className={cx('rounded-2xl border-2 p-5 animate-fade-up', result.ok ? 'border-emerald-200 bg-emerald-50/70 dark:border-emerald-500/30 dark:bg-emerald-500/10' : 'border-rose-200 bg-rose-50/70 dark:border-rose-500/30 dark:bg-rose-500/10')}>
      <div className="flex items-center gap-2 text-lg font-bold">
        {result.ok ? <><CheckCircle2 className="text-emerald-600" /> <span className="text-emerald-800 dark:text-emerald-200">¡Correcto!</span></>
          : <><XCircle className="text-rose-600" /> <span className="text-rose-800 dark:text-rose-200">Incorrecto</span></>}
      </div>
      <div className="mt-3 space-y-3 text-[15px]">
        {!result.ok && (
          <>
            <div><span className="font-semibold text-slate-900 dark:text-white">Tu respuesta: </span><span className="text-rose-700 line-through decoration-rose-400/60 dark:text-rose-300">{result.given || '—'}</span></div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-slate-900 dark:text-white">Respuesta correcta: </span>
              <span className="font-semibold text-emerald-700 dark:text-emerald-300">{expectedText(ex)}</span>
              {(ex.t !== 'match' && ex.t !== 'spot') && <SpeakBtn text={ex.t === 'gap' ? fillGaps(ex.q, ex.a[0]).replace(/[[\]]/g, '') : ex.t === 'mc' ? '' : result.expected} />}
            </div>
            {textual && ex.t !== 'gap' && result.given && (
              <div className="rounded-xl bg-white/70 p-3 dark:bg-slate-900/50">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Comparación palabra por palabra</div>
                <div className="flex flex-wrap gap-1">
                  {diffTokens(result.given, result.expected).map((t, i) => (
                    <span key={i} className={cx('rounded px-1', t.kind === 'missing' && 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200', t.kind === 'extra' && 'bg-rose-100 text-rose-800 line-through dark:bg-rose-500/20 dark:text-rose-200')}>{t.text}</span>
                  ))}
                </div>
                <div className="mt-1 text-xs text-slate-500"><span className="text-emerald-700 dark:text-emerald-300">verde</span> = falta en tu respuesta · <span className="text-rose-700 dark:text-rose-300">tachado</span> = sobra o está mal</div>
              </div>
            )}
            {nearMiss && <div className="text-sm text-amber-700 dark:text-amber-300">Estuviste muy cerca: revisá la ortografía o la forma exacta del verbo.</div>}
          </>
        )}
        {ex.why && (
          <div className="flex gap-2">
            <Lightbulb size={18} className="mt-0.5 shrink-0 text-amber-500" />
            <div><span className="font-semibold text-slate-900 dark:text-white">{result.ok ? '¿Por qué? ' : 'Explicación: '}</span>{ex.why}</div>
          </div>
        )}
        {ex.more && !compact && (
          <div className="rounded-xl bg-white/70 p-3 text-sm dark:bg-slate-900/50"><span className="font-semibold">Otro ejemplo: </span>{ex.more}</div>
        )}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}

export function SpeakBtn({ text, className }: { text: string; className?: string }) {
  if (!text || typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  return (
    <button type="button" onClick={(e) => { e.stopPropagation(); speak(text); }} className={cx('rounded-lg p-1.5 text-slate-500 transition hover:bg-slate-200/70 hover:text-brand-600 dark:hover:bg-slate-700', className)} aria-label="Escuchar pronunciación" title="Escuchar">
      <Volume2 size={16} />
    </button>
  );
}

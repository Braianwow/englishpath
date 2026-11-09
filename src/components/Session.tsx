import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Trophy, RotateCcw, Zap } from 'lucide-react';
import type { KeyedExercise } from '../content';
import { UNIT_BY_ID, refreshSaved } from '../content';
import ExerciseView, { Feedback, type Answered } from './ExerciseView';
import { Button, Card, Progress, Ring, cx } from './ui';
import { recordAnswer } from '../store/progress';
import { clearSaved, loadSaved, saveState } from '../lib/persist';

interface Saved { base: KeyedExercise[]; queue: number[]; idx: number; summary: SessionSummary; retry: string[] }

export interface SessionSummary { total: number; correct: number; xp: number; wrong: { item: KeyedExercise; ans: Answered }[]; firstTry: Record<string, boolean> }

/**
 * Practice session: immediate feedback after each answer; items answered
 * wrongly come back once at the end of the session so the learner fixes them.
 */
export default function Session({ items: given, title, onFinish, onExit: exit, finishLabel = 'Terminar', extra }: {
  items: KeyedExercise[]; title: string; onFinish?: (s: SessionSummary) => void; onExit?: () => void; finishLabel?: string; extra?: React.ReactNode;
}) {
  // Autosave: a reload (F5) continues the same exercises at the same point.
  const saveKey = `session:${title}`;
  const saved = useMemo(() => {
    const s = loadSaved<Saved>(saveKey);
    if (!(s && s.base?.length && s.queue.every((i) => s.base[i]) && s.idx < s.queue.length)) return undefined;
    const base = refreshSaved(s.base); // use the current version of each exercise
    return base ? { ...s, base } : undefined;
  }, [saveKey]);
  const items = saved?.base ?? given;
  const [queue, setQueue] = useState<KeyedExercise[]>(() => (saved ? saved.queue.map((i) => saved.base[i]) : items));
  const [idx, setIdx] = useState(saved?.idx ?? 0);
  const [summary, setSummary] = useState<SessionSummary>(saved?.summary ?? { total: items.length, correct: 0, xp: 0, wrong: [], firstTry: {} });
  const [done, setDone] = useState(false);
  const seed = useMemo(() => Math.floor(Math.random() * 1e6), []);
  const retryKeys = useMemo(() => new Set<string>(saved?.retry ?? []), [saved]);
  useEffect(() => {
    if (done || !items.length) { clearSaved(saveKey); return; }
    saveState(saveKey, { base: items, queue: queue.map((q) => items.indexOf(q)), idx, summary, retry: [...retryKeys] } satisfies Saved);
  }, [saveKey, items, queue, idx, summary, done, retryKeys]);
  const onExit = exit && (() => { clearSaved(saveKey); exit(); });

  if (!items.length) return <Card>No hay ejercicios disponibles para esta sesión.</Card>;

  const cur = queue[idx];

  const onChecked = (a: Answered) => {
    const isRetry = retryKeys.has(cur.key) && summary.firstTry[cur.key] !== undefined;
    const xp = recordAnswer(cur.unitId, cur.key, a.ok);
    setSummary((s) => {
      const firstTry = isRetry ? s.firstTry : { ...s.firstTry, [cur.key]: a.ok };
      return {
        ...s, xp: s.xp + xp, firstTry,
        correct: isRetry ? s.correct : s.correct + (a.ok ? 1 : 0),
        wrong: !a.ok && !isRetry ? [...s.wrong, { item: cur, ans: a }] : s.wrong,
      };
    });
    if (!a.ok && !retryKeys.has(cur.key)) {
      retryKeys.add(cur.key);
      setQueue((q) => [...q, cur]);
    }
  };

  const next = () => {
    if (idx + 1 >= queue.length) {
      setDone(true);
      onFinish?.(summary);
    } else setIdx(idx + 1);
  };

  if (done) {
    const pct = summary.total ? summary.correct / summary.total : 0;
    return (
      <div className="mx-auto flex max-w-2xl flex-col gap-5">
        <Card className="flex flex-col items-center gap-4 p-8 text-center">
          <Ring value={pct} size={120} stroke={10} color={pct >= 0.7 ? 'stroke-emerald-500' : 'stroke-amber-500'}>
            <div className="font-display text-3xl font-bold text-slate-900 dark:text-white">{Math.round(pct * 100)}%</div>
          </Ring>
          <div>
            <div className="font-display text-2xl font-bold text-slate-900 dark:text-white">{pct >= 0.9 ? '¡Excelente!' : pct >= 0.7 ? '¡Bien hecho!' : 'Sigamos practicando'}</div>
            <div className="text-slate-500">{summary.correct} de {summary.total} correctas al primer intento · <span className="inline-flex items-center gap-1 font-semibold text-brand-600"><Zap size={14} />+{summary.xp} XP</span></div>
          </div>
          {extra}
        </Card>
        {summary.wrong.length > 0 && (
          <Card>
            <div className="mb-3 font-semibold text-slate-900 dark:text-white">Repasá lo que fallaste</div>
            <div className="flex flex-col gap-3">
              {summary.wrong.map(({ item, ans }) => (
                <div key={item.key}>
                  <div className="mb-1 text-sm text-slate-500">{item.unitId && UNIT_BY_ID[item.unitId] ? `Unidad ${UNIT_BY_ID[item.unitId].n} · ${UNIT_BY_ID[item.unitId].es}` : ''}</div>
                  <div className="mb-2 font-medium text-slate-800 dark:text-slate-100">{'q' in item.ex ? item.ex.q : item.ex.t === 'order' ? (item.ex.es ?? '') : ''}</div>
                  <Feedback ex={item.ex} result={ans} compact />
                </div>
              ))}
            </div>
          </Card>
        )}
        <div className="flex flex-wrap justify-center gap-2">
          {onExit && <Button onClick={onExit}>{finishLabel}</Button>}
          <Button variant="secondary" onClick={() => { setQueue(items); setIdx(0); setDone(false); retryKeys.clear(); setSummary({ total: items.length, correct: 0, xp: 0, wrong: [], firstTry: {} }); }}>
            <RotateCcw size={16} /> Repetir sesión
          </Button>
          <Link to="/practice" className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"><Trophy size={16} /> Refuerzo inteligente</Link>
        </div>
      </div>
    );
  }

  const isRetry = idx >= items.length;
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <div className="flex items-center gap-3">
        {onExit && <button onClick={onExit} className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800" aria-label="Salir"><X size={20} /></button>}
        <Progress value={idx / queue.length} className="h-3" color="bg-gradient-to-r from-brand-500 to-violet-500" />
        <span className="shrink-0 text-sm font-semibold tabular-nums text-slate-500">{idx + 1}/{queue.length}</span>
      </div>
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>{title}</span>
        {cur.unitId && UNIT_BY_ID[cur.unitId] && <span className="hidden sm:inline">Unidad {UNIT_BY_ID[cur.unitId].n}</span>}
      </div>
      {isRetry && <div className={cx('rounded-xl bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800 dark:bg-amber-500/10 dark:text-amber-200')}>Segundo intento: este ejercicio lo fallaste antes.</div>}
      <Card className="p-6 sm:p-8">
        <ExerciseView key={`${cur.key}-${idx}`} ex={cur.ex} mode="practice" onChecked={onChecked} onDone={next} seed={seed + idx} unit={cur.unitId ? UNIT_BY_ID[cur.unitId] : undefined} />
      </Card>
    </div>
  );
}

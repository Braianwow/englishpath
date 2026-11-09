import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, AlertTriangle, CheckCircle2, ArrowRight, Target } from 'lucide-react';
import type { ExamKind, ExamResult } from '../types';
import type { KeyedExercise } from '../content';
import { UNIT_BY_ID, refreshSaved } from '../content';
import ExerciseView, { Feedback, type Answered } from './ExerciseView';
import { Badge, Button, Card, LinkButton, Progress, Ring } from './ui';
import { recordAnswer, PASS_MARK } from '../store/progress';
import { clearSaved, loadSaved, saveState } from '../lib/persist';

export interface ExamOutcome { result: ExamResult; answers: { item: KeyedExercise; ans: Answered }[] }

/** Exam mode: no feedback while answering; full corrected report at the end. */
export default function ExamRunner({ items: given, title, kind, examId, onFinish: finish, onExit: exit, recordAnswers = true }: {
  items: KeyedExercise[]; title: string; kind: ExamKind; examId: string;
  onFinish: (o: ExamOutcome) => void; onExit?: () => void; recordAnswers?: boolean;
}) {
  // Autosave: a reload (F5) keeps the same questions and the answers given so far.
  const saveKey = `exam:${kind}:${examId}`;
  const saved = useMemo(() => {
    const s = loadSaved<{ items: KeyedExercise[]; idx: number; answers: { item: KeyedExercise; ans: Answered }[] }>(saveKey);
    if (!(s && s.items?.length && s.idx < s.items.length)) return undefined;
    const items = refreshSaved(s.items); // use the current version of each exercise
    return items ? { ...s, items } : undefined;
  }, [saveKey]);
  const items = saved?.items ?? given;
  const [idx, setIdx] = useState(saved?.idx ?? 0);
  const [answers, setAnswers] = useState<{ item: KeyedExercise; ans: Answered }[]>(saved?.answers ?? []);
  const [finished, setFinished] = useState(false);
  useEffect(() => { if (items.length && !finished) saveState(saveKey, { items, idx, answers }); }, [saveKey, items, idx, answers, finished]);
  const onFinish = (o: ExamOutcome) => { setFinished(true); clearSaved(saveKey); finish(o); };
  const onExit = exit && (() => { clearSaved(saveKey); exit(); });
  const seed = useMemo(() => Math.floor(Math.random() * 1e6), []);
  if (!items.length) return <Card>There aren't enough exercises for this test yet.</Card>;
  const cur = items[idx];

  const answer = (a: Answered) => {
    if (recordAnswers) recordAnswer(cur.unitId, cur.key, a.ok, { inTest: true });
    const all = [...answers, { item: cur, ans: a }];
    setAnswers(all);
    if (idx + 1 >= items.length) {
      const correct = all.filter((x) => x.ans.ok).length;
      const weak = [...new Set(all.filter((x) => !x.ans.ok && x.item.unitId).map((x) => x.item.unitId!))];
      onFinish({
        answers: all,
        result: { id: examId, kind, title, date: Date.now(), total: all.length, correct, score: Math.round((correct / all.length) * 100), weakUnits: weak },
      });
    } else setIdx(idx + 1);
  };

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <div className="flex items-center gap-3">
        {onExit && <button onClick={onExit} className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800" aria-label="Salir"><X size={20} /></button>}
        <Progress value={idx / items.length} className="h-3" color="bg-gradient-to-r from-amber-500 to-orange-500" />
        <span className="shrink-0 text-sm font-semibold tabular-nums text-slate-500">{idx + 1}/{items.length}</span>
      </div>
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span className="font-medium">{title}</span>
        <Badge tone="amber">Test mode · no hints</Badge>
      </div>
      <Card className="p-6 sm:p-8">
        <ExerciseView key={`${cur.key}-${idx}`} ex={cur.ex} mode="exam" onDone={answer} seed={seed + idx} />
      </Card>
    </div>
  );
}

export function ExamReport({ outcome, passMark = PASS_MARK, onRetry, nextTo, nextLabel }: { outcome: ExamOutcome; passMark?: number; onRetry?: () => void; nextTo?: string; nextLabel?: string }) {
  const { result, answers } = outcome;
  const passed = result.score >= passMark;
  const wrong = answers.filter((a) => !a.ans.ok);
  const grade = (result.score / 10).toFixed(1);
  const weak = result.weakUnits.map((id) => UNIT_BY_ID[id]).filter(Boolean);
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-5">
      <Card className="flex flex-col items-center gap-5 p-8 text-center sm:flex-row sm:text-left">
        <Ring value={result.score / 100} size={130} stroke={11} color={passed ? 'stroke-emerald-500' : 'stroke-rose-500'}>
          <div className="font-display text-3xl font-bold text-slate-900 dark:text-white">{result.score}%</div>
          <div className="text-xs text-slate-500">Grade {grade}/10</div>
        </Ring>
        <div className="flex-1">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            {passed ? <CheckCircle2 className="text-emerald-500" /> : <AlertTriangle className="text-rose-500" />}
            <span className="font-display text-2xl font-bold text-slate-900 dark:text-white">{passed ? 'Passed' : 'Not passed yet'}</span>
          </div>
          <div className="mt-1 text-slate-500">{result.title}</div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl bg-slate-50 p-2 dark:bg-slate-800"><div className="text-lg font-bold text-slate-900 dark:text-white">{result.correct}</div><div className="text-xs text-slate-500">correct</div></div>
            <div className="rounded-xl bg-slate-50 p-2 dark:bg-slate-800"><div className="text-lg font-bold text-slate-900 dark:text-white">{result.total - result.correct}</div><div className="text-xs text-slate-500">wrong</div></div>
            <div className="rounded-xl bg-slate-50 p-2 dark:bg-slate-800"><div className="text-lg font-bold text-slate-900 dark:text-white">{passMark}%</div><div className="text-xs text-slate-500">to pass</div></div>
          </div>
        </div>
      </Card>

      {weak.length > 0 && (
        <Card>
          <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900 dark:text-white"><Target size={18} className="text-rose-500" /> Topics that need more work</div>
          <div className="flex flex-col gap-2">
            {weak.map((u) => (
              <div key={u.id} className="flex flex-col gap-2 rounded-xl bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between dark:bg-slate-800/60">
                <div><span className="font-medium text-slate-900 dark:text-white">Unit {u.n}: {u.title}</span></div>
                <div className="flex gap-2">
                  <LinkButton to={`/grammar/${u.id}`} size="sm" variant="secondary">Review the theory</LinkButton>
                  <LinkButton to={`/practice?mode=focus&units=${u.id}`} size="sm">Practise</LinkButton>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Card>
        <div className="mb-1 font-semibold text-slate-900 dark:text-white">Recommendation</div>
        <p className="text-slate-600 dark:text-slate-300">
          {result.score >= 90 ? 'You have mastered this. Move on to the next topic; we will review it again later, less often.'
            : passed ? 'Good result. Move on, but review the mistakes below: they will come back in your review sessions.'
            : 'Read the explanation of the marked topics again, do a review session and take the test again. The exercises you got wrong have been saved to your mistakes bank.'}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {nextTo && <LinkButton to={nextTo}>{nextLabel ?? 'Continue'} <ArrowRight size={16} /></LinkButton>}
          {onRetry && <Button variant="secondary" onClick={onRetry}>Retake test</Button>}
          {wrong.length > 0 && <LinkButton variant="secondary" to="/practice?mode=mistakes">Fix my mistakes</LinkButton>}
        </div>
      </Card>

      {wrong.length > 0 && (
        <Card>
          <div className="mb-3 font-semibold text-slate-900 dark:text-white">Wrong answers and explanations ({wrong.length})</div>
          <div className="flex flex-col gap-4">
            {wrong.map(({ item, ans }, i) => (
              <div key={i}>
                <div className="mb-1 text-sm text-slate-500">{item.unitId && UNIT_BY_ID[item.unitId] ? `Unit ${UNIT_BY_ID[item.unitId].n} · ${UNIT_BY_ID[item.unitId].title}` : ''}</div>
                <div className="mb-2 font-medium text-slate-800 dark:text-slate-100">{'q' in item.ex ? item.ex.q : item.ex.t === 'order' ? `Put in order: “${item.ex.es ?? ''}”` : ''}</div>
                <Feedback ex={item.ex} result={ans} compact />
              </div>
            ))}
          </div>
        </Card>
      )}
      <div className="text-center"><Link to="/exams" className="text-sm font-medium text-brand-600 hover:underline">See all tests</Link></div>
    </div>
  );
}

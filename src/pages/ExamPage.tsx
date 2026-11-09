import { useMemo, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { ClipboardCheck } from 'lucide-react';
import type { ExamKind } from '../types';
import { MODULES } from '../content/modules';
import { VOCAB_CATEGORIES } from '../content/vocab';
import { useProgress, recordExam, setCardFlags, setLast } from '../store/progress';
import { buildCumulative, buildGrammarTest, buildModuleExam } from '../lib/adaptive';
import { buildVocabTest } from '../lib/vocabTest';
import { Button, Card } from '../components/ui';
import ExamRunner, { ExamReport, type ExamOutcome } from '../components/ExamRunner';

export default function ExamPage() {
  const { kind = '', id } = useParams();
  const p = useProgress();
  const nav = useNavigate();
  const [attempt, setAttempt] = useState(0);
  const [started, setStarted] = useState(false);
  const [outcome, setOutcome] = useState<ExamOutcome | null>(null);
  const [cat, setCat] = useState<string>('');

  const meta = useMemo(() => {
    if (kind === 'module') {
      const m = MODULES.find((x) => x.id === id);
      return m ? { title: `Module test: ${m.title}`, desc: '20 questions from all the units in the module.', examId: m.id } : null;
    }
    if (kind === 'cumulative') return { title: 'Cumulative test', desc: '25 questions from the units you have studied, to check you remember earlier topics.', examId: 'cumulative' };
    if (kind === 'grammar') return { title: 'Grammar quiz', desc: '15 questions from random units across the whole book.', examId: 'grammar' };
    if (kind === 'vocab') return { title: 'Vocabulary quiz', desc: '15 questions: meaning, reverse translation and words in context.', examId: 'vocab' };
    return null;
  }, [kind, id]);

  const items = useMemo(() => {
    if (!started) return [];
    if (kind === 'module' && id) return buildModuleExam(id, p);
    if (kind === 'cumulative') return buildCumulative(p);
    if (kind === 'grammar') return buildGrammarTest(p);
    if (kind === 'vocab') return buildVocabTest(p, cat || null);
    return [];
  }, [started, attempt]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!meta) return <Navigate to="/exams" replace />;

  const begin = () => { setStarted(true); setLast({ kind: 'exam', id: meta.examId, title: meta.title, path: `/exam/${kind}${id ? `/${id}` : ''}` }); };

  if (outcome) {
    return <ExamReport outcome={outcome} onRetry={() => { setOutcome(null); setAttempt((a) => a + 1); }} nextTo="/exams" nextLabel="More tests" />;
  }
  if (!started) {
    return (
      <Card className="mx-auto flex max-w-xl flex-col items-center gap-4 p-8 text-center">
        <ClipboardCheck size={40} className="text-amber-500" />
        <div className="font-display text-2xl font-bold text-slate-900 dark:text-white">{meta.title}</div>
        <p className="text-slate-500">{meta.desc} You will only see your results at the end.</p>
        {kind === 'vocab' && (
          <select value={cat} onChange={(e) => setCat(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 dark:border-slate-700 dark:bg-slate-900">
            <option value="">Words you have studied (or all of them)</option>
            {VOCAB_CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.es}</option>)}
          </select>
        )}
        <div className="flex gap-2"><Button size="lg" onClick={begin}>Start</Button><Button size="lg" variant="ghost" onClick={() => nav('/exams')}>Back</Button></div>
      </Card>
    );
  }
  return (
    <ExamRunner
      key={attempt}
      items={items}
      title={meta.title}
      kind={kind as ExamKind}
      examId={meta.examId}
      recordAnswers={kind !== 'vocab'}
      onExit={() => setStarted(false)}
      onFinish={(o) => {
        if (kind === 'vocab') o.answers.filter((a) => !a.ans.ok).forEach((a) => setCardFlags(a.item.key.split(':')[1], { difficult: true }));
        recordExam(o.result, kind === 'vocab' ? o.result.correct * 5 : 0);
        setOutcome(o);
      }}
    />
  );
}

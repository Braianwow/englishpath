import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, BookOpen } from 'lucide-react';
import { READINGS, READING_BY_ID } from '../content/readings';
import { WB_BY_ID } from '../content/workbook';
import { useProgress, recordReading, recordExam, setLast } from '../store/progress';
import { Badge, Button, Card, PageHeader, SourceTag } from '../components/ui';
import ExamRunner, { ExamReport, type ExamOutcome } from '../components/ExamRunner';
import { SpeakBtn } from '../components/ExerciseView';
import { SkillTabs } from '../components/SkillHeader';

export default function Readings() {
  const { rid } = useParams();
  const p = useProgress();
  if (rid && READING_BY_ID[rid]) return <ReadingView id={rid} />;
  return (
    <div>
      <SkillTabs active="reading" />
      <PageHeader title="Reading" subtitle="Comprensión lectora sobre los temas del workbook. Leé el texto y respondé las preguntas." />
      <div className="grid gap-4 sm:grid-cols-2">
        {READINGS.map((r) => (
          <Link key={r.id} to={`/readings/${r.id}`}>
            <Card className="h-full transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-2 flex items-center justify-between gap-2"><Badge tone="sky">{r.theme}</Badge>{p.readings[r.id] && <Badge tone={p.readings[r.id].best >= 70 ? 'green' : 'amber'}>Mejor: {p.readings[r.id].best}%</Badge>}</div>
              <div className="font-semibold text-slate-900 dark:text-white">{r.title}</div>
              <div className="mt-1 text-sm text-slate-500">{r.qs.length} preguntas{r.ref && WB_BY_ID[r.ref] ? ` · Tema de Objective First Unit ${WB_BY_ID[r.ref].n}` : ''}</div>
            </Card>
          </Link>
        ))}
      </div>
      <p className="mt-6 text-sm text-slate-500">Los textos son material complementario escrito para esta plataforma sobre los temas del workbook; no son los textos originales del libro.</p>
    </div>
  );
}

function ReadingView({ id }: { id: string }) {
  const r = READING_BY_ID[id];
  const nav = useNavigate();
  const [phase, setPhase] = useState<'read' | 'quiz' | 'done'>('read');
  const [outcome, setOutcome] = useState<ExamOutcome | null>(null);
  const [k, setK] = useState(0);
  useEffect(() => { setLast({ kind: 'reading', id, title: `Lectura: ${r.title}`, path: `/readings/${id}` }); }, [id, r.title]);
  const items = r.qs.map((ex, i) => ({ key: `r:${id}:${i}`, unitId: null, ex }));

  return (
    <div className="flex flex-col gap-5">
      <Link to="/readings" className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-600"><ChevronLeft size={16} /> Lecturas</Link>
      {phase !== 'quiz' && (
        <Card className="mx-auto w-full max-w-3xl p-6 sm:p-8">
          <div className="mb-2 flex flex-wrap items-center gap-2"><Badge tone="sky">{r.theme}</Badge><SourceTag src={r.src} /></div>
          <div className="flex items-start justify-between gap-2">
            <h1 className="mb-4 font-display text-2xl font-bold text-slate-900 dark:text-white">{r.title}</h1>
            <SpeakBtn text={r.text} />
          </div>
          <div className="space-y-4 text-[17px] leading-relaxed text-slate-800 dark:text-slate-200">{r.text.split('\n\n').map((t, i) => <p key={i}>{t}</p>)}</div>
          {phase === 'read' && <Button size="lg" className="mt-6" onClick={() => setPhase('quiz')}><BookOpen size={18} /> Responder preguntas</Button>}
        </Card>
      )}
      {phase === 'quiz' && (
        <ExamRunner key={k} items={items} title={`Comprensión: ${r.title}`} kind="reading" examId={r.id} recordAnswers={false}
          onExit={() => setPhase('read')}
          onFinish={(o) => { recordReading(r.id, o.result.score); recordExam(o.result, o.result.correct * 5); setOutcome(o); setPhase('done'); }} />
      )}
      {phase === 'done' && outcome && (
        <ExamReport outcome={outcome} onRetry={() => { setK(k + 1); setPhase('quiz'); }} nextTo="/readings" nextLabel="Otras lecturas" />
      )}
      {phase === 'done' && <div className="text-center"><button onClick={() => nav('/readings')} className="text-sm text-brand-600 hover:underline">Volver a la lista</button></div>}
    </div>
  );
}

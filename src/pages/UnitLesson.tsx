import { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams, useNavigate } from 'react-router-dom';
import { BookOpen, Check, ChevronLeft, ChevronRight, ClipboardCheck, Dumbbell, Flame, Quote, Target } from 'lucide-react';
import { PATH, UNIT_BY_ID } from '../content';
import { moduleOf } from '../content/modules';
import { useProgress, reachStep, finishUnitTest, setLast, PASS_MARK } from '../store/progress';
import { buildUnitPractice, buildUnitTest } from '../lib/adaptive';
import { Button, Card, Rich, cx, Badge } from '../components/ui';
import { CompareBox, ErrorsList, ExamplesTabs, FormTable, UsesList } from '../components/GrammarBlocks';
import Session from '../components/Session';
import ExamRunner, { ExamReport, type ExamOutcome } from '../components/ExamRunner';

const STEPS = [
  { label: 'Aprender', icon: BookOpen },
  { label: 'Ejemplos', icon: Quote },
  { label: 'Práctica', icon: Dumbbell },
  { label: 'Práctica avanzada', icon: Flame },
  { label: 'Evaluación', icon: ClipboardCheck },
];

export default function UnitLesson() {
  const { unitId = '' } = useParams();
  const u = UNIT_BY_ID[unitId];
  const p = useProgress();
  const up = p.units[unitId];
  const reached = up?.step ?? 0;
  const [step, setStep] = useState(() => Math.min(reached, 4));
  const nav = useNavigate();

  useEffect(() => { setStep(Math.min(p.units[unitId]?.step ?? 0, 4)); }, [unitId]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (u) setLast({ kind: 'unit', id: u.id, title: `Unidad ${u.n}: ${u.title}`, path: `/learn/${u.id}` });
  }, [u]);

  if (!u) return <Navigate to="/courses" replace />;
  const m = moduleOf(u.id);
  const idx = PATH.indexOf(u.id);
  const nextId = PATH[idx + 1];

  const go = (s: number) => { if (s <= reached || s <= step) setStep(s); };
  const advance = (to: number) => { reachStep(u.id, to); setStep(to); };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link to={m ? `/courses/${m.id}` : '/courses'} className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-600"><ChevronLeft size={16} /> {m?.es ?? 'Cursos'}</Link>
        <div className="text-sm text-slate-500">Unidad {u.n}</div>
        <h1 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">{u.es}</h1>
        <div className="mt-0.5 flex flex-wrap items-center gap-2 text-slate-500">
          <span>{u.title}</span>
          {up?.completed && <Badge tone="green"><Check size={12} /> Aprobada {up.best}%</Badge>}
        </div>
      </div>

      {/* Steps: a simple bar + where you are */}
      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <span className="font-semibold text-slate-900 dark:text-white">Paso {step + 1} de 5 · {STEPS[step].label}</span>
          <span className="text-xs text-slate-400">Tocá un paso para volver</span>
        </div>
        <div className="flex gap-1.5">
          {STEPS.map((s, i) => {
            const unlocked = i <= reached;
            return (
              <button key={i} onClick={() => go(i)} disabled={!unlocked} title={unlocked ? s.label : `${s.label} (bloqueado)`} aria-label={s.label}
                className={cx('h-2.5 flex-1 rounded-full',
                  step === i ? 'bg-brand-500' : i < reached ? 'bg-emerald-500 hover:bg-emerald-400' : unlocked ? 'bg-brand-200 dark:bg-brand-500/40' : 'cursor-not-allowed bg-slate-200 dark:bg-slate-800')} />
            );
          })}
        </div>
      </div>

      {step === 0 && <LearnStep key={u.id} unitId={u.id} onDone={() => advance(Math.max(reached, 1))} />}
      {step === 1 && (
        <div className="flex flex-col gap-4">
          <Card><div className="mb-3 font-semibold text-slate-900 dark:text-white">Ejemplos</div><ExamplesTabs u={u} /></Card>
          {u.errors.length > 0 && <Card><div className="mb-3 font-semibold text-slate-900 dark:text-white">Errores frecuentes</div><ErrorsList errors={u.errors} /></Card>}
          <CompareBox u={u} />
          <div className="flex justify-end"><Button size="lg" onClick={() => advance(Math.max(reached, 2))}>Empezar a practicar <ChevronRight size={18} /></Button></div>
        </div>
      )}
      {step === 2 && <PracticeStep key={`${u.id}-b`} unitId={u.id} level="basic" onDone={() => advance(Math.max(reached, 3))} />}
      {step === 3 && <PracticeStep key={`${u.id}-a`} unitId={u.id} level="advanced" onDone={() => advance(Math.max(reached, 4))} />}
      {step === 4 && <TestStep key={u.id} unitId={u.id} nextId={nextId} onNext={() => nav(nextId ? `/learn/${nextId}` : '/courses')} />}
    </div>
  );
}

function LearnStep({ unitId, onDone }: { unitId: string; onDone: () => void }) {
  const u = UNIT_BY_ID[unitId];
  const blocks = useMemo(() => {
    const out: { title: string; node: React.ReactNode }[] = [];
    out.push({ title: 'Objetivos de aprendizaje', node: <ul className="flex flex-col gap-2">{u.goals.map((g, i) => <li key={i} className="flex gap-2"><Target size={18} className="mt-0.5 shrink-0 text-brand-500" />{g}</li>)}</ul> });
    u.explain.split(/\n\n+/).forEach((para, i, arr) => out.push({ title: arr.length > 1 ? `Explicación (${i + 1}/${arr.length})` : 'Explicación', node: <Rich text={para} className="text-[17px]" /> }));
    if (u.form) out.push({ title: 'Estructura', node: <FormTable rows={u.form} /> });
    if (u.uses.length) out.push({ title: 'Cuándo se usa', node: <UsesList uses={u.uses} /> });
    return out;
  }, [u]);
  const [shown, setShown] = useState(1);
  const all = shown >= blocks.length;
  return (
    <div className="flex flex-col gap-4">
      {blocks.slice(0, shown).map((b, i) => (
        <Card key={i} className="animate-fade-up">
          <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">{b.title}</div>
          <div className="text-slate-700 dark:text-slate-300">{b.node}</div>
        </Card>
      ))}
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">{Math.min(shown, blocks.length)} de {blocks.length}</span>
        {!all ? <Button size="lg" onClick={() => setShown((s) => s + 1)}>Siguiente <ChevronRight size={18} /></Button>
          : <Button size="lg" onClick={onDone}>Ver ejemplos <ChevronRight size={18} /></Button>}
      </div>
    </div>
  );
}

function PracticeStep({ unitId, level, onDone }: { unitId: string; level: 'basic' | 'advanced'; onDone: () => void }) {
  const u = UNIT_BY_ID[unitId];
  const p = useProgress();
  const [items] = useState(() => buildUnitPractice(u, level, p));
  const [finished, setFinished] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm text-slate-500">{level === 'basic' ? 'Ejercicios sencillos para fijar la forma. Si fallás uno, vuelve al final para que lo corrijas.' : 'Ejercicios más difíciles: traducción, corrección de errores y construcción de oraciones.'}</div>
      <Session
        items={items}
        title={level === 'basic' ? 'Práctica guiada' : 'Práctica avanzada'}
        onFinish={() => setFinished(true)}
        onExit={finished ? onDone : undefined}
        finishLabel={level === 'basic' ? 'Ir a práctica avanzada' : 'Ir a la evaluación'}
      />
    </div>
  );
}

function TestStep({ unitId, nextId, onNext }: { unitId: string; nextId?: string; onNext: () => void }) {
  const u = UNIT_BY_ID[unitId];
  const p = useProgress();
  const [attempt, setAttempt] = useState(0);
  const [started, setStarted] = useState(false);
  const [outcome, setOutcome] = useState<ExamOutcome | null>(null);
  const items = useMemo(() => buildUnitTest(u, p), [u, attempt]); // eslint-disable-line react-hooks/exhaustive-deps
  const up = p.units[unitId];

  if (outcome) {
    const passed = outcome.result.score >= PASS_MARK;
    return (
      <ExamReport
        outcome={outcome}
        onRetry={() => { setOutcome(null); setAttempt((a) => a + 1); setStarted(true); }}
        nextTo={passed && nextId ? `/learn/${nextId}` : undefined}
        nextLabel={nextId ? `Siguiente: Unidad ${UNIT_BY_ID[nextId].n}` : undefined}
      />
    );
  }
  if (!started) {
    return (
      <Card className="flex flex-col items-center gap-4 p-8 text-center">
        <ClipboardCheck size={40} className="text-amber-500" />
        <div className="font-display text-2xl font-bold text-slate-900 dark:text-white">Evaluación de la unidad</div>
        <p className="max-w-md text-slate-500">{items.length} preguntas variadas, sin pistas ni corrección hasta el final. Necesitás <strong>{PASS_MARK} %</strong> para aprobar la unidad. Las preguntas cambian en cada intento.</p>
        {up?.testAttempts ? <div className="text-sm text-slate-500">Intentos: {up.testAttempts} · Mejor nota: {up.best}%</div> : null}
        <div className="flex gap-2">
          <Button size="lg" onClick={() => setStarted(true)}>Empezar evaluación</Button>
          {nextId && up?.completed && <Button size="lg" variant="secondary" onClick={onNext}>Ir a la siguiente unidad</Button>}
        </div>
      </Card>
    );
  }
  return (
    <ExamRunner
      key={attempt}
      items={items}
      title={`Evaluación · Unidad ${u.n}`}
      kind="unit"
      examId={u.id}
      onExit={() => setStarted(false)}
      onFinish={(o) => { finishUnitTest(u.id, o.result.score, o.result); setOutcome(o); }}
    />
  );
}

import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AlertTriangle, Brain, Clock3, Sparkles, Target, Wrench } from 'lucide-react';
import { UNIT_BY_ID } from '../content';
import { useProgress, recordExam, reviewUnit, setLast } from '../store/progress';
import { buildDueReview, buildFocusPractice, buildMistakeReview, dueCards, dueUnits, weakTags, weakUnits, type Weakness } from '../lib/adaptive';
import { Badge, Card, Empty, LinkButton, PageHeader, Progress } from '../components/ui';
import Session, { type SessionSummary } from '../components/Session';
import type { KeyedExercise } from '../content';

export default function Practice() {
  const [sp] = useSearchParams();
  const mode = sp.get('mode');
  const units = sp.get('units')?.split(',').filter((id) => UNIT_BY_ID[id]) ?? [];
  if (mode === 'mistakes' || mode === 'focus' || mode === 'due') return <PracticeSession mode={mode} units={units} />;
  return <Overview />;
}

function PracticeSession({ mode, units }: { mode: 'mistakes' | 'focus' | 'due'; units: string[] }) {
  const p = useProgress();
  const nav = useNavigate();
  const [{ items, dueIds }] = useState<{ items: KeyedExercise[]; dueIds: string[] }>(() => {
    if (mode === 'mistakes') return { items: buildMistakeReview(p), dueIds: [] };
    if (mode === 'due') { const d = buildDueReview(p); return { items: d.items, dueIds: d.units }; }
    return { items: buildFocusPractice(units, p, 10), dueIds: [] };
  });
  useEffect(() => setLast({ kind: 'review', id: mode, title: mode === 'mistakes' ? 'Corrección de errores' : mode === 'due' ? 'Repaso espaciado' : 'Práctica de refuerzo', path: `/practice?mode=${mode}${units.length ? `&units=${units.join(',')}` : ''}` }), []); // eslint-disable-line react-hooks/exhaustive-deps
  const title = mode === 'mistakes' ? 'Corregí tus errores' : mode === 'due' ? 'Repaso espaciado' : `Refuerzo: ${units.map((id) => `U${UNIT_BY_ID[id].n}`).join(', ')}`;

  const finish = (s: SessionSummary) => {
    const acc = s.total ? s.correct / s.total : 0;
    recordExam({ id: `${mode}-${Date.now()}`, kind: 'review', title, date: Date.now(), total: s.total, correct: s.correct, score: Math.round(acc * 100), weakUnits: [...new Set(s.wrong.map((w) => w.item.unitId).filter(Boolean) as string[])] });
    if (mode === 'due') {
      for (const id of dueIds) {
        const own = s.wrong.filter((w) => w.item.unitId === id).length;
        const total = items.filter((it) => it.unitId === id).length || 1;
        reviewUnit(id, 1 - own / total);
      }
    }
  };

  if (!items.length) {
    return (
      <div className="mx-auto max-w-xl">
        <Empty icon={<Sparkles size={32} />} title={mode === 'mistakes' ? '¡No tenés errores pendientes!' : 'No hay nada para repasar ahora'}>
          <div className="mt-3"><LinkButton to="/practice">Volver</LinkButton></div>
        </Empty>
      </div>
    );
  }
  return <Session items={items} title={title} onFinish={finish} onExit={() => nav('/practice')} finishLabel="Volver al refuerzo" />;
}

function Overview() {
  const p = useProgress();
  const weak = weakUnits(p);
  const tags = weakTags(p);
  const mistakes = Object.keys(p.mistakes).length;
  const due = dueUnits(p);
  const cards = dueCards(p).length;
  const strong = Object.entries(p.units).filter(([id, u]) => UNIT_BY_ID[id] && u.completed && u.mastery >= 0.85).length;

  return (
    <div>
      <PageHeader title="Refuerzo inteligente" subtitle="La plataforma analiza tus respuestas y te propone práctica según tus dificultades." />
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <Card>
          <div className="mb-1 flex items-center gap-2 font-semibold text-slate-900 dark:text-white"><Wrench size={18} className="text-rose-500" /> Banco de errores</div>
          <div className="font-display text-3xl font-bold text-slate-900 dark:text-white">{mistakes}</div>
          <p className="mb-3 text-sm text-slate-500">Ejercicios que fallaste y todavía no respondiste bien. Desaparecen al acertarlos.</p>
          <LinkButton to="/practice?mode=mistakes" variant={mistakes ? 'primary' : 'secondary'}>Corregir errores</LinkButton>
        </Card>
        <Card>
          <div className="mb-1 flex items-center gap-2 font-semibold text-slate-900 dark:text-white"><Clock3 size={18} className="text-amber-500" /> Repaso espaciado</div>
          <div className="font-display text-3xl font-bold text-slate-900 dark:text-white">{due.length}</div>
          <p className="mb-3 text-sm text-slate-500">Unidades aprobadas cuyo repaso vence hoy. Si las dominás, el próximo repaso se aleja; si fallás, vuelve antes.</p>
          <LinkButton to="/practice?mode=due" variant={due.length ? 'primary' : 'secondary'}>Repasar</LinkButton>
        </Card>
        <Card>
          <div className="mb-1 flex items-center gap-2 font-semibold text-slate-900 dark:text-white"><Brain size={18} className="text-violet-500" /> Vocabulario</div>
          <div className="font-display text-3xl font-bold text-slate-900 dark:text-white">{cards}</div>
          <p className="mb-3 text-sm text-slate-500">Palabras cuyo repaso venció. Las que olvidás vuelven a aparecer en la misma sesión.</p>
          <LinkButton to="/vocabulary?tab=review" variant={cards ? 'primary' : 'secondary'}>Repasar palabras</LinkButton>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <div className="mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-white"><AlertTriangle size={18} className="text-rose-500" /> Temas con dificultad</div>
          {weak.length === 0 ? <p className="text-sm text-slate-500">No se detectaron temas débiles todavía. Se marca un tema cuando tu dominio baja del 60 %, acumulás 3+ errores sin corregir o no aprobaste su evaluación.</p> : (
            <div className="flex flex-col gap-2">{weak.slice(0, 8).map((w) => <WeakRow key={w.unitId} w={w} />)}</div>
          )}
        </Card>
        <Card>
          <div className="mb-3 flex items-center gap-2 font-semibold text-slate-900 dark:text-white"><Target size={18} className="text-brand-500" /> Errores por categoría gramatical</div>
          {tags.length === 0 ? <p className="text-sm text-slate-500">Cuando acumules errores, verás aquí en qué áreas (por ejemplo preposiciones o present perfect) se concentran, con una práctica específica para cada una.</p> : (
            <div className="flex flex-col gap-3">
              {tags.slice(0, 8).map((t) => (
                <div key={t.tag} className="flex items-center gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between text-sm"><span className="font-medium text-slate-900 dark:text-white">{t.label}</span><span className="text-slate-500">{t.errors} errores</span></div>
                    <Progress value={Math.min(1, t.errors / 10)} color="bg-rose-500" className="mt-1" />
                  </div>
                  <LinkButton size="sm" to={`/practice?mode=focus&units=${t.units.join(',')}`}>Practicar</LinkButton>
                </div>
              ))}
            </div>
          )}
          {strong > 0 && <p className="mt-4 text-sm text-emerald-700 dark:text-emerald-300">Dominás {strong} unidad(es) (≥ 85 %): su frecuencia de repaso se redujo automáticamente.</p>}
        </Card>
      </div>
    </div>
  );
}

function WeakRow({ w }: { w: Weakness }) {
  const u = UNIT_BY_ID[w.unitId];
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between dark:bg-slate-800/60">
      <div className="min-w-0">
        <div className="truncate font-medium text-slate-900 dark:text-white">U{u.n} · {u.title}</div>
        <div className="flex items-center gap-2 text-xs text-slate-500"><Badge tone="rose">{w.reason}</Badge></div>
      </div>
      <div className="flex gap-2">
        <LinkButton size="sm" variant="secondary" to={`/grammar/${u.id}`}>Teoría</LinkButton>
        <LinkButton size="sm" to={`/practice?mode=focus&units=${u.id}`}>Practicar</LinkButton>
      </div>
    </div>
  );
}

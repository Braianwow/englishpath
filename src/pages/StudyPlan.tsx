import { Link } from 'react-router-dom';
import { BookOpen, Brain, Headphones, Layers, Check, ExternalLink } from 'lucide-react';
import { useProgress, toggleStudyBlock } from '../store/progress';
import { addDays, todayKey } from '../lib/dates';
import { VOCAB } from '../content/vocab';
import { UNIT_BY_ID } from '../content';
import { Card, PageHeader, Progress, SourceTag, cx } from '../components/ui';

/** Content of "PLAN DE ESTUDIO - INTERMEDIO.pdf" (2-hour B1–B2 study plan). */
const BLOCKS = [
  { id: 'grammar', title: 'Gramática', min: 30, icon: Layers, color: 'text-brand-600 bg-brand-50 dark:bg-brand-500/15',
    resources: ['English Grammar in Use', 'BBC 6 Minute Grammar'],
    rec: 'Hacé de 1 a 3 temas de English Grammar in Use por semana. En tu tiempo libre, mirá un video de BBC 6 Minute Grammar para practicar en cualquier momento.',
    to: '/courses', cta: 'Ir a las unidades' },
  { id: 'vocab', title: 'Vocabulario', min: 30, icon: Brain, color: 'text-violet-600 bg-violet-50 dark:bg-violet-500/15',
    resources: ['Flashcards (Anki, Quizlet, papel…)'],
    rec: 'Dedicá 15–20 minutos semanales a repasar tus tarjetas anteriores y 10–15 minutos a crear nuevas. Apuntá a aprender entre 20 y 60 palabras nuevas por semana.',
    to: '/vocabulary?tab=review', cta: 'Repasar tarjetas' },
  { id: 'listening', title: 'Listening & Speaking', min: 30, icon: Headphones, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/15',
    resources: ['Speaking: clase grupal de Cambly', 'Shadowing de 1 video/podcast por día', '1–3 videos de “Learn English with TV series”'],
    rec: 'Una clase grupal de Cambly por semana (opcional pero muy recomendada). Hacé shadowing de un video o podcast por día: solo lleva 5 minutos. Intentá ver un video de Learn English with TV series por día, antes de dormir o al despertar.',
    to: '/assistant', cta: 'Practicar conversación' },
  { id: 'reading', title: 'Lectura', min: 30, icon: BookOpen, color: 'text-amber-600 bg-amber-50 dark:bg-amber-500/15',
    resources: ['Un libro que te guste'],
    rec: 'Elegí un libro que te guste y leé al menos 30 minutos por semana. Leé cuando tengas tiempo libre: entre clases, en el colectivo, esperando un turno médico, en el aeropuerto…',
    to: '/readings', cta: 'Lecturas de la plataforma' },
];

export default function StudyPlan() {
  const p = useProgress();
  const today = todayKey();
  const checked = p.studyPlanChecks[today] ?? [];
  // week stats (last 7 days, real data)
  const week = Array.from({ length: 7 }, (_, i) => addDays(today, i - 6));
  const weekStart = new Date(week[0]).getTime();
  const newWords = VOCAB.filter((w) => { const c = p.cards[w.id]; return c && c.lastSeen >= weekStart && c.reps + c.lapses <= 2 && c.reps > 0; }).length;
  const topics = Object.entries(p.units).filter(([id, u]) => UNIT_BY_ID[id] && u.lastStudied >= weekStart && u.step >= 2).length;
  const readingsWeek = Object.values(p.readings).filter((r) => r.at >= weekStart).length;
  const weekMinutes = week.reduce((a, d) => a + (p.days[d]?.minutes ?? 0), 0);

  return (
    <div>
      <PageHeader title="Plan de estudio de 2 horas" subtitle="La rutina diaria B1–B2 de tu PDF: 30 minutos para cada habilidad." actions={<SourceTag src="plan" />} />

      <div className="mb-6 grid gap-3 sm:grid-cols-4">
        <Card className="p-4"><div className="text-xs uppercase text-slate-500">Temas de gramática (7 días)</div><div className="font-display text-2xl font-bold text-slate-900 dark:text-white">{topics}</div><div className="text-xs text-slate-500">Meta del plan: 1–3 por semana</div><Progress className="mt-2" value={topics / 3} /></Card>
        <Card className="p-4"><div className="text-xs uppercase text-slate-500">Palabras nuevas (7 días)</div><div className="font-display text-2xl font-bold text-slate-900 dark:text-white">{newWords}</div><div className="text-xs text-slate-500">Meta: 20–60 por semana</div><Progress className="mt-2" value={newWords / 20} color="bg-violet-500" /></Card>
        <Card className="p-4"><div className="text-xs uppercase text-slate-500">Lecturas (7 días)</div><div className="font-display text-2xl font-bold text-slate-900 dark:text-white">{readingsWeek}</div><div className="text-xs text-slate-500">Meta: 30 min por semana</div><Progress className="mt-2" value={readingsWeek / 2} color="bg-amber-500" /></Card>
        <Card className="p-4"><div className="text-xs uppercase text-slate-500">Tiempo en la plataforma</div><div className="font-display text-2xl font-bold text-slate-900 dark:text-white">{weekMinutes} min</div><div className="text-xs text-slate-500">últimos 7 días</div></Card>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">Hoy</h2>
        <span className="text-sm text-slate-500">{checked.length}/4 bloques completados</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {BLOCKS.map((b) => {
          const done = checked.includes(b.id);
          const Icon = b.icon;
          return (
            <Card key={b.id} className={cx('flex flex-col gap-3 transition', done && 'ring-2 ring-emerald-400')}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={cx('rounded-xl p-2.5', b.color)}><Icon size={20} /></div>
                  <div><div className="font-semibold text-slate-900 dark:text-white">{b.title}</div><div className="text-sm text-slate-500">{b.min} minutos</div></div>
                </div>
                <button onClick={() => toggleStudyBlock(today, b.id)} className={cx('flex h-9 w-9 items-center justify-center rounded-xl border-2 transition', done ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300 text-transparent hover:border-emerald-400 dark:border-slate-600')} aria-label={done ? 'Marcar como no hecho' : 'Marcar como hecho'}>
                  <Check size={18} />
                </button>
              </div>
              <ul className="flex flex-wrap gap-1.5">{b.resources.map((r) => <li key={r} className="rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-medium dark:bg-slate-800">{r}</li>)}</ul>
              <p className="text-sm text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Recomendación: </strong>{b.rec}</p>
              <Link to={b.to} className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline">{b.cta} <ExternalLink size={14} /></Link>
            </Card>
          );
        })}
      </div>
      <p className="mt-6 text-sm text-slate-500">Cambly, BBC 6 Minute Grammar y “Learn English with TV series” son recursos externos que menciona el plan; la plataforma no los incluye, pero podés marcar el bloque como hecho cuando los uses.</p>
    </div>
  );
}

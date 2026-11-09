import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Check, CheckCircle2, ChevronLeft, ChevronRight, CircleDashed, Flame, GraduationCap, Info, NotebookPen, Target, Wrench } from 'lucide-react';
import { useProgress } from '../store/progress';
import { useStudyTime } from '../store/timer';
import { PATH, UNIT_BY_ID } from '../content';
import { COLOR, moduleOf } from '../content/modules';
import { dueCards, estimatedLevel, nextUnit } from '../lib/adaptive';
import { streak } from '../lib/gamification';
import { addDays, todayKey } from '../lib/dates';
import { DAILY_GOAL_MIN, SECTION_GOAL_SECS, dayMinutes, fmtClock } from '../lib/studyTime';
import { SKILLS } from '../components/SkillHeader';
import { LinkButton, cx } from '../components/ui';

const STEP_NAMES = ['Aprender', 'Ejemplos', 'Práctica', 'Práctica avanzada', 'Evaluación'];
const panel = 'rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900';

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? 'Buen día' : h < 20 ? 'Buenas tardes' : 'Buenas noches';
}

function SectionTitle({ children, info, right }: { children: React.ReactNode; info?: string; right?: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h2 className="flex items-center gap-2 font-display text-xl font-bold text-slate-900 dark:text-white">
        {children}
        {info && <span title={info} className="cursor-help text-slate-400"><Info size={17} /></span>}
      </h2>
      {right}
    </div>
  );
}

export default function Dashboard() {
  const p = useProgress();
  const { secs, minutes } = useStudyTime();
  const st = streak(p, minutes);
  const level = estimatedLevel(p);
  const u = UNIT_BY_ID[nextUnit(p)];
  const step = Math.min(p.units[u.id]?.step ?? 0, 4);
  const started = (p.units[u.id]?.step ?? 0) > 0;
  const mistakes = Object.keys(p.mistakes).length;
  const cards = dueCards(p).length;

  return (
    <div className="flex flex-col gap-10">
      {/* Welcome */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-white">{greeting()} 👋</h1>
          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
            Tu nivel estimado: <span className="font-semibold text-brand-700 dark:text-brand-500">{level.label}</span>
            <span className="mx-1.5">·</span>
            Seguís en: <span className="font-semibold text-brand-700 dark:text-brand-500">Unidad {u.n}</span>
          </p>
        </div>
        <LinkButton to="/progress" variant="secondary" size="sm" className="px-5 py-2.5">Ver progreso</LinkButton>
      </div>

      <Recommended currentId={u.id} mistakes={mistakes} cards={cards} />

      {/* Study + daily goal */}
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr_0.9fr]">
        <div className="lg:col-span-2">
          <SectionTitle>Tu estudio</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureCard
              tag="Gramática" title="Aprendé paso a paso" glow="lime" icon={GraduationCap}
              text={<>Unidad {u.n}: <strong className="text-slate-900 dark:text-white">{u.es}</strong>. Paso {step + 1} de 5 · {STEP_NAMES[step]}.</>}
              to={`/learn/${u.id}`} cta={started ? 'Continuar' : 'Empezar'}
              extra={<div className="mt-4 flex gap-1">{STEP_NAMES.map((n, i) => <span key={n} className={cx('h-1.5 flex-1 rounded-full', i < step ? 'bg-brand-500' : i === step ? 'bg-brand-500/50' : 'bg-slate-200 dark:bg-slate-800')} />)}</div>}
            />
            <FeatureCard
              tag="Práctica" title="Practicá lo que aprendiste" glow="pink" icon={Target}
              text={<>{mistakes ? <><strong className="text-slate-900 dark:text-white">{mistakes} errores</strong> para corregir</> : 'Sin errores pendientes'}{cards ? <> y <strong className="text-slate-900 dark:text-white">{cards} palabras</strong> para repasar</> : ''}. Ejercicios mezclados según lo que más te cuesta.</>}
              to={mistakes ? '/practice?mode=mistakes' : '/practice'} cta="Practicar"
            />
          </div>
        </div>
        <div>
          <SectionTitle info="Cada día necesitás 2 horas de estudio (por ejemplo, 4 bloques de 30 minutos) para que sume a tu racha.">Meta diaria</SectionTitle>
          <div className={cx(panel, 'flex flex-col p-4')}>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 font-display text-xl font-bold text-slate-900 dark:text-white">
                  <Flame size={19} className={st.activeToday ? 'text-orange-500' : 'text-slate-400'} /> {st.current} {st.current === 1 ? 'día' : 'días'}
                </div>
                <div className="text-xs text-slate-500">Racha · mejor: {st.best}</div>
              </div>
              <div className="text-right text-xs text-slate-500">{st.activeToday ? <span className="font-semibold text-brand-700 dark:text-brand-500">¡Cumplida hoy!</span> : <>Faltan <strong className="text-slate-800 dark:text-slate-200">{st.missingMin} min</strong></>}</div>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"><div className="h-full rounded-full bg-brand-500 transition-all duration-700" style={{ width: `${Math.min(100, (minutes / DAILY_GOAL_MIN) * 100)}%` }} /></div>
              <span className="text-xs tabular-nums text-slate-500">{Math.min(minutes, DAILY_GOAL_MIN)}/{DAILY_GOAL_MIN}</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {SKILLS.map(({ id, to, label }) => {
                const v = secs[id] ?? 0;
                const done = v >= SECTION_GOAL_SECS;
                return (
                  <Link key={id} to={to} className="pressable flex items-center justify-between rounded-lg bg-slate-100 px-2.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700" title={`${label}: ${fmtClock(v)} de 30:00`}>
                    {label}
                    {done ? <CheckCircle2 size={15} className="text-brand-600 dark:text-brand-500" /> : v > 0 ? <span className="tabular-nums text-slate-500">{Math.floor(v / 60)}m</span> : <CheckCircle2 size={15} className="text-slate-300 dark:text-slate-600" />}
                  </Link>
                );
              })}
            </div>
            <LinkButton to="/plan" variant="secondary" size="sm" className="mt-3 w-full">Ver plan de estudio</LinkButton>
          </div>
        </div>
      </div>

      {/* Skills row */}
      <div className="-mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.filter((s) => s.id !== 'grammar' && s.id !== 'vocabulary').map(({ id, to, label, desc, icon: Icon }) => (
          <Link key={id} to={to} className={cx(panel, 'pressable group flex items-start gap-3 p-4 hover:border-brand-500/50')}>
            <Icon size={18} className="mt-0.5 shrink-0 text-slate-400 transition group-hover:text-brand-600 dark:group-hover:text-brand-500" />
            <div>
              <div className="text-sm text-slate-900 dark:text-white"><span className="text-slate-500">Skill</span> <strong>{label}</strong></div>
              <div className="mt-0.5 text-xs text-slate-500">{desc}</div>
            </div>
          </Link>
        ))}
      </div>

      <Week />
    </div>
  );
}

/** Horizontal carousel: the unit you are on plus the next ones, and pending reviews. */
function Recommended({ currentId, mistakes, cards }: { currentId: string; mistakes: number; cards: number }) {
  const p = useProgress();
  const track = useRef<HTMLDivElement>(null);
  const i = Math.max(0, PATH.indexOf(currentId));
  const units = PATH.slice(i, i + 10);
  const scroll = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * 270, behavior: 'smooth' });

  const mine = Object.keys(p.myWords ?? {}).length;
  const extra = [
    { key: 'mine', to: '/my-words', badge: 'Mis palabras', title: mine ? 'Repasar mis palabras' : 'Agregar mis palabras', sub: mine ? `${mine} guardadas · agregá más` : 'palabra = oración = significado', icon: NotebookPen, glow: 'bg-brand-500' },
    mistakes > 0 && { key: 'mist', to: '/practice?mode=mistakes', badge: 'Repaso', title: 'Corregir mis errores', sub: `${mistakes} pendientes`, icon: Wrench, glow: 'bg-rose-500' },
    cards > 0 && { key: 'cards', to: '/vocabulary?tab=review', badge: 'Palabras', title: 'Repasar vocabulario', sub: `${cards} para hoy`, icon: Brain, glow: 'bg-violet-500' },
  ].filter(Boolean) as { key: string; to: string; badge: string; title: string; sub: string; icon: typeof Brain; glow: string }[];

  return (
    <section>
      <SectionTitle info="Tu unidad actual, las que siguen en el recorrido y los repasos pendientes."
        right={<div className="flex gap-1">
          <button onClick={() => scroll(-1)} aria-label="Anterior" className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"><ChevronLeft size={18} /></button>
          <button onClick={() => scroll(1)} aria-label="Siguiente" className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"><ChevronRight size={18} /></button>
        </div>}>
        Recomendado para vos
      </SectionTitle>
      <div ref={track} className="-mx-4 flex snap-x gap-3 overflow-x-auto scroll-smooth px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
        {units.map((id) => {
          const unit = UNIT_BY_ID[id];
          const m = moduleOf(id);
          const up = p.units[id];
          const Icon = up?.completed ? CheckCircle2 : (up?.step ?? 0) > 0 ? CircleDashed : null;
          return (
            <Link key={id} to={`/learn/${id}`} className={cx(panel, 'pressable group w-60 shrink-0 snap-start p-3 transition hover:border-brand-500/50')}>
              <div className="relative h-32 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-950">
                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(125,140,165,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(125,140,165,.18)_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className={cx('absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-2xl transition group-hover:opacity-80', COLOR[m?.color ?? 'indigo']?.bg)} />
                <div className="absolute inset-0 flex items-center justify-center font-display text-5xl font-extrabold text-slate-900/80 dark:text-white/90">{unit.n}</div>
                <span className="absolute left-2 top-2 rounded bg-white/80 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:bg-slate-800/90 dark:text-slate-300">{id === currentId ? 'Actual' : 'Unidad'}</span>
                {Icon && <Icon size={16} className="absolute right-2 top-2 text-brand-600 dark:text-brand-500" />}
              </div>
              <div className="mt-3 line-clamp-1 font-semibold text-slate-900 dark:text-white">{unit.es}</div>
              <div className="mt-1 line-clamp-1 text-xs text-slate-500">{m?.es}</div>
            </Link>
          );
        })}
        {extra.map((e) => (
          <Link key={e.key} to={e.to} className={cx(panel, 'pressable group w-60 shrink-0 snap-start p-3 transition hover:border-brand-500/50')}>
            <div className="relative h-32 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-950">
              <div className={cx('absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-2xl', e.glow)} />
              <div className="absolute inset-0 flex items-center justify-center text-slate-900/80 dark:text-white/90"><e.icon size={42} /></div>
              <span className="absolute left-2 top-2 rounded bg-white/80 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:bg-slate-800/90 dark:text-slate-300">{e.badge}</span>
            </div>
            <div className="mt-3 font-semibold text-slate-900 dark:text-white">{e.title}</div>
            <div className="mt-1 text-xs text-slate-500">{e.sub}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ tag, title, text, to, cta, icon: Icon, glow, extra }: {
  tag: string; title: string; text: React.ReactNode; to: string; cta: string; icon: typeof Brain; glow: 'lime' | 'pink'; extra?: React.ReactNode;
}) {
  return (
    <div className={cx(panel, 'relative flex min-h-[240px] flex-col overflow-hidden p-5')}>
      <div className={cx('pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full opacity-30 blur-3xl', glow === 'lime' ? 'bg-brand-500' : 'bg-fuchsia-500')} />
      <Icon size={96} strokeWidth={1.2} className={cx('pointer-events-none absolute -right-3 bottom-6 opacity-25', glow === 'lime' ? 'text-brand-600 dark:text-brand-500' : 'text-fuchsia-500')} />
      <div className="relative text-sm text-slate-600 dark:text-slate-300">EnglishPath <strong>{tag}</strong></div>
      <div className="relative mt-3 font-display text-xl font-bold text-slate-900 dark:text-white">{title}</div>
      <p className="relative mt-2 max-w-[17rem] text-sm text-slate-500 dark:text-slate-400">{text}</p>
      <div className="relative">{extra}</div>
      <div className="relative mt-auto pt-5">
        <LinkButton to={to} size="sm" className="px-5 py-2.5">{cta}</LinkButton>
      </div>
    </div>
  );
}

/** Last 7 days: which ones reached the 2 hours. */
function Week() {
  const p = useProgress();
  const { minutes } = useStudyTime();
  const today = todayKey();
  const days = Array.from({ length: 7 }, (_, i) => addDays(today, i - 6));
  const DOW = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  return (
    <section>
      <SectionTitle info="Un día con 2 horas o más suma a tu racha (llama naranja).">Tu semana</SectionTitle>
      <div className="grid grid-cols-7 gap-2">
        {days.map((k) => {
          const m = k === today ? minutes : dayMinutes(p.days[k]);
          const ok = m >= DAILY_GOAL_MIN;
          const [y, mo, d] = k.split('-').map(Number);
          return (
            <div key={k} className={cx(panel, 'flex flex-col items-center gap-1.5 px-1 py-3', k === today && 'border-brand-500/60 dark:border-brand-500/60')}>
              <span className="text-[11px] font-medium text-slate-500">{DOW[new Date(y, mo - 1, d).getDay()]} {d}</span>
              <span className={cx('flex h-9 w-9 items-center justify-center rounded-full', ok ? 'bg-orange-500 text-white' : m > 0 ? 'bg-orange-500/15 text-orange-500' : 'bg-slate-100 text-slate-400 dark:bg-slate-800')}>
                {ok ? <Flame size={16} /> : m > 0 ? <Check size={14} /> : <span className="text-xs">–</span>}
              </span>
              <span className="text-[11px] tabular-nums text-slate-500">{m} min</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

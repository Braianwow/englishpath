import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Brain, CheckCircle2, ChevronLeft, Flag, Layers, NotebookPen, RefreshCw, Repeat, Star, BarChart3, ClipboardCheck, Search } from 'lucide-react';
import { VOCAB, VOCAB_CATEGORIES, WORD_BY_ID, CATEGORY_REF } from '../content/vocab';
import { WB_BY_ID } from '../content/workbook';
import type { VocabWord } from '../types';
import { useProgress, useSettings, reviewCard, setCardFlags, setLast } from '../store/progress';
import { isDue, newCard, previewInterval, type Grade } from '../lib/srs';
import { todayKey } from '../lib/dates';
import { normalize, shuffle } from '../lib/grade';
import { Badge, Button, Card, Empty, LinkButton, PageHeader, Progress, SourceTag, cx } from '../components/ui';
import { SpeakBtn } from '../components/ExerciseView';
import { SkillTabs } from '../components/SkillHeader';
import MyWords from '../components/MyWords';

type Tab = 'review' | 'mine' | 'browse' | 'stats';

export default function Vocabulary() {
  const [sp, setSp] = useSearchParams();
  const tab = (sp.get('tab') as Tab) || 'review';
  const setTab = (t: Tab) => setSp({ tab: t }, { replace: true });
  return (
    <div>
      <SkillTabs active="vocabulary" />
      <PageHeader title="Vocabulario" subtitle="Tarjetas con repetición espaciada: las palabras que te cuestan vuelven más seguido." actions={<LinkButton to="/exam/vocab" variant="secondary"><ClipboardCheck size={16} /> Prueba de vocabulario</LinkButton>} />
      <div className="mb-5 inline-flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
        {([['review', 'Repasar', Repeat], ['mine', 'Mis palabras', NotebookPen], ['browse', 'Explorar', Layers], ['stats', 'Estadísticas', BarChart3]] as const).map(([id, label, Icon]) => (
          <button key={id} onClick={() => setTab(id)} className={cx('inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition', tab === id ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white' : 'text-slate-500')}>
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>
      {tab === 'review' && <Review />}
      {tab === 'mine' && <MyWords />}
      {tab === 'browse' && <Browse />}
      {tab === 'stats' && <Stats />}
    </div>
  );
}

function buildQueue(cards: ReturnType<typeof useProgress>['cards'], cat: string, newLimit: number): string[] {
  const now = Date.now();
  const pool = VOCAB.filter((w) => cat === 'all' || w.cat === cat);
  const due = pool.filter((w) => isDue(cards[w.id], now)).sort((a, b) => cards[a.id].due - cards[b.id].due);
  const difficult = pool.filter((w) => cards[w.id]?.difficult && !due.includes(w) && (cards[w.id].due - now) < 86_400_000);
  const fresh = pool.filter((w) => !cards[w.id] || (cards[w.id].reps === 0 && cards[w.id].lapses === 0 && !cards[w.id].learned));
  return [...due, ...difficult, ...fresh.slice(0, newLimit)].map((w) => w.id);
}

function Review() {
  const p = useProgress();
  const settings = useSettings();
  const [cat, setCat] = useState('all');
  const [reverse, setReverse] = useState(false);
  const [queue, setQueue] = useState<string[] | null>(null);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [stats, setStats] = useState({ again: 0, ok: 0 });

  const doneToday = p.days[todayKey()]?.cards ?? 0;
  const preview = useMemo(() => buildQueue(p.cards, cat, Math.max(5, settings.dailyCardsGoal - doneToday)), [p.cards, cat, settings.dailyCardsGoal, doneToday]);
  const dueCount = VOCAB.filter((w) => (cat === 'all' || w.cat === cat) && isDue(p.cards[w.id])).length;

  const start = () => {
    setQueue(preview);
    setI(0); setFlipped(false); setStats({ again: 0, ok: 0 });
    setLast({ kind: 'vocab', id: cat, title: 'Repaso de vocabulario', path: '/vocabulary?tab=review' });
  };

  if (!queue) {
    return (
      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="mb-4 font-semibold text-slate-900 dark:text-white">Nueva sesión de repaso</div>
          <label className="mb-1 block text-sm font-medium">Categoría</label>
          <select value={cat} onChange={(e) => setCat(e.target.value)} className="mb-4 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 dark:border-slate-700 dark:bg-slate-900">
            <option value="all">Todas las categorías ({VOCAB.length} palabras)</option>
            {VOCAB_CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.es}</option>)}
          </select>
          <label className="mb-4 flex items-center gap-2 text-sm"><input type="checkbox" checked={reverse} onChange={(e) => setReverse(e.target.checked)} className="h-4 w-4 rounded" /> Modo inverso (ver en español, recordar en inglés)</label>
          <div className="mb-4 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl bg-amber-50 p-3 dark:bg-amber-500/10"><div className="text-xl font-bold text-amber-700 dark:text-amber-300">{dueCount}</div><div className="text-xs text-slate-500">para repasar</div></div>
            <div className="rounded-xl bg-brand-50 p-3 dark:bg-brand-500/10"><div className="text-xl font-bold text-brand-700 dark:text-brand-300">{Math.max(0, preview.length - dueCount)}</div><div className="text-xs text-slate-500">nuevas / difíciles</div></div>
            <div className="rounded-xl bg-emerald-50 p-3 dark:bg-emerald-500/10"><div className="text-xl font-bold text-emerald-700 dark:text-emerald-300">{doneToday}</div><div className="text-xs text-slate-500">repasadas hoy</div></div>
          </div>
          <Button size="lg" onClick={start} disabled={!preview.length} className="w-full sm:w-auto"><Brain size={18} /> Empezar ({preview.length} tarjetas)</Button>
          {!preview.length && <p className="mt-3 text-sm text-slate-500">¡No hay tarjetas pendientes en esta categoría! Volvé más tarde o elegí otra.</p>}
        </Card>
        <Card>
          <div className="mb-2 font-semibold text-slate-900 dark:text-white">¿Cómo funciona?</div>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li><strong>Otra vez</strong>: la tarjeta vuelve en 10 minutos.</li>
            <li><strong>Difícil / Bien / Fácil</strong>: el intervalo crece (1 día, 6 días, semanas…).</li>
            <li>Si fallás una palabra dos veces se marca como <strong>difícil</strong> y aparece más seguido.</li>
            <li>Una palabra cuenta como <strong>aprendida</strong> cuando su intervalo supera 21 días o la marcás vos.</li>
          </ul>
        </Card>
      </div>
    );
  }

  if (i >= queue.length) {
    return (
      <Card className="mx-auto flex max-w-lg flex-col items-center gap-3 p-8 text-center">
        <CheckCircle2 size={44} className="text-emerald-500" />
        <div className="font-display text-2xl font-bold text-slate-900 dark:text-white">¡Sesión terminada!</div>
        <div className="text-slate-500">{queue.length} tarjetas · {stats.ok} recordadas · {stats.again} para volver a ver</div>
        <div className="flex gap-2"><Button onClick={() => setQueue(null)}>Volver</Button><Button variant="secondary" onClick={start}><RefreshCw size={16} /> Otra sesión</Button></div>
      </Card>
    );
  }

  const w = WORD_BY_ID[queue[i]];
  const card = p.cards[w.id] ?? newCard();
  const grade = (g: Grade) => {
    reviewCard(w.id, g);
    setStats((s) => ({ again: s.again + (g === 0 ? 1 : 0), ok: s.ok + (g > 0 ? 1 : 0) }));
    if (g === 0) setQueue((q) => [...q!, w.id]);
    setFlipped(false);
    setI(i + 1);
  };

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-4">
      <div className="flex items-center gap-3">
        <button onClick={() => setQueue(null)} className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Salir"><ChevronLeft size={20} /></button>
        <Progress value={i / queue.length} className="h-3" />
        <span className="text-sm font-semibold tabular-nums text-slate-500">{i + 1}/{queue.length}</span>
      </div>
      <Flashcard w={w} flipped={flipped} onFlip={() => setFlipped(!flipped)} reverse={reverse} difficult={card.difficult} />
      <div className="flex justify-center gap-2">
        <button onClick={() => setCardFlags(w.id, { difficult: !card.difficult })} className={cx('inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium', card.difficult ? 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800')}><Flag size={14} /> {card.difficult ? 'Difícil' : 'Marcar difícil'}</button>
        <button onClick={() => { setCardFlags(w.id, { learned: true }); setFlipped(false); setI(i + 1); }} className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"><Star size={14} /> Ya la sé</button>
      </div>
      {!flipped ? (
        <Button size="lg" onClick={() => setFlipped(true)}>Mostrar respuesta</Button>
      ) : (
        <div className="grid grid-cols-4 gap-2">
          {([[0, 'Otra vez', 'bg-rose-600 hover:bg-rose-700'], [1, 'Difícil', 'bg-amber-500 hover:bg-amber-600'], [2, 'Bien', 'bg-emerald-600 hover:bg-emerald-700'], [3, 'Fácil', 'bg-sky-600 hover:bg-sky-700']] as [Grade, string, string][]).map(([g, label, cls]) => (
            <button key={g} onClick={() => grade(g)} className={cx('flex flex-col items-center rounded-xl px-2 py-2.5 font-semibold text-white transition active:scale-95', cls)}>
              <span className="text-sm">{label}</span><span className="text-[11px] font-normal opacity-80">{previewInterval(card, g)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Flashcard({ w, flipped, onFlip, reverse, difficult }: { w: VocabWord; flipped: boolean; onFlip: () => void; reverse: boolean; difficult: boolean }) {
  const front = reverse ? (
    <><div className="text-sm text-slate-500">¿Cómo se dice en inglés?</div><div className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-white">{w.es}</div><div className="mt-2 text-sm text-slate-400">{w.pos}</div></>
  ) : (
    <><div className="font-display text-4xl font-bold text-slate-900 dark:text-white">{w.en}</div><div className="mt-2 font-mono text-slate-500">/{w.ipa}/</div><div className="mt-1 text-sm text-slate-400">{w.pos}</div><SpeakBtn text={w.en} className="mt-2" /></>
  );
  return (
    <div className="flip h-72 cursor-pointer select-none" onClick={onFlip}>
      <div className={cx('flip-inner relative h-full w-full', flipped && 'flipped')}>
        <Card className="flip-face absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          {difficult && <Badge tone="rose" className="absolute right-4 top-4">difícil</Badge>}
          {front}
          <div className="absolute bottom-4 text-xs text-slate-400">Tocá para girar</div>
        </Card>
        <Card className="flip-face flip-back absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
          <div className="font-display text-3xl font-bold text-slate-900 dark:text-white">{w.en}</div>
          <div className="font-mono text-sm text-slate-500">/{w.ipa}/ · {w.pos}</div>
          <div className="text-xl font-semibold text-brand-700 dark:text-brand-300">{w.es}</div>
          <div className="mt-2 flex items-center gap-1 rounded-xl bg-slate-50 px-4 py-2 italic text-slate-700 dark:bg-slate-800 dark:text-slate-200">“{w.ex}” <SpeakBtn text={w.ex} /></div>
        </Card>
      </div>
    </div>
  );
}

function Browse() {
  const p = useProgress();
  const [cat, setCat] = useState<string | null>(null);
  const [q, setQ] = useState('');
  const words = useMemo(() => {
    const nq = normalize(q);
    return VOCAB.filter((w) => (!cat || w.cat === cat) && (!nq || normalize(`${w.en} ${w.es}`).includes(nq)));
  }, [cat, q]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar palabra en inglés o español…" className="input pl-10" />
      </div>
      <div className="flex flex-wrap gap-2">
        <button onClick={() => setCat(null)} className={cx('rounded-xl px-3 py-1.5 text-sm font-medium', !cat ? 'bg-brand-500 text-slate-950' : 'bg-slate-100 dark:bg-slate-800')}>Todas</button>
        {VOCAB_CATEGORIES.map((c) => {
          const total = VOCAB.filter((w) => w.cat === c.id).length;
          const learned = VOCAB.filter((w) => w.cat === c.id && (p.cards[w.id]?.learned || (p.cards[w.id]?.reps ?? 0) >= 2)).length;
          return <button key={c.id} onClick={() => setCat(c.id)} className={cx('rounded-xl px-3 py-1.5 text-sm font-medium', cat === c.id ? 'bg-brand-500 text-slate-950' : 'bg-slate-100 dark:bg-slate-800')}>{c.title} <span className="opacity-60">{learned}/{total}</span></button>;
        })}
      </div>
      {cat && (
        <Card className="flex flex-wrap items-center justify-between gap-2 p-4">
          <div><div className="font-semibold text-slate-900 dark:text-white">{VOCAB_CATEGORIES.find((c) => c.id === cat)?.es}</div>
            {CATEGORY_REF[cat]?.startsWith('wb') && <Link to={`/workbook/${CATEGORY_REF[cat]}`} className="text-sm text-sky-700 hover:underline dark:text-sky-300">Ver Objective First · Unit {WB_BY_ID[CATEGORY_REF[cat]!]?.n}</Link>}
          </div>
          <SourceTag src={VOCAB_CATEGORIES.find((c) => c.id === cat)!.src} />
        </Card>
      )}
      {words.length === 0 ? <Empty title="No hay palabras que coincidan" /> : (
        <div className="grid gap-2 md:grid-cols-2">
          {words.map((w) => {
            const c = p.cards[w.id];
            const learned = c?.learned || (c?.reps ?? 0) >= 2;
            return (
              <Card key={w.id} className="flex items-start justify-between gap-3 p-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2"><span className="font-semibold text-slate-900 dark:text-white">{w.en}</span><span className="font-mono text-xs text-slate-400">/{w.ipa}/</span><SpeakBtn text={w.en} /></div>
                  <div className="text-sm text-brand-700 dark:text-brand-300">{w.es} <span className="text-slate-400">· {w.pos}</span></div>
                  <div className="mt-1 text-sm italic text-slate-500">{w.ex}</div>
                </div>
                <div className="flex shrink-0 flex-col gap-1">
                  <button onClick={() => setCardFlags(w.id, { learned: !c?.learned })} title="Marcar como aprendida" className={cx('rounded-lg p-1.5', learned ? 'text-emerald-600' : 'text-slate-300 hover:text-emerald-500')}><CheckCircle2 size={18} /></button>
                  <button onClick={() => setCardFlags(w.id, { difficult: !c?.difficult })} title="Marcar como difícil" className={cx('rounded-lg p-1.5', c?.difficult ? 'text-rose-600' : 'text-slate-300 hover:text-rose-500')}><Flag size={18} /></button>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Stats() {
  const p = useProgress();
  const seen = VOCAB.filter((w) => p.cards[w.id] && (p.cards[w.id].reps + p.cards[w.id].lapses > 0 || p.cards[w.id].learned));
  const learned = VOCAB.filter((w) => p.cards[w.id]?.learned || (p.cards[w.id]?.reps ?? 0) >= 2);
  const mastered = VOCAB.filter((w) => p.cards[w.id]?.learned);
  const difficult = VOCAB.filter((w) => p.cards[w.id]?.difficult);
  const due = VOCAB.filter((w) => isDue(p.cards[w.id]));
  const hardest = shuffle(difficult).slice(0, 8);
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {[['Vistas', seen.length], ['Aprendidas', learned.length], ['Dominadas (21+ días)', mastered.length], ['Difíciles', difficult.length], ['Pendientes hoy', due.length]].map(([l, v]) => (
          <Card key={l as string} className="p-4 text-center"><div className="font-display text-2xl font-bold text-slate-900 dark:text-white">{v}</div><div className="text-xs text-slate-500">{l}</div></Card>
        ))}
      </div>
      <Card>
        <div className="mb-3 font-semibold text-slate-900 dark:text-white">Progreso por categoría</div>
        <div className="grid gap-3 md:grid-cols-2">
          {VOCAB_CATEGORIES.map((c) => {
            const ws = VOCAB.filter((w) => w.cat === c.id);
            const l = ws.filter((w) => p.cards[w.id]?.learned || (p.cards[w.id]?.reps ?? 0) >= 2).length;
            return (
              <div key={c.id}>
                <div className="mb-1 flex justify-between text-sm"><span>{c.es}</span><span className="text-slate-500">{l}/{ws.length}</span></div>
                <Progress value={l / ws.length} color="bg-emerald-500" />
              </div>
            );
          })}
        </div>
      </Card>
      {hardest.length > 0 && (
        <Card>
          <div className="mb-3 font-semibold text-slate-900 dark:text-white">Palabras que más te cuestan</div>
          <div className="flex flex-wrap gap-2">{hardest.map((w) => <Badge key={w.id} tone="rose">{w.en} · {w.es}</Badge>)}</div>
        </Card>
      )}
    </div>
  );
}

import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronLeft, Ear, Eye, Headphones, Pause, Play, RotateCcw, Snail, XCircle } from 'lucide-react';
import { listeningSentences } from '../content/skills';
import { READINGS } from '../content/readings';
import { diffTokens, matches, shuffle } from '../lib/grade';
import { speak, speechSupported, stopSpeaking } from '../lib/speech';
import { recordSkill, setLast } from '../store/progress';
import { Button, Card, Progress, cx } from '../components/ui';
import ExamRunner, { ExamReport, type ExamOutcome } from '../components/ExamRunner';
import SkillHeader from '../components/SkillHeader';

type Mode = null | 'dictation' | 'comprehension';

export default function Listening() {
  const [mode, setMode] = useState<Mode>(null);
  const [round, setRound] = useState(0);
  useEffect(() => { setLast({ kind: 'review', id: 'listening', title: 'Listening', path: '/listening' }); }, []);
  if (!speechSupported()) {
    return <div><SkillHeader skill="listening" /><Card>Tu navegador no puede reproducir voz. Probá con Chrome, Edge o Safari actualizados.</Card></div>;
  }
  return (
    <div>
      <SkillHeader skill="listening" />
      {mode === null && (
        <div className="grid gap-3 sm:grid-cols-2">
          <ModeCard icon={<Ear />} title="Dictado" text="Escuchás una oración y la escribís. Ideal para entrenar el oído." onClick={() => setMode('dictation')} />
          <ModeCard icon={<Headphones />} title="Comprensión" text="Escuchás un texto sin verlo y respondés preguntas." onClick={() => setMode('comprehension')} />
        </div>
      )}
      {mode === 'dictation' && <Dictation key={round} onExit={() => setMode(null)} onRestart={() => setRound((n) => n + 1)} />}
      {mode === 'comprehension' && <Comprehension onExit={() => setMode(null)} />}
    </div>
  );
}

export function ModeCard({ icon, title, text, onClick }: { icon: React.ReactNode; title: string; text: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="pressable flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 text-left hover:border-brand-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/50">
      <span className="rounded-2xl bg-brand-50 p-3 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">{icon}</span>
      <span>
        <span className="block font-semibold text-slate-900 dark:text-white">{title}</span>
        <span className="mt-0.5 block text-sm text-slate-500">{text}</span>
      </span>
    </button>
  );
}

function PlayButtons({ text, big }: { text: string; big?: boolean }) {
  const [playing, setPlaying] = useState<null | 'normal' | 'slow'>(null);
  useEffect(() => () => stopSpeaking(), []);
  const play = (rate: number, which: 'normal' | 'slow') => {
    if (playing) { stopSpeaking(); setPlaying(null); return; }
    setPlaying(which);
    speak(text, 'en-GB', rate, () => setPlaying(null));
  };
  return (
    <div className="flex items-center justify-center gap-3">
      <button onClick={() => play(0.95, 'normal')} aria-label="Escuchar"
        className={cx('pressable flex items-center justify-center rounded-full bg-brand-500 text-slate-950 shadow-lg shadow-brand-500/30 hover:bg-brand-400', big ? 'h-20 w-20' : 'h-14 w-14', playing === 'normal' && 'animate-pulse')}>
        {playing === 'normal' ? <Pause size={big ? 30 : 22} /> : <Play size={big ? 30 : 22} fill="currentColor" className="ml-1" />}
      </button>
      <button onClick={() => play(0.6, 'slow')} aria-label="Escuchar más lento"
        className={cx('pressable flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300', playing === 'slow' && 'animate-pulse')}>
        <Snail size={20} />
      </button>
    </div>
  );
}

function Dictation({ onExit, onRestart }: { onExit: () => void; onRestart: () => void }) {
  const items = useMemo(() => shuffle(listeningSentences()).slice(0, 8), []);
  const [i, setI] = useState(0);
  const [val, setVal] = useState('');
  const [checked, setChecked] = useState<null | boolean>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const cur = items[i];

  useEffect(() => { if (cur) speak(cur.text, 'en-GB', 0.95); inputRef.current?.focus(); }, [i]); // eslint-disable-line react-hooks/exhaustive-deps

  const check = () => {
    if (!val.trim() || checked !== null) return;
    const ok = matches(val, [cur.text]);
    setChecked(ok);
    if (ok) setScore((s) => s + 1);
  };
  const next = () => {
    if (i + 1 >= items.length) {
      const finalScore = score;
      recordSkill('listening', 'Dictado', finalScore, items.length, finalScore * 8);
      setDone(true);
    } else { setI(i + 1); setVal(''); setChecked(null); }
  };

  if (done) {
    return (
      <Card className="flex flex-col items-center gap-3 p-8 text-center">
        <CheckCircle2 size={44} className="text-emerald-500" />
        <div className="font-display text-2xl font-bold text-slate-900 dark:text-white">{score} de {items.length} oraciones perfectas</div>
        <p className="text-slate-500">Las oraciones salen de los ejemplos de las unidades de gramática.</p>
        <div className="flex gap-2"><Button onClick={onExit}>Volver</Button><Button variant="secondary" onClick={onRestart}><RotateCcw size={16} /> Otra ronda</Button></div>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <button onClick={onExit} className="pressable rounded-xl p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Salir"><ChevronLeft size={20} /></button>
        <Progress value={i / items.length} className="h-3" />
        <span className="text-sm font-semibold tabular-nums text-slate-500">{i + 1}/{items.length}</span>
      </div>
      <Card className="flex flex-col gap-6 p-6 sm:p-8">
        <div className="text-center text-sm font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-300">Escuchá y escribí la oración</div>
        <PlayButtons text={cur.text} big />
        <form onSubmit={(e) => { e.preventDefault(); checked === null ? check() : next(); }} className="flex flex-col gap-3">
          <input ref={inputRef} value={val} onChange={(e) => setVal(e.target.value)} disabled={checked !== null} placeholder="Escribí lo que escuchaste…" autoComplete="off" spellCheck={false} className="input text-lg" />
          {checked === null ? <Button type="submit" size="lg" disabled={!val.trim()}>Comprobar</Button> : null}
        </form>
        {checked !== null && (
          <div className={cx('rounded-2xl border-2 p-4 animate-fade-up', checked ? 'border-emerald-200 bg-emerald-50/70 dark:border-emerald-500/30 dark:bg-emerald-500/10' : 'border-rose-200 bg-rose-50/70 dark:border-rose-500/30 dark:bg-rose-500/10')}>
            <div className="flex items-center gap-2 font-bold">{checked ? <><CheckCircle2 className="text-emerald-600" /> ¡Perfecto!</> : <><XCircle className="text-rose-600" /> Casi</>}</div>
            {!checked && (
              <div className="mt-2 flex flex-wrap gap-1">
                {diffTokens(val, cur.text).map((t, k) => (
                  <span key={k} className={cx('rounded px-1', t.kind === 'missing' && 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200', t.kind === 'extra' && 'bg-rose-100 text-rose-800 line-through dark:bg-rose-500/20 dark:text-rose-200')}>{t.text}</span>
                ))}
              </div>
            )}
            <div className="mt-2 font-medium text-slate-900 dark:text-white">{cur.text}</div>
            {cur.es && <div className="text-sm text-slate-500">{cur.es}</div>}
            <Link to={`/grammar/${cur.unit}`} className="mt-1 inline-block text-xs text-brand-600 hover:underline">Ejemplo de la unidad {cur.n}</Link>
            <Button className="mt-4 w-full" size="lg" onClick={next}>Continuar <ArrowRight size={18} /></Button>
          </div>
        )}
      </Card>
    </div>
  );
}

function Comprehension({ onExit }: { onExit: () => void }) {
  const [rid, setRid] = useState<string | null>(null);
  const [phase, setPhase] = useState<'listen' | 'quiz' | 'done'>('listen');
  const [showText, setShowText] = useState(false);
  const [outcome, setOutcome] = useState<ExamOutcome | null>(null);
  const r = READINGS.find((x) => x.id === rid);

  if (!r) {
    return (
      <div className="flex flex-col gap-3">
        <button onClick={onExit} className="pressable self-start rounded-xl px-2 py-1 text-sm text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"><ChevronLeft size={16} className="inline" /> Volver</button>
        <p className="text-slate-500">Elegí un texto. Lo vas a escuchar sin verlo.</p>
        {READINGS.map((x) => (
          <button key={x.id} onClick={() => { setRid(x.id); setPhase('listen'); setShowText(false); }} className="pressable flex items-center justify-between rounded-2xl bg-white p-4 text-left hover:shadow-md dark:bg-slate-900">
            <span><span className="block font-medium text-slate-900 dark:text-white">{x.title}</span><span className="text-sm text-slate-500">{x.theme} · {x.qs.length} preguntas</span></span>
            <Headphones size={18} className="text-brand-500" />
          </button>
        ))}
      </div>
    );
  }

  const items = r.qs.map((ex, i) => ({ key: `l:${r.id}:${i}`, unitId: null, ex }));
  return (
    <div className="flex flex-col gap-4">
      <button onClick={() => { stopSpeaking(); setRid(null); }} className="pressable self-start rounded-xl px-2 py-1 text-sm text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"><ChevronLeft size={16} className="inline" /> Otros textos</button>
      {phase === 'listen' && (
        <Card className="flex flex-col items-center gap-5 p-8 text-center">
          <div className="font-display text-xl font-bold text-slate-900 dark:text-white">{r.title}</div>
          <p className="text-slate-500">Escuchalo las veces que necesites. Cuando estés listo, respondé.</p>
          <PlayButtons text={r.text} big />
          <button onClick={() => setShowText(!showText)} className="pressable inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"><Eye size={15} /> {showText ? 'Ocultar texto' : 'Ver el texto (ayuda)'}</button>
          {showText && <div className="space-y-3 text-left text-slate-700 animate-fade-up dark:text-slate-300">{r.text.split('\n\n').map((t, k) => <p key={k}>{t}</p>)}</div>}
          <Button size="lg" onClick={() => { stopSpeaking(); setPhase('quiz'); }}>Responder preguntas</Button>
        </Card>
      )}
      {phase === 'quiz' && (
        <ExamRunner items={items} title={`Listening: ${r.title}`} kind="listening" examId={r.id} recordAnswers={false}
          onExit={() => setPhase('listen')}
          onFinish={(o) => { recordSkill('listening', `Comprensión: ${r.title}`, o.result.correct, o.result.total, o.result.correct * 6); setOutcome(o); setPhase('done'); }} />
      )}
      {phase === 'done' && outcome && <ExamReport outcome={outcome} onRetry={() => setPhase('listen')} />}
    </div>
  );
}

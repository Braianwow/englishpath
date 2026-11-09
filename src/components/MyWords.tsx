import { useMemo, useState } from 'react';
import { BookOpenText, Brain, CheckCircle2, ChevronLeft, Eye, Pencil, Plus, RefreshCw, Trash2, X } from 'lucide-react';
import type { MyWord } from '../types';
import { useProgress, addMyWords, updateMyWord, deleteMyWord, reviewCard } from '../store/progress';
import { isDue, newCard, previewInterval, type Grade } from '../lib/srs';
import { highlightParts, myCardId, myQueue, parseWordLines } from '../lib/myWords';
import { normalize } from '../lib/grade';
import { notify } from '../store/toast';
import { Button, Card, Empty, Progress, cx } from './ui';
import { SpeakBtn } from './ExerciseView';
import { clearSaved, usePersisted } from '../lib/persist';

const field = 'w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-900';

export default function MyWords() {
  const p = useProgress();
  const words = useMemo(() => Object.values(p.myWords ?? {}).sort((a, b) => b.at - a.at), [p.myWords]);
  const queue = useMemo(() => myQueue(words, p.cards), [words, p.cards]);
  const [session, setSession] = usePersisted<string[] | null>('mywords:session', null);

  const resetReview = () => ['mywords:queue', 'mywords:i', 'mywords:step', 'mywords:stats'].forEach(clearSaved);
  const start = (ids: string[] | null) => { resetReview(); setSession(ids); };
  if (session) return <MyReview key={session.join(',')} ids={session} onExit={() => start(null)} onAgain={() => start(myQueue(Object.values(p.myWords ?? {}), p.cards))} />;

  const dueCount = words.filter((w) => isDue(p.cards[myCardId(w.id)])).length;
  return (
    <div className="grid gap-5 lg:grid-cols-5">
      <div className="flex flex-col gap-5 lg:col-span-2">
        <Card>
          <div className="mb-1 font-semibold text-slate-900 dark:text-white">Repasar mis palabras</div>
          <p className="mb-4 text-sm text-slate-500">Ves la palabra, tocás y aparece tu oración. Si igual no te sale, mirás el significado.</p>
          <div className="mb-4 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800"><div className="text-xl font-bold text-slate-900 dark:text-white">{words.length}</div><div className="text-xs text-slate-500">guardadas</div></div>
            <div className="rounded-xl bg-amber-50 p-3 dark:bg-amber-500/10"><div className="text-xl font-bold text-amber-700 dark:text-amber-300">{dueCount}</div><div className="text-xs text-slate-500">para repasar</div></div>
            <div className="rounded-xl bg-brand-50 p-3 dark:bg-brand-500/10"><div className="text-xl font-bold text-brand-700 dark:text-brand-300">{queue.length - dueCount}</div><div className="text-xs text-slate-500">nuevas</div></div>
          </div>
          <Button size="lg" className="w-full" disabled={!queue.length} onClick={() => start(queue)}><Brain size={18} /> {queue.length ? `Empezar (${queue.length})` : 'Nada pendiente'}</Button>
          {!queue.length && words.length > 0 && <p className="mt-3 text-sm text-slate-500">Ya repasaste todo. Cada palabra vuelve cuando le toca.</p>}
        </Card>
        <AddForm />
      </div>
      <div className="lg:col-span-3"><WordList words={words} /></div>
    </div>
  );
}

function AddForm() {
  const [mode, setMode] = useState<'one' | 'many'>('one');
  const [word, setWord] = useState('');
  const [sentence, setSentence] = useState('');
  const [meaning, setMeaning] = useState('');
  const [bulk, setBulk] = useState('');
  const parsed = useMemo(() => parseWordLines(bulk), [bulk]);
  const good = parsed.filter((x): x is { word: string; sentence: string; meaning: string } => !('error' in x));
  const errors = parsed.filter((x): x is { error: string; line: number } => 'error' in x);

  const addOne = (e: React.FormEvent) => {
    e.preventDefault();
    if (!word.trim() || !sentence.trim() || !meaning.trim()) return;
    addMyWords([{ word, sentence, meaning }]);
    notify({ kind: 'info', title: `"${word.trim()}" agregada` });
    setWord(''); setSentence(''); setMeaning('');
    document.getElementById('mw-word')?.focus();
  };
  const addMany = () => {
    if (!good.length || errors.length) return;
    addMyWords(good);
    notify({ kind: 'info', title: `${good.length} palabra${good.length === 1 ? '' : 's'} agregada${good.length === 1 ? '' : 's'}` });
    setBulk('');
  };

  return (
    <Card>
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="font-semibold text-slate-900 dark:text-white">Agregar palabras</div>
        <div className="inline-flex rounded-lg bg-slate-100 p-0.5 text-xs dark:bg-slate-800">
          {([['one', 'Una'], ['many', 'Varias']] as const).map(([id, l]) => (
            <button key={id} type="button" onClick={() => setMode(id)} className={cx('rounded-md px-2.5 py-1 font-medium transition', mode === id ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white' : 'text-slate-500')}>{l}</button>
          ))}
        </div>
      </div>
      {mode === 'one' ? (
        <form onSubmit={addOne} className="flex flex-col gap-3">
          <label className="text-sm font-medium">Palabra
            <input id="mw-word" value={word} onChange={(e) => setWord(e.target.value)} placeholder="ej.: reliable" className={cx(field, 'mt-1')} autoComplete="off" />
          </label>
          <label className="text-sm font-medium">Oración
            <textarea value={sentence} onChange={(e) => setSentence(e.target.value)} rows={2} placeholder="ej.: My old car is slow but very reliable." className={cx(field, 'mt-1 resize-none')} />
          </label>
          <label className="text-sm font-medium">Significado
            <input value={meaning} onChange={(e) => setMeaning(e.target.value)} placeholder="ej.: confiable" className={cx(field, 'mt-1')} autoComplete="off" />
          </label>
          <Button type="submit" disabled={!word.trim() || !sentence.trim() || !meaning.trim()}><Plus size={16} /> Agregar</Button>
        </form>
      ) : (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-slate-500">Una palabra por línea, con este formato:<br /><code className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-700 dark:bg-slate-800 dark:text-slate-200">palabra = oración = significado</code></p>
          <textarea value={bulk} onChange={(e) => setBulk(e.target.value)} rows={6} placeholder={'reliable = My old car is very reliable. = confiable\nborrow = Can I borrow your pen? = pedir prestado'} className={cx(field, 'resize-y font-mono text-xs')} />
          {errors.length > 0 && <ul className="space-y-0.5 text-xs text-rose-600 dark:text-rose-400">{errors.slice(0, 4).map((e) => <li key={e.line}>{e.error}</li>)}</ul>}
          <Button onClick={addMany} disabled={!good.length || errors.length > 0}><Plus size={16} /> Agregar {good.length || ''}</Button>
        </div>
      )}
    </Card>
  );
}

function WordList({ words }: { words: MyWord[] }) {
  const p = useProgress();
  const [q, setQ] = useState('');
  const [editing, setEditing] = useState<string | null>(null);
  const shown = useMemo(() => {
    const nq = normalize(q);
    return nq ? words.filter((w) => normalize(`${w.word} ${w.meaning} ${w.sentence}`).includes(nq)) : words;
  }, [words, q]);

  if (!words.length) return <Card className="h-full"><Empty title="Todavía no agregaste palabras">Escribí una palabra, una oración donde aparezca y su significado. Después la repasás como tarjeta.</Empty></Card>;

  return (
    <div className="flex flex-col gap-3">
      {words.length > 5 && <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar en mis palabras…" className={field} />}
      {shown.map((w) => editing === w.id ? <EditRow key={w.id} w={w} onDone={() => setEditing(null)} /> : (
        <Card key={w.id} className="group flex items-start justify-between gap-3 p-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2"><span className="font-semibold text-slate-900 dark:text-white">{w.word}</span><SpeakBtn text={w.word} />
              {(p.cards[myCardId(w.id)]?.reps ?? 0) >= 2 && <CheckCircle2 size={15} className="text-emerald-500" aria-label="aprendida" />}
            </div>
            <div className="text-sm text-brand-700 dark:text-brand-300">{w.meaning}</div>
            <div className="mt-1 text-sm italic text-slate-500">{w.sentence}</div>
          </div>
          <div className="flex shrink-0 gap-1">
            <button onClick={() => setEditing(w.id)} title="Editar" className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800"><Pencil size={16} /></button>
            <button onClick={() => { if (confirm(`¿Borrar "${w.word}"?`)) deleteMyWord(w.id); }} title="Borrar" className="rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10"><Trash2 size={16} /></button>
          </div>
        </Card>
      ))}
      {!shown.length && <Empty title="No hay palabras que coincidan" />}
    </div>
  );
}

function EditRow({ w, onDone }: { w: MyWord; onDone: () => void }) {
  const [v, setV] = useState({ word: w.word, sentence: w.sentence, meaning: w.meaning });
  const ok = v.word.trim() && v.sentence.trim() && v.meaning.trim();
  return (
    <Card className="flex flex-col gap-2 p-4">
      <input value={v.word} onChange={(e) => setV({ ...v, word: e.target.value })} className={field} aria-label="Palabra" />
      <textarea value={v.sentence} onChange={(e) => setV({ ...v, sentence: e.target.value })} rows={2} className={cx(field, 'resize-none')} aria-label="Oración" />
      <input value={v.meaning} onChange={(e) => setV({ ...v, meaning: e.target.value })} className={field} aria-label="Significado" />
      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="sm" onClick={onDone}><X size={14} /> Cancelar</Button>
        <Button size="sm" disabled={!ok} onClick={() => { updateMyWord(w.id, { word: v.word.trim(), sentence: v.sentence.trim(), meaning: v.meaning.trim() }); onDone(); }}>Guardar</Button>
      </div>
    </Card>
  );
}

/** Anki-style card in three steps: word → sentence → meaning. */
function MyReview({ ids, onExit, onAgain }: { ids: string[]; onExit: () => void; onAgain: () => void }) {
  const p = useProgress();
  const [queue, setQueue] = usePersisted('mywords:queue', ids);
  const [i, setI] = usePersisted('mywords:i', 0);
  const [step, setStep] = usePersisted<0 | 1 | 2>('mywords:step', 0);
  const [stats, setStats] = usePersisted('mywords:stats', { ok: 0, again: 0 });

  if (i >= queue.length) {
    return (
      <Card className="mx-auto flex max-w-lg flex-col items-center gap-3 p-8 text-center">
        <CheckCircle2 size={44} className="text-emerald-500" />
        <div className="font-display text-2xl font-bold text-slate-900 dark:text-white">¡Listo!</div>
        <div className="text-slate-500">{stats.ok} recordadas · {stats.again} para volver a ver</div>
        <div className="flex gap-2"><Button onClick={onExit}>Volver</Button><Button variant="secondary" onClick={onAgain}><RefreshCw size={16} /> Otra vez</Button></div>
      </Card>
    );
  }

  const w = p.myWords?.[queue[i]];
  if (!w) return <Card className="p-6 text-center"><Button onClick={() => setI(i + 1)}>Siguiente</Button></Card>;
  const card = p.cards[myCardId(w.id)] ?? newCard();
  const grade = (g: Grade) => {
    reviewCard(myCardId(w.id), g);
    setStats((s) => ({ ok: s.ok + (g > 0 ? 1 : 0), again: s.again + (g === 0 ? 1 : 0) }));
    if (g === 0) setQueue((q) => [...q, w.id]);
    setStep(0);
    setI(i + 1);
  };

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-4">
      <div className="flex items-center gap-3">
        <button onClick={onExit} className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Salir"><ChevronLeft size={20} /></button>
        <Progress value={i / queue.length} className="h-3" />
        <span className="text-sm font-semibold tabular-nums text-slate-500">{i + 1}/{queue.length}</span>
      </div>

      <Card
        key={`${w.id}-${i}`}
        onClick={() => step === 0 && setStep(1)}
        className={cx('flex min-h-[18rem] flex-col items-center justify-center gap-4 p-6 text-center animate-fade-up', step === 0 && 'cursor-pointer select-none hover:shadow-md')}
      >
        <div className="flex items-center gap-2">
          <span className="font-display text-4xl font-bold text-slate-900 dark:text-white">{w.word}</span>
          <SpeakBtn text={w.word} />
        </div>
        {step === 0 && <div className="text-sm text-slate-400">¿Qué significa? Tocá para ver la oración</div>}
        {step >= 1 && (
          <div className="flex items-center gap-1 rounded-xl bg-slate-50 px-4 py-3 text-lg text-slate-700 animate-fade-up dark:bg-slate-800 dark:text-slate-200">
            <span>“{highlightParts(w.sentence, w.word).map((part, k) => part.hit ? <mark key={k} className="rounded bg-amber-200/70 px-0.5 font-semibold text-inherit dark:bg-amber-400/30">{part.text}</mark> : <span key={k}>{part.text}</span>)}”</span>
            <SpeakBtn text={w.sentence} />
          </div>
        )}
        {step === 2 && (
          <div className="animate-fade-up">
            <div className="text-xs uppercase tracking-wide text-slate-400">Significado</div>
            <div className="text-2xl font-semibold text-brand-700 dark:text-brand-300">{w.meaning}</div>
          </div>
        )}
      </Card>

      {step === 0 && <Button size="lg" onClick={() => setStep(1)}><BookOpenText size={18} /> Ver oración</Button>}
      {step === 1 && <Button size="lg" variant="secondary" onClick={() => setStep(2)}><Eye size={18} /> No me sale: ver significado</Button>}
      {step >= 1 && (
        <>
          <div className="text-center text-sm text-slate-500">{step === 1 ? '¿Ya sabés qué significa? Calificá:' : '¿Qué tan bien la sabías?'}</div>
          <div className="grid grid-cols-4 gap-2">
            {([[0, 'Otra vez', 'bg-rose-600 hover:bg-rose-700'], [1, 'Difícil', 'bg-amber-500 hover:bg-amber-600'], [2, 'Bien', 'bg-emerald-600 hover:bg-emerald-700'], [3, 'Fácil', 'bg-sky-600 hover:bg-sky-700']] as [Grade, string, string][]).map(([g, label, cls]) => (
              <button key={g} onClick={() => grade(g)} className={cx('pressable flex flex-col items-center rounded-xl px-2 py-2.5 font-semibold text-white transition active:scale-95', cls)}>
                <span className="text-sm">{label}</span><span className="text-[11px] font-normal opacity-80">{previewInterval(card, g)}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

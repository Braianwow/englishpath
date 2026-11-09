import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronLeft, Loader2, PenLine, Sparkles } from 'lucide-react';
import { WRITING, type WritingTask } from '../content/skills';
import { WB_BY_ID } from '../content/workbook';
import { useProgress, useSettings, saveWriting, recordSkill, setLast } from '../store/progress';
import { askClaude, describeError } from '../lib/assistant';
import { notify } from '../store/toast';
import { Badge, Button, Card, cx } from '../components/ui';
import SkillHeader from '../components/SkillHeader';

const countWords = (t: string) => (t.trim() ? t.trim().split(/\s+/).length : 0);

export default function Writing() {
  const [task, setTask] = useState<WritingTask | null>(null);
  const p = useProgress();
  useEffect(() => { setLast({ kind: 'review', id: 'writing', title: 'Writing', path: '/writing' }); }, []);
  return (
    <div>
      <SkillHeader skill="writing" />
      {!task ? (
        <div className="grid gap-2">
          {WRITING.map((t) => {
            const draft = p.writings?.[t.id];
            return (
              <button key={t.id} onClick={() => setTask(t)} className="pressable flex items-center gap-4 rounded-2xl bg-white p-4 text-left hover:shadow-md dark:bg-slate-900">
                <span className="rounded-xl bg-brand-50 p-2.5 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300"><PenLine size={18} /></span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-slate-900 dark:text-white">{t.title}</span>
                  <span className="text-sm text-slate-500">{t.type} · {t.words[0]}–{t.words[1]} palabras</span>
                </span>
                {draft && <Badge tone={countWords(draft.text) >= t.words[0] ? 'green' : 'slate'}>{countWords(draft.text)} palabras</Badge>}
              </button>
            );
          })}
        </div>
      ) : <Editor key={task.id} task={task} onExit={() => setTask(null)} />}
    </div>
  );
}

function Editor({ task, onExit }: { task: WritingTask; onExit: () => void }) {
  const p = useProgress();
  const settings = useSettings();
  const saved = p.writings?.[task.id];
  const [text, setText] = useState(saved?.text ?? '');
  const [checks, setChecks] = useState<number[]>(saved?.checks ?? []);
  const [feedback, setFeedback] = useState('');
  const [busy, setBusy] = useState(false);
  const words = countWords(text);
  const ai = settings.aiProvider === 'anthropic' && !!settings.aiKey;
  const inRange = words >= task.words[0] && words <= task.words[1];

  // autosave
  useEffect(() => {
    const id = window.setTimeout(() => { if (text !== (saved?.text ?? '') || checks.join() !== (saved?.checks ?? []).join()) saveWriting(task.id, text, checks); }, 800);
    return () => window.clearTimeout(id);
  }, [text, checks]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = (i: number) => setChecks((c) => (c.includes(i) ? c.filter((x) => x !== i) : [...c, i]));
  const submit = () => {
    saveWriting(task.id, text, checks);
    recordSkill('writing', task.title, checks.length, task.checklist.length, 20 + checks.length * 5);
    notify({ kind: 'info', title: 'Texto entregado', body: `${words} palabras · ${checks.length}/${task.checklist.length} puntos cumplidos` });
  };
  const correct = async () => {
    setBusy(true); setFeedback('');
    try {
      const prompt = `Corregí este texto en inglés de un estudiante B1–B2. Tarea (${task.type}): "${task.prompt}"\n\nTexto del estudiante:\n${text}\n\nDevolvé: 1) los errores, cada uno con la corrección y una explicación breve en español; 2) una versión mejorada; 3) una nota orientativa de 1 a 10 con dos consejos.`;
      setFeedback(await askClaude([{ role: 'user', text: prompt }], settings));
    } catch (e) { setFeedback(describeError(e)); } finally { setBusy(false); }
  };

  return (
    <div className="flex flex-col gap-4">
      <button onClick={onExit} className="pressable self-start rounded-xl px-2 py-1 text-sm text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"><ChevronLeft size={16} className="inline" /> Todas las tareas</button>
      <Card>
        <div className="flex flex-wrap items-center gap-2"><Badge tone="brand">{task.type}</Badge>{task.wb && WB_BY_ID[task.wb] && <Link to={`/workbook/${task.wb}`} className="text-xs text-sky-700 hover:underline dark:text-sky-300">Tema de Objective First Unit {WB_BY_ID[task.wb].n}</Link>}</div>
        <h2 className="mt-2 font-display text-xl font-bold text-slate-900 dark:text-white">{task.title}</h2>
        <p className="mt-2 text-slate-700 dark:text-slate-300">{task.prompt}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">{task.useful.map((u) => <button key={u} onClick={() => setText((t) => (t && !t.endsWith(' ') && !t.endsWith('\n') ? `${t} ${u}` : t + u))} className="pressable rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-600 hover:bg-brand-50 hover:text-brand-700 dark:bg-slate-800 dark:text-slate-300" title="Insertar en el texto">{u}</button>)}</div>
      </Card>

      <div>
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={12} spellCheck lang="en" placeholder="Escribí tu texto en inglés acá…" className="input min-h-[260px] resize-y font-[450] leading-relaxed" />
        <div className="mt-1 flex justify-between px-1 text-sm">
          <span className={cx(inRange ? 'text-emerald-600' : 'text-slate-500')}>{words} palabras {inRange && '✓'} <span className="text-slate-400">(objetivo {task.words[0]}–{task.words[1]})</span></span>
          <span className="text-slate-400">Se guarda solo</span>
        </div>
      </div>

      <Card>
        <div className="mb-2 font-semibold text-slate-900 dark:text-white">Revisá tu texto</div>
        <div className="flex flex-col gap-1">
          {task.checklist.map((c, i) => (
            <button key={i} onClick={() => toggle(i)} className="pressable flex items-start gap-3 rounded-xl px-2 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-800/60">
              <span className={cx('mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors', checks.includes(i) ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300 dark:border-slate-600')}>{checks.includes(i) && <Check size={13} />}</span>
              <span className={cx('text-[15px]', checks.includes(i) ? 'text-slate-500 line-through' : 'text-slate-700 dark:text-slate-300')}>{c}</span>
            </button>
          ))}
        </div>
      </Card>

      <div className="flex flex-wrap gap-2">
        <Button onClick={submit} disabled={words < 20}>Entregar</Button>
        {ai ? (
          <Button variant="secondary" onClick={correct} disabled={busy || words < 20}>{busy ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />} Corregir con IA</Button>
        ) : (
          <span className="self-center text-sm text-slate-500">Para corrección automática del texto, conectá la IA en <Link to="/settings" className="text-brand-600 hover:underline">Ajustes</Link>.</span>
        )}
      </div>
      {feedback && <Card className="whitespace-pre-wrap text-[15px] leading-relaxed animate-fade-up">{feedback}</Card>}
    </div>
  );
}

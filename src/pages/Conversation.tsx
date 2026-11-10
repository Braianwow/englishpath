import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Sparkles, Languages, Loader2, Mic, MicOff, Send, Square, Star, Volume2 } from 'lucide-react';
import { addMyWords, recordSkill, setLast, useSettings } from '../store/progress';
import { notify } from '../store/toast';
import { TOPICS, conversationAi, finalReport, nextTurn, type Report, type TopicId, type Turn } from '../lib/conversation';
import { localReport, localTurn } from '../lib/freeTutor';
import { describeError } from '../lib/assistant';
import { getSttEngine, listen, recognitionSupported } from '../lib/recognition';
import { preloadLocalStt } from '../lib/localStt';
import { aiSupported, loadAiVoice, unlockAudio } from '../lib/neuralTts';
import { llmTurn, llmWanted, startLlm, stopLlm, useLlmStatus, webGpuAvailable } from '../lib/localLlm';
import { speak, stopSpeaking } from '../lib/speech';
import { Button, Card, cx } from '../components/ui';
import SkillHeader from '../components/SkillHeader';
import { clearSaved, usePersisted } from '../lib/persist';

export default function Conversation() {
  const s = useSettings();
  const [topic, setTopic] = usePersisted<TopicId | null>('conv:topic', null);
  const aiKind = conversationAi(s);
  const hasAi = !!aiKind;

  // keep loading the free AI in the background if it was turned on before
  useEffect(() => { if (!hasAi && llmWanted()) startLlm(); }, [hasAi]);

  if (topic) return <Session topic={topic} ai={hasAi} onExit={() => setTopic(null)} />;

  return (
    <div>
      <SkillHeader skill="speaking" />
      <Card className="mb-5 flex flex-wrap items-center gap-4 p-5">
        <div className="text-4xl">😏</div>
        <div className="min-w-0 flex-1">
          <div className="font-display text-lg font-bold text-slate-900 dark:text-white">Face-to-face conversation with Jake</div>
          <p className="text-sm text-slate-500">You speak to him in English, he answers out loud, corrects you when you make a mistake and gives you a grade at the end. Choose what you want to talk about.</p>
        </div>
      </Card>
      {hasAi
        ? (
          <Card className="mb-5 flex flex-wrap items-center gap-3 p-4">
            <Sparkles size={20} className="text-brand-500" />
            <p className="min-w-0 flex-1 text-sm text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">{aiKind === 'gemini' ? 'Gemini AI mode.' : 'Claude AI mode.'}</strong> Jake understands anything you say and answers freely{aiKind === 'gemini' ? ' (Google Gemini, free key)' : ' (your Claude API key)'}.</p>
          </Card>
        )
        : <FreeAiCard />}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {TOPICS.map((t) => (
          <button key={t.id} onClick={() => setTopic(t.id)}
            className="pressable flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-brand-500/60 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-900">
            <span className="text-3xl">{t.emoji}</span>
            <span>
              <span className="block font-semibold text-slate-900 dark:text-white">{t.label}</span>
              <span className="block text-sm text-slate-500">{t.desc}</span>
            </span>
          </button>
        ))}
      </div>
      {!recognitionSupported() && <p className="mt-4 text-sm text-slate-500">Your browser doesn't support speech recognition, so you can type your answers. To speak, use Chrome or Edge.</p>}
    </div>
  );
}

function Session({ topic, ai, onExit: exit }: { topic: TopicId; ai: boolean; onExit: () => void }) {
  const s = useSettings();
  const llm = useLlmStatus();
  const t = TOPICS.find((x) => x.id === topic)!;
  // autosaved: a reload (F5) keeps the conversation
  const saveKey = `conv:${topic}`;
  const [turns, setTurns] = usePersisted<Turn[]>(saveKey, []);
  const onExit = () => { clearSaved(saveKey); exit(); };
  const [thinking, setThinking] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [listening, setListening] = useState(false);
  const [interim, setInterim] = useState('');
  const [sttStatus, setSttStatus] = useState('');
  const [typed, setTyped] = useState('');
  const [handsFree, setHandsFree] = useState(recognitionSupported());
  const [showEs, setShowEs] = useState<Record<number, boolean>>({});
  const [report, setReport] = useState<Report | null>(null);
  const [ending, setEnding] = useState(false);
  const [error, setError] = useState('');
  const stopRef = useRef<() => void>(() => {});
  const endRef = useRef<HTMLDivElement>(null);
  const handsFreeRef = useRef(handsFree);
  handsFreeRef.current = handsFree;
  const turnsRef = useRef(turns);
  turnsRef.current = turns;

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }); }, [turns, interim, thinking]);
  useEffect(() => () => { stopRef.current(); stopSpeaking(); }, []);
  // get the voice models ready while Jake says hello, so the first answer isn't slow
  useEffect(() => {
    if (getSttEngine() === 'local') preloadLocalStt();
    if (s.voiceEngine === 'ai' && aiSupported()) loadAiVoice();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // browsers block sound until the user touches the page (e.g. right after a reload)
  const [waitingTap, setWaitingTap] = useState<string | null>(null);
  const sayId = useRef(0);
  const say = (text: string) => {
    const ua = (navigator as unknown as { userActivation?: { hasBeenActive: boolean } }).userActivation;
    if (ua && !ua.hasBeenActive) { setWaitingTap(text); return; }
    setWaitingTap(null);
    setSpeaking(true);
    const my = ++sayId.current;
    let done = false;
    let guard: ReturnType<typeof setTimeout> | undefined;
    const end = () => {
      if (done || my !== sayId.current) return;
      done = true;
      clearTimeout(guard);
      setSpeaking(false);
      if (handsFreeRef.current && !report) startListening();
    };
    // safety net: whatever happens with the voice, the conversation never stays stuck on "speaking"
    guard = setTimeout(end, 15000 + text.split(/\s+/).length * 600);
    // Jake's own voice: Fenrir, deep and laid-back (the "bad boy" voice), a little slower
    speak(text, 'en-US', 0.94, end, 'am_fenrir');
  };

  const ask = async (history: Turn[]) => {
    setThinking(true); setError('');
    try {
      const r = ai ? await nextTurn(s, topic, history)
        : llm.state === 'ready' && history.length ? { ...(await llmTurn(topic, history).catch(() => localTurn(topic, history))), translation: '' }
        : { ...localTurn(topic, history), translation: '' };
      // attach the correction to the student's last line
      const withCorr = history.map((x, i) => (i === history.length - 1 && x.role === 'me' ? { ...x, correction: r.correction } : x));
      setTurns([...withCorr, { role: 'tutor', text: r.reply, es: r.translation }]);
      say(r.reply);
    } catch (e) {
      setError(describeError(e) || (e as Error).message);
    } finally {
      setThinking(false);
    }
  };

  // opening line (once, even if React mounts the effect twice in development)
  const opened = useRef(false);
  useEffect(() => {
    if (opened.current) return;
    opened.current = true;
    setLast({ kind: 'speaking', id: topic, title: `Conversation: ${t.label}`, path: '/conversation' });
    if (!turnsRef.current.length) ask([]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const send = (text: string) => {
    const clean = text.trim();
    if (!clean || thinking) return;
    stopSpeaking(); setSpeaking(false);
    const next = [...turnsRef.current, { role: 'me' as const, text: clean }];
    setTurns(next);
    setTyped(''); setInterim('');
    ask(next);
  };

  function startListening() {
    if (!recognitionSupported()) return;
    stopSpeaking(); setSpeaking(false);
    setListening(true); setInterim(''); setError(''); setSttStatus('');
    let last = '';
    stopRef.current = listen({
      onText: (txt, final) => { last = txt; setInterim(txt); setSttStatus(''); if (final) { stopRef.current(); } },
      onStatus: setSttStatus,
      onEnd: () => { setListening(false); setSttStatus(''); if (last.trim()) send(last); },
      onError: (m) => { if (m) setError(m); },
    });
  }
  const stopListening = () => { stopRef.current(); };

  const finish = async () => {
    stopRef.current(); stopSpeaking(); setHandsFree(false);
    if (!turns.some((x) => x.role === 'me')) { onExit(); return; }
    setEnding(true); setError('');
    try {
      const r = ai ? await finalReport(s, topic, turns) : localReport(topic, turns);
      setReport(r);
      clearSaved(saveKey);
      const mine = turns.filter((x) => x.role === 'me').length;
      recordSkill('speaking', `Conversation: ${t.label}`, r.score, 10, 15 + mine * 3);
    } catch (e) {
      setError(describeError(e) || (e as Error).message);
    } finally {
      setEnding(false);
    }
  };

  if (report) return <ReportView report={report} topicLabel={t.label} onAgain={onExit} />;

  const busy = thinking || ending;
  return (
    <div className="mx-auto flex max-w-2xl flex-col">
      <div className="mb-4 flex items-center gap-3">
        <button onClick={() => { stopRef.current(); stopSpeaking(); onExit(); }} className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Exit"><ChevronLeft size={20} /></button>
        <div className="min-w-0 flex-1">
          <div className="font-display text-lg font-bold text-slate-900 dark:text-white">{t.emoji} {t.label} <span className="font-normal text-slate-500">with Jake</span>{!ai && llm.state === 'ready' && <span className="ml-2 rounded-full bg-brand-500/15 px-2 py-0.5 align-middle text-[11px] font-semibold text-brand-600 dark:text-brand-300">AI</span>}</div>
          <label className="flex items-center gap-2 text-xs text-slate-500">
            <input type="checkbox" checked={handsFree} disabled={!recognitionSupported()} onChange={(e) => setHandsFree(e.target.checked)} className="h-3.5 w-3.5 accent-brand-500" />
            Hands-free: the microphone opens by itself when Jake finishes speaking
          </label>
        </div>
        <Button variant="secondary" size="sm" onClick={finish} disabled={busy}>{ending ? <Loader2 size={14} className="animate-spin" /> : <Star size={14} />} Finish and see my grade</Button>
      </div>

      {!ai && llm.state !== 'ready' && <FreeAiCard />}
      <div className="flex min-h-[50vh] flex-col gap-3 pb-40">
        {turns.map((x, i) => x.role === 'tutor' ? (
          <div key={i} className="flex items-start gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-lg">😏</div>
            <div className="max-w-[85%]">
              <div className="rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-slate-800 shadow-sm dark:bg-slate-900 dark:text-slate-100">{x.text}</div>
              <div className="mt-1 flex gap-1">
                <button onClick={() => say(x.text)} className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"><Volume2 size={13} /> Repeat</button>
                {x.es && s.showSpanish && <button onClick={() => setShowEs({ ...showEs, [i]: !showEs[i] })} className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"><Languages size={13} /> {showEs[i] ? 'Hide' : 'Translate'}</button>}
              </div>
              {showEs[i] && <div className="mt-1 rounded-xl bg-slate-100 px-3 py-2 text-sm italic text-slate-600 dark:bg-slate-800 dark:text-slate-300">{x.es}</div>}
            </div>
          </div>
        ) : (
          <div key={i} className="flex flex-col items-end">
            <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-500 px-4 py-3 text-slate-950">{x.text}</div>
            {x.correction && (
              <div className="mt-1.5 max-w-[85%] rounded-xl border border-amber-300 bg-amber-50 px-3 py-2 text-sm dark:border-amber-500/30 dark:bg-amber-500/10">
                <div><span className="text-rose-600 line-through dark:text-rose-400">{x.correction.said}</span> → <span className="font-semibold text-emerald-700 dark:text-emerald-400">{x.correction.better}</span></div>
                <div className="text-xs text-slate-600 dark:text-slate-300">{x.correction.why}</div>
              </div>
            )}
          </div>
        ))}
        {interim && <div className="self-end max-w-[85%] rounded-2xl rounded-tr-sm border-2 border-dashed border-brand-500/60 px-4 py-3 text-slate-500">{interim}…</div>}
        {sttStatus && <div className="self-end text-sm text-slate-500">🎙️ {sttStatus}</div>}
        {thinking && <div className="flex items-center gap-2 text-sm text-slate-500"><Loader2 size={16} className="animate-spin" /> Jake is thinking…</div>}
        {waitingTap && (
          <button onClick={() => { const t = waitingTap; unlockAudio(); say(t); }}
            className="pressable self-start rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-brand-400">
            🔊 Tap to hear Jake
          </button>
        )}
        {error && <div className="rounded-xl bg-rose-50 px-3 py-2 text-sm text-rose-700 dark:bg-rose-500/10 dark:text-rose-300">{error}</div>}
        <div ref={endRef} />
      </div>

      {/* Controls */}
      <div className="fixed inset-x-0 bottom-16 z-20 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:bottom-0 dark:border-slate-800 dark:bg-slate-950/95">
        <div className="mx-auto flex max-w-2xl items-center gap-3">
          {recognitionSupported() && (
            <button onClick={listening ? stopListening : startListening} disabled={busy}
              aria-label={listening ? 'Stop listening' : 'Speak'}
              className={cx('pressable relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-lg transition disabled:opacity-50',
                listening ? 'bg-rose-500 text-white shadow-rose-500/30' : 'bg-brand-500 text-slate-950 shadow-brand-500/30 hover:bg-brand-400')}>
              {listening && <span className="absolute inset-0 animate-ping rounded-full bg-rose-500/40" />}
              {listening ? <Square size={20} fill="currentColor" /> : <Mic size={22} />}
            </button>
          )}
          <form className="flex min-w-0 flex-1 gap-2" onSubmit={(e) => { e.preventDefault(); send(typed); }}>
            <input value={typed} onChange={(e) => setTyped(e.target.value)} placeholder={listening ? 'Listening…' : speaking ? 'Jake is speaking…' : 'Speak into the microphone or type here'} className="input py-2.5" disabled={busy || listening} />
            <Button type="submit" disabled={!typed.trim() || busy} aria-label="Send"><Send size={16} /></Button>
          </form>
          {!recognitionSupported() && <MicOff size={18} className="text-slate-400" aria-label="No microphone" />}
        </div>
      </div>
    </div>
  );
}

function ReportView({ report, topicLabel, onAgain }: { report: Report; topicLabel: string; onAgain: () => void }) {
  const [saved, setSaved] = useState(false);
  const save = () => {
    addMyWords(report.words.map((w) => ({ word: w.en, sentence: w.example, meaning: w.es })));
    setSaved(true);
    notify({ kind: 'info', title: `${report.words.length} words saved to My words` });
  };
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4">
      <Card className="flex flex-col items-center gap-2 p-6 text-center">
        <div className="text-sm text-slate-500">Conversation · {topicLabel}</div>
        <div className="font-display text-6xl font-extrabold text-slate-900 dark:text-white">{report.score}<span className="text-2xl text-slate-400">/10</span></div>
        <div className="grid w-full grid-cols-3 gap-2 pt-2">
          {([['Fluency', report.fluency], ['Grammar', report.grammar], ['Vocabulary', report.vocabulary]] as const).map(([l, v]) => (
            <div key={l} className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800"><div className="text-xl font-bold text-slate-900 dark:text-white">{v}</div><div className="text-xs text-slate-500">{l}</div></div>
          ))}
        </div>
        <p className="pt-2 text-slate-600 dark:text-slate-300">{report.summary}</p>
        {report.tip && <p className="rounded-xl bg-brand-50 px-3 py-2 text-sm text-brand-800 dark:bg-brand-500/10 dark:text-brand-300">💡 {report.tip}</p>}
      </Card>
      {report.mistakes.length > 0 && (
        <Card>
          <div className="mb-2 font-semibold text-slate-900 dark:text-white">Mistakes to fix</div>
          <ul className="flex flex-col gap-2">
            {report.mistakes.map((m, i) => (
              <li key={i} className="text-sm"><span className="text-rose-600 line-through dark:text-rose-400">{m.said}</span> → <span className="font-semibold text-emerald-700 dark:text-emerald-400">{m.better}</span><div className="text-xs text-slate-500">{m.why}</div></li>
            ))}
          </ul>
        </Card>
      )}
      {report.words.length > 0 && (
        <Card>
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="font-semibold text-slate-900 dark:text-white">Words to learn</div>
            <Button size="sm" variant="secondary" disabled={saved} onClick={save}>{saved ? 'Saved ✓' : 'Save to My words'}</Button>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {report.words.map((w, i) => <li key={i} className="rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800"><strong className="text-slate-900 dark:text-white">{w.en}</strong> · {w.es}<div className="text-xs italic text-slate-500">{w.example}</div></li>)}
          </ul>
        </Card>
      )}
      <div className="flex justify-center gap-2">
        <Button onClick={onAgain}>Another conversation</Button>
        <Link to="/my-words" className="pressable inline-flex items-center rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">See My words</Link>
      </div>
    </div>
  );
}

/** Free mode: the script, or a small AI that runs in the browser (optional, needs a graphics card). */
function FreeAiCard() {
  const llm = useLlmStatus();
  const [gpu, setGpu] = useState<boolean | null>(null);
  useEffect(() => { webGpuAvailable().then(setGpu); }, []);
  return (
    <Card className="mb-5 p-4">
      <div className="flex flex-wrap items-center gap-3">
        <Sparkles size={20} className="text-brand-500" />
        <div className="min-w-0 flex-1 text-sm text-slate-600 dark:text-slate-300">
          {llm.state === 'ready'
            ? <><strong className="text-slate-900 dark:text-white">Free AI on.</strong> Jake runs on your computer: he follows what you say, corrects you and keeps the topic going. No key, nothing leaves your browser.</>
            : <><strong className="text-slate-900 dark:text-white">Free mode — no key needed.</strong> Jake follows a set of questions for each topic and corrects common mistakes. Turn on the free AI so he understands anything you say.</>}
        </div>
        {llm.state === 'ready' && <Button size="sm" variant="ghost" onClick={stopLlm}>Turn off</Button>}
        {(llm.state === 'off' || llm.state === 'error') && gpu && <Button size="sm" onClick={startLlm}>Turn on free AI</Button>}
      </div>
      {llm.state === 'off' && gpu && <p className="mt-2 text-xs text-slate-500">Downloads an 800 MB model once (it stays saved in the browser). Works best on computers with a graphics card. <strong>Want a much smarter Jake for free?</strong> Add a free Google Gemini key in <Link to="/settings" className="font-semibold text-brand-600 hover:underline">Settings</Link>.</p>}
      {gpu === false && llm.state !== 'ready' && <p className="mt-2 text-xs text-slate-500">This browser can't run the free AI (it needs WebGPU: an up-to-date Chrome or Edge on a computer with a graphics card). You can still use the free mode, or add a free Google Gemini key in <Link to="/settings" className="font-semibold text-brand-600 hover:underline">Settings</Link>.</p>}
      {llm.state === 'loading' && (
        <div className="mt-3">
          <div className="mb-1 text-xs text-slate-500">Downloading Jake's brain… {Math.round(llm.progress * 100)}%{llm.mb ? ` of ${(llm.mb / 1000).toFixed(1)} GB` : ''} — you can start talking meanwhile; he switches to AI when it's ready.</div>
          <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"><div className="h-full rounded-full bg-brand-500 transition-[width]" style={{ width: `${Math.round(llm.progress * 100)}%` }} /></div>
        </div>
      )}
      {llm.state === 'error' && <p className="mt-2 text-xs text-rose-600">The free AI couldn't start: {llm.message}</p>}
    </Card>
  );
}

import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronLeft, Info, MessageSquare, Mic, MicOff, Repeat, Volume2 } from 'lucide-react';
import { listeningSentences, SPEAKING, type SpeakingTopic } from '../content/skills';
import { WB_BY_ID } from '../content/workbook';
import { diffTokens, normalize, shuffle } from '../lib/grade';
import { speak, stopSpeaking } from '../lib/speech';
import { listen, recognitionSupported } from '../lib/recognition';
import { getSettings, recordSkill, setLast } from '../store/progress';
import { Button, Card, Progress, cx } from '../components/ui';
import SkillHeader from '../components/SkillHeader';
import { ModeCard } from './Listening';
import { Link } from 'react-router-dom';

type Mode = null | 'read' | 'shadow' | 'talk';

export default function Speaking() {
  const [mode, setMode] = useState<Mode>(null);
  const [round, setRound] = useState(0);
  useEffect(() => { setLast({ kind: 'review', id: 'speaking', title: 'Speaking', path: '/speaking' }); }, []);
  const mic = recognitionSupported();
  return (
    <div>
      <SkillHeader skill="speaking" />
      {mode === null && (
        <>
          {!mic && (
            <Card className="mb-4 flex gap-3 p-4 text-sm">
              <Info size={18} className="mt-0.5 shrink-0 text-amber-500" />
              <span>This browser doesn't support speech recognition, so it can't check your pronunciation automatically. You can still practise: listen, repeat out loud and mark whether you got it right. Automatic checking works in Chrome or Edge.</span>
            </Card>
          )}
          <Link to="/conversation" className="pressable group mb-4 flex items-center gap-4 rounded-xl border-2 border-brand-500/60 bg-brand-50 p-5 transition hover:border-brand-500 dark:bg-brand-500/10">
            <span className="text-4xl">😏</span>
            <span className="min-w-0 flex-1">
              <span className="block font-display text-lg font-bold text-slate-900 dark:text-white">Face-to-face AI conversation</span>
              <span className="block text-sm text-slate-600 dark:text-slate-300">Talk to Jake: he answers out loud, corrects you and gives you a grade. Topics: travel, tech, celebrities, Argentina and more.</span>
            </span>
            <ArrowRight className="shrink-0 text-brand-700 transition group-hover:translate-x-1 dark:text-brand-400" />
          </Link>
          <div className="grid gap-3">
            <ModeCard icon={<Mic />} title="Pronunciation" text="Read a sentence aloud and the app compares what you said, word by word." onClick={() => setMode('read')} />
            <ModeCard icon={<Repeat />} title="Shadowing" text="Listen to a sentence without seeing it and repeat it straight away, copying the rhythm. The study plan recommends 5 minutes a day." onClick={() => setMode('shadow')} />
            <ModeCard icon={<MessageSquare />} title="Conversation" text="Answer questions about workbook topics out loud, using the grammar given." onClick={() => setMode('talk')} />
          </div>
        </>
      )}
      {(mode === 'read' || mode === 'shadow') && <Pronounce key={`${mode}-${round}`} shadow={mode === 'shadow'} onExit={() => setMode(null)} onRestart={() => setRound((n) => n + 1)} />}
      {mode === 'talk' && <Talk onExit={() => setMode(null)} />}
    </div>
  );
}

/** Share of the target words the learner said, in order. */
function wordAccuracy(said: string, target: string) {
  const d = diffTokens(said, target);
  const total = d.filter((t) => t.kind !== 'extra').length;
  const same = d.filter((t) => t.kind === 'same').length;
  return total ? same / total : 0;
}

function MicButton({ onResult, disabled }: { onResult: (text: string) => void; disabled?: boolean }) {
  const [on, setOn] = useState(false);
  const [live, setLive] = useState('');
  const [err, setErr] = useState('');
  const stopRef = useRef<() => void>(() => {});
  const lastRef = useRef('');
  useEffect(() => () => stopRef.current(), []);
  const start = () => {
    if (on) { stopRef.current(); return; }
    stopSpeaking();
    setErr(''); setLive(''); lastRef.current = '';
    setOn(true);
    stopRef.current = listen({
      onText: (t) => { setLive(t); lastRef.current = t; },
      onStatus: (m) => setLive(m),
      onError: (m) => m && setErr(m),
      onEnd: () => { setOn(false); if (lastRef.current) onResult(lastRef.current); },
    });
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <button onClick={start} disabled={disabled} aria-label={on ? 'Stop' : 'Speak'}
        className={cx('pressable relative flex h-20 w-20 items-center justify-center rounded-full shadow-lg', on ? 'bg-rose-500 text-white shadow-rose-500/30' : 'bg-brand-500 text-slate-950 shadow-brand-500/30 hover:bg-brand-400')}>
        {on && <span className="absolute inset-0 animate-ping rounded-full bg-rose-400 opacity-40" />}
        {on ? <MicOff size={30} /> : <Mic size={30} />}
      </button>
      <div className="min-h-[1.5rem] text-center text-sm text-slate-500">{on ? (live || 'Listening… speak now') : 'Tap the microphone and speak'}</div>
      {err && <div className="text-center text-sm text-rose-600">{err}</div>}
    </div>
  );
}

function Pronounce({ shadow, onExit, onRestart }: { shadow: boolean; onExit: () => void; onRestart: () => void }) {
  const items = useMemo(() => shuffle(listeningSentences()).slice(0, 6), []);
  const [i, setI] = useState(0);
  const [said, setSaid] = useState<string | null>(null);
  const [selfOk, setSelfOk] = useState<boolean | null>(null);
  const [scores, setScores] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const mic = recognitionSupported();
  const cur = items[i];
  const acc = said !== null ? wordAccuracy(said, cur.text) : null;
  const finished = said !== null || selfOk !== null;

  useEffect(() => { if (shadow && cur) speak(cur.text, 'en-GB', 0.9); }, [i]); // eslint-disable-line react-hooks/exhaustive-deps

  const next = () => {
    const s = acc !== null ? acc : selfOk ? 1 : 0;
    const all = [...scores, s];
    if (i + 1 >= items.length) {
      const good = all.filter((x) => x >= 0.8).length;
      recordSkill('speaking', shadow ? 'Shadowing' : 'Pronunciation', good, items.length, good * 8);
      setScores(all); setDone(true);
    } else { setScores(all); setI(i + 1); setSaid(null); setSelfOk(null); }
  };

  if (done) {
    const avg = Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 100);
    return (
      <Card className="flex flex-col items-center gap-3 p-8 text-center">
        <CheckCircle2 size={44} className="text-emerald-500" />
        <div className="font-display text-2xl font-bold text-slate-900 dark:text-white">{avg}% accuracy</div>
        <p className="text-slate-500">{avg >= 80 ? 'Very good pronunciation!' : 'Keep practising: listen to the sentences again and pay attention to the marked words.'}</p>
        <div className="flex gap-2"><Button onClick={onExit}>Back</Button><Button variant="secondary" onClick={onRestart}>Another round</Button></div>
      </Card>
    );
  }

  const showText = !shadow || finished;
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <button onClick={onExit} className="pressable rounded-xl p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Salir"><ChevronLeft size={20} /></button>
        <Progress value={i / items.length} className="h-3" />
        <span className="text-sm font-semibold tabular-nums text-slate-500">{i + 1}/{items.length}</span>
      </div>
      <Card className="flex flex-col items-center gap-6 p-6 text-center sm:p-8">
        <div className="text-sm font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-300">{shadow ? 'Listen and repeat straight away' : 'Read aloud'}</div>
        <div className={cx('min-h-[3.5rem] font-display text-2xl font-semibold leading-snug text-slate-900 dark:text-white', !showText && 'select-none blur-md')}>{cur.text}</div>
        <button onClick={() => speak(cur.text, 'en-GB', 0.9)} className="pressable inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"><Volume2 size={16} /> Listen to the model</button>

        {!finished && (mic ? <MicButton onResult={setSaid} /> : (
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-slate-500">Say it out loud and compare it with the model.</p>
            <div className="flex gap-2"><Button variant="success" onClick={() => setSelfOk(true)}>I got it right</Button><Button variant="secondary" onClick={() => setSelfOk(false)}>I need more practice</Button></div>
          </div>
        ))}

        {said !== null && acc !== null && (
          <div className={cx('w-full rounded-2xl border-2 p-4 text-left animate-fade-up', acc >= 0.8 ? 'border-emerald-200 bg-emerald-50/70 dark:border-emerald-500/30 dark:bg-emerald-500/10' : 'border-amber-200 bg-amber-50/70 dark:border-amber-500/30 dark:bg-amber-500/10')}>
            <div className="font-bold text-slate-900 dark:text-white">{acc >= 0.95 ? 'Perfect!' :acc >= 0.8 ? 'Very good!' : 'Almost: check the marked words'} · {Math.round(acc * 100)}%</div>
            <div className="mt-1 text-sm text-slate-500">What was heard: “{said}”</div>
            <div className="mt-2 flex flex-wrap gap-1">
              {diffTokens(said, cur.text).filter((t) => t.kind !== 'extra').map((t, k) => (
                <span key={k} className={cx('rounded px-1', t.kind === 'missing' ? 'bg-amber-200/70 text-amber-900 dark:bg-amber-500/30 dark:text-amber-100' : 'text-emerald-700 dark:text-emerald-300')}>{t.text}</span>
              ))}
            </div>
            <div className="mt-1 text-xs text-slate-500">In yellow: words that weren't recognised. Listen to the model and try again.</div>
            <div className="mt-4 flex gap-2">
              <Button variant="secondary" onClick={() => setSaid(null)}>Repeat</Button>
              <Button className="flex-1" onClick={next}>Continue <ArrowRight size={18} /></Button>
            </div>
          </div>
        )}
        {selfOk !== null && <Button className="w-full" size="lg" onClick={next}>Continue <ArrowRight size={18} /></Button>}
        {cur.es && finished && getSettings().showSpanish && <div className="text-sm text-slate-500">{cur.es}</div>}
      </Card>
    </div>
  );
}

function Talk({ onExit }: { onExit: () => void }) {
  const [topic, setTopic] = useState<SpeakingTopic | null>(null);
  const [qi, setQi] = useState(0);
  const [answer, setAnswer] = useState<string | null>(null);
  const mic = recognitionSupported();

  if (!topic) {
    return (
      <div className="flex flex-col gap-3">
        <button onClick={onExit} className="pressable self-start rounded-xl px-2 py-1 text-sm text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"><ChevronLeft size={16} className="inline" /> Back</button>
        <p className="text-slate-500">Choose a topic. Each one practises a different grammar point.</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {SPEAKING.map((t) => (
            <button key={t.id} onClick={() => { setTopic(t); setQi(0); setAnswer(null); }} className="pressable rounded-2xl bg-white p-4 text-left hover:shadow-md dark:bg-slate-900">
              <div className="font-medium text-slate-900 dark:text-white">{t.title}</div>
              <div className="text-sm text-slate-500">{t.grammar}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const q = topic.questions[qi];
  const words = answer ? normalize(answer).split(' ').filter(Boolean).length : 0;
  const finish = () => { recordSkill('speaking', `Conversation: ${topic.title}`, topic.questions.length, topic.questions.length, 20); setTopic(null); };
  return (
    <div className="flex flex-col gap-4">
      <button onClick={() => setTopic(null)} className="pressable self-start rounded-xl px-2 py-1 text-sm text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"><ChevronLeft size={16} className="inline" /> Topics</button>
      <Card className="flex flex-col items-center gap-5 p-6 text-center sm:p-8">
        <div className="text-sm text-slate-500">{topic.title} · Question {qi + 1} of {topic.questions.length}{topic.wb && WB_BY_ID[topic.wb] ? ` · Objective First Unit ${WB_BY_ID[topic.wb].n}` : ''}</div>
        <div className="font-display text-2xl font-semibold text-slate-900 dark:text-white">{q}</div>
        <button onClick={() => speak(q, 'en-GB', 0.9)} className="pressable inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"><Volume2 size={16} /> Listen to the question</button>
        <div className="rounded-xl bg-brand-50 px-3 py-1.5 text-sm text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">Try to use: {topic.grammar}</div>
        {answer === null ? (
          mic ? <MicButton onResult={setAnswer} /> : (
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-slate-500">Answer out loud for 30–60 seconds.</p>
              <Button onClick={() => setAnswer('')}>I've answered</Button>
            </div>
          )
        ) : (
          <div className="w-full text-left animate-fade-up">
            {answer && <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60"><div className="text-xs font-semibold uppercase text-slate-500">What you said ({words} words)</div><div className="mt-1 text-slate-800 dark:text-slate-100">{answer}</div></div>}
            <p className="mt-3 text-sm text-slate-500">Check: did you use {topic.grammar.toLowerCase()}? Did you answer in full sentences? {words > 0 && words < 15 && 'Try to say a bit more next time.'}</p>
            <div className="mt-4 flex gap-2">
              <Button variant="secondary" onClick={() => setAnswer(null)}>Answer again</Button>
              {qi + 1 < topic.questions.length
                ? <Button className="flex-1" onClick={() => { setQi(qi + 1); setAnswer(null); }}>Next question <ArrowRight size={18} /></Button>
                : <Button className="flex-1" variant="success" onClick={finish}>Finish topic</Button>}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

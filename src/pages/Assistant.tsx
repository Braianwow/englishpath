import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Loader2, Send, Search, Sparkles, User, PlugZap, Trash2 } from 'lucide-react';
import { useSettings } from '../store/progress';
import { askClaude, describeError, searchContent, type ChatTurn, type SearchHit } from '../lib/assistant';
import { Badge, Button, Card, PageHeader, SourceTag, cx } from '../components/ui';
import { SpeakBtn } from '../components/ExerciseView';

interface Msg extends ChatTurn { hits?: SearchHit; error?: boolean }

const SUGGESTIONS = [
  'What is the difference between the present perfect and the past simple?',
  'When do I use for and when do I use since?',
  'Correct this sentence: I am living here since 2019.',
  'What does "put up with" mean?',
  "Let's practise a conversation in a restaurant.",
  'Give me examples of wish with the past perfect.',
];
const KEY = 'ep.chat';

function loadChat(): Msg[] { try { return JSON.parse(sessionStorage.getItem(KEY) || '[]'); } catch { return []; } }

export default function Assistant() {
  const settings = useSettings();
  const ai = settings.aiProvider === 'anthropic' && settings.aiKey.trim().length > 0;
  const [msgs, setMsgs] = useState<Msg[]>(loadChat);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => { try { sessionStorage.setItem(KEY, JSON.stringify(msgs.slice(-40))); } catch { /* ignore */ } endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs]);

  const send = async (text: string) => {
    const t = text.trim();
    if (!t || busy) return;
    setInput('');
    const next: Msg[] = [...msgs, { role: 'user', text: t }];
    setMsgs(next);
    const hits = searchContent(t);
    if (!ai) {
      const found = hits.units.length + hits.words.length;
      setMsgs([...next, { role: 'assistant', hits, text: found ? 'I found this in the platform material:' : 'I couldn\'t find anything in the material with those words. Try the name of the topic (for example "present perfect", "unless", "phrasal verbs") or a specific word.' }]);
      return;
    }
    setBusy(true);
    try {
      const history: ChatTurn[] = next.filter((m) => !m.error).map(({ role, text }) => ({ role, text })).slice(-12);
      const answer = await askClaude(history, settings);
      setMsgs([...next, { role: 'assistant', text: answer, hits }]);
    } catch (e) {
      setMsgs([...next, { role: 'assistant', text: describeError(e), error: true, hits }]);
    } finally { setBusy(false); }
  };

  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="English Assistant" subtitle="Grammar questions, meanings, examples, corrections and conversation practice."
        actions={msgs.length > 0 && <Button variant="ghost" size="sm" onClick={() => setMsgs([])}><Trash2 size={15} /> Clear chat</Button>} />

      <Card className={cx('flex items-start gap-3 p-4', ai ? 'border-emerald-200 dark:border-emerald-500/30' : 'border-amber-200 dark:border-amber-500/30')}>
        {ai ? <Sparkles className="mt-0.5 shrink-0 text-emerald-500" size={20} /> : <PlugZap className="mt-0.5 shrink-0 text-amber-500" size={20} />}
        <div className="text-sm">
          {ai ? (
            <><strong className="text-slate-900 dark:text-white">AI connected</strong> ({settings.aiModel}). Answers use extracts from the material and separate “From the material” from “Extra explanation”.</>
          ) : (
            <><strong className="text-slate-900 dark:text-white">No-AI mode.</strong> No AI is connected: the assistant searches the platform content (grammar units and vocabulary) for your question and shows you what it finds. For conversational answers, free corrections and dialogue practice, add a Claude API key in <Link to="/settings" className="font-semibold text-brand-600 hover:underline">Settings</Link>.</>
          )}
        </div>
      </Card>

      <Card className="flex min-h-[420px] flex-col p-0">
        <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6" style={{ maxHeight: '60vh' }}>
          {msgs.length === 0 && (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <Bot size={40} className="text-brand-400" />
              <div className="text-slate-500">Try one of these questions:</div>
              <div className="flex flex-wrap justify-center gap-2">
                {SUGGESTIONS.map((s) => <button key={s} onClick={() => send(s)} className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm hover:border-brand-300 hover:bg-brand-50 dark:border-slate-700 dark:hover:bg-brand-500/10">{s}</button>)}
              </div>
            </div>
          )}
          {msgs.map((m, i) => (
            <div key={i} className={cx('flex gap-3', m.role === 'user' && 'flex-row-reverse')}>
              <div className={cx('flex h-8 w-8 shrink-0 items-center justify-center rounded-full', m.role === 'user' ? 'bg-brand-500 text-slate-950' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300')}>
                {m.role === 'user' ? <User size={16} /> : ai ? <Bot size={16} /> : <Search size={16} />}
              </div>
              <div className={cx('max-w-[85%] rounded-2xl px-4 py-3', m.role === 'user' ? 'bg-brand-500 text-slate-950' : m.error ? 'bg-rose-50 text-rose-800 dark:bg-rose-500/10 dark:text-rose-200' : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100')}>
                <FormattedText text={m.text} />
                {m.role === 'assistant' && m.hits && <Hits hits={m.hits} compact={ai} />}
              </div>
            </div>
          ))}
          {busy && <div className="flex items-center gap-2 text-sm text-slate-500"><Loader2 size={16} className="animate-spin" /> Thinking…</div>}
          <div ref={endRef} />
        </div>
        <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2 border-t border-slate-200 p-3 dark:border-slate-800">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={ai ? 'Write your question or a sentence to correct…' : 'Search for a topic or word: "since", "unless", "comparatives"…'} className="input" />
          <Button type="submit" disabled={!input.trim() || busy} aria-label="Enviar"><Send size={18} /></Button>
        </form>
      </Card>
    </div>
  );
}

function FormattedText({ text }: { text: string }) {
  return (
    <div className="space-y-2 whitespace-pre-wrap text-[15px] leading-relaxed">
      {text.split(/\n\n+/).map((p, i) => (
        <p key={i}>{p.split(/(\*\*[^*]+\*\*)/g).map((s, j) => s.startsWith('**') ? <strong key={j}>{s.slice(2, -2)}</strong> : <span key={j}>{s}</span>)}</p>
      ))}
    </div>
  );
}

function Hits({ hits, compact }: { hits: SearchHit; compact: boolean }) {
  if (!hits.units.length && !hits.words.length) return null;
  return (
    <div className="mt-3 flex flex-col gap-2">
      {compact && <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Related material</div>}
      {hits.units.map((u) => (
        <Link key={u.id} to={`/grammar/${u.id}`} className="block rounded-xl bg-white p-3 transition hover:ring-2 hover:ring-brand-300 dark:bg-slate-900">
          <div className="flex items-center justify-between gap-2"><span className="font-semibold text-slate-900 dark:text-white">Unit {u.n}: {u.title}</span><SourceTag src="egu" /></div>
          {!compact && <div className="mt-1 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">{u.explain.replace(/\*+/g, '').split('\n\n')[0]}</div>}
          {!compact && u.aff[0] && <div className="mt-1 text-sm italic text-brand-700 dark:text-brand-300">“{u.aff[0].en}”</div>}
        </Link>
      ))}
      {hits.words.map((w) => (
        <div key={w.id} className="flex items-center justify-between gap-2 rounded-xl bg-white p-3 dark:bg-slate-900">
          <div><span className="font-semibold text-slate-900 dark:text-white">{w.en}</span> <span className="font-mono text-xs text-slate-400">/{w.ipa}/</span> — {w.es}<div className="text-sm italic text-slate-500">{w.ex}</div></div>
          <div className="flex items-center gap-1"><SpeakBtn text={w.en} /><Badge tone={w.src === 'egu' ? 'brand' : 'sky'}>{w.src === 'egu' ? 'EGU' : 'OF'}</Badge></div>
        </div>
      ))}
    </div>
  );
}

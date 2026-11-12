import { useEffect, useRef, useState } from 'react';
import { Download, Upload, RotateCcw, KeyRound, Monitor, Moon, Sun, Volume2 } from 'lucide-react';
import { exportProgress, importProgress, resetProgress, updateSettings, useSettings } from '../store/progress';
import { notify } from '../store/toast';
import { setThemeAnimated } from '../lib/theme';
import { Button, Card, PageHeader, cx } from '../components/ui';
import { VOICE_STYLES, englishVoices, resolveVoice, speak, speechSupported } from '../lib/speech';
import ElevenPanel from '../components/ElevenPanel';
import { callGemini } from '../lib/conversation';
import { browserSttAvailable, getSttEngine, setSttEngine, type SttEngine } from '../lib/recognition';
import { preloadLocalStt } from '../lib/localStt';
import { AI_VOICES, DEFAULT_AI_VOICE, aiSupported, loadAiVoice, useAiStatus } from '../lib/neuralTts';

const SAMPLES = [
  "Hey… you came back. I knew you would. Let's learn some English.",
  "Relax. Nobody gets the present perfect right the first time. Except me.",
  "An hour and a half a day, babe. Don't break the streak.",
  "I've been waiting for you. That's present perfect continuous, by the way.",
];

function VoiceSettings() {
  const s = useSettings();
  const ai = useAiStatus();
  const engine = s.voiceEngine ?? 'system';
  const [sample, setSample] = useState(0);
  const test = () => { speak(SAMPLES[sample], 'en-US', 1); setSample((sample + 1) % SAMPLES.length); };
  const pick = (id: string) => { updateSettings({ aiVoice: id }); if (ai.state === 'ready') speak(SAMPLES[sample], 'en-US', 1); };
  const rate = s.voiceRate ?? 1;

  return (
    <Card>
      <div className="mb-1 font-semibold text-slate-900 dark:text-white">Voice</div>
      <p className="mb-3 text-sm text-slate-500">The voice that reads words, sentences, dictations and the Speaking model.</p>
      <div className="grid gap-2 sm:grid-cols-3">
        {([['eleven', 'ElevenLabs 🔥', 'The most human and expressive. Needs your ElevenLabs account and key (uses your credits).'], ['ai', 'Free AI voice', 'Kokoro model in your browser, no account or key. While loading it uses the graphics card heavily and the page may freeze for a few seconds.'], ['system', 'System voice', 'The voices on your device. Robotic, but nothing to download.']] as const).map(([k, l, d]) => (
          <button key={k} disabled={k === 'ai' && !aiSupported()} onClick={() => { updateSettings({ voiceEngine: k }); if (k === 'ai') loadAiVoice(); }}
            className={cx('rounded-xl border-2 p-3 text-left transition disabled:opacity-50', engine === k ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600')}>
            <div className="font-semibold text-slate-900 dark:text-white">{l}</div>
            <div className="text-xs text-slate-500">{d}</div>
          </button>
        ))}
      </div>

      {engine === 'eleven' ? <ElevenPanel /> : engine === 'ai' ? (
        <>
          <div className="mt-4 rounded-xl bg-slate-100 p-3 text-sm dark:bg-slate-800">
            {ai.state === 'ready' && <span className="font-medium text-brand-700 dark:text-brand-400">✓ AI voice ready</span>}
            {ai.state === 'idle' && <div className="flex flex-wrap items-center justify-between gap-2"><span>The model is downloaded only once (330 MB if your computer has a GPU, which is faster; otherwise 90 MB). It stays saved in the browser.</span><Button size="sm" onClick={loadAiVoice}><Download size={14} /> Download voice</Button></div>}
            {ai.state === 'loading' && (
              <div>
                <div className="mb-1.5 flex justify-between"><span>Downloading the AI voice…</span><span className="tabular-nums">{Math.round(ai.progress * 100)}%{ai.mb ? ` of ${ai.mb} MB` : ''}</span></div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"><div className="h-full rounded-full bg-brand-500 transition-all" style={{ width: `${ai.progress * 100}%` }} /></div>
              </div>
            )}
            {ai.state === 'error' && <div className="flex flex-wrap items-center justify-between gap-2 text-rose-600 dark:text-rose-400"><span>No se pudo cargar la voz con IA ({ai.message}). Se usa la del sistema.</span><Button size="sm" variant="secondary" onClick={loadAiVoice}>Try again</Button></div>}
          </div>
          <div className="mt-4 text-sm font-medium">Choose a voice <span className="font-normal text-slate-500">(tap one to hear it)</span></div>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {AI_VOICES.map((v) => (
              <button key={v.id} onClick={() => pick(v.id)}
                className={cx('rounded-xl border-2 px-3 py-2 text-left transition', (s.aiVoice ?? DEFAULT_AI_VOICE) === v.id ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600')}>
                <div className="font-semibold text-slate-900 dark:text-white">{v.label}</div>
                <div className="text-xs text-slate-500">{v.desc}</div>
              </button>
            ))}
          </div>
          <label className="mt-4 block text-sm sm:w-1/2">Speed: <strong>{rate < 0.95 ? 'tranqui' : rate > 1.1 ? 'fast' : 'normal'}</strong>
            <input type="range" min={0.7} max={1.3} step={0.05} value={rate} onChange={(e) => updateSettings({ voiceRate: Number(e.target.value) })} className="mt-2 w-full accent-brand-500" />
          </label>
        </>
      ) : <SystemVoice />}

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Button onClick={test}><Volume2 size={16} /> Test voice</Button>
        <span className="text-xs italic text-slate-500">“{SAMPLES[sample]}”</span>
      </div>
    </Card>
  );
}

function SystemVoice() {
  const s = useSettings();
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>(() => englishVoices());
  useEffect(() => {
    if (!speechSupported()) return;
    const load = () => setVoices(englishVoices());
    load();
    window.speechSynthesis.addEventListener('voiceschanged', load);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', load);
  }, []);
  if (!speechSupported()) return <p className="mt-3 text-sm text-slate-500">Your browser can't read aloud. Try Chrome or Edge.</p>;
  const style = s.voiceStyle ?? 'canchero';
  const preset = VOICE_STYLES[style];
  const pitch = s.voicePitch ?? preset.pitch;
  const rate = s.voiceRate ?? preset.rate;
  const current = voices.length ? resolveVoice('en-GB') : undefined;
  return (
    <>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {(Object.keys(VOICE_STYLES) as (keyof typeof VOICE_STYLES)[]).map((k) => (
          <button key={k} onClick={() => updateSettings({ voiceStyle: k, voicePitch: undefined, voiceRate: undefined, voiceName: '' })}
            className={cx('rounded-xl border-2 p-3 text-left transition', style === k ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600')}>
            <div className="font-semibold text-slate-900 dark:text-white">{VOICE_STYLES[k].label}</div>
            <div className="text-xs text-slate-500">{VOICE_STYLES[k].desc}</div>
          </button>
        ))}
      </div>
      <label className="mt-4 block text-sm">Voz
        <select value={s.voiceName ?? ''} onChange={(e) => updateSettings({ voiceName: e.target.value })} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
          <option value="">Automatic{current ? ` (${current.name})` : ''}</option>
          {voices.map((v) => <option key={v.name} value={v.name}>{v.name} · {v.lang}</option>)}
        </select>
      </label>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm">Pitch: <strong>{pitch < 0.9 ? 'grave' : pitch > 1.1 ? 'agudo' : 'normal'}</strong>
          <input type="range" min={0.5} max={1.5} step={0.05} value={pitch} onChange={(e) => updateSettings({ voicePitch: Number(e.target.value) })} className="mt-2 w-full accent-brand-500" />
        </label>
        <label className="text-sm">Speed: <strong>{rate < 0.95 ? 'tranqui' : rate > 1.1 ? 'fast' : 'normal'}</strong>
          <input type="range" min={0.7} max={1.3} step={0.05} value={rate} onChange={(e) => updateSettings({ voiceRate: Number(e.target.value) })} className="mt-2 w-full accent-brand-500" />
        </label>
      </div>
    </>
  );
}
export default function SettingsPage() {
  const s = useSettings();
  const fileRef = useRef<HTMLInputElement>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [key, setKey] = useState(s.aiKey);

  const doExport = () => {
    const blob = new Blob([exportProgress()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `englishpath-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };
  const doImport = async (f: File) => {
    try { importProgress(await f.text()); notify({ kind: 'info', title: 'Progress imported' }); }
    catch (e) { notify({ kind: 'info', title: 'Import failed', body: (e as Error).message }); }
  };

  return (
    <div className="flex max-w-3xl flex-col gap-5">
      <PageHeader title="Settings" />
      <Card>
        <div className="mb-3 font-semibold text-slate-900 dark:text-white">Appearance</div>
        <div className="flex flex-wrap gap-2">
          {([['light', 'Light', Sun], ['dark', 'Dark', Moon], ['system', 'System', Monitor]] as const).map(([t, l, Icon]) => (
            <button key={t} onClick={(e) => setThemeAnimated(t, e)} className={cx('inline-flex items-center gap-2 rounded-xl border-2 px-4 py-2 text-sm font-medium', s.theme === t ? 'border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200' : 'border-slate-200 dark:border-slate-700')}><Icon size={16} />{l}</button>
          ))}
        </div>
        <label className="mt-4 flex items-center gap-2 text-sm"><input type="checkbox" checked={s.showSpanish} onChange={(e) => updateSettings({ showSpanish: e.target.checked })} className="h-4 w-4" /> Show Spanish translations in the examples</label>
      </Card>

      <VoiceSettings />
      <SpeechRecognitionSettings />

      <Card>
        <div className="mb-3 font-semibold text-slate-900 dark:text-white">Daily goals</div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm">XP per day
            <select value={s.dailyXpGoal} onChange={(e) => updateSettings({ dailyXpGoal: Number(e.target.value) })} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
              {[50, 100, 150, 250, 400].map((n) => <option key={n} value={n}>{n} XP {n === 50 ? '(light)' : n === 100 ? '(normal)' : n === 150 ? '(serious)' : '(intense)'}</option>)}
            </select>
          </label>
          <label className="text-sm">Vocabulary cards per day
            <select value={s.dailyCardsGoal} onChange={(e) => updateSettings({ dailyCardsGoal: Number(e.target.value) })} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
              {[5, 10, 15, 20, 30, 50].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </label>
        </div>
        <p className="mt-2 text-xs text-slate-500">The study plan recommends learning between 20 and 60 new words a week.</p>
      </Card>

      <Card>
        <div className="mb-1 flex items-center gap-2 font-semibold text-slate-900 dark:text-white"><KeyRound size={18} /> AI English Assistant (optional)</div>
        <p className="mb-3 text-sm text-slate-500">Without a key, the assistant only searches the material. With a Claude API key (console.anthropic.com), it answers questions, corrects sentences and practises conversations. The key is stored only in this browser and sent only to api.anthropic.com. API use is charged to your Anthropic account.</p>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={s.aiProvider === 'anthropic'} onChange={(e) => updateSettings({ aiProvider: e.target.checked ? 'anthropic' : 'none' })} className="h-4 w-4" /> Turn on AI</label>
          <input type="password" autoComplete="off" value={key} onChange={(e) => setKey(e.target.value)} placeholder="sk-ant-…" className="input" disabled={s.aiProvider !== 'anthropic'} />
          <label className="text-sm">Modelo
            <select value={s.aiModel} onChange={(e) => updateSettings({ aiModel: e.target.value })} disabled={s.aiProvider !== 'anthropic'} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
              <option value="claude-opus-5-5">Claude Opus 5.5 (recommended)</option>
              <option value="claude-sonnet-5-5">Claude Sonnet 5.5 (cheaper)</option>
              <option value="claude-haiku-5-5">Claude Haiku 5.5 (cheapest)</option>
            </select>
          </label>
          <div className="flex gap-2">
            <Button disabled={s.aiProvider !== 'anthropic'} onClick={() => { updateSettings({ aiKey: key.trim() }); notify({ kind: 'info', title: 'Key saved' }); }}>Save key</Button>
            {s.aiKey && <Button variant="ghost" onClick={() => { setKey(''); updateSettings({ aiKey: '' }); }}>Delete key</Button>}
          </div>
        </div>
      </Card>

      <GeminiSettings />

      <Card>
        <div className="mb-1 font-semibold text-slate-900 dark:text-white">Data and progress</div>
        <p className="mb-3 text-sm text-slate-500">Your progress is saved in this browser (local storage). Export it to keep a copy or move it to another device.</p>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={doExport}><Download size={16} /> Export progress</Button>
          <Button variant="secondary" onClick={() => fileRef.current?.click()}><Upload size={16} /> Import</Button>
          <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) doImport(f); e.target.value = ''; }} />
          {!confirmReset ? <Button variant="ghost" onClick={() => setConfirmReset(true)}><RotateCcw size={16} /> Reset progress</Button>
            : <><Button variant="danger" onClick={() => { resetProgress(); setConfirmReset(false); notify({ kind: 'info', title: 'Progress reset' }); }}>Yes, delete everything</Button><Button variant="ghost" onClick={() => setConfirmReset(false)}>Cancel</Button></>}
        </div>
      </Card>
    </div>
  );
}

function SpeechRecognitionSettings() {
  const [engine, setEngine] = useState<SttEngine>(getSttEngine());
  const choose = (e: SttEngine) => { setSttEngine(e); setEngine(e); if (e === 'local') preloadLocalStt(); };
  const opts: [SttEngine, string, string, boolean][] = [
    ['browser', 'Browser (Google)', 'Fast and shows your words while you speak. It sends your audio to the browser’s speech service, which is not available in every browser.', browserSttAvailable()],
    ['local', 'On this device (Whisper)', 'Works in any browser and your voice never leaves your computer. Downloads a speech model once (80–200 MB) and shows the text when you pause.', true],
  ];
  return (
    <Card>
      <div className="mb-1 font-semibold text-slate-900 dark:text-white">Speech recognition</div>
      <p className="mb-3 text-sm text-slate-500">How the microphone turns your voice into text in Speaking and in the conversation with Jake. If the browser option fails, the app switches to this device by itself.</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {opts.map(([id, label, desc, ok]) => (
          <button key={id} type="button" disabled={!ok} onClick={() => choose(id)}
            className={cx('pressable rounded-xl border p-3 text-left transition disabled:opacity-40', engine === id ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-slate-200 hover:border-brand-500/50 dark:border-slate-700')}>
            <div className="font-semibold text-slate-900 dark:text-white">{label}</div>
            <div className="text-xs text-slate-500">{desc}</div>
          </button>
        ))}
      </div>
    </Card>
  );
}

/** Google Gemini: a smart AI with a free tier, used by the conversation with Jake. */
function GeminiSettings() {
  const s = useSettings();
  const [key, setKey] = useState(s.geminiKey ?? '');
  const [state, setState] = useState<'idle' | 'testing' | 'ok' | 'error'>('idle');
  const [msg, setMsg] = useState('');
  const test = async (k: string) => {
    setState('testing'); setMsg('');
    try {
      const out = await callGemini(k, 'You are Jake, a cocky, flirty English tutor. Answer in one short sentence.', [{ role: 'user', content: 'Say hi to your new student.' }], 60, false);
      setState('ok'); setMsg(out.trim());
    } catch (e) { setState('error'); setMsg((e as Error).message); }
  };
  const save = async () => {
    const k = key.trim();
    updateSettings({ geminiKey: k });
    if (k) await test(k);
  };
  return (
    <Card>
      <div className="mb-1 flex items-center gap-2 font-semibold text-slate-900 dark:text-white"><KeyRound size={18} /> Smart AI for Jake — Google Gemini (free)</div>
      <p className="mb-3 text-sm text-slate-500">With a free Gemini key, Jake understands anything you say, follows the conversation and corrects you like a real tutor. Google's free tier is enough for daily practice. The key is stored only in this browser and sent only to Google.</p>
      <ol className="mb-3 list-decimal space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
        <li>Open <a href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer" className="font-semibold text-brand-600 hover:underline">aistudio.google.com/apikey</a> and sign in with your Google account.</li>
        <li>Click <strong>Create API key</strong> and copy it.</li>
        <li>Paste it here and click <strong>Save and test</strong>.</li>
      </ol>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input type="password" autoComplete="off" value={key} onChange={(e) => setKey(e.target.value)} placeholder="AIza…" className="input" />
        <Button onClick={save} disabled={!key.trim() || state === 'testing'}>{state === 'testing' ? 'Testing…' : 'Save and test'}</Button>
        {s.geminiKey && <Button variant="ghost" onClick={() => { setKey(''); updateSettings({ geminiKey: '' }); setState('idle'); setMsg(''); }}>Delete key</Button>}
      </div>
      {state === 'ok' && <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400">✓ Working. Jake says: “{msg}”</p>}
      {state === 'error' && <p className="mt-2 text-sm text-rose-600">{msg}</p>}
    </Card>
  );
}

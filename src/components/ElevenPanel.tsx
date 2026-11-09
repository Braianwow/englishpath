import { useEffect, useState } from 'react';
import { updateSettings, useSettings } from '../store/progress';
import { listVoices, type ElevenVoice } from '../lib/elevenlabs';
import { speak } from '../lib/speech';
import { Button, cx } from './ui';

/** Settings for the ElevenLabs voice: the learner's key, quality and voice. */
export default function ElevenPanel() {
  const s = useSettings();
  const [key, setKey] = useState(s.elevenKey ?? '');
  const [voices, setVoices] = useState<ElevenVoice[] | null>(null);
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  const load = async (k = s.elevenKey) => {
    if (!k) return;
    setBusy(true); setErr('');
    try { setVoices(await listVoices(k)); } catch (e) { setErr((e as Error).message); setVoices(null); } finally { setBusy(false); }
  };
  useEffect(() => { load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const save = () => { updateSettings({ elevenKey: key.trim() }); load(key.trim()); };
  const choose = (v: ElevenVoice) => {
    updateSettings({ elevenVoiceId: v.voice_id, elevenVoiceName: v.name });
    setTimeout(() => speak("Hey… you came back. I knew you would. Let's learn some English.", 'en-US', 1), 0);
  };

  return (
    <div className="mt-4 flex flex-col gap-3">
      <p className="text-sm text-slate-500">
        Create an account at elevenlabs.io, go to <em>Developers → API Keys</em> and paste the key here. It is stored only in this browser and sent only to api.elevenlabs.io.
        Every sentence read aloud uses credits from your account (the free plan includes a few minutes a month).
      </p>
      <div className="flex gap-2">
        <input type="password" autoComplete="off" value={key} onChange={(e) => setKey(e.target.value)} placeholder="ElevenLabs API key" className="input" />
        <Button onClick={save} disabled={!key.trim() || busy}>{busy ? 'Loading…' : 'Save'}</Button>
      </div>
      {err && <p className="text-sm text-rose-600 dark:text-rose-400">{err}</p>}
      {s.elevenKey && voices && (
        <>
          <label className="text-sm">Quality
            <select value={s.elevenModel ?? 'eleven_multilingual_v2'} onChange={(e) => updateSettings({ elevenModel: e.target.value as 'eleven_flash_v2_5' | 'eleven_multilingual_v2' })}
              className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 sm:w-1/2 dark:border-slate-700 dark:bg-slate-900">
              <option value="eleven_multilingual_v2">More expressive (Multilingual v2)</option>
              <option value="eleven_flash_v2_5">Faster and cheaper (Flash v2.5), best for conversation</option>
            </select>
          </label>
          <div className="text-sm font-medium">
            Choose a voice <span className="font-normal text-slate-500">(tap one to hear it). For voices with more attitude, add them from the ElevenLabs Voice Library and tap “Reload voices”.</span>
          </div>
          <div className="grid max-h-80 gap-2 overflow-y-auto pr-1 sm:grid-cols-2">
            {voices.map((v) => (
              <button key={v.voice_id} onClick={() => choose(v)}
                className={cx('rounded-xl border-2 px-3 py-2 text-left transition', s.elevenVoiceId === v.voice_id ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600')}>
                <div className="font-semibold text-slate-900 dark:text-white">{v.name}{v.labels?.gender === 'male' && <span className="ml-1 text-xs font-normal text-slate-500">♂</span>}</div>
                <div className="text-xs text-slate-500">{[v.labels?.accent, v.labels?.age, v.labels?.description ?? v.labels?.descriptive, v.labels?.use_case].filter(Boolean).join(' · ') || v.category}</div>
              </button>
            ))}
          </div>
          <Button variant="secondary" size="sm" className="self-start" onClick={() => load()}>Reload voices</Button>
          {!s.elevenVoiceId && <p className="text-sm text-amber-600 dark:text-amber-400">Choose a voice to start using it. Until then, the free voice is used.</p>}
        </>
      )}
    </div>
  );
}

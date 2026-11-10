import { getSettings } from '../store/progress';
import { notify } from '../store/toast';
import { speakEleven, stopEleven } from './elevenlabs';
import { stopJake } from './jakeVoice';
import { DEFAULT_AI_VOICE, aiSupported, aiVoiceCached, getAiStatus, loadAiVoice, speakAi, stopAi, whenAiReady } from './neuralTts';

/**
 * Uses the browser's built-in speech synthesis (no network, no AI).
 * The available voices are the ones installed on the device; the "canchero"
 * style picks a male English voice and makes it lower and more laid-back.
 */
export const speechSupported = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

export function stopSpeaking() { stopAi(); stopEleven(); stopJake(); try { window.speechSynthesis.cancel(); } catch { /* ignore */ } }

let warned = false;

export const VOICE_STYLES = {
  canchero: { label: 'Cocky 😏', desc: 'Deep, relaxed male voice, never in a hurry.', pitch: 0.8, rate: 0.93 },
  normal: { label: 'Normal', desc: "Your device's English voice, unchanged.", pitch: 1, rate: 1 },
} as const;

// Common male voice names on Windows, macOS, Android, Chrome and Edge.
const MALE = /\b(andrew|brian|guy|christopher|eric|roger|steffan|davis|jason|tony|ryan|thomas|liam|william|george|david|mark|james|daniel|alex|fred|tom|aaron|arthur|oliver|male|man)\b/i;
const FEMALE = /\b(female|woman|zira|hazel|susan|aria|jenny|emma|ava|libby|sonia|samantha|victoria|karen|moira|tessa|fiona|kate|serena|michelle|ana|sara|natasha|clara)\b/i;

export const englishVoices = (): SpeechSynthesisVoice[] => {
  try { return window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('en')); } catch { return []; }
};

/** Best male voice: natural/online ones first, then the requested accent. */
export function pickMaleVoice(voices: SpeechSynthesisVoice[], lang: string): SpeechSynthesisVoice | undefined {
  const male = voices.filter((v) => MALE.test(v.name) && !FEMALE.test(v.name));
  const score = (v: SpeechSynthesisVoice) => (/natural|online|neural|premium|enhanced/i.test(v.name) ? 4 : 0) + (v.lang === lang ? 2 : 0) + (v.lang.startsWith('en-US') ? 1 : 0);
  return male.sort((a, b) => score(b) - score(a))[0];
}

export function resolveVoice(lang: string): SpeechSynthesisVoice | undefined {
  const s = getSettings();
  const voices = englishVoices();
  if (s.voiceName) { const v = voices.find((x) => x.name === s.voiceName); if (v) return v; }
  if ((s.voiceStyle ?? 'canchero') === 'canchero') { const v = pickMaleVoice(voices, lang); if (v) return v; }
  return voices.find((v) => v.lang === lang) ?? voices[0];
}

export function speak(text: string, lang = 'en-GB', rate = 0.92, onEnd?: () => void, voiceOverride?: string) {
  const s = getSettings();
  const clean = text.replace(/[[\]]/g, '');
  if (s.voiceEngine === 'eleven' && s.elevenKey && s.elevenVoiceId) {
    stopAi();
    try { window.speechSynthesis.cancel(); } catch { /* ignore */ }
    speakEleven(clean, s.elevenKey, s.elevenVoiceId, s.elevenModel ?? 'eleven_multilingual_v2', rate * (s.voiceRate ?? 1), onEnd).catch((e: Error) => {
      notify({ kind: 'info', title: "Couldn't use ElevenLabs", body: e.message });
      speakLocal(clean, lang, rate, onEnd, 'system');
    });
    return;
  }
  // The free AI voice is opt-in: loading it uses the GPU heavily for a while and makes the page stutter.
  speakLocal(clean, lang, rate, onEnd, s.voiceEngine === 'ai' ? 'ai' : 'system', voiceOverride);
}

function speakLocal(clean: string, lang: string, rate: number, onEnd: (() => void) | undefined, engine: string, voiceOverride?: string) {
  const s = getSettings();
  if (engine === 'ai' && aiSupported()) {
    const st = getAiStatus().state;
    const run = () => {
      try { window.speechSynthesis.cancel(); } catch { /* ignore */ }
      const speed = Math.min(1.5, Math.max(0.5, rate * (s.voiceRate ?? 1)));
      speakAi(clean, voiceOverride ?? s.aiVoice ?? DEFAULT_AI_VOICE, speed, onEnd).then((ok) => { if (!ok) speakSystem(clean, lang, rate, onEnd); });
    };
    if (st === 'ready') { run(); return; }
    // Already downloaded before: it loads from the cache in a few seconds, so wait for it.
    if (st !== 'error' && aiVoiceCached()) {
      loadAiVoice();
      if (!warned) { warned = true; notify({ kind: 'info', title: 'Getting the AI voice ready…', body: 'It takes a few seconds when the app opens. Reading it in a moment.' }); }
      // never wait forever: if the AI voice isn't ready in a few seconds, use the system voice this time
      whenAiReady(6000).then((ok) => (ok ? run() : speakSystem(clean, lang, rate, onEnd)));
      return;
    }
    if (st !== 'error') {
      loadAiVoice();
      if (!warned) { warned = true; notify({ kind: 'info', title: 'Descargando la voz con IA…', body: "It's only once (90 to 330 MB depending on your computer). Until then, the system voice is used." }); }
    }
  }
  speakSystem(clean, lang, rate, onEnd);
}

function speakSystem(text: string, lang: string, rate: number, onEnd?: () => void) {
  try {
    const synth = window.speechSynthesis;
    stopAi();
    stopEleven();
    synth.cancel();
    const s = getSettings();
    const style = VOICE_STYLES[s.voiceStyle ?? 'canchero'];
    const u = new SpeechSynthesisUtterance(text);
    const voice = resolveVoice(lang);
    u.lang = voice?.lang ?? lang;
    if (voice) u.voice = voice;
    u.pitch = s.voicePitch ?? style.pitch;
    u.rate = Math.min(2, Math.max(0.4, rate * (s.voiceRate ?? style.rate)));
    // onEnd exactly once, even if the browser never fires "end" (a known Chrome problem)
    let done = false;
    const finish = () => { if (!done) { done = true; clearTimeout(guard); onEnd?.(); } };
    const words = text.split(/\s+/).length;
    const guard = setTimeout(finish, 2500 + (words * 450) / Math.max(0.5, u.rate));
    u.onend = finish;
    u.onerror = finish;
    // speaking right after cancel() sometimes drops the sentence in Chrome: wait a moment
    setTimeout(() => { try { synth.speak(u); } catch { finish(); } }, 60);
  } catch { onEnd?.(); /* speech not available */ }
}

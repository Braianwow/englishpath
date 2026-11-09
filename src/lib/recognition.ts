/**
 * Speech recognition through the browser's Web Speech API (Chrome / Edge).
 * Not every browser has it; callers check `recognitionSupported()` first.
 */
type Rec = {
  lang: string; interimResults: boolean; continuous: boolean; maxAlternatives: number;
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal: boolean }> }) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
  start(): void; stop(): void;
};

function ctor(): (new () => Rec) | null {
  const w = window as unknown as { SpeechRecognition?: new () => Rec; webkitSpeechRecognition?: new () => Rec };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export const recognitionSupported = () => typeof window !== 'undefined' && !!ctor();

export function listen(opts: { onText: (t: string, final: boolean) => void; onEnd: () => void; onError: (msg: string) => void; continuous?: boolean }) {
  const C = ctor();
  if (!C) { opts.onError("Your browser doesn't support speech recognition. Try Chrome or Edge."); opts.onEnd(); return () => {}; }
  const r = new C();
  r.lang = 'en-GB';
  r.interimResults = true;
  r.continuous = !!opts.continuous;
  r.maxAlternatives = 1;
  r.onresult = (e) => {
    let text = '', final = true;
    for (let i = 0; i < e.results.length; i++) { text += e.results[i][0].transcript + ' '; final = final && e.results[i].isFinal; }
    opts.onText(text.trim(), final);
  };
  r.onerror = (e) => opts.onError(
    e.error === 'not-allowed' ? 'No permission to use the microphone. Allow it in the browser.'
      : e.error === 'no-speech' ? "Nothing was heard. Try again, closer to the microphone."
      : e.error === 'network' ? 'Speech recognition needs an internet connection.'
      : e.error === 'aborted' ? '' : `Recognition error: ${e.error}`,
  );
  r.onend = opts.onEnd;
  try { r.start(); } catch { opts.onEnd(); }
  return () => { try { r.stop(); } catch { /* ignore */ } };
}

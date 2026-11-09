/**
 * Records the microphone at 16 kHz, stops by itself after a pause in speech,
 * and transcribes the recording with Whisper in a web worker (see whisper.worker.ts).
 */
let worker: Worker | null = null;
let nextId = 1;
const pending = new Map<number, (r: { text: string; error?: string }) => void>();
let progressCb: ((p: number, mb: number) => void) | null = null;
let ready = false;

function getWorker() {
  if (!worker) {
    worker = new Worker(new URL('./whisper.worker.ts', import.meta.url), { type: 'module' });
    worker.onmessage = (e: MessageEvent<{ type: string; id?: number; text?: string; error?: string; progress?: number; mb?: number; message?: string }>) => {
      const m = e.data;
      if (m.type === 'progress') progressCb?.(m.progress ?? 0, m.mb ?? 0);
      else if (m.type === 'ready') ready = true;
      else if (m.type === 'result' && m.id) { pending.get(m.id)?.({ text: m.text ?? '', error: m.error }); pending.delete(m.id); }
      else if (m.type === 'error') { for (const [id, r] of pending) { r({ text: '', error: m.message }); pending.delete(id); } }
    };
  }
  return worker;
}

export const localSttSupported = () => typeof navigator !== 'undefined' && !!navigator.mediaDevices?.getUserMedia && typeof Worker !== 'undefined';

/** Start downloading the model early (e.g. when the conversation page opens). */
export function preloadLocalStt() { getWorker().postMessage({ type: 'load' }); }

function transcribe(audio: Float32Array): Promise<{ text: string; error?: string }> {
  const id = nextId++;
  return new Promise((res) => { pending.set(id, res); getWorker().postMessage({ type: 'transcribe', id, audio }, [audio.buffer]); });
}

export interface ListenOpts {
  onText: (t: string, final: boolean) => void;
  onEnd: () => void;
  onError: (msg: string) => void;
  /** Status lines such as "Listening…" or the model download progress (never treated as an answer). */
  onStatus?: (msg: string) => void;
}

/** Whisper adds notes like (upbeat music) or [BLANK_AUDIO]: drop them. */
const cleanText = (t: string) => t.replace(/[[(][^\])]*[\])]/g, ' ').replace(/\s+/g, ' ').trim();

const SILENCE_END_MS = 1400;  // stop after this much silence once the learner has spoken
const NO_SPEECH_MS = 9000;    // give up if nothing is said
const MAX_MS = 30000;

export function listenLocal(opts: ListenOpts): () => void {
  let stopped = false, finished = false;
  let stream: MediaStream | null = null, ctx: AudioContext | null = null, node: ScriptProcessorNode | null = null;
  const chunks: Float32Array[] = [];
  let spoke = false, lastVoice = 0;
  const t0 = Date.now();
  let noise = 0.008; // adapts to the room

  const cleanup = () => {
    try { node?.disconnect(); } catch { /* ignore */ }
    stream?.getTracks().forEach((t) => t.stop());
    ctx?.close().catch(() => {});
  };

  const finish = async () => {
    if (finished) return;
    finished = true;
    cleanup();
    if (!spoke) { opts.onError("Nothing was heard. Try again, closer to the microphone."); opts.onEnd(); return; }
    const len = chunks.reduce((a, c) => a + c.length, 0);
    const audio = new Float32Array(len);
    let o = 0; for (const c of chunks) { audio.set(c, o); o += c.length; }
    progressCb = (p, mb) => opts.onStatus?.(`Downloading the speech model (once, ${mb} MB)… ${Math.round(p * 100)}%`);
    opts.onStatus?.(ready ? 'Understanding what you said…' : 'Preparing on-device speech recognition…');
    const r = await transcribe(audio);
    progressCb = null;
    if (r.error) opts.onError(`Speech recognition error: ${r.error}`);
    else if (cleanText(r.text)) opts.onText(cleanText(r.text), true);
    else opts.onError("I couldn't understand that. Try again, a bit louder.");
    opts.onEnd();
  };

  (async () => {
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, channelCount: 1 } });
    } catch {
      opts.onError('No permission to use the microphone. Allow it in the browser (padlock icon next to the address).');
      opts.onEnd(); finished = true; return;
    }
    if (stopped) { cleanup(); opts.onEnd(); finished = true; return; }
    preloadLocalStt();
    ctx = new AudioContext({ sampleRate: 16000 });
    const src = ctx.createMediaStreamSource(stream);
    node = ctx.createScriptProcessor(4096, 1, 1);
    node.onaudioprocess = (e) => {
      if (finished) return;
      const data = new Float32Array(e.inputBuffer.getChannelData(0));
      chunks.push(data);
      let sum = 0; for (let i = 0; i < data.length; i++) sum += data[i] * data[i];
      const rms = Math.sqrt(sum / data.length);
      const now = Date.now();
      if (rms > Math.max(0.015, noise * 3)) { if (!spoke) opts.onStatus?.('Listening… (stops when you pause)'); spoke = true; lastVoice = now; }
      else if (!spoke) noise = noise * 0.95 + rms * 0.05;
      if ((spoke && now - lastVoice > SILENCE_END_MS) || (!spoke && now - t0 > NO_SPEECH_MS) || now - t0 > MAX_MS) finish();
    };
    src.connect(node);
    node.connect(ctx.destination);
    opts.onStatus?.('Listening… speak now');
  })();

  // manual stop: transcribe what was recorded so far
  return () => { stopped = true; if (ctx) finish(); };
}

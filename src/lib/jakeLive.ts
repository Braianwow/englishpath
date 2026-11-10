import { SERVER } from './conversation';
import type { TopicId } from './jake';
import { sharedAudioContext } from './neuralTts';

/**
 * Real-time voice chat with Jake (Gemini Live). The server hands out a one-use pass with Jake's
 * instructions and voice locked inside; the browser then talks straight to Google: the microphone
 * goes up as 16 kHz audio and Jake's voice comes back as 24 kHz audio while he is still thinking,
 * so he answers in about a second. Both sides are also transcribed, to show them as chat bubbles.
 */
export type LiveState = 'connecting' | 'listening' | 'speaking' | 'closed';

export interface LiveEvents {
  state: (s: LiveState) => void;
  /** What the student is saying / Jake is saying in the current turn (grows as it is transcribed). */
  partial: (me: string, jake: string) => void;
  /** A finished exchange. */
  turn: (me: string, jake: string) => void;
  error: (message: string) => void;
}

// Turns the microphone (at 16 kHz) into small chunks of 16-bit PCM.
const WORKLET = `class P extends AudioWorkletProcessor{constructor(){super();this.b=[];this.n=0}
process(i){const c=i[0]&&i[0][0];if(c){this.b.push(new Float32Array(c));this.n+=c.length;if(this.n>=1600){const o=new Int16Array(this.n);let k=0;for(const a of this.b)for(let j=0;j<a.length;j++){const v=Math.max(-1,Math.min(1,a[j]));o[k++]=v<0?v*32768:v*32767}this.port.postMessage(o.buffer,[o.buffer]);this.b=[];this.n=0}}return true}}
registerProcessor('pcm16',P);`;

function toBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(s);
}

function pcmToBuffer(b64: string, rate: number): AudioBuffer {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  const pcm = new Int16Array(bytes.buffer, 0, Math.floor(bytes.length / 2));
  const buf = sharedAudioContext().createBuffer(1, pcm.length, rate);
  const ch = buf.getChannelData(0);
  for (let i = 0; i < pcm.length; i++) ch[i] = pcm[i] / 32768;
  return buf;
}

async function getPass(topic: TopicId, voice: string, alt: number) {
  const res = await fetch(SERVER, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ kind: 'live', topic, voice, alt }),
  });
  const j = await res.json().catch(() => ({})) as { token?: string; model?: string; more?: boolean; error?: string };
  if (!res.ok || !j.token || !j.model) throw new Error(j.error || 'Live voice is not available right now.');
  return { token: j.token, model: j.model, more: !!j.more };
}

type LiveSessionLike = { sendRealtimeInput: (p: object) => void; close: () => void };
export interface LiveChat { stop: () => void; setMuted: (m: boolean) => void }

export async function startLive(topic: TopicId, voice: string, on: LiveEvents): Promise<LiveChat> {
  on.state('connecting');
  let closed = false;
  let muted = false;
  let me = '', jake = '';
  let nextAt = 0;
  let playing: AudioBufferSourceNode[] = [];
  let session: LiveSessionLike | null = null;
  let mic: MediaStream | null = null;
  let micCtx: AudioContext | null = null;
  const out = sharedAudioContext();
  if (out.state !== 'running') out.resume().catch(() => {});

  const speaking = () => playing.length > 0;
  const stopAudio = () => { for (const s of playing) { try { s.stop(); } catch { /* ignore */ } } playing = []; nextAt = 0; };

  const finishTurn = () => {
    if (me.trim() || jake.trim()) on.turn(me.trim(), jake.trim());
    me = ''; jake = '';
    on.partial('', '');
  };

  const stop = () => {
    if (closed) return;
    closed = true;
    finishTurn();
    stopAudio();
    try { session?.close(); } catch { /* ignore */ }
    mic?.getTracks().forEach((t) => t.stop());
    micCtx?.close().catch(() => {});
    on.state('closed');
  };

  try {
    // 1) the microphone (echo cancellation so Jake doesn't hear himself)
    mic = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 } });
    micCtx = new AudioContext({ sampleRate: 16000 });
    const url = URL.createObjectURL(new Blob([WORKLET], { type: 'text/javascript' }));
    await micCtx.audioWorklet.addModule(url);
    URL.revokeObjectURL(url);
    const node = new AudioWorkletNode(micCtx, 'pcm16');
    micCtx.createMediaStreamSource(mic).connect(node);

    // 2) connect to Google with a one-use pass (trying the next model if one isn't available)
    const { GoogleGenAI, Modality } = await import('@google/genai');
    let lastErr = '';
    for (let alt = 0; alt < 3 && !session && !closed; alt++) {
      let pass: { token: string; model: string; more: boolean };
      try { pass = await getPass(topic, voice, alt); } catch (e) { lastErr = (e as Error).message; break; }
      const ai = new GoogleGenAI({ apiKey: pass.token, httpOptions: { apiVersion: 'v1alpha' } });
      let opened = false;
      try {
        const s = await ai.live.connect({
          model: pass.model,
          config: { responseModalities: [Modality.AUDIO], inputAudioTranscription: {}, outputAudioTranscription: {} },
          callbacks: {
            onopen: () => { opened = true; },
            onmessage: (m) => {
              if (closed) return;
              const c = m.serverContent;
              if (!c) { if (m.goAway) on.error('The voice chat is about to end (time limit).'); return; }
              if (c.interrupted) stopAudio();
              for (const p of c.modelTurn?.parts ?? []) {
                const d = p.inlineData;
                if (!d?.data || !d.mimeType?.startsWith('audio')) continue;
                const buf = pcmToBuffer(d.data, Number(/rate=(\d+)/.exec(d.mimeType)?.[1] ?? 24000));
                const src = out.createBufferSource();
                src.buffer = buf;
                src.connect(out.destination);
                nextAt = Math.max(nextAt, out.currentTime + 0.05);
                src.start(nextAt);
                nextAt += buf.duration;
                playing.push(src);
                src.onended = () => {
                  playing = playing.filter((x) => x !== src);
                  if (!playing.length && !closed) on.state('listening');
                };
                on.state('speaking');
              }
              if (c.inputTranscription?.text) { me += c.inputTranscription.text; on.partial(me, jake); }
              if (c.outputTranscription?.text) { jake += c.outputTranscription.text; on.partial(me, jake); }
              if (c.turnComplete) finishTurn();
            },
            onerror: () => { if (!closed && opened) on.error('The voice connection had a problem.'); },
            onclose: (e) => {
              if (!opened || closed) return;
              if (e.code !== 1000) on.error(e.reason ? `Voice chat closed: ${e.reason}` : 'The voice chat ended.');
              stop();
            },
          },
        });
        // a model that isn't available closes right away
        await new Promise((r) => setTimeout(r, 400));
        if (!opened) { try { s.close(); } catch { /* ignore */ } lastErr = 'Could not connect.'; if (!pass.more) break; continue; }
        session = s as unknown as LiveSessionLike;
      } catch (e) {
        lastErr = (e as Error).message || 'Could not connect.';
        if (!pass.more) break;
      }
    }
    if (!session) throw new Error(lastErr || 'Could not connect.');

    // 3) stream the microphone. While Jake talks the mic is paused (so he never hears himself on speakers).
    node.port.onmessage = (e: MessageEvent<ArrayBuffer>) => {
      if (closed || muted || speaking()) return;
      session!.sendRealtimeInput({ audio: { data: toBase64(e.data), mimeType: 'audio/pcm;rate=16000' } });
    };
    on.state('listening');
    // Jake opens the conversation
    session.sendRealtimeInput({ text: '(The student just joined. Greet them and open the topic with a question.)' });
  } catch (e) {
    const msg = (e as Error).name === 'NotAllowedError' ? 'Allow the microphone to talk with Jake.' : (e as Error).message || 'Could not start the voice chat.';
    stop();
    throw new Error(msg);
  }

  return { stop, setMuted: (m) => { muted = m; } };
}

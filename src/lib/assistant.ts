import type { GrammarUnit, Settings, VocabWord } from '../types';
import { UNITS, tagLabel } from '../content';
import { VOCAB } from '../content/vocab';
import { normalize } from './grade';

export interface ChatTurn { role: 'user' | 'assistant'; text: string }
export interface SearchHit { units: GrammarUnit[]; words: VocabWord[] }

const STOP = new Set(['the', 'a', 'an', 'is', 'are', 'to', 'of', 'and', 'or', 'in', 'what', 'how', 'de', 'la', 'el', 'que', 'en', 'y', 'es', 'un', 'una', 'los', 'las', 'con', 'por', 'para', 'cual', 'como', 'se', 'me', 'diferencia', 'entre', 'usar', 'uso', 'cuando', 'significa', 'quiero', 'explicame', 'explica']);

/** Keyword search over the platform's own content (no AI involved). */
export function searchContent(query: string, limit = 4): SearchHit {
  const words = normalize(query).split(' ').filter((w) => w.length > 1 && !STOP.has(w));
  if (!words.length) return { units: [], words: [] };
  const scoreUnit = (u: GrammarUnit) => {
    const title = normalize(`${u.title} ${u.es} ${u.tags.map(tagLabel).join(' ')}`);
    const body = normalize(`${u.explain} ${u.uses.join(' ')} ${u.aff.map((e) => e.en).join(' ')}`);
    let s = 0;
    for (const w of words) {
      if (new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`).test(title)) s += 5;
      else if (title.includes(w)) s += 2;
      if (body.includes(w)) s += 1;
    }
    return s;
  };
  const units = UNITS.map((u) => [u, scoreUnit(u)] as const).filter(([, s]) => s >= 2).sort((a, b) => b[1] - a[1]).slice(0, limit).map(([u]) => u);
  const vw = VOCAB.filter((v) => { const t = normalize(`${v.en} ${v.es}`); return words.some((w) => t.split(' ').includes(w)) || normalize(query).includes(normalize(v.en)); }).slice(0, 6);
  return { units, words: vw };
}

function unitContext(u: GrammarUnit): string {
  return [
    `### English Grammar in Use — Unit ${u.n}: ${u.title}`,
    u.explain,
    u.form ? `Form:${u.form.map((r) => r.join(' | ')).join(' / ')}` : '',
    `Uses:${u.uses.join('; ')}`,
    `Examples:${[...u.aff, ...u.neg, ...u.q].map((e) => e.en).join(' · ')}`,
    `Common mistakes:${u.errors.map(([w, r]) => `✗ ${w} → ✓ ${r}`).join(' · ')}`,
  ].filter(Boolean).join('\n');
}

const SYSTEM = `You are "English Assistant", an English tutor for a Spanish-speaking learner at B1–B2 level.
Answer in clear, simple English (B1–B2 level). Be brief and helpful.
The platform is based on three materials: "English Grammar in Use" (Raymond Murphy, 145 units), the "Objective First Workbook" (Cambridge) and a B1–B2 study plan.
When the message includes extracts from the material, use them first. ALWAYS split your answer into two parts with these exact headings:
**From the material:** what is supported by the extracts provided (mention the unit).
**Extra explanation:** what you add that is not in the extracts.
If there are no relevant extracts, say so under "From the material" and answer in the extra part.
If the student asks you to correct a sentence: show it corrected, point out each mistake and explain the rule.
If they want to practise a conversation: play the other person in English with short turns and, after each answer from the student, add a line "Correction:" if they made mistakes.`;

/**
 * Optional Claude integration. Calls the Anthropic Messages API from the
 * browser with the learner's own API key (stored only in this browser).
 */
export async function askClaude(history: ChatTurn[], settings: Settings): Promise<string> {
  const { default: Anthropic } = await import('@anthropic-ai/sdk');
  const client = new Anthropic({ apiKey: settings.aiKey, dangerouslyAllowBrowser: true });
  const last = history[history.length - 1];
  const hits = searchContent(last.text, 3);
  const ctx = hits.units.length
    ? `Extracts from the material related to the question:\n\n${hits.units.map(unitContext).join('\n\n')}`
    : 'No extracts from the material were found for this question.';
  const messages = history.map((t, i) => ({
    role: t.role,
    content: i === history.length - 1 ? `${ctx}\n\n---\nStudent's question:\n${t.text}` : t.text,
  }));
  const response = await client.beta.messages.create({
    model: settings.aiModel || 'claude-opus-5-5',
    max_tokens: 16000,
    system: SYSTEM,
    output_config: { effort: 'low' },
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    messages,
  });
  if (response.stop_reason === 'refusal') return "The model couldn't answer this. Try asking in a different way.";
  return response.content.map((b) => (b.type === 'text' ? b.text : '')).join('').trim() || '(No text answer)';
}

export function describeError(e: unknown): string {
  const status = (e as { status?: number })?.status;
  if (status === 401) return 'The API key is not valid. Check it in Settings.';
  if (status === 429) return 'The API usage limit was reached. Wait a moment and try again.';
  if (status && status >= 500) return 'The AI service is not available right now. Try again later.';
  if (e instanceof TypeError) return "Couldn't connect to the AI service (no internet connection?).";
  return `AI error: ${(e as Error)?.message ?? 'unknown'}`;
}

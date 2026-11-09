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
    u.form ? `Estructura: ${u.form.map((r) => r.join(' | ')).join(' / ')}` : '',
    `Usos: ${u.uses.join('; ')}`,
    `Ejemplos: ${[...u.aff, ...u.neg, ...u.q].map((e) => e.en).join(' · ')}`,
    `Errores frecuentes: ${u.errors.map(([w, r]) => `✗ ${w} → ✓ ${r}`).join(' · ')}`,
  ].filter(Boolean).join('\n');
}

const SYSTEM = `Sos "English Assistant", un tutor de inglés para un hispanohablante de nivel B1–B2.
Respondé en español (los ejemplos en inglés). Sé claro, breve y pedagógico.
La plataforma se basa en tres materiales: "English Grammar in Use" (Raymond Murphy, 145 unidades), el "Objective First Workbook" (Cambridge) y un plan de estudio B1–B2.
Cuando el mensaje incluya fragmentos del material, priorizalos. Separá SIEMPRE tu respuesta en dos partes con estos títulos exactos:
**Según el material:** lo que se apoya en los fragmentos proporcionados (citá la unidad).
**Explicación complementaria:** lo que agregás vos y no está en los fragmentos.
Si no hay fragmentos relevantes, decilo en "Según el material" y respondé en la parte complementaria.
Si el estudiante pide corregir una oración: mostrala corregida, marcá cada error y explicá la regla.
Si pide practicar una conversación: hacé de interlocutor en inglés con turnos cortos y, después de cada respuesta del estudiante, agregá una línea "Corrección:" si cometió errores.`;

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
    ? `Fragmentos del material relacionados con la pregunta:\n\n${hits.units.map(unitContext).join('\n\n')}`
    : 'No se encontraron fragmentos del material relacionados con esta pregunta.';
  const messages = history.map((t, i) => ({
    role: t.role,
    content: i === history.length - 1 ? `${ctx}\n\n---\nPregunta del estudiante:\n${t.text}` : t.text,
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
  if (response.stop_reason === 'refusal') return 'El modelo no pudo responder a esta consulta. Probá reformularla.';
  return response.content.map((b) => (b.type === 'text' ? b.text : '')).join('').trim() || '(Sin respuesta de texto)';
}

export function describeError(e: unknown): string {
  const status = (e as { status?: number })?.status;
  if (status === 401) return 'La clave de API no es válida. Revisala en Ajustes.';
  if (status === 429) return 'Se alcanzó el límite de uso de la API. Esperá un momento y volvé a intentar.';
  if (status && status >= 500) return 'El servicio de IA no está disponible en este momento. Intentá de nuevo más tarde.';
  if (e instanceof TypeError) return 'No se pudo conectar con el servicio de IA (¿sin conexión a internet?).';
  return `Error al consultar la IA: ${(e as Error)?.message ?? 'desconocido'}`;
}

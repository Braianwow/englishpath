// Answer normalisation and grading for free-text exercises.
// Contractions are expanded on both sides so "I'm working" == "I am working".

const PRONOUN_S = /\b(it|he|she|that|what|where|there|who|here|how|when|why|this)'s\b/g;
const D_MODAL = /\b(i|you|he|she|it|we|they|there|who|that)'d\b/g;

function baseNormalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[‘’ʼ`´]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function expand(s: string, sMode: 'is' | 'has', dMode: 'would' | 'had'): string {
  return s
    .replace(/\bwon't\b/g, 'will not')
    .replace(/\bshan't\b/g, 'shall not')
    .replace(/\bcan't\b/g, 'can not')
    .replace(/\bcannot\b/g, 'can not')
    .replace(/\bain't\b/g, 'am not')
    .replace(/n't\b/g, ' not')
    .replace(/'m\b/g, ' am')
    .replace(/'re\b/g, ' are')
    .replace(/'ve\b/g, ' have')
    .replace(/'ll\b/g, ' will')
    .replace(D_MODAL, `$1 ${dMode}`)
    .replace(PRONOUN_S, `$1 ${sMode}`)
    .replace(/\blet's\b/g, 'let us');
}

function stripPunct(s: string): string {
  return s
    .replace(/[.,!?;:"()¿¡…]/g, ' ')
    .replace(/\s*-\s*/g, '-')
    .replace(/\s+/g, ' ')
    .trim();
}

export function variants(s: string): string[] {
  const b = baseNormalize(s);
  const out = new Set<string>();
  for (const sm of ['is', 'has'] as const)
    for (const dm of ['would', 'had'] as const) out.add(stripPunct(expand(b, sm, dm)));
  return [...out];
}

export function normalize(s: string): string {
  return stripPunct(expand(baseNormalize(s), 'is', 'would'));
}

/** True if `input` matches any accepted answer (contraction- and punctuation-insensitive). */
export function matches(input: string, accepted: string[]): boolean {
  if (!input.trim()) return false;
  const iv = variants(input);
  return accepted.some((a) => {
    const av = variants(a);
    return iv.some((x) => av.includes(x));
  });
}

/** For gap exercises with several gaps separated by " / " in the answer. */
export function matchesGap(input: string, accepted: string[]): boolean {
  return matches(input, accepted);
}

export interface DiffToken { text: string; kind: 'same' | 'missing' | 'extra' }

/** Token-level diff between user answer and correct answer (LCS). */
export function diffTokens(user: string, correct: string): DiffToken[] {
  const a = normalize(user).split(' ').filter(Boolean);
  const b = correct.replace(/\s+/g, ' ').trim().split(' ');
  const bn = b.map((w) => normalize(w));
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--)
    for (let j = n - 1; j >= 0; j--)
      dp[i][j] = a[i] === bn[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const out: DiffToken[] = [];
  let i = 0, j = 0;
  while (i < m && j < n) {
    if (a[i] === bn[j]) { out.push({ text: b[j], kind: 'same' }); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) { out.push({ text: a[i], kind: 'extra' }); i++; }
    else { out.push({ text: b[j], kind: 'missing' }); j++; }
  }
  while (i < m) out.push({ text: a[i++], kind: 'extra' });
  while (j < n) out.push({ text: b[j++], kind: 'missing' });
  return out;
}

/** Levenshtein distance — used to tell the learner "probably a spelling slip". */
export function distance(x: string, y: string): number {
  const a = normalize(x), b = normalize(y);
  const dp = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j];
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return dp[b.length];
}

export function tokensOf(sentence: string): string[] {
  return sentence.replace(/\s+/g, ' ').trim().split(' ');
}

export function shuffle<T>(arr: T[], seed?: number): T[] {
  const a = [...arr];
  let s = seed ?? Math.floor(Math.random() * 1e9);
  const rnd = () => ((s = (s * 1664525 + 1013904223) % 4294967296) / 4294967296);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

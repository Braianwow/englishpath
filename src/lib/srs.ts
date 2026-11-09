import type { CardState } from '../types';

export const DAY = 86_400_000;

/** 0 = Again, 1 = Hard, 2 = Good, 3 = Easy */
export type Grade = 0 | 1 | 2 | 3;

export function newCard(now = Date.now()): CardState {
  return { ease: 2.5, interval: 0, reps: 0, due: now, lapses: 0, learned: false, difficult: false, lastSeen: 0 };
}

/** SM-2 variant. Failing a card brings it back in 10 minutes and marks it difficult after 2 lapses. */
export function review(card: CardState, grade: Grade, now = Date.now()): CardState {
  const c = { ...card, lastSeen: now };
  if (grade === 0) {
    c.lapses += 1;
    c.reps = 0;
    c.interval = 0;
    c.ease = Math.max(1.3, c.ease - 0.2);
    c.due = now + 10 * 60_000;
    if (c.lapses >= 2) c.difficult = true;
    c.learned = false;
    return c;
  }
  c.reps += 1;
  if (c.reps === 1) c.interval = grade === 3 ? 3 : 1;
  else if (c.reps === 2) c.interval = grade === 1 ? 3 : 6;
  else c.interval = Math.round(c.interval * (grade === 1 ? 1.2 : grade === 3 ? c.ease * 1.3 : c.ease));
  c.ease = Math.max(1.3, c.ease + (grade === 1 ? -0.15 : grade === 3 ? 0.15 : 0));
  c.due = now + c.interval * DAY;
  if (c.interval >= 21) c.learned = true;
  return c;
}

export function isDue(card: CardState | undefined, now = Date.now()): boolean {
  return !!card && card.reps + card.lapses > 0 && card.due <= now;
}

export function previewInterval(card: CardState, grade: Grade): string {
  const next = review(card, grade, 0);
  const ms = next.due;
  if (ms < DAY) return `${Math.round(ms / 60_000)} min`;
  const d = Math.round(ms / DAY);
  return d >= 30 ? `${Math.round(d / 30)} mes` : `${d} d`;
}

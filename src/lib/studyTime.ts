import type { DayLog } from '../types';

/** Each section has a 30-minute block; the day needs 1.5 hours (in any sections you choose) to count for the streak. */
export const SECTION_GOAL_SECS = 30 * 60;
export const DAILY_GOAL_MIN = 90;

export const SECTION_IDS = ['grammar', 'vocabulary', 'listening', 'speaking', 'reading', 'writing'] as const;
export type SectionId = (typeof SECTION_IDS)[number];

/** Which section the current page belongs to (null = pages that are not study: home, progress, settings…). */
export function sectionFor(pathname: string): SectionId | null {
  const p = pathname.toLowerCase();
  if (p.startsWith('/vocabulary') || p.startsWith('/my-words') || p.startsWith('/exam/vocab')) return 'vocabulary';
  if (p.startsWith('/listening')) return 'listening';
  if (p.startsWith('/speaking') || p.startsWith('/conversation')) return 'speaking';
  if (p.startsWith('/readings')) return 'reading';
  if (p.startsWith('/writing')) return 'writing';
  if (['/courses', '/learn', '/grammar', '/practice', '/exams', '/exam', '/workbook', '/reference'].some((r) => p.startsWith(r))) return 'grammar';
  return null;
}

export const totalSecs = (secs: Record<string, number> | undefined) => Object.values(secs ?? {}).reduce((a, b) => a + b, 0);

/** Minutes studied on a day (the larger of the old minute counter and the per-section seconds). */
export const dayMinutes = (d: DayLog | undefined) => Math.max(d?.minutes ?? 0, Math.floor(totalSecs(d?.secs) / 60));

export function fmtClock(secs: number): string {
  const s = Math.max(0, Math.floor(secs));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
  const mm = String(m).padStart(h ? 2 : 1, '0'), ss = String(r).padStart(2, '0');
  return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

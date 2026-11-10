import { useSyncExternalStore } from 'react';
import type { ActivityRef, CardState, DayLog, ExamResult, ProgressState, Settings, UnitProgress } from '../types';
import { repository } from '../lib/storage';
import { todayKey } from '../lib/dates';
import { newCard, review, type Grade, DAY } from '../lib/srs';
import { checkAchievements, XP } from '../lib/gamification';
import { notify } from './toast';

export const PASS_MARK = 70;
const VERSION = 1;

export function emptyProgress(): ProgressState {
  return {
    version: VERSION, createdAt: Date.now(), xp: 0, units: {}, exercises: {}, mistakes: {}, cards: {},
    days: {}, exams: [], achievements: {}, readings: {}, studyPlanChecks: {},
  };
}

export const DEFAULT_SETTINGS: Settings = {
  theme: 'system', dailyXpGoal: 100, dailyCardsGoal: 15, showSpanish: false,
  aiProvider: 'none', aiKey: '', aiModel: 'claude-opus-5-5', sound: false,
};

export function emptyUnit(): UnitProgress {
  return { step: 0, best: 0, testAttempts: 0, completed: false, mastery: 0, attempts: 0, correct: 0, lastStudied: 0, nextReview: 0, interval: 0 };
}

function emptyDay(date: string): DayLog {
  return { date, xp: 0, minutes: 0, exercises: 0, correct: 0, cards: 0, lessons: 0 };
}

// ───────── store core ─────────
let state: ProgressState = { ...emptyProgress(), ...(repository.loadProgress() ?? {}) };
let settings: Settings = { ...DEFAULT_SETTINGS, ...(repository.loadSettings() ?? {}) };
const listeners = new Set<() => void>();

function emit() { listeners.forEach((l) => l()); }
function subscribe(l: () => void) { listeners.add(l); return () => listeners.delete(l); }

function commit(next: ProgressState) {
  const unlocked = checkAchievements(next);
  if (unlocked.length) {
    next = { ...next, achievements: { ...next.achievements } };
    for (const a of unlocked) {
      next.achievements[a.id] = Date.now();
      notify({ kind: 'achievement', title: `Achievement unlocked: ${a.title}`, body: a.desc });
    }
  }
  state = next;
  repository.saveProgress(state);
  emit();
}

function day(s: ProgressState): DayLog {
  const k = todayKey();
  return s.days[k] ?? emptyDay(k);
}

function withDay(s: ProgressState, patch: (d: DayLog) => DayLog): ProgressState {
  const d = patch({ ...day(s) });
  return { ...s, days: { ...s.days, [d.date]: d } };
}

export const getProgress = () => state;
export const getSettings = () => settings;

export function useProgress(): ProgressState {
  return useSyncExternalStore(subscribe, getProgress);
}
export function useSettings(): Settings {
  return useSyncExternalStore(subscribe, getSettings);
}

// ───────── actions ─────────
export function updateSettings(patch: Partial<Settings>) {
  settings = { ...settings, ...patch };
  repository.saveSettings(settings);
  applyTheme(settings.theme);
  emit();
}

export function applyTheme(theme: Settings['theme']) {
  const dark = theme === 'dark' || (theme === 'system' && window.matchMedia?.('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', !!dark);
}

/** Record an answer to an exercise. `key` is a stable id like "u7:3". */
export function recordAnswer(unitId: string | null, key: string, ok: boolean, opts: { inTest?: boolean } = {}) {
  let s = { ...state };
  const now = Date.now();
  const prev = s.exercises[key] ?? { seen: 0, correct: 0, last: 0, lastOk: false };
  s.exercises = { ...s.exercises, [key]: { seen: prev.seen + 1, correct: prev.correct + (ok ? 1 : 0), last: now, lastOk: ok } };
  const mistakes = { ...s.mistakes };
  if (ok) delete mistakes[key];
  else mistakes[key] = { at: now, count: (mistakes[key]?.count ?? 0) + 1 };
  s.mistakes = mistakes;
  if (unitId) {
    const u = { ...(s.units[unitId] ?? emptyUnit()) };
    u.attempts += 1;
    if (ok) u.correct += 1;
    // exponential moving average: recent answers count more
    u.mastery = u.attempts === 1 ? (ok ? 0.6 : 0) : u.mastery * 0.85 + (ok ? 0.15 : 0);
    u.lastStudied = now;
    s.units = { ...s.units, [unitId]: u };
  }
  const gained = ok ? (opts.inTest ? XP.testCorrect : XP.correct) : 0;
  s.xp += gained;
  s = withDay(s, (d) => ({ ...d, xp: d.xp + gained, exercises: d.exercises + 1, correct: d.correct + (ok ? 1 : 0) }));
  commit(s);
  return gained;
}

export function reachStep(unitId: string, step: number) {
  const u = { ...(state.units[unitId] ?? emptyUnit()) };
  if (step <= u.step) return;
  u.step = step;
  u.lastStudied = Date.now();
  let s: ProgressState = { ...state, units: { ...state.units, [unitId]: u } };
  s = withDay(s, (d) => ({ ...d, lessons: d.lessons + 1, xp: d.xp + XP.lessonStep }));
  s.xp += XP.lessonStep;
  commit(s);
}

export function finishUnitTest(unitId: string, score: number, result: ExamResult) {
  const u = { ...(state.units[unitId] ?? emptyUnit()) };
  const now = Date.now();
  u.testAttempts += 1;
  u.best = Math.max(u.best, score);
  const passed = score >= PASS_MARK;
  const firstPass = passed && !u.completed;
  if (passed) u.completed = true;
  u.step = Math.max(u.step, 4);
  u.mastery = u.mastery * 0.4 + (score / 100) * 0.6;
  // schedule next review of the unit (spaced repetition at unit level)
  u.interval = passed ? (score >= 90 ? 7 : 3) : 1;
  u.nextReview = now + u.interval * DAY;
  u.lastStudied = now;
  let s: ProgressState = { ...state, units: { ...state.units, [unitId]: u }, exams: [result, ...state.exams].slice(0, 200) };
  const bonus = firstPass ? XP.unitPassed : 0;
  s.xp += bonus;
  s = withDay(s, (d) => ({ ...d, xp: d.xp + bonus }));
  commit(s);
  return { passed, bonus };
}

/** After a review session on a unit: grow or shrink its review interval. */
export function reviewUnit(unitId: string, accuracy: number) {
  const u = { ...(state.units[unitId] ?? emptyUnit()) };
  const now = Date.now();
  if (accuracy >= 0.8) u.interval = Math.min(90, Math.max(2, Math.round((u.interval || 2) * (1.5 + u.mastery))));
  else if (accuracy < 0.5) u.interval = 1;
  else u.interval = Math.max(1, Math.round((u.interval || 1) * 1.2));
  u.nextReview = now + u.interval * DAY;
  commit({ ...state, units: { ...state.units, [unitId]: u } });
}

export function recordExam(result: ExamResult, bonusXp = 0) {
  let s: ProgressState = { ...state, exams: [result, ...state.exams].slice(0, 200), xp: state.xp + bonusXp };
  s = withDay(s, (d) => ({ ...d, xp: d.xp + bonusXp }));
  commit(s);
}

export function reviewCard(id: string, grade: Grade) {
  const prev = state.cards[id] ?? newCard();
  const next = review(prev, grade);
  let s: ProgressState = { ...state, cards: { ...state.cards, [id]: { ...next, difficult: prev.difficult || next.difficult } } };
  s.xp += XP.card;
  s = withDay(s, (d) => ({ ...d, cards: d.cards + 1, xp: d.xp + XP.card }));
  commit(s);
}

export function setCardFlags(id: string, flags: Partial<Pick<CardState, 'learned' | 'difficult'>>) {
  const prev = state.cards[id] ?? newCard();
  const next = { ...prev, ...flags };
  if (flags.difficult) next.due = Math.min(next.due, Date.now()); // bring difficult words back now
  if (flags.learned && prev.interval < 21) { next.interval = 21; next.reps = Math.max(next.reps, 3); next.due = Date.now() + 21 * DAY; }
  if (flags.learned === false && prev.learned) { next.interval = 1; next.due = Date.now(); }
  if (next.reps === 0 && next.lapses === 0 && (flags.difficult || flags.learned)) next.reps = flags.learned ? 3 : 0;
  commit({ ...state, cards: { ...state.cards, [id]: next } });
}

export function recordReading(id: string, score: number) {
  const prev = state.readings[id]?.best ?? 0;
  commit({ ...state, readings: { ...state.readings, [id]: { best: Math.max(prev, score), at: Date.now() } } });
}

export function setLast(ref: Omit<ActivityRef, 'at'>) {
  state = { ...state, last: { ...ref, at: Date.now() } };
  repository.saveProgress(state);
  emit();
}

export function addMinutes(n: number) {
  commit(withDay(state, (d) => ({ ...d, minutes: d.minutes + n })));
}

/** Adds active study seconds per section to a given day; `minutes` follows the total. */
export function addStudySeconds(date: string, delta: Record<string, number>) {
  const d: DayLog = { ...(state.days[date] ?? emptyDay(date)) };
  const secs = { ...(d.secs ?? {}) };
  for (const [k, v] of Object.entries(delta)) if (v > 0) secs[k] = (secs[k] ?? 0) + v;
  d.secs = secs;
  d.minutes = Math.max(d.minutes, Math.floor(Object.values(secs).reduce((a, b) => a + b, 0) / 60));
  commit({ ...state, days: { ...state.days, [date]: d } });
}

export function toggleStudyBlock(date: string, block: string) {
  const cur = state.studyPlanChecks[date] ?? [];
  const next = cur.includes(block) ? cur.filter((b) => b !== block) : [...cur, block];
  commit({ ...state, studyPlanChecks: { ...state.studyPlanChecks, [date]: next } });
}

export function saveWriting(id: string, text: string, checks: number[]) {
  commit({ ...state, writings: { ...(state.writings ?? {}), [id]: { text, checks, at: Date.now() } } });
}

// ───────── my own words (word = sentence = meaning) ─────────
export function addMyWords(items: { word: string; sentence: string; meaning: string }[]) {
  const now = Date.now();
  const myWords = { ...(state.myWords ?? {}) };
  items.forEach((it, i) => {
    const id = `${now.toString(36)}${i.toString(36)}${Math.random().toString(36).slice(2, 6)}`;
    myWords[id] = { id, word: it.word.trim(), sentence: it.sentence.trim(), meaning: it.meaning.trim(), at: now + i };
  });
  commit({ ...state, myWords });
}

export function updateMyWord(id: string, patch: { word: string; sentence: string; meaning: string }) {
  const prev = state.myWords?.[id];
  if (!prev) return;
  commit({ ...state, myWords: { ...state.myWords, [id]: { ...prev, ...patch } } });
}

export function deleteMyWord(id: string) {
  const myWords = { ...(state.myWords ?? {}) };
  delete myWords[id];
  const cards = { ...state.cards };
  delete cards[`my:${id}`];
  commit({ ...state, myWords, cards });
}

/** Practice in listening/speaking/writing: adds XP and logs the activity. */
export function recordSkill(kind: 'listening' | 'speaking' | 'writing', title: string, correct: number, total: number, xp: number) {
  const result: ExamResult = { id: `${kind}-${Date.now()}`, kind, title, date: Date.now(), total, correct, score: total ? Math.round((correct / total) * 100) : 100, weakUnits: [] };
  let s: ProgressState = { ...state, exams: [result, ...state.exams].slice(0, 200), xp: state.xp + xp };
  s = withDay(s, (d) => ({ ...d, xp: d.xp + xp }));
  commit(s);
}

export function resetProgress() {
  repository.clear();
  state = emptyProgress();
  repository.saveProgress(state);
  emit();
}

export function exportProgress(): string {
  return JSON.stringify({ progress: state, settings: { ...settings, aiKey: '', geminiKey: '' } }, null, 2);
}

export function importProgress(json: string) {
  const data = JSON.parse(json);
  if (!data?.progress?.version) throw new Error("The file doesn't have the expected format.");
  state = { ...emptyProgress(), ...data.progress };
  repository.saveProgress(state);
  emit();
}

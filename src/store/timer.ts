import { useEffect, useSyncExternalStore } from 'react';
import { addStudySeconds, getProgress } from './progress';
import { notify } from './toast';
import { todayKey } from '../lib/dates';
import { DAILY_GOAL_MIN, SECTION_GOAL_SECS, type SectionId, totalSecs } from '../lib/studyTime';

/**
 * Manual study timer. It starts paused and only counts after the learner presses Play;
 * from then on it keeps counting (switching sections or browser tabs does not pause it)
 * until the learner presses Pause. Time goes to the section that is open; pages that are
 * not a study section don't add time. Elapsed time is measured with timestamps, so a
 * background tab (where browsers slow down timers) still counts correctly.
 */
const FLUSH_EVERY = 15;
const MAX_STEP = 10 * 60; // never add more than 10 min in one tick (e.g. after the computer slept)

/** running = counting · paused = waiting for Play · idle = playing on a page that isn't a study section */
type Status = 'running' | 'idle' | 'paused' | 'off';
let pending: Record<string, number> = {};
let pendingDate = todayKey();
let status: Status = 'off';
let current: SectionId | null = null;
let playing = false;
let lastTick = Date.now();
let carry = 0; // fractions of a second not added yet
let version = 0;
const listeners = new Set<() => void>();
const emit = () => { version++; listeners.forEach((l) => l()); };
const subscribe = (l: () => void) => { listeners.add(l); return () => listeners.delete(l); };

function flush() {
  if (totalSecs(pending) > 0) {
    const delta = pending;
    pending = {};
    addStudySeconds(pendingDate, delta);
  }
  pendingDate = todayKey();
}

const computeStatus = (): Status => (!playing ? (current ? 'paused' : 'off') : current ? 'running' : 'idle');
function refresh() { const s = computeStatus(); if (s !== status) { status = s; emit(); } }

/** Start or pause the timer. */
export function togglePlay() {
  playing = !playing;
  lastTick = Date.now(); carry = 0;
  if (!playing) flush();
  status = computeStatus();
  emit();
}

/** Seconds per section for today, including the ones not saved yet. */
export function todaySecs(): Record<string, number> {
  const saved = getProgress().days[todayKey()]?.secs ?? {};
  if (pendingDate !== todayKey()) return { ...saved };
  const out = { ...saved };
  for (const [k, v] of Object.entries(pending)) out[k] = (out[k] ?? 0) + v;
  return out;
}

export function useStudyTime() {
  useSyncExternalStore(subscribe, () => version);
  const secs = todaySecs();
  const minutes = Math.max(getProgress().days[todayKey()]?.minutes ?? 0, Math.floor(totalSecs(secs) / 60));
  return { secs, minutes, status, playing };
}

function tick(label: string) {
  const now = Date.now();
  const elapsed = Math.min(MAX_STEP, (now - lastTick) / 1000 + carry);
  lastTick = now;
  if (pendingDate !== todayKey()) flush(); // midnight: close the previous day
  if (!playing || !current) { carry = 0; refresh(); return; }
  const add = Math.floor(elapsed);
  carry = elapsed - add;
  if (add <= 0) return;
  const before = todaySecs();
  pending[current] = (pending[current] ?? 0) + add;
  const sec = before[current] ?? 0;
  if (sec < SECTION_GOAL_SECS && sec + add >= SECTION_GOAL_SECS) {
    notify({ kind: 'info', title: `30 minutes of ${label}!`, body: 'Block complete. Keep going or move on to another section.' });
    flush();
  }
  const total = totalSecs(before);
  if (total < DAILY_GOAL_MIN * 60 && total + add >= DAILY_GOAL_MIN * 60) {
    notify({ kind: 'level', title: '1.5 hours done!', body: 'Today counts towards your streak.' });
    flush();
  }
  if (totalSecs(pending) >= FLUSH_EVERY) flush();
  status = 'running';
  emit();
}

/** Mount once (in the layout) with the section of the current page. */
export function useStudyTimer(section: SectionId | null, label: string) {
  useEffect(() => {
    tick(label); // close the time spent in the previous section
    current = section;
    refresh();
    const onHide = () => { if (document.visibilityState === 'hidden') { tick(label); flush(); } else tick(label); };
    document.addEventListener('visibilitychange', onHide);
    window.addEventListener('pagehide', flush);
    const id = window.setInterval(() => tick(label), 1000);
    emit();
    return () => {
      document.removeEventListener('visibilitychange', onHide);
      window.removeEventListener('pagehide', flush);
      window.clearInterval(id);
      tick(label);
      flush();
    };
  }, [section, label]);
}

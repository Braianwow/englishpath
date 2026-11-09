import type { ProgressState, Settings } from '../types';

/**
 * Persistence boundary. Today everything lives in localStorage; to move to a
 * real database implement this interface (e.g. with fetch calls to an API or
 * Supabase) and swap it in `repository` below. Nothing else in the app touches storage.
 */
export interface ProgressRepository {
  loadProgress(): ProgressState | null;
  saveProgress(p: ProgressState): void;
  loadSettings(): Partial<Settings> | null;
  saveSettings(s: Settings): void;
  clear(): void;
}

const P_KEY = 'ep.progress';
const S_KEY = 'ep.settings';

function safeGet(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}
function safeSet(key: string, v: string) {
  try { localStorage.setItem(key, v); } catch (e) { console.warn("Couldn't save your progress", e); }
}

export class LocalStorageRepository implements ProgressRepository {
  loadProgress() {
    const raw = safeGet(P_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw) as ProgressState; } catch { return null; }
  }
  saveProgress(p: ProgressState) { safeSet(P_KEY, JSON.stringify(p)); }
  loadSettings() {
    const raw = safeGet(S_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw) as Partial<Settings>; } catch { return null; }
  }
  saveSettings(s: Settings) { safeSet(S_KEY, JSON.stringify(s)); }
  clear() { try { localStorage.removeItem(P_KEY); } catch { /* ignore */ } }
}

export const repository: ProgressRepository = new LocalStorageRepository();

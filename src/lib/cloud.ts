import { useSyncExternalStore } from 'react';
import { applyCloudSnapshot, cloudSnapshot, getProgress, onStoreChange } from '../store/progress';

/**
 * Accounts and cloud saving (on the Cloudflare site). Signed in, every change is saved to the
 * learner's account a couple of seconds later, so the progress follows them to any device.
 * Signed out, the site works exactly as before (progress only in this browser).
 */
export type CloudState = {
  /** false where the site has no account server (e.g. GitHub Pages) */
  available: boolean;
  checked: boolean;
  email: string | null;
  sync: 'idle' | 'saving' | 'saved' | 'error';
};

let st: CloudState = { available: false, checked: false, email: null, sync: 'idle' };
const listeners = new Set<() => void>();
const set = (p: Partial<CloudState>) => { st = { ...st, ...p }; listeners.forEach((l) => l()); };
export const getCloud = () => st;
export const useCloud = () => useSyncExternalStore((l) => { listeners.add(l); return () => listeners.delete(l); }, getCloud);

const OWNER_KEY = 'ep.cloudUser'; // whose progress is in this browser
const owner = () => { try { return localStorage.getItem(OWNER_KEY); } catch { return null; } };
const setOwner = (e: string | null) => { try { if (e) localStorage.setItem(OWNER_KEY, e); else localStorage.removeItem(OWNER_KEY); } catch { /* ignore */ } };

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(path, { credentials: 'same-origin', ...init, headers: { 'Content-Type': 'application/json', ...(init?.headers ?? {}) } });
  const j = await res.json().catch(() => ({})) as T & { error?: string };
  if (!res.ok) throw new Error(j.error || `Error ${res.status}`);
  return j;
}

// ── saving ──
let applying = false;
let timer: ReturnType<typeof setTimeout> | undefined;
let dirty = false;

async function push(keepalive = false) {
  if (!st.email) return;
  clearTimeout(timer);
  dirty = false;
  set({ sync: 'saving' });
  try {
    await api('/api/progress', { method: 'PUT', body: JSON.stringify({ data: cloudSnapshot() }), keepalive });
    set({ sync: dirty ? 'saving' : 'saved' });
  } catch {
    dirty = true;
    set({ sync: 'error' });
    timer = setTimeout(() => push(), 30000); // try again later
  }
}

onStoreChange(() => {
  if (applying || !st.email) return;
  dirty = true;
  clearTimeout(timer);
  timer = setTimeout(() => push(), 2000);
});
if (typeof window !== 'undefined') {
  // save right away when the tab is closed or hidden
  const flush = () => { if (dirty && st.email) push(true); };
  window.addEventListener('pagehide', flush);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
}

function apply(data: Parameters<typeof applyCloudSnapshot>[0]) {
  applying = true;
  try { applyCloudSnapshot(data); } finally { applying = false; }
}

/** After signing in: load the account's progress, or upload this browser's if the account is new. */
async function pull(email: string, fresh: boolean) {
  const r = await api<{ data: Parameters<typeof applyCloudSnapshot>[0] }>('/api/progress');
  const localIsMine = owner() === email;
  if (r.data) {
    apply(r.data);
  } else if (fresh || localIsMine || !owner()) {
    // new account (or nothing saved yet): this browser's progress becomes the account's
    await push();
  } else {
    apply(null);
  }
  setOwner(email);
  set({ sync: 'saved' });
}

/** Checks whether this site has accounts and whether the visitor is signed in. */
export async function initCloud() {
  if (st.checked) return;
  try {
    const r = await api<{ user?: { email: string } | null }>('/api/account');
    if (r.user === undefined) throw new Error('no account server here');
    set({ available: true, checked: true, email: r.user?.email ?? null });
    if (r.user) await pull(r.user.email, false);
    else if (owner()) { setOwner(null); apply(null); } // the session ended: don't leave someone's progress here
  } catch {
    set({ available: false, checked: true });
  }
}

export async function signIn(email: string, password: string, register: boolean) {
  const r = await api<{ user: { email: string } }>('/api/account', {
    method: 'POST', body: JSON.stringify({ action: register ? 'register' : 'login', email, password }),
  });
  set({ email: r.user.email });
  await pull(r.user.email, register);
}

export async function signOut() {
  if (dirty) await push();
  await api('/api/account', { method: 'POST', body: JSON.stringify({ action: 'logout' }) }).catch(() => {});
  setOwner(null);
  set({ email: null, sync: 'idle' });
  apply(null); // the next person on this computer starts clean
}

/** True when this browser has some progress worth keeping. */
export const hasLocalProgress = () => {
  const p = getProgress();
  return p.xp > 0 || Object.keys(p.units).length > 0 || Object.keys(p.cards).length > 0;
};

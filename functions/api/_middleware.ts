import { SITE_OFF } from '../../src/siteStatus';

/** While the site is switched off, the account API answers nothing (the data stays untouched). */
export async function onRequest(context: { next: () => Promise<Response> }) {
  if (SITE_OFF) {
    return new Response(JSON.stringify({ error: 'EnglishPath is temporarily offline.' }), {
      status: 503, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });
  }
  return context.next();
}

-- EnglishPath accounts (Cloudflare D1). Run with:
--   npx wrangler d1 execute englishpath --remote --file db/schema.sql
CREATE TABLE IF NOT EXISTS users (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  email      TEXT NOT NULL UNIQUE COLLATE NOCASE,
  pass_hash  TEXT NOT NULL,          -- PBKDF2-SHA256, base64
  pass_salt  TEXT NOT NULL,          -- random 16 bytes, base64
  created_at INTEGER NOT NULL
);

-- Only a SHA-256 of each session token is stored, so a leaked table can't be used to sign in.
CREATE TABLE IF NOT EXISTS sessions (
  token_hash TEXT PRIMARY KEY,
  user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS sessions_user ON sessions(user_id);

-- Each learner's saved progress and settings (API keys are never uploaded).
CREATE TABLE IF NOT EXISTS progress (
  user_id    INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  data       TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);

-- Failed sign-in attempts, to slow down password guessing.
CREATE TABLE IF NOT EXISTS login_fails (
  email TEXT NOT NULL COLLATE NOCASE,
  at    INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS login_fails_email ON login_fails(email, at);

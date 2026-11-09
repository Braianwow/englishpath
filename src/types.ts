// ───────────── Content model ─────────────
// Source tags let the UI distinguish what comes from each PDF vs. what is a
// complementary explanation written for this platform.
export type SourceId = 'egu' | 'obj' | 'plan' | 'extra' | 'cuad' | 'set';

export type Difficulty = 1 | 2 | 3;

interface ExBase {
  /** Why the answer is correct (shown after answering). Spanish. */
  why: string;
  /** Optional extra example shown after answering. */
  more?: string;
  d?: Difficulty;
  /** Where the exercise comes from ('cuad' = learner's practice booklet). Undefined = written for the platform. */
  src?: SourceId;
  /** Number in the source, e.g. "7.1" */
  ref?: string;
  /** Instruction of the exercise set this item belongs to (book-style sets) */
  ins?: string;
  /** Situation that gives context to the item (shown above it). */
  sit?: string;
}

/** A numbered exercise set (1.1, 1.2 …) with one instruction and several items. */
export interface ExerciseSet { ref: string; ins: string; ex: Exercise[] }

/** Multiple choice. `a` = index of correct option. Also used for "choose the tense", "word in context", EN→ES translation. */
export interface ExMC extends ExBase { t: 'mc'; q: string; opts: string[]; a: number; kind?: 'tense' | 'context' | 'tr-en-es' | 'dialog' }
/** Fill the gap(s). `___` in q marks the gap. `a` = list of accepted answers (first = model answer). */
export interface ExGap extends ExBase { t: 'gap'; q: string; a: string[]; hint?: string; ctx?: string[] }
/** Order the words. Tokens are derived by splitting `a[0]`; `a` may hold alternative correct orders. */
export interface ExOrder extends ExBase { t: 'order'; a: string[]; es?: string }
/** Translate Spanish → English (free text). */
export interface ExTr extends ExBase { t: 'tr'; q: string; a: string[] }
/** Correct the sentence (free text). */
export interface ExFix extends ExBase { t: 'fix'; q: string; a: string[] }
/** Tap the wrong word. `bad` = index of wrong token in q.split(' '). `ok` = correction. Use bad = -1 for "the sentence is correct". */
export interface ExSpot extends ExBase { t: 'spot'; q: string; bad: number; ok: string }
/** Match pairs. */
export interface ExMatch extends ExBase { t: 'match'; pairs: [string, string][]; q?: string }
/** Build a sentence from a prompt (free text, several accepted). */
export interface ExBuild extends ExBase { t: 'build'; q: string; a: string[] }

export type Exercise = ExMC | ExGap | ExOrder | ExTr | ExFix | ExSpot | ExMatch | ExBuild;
export type ExerciseType = Exercise['t'];

export interface Example { en: string; es?: string }

export interface GrammarUnit {
  id: string; // e.g. "u7"
  n: number; // number in English Grammar in Use
  title: string;
  es: string; // short title in Spanish
  module: string; // module id
  tags: string[];
  prereq?: string[];
  goals: string[];
  /** Simple explanation in Spanish (paragraphs separated by \n\n, **bold** allowed). */
  explain: string;
  /** Structure table: rows of cells. First row = header. */
  form?: string[][];
  uses: string[];
  aff: Example[];
  neg: Example[];
  q: Example[];
  /** Common mistakes: [wrong, right, note] */
  errors: [string, string, string][];
  /** Comparison with similar structures */
  compare?: { with: string[]; text: string };
  ex: Exercise[];
  /** Activity from the learner's practice booklet (cuadernillo) for this unit */
  cuad?: Exercise;
  /** Numbered exercise sets (same structure as the reference book, original content) */
  sets?: ExerciseSet[];
}

export interface Module {
  id: string;
  title: string;
  es: string;
  color: string; // tailwind color stem
  units: string[]; // ordered
  /** Short description of the module. */
  desc: string;
}

export interface VocabWord {
  id: string;
  en: string;
  es: string;
  ipa: string;
  pos: string;
  ex: string; // example sentence
  cat: string; // category id
  src: SourceId;
  /** Grammar/workbook unit reference */
  ref?: string;
}

export interface VocabCategory { id: string; title: string; es: string; src: SourceId; desc?: string }

export interface Reading {
  id: string;
  title: string;
  theme: string;
  src: SourceId;
  text: string;
  qs: ExMC[];
  ref?: string;
}

// ───────────── Progress model ─────────────
export interface ExerciseStat { seen: number; correct: number; last: number; lastOk: boolean }

export interface UnitProgress {
  /** Highest step reached (0 learn, 1 examples, 2 practice, 3 advanced, 4 test) */
  step: number;
  /** Best unit-test score 0-100 */
  best: number;
  testAttempts: number;
  completed: boolean; // test passed (≥ PASS_MARK)
  /** Mastery 0-1, moving average of recent performance */
  mastery: number;
  attempts: number;
  correct: number;
  lastStudied: number;
  /** Next scheduled review (ms) */
  nextReview: number;
  /** Review interval in days */
  interval: number;
}

export interface CardState {
  ease: number;
  interval: number; // days
  reps: number;
  due: number; // ms
  lapses: number;
  learned: boolean;
  difficult: boolean;
  lastSeen: number;
}

export interface DayLog {
  date: string; xp: number; minutes: number; exercises: number; correct: number; cards: number; lessons: number;
  /** Active study seconds per section (grammar, vocabulary, listening…). */
  secs?: Record<string, number>;
}

export interface ExamResult {
  id: string;
  kind: ExamKind;
  title: string;
  date: number;
  score: number; // 0-100
  total: number;
  correct: number;
  weakUnits: string[];
}

export type ExamKind = 'unit' | 'module' | 'cumulative' | 'vocab' | 'grammar' | 'reading' | 'review' | 'listening' | 'speaking' | 'writing';

export interface ActivityRef { kind: 'unit' | 'vocab' | 'exam' | 'review' | 'reading' | 'speaking'; id: string; title: string; at: number; path: string }

export interface Settings {
  theme: 'light' | 'dark' | 'system';
  dailyXpGoal: number;
  dailyCardsGoal: number;
  showTranslations: boolean;
  aiProvider: 'none' | 'anthropic';
  aiKey: string;
  aiModel: string;
  sound: boolean;
  /** Voice used to read English aloud. 'canchero' = relaxed male voice, lower pitch, laid-back pace. */
  voiceStyle?: 'canchero' | 'normal';
  /** 'ai' = natural neural voice (Kokoro, runs in the browser); 'system' = the device's built-in voices. */
  voiceEngine?: 'eleven' | 'ai' | 'system';
  aiVoice?: string;
  /** ElevenLabs (paid, most human voices). The key stays in this browser and is sent only to api.elevenlabs.io. */
  elevenKey?: string;
  elevenVoiceId?: string;
  elevenVoiceName?: string;
  elevenModel?: 'eleven_flash_v2_5' | 'eleven_multilingual_v2';
  /** Exact voice name chosen by the learner ('' = pick automatically for the style). */
  voiceName?: string;
  voicePitch?: number;
  voiceRate?: number;
}

export interface ProgressState {
  version: number;
  createdAt: number;
  xp: number;
  units: Record<string, UnitProgress>;
  exercises: Record<string, ExerciseStat>;
  /** Exercise keys answered wrong and not yet fixed (error bank) */
  mistakes: Record<string, { at: number; count: number }>;
  cards: Record<string, CardState>;
  days: Record<string, DayLog>;
  exams: ExamResult[];
  achievements: Record<string, number>;
  last?: ActivityRef;
  readings: Record<string, { best: number; at: number }>;
  studyPlanChecks: Record<string, string[]>; // date -> checked block ids
  /** Writing drafts by task id */
  writings?: Record<string, { text: string; at: number; checks: number[] }>;
  /** Words the learner added: word = sentence = meaning. Their SRS card lives in `cards` under `my:<id>`. */
  myWords?: Record<string, MyWord>;
}

export interface MyWord {
  id: string;
  word: string;
  sentence: string;
  meaning: string;
  at: number;
}

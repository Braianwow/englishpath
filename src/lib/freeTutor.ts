import type { Correction, Report, TopicId, Turn } from './conversation';

/**
 * Free conversation mode (no API key): Jake follows a question script for each topic,
 * reacts to what the learner says, corrects common B1–B2 mistakes with rules and grades
 * the conversation at the end from simple measures (length, mistakes, variety).
 */

const QUESTIONS: Record<TopicId, string[]> = {
  viajes: [
    "So, tell me — what's the best trip you've ever been on?",
    'Who did you go with, and what did you do there?',
    'Have you ever had a problem while travelling? Like a lost bag or a missed flight?',
    "If you could go anywhere next year, where would you go and why?",
    'Do you prefer beach holidays or city breaks?',
    "What's something you always pack, no matter where you're going?",
    'What do tourists usually get wrong about your country?',
    "Last one: are you planning any trips at the moment?",
  ],
  informatica: [
    'Okay, tech talk. What apps do you use the most every day?',
    'How long do you usually spend on your phone? Be honest.',
    'Have you ever learnt to code, or would you like to?',
    'What do you think about AI? Is it making life easier or more complicated?',
    "What's the best gadget you've ever bought?",
    'Do you play video games? Which ones?',
    'How has technology changed the way you study or work?',
    'If you could invent one app, what would it do?',
  ],
  farandula: [
    "Let's gossip a little. Who's your favourite celebrity right now?",
    'What series are you watching at the moment?',
    'What kind of music have you been listening to lately?',
    'Do you follow any influencers? What do they post?',
    'If you could have dinner with a famous person, who would it be?',
    'Do you think famous people should share their private lives on social media?',
    "What's the best concert you've ever been to?",
    'Which film did you see most recently, and was it any good?',
  ],
  argentina: [
    "Tell me about Argentina. What's the first thing a tourist should eat there?",
    'How would you explain mate to someone who has never tried it?',
    'Which football team do you support, and why?',
    'What place in Argentina would you recommend to a friend?',
    "What's a typical Sunday like for an Argentine family?",
    "What's something about Argentine culture that foreigners find strange?",
    'Have you ever been to an asado? What happens there?',
    "What do you miss most when you're away from home?",
  ],
  internacional: [
    "Let's go international. Which country would you love to live in?",
    'Have you ever met someone from another country? Where were they from?',
    "What's a culture you find really interesting, and why?",
    'Do you think it would be hard to live abroad? What would you miss?',
    "What's a global problem that worries you?",
    'Which language would you like to learn after English?',
    'How is your country different from the United States or Europe?',
    "If you could change one thing about the world, what would it be?",
  ],
  decada: [
    "Let's talk about the 2020s. How has your life changed since 2020?",
    'Do you prefer working or studying from home, or in person?',
    "What's a new habit you've started in the last few years?",
    'How has social media changed since you started using it?',
    'What do you think people will remember about this decade?',
    "Is there anything from before 2020 that you miss?",
    'What has been the best moment of this decade for you so far?',
    'Where do you think you will be in 2030?',
  ],
  ahora: [
    "So, what's going on in your life right now?",
    'What have you been doing this week?',
    'Is there anything you are really into at the moment? A hobby, a show, a song?',
    "What's something that made you laugh recently?",
    'What are you going to do this weekend?',
    'Have you read or heard any interesting news lately?',
    "What's the hardest thing you've had to do this month?",
    "What's one goal you have for the next few weeks?",
  ],
};

const WORDS: Record<TopicId, { en: string; es: string; example: string }[]> = {
  viajes: [
    { en: 'itinerary', es: 'a plan of the places you will visit on a trip', example: 'Our itinerary includes three cities in five days.' },
    { en: 'get lost', es: "not know where you are or how to get somewhere", example: 'We got lost in the old town at night.' },
    { en: 'off the beaten track', es: 'in a place few tourists visit', example: 'I love finding places off the beaten track.' },
    { en: 'jet lag', es: 'tiredness after a long flight across time zones', example: 'I had terrible jet lag after flying to Japan.' },
    { en: 'book in advance', es: 'reserve something before you need it', example: "It's cheaper to book flights in advance." },
    { en: 'souvenir', es: 'something you buy to remember a place', example: 'I bought a small souvenir for my mum.' },
  ],
  informatica: [
    { en: 'screen time', es: 'the time you spend looking at screens', example: 'I try to reduce my screen time at night.' },
    { en: 'download', es: 'copy a file or app from the internet', example: 'I downloaded a new language app.' },
    { en: 'update', es: 'a newer version of software', example: 'My phone needs an update.' },
    { en: 'user-friendly', es: 'easy to use', example: 'This app is really user-friendly.' },
    { en: 'keep up with', es: 'stay informed about something that changes fast', example: "It's hard to keep up with new technology." },
    { en: 'run out of battery', es: 'have no battery left', example: 'My phone ran out of battery on the bus.' },
  ],
  farandula: [
    { en: 'binge-watch', es: 'watch many episodes one after another', example: 'I binge-watched the whole series at the weekend.' },
    { en: 'go viral', es: 'become very popular online very quickly', example: 'Her video went viral overnight.' },
    { en: 'spoiler', es: 'information that tells you what happens in a story', example: "Don't tell me the ending — no spoilers!" },
    { en: 'catchy', es: 'easy to remember (a song)', example: 'The chorus is really catchy.' },
    { en: 'fan base', es: 'all the fans of a person or group', example: 'The band has a huge fan base in Argentina.' },
    { en: 'overrated', es: 'thought to be better than it really is', example: 'I think that film is a bit overrated.' },
  ],
  argentina: [
    { en: 'barbecue', es: 'a meal of meat cooked outside over a fire', example: 'We have a barbecue every Sunday.' },
    { en: 'share', es: 'use or have something with other people', example: 'People share mate in a circle.' },
    { en: 'passionate', es: 'having very strong feelings about something', example: 'Argentines are passionate about football.' },
    { en: 'must-see', es: 'something you should not miss', example: 'The Iguazú Falls are a must-see.' },
    { en: 'get together', es: 'meet socially', example: 'My family gets together on Sundays.' },
    { en: 'homesick', es: 'sad because you are far from home', example: 'I get homesick when I travel for a long time.' },
  ],
  internacional: [
    { en: 'abroad', es: 'in or to another country', example: "I'd love to study abroad." },
    { en: 'culture shock', es: 'confusion you feel in a very different culture', example: 'I had a bit of culture shock in Japan.' },
    { en: 'way of life', es: 'how people usually live', example: 'The way of life there is very relaxed.' },
    { en: 'issue', es: 'an important problem or topic', example: 'Climate change is a global issue.' },
    { en: 'fit in', es: 'feel accepted in a group or place', example: 'It took me a while to fit in.' },
    { en: 'get used to', es: 'become familiar with something new', example: "I'm getting used to the food here." },
  ],
  decada: [
    { en: 'remote work', es: 'working from home or anywhere outside the office', example: 'Remote work became normal after 2020.' },
    { en: 'nowadays', es: 'at the present time', example: 'Nowadays everybody pays with their phone.' },
    { en: 'trend', es: 'a general change or a popular fashion', example: "It's a big trend on social media." },
    { en: 'look back', es: 'think about the past', example: 'When I look back, I was very different.' },
    { en: 'habit', es: 'something you do regularly', example: "I've started a new habit: reading before bed." },
    { en: 'by 2030', es: 'not later than the year 2030', example: "By 2030 I'll have finished my degree." },
  ],
  ahora: [
    { en: 'lately', es: 'recently', example: "I've been really busy lately." },
    { en: 'be into', es: 'like something a lot', example: "I'm really into podcasts at the moment." },
    { en: 'catch up', es: 'talk to someone you haven’t seen for a while', example: "Let's catch up this weekend." },
    { en: 'look forward to', es: 'feel happy about something in the future', example: "I'm looking forward to the holidays." },
    { en: 'hectic', es: 'very busy and full of activity', example: 'This week has been hectic.' },
    { en: 'goal', es: 'something you want to achieve', example: 'My goal is to speak English fluently.' },
  ],
};

/** Common B1–B2 mistakes for Spanish speakers. Each rule returns the corrected fragment. */
const RULES: { re: RegExp; fix: (m: RegExpMatchArray) => string; why: string }[] = [
  { re: /\bi have (\d+|twenty|thirty|eighteen|nineteen|[a-z]+ty) years\b/i, fix: (m) => `I'm ${m[1]} years old`, why: 'For age we use be: I am 25 (years old).' },
  { re: /\b(he|she|it) (don't)\b/i, fix: (m) => `${m[1]} doesn't`, why: 'With he/she/it the negative is doesn\'t.' },
  { re: /\b(he|she|it) (have)\b(?! to)/i, fix: (m) => `${m[1]} has`, why: 'With he/she/it we say has.' },
  { re: /(?<!\b(?:does|did|do|can|could|will|would|should|might|must|may|to|let|make|made|help|helped|see|saw|watch|hear|heard|why|doesn't|didn't)\s)\b(he|she|it) (go|like|want|work|live|play|watch|need|think|know)\b/i, fix: (m) => `${m[1]} ${m[2]}${/(ch|sh|o)$/.test(m[2]) ? 'es' : 's'}`, why: 'Present simple with he/she/it: verb + -s.' },
  { re: /\bpeople is\b/i, fix: () => 'people are', why: 'people is plural: people are.' },
  { re: /\bi am agree\b/i, fix: () => 'I agree', why: 'agree is a verb: I agree (no am).' },
  { re: /\bmore (better|worse|bigger|easier|cheaper|older)\b/i, fix: (m) => m[1], why: "Don't use more with -er comparatives." },
  { re: /\bthe (people|life|money|nature|music) (is|are)\b/i, fix: (m) => `${m[1]} ${m[2]}`, why: 'When we talk in general we don\'t use the.' },
  { re: /\bsince (\d+|two|three|four|five|six|ten|many) (years|months|weeks|days)\b/i, fix: (m) => `for ${m[1]} ${m[2]}`, why: 'for + a period of time; since + a starting point.' },
  { re: /\bi (live|work|study) here (since|for)\b/i, fix: (m) => `I've been ${m[1] === 'live' ? 'living' : m[1] === 'work' ? 'working' : 'studying'} here ${m[2]}`, why: 'Duration until now → present perfect (continuous).' },
  { re: /\bdid you (went|saw|ate|had|was|got)\b/i, fix: (m) => `did you ${({ went: 'go', saw: 'see', ate: 'eat', had: 'have', was: 'be', got: 'get' } as Record<string, string>)[m[1].toLowerCase()]}`, why: 'After did we use the base verb.' },
  { re: /\bi didn't (went|saw|ate|had|got|did)\b/i, fix: (m) => `I didn't ${({ went: 'go', saw: 'see', ate: 'eat', had: 'have', got: 'get', did: 'do' } as Record<string, string>)[m[1].toLowerCase()]}`, why: "After didn't we use the base verb." },
  { re: /\b(yesterday|last (?:week|year|month|night)),? i (go|eat|see|have|do|play|visit)\b/i, fix: (m) => `${m[1]} I ${({ go: 'went', eat: 'ate', see: 'saw', have: 'had', do: 'did', play: 'played', visit: 'visited' } as Record<string, string>)[m[2].toLowerCase()]}`, why: 'Finished past time → past simple.' },
  { re: /\bi (go|went) to (the )?home\b/i, fix: (m) => `I ${m[1]} home`, why: 'We say go home (no to, no the).' },
  { re: /\bexplain me\b/i, fix: () => 'explain to me', why: 'explain something to somebody.' },
  { re: /\b(a|one) informations?\b/i, fix: () => 'some information', why: 'information is uncountable.' },
  { re: /\badvices\b/i, fix: () => 'advice', why: 'advice is uncountable (no -s).' },
  { re: /\bi'?m boring\b/i, fix: () => "I'm bored", why: '-ed = how you feel; -ing = what causes the feeling.' },
  { re: /\bdepends of\b/i, fix: () => 'depends on', why: 'depend on (not of).' },
  { re: /\binterested on\b/i, fix: () => 'interested in', why: 'interested in.' },
  { re: /\bmake (a )?(homework|exercise|sport)\b/i, fix: (m) => `do ${m[2]}`, why: 'We do homework / exercise / sport.' },
  { re: /\bi want that you\b/i, fix: () => 'I want you to', why: 'want + person + to (no that).' },
  { re: /\bit'?s depend\b/i, fix: () => 'it depends', why: 'depend is a verb: it depends.' },
  { re: /\bi have been in (\w+) (last|in) /i, fix: (m) => `I went to ${m[1]} ${m[2]} `, why: 'Finished past time → past simple.' },
  { re: /\bthere (is|are) many (\w+) that\b/i, fix: (m) => `there ${m[1]} a lot of ${m[2]} that`, why: 'In affirmative sentences a lot of sounds more natural.' },
];

export function checkSentence(text: string): Correction | null {
  for (const r of RULES) {
    const m = text.match(r.re);
    if (m) return { said: m[0], better: r.fix(m), why: r.why };
  }
  return null;
}

const pick = <T,>(a: T[], seed: number) => a[Math.abs(seed) % a.length];

function reaction(answer: string, seed: number): string {
  const words = answer.trim().split(/\s+/).filter(Boolean).length;
  if (words <= 3) return pick(["Come on, give me more than that!", "That's it? Tell me a bit more next time.", 'Short and sweet, huh? Try to give me a full sentence.'], seed);
  if (/\b(love|amazing|great|awesome|best|beautiful|fun)\b/i.test(answer)) return pick(['No way, that sounds amazing!', 'I love that.', 'Okay, now I’m jealous.'], seed);
  if (/\b(hate|bad|terrible|worst|boring|sad|difficult|hard)\b/i.test(answer)) return pick(['Ouch, that sounds tough.', 'Oh no, I feel you.', "That's rough, for real."], seed);
  if (/\b(because|so|although|but)\b/i.test(answer)) return pick(['Good point — I like how you explained that.', 'Makes sense.', 'Interesting, I didn’t think of it that way.'], seed);
  return pick(['Nice.', 'Interesting!', 'Got it.', 'Cool, I like that.', 'Fair enough.'], seed);
}

/** The next tutor line (and the correction for the learner's last line). */
export function localTurn(topic: TopicId, turns: Turn[]): { reply: string; correction: Correction | null } {
  const qs = QUESTIONS[topic];
  const asked = turns.filter((t) => t.role === 'tutor').length;
  const last = [...turns].reverse().find((t) => t.role === 'me');
  if (!last) return { reply: `Hey… you came back. ${qs[0]}`, correction: null };
  const correction = checkSentence(last.text);
  const words = last.text.trim().split(/\s+/).length;
  // a very short answer gets a follow-up instead of a new question (once)
  const prevWasFollowUp = turns.length >= 2 && /\b(why|more about|example)\b/i.test(turns[turns.length - 2]?.text ?? '') && !qs.includes(turns[turns.length - 2]?.text ?? '');
  const seed = asked * 7 + words;
  let reply: string;
  if (words < 6 && !prevWasFollowUp) {
    reply = `${reaction(last.text, seed)} ${pick(['Why?', 'Can you tell me a bit more about that?', 'Give me an example.'], seed)}`;
  } else if (asked >= qs.length) {
    reply = `${reaction(last.text, seed)} That was a great chat. Press “Finish and see my grade” whenever you're ready, or keep talking.`;
  } else {
    const next = qs[Math.min(asked, qs.length - 1)];
    reply = `${reaction(last.text, seed)} ${next}`;
  }
  if (correction) reply = `${pick(['Quick tip:', 'Small thing:', 'Just so you know:'], seed)} we say “${correction.better}”. ${reply}`;
  return { reply, correction };
}

/** Grade the conversation from simple measures. */
export function localReport(topic: TopicId, turns: Turn[]): Report {
  const mine = turns.filter((t) => t.role === 'me');
  const words = mine.flatMap((t) => t.text.toLowerCase().match(/[a-z']+/g) ?? []);
  const n = words.length;
  const avg = mine.length ? n / mine.length : 0;
  const unique = new Set(words).size;
  const mistakes = mine.map((t) => t.correction ?? checkSentence(t.text)).filter((c): c is Correction => !!c);
  const longWords = words.filter((w) => w.length >= 7).length;
  const linkers = words.filter((w) => ['because', 'although', 'however', 'but', 'so', 'when', 'while', 'which', 'who', 'if', 'actually', 'though'].includes(w)).length;
  const clamp = (x: number) => Math.max(1, Math.min(10, Math.round(x)));
  const fluency = clamp(2 + avg / 2.2 + Math.min(3, mine.length / 3));
  const grammar = clamp(10 - (mine.length ? (mistakes.length / mine.length) * 8 : 5) - (avg < 5 ? 2 : 0));
  const vocabulary = clamp(2 + (n ? (unique / n) * 5 : 0) + Math.min(2, longWords / 6) + Math.min(2, linkers / 4));
  const score = clamp((fluency + grammar + vocabulary) / 3 - (n < 30 ? 2 : 0));
  const summary = n < 30
    ? 'You said quite little, so this grade is only a rough idea. Try longer answers with two or three sentences each.'
    : `You spoke ${n} words in ${mine.length} answers (about ${Math.round(avg)} words each). ${mistakes.length ? `There ${mistakes.length === 1 ? 'was 1 mistake' : `were ${mistakes.length} mistakes`} to work on.` : 'No common mistakes were detected — nice!'}`;
  const tip = avg < 8 ? 'Give longer answers: say what, why and an example (because…, for example…).'
    : linkers < 3 ? 'Use more linkers to connect your ideas: because, although, however, so.'
    : 'Try using new words from this topic in your next conversation.';
  return { score, fluency, grammar, vocabulary, summary, tip, mistakes: mistakes.slice(0, 6), words: WORDS[topic] };
}

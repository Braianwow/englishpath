/**
 * Material for the Listening, Speaking and Writing sections. The study plan PDF
 * asks for 30 min/day of Listening & Speaking (shadowing, conversation practice)
 * and reading/writing practice; the topics follow the Objective First units.
 * All prompts and sentences here were written for this platform.
 */
import { UNITS } from './index';

export interface SpeakingTopic { id: string; title: string; wb?: string; grammar: string; questions: string[] }
export interface WritingTask { id: string; title: string; type: string; wb?: string; prompt: string; words: [number, number]; checklist: string[]; useful: string[] }

/** Sentences for dictation / shadowing: affirmative and question examples from the grammar units. */
export function listeningSentences(): { text: string; es?: string; unit: string; n: number }[] {
  return UNITS.flatMap((u) => [...u.aff, ...u.q].map((e) => ({ text: e.en, es: e.es, unit: u.id, n: u.n })))
    .filter((s) => { const w = s.text.split(' ').length; return w >= 4 && w <= 14 && !/[→/…]/.test(s.text); });
}

export const SPEAKING: SpeakingTopic[] = [
  { id: 'sp-fashion', title: 'Clothes and style', wb: 'wb1', grammar: 'Comparatives and superlatives', questions: ['How would you describe your style?', 'Do you prefer comfortable clothes or fashionable clothes? Why?', 'What is the most expensive thing you have ever bought?', 'Are people in your country more fashion-conscious than in the past?'] },
  { id: 'sp-games', title: 'Technology and video games', wb: 'wb2', grammar: 'Present simple and continuous', questions: ['What do you usually do on your phone?', 'Are you playing any games at the moment?', 'Do you think video games are good or bad for teenagers?', 'How is technology changing the way people study?'] },
  { id: 'sp-travel', title: 'Travel', wb: 'wb3', grammar: 'Present perfect and past simple', questions: ['What is the best place you have ever visited?', 'Where did you go on your last holiday?', 'Have you ever had a problem while travelling?', 'Do you prefer travelling alone or with friends?'] },
  { id: 'sp-childhood', title: 'Your childhood', wb: 'wb8', grammar: 'used to / would', questions: ['Where did you use to live when you were a child?', 'What games would you play with your friends?', 'What did you want to be when you grew up?', 'How have you changed since then?'] },
  { id: 'sp-future', title: 'The future', wb: 'wb10', grammar: 'will, going to, future continuous and perfect', questions: ['What are you going to do this weekend?', 'Where do you think you will be in ten years?', 'What will you have achieved by the end of this year?', 'Will people live on other planets one day?'] },
  { id: 'sp-ifs', title: 'Imaginary situations', wb: 'wb6', grammar: 'Conditionals', questions: ['What would you do if you won the lottery?', 'If you could live anywhere, where would you live?', 'What would you have studied if you had had the chance?', 'If you were the president, what would you change?'] },
  { id: 'sp-work', title: 'Work and studies', wb: 'wb14', grammar: 'Modals: have to, must, should', questions: ['What do you have to do in your job or studies?', 'What should someone do to get a good job?', 'What is the hardest part of your day?', 'Would you like to work from home? Why or why not?'] },
  { id: 'sp-health', title: 'Health and sport', wb: 'wb19', grammar: "Advice: should, had better, it's time", questions: ['What do you do to keep fit?', 'What advice would you give to someone who wants to sleep better?', "Is it easy to eat healthily where you live?", "What is something you think it's time you started doing?"] },
  { id: 'sp-city', title: 'Your town', wb: 'wb21', grammar: 'Relative clauses (who, which, where)', questions: ['Describe the place where you live.', 'Is there a place in your city which tourists should visit?', 'What would you change about your neighbourhood?', 'Do you prefer living in a city or in the countryside?'] },
  { id: 'sp-music', title: 'Music and entertainment', wb: 'wb22', grammar: 'Gerunds and infinitives', questions: ['What kind of music do you enjoy listening to?', 'Have you ever learnt to play an instrument?', 'Would you rather go to a concert or watch a film at home?', 'What is a song that reminds you of a special moment?'] },
];

export const WRITING: WritingTask[] = [
  { id: 'wr-complaint', title: 'Letter of complaint', type: 'Formal letter', wb: 'wb5', words: [120, 180],
    prompt: 'You recently stayed at a hotel and had a terrible experience: the room was dirty, the staff were unhelpful and breakfast was not included as promised. Write a letter to the manager explaining what happened and asking for a refund.',
    checklist: ['I started with "Dear Sir or Madam," or the manager\'s name', 'I explained the reason for the letter in the first paragraph', 'I used the past simple and continuous to say what happened', 'I asked for a specific solution (refund / compensation)', 'I finished with "Yours faithfully," or "Yours sincerely,"'],
    useful: ['I am writing to complain about…', 'To make matters worse,…', 'I would be grateful if you could…', 'I look forward to hearing from you.'] },
  { id: 'wr-email-friend', title: 'Email to a friend who is coming to visit', type: 'Informal email', wb: 'wb7', words: [100, 150],
    prompt: 'A friend from another country is coming to study at your school or university next month. Write an email telling them what sports and free-time activities they can do there and giving them some advice.',
    checklist: ['Informal greeting (Hi … / Dear …)', 'I answered what my friend wants to know', 'I used verbs + -ing / to correctly (enjoy doing, decide to…)', 'I gave at least one piece of advice with should / had better', 'Informal ending (See you soon! / Best wishes)'],
    useful: ["It was great to hear from you!", "You'll love…", "If I were you, I'd…", "Can't wait to see you!"] },
  { id: 'wr-area', title: 'Describe the place where you live', type: 'Informal letter', wb: 'wb15', words: [120, 180],
    prompt: 'Your penfriend has asked you about the area where you live. Write a reply describing the location, size, climate, landscape and what people do there.',
    checklist: ['I described the location, size, weather and landscape', 'I used linkers: although, despite, furthermore, as a result', 'I used some / any / no / every + thing/body/where', 'I organised the text into paragraphs'],
    useful: ['It is located in the north of…', 'Although it is quite small,…', 'Furthermore,…', 'As a result,…'] },
  { id: 'wr-essay-fit', title: 'Essay: keeping fit', type: 'Opinion essay', wb: 'wb19', words: [140, 190],
    prompt: 'Is it harder to live a healthy life today than it was for our grandparents? Give your opinion and support it with examples about eating habits, free time and one more point of your choice.',
    checklist: ['An introduction with my opinion', 'One paragraph per idea (food, free time, my own idea)', "I used should / had better / it's time", 'A conclusion that sums up my opinion', 'Between 140 and 190 words'],
    useful: ['In my opinion,…', 'On the one hand,… On the other hand,…', 'For example,…', 'To sum up,…'] },
  { id: 'wr-report', title: 'Report on an event', type: 'Report', wb: 'wb7', words: [120, 180],
    prompt: 'You helped organise a sports day at your school or workplace. Write a report for your director describing the venue, how the day went and what could be improved next year.',
    checklist: ['Headings for each section (Venue / The event / Recommendations)', 'I used the passive (was held, were organised)', 'Formal language, no contractions', 'Recommendations with should / could'],
    useful: ['The aim of this report is to…', 'The event was held at…', 'Overall,…', 'I would recommend that…'] },
  { id: 'wr-story', title: 'A story', type: 'Story', wb: 'wb23', words: [120, 180],
    prompt: 'Write a story that begins with this sentence: "When I woke up, I knew immediately that something was wrong."',
    checklist: ['I used the past simple, continuous and perfect', 'There is a problem and a solution', 'I used time linkers (then, suddenly, by the time, in the end)', 'I included at least one feeling (-ed adjectives)'],
    useful: ['At first,…', 'Suddenly,…', 'By the time…, … had already…', 'In the end,…'] },
  { id: 'wr-review', title: 'Review of a film or book', type: 'Review', wb: 'wb18', words: [120, 180],
    prompt: 'Write a review of a film or book you enjoyed recently for a website. Describe the story without giving away the ending and say who you would recommend it to.',
    checklist: ['I gave the title, the type and what it is about', 'I used -ing / -ed adjectives correctly', 'I used so / such / too / enough', 'A final recommendation'],
    useful: ['It is set in…', 'The plot is so … that…', "It's such a … film that…", 'I would recommend it to anyone who…'] },
  { id: 'wr-future', title: 'Your life in 10 years', type: 'Free writing', wb: 'wb10', words: [100, 150],
    prompt: 'Describe what you think your life will be like in ten years. Where will you be living? What will you be doing? What will you have achieved?',
    checklist: ['I used will and going to', 'I used will be -ing at least once', 'I used will have + past participle at least once', "I used may / might for things that aren't certain"],
    useful: ['In ten years’ time,…', "I'll probably be…", "By then, I'll have…", 'I might…'] },
];

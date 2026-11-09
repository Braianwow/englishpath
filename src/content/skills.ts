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
  { id: 'sp-fashion', title: 'Ropa y estilo', wb: 'wb1', grammar: 'Comparativos y superlativos', questions: ['How would you describe your style?', 'Do you prefer comfortable clothes or fashionable clothes? Why?', 'What is the most expensive thing you have ever bought?', 'Are people in your country more fashion-conscious than in the past?'] },
  { id: 'sp-games', title: 'Tecnología y videojuegos', wb: 'wb2', grammar: 'Presente simple y continuo', questions: ['What do you usually do on your phone?', 'Are you playing any games at the moment?', 'Do you think video games are good or bad for teenagers?', 'How is technology changing the way people study?'] },
  { id: 'sp-travel', title: 'Viajes', wb: 'wb3', grammar: 'Present perfect y past simple', questions: ['What is the best place you have ever visited?', 'Where did you go on your last holiday?', 'Have you ever had a problem while travelling?', 'Do you prefer travelling alone or with friends?'] },
  { id: 'sp-childhood', title: 'Tu infancia', wb: 'wb8', grammar: 'used to / would', questions: ['Where did you use to live when you were a child?', 'What games would you play with your friends?', 'What did you want to be when you grew up?', 'How have you changed since then?'] },
  { id: 'sp-future', title: 'El futuro', wb: 'wb10', grammar: 'will, going to, futuro continuo y perfecto', questions: ['What are you going to do this weekend?', 'Where do you think you will be in ten years?', 'What will you have achieved by the end of this year?', 'Will people live on other planets one day?'] },
  { id: 'sp-ifs', title: 'Situaciones imaginarias', wb: 'wb6', grammar: 'Condicionales', questions: ['What would you do if you won the lottery?', 'If you could live anywhere, where would you live?', 'What would you have studied if you had had the chance?', 'If you were the president, what would you change?'] },
  { id: 'sp-work', title: 'Trabajo y estudios', wb: 'wb14', grammar: 'Modales: have to, must, should', questions: ['What do you have to do in your job or studies?', 'What should someone do to get a good job?', 'What is the hardest part of your day?', 'Would you like to work from home? Why or why not?'] },
  { id: 'sp-health', title: 'Salud y deporte', wb: 'wb19', grammar: "Consejos: should, had better, it's time", questions: ['What do you do to keep fit?', 'What advice would you give to someone who wants to sleep better?', "Is it easy to eat healthily where you live?", "What is something you think it's time you started doing?"] },
  { id: 'sp-city', title: 'Tu ciudad', wb: 'wb21', grammar: 'Relativos (who, which, where)', questions: ['Describe the place where you live.', 'Is there a place in your city which tourists should visit?', 'What would you change about your neighbourhood?', 'Do you prefer living in a city or in the countryside?'] },
  { id: 'sp-music', title: 'Música y entretenimiento', wb: 'wb22', grammar: 'Gerundios e infinitivos', questions: ['What kind of music do you enjoy listening to?', 'Have you ever learnt to play an instrument?', 'Would you rather go to a concert or watch a film at home?', 'What is a song that reminds you of a special moment?'] },
];

export const WRITING: WritingTask[] = [
  { id: 'wr-complaint', title: 'Carta de queja', type: 'Carta formal', wb: 'wb5', words: [120, 180],
    prompt: 'You recently stayed at a hotel and had a terrible experience: the room was dirty, the staff were unhelpful and breakfast was not included as promised. Write a letter to the manager explaining what happened and asking for a refund.',
    checklist: ['Empecé con "Dear Sir or Madam," o el nombre del gerente', 'Expliqué el motivo de la carta en el primer párrafo', 'Usé el pasado simple y continuo para contar lo que pasó', 'Pedí una solución concreta (refund / compensation)', 'Cerré con "Yours faithfully," o "Yours sincerely,"'],
    useful: ['I am writing to complain about…', 'To make matters worse,…', 'I would be grateful if you could…', 'I look forward to hearing from you.'] },
  { id: 'wr-email-friend', title: 'Email a un amigo que viene a visitarte', type: 'Email informal', wb: 'wb7', words: [100, 150],
    prompt: 'A friend from another country is coming to study at your school or university next month. Write an email telling them what sports and free-time activities they can do there and giving them some advice.',
    checklist: ['Saludo informal (Hi … / Dear …)', 'Respondí a lo que mi amigo quiere saber', 'Usé verbos + -ing / to correctamente (enjoy doing, decide to…)', 'Di al menos un consejo con should / had better', 'Despedida informal (See you soon! / Best wishes)'],
    useful: ["It was great to hear from you!", "You'll love…", "If I were you, I'd…", "Can't wait to see you!"] },
  { id: 'wr-area', title: 'Describir el lugar donde vivís', type: 'Carta informal', wb: 'wb15', words: [120, 180],
    prompt: 'Your penfriend has asked you about the area where you live. Write a reply describing the location, size, climate, landscape and what people do there.',
    checklist: ['Describí ubicación, tamaño, clima y paisaje', 'Usé conectores: although, despite, furthermore, as a result', 'Usé some / any / no / every + thing/body/where', 'Organicé el texto en párrafos'],
    useful: ['It is located in the north of…', 'Although it is quite small,…', 'Furthermore,…', 'As a result,…'] },
  { id: 'wr-essay-fit', title: 'Ensayo: mantenerse en forma', type: 'Ensayo de opinión', wb: 'wb19', words: [140, 190],
    prompt: 'Is it harder to live a healthy life today than it was for our grandparents? Give your opinion and support it with examples about eating habits, free time and one more point of your choice.',
    checklist: ['Introducción con mi opinión', 'Un párrafo por idea (comida, tiempo libre, idea propia)', "Usé should / had better / it's time", 'Conclusión que resume mi opinión', 'Entre 140 y 190 palabras'],
    useful: ['In my opinion,…', 'On the one hand,… On the other hand,…', 'For example,…', 'To sum up,…'] },
  { id: 'wr-report', title: 'Informe sobre un evento', type: 'Informe', wb: 'wb7', words: [120, 180],
    prompt: 'You helped organise a sports day at your school or workplace. Write a report for your director describing the venue, how the day went and what could be improved next year.',
    checklist: ['Títulos para cada sección (Venue / The event / Recommendations)', 'Usé la voz pasiva (was held, were organised)', 'Lenguaje formal, sin contracciones', 'Recomendaciones con should / could'],
    useful: ['The aim of this report is to…', 'The event was held at…', 'Overall,…', 'I would recommend that…'] },
  { id: 'wr-story', title: 'Una historia', type: 'Relato', wb: 'wb23', words: [120, 180],
    prompt: 'Write a story that begins with this sentence: "When I woke up, I knew immediately that something was wrong."',
    checklist: ['Usé pasado simple, continuo y perfecto', 'Hay un problema y una resolución', 'Usé conectores de tiempo (then, suddenly, by the time, in the end)', 'Incluí al menos un sentimiento (-ed adjectives)'],
    useful: ['At first,…', 'Suddenly,…', 'By the time…, … had already…', 'In the end,…'] },
  { id: 'wr-review', title: 'Reseña de una película o libro', type: 'Reseña', wb: 'wb18', words: [120, 180],
    prompt: 'Write a review of a film or book you enjoyed recently for a website. Describe the story without giving away the ending and say who you would recommend it to.',
    checklist: ['Dije título, tipo y de qué se trata', 'Usé adjetivos -ing / -ed correctamente', 'Usé so / such / too / enough', 'Recomendación final'],
    useful: ['It is set in…', 'The plot is so … that…', "It's such a … film that…", 'I would recommend it to anyone who…'] },
  { id: 'wr-future', title: 'Tu vida en 10 años', type: 'Texto libre', wb: 'wb10', words: [100, 150],
    prompt: 'Describe what you think your life will be like in ten years. Where will you be living? What will you be doing? What will you have achieved?',
    checklist: ['Usé will y going to', 'Usé will be -ing al menos una vez', 'Usé will have + participio al menos una vez', 'Usé may / might para lo que no es seguro'],
    useful: ['In ten years’ time,…', "I'll probably be…", "By then, I'll have…", 'I might…'] },
];

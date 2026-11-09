import type { UnitSrc } from '../dsl';

// Module 9 — -ing and to … (EGU units 53–68)
export const m09: UnitSrc[] = [
  {
    n: 53, t: 'Verb + -ing (enjoy doing / stop doing etc.)', es: 'Verbo + -ing', tags: ['ing-to'],
    goals: ['Recognise the verbs followed by -ing', 'Form the negative with not -ing', 'Use having done'],
    x: `After certain verbs, the second verb is in the **-ing** form: **enjoy, mind, stop, finish, suggest, avoid, consider, admit, deny, imagine, miss, risk, keep (on), give up, put off, carry on, postpone, fancy**.

*I enjoy dancing. Would you mind closing the door? He's given up smoking.*

Negative: **not + -ing**: *When I'm on holiday, I enjoy not having to get up early.*

For the past we can use **having + past participle**: *She admitted having stolen the money* (= admitted stealing).

With some of these verbs we can also use *that…*: *He denied that he had stolen it.*`,
    form: [['Verbo', 'Ejemplo'], ['enjoy', 'I enjoy reading.'], ['mind', "Do you mind waiting?"], ['avoid', 'Try to avoid eating late.'], ['give up', 'She gave up smoking.']],
    uses: ['Fixed verbs + -ing', 'not + -ing for the negative', 'having + past participle for the past'],
    aff: ['I enjoy cooking for my friends.|Disfruto cocinar para mis amigos.', 'Have you finished writing the report?|¿Terminaste de escribir el informe?', 'He suggested going to the beach.|Sugirió ir a la playa.'],
    neg: ["I don't mind waiting.|No me molesta esperar."],
    q: ['Would you mind opening the window?|¿Te molestaría abrir la ventana?'],
    err: ['I enjoy to swim.|I enjoy swimming.|enjoy + -ing.', 'She suggested to go out.|She suggested going out.|suggest + -ing.'],
    cmp: { w: [54, 56], x: 'Other verbs are followed by to + infinitive (unit 54); some take both (unit 56).' },
    ex: [
      "? I really enjoy ___ in the sea. | to swim | *swimming | swim >> enjoy + -ing.",
      "? Would you mind ___ the window? | to close | *closing | close >> mind + -ing.",
      "_ Have you finished ___ (eat)? = eating >> finish + -ing.",
      "_ He's given up ___ (smoke). = smoking >> give up + -ing.",
      "s I'm considering [buy] a new car. = buying >> consider + -ing.",
      "o She admitted breaking the window. >> admit + -ing.",
      "o Avoid driving at night >> avoid + -ing.",
      "m enjoy = cooking ; give up = smoking ; mind = waiting ; keep = talking >> All of them are followed by -ing.",
      "?2 Imagine ___ in a big house by the sea! | to live | *living | live >> imagine + -ing.",
      "f2 He denied to steal the money. = He denied stealing the money ; He denied having stolen the money ; He denied that he had stolen the money >> deny + -ing.",
    ],
  },
  {
    n: 54, t: 'Verb + to … (decide to … / forget to … etc.)', es: 'Verbo + to + infinitivo', tags: ['ing-to'],
    goals: ['Recognise the verbs followed by to + infinitive', 'Use to be doing / to have done', 'Use verb + wh- + to (how to, what to…)'],
    x: `After **offer, decide, hope, deserve, attempt, promise, agree, plan, aim, afford, threaten, manage, fail, refuse, arrange, forget, learn, tend, seem, appear, pretend, claim** we use **to + infinitive**:

*We decided to take a taxi. I can't afford to buy a car. She seems to be happy.*

Negative: **not to**: *I promised not to be late.*

With seem/appear/pretend: **to be doing** and **to have done**: *He seems to be enjoying himself. She pretended to have forgotten.*

After **ask, decide, know, remember, forget, explain, learn, understand, wonder** we can use **wh- + to**: *Do you know how to get there? I don't know what to do.*`,
    form: [['Verbo', 'Ejemplo'], ['decide', 'We decided to stay.'], ['afford', "I can't afford to go."], ['refuse', 'He refused to help.'], ['how/what to', "I don't know what to say."]],
    uses: ['Fixed verbs + to', 'not to for the negative', 'seem to be doing / to have done', 'wh- + to'],
    aff: ['I hope to see you soon.|Espero verte pronto.', 'She managed to finish on time.|Logró terminar a tiempo.', "I don't know how to use this machine.|No sé cómo usar esta máquina."],
    neg: ['He promised not to tell anyone.|Prometió no contárselo a nadie.'],
    q: ['Have you decided where to go?|¿Decidiste adónde ir?'],
    err: ['I decided going home.|I decided to go home.|decide + to.', "I can't afford buying it.|I can't afford to buy it.|afford + to."],
    cmp: { w: [53, 55], x: 'Verb + -ing (53) vs. verb + to (54) vs. verb + object + to (55).' },
    ex: [
      "? We decided ___ a taxi. | taking | *to take | take >> decide + to.",
      "? He refused ___ me. | helping | *to help | help >> refuse + to.",
      "_ I hope ___ (see) you again soon. = to see >> hope + to.",
      "_ She pretended ___ (not/see) me. = not to see >> not to + verb.",
      "s They agreed [helping] us. = to help >> agree + to.",
      "o I don't know what to say. >> wh- + to.",
      "o I can't afford to buy a house >> afford + to.",
      "?2 He seems ___ a lot of weight. | to lose | *to have lost | losing >> Past with seem: to have + past participle.",
      "f2 Can you show me how use this phone? = Can you show me how to use this phone >> how + to.",
      "m decide = to stay ; enjoy = staying ; promise = to call ; avoid = calling >> -ing or to?",
    ],
  },
  {
    n: 55, t: 'Verb (+ object) + to … (I want you to …)', es: 'Verbo + objeto + to', tags: ['ing-to'], pre: [54],
    goals: ['Use want/ask/tell/advise + object + to', 'Use make and let without to', 'Avoid want that…'],
    x: `Some verbs take **object + to + infinitive**: **want, ask, help, would like, expect, beg, mean, tell, remind, warn, persuade, enable, teach, invite, advise, allow, encourage, force**.

*I want you to listen. They told me to wait. She advised me to see a doctor.*

In English we **don't** use *want that*: *I want you to come* (not *I want that you come*).

**make** and **let** take object + **infinitive without to**: *They made me wait. Let me help you.* (But in the passive: *I was made to wait*.)`,
    form: [['Verbo', 'Objeto', 'to + verbo'], ['want', 'you', 'to come'], ['advise', 'me', 'to rest'], ['make', 'me', 'laugh (sin to)'], ['let', 'us', 'go (sin to)']],
    uses: ['want/ask/tell/advise… + object + to', 'make/let + object + verb without to', 'Don\'t use want that'],
    aff: ['I want you to be happy.|Quiero que seas feliz.', 'My parents let me stay out late.|Mis padres me dejan quedarme afuera hasta tarde.', 'The film made me cry.|La película me hizo llorar.'],
    neg: ["She warned me not to touch it.|Me advirtió que no lo tocara."],
    q: ['Do you want me to help you?|¿Querés que te ayude?'],
    err: ['I want that you come.|I want you to come.|want + object + to.', 'They made me to wait.|They made me wait.|make + object + verb without to.'],
    cmp: { w: [48], x: 'The same pattern as in reported speech: told me to…' },
    ex: [
      "? I want ___ the truth. | that you tell me | *you to tell me | you tell me >> want + object + to.",
      "? My boss made me ___ late. | to work | *work | working >> make + object + verb without to.",
      "_ The doctor advised me ___ (rest). = to rest >> advise + object + to.",
      "_ Let me ___ (carry) your bag. = carry >> let + object + verb without to.",
      "s They made me [to] wait for an hour. = (quitar to) >> make + object + verb without to.",
      "o She reminded me to buy some milk. >> remind + object + to.",
      "o I want you to come to my party >> want + object + to.",
      "?2 'Don't forget to lock the door,' she said to me. → She reminded me ___ the door. | locking | *to lock | lock >> remind + object + to.",
      "f2 My parents didn't let me to go to the party. = My parents didn't let me go to the party ; My parents did not let me go to the party >> let without to.",
    ],
  },
  {
    n: 56, t: 'Verb + -ing or to … 1 (remember, regret etc.)', es: '-ing o to (1): remember, regret…', tags: ['ing-to'], pre: [53, 54],
    goals: ['Use verbs that take both forms with the same meaning', 'Tell remember/forget/regret/go on + -ing / to apart'],
    x: `Some verbs take **-ing or to** with **the same meaning**: **begin, start, continue, intend, bother**: *It started raining / to rain.*

Others **change their meaning**:
• **remember / forget doing** = remember something you **already did**: *I remember locking the door.*
• **remember / forget to do** = remember to do something **before you do it**: *Remember to lock the door.*
• **regret doing** = be sorry about something you did; **regret to tell/say** = be sorry to give bad news: *We regret to inform you…*
• **go on doing** = continue doing the same thing; **go on to do** = move on to do something else: *He went on to become a famous writer.*`,
    form: [['Verbo', '+ -ing', '+ to'], ['remember', 'recordar algo pasado', 'acordarse de hacer'], ['forget', 'olvidar algo pasado', 'olvidarse de hacer'], ['regret', 'lamentar lo hecho', 'lamentar informar'], ['go on', 'seguir con lo mismo', 'pasar a otra cosa']],
    uses: ['begin/start/continue: the same with both', 'remember/forget: -ing (the past) vs. to (a task)', 'regret, go on: they change meaning'],
    aff: ['I remember meeting her at a party.|Recuerdo haberla conocido en una fiesta.', 'Please remember to post the letter.|Acordate de mandar la carta.', 'I regret telling him.|Me arrepiento de habérselo dicho.'],
    neg: ["I'll never forget seeing the Pyramids.|Nunca voy a olvidar haber visto las pirámides."],
    q: ['Did you remember to call your mum?|¿Te acordaste de llamar a tu mamá?'],
    err: ['Remember locking the door when you go out.|Remember to lock the door when you go out.|A future task → remember to.', 'I remember to see him there last year.|I remember seeing him there last year.|A memory of the past → -ing.'],
    cmp: { w: [57, 58], x: 'try, need, help, like… also have special meanings: units 57–58.' },
    ex: [
      "? Did you remember ___ the door? (antes de salir) | locking | *to lock | lock >> A task: remember to.",
      "? I clearly remember ___ the door. I'm sure I did it. | to lock | *locking | lock >> Remembering something you did: -ing.",
      "_ I'll never forget ___ (meet) the president. = meeting >> A memory of the past: -ing.",
      "_ We regret ___ (inform) you that your flight is cancelled. = to inform >> regret to inform = we are sorry to tell you.",
      "s Don't forget [posting] the letter. = to post >> A task: forget to.",
      "o He went on to become a famous actor. >> go on to = move on to doing something else.",
      "o I regret not studying more >> regret + -ing.",
      "?2 The teacher explained the rule and then went on ___ us an example. | giving | *to give | give >> Moved on to another action: go on to.",
      "f2 I remember to visit Rome when I was a child. = I remember visiting Rome when I was a child >> A memory of the past: -ing.",
      "m remember doing = recuerdo de algo hecho ; remember to do = acordarse de hacerlo ; go on doing = seguir haciendo ; go on to do = pasar a otra cosa >> Changes in meaning.",
    ],
  },
  {
    n: 57, t: 'Verb + -ing or to … 2 (try, need, help)', es: '-ing o to (2): try, need, help', tags: ['ing-to'], pre: [56],
    goals: ['Tell try to do from try doing', 'Use need doing (= needs to be done)', "Use help (to) do and can't help doing"],
    x: `**try to do** = make an effort to do something: *I tried to keep my eyes open.*
**try doing** = do something as an experiment to see if it works: *Try turning it off and on again.*

**need to do** = it is necessary for me to do it: *I need to wash my car.*
**need doing** = it needs to be done (passive meaning): *My car needs washing* (= needs to be washed).

**help** + infinitive **with or without to**: *Can you help me (to) move this table?*
**can't help doing** = be unable to stop yourself: *I can't help laughing.*`,
    form: [['Forma', 'Significado'], ['try to do', 'intentar'], ['try doing', 'probar como experimento'], ['need doing', 'necesita ser hecho'], ["can't help doing", 'no poder evitar']],
    uses: ['try to / try -ing', 'need to / need -ing (passive)', "help (to) / can't help -ing"],
    aff: ['Try adding some salt.|Probá agregarle sal.', 'The grass needs cutting.|Hay que cortar el pasto.', 'She helped me (to) carry the bags.|Me ayudó a llevar las bolsas.'],
    neg: ["I couldn't help smiling.|No pude evitar sonreír."],
    q: ['Have you tried restarting the computer?|¿Probaste reiniciar la computadora?'],
    err: ['My hair needs to cut.|My hair needs cutting.|need + -ing = needs to be done.', "I can't help to laugh.|I can't help laughing.|can't help + -ing."],
    ex: [
      "? I was so tired that I ___ my eyes open. | *tried to keep | tried keeping | try keep >> try to = make an effort.",
      "? The radio doesn't work. Try ___ the batteries. | to change | *changing | change >> Try as an experiment: try -ing.",
      "_ The windows are dirty. They need ___ (clean). = cleaning ; to be cleaned >> need -ing = needs to be done.",
      "_ I'm sorry, I couldn't help ___ (overhear) your conversation. = overhearing >> can't help + -ing.",
      "s Your car needs [wash]. = washing >> need + -ing.",
      "o Can you help me move this table? >> help + object + verb (without to).",
      "o Try drinking a glass of water >> try -ing = do it as an experiment.",
      "?2 'I can't sleep.' 'Why don't you try ___ a hot drink before bed?' | to have | *having | have >> Suggesting an experiment.",
      "f2 I can't help to think about it. = I can't help thinking about it ; I cannot help thinking about it >> can't help + -ing.",
    ],
  },
  {
    n: 58, t: 'Verb + -ing or to … 3 (like / would like etc.)', es: '-ing o to (3): like / would like', tags: ['ing-to'], pre: [56],
    goals: ['Use like/love/hate/prefer + -ing or to', 'Use would like/love + to', 'Use would like to have done'],
    x: `**like, love, hate, can't bear** can take **-ing** or **to**. With -ing we focus on the enjoyment: *I love dancing.* With **to** we sometimes say that **something is a good idea / a habit**: *I like to wash my hair twice a week* (I think it's good to do it).

**enjoy, mind, dislike** → only **-ing**.

**would like / would love / would hate / would prefer** → **to + infinitive**: *I'd like to go to Japan.* (not *I'd like going*).

For something that **didn't happen**: **would like to have + past participle**: *I'd like to have seen the film* (but I didn't see it).`,
    form: [['Forma', 'Ejemplo'], ['like + -ing / to', 'I like swimming / to swim.'], ['enjoy + -ing (solo)', 'I enjoy swimming.'], ["would like + to", "I'd like to swim."], ['would like to have done', "I'd like to have seen it."]],
    uses: ['like/love/hate + -ing or to', 'would like/love/prefer + to', 'would like to have done = it didn\'t happen'],
    aff: ["I'd love to come.|Me encantaría ir.", 'I hate getting up early.|Odio levantarme temprano.', "I'd like to have been there.|Me hubiera gustado estar ahí."],
    neg: ["I wouldn't like to be in his position.|No me gustaría estar en su lugar."],
    q: ['Would you like to dance?|¿Querés bailar?'],
    err: ["I'd like going to the cinema tonight.|I'd like to go to the cinema tonight.|would like + to.", 'I enjoy to read.|I enjoy reading.|enjoy only + -ing.'],
    ex: [
      "? I'd like ___ to Australia one day. | going | *to go | go >> would like + to.",
      "? I really enjoy ___. | to cook | *cooking | cook >> enjoy + -ing.",
      "_ Would you like ___ (have) dinner with us? = to have >> would like + to.",
      "_ It's a pity we missed the concert. I'd like ___ (see) it. = to have seen >> Something that didn't happen.",
      "s I'd love [going] to Paris with you. = to go >> would love + to.",
      "o I hate being late for meetings. >> hate + -ing.",
      "o I'd love to meet her >> would love + to.",
      "?2 Which is NOT correct? | I like swimming. | I like to swim. | *I'd like swimming now. >> would like + to.",
      "f2 Would you prefer staying at home tonight? = Would you prefer to stay at home tonight ; Would you prefer to stay home tonight >> would prefer + to.",
    ],
  },
  {
    n: 59, t: 'prefer and would rather', es: 'prefer y would rather', tags: ['ing-to'], pre: [58],
    goals: ['Use prefer … to … and would prefer to … rather than', 'Use would rather + base verb', 'Use would rather + subject + past'],
    x: `**prefer** (in general): *I prefer **something to** something else / I prefer **doing to** doing*: *I prefer tea to coffee. I prefer driving to travelling by train.*

**would prefer** (in a specific situation): *I'd prefer **to** stay at home **rather than** go out.*

**would rather** + **base verb** (no to): *I'd rather stay at home (than go out).* Negative: *I'd rather **not** go.*

**would rather + subject + past** = I'd prefer **another person** to do something: *I'd rather you didn't tell anyone.*`,
    form: [['Estructura', 'Ejemplo'], ['prefer X to Y', 'I prefer cats to dogs.'], ['would prefer to … rather than …', "I'd prefer to walk rather than take a taxi."], ['would rather + verbo (than …)', "I'd rather walk than take a taxi."], ['would rather + sujeto + pasado', "I'd rather you stayed."]],
    uses: ['prefer (in general) + to', 'would prefer to … rather than', 'would rather + base verb', 'would rather + subject + past'],
    aff: ["I prefer summer to winter.|Prefiero el verano al invierno.", "I'd rather walk than take the bus.|Prefiero caminar a tomar el colectivo.", "I'd rather you came tomorrow.|Preferiría que vinieras mañana."],
    neg: ["I'd rather not talk about it.|Prefiero no hablar de eso."],
    q: ["Would you rather have tea or coffee?|¿Preferís té o café?"],
    err: ["I'd rather to stay at home.|I'd rather stay at home.|would rather + verb without to.", 'I prefer tea than coffee.|I prefer tea to coffee.|prefer X to Y.'],
    cmp: { w: [58], x: 'would rather ≈ would prefer, but without to.' },
    ex: [
      "? I'd rather ___ at home tonight. | to stay | *stay | staying >> would rather + base verb.",
      "? I prefer walking ___ driving. | than | *to | from >> prefer X to Y.",
      "_ I'd rather you ___ (not/smoke) in here. = didn't smoke ; did not smoke >> would rather + subject + past.",
      "_ I'd prefer to eat at home rather ___ go to a restaurant. = than >> would prefer to … rather than.",
      "s I'd rather [to] go by train. = (quitar to) >> would rather + base verb.",
      "o I'd rather not go out tonight. >> would rather not.",
      "o I'd rather see live comedy than watch TV >> would rather … than (example from the workbook, unit 24).",
      "?2 'Shall I tell Ann?' 'I'd rather you ___.' | don't | *didn't | won't >> would rather + subject + past.",
      "f2 I prefer to read books than watching TV. = I prefer reading books to watching TV ; I'd rather read books than watch TV ; I prefer to read books rather than watch TV >> Structures for preferences.",
    ],
  },
  {
    n: 60, t: 'Preposition (in/for/about etc.) + -ing', es: 'Preposición + -ing', tags: ['ing-to', 'prepositions'],
    goals: ['Use -ing after prepositions', 'Use before/after/without/by + -ing', 'Remember look forward to + -ing'],
    x: `After a **preposition**, the verb takes **-ing**: *I'm interested in learning Spanish. What about going out? I'm fed up with waiting.*

**before / after / without + -ing**: *Before going out, I called Sarah. He left without saying goodbye.*

**by + -ing** = how something is done: *You can improve your English by reading more.*

**to** can be a preposition: then it takes -ing: *I'm looking forward to **seeing** you* (not *to see*). Also *object to, be used to* (unit 61).`,
    form: [['Preposición', 'Ejemplo'], ['interested in', 'interested in learning'], ['good at', 'good at drawing'], ['without', 'without asking'], ['look forward to', 'looking forward to seeing you']],
    uses: ['Preposition + -ing', 'before/after/without + -ing', 'by + -ing = the way you do it', 'look forward to + -ing'],
    aff: ["I'm thinking of changing my job.|Estoy pensando en cambiar de trabajo.", 'She left without saying goodbye.|Se fue sin despedirse.', "I look forward to hearing from you.|Espero tener noticias suyas."],
    neg: ["I'm not very good at remembering names.|No soy muy bueno para recordar nombres."],
    q: ['How about going for a walk?|¿Qué tal si salimos a caminar?'],
    err: ["I'm looking forward to see you.|I'm looking forward to seeing you.|to is a preposition → -ing.", 'Before to leave, close the door.|Before leaving, close the door.|before + -ing.'],
    cmp: { w: [61, 62], x: 'be used to + -ing (61) and verb + preposition + -ing (62).' },
    ex: [
      "? I'm interested ___ photography. | to learn | *in learning | in learn >> Preposition + -ing.",
      "? He left without ___ anything. | to say | *saying | say >> without + -ing.",
      "_ I look forward to ___ (meet) you. = meeting >> look forward to + -ing.",
      "_ You can save money ___ (cook) at home. = by cooking >> by + -ing = the way you do something.",
      "s After [finish] work, I went home. = finishing >> after + -ing.",
      "o I'm tired of waiting for the bus. >> tired of + -ing.",
      "o I'm thinking of moving >> think of + -ing.",
      "?2 Jenny suggested ___ to the party in a taxi. | to go | *going | go >> suggest + -ing (example from the workbook, unit 7).",
      "f2 I object to pay to park my car. = I object to paying to park my car >> object to + -ing.",
      "m good at = drawing ; interested in = learning ; afraid of = flying ; tired of = waiting >> Preposition + -ing.",
    ],
  },
  {
    n: 61, t: "be/get used to … (I'm used to …)", es: 'be / get used to', tags: ['ing-to', 'used-to'], pre: [18, 60],
    goals: ['Use be used to + -ing (be familiar with)', 'Use get used to (become familiar with)', 'Tell it from used to + infinitive'],
    x: `**be used to something / doing something** = be **familiar** with it; it isn't strange any more: *I'm used to driving on the left.* (to is a preposition → **-ing**).

**get used to** = **become familiar** (a process): *It took me a long time to get used to the cold.*

Don't confuse it with **used to do** (a past habit, unit 18): *I used to live alone* (I lived alone before) ≠ *I'm used to living alone* (it's normal for me).

In the Workbook (Unit 7): *I am used to doing the washing-up.*`,
    form: [['Forma', 'Significado'], ['be used to + -ing / sustantivo', 'estar acostumbrado'], ['get used to + -ing / sustantivo', 'acostumbrarse'], ['used to + verbo base', 'hábito pasado (unidad 18)']],
    uses: ['be used to = be familiar with', 'get used to = become familiar with', 'The difference from used to do'],
    aff: ["I'm used to getting up early.|Estoy acostumbrado a levantarme temprano.", "You'll soon get used to the new system.|Pronto te vas a acostumbrar al nuevo sistema."],
    neg: ["I'm not used to working at night.|No estoy acostumbrado a trabajar de noche."],
    q: ['Have you got used to the food yet?|¿Ya te acostumbraste a la comida?'],
    err: ["I'm used to work late.|I'm used to working late.|be used to + -ing.", 'I used to living in London.|I used to live in London.|A past habit: used to + base verb.'],
    cmp: { w: [18], x: 'used to do (past) ≠ be used to doing (familiar with).' },
    ex: [
      "? I'm used to ___ on the left. | drive | *driving | drove >> be used to + -ing.",
      "? It took me months to ___ the climate. | used to | *get used to | be use to >> get used to = become used to.",
      "_ She isn't used to ___ (work) at night. = working >> be used to + -ing.",
      "? I ___ in Paris, but now I live in Rome. | am used to live | *used to live | am used to living >> A past habit.",
      "s I'm not used to [eat] so much. = eating >> be used to + -ing.",
      "o You'll get used to the noise. >> get used to + noun.",
      "o I'm used to living alone >> be used to + -ing.",
      "?2 'I'm used to it' means… | I did it in the past. | *It's not strange for me. | I use it. >> be used to = familiar with.",
      "f2 He is used to get up at 6. = He is used to getting up at 6 ; He's used to getting up at 6 >> be used to + -ing.",
    ],
  },
  {
    n: 62, t: 'Verb + preposition + -ing (succeed in -ing / insist on -ing etc.)', es: 'Verbo + preposición + -ing', tags: ['ing-to', 'prepositions'], pre: [60],
    goals: ['Use verb + preposition + -ing', 'Use verb + object + preposition + -ing', 'Practise insist on, succeed in, apologise for…'],
    x: `Many verbs take a fixed **preposition** and then **-ing**:
**insist on, succeed in, think of/about, dream of, approve of, decide against, feel like, look forward to, apologise for, talk about**.

*She insisted on paying. They succeeded in finding a solution. I don't feel like going out.*

With an **object**: **accuse sb of, suspect sb of, congratulate sb on, prevent/stop sb from, thank sb for, forgive sb for, warn sb against**:
*They accused him of stealing. Thank you for helping me. The rain prevented us from going out.*`,
    form: [['Verbo + prep.', 'Ejemplo'], ['insist on', 'He insisted on knowing.'], ['succeed in', 'We succeeded in winning.'], ['accuse sb of', 'They accused her of lying.'], ['thank sb for', 'Thanks for coming.']],
    uses: ['verb + preposition + -ing', 'verb + object + preposition + -ing'],
    aff: ['He insisted on knowing the contents.|Insistió en conocer el contenido.', 'Thank you for inviting me.|Gracias por invitarme.', 'They congratulated me on passing.|Me felicitaron por aprobar.'],
    neg: ["I don't feel like cooking tonight.|No tengo ganas de cocinar esta noche."],
    q: ['What stopped you from coming?|¿Qué te impidió venir?'],
    err: ['She insisted to pay.|She insisted on paying.|insist on + -ing.', 'He apologised to be late.|He apologised for being late.|apologise for + -ing.'],
    ex: [
      "? They insisted ___ for the meal. | to pay | *on paying | in paying >> insist on + -ing.",
      "? Did you succeed ___ the problem? | to solve | *in solving | on solving >> succeed in + -ing.",
      "_ Thank you ___ (help) me. = for helping >> thank sb for + -ing.",
      "_ The police accused him ___ (steal) the car. = of stealing >> accuse sb of + -ing.",
      "s I don't feel like [go] out tonight. = going >> feel like + -ing.",
      "o The rain prevented us from going out. >> prevent sb from + -ing.",
      "o I apologised for being late >> apologise for + -ing.",
      "m insist = on ; succeed = in ; accuse sb = of ; thank sb = for >> The correct preposition.",
      "?2 'Can I see the letter?' he insisted. → He insisted ___ the letter. | to see | *on seeing | seeing >> insist on (workbook, unit 24).",
      "f2 We're thinking to move to the countryside. = We're thinking of moving to the countryside ; We're thinking about moving to the countryside ; We are thinking of moving to the countryside >> think of/about + -ing.",
    ],
  },
  {
    n: 63, t: "there's no point in -ing, it's worth -ing etc.", es: "there's no point / it's worth", tags: ['ing-to'], pre: [60],
    goals: ["Use there's no point (in) -ing", "Use it's worth / not worth -ing", 'Use have trouble/difficulty -ing and spend/waste time -ing'],
    x: `Expressions followed by **-ing**:
• **There's no point (in) -ing** = it's useless: *There's no point in waiting.*
• **It's (not) worth -ing** = it's (not) a good use of time: *The museum is worth visiting. It's not worth repairing.*
• **have trouble / difficulty / a problem (in) -ing**: *I had difficulty finding the hotel.*
• **spend / waste time -ing**: *I spent hours trying to fix it.*
• **go -ing** for activities: *go swimming, go shopping, go skiing.*`,
    form: [['Expresión', 'Ejemplo'], ["there's no point (in) -ing", "There's no point arguing."], ["it's worth -ing", "It's worth seeing."], ['have difficulty -ing', 'I had difficulty sleeping.'], ['spend time -ing', 'I spent the day reading.']],
    uses: ['no point / worth + -ing', 'difficulty/trouble + -ing', 'spend/waste time + -ing', 'go + -ing (activities)'],
    aff: ['This book is worth reading.|Vale la pena leer este libro.', 'I spent two hours looking for my keys.|Pasé dos horas buscando mis llaves.', "Let's go swimming.|Vamos a nadar."],
    neg: ["There's no point in buying a car if you can't drive.|No tiene sentido comprar un auto si no sabés manejar."],
    q: ['Did you have any trouble finding the house?|¿Te costó encontrar la casa?'],
    err: ["It's worth to visit.|It's worth visiting.|worth + -ing.", 'I had difficulty to understand him.|I had difficulty understanding him.|difficulty + -ing.'],
    ex: [
      "? There's no point ___ about it now. | to worry | *worrying | worry >> no point (in) + -ing.",
      "? The film is worth ___. | to see | *seeing | see >> worth + -ing.",
      "_ I had difficulty ___ (find) a parking space. = finding >> difficulty + -ing.",
      "_ Don't waste time ___ (watch) TV. = watching >> waste time + -ing.",
      "s We went [ski] in the Alps. = skiing >> go + -ing.",
      "o It's not worth repairing that old phone. >> not worth + -ing.",
      "o I spent the afternoon reading >> spend + time + -ing.",
      "?2 'Should we take a taxi?' 'No, it's only 5 minutes. It's not worth ___ a taxi.' | to take | *taking | take >> worth + -ing.",
      "f2 There's no point to call him. He's not at home. = There's no point calling him. He's not at home ; There's no point in calling him. He's not at home >> no point + -ing.",
    ],
  },
  {
    n: 64, t: 'to … , for … and so that …', es: 'to, for y so that (finalidad)', tags: ['ing-to', 'conjunctions'],
    goals: ['Talk about purpose with to + infinitive', 'Use for + noun', 'Use so that with can/could/will/would'],
    x: `To say **why** we do something we use **to + infinitive**: *I went out to buy some bread* (not *for buy*).

**for + noun**: *I went out for some bread.* (or for + -ing for what an object is used for: *This knife is for cutting bread*).

**so that** + clause, especially when:
• the **subject changes**: *I gave him my number so that he could call me.*
• there is a **negative**: *I hurried so that I wouldn't be late.*
With so that we usually use **can/could/will/would**.

In the Workbook: *I'm going to town to buy a new jumper.*`,
    form: [['Forma', 'Ejemplo'], ['to + verbo', 'I came to see you.'], ['for + sustantivo', 'I came for a visit.'], ['so that + sujeto + can/could', 'I left early so that I could catch the bus.']],
    uses: ['Purpose: to + infinitive', 'for + noun', 'so that with a different subject or a negative'],
    aff: ["I'm saving money to buy a car.|Ahorro para comprarme un auto.", 'We went out for dinner.|Salimos a cenar.', 'Speak slowly so that everybody can understand.|Hablá despacio para que todos entiendan.'],
    neg: ["I wrote it down so that I wouldn't forget.|Lo anoté para no olvidarme."],
    q: ['Why did you go to the bank? – To get some money.|¿Para qué fuiste al banco? – Para sacar plata.'],
    err: ['I went to the shop for buy milk.|I went to the shop to buy milk.|Purpose with a verb → to.', "I'm going to town for to buy a jumper.|I'm going to town to buy a jumper.|No for before to."],
    ex: [
      "? I went to the bank ___ some money. | for get | *to get | for getting >> Purpose: to + verb.",
      "? We went to a restaurant ___ dinner. | to | *for | so that >> for + noun.",
      "_ I'll give you my number ___ you can call me. = so that ; so >> Different subject: so that.",
      "_ I left early ___ I wouldn't miss the train. = so that ; so >> so that + negative.",
      "s She came to London [for] study English. = to >> Purpose with a verb: to.",
      "o I'm learning English to get a better job. >> to + verb.",
      "o I'm saving to travel >> Purpose: to.",
      "?2 I'm going to town ___ a new jumper. | for buying | *to buy | for to buy >> Workbook unit 7.",
      "f2 I turned down the music so that the baby can't wake up. = I turned down the music so that the baby wouldn't wake up ; I turned down the music so the baby wouldn't wake up ; I turned the music down so that the baby wouldn't wake up >> so that + would (past).",
    ],
  },
  {
    n: 65, t: 'Adjective + to …', es: 'Adjetivo + to', tags: ['ing-to', 'adjectives'],
    goals: ['Use It is + adjective + to', 'Use subject + is + adjective + to (She is easy to talk to)', 'Use the first/last/next + to'],
    x: `**It's + adjective + (for sb) + to + verb**: *It's difficult to understand him. It's easy for me to get there.*

We can also make the object the subject: *He is difficult to understand* (= It's difficult to understand him). Like this with **easy, hard, difficult, impossible, nice, safe, dangerous, cheap, interesting**.

**It's nice/kind/silly of sb to do**: *It was kind of you to help me.*

**sorry / glad / surprised / pleased + to**: *I'm glad to hear that.*

**the first / the last / the next / the only + to**: *She was the first person to arrive.*`,
    form: [['Estructura', 'Ejemplo'], ["It's + adj + to", "It's hard to believe."], ['sujeto + is + adj + to', 'This book is easy to read.'], ['It was kind of you to…', 'It was kind of you to come.'], ['the first to', 'He was the first to leave.']],
    uses: ["It's + adjective + to", 'Subject + adjective + to', 'kind/nice of sb to', 'the first/last/only + to'],
    aff: ["It's easy to make mistakes.|Es fácil cometer errores.", 'This question is hard to answer.|Esta pregunta es difícil de responder.', 'It was nice of you to call.|Fue muy amable de tu parte llamar.'],
    neg: ["It's not safe to swim here.|No es seguro nadar acá."],
    q: ['Who was the last person to leave?|¿Quién fue el último en irse?'],
    err: ['This book is difficult to understand it.|This book is difficult to understand.|No it at the end.', 'It was kind for you to help me.|It was kind of you to help me.|kind of you.'],
    ex: [
      "? Her accent is difficult to ___. | understand it | *understand | understanding >> No it at the end.",
      "? It was very kind ___ you to help me. | for | *of | to >> kind of sb.",
      "_ He was the first person ___ (arrive). = to arrive >> the first + to.",
      "_ I'm glad ___ (hear) that you're feeling better. = to hear >> glad + to.",
      "s This river isn't safe [swimming] in. = to swim >> adjective + to.",
      "o It's easy to get lost in this city. >> It's + adjective + to.",
      "o It's hard to believe >> It's + adjective + to.",
      "?2 'It's impossible to answer this question.' → This question ___. | *is impossible to answer | is impossible to answer it | impossible to answer >> The object as the subject.",
      "f2 It was silly for me to forget. = It was silly of me to forget >> silly of sb.",
    ],
  },
  {
    n: 66, t: 'to … (afraid to do) and preposition + -ing (afraid of -ing)', es: 'afraid to / afraid of -ing', tags: ['ing-to', 'prepositions'], pre: [60, 65],
    goals: ['Tell afraid to do from afraid of doing', 'Tell interested to from interested in', 'Use sorry to / sorry for'],
    x: `**afraid to do** = I don't want to do it **because it's dangerous** (a decision): *I was afraid to go out alone.*
**afraid of doing** = afraid that **something might happen by accident**: *I was afraid of falling* (you wouldn't choose it).

**interested in doing** = interested in something; **interested to hear/know/see** = I'd like to know: *I'd be interested to hear your opinion.*

**sorry to** = sorry (about something happening now or some news): *Sorry to bother you.* **sorry for doing** = an apology for something you did: *I'm sorry for shouting.*

**certain/sure to** = it will certainly happen; **certain/sure of** = the speaker is sure.`,
    form: [['Forma', 'Significado'], ['afraid to do', 'no hacerlo por miedo'], ['afraid of doing', 'miedo de que pase'], ['interested in doing', 'interés general'], ['sorry for doing', 'disculpa por algo hecho']],
    uses: ['afraid to / afraid of -ing', 'interested in / interested to', 'sorry to / sorry for'],
    aff: ['I was afraid to tell him the truth.|Tenía miedo de decirle la verdad.', 'I was afraid of losing my job.|Tenía miedo de perder el trabajo.', "I'm interested in learning Chinese.|Me interesa aprender chino."],
    neg: ["Don't be afraid to ask questions.|No tengas miedo de hacer preguntas."],
    q: [],
    err: ["I'm interested to learn French in general.|I'm interested in learning French.|General interest → in + -ing.", "I'm sorry to shout at you yesterday.|I'm sorry for shouting at you yesterday.|Something already done → sorry for + -ing."],
    ex: [
      "? The path was icy, so we walked carefully. We were afraid ___. | to fall | *of falling | falling >> Something that could happen by accident.",
      "? She was afraid ___ alone at night. (she decided not to) | of going out | *to go out | going out >> A decision because of fear: afraid to.",
      "_ I'm interested ___ (learn) more about history. = in learning >> interested in + -ing.",
      "_ I'm sorry ___ (bother) you, but can I ask a question? = to bother >> sorry to (now).",
      "s I'm sorry for [be] late yesterday. = being >> sorry for + -ing.",
      "o I'd be interested to hear your opinion. >> interested to hear.",
      "o I'm afraid of missing the plane >> afraid of + -ing (something you don't control).",
      "?2 'Don't be afraid ___ for help.' | of asking | *to ask | ask >> A decision: afraid to.",
      "f2 He is sure of win. = He is sure to win ; He's sure to win >> sure to = it is certain to happen.",
    ],
  },
  {
    n: 67, t: 'see somebody do and see somebody doing', es: 'see somebody do / doing', tags: ['ing-to'],
    goals: ['Use see/hear/watch + object + base verb (complete action)', 'Use see/hear + object + -ing (action in progress)'],
    x: `With **see, hear, watch, notice, feel, smell** we can use:

• **object + base verb** = we saw the **complete** action, from start to finish: *I saw him get into the car and drive away.*
• **object + -ing** = we saw/heard someone **in the middle** of the action: *I saw him walking along the street* (I didn't see the whole walk).

*I heard a girl scream* (a short, complete scream) / *I heard her singing* (she was singing).`,
    form: [['Estructura', 'Ejemplo'], ['see + obj + verbo', 'I saw her leave.'], ['see + obj + -ing', 'I saw her leaving.'], ['hear + obj + verbo', 'I heard the door close.'], ['smell + obj + -ing', 'I can smell something burning.']],
    uses: ['A complete action → base verb', 'An action in progress → -ing'],
    aff: ['I saw her cross the road.|La vi cruzar la calle.', 'I heard someone shouting.|Escuché a alguien gritando.', 'Can you smell something burning?|¿Sentís olor a quemado?'],
    neg: ["I didn't notice him leave.|No me di cuenta de que se fue."],
    q: ['Did you see the accident happen?|¿Viste ocurrir el accidente?'],
    err: ['I saw him to leave.|I saw him leave.|see + object + verb without to.', 'I heard her to sing.|I heard her singing.|hear + object + -ing or base verb.'],
    ex: [
      "? I saw Tom ___ the bus and drive away. | to get off | *get off | got off >> A complete action: base verb.",
      "? When I walked past, I heard them ___ an argument. | to have | *having | had >> In the middle of the action.",
      "_ I can smell something ___ (burn). = burning >> smell + object + -ing.",
      "_ Did you hear the phone ___ (ring)? = ring ; ringing >> Both are possible.",
      "s I watched them [played] football. = playing >> watch + object + -ing (or base verb: play).",
      "o I felt something touch my arm. >> A short, complete action.",
      "o I saw her dancing >> see + object + -ing.",
      "?2 'I saw him cross the road' means… | *I saw the whole action. | I saw part of it. | I crossed the road. >> base verb = complete action.",
      "f2 We heard somebody to scream. = We heard somebody scream ; We heard somebody screaming >> No to.",
    ],
  },
  {
    n: 68, t: '-ing clauses (He hurt his knee playing football.)', es: 'Cláusulas con -ing', tags: ['ing-to'],
    goals: ['Use -ing clauses for actions at the same time', 'Use having done for earlier actions', 'Use -ing to explain causes'],
    x: `An **-ing clause** can describe something that happens **at the same time**: *Kate is in the kitchen making coffee. Jim hurt his knee playing football* (while he was playing).

If one action happens **before** another, we use **having + past participle**: *Having finished her work, she went home.* (or just *After finishing…*)

Also to **explain a cause**: *Feeling tired, I went to bed early* (because I felt tired). *Not having a car, she finds it hard to get around.*`,
    form: [['Uso', 'Ejemplo'], ['Simultáneo', 'She walked out smiling.'], ['Mientras', 'He cut himself shaving.'], ['Anterior', 'Having eaten, we left.'], ['Causa', "Being tired, I didn't go."]],
    uses: ['Actions at the same time', 'having + past participle = before', 'A cause (= because/as)'],
    aff: ['She sat in the garden reading a book.|Estaba sentada en el jardín leyendo un libro.', 'Having finished the report, I sent it to my boss.|Después de terminar el informe, se lo mandé a mi jefe.', 'Feeling hungry, we stopped for lunch.|Como teníamos hambre, paramos a almorzar.'],
    neg: ["Not knowing what to do, I called my mother.|Sin saber qué hacer, llamé a mi mamá."],
    q: [],
    err: ['Finished his work, he went out.|Having finished his work, he went out.|An earlier action → having + past participle.', 'Not know the answer, I said nothing.|Not knowing the answer, I said nothing.|A cause → not + -ing.'],
    ex: [
      "? He hurt his back ___ the piano. | moved | *moving | to move >> While: -ing.",
      "? ___ the letter, she put it in an envelope. | Writing | *Having written | Written >> An earlier action.",
      "_ ___ (feel) tired, I went to bed early. = Feeling >> Cause: -ing.",
      "_ ___ (not/have) a car, she goes everywhere by bike. = Not having >> not + -ing.",
      "s [Finish] the meal, they left the restaurant. = Having finished >> An earlier action.",
      "o Jim cut himself shaving this morning. >> -ing = while.",
      "o Not knowing his number, I couldn't call him >> A negative cause.",
      "?2 'Being a student, she gets a discount.' means… | *Because she is a student… | Although she is a student… | When she becomes a student… >> -ing = cause.",
      "f2 Having went to bed late, I was tired. = Having gone to bed late, I was tired >> having + past participle.",
    ],
  },
];

import type { UnitSrc } from '../dsl';

// Module 9 — -ing and to … (EGU units 53–68)
export const m09: UnitSrc[] = [
  {
    n: 53, t: 'Verb + -ing (enjoy doing / stop doing etc.)', es: 'Verbo + -ing', tags: ['ing-to'],
    goals: ['Reconocer los verbos que van seguidos de -ing', 'Formar la negativa con not -ing', 'Usar having done'],
    x: `Después de ciertos verbos, el segundo verbo va en **-ing**: **enjoy, mind, stop, finish, suggest, avoid, consider, admit, deny, imagine, miss, risk, keep (on), give up, put off, carry on, postpone, fancy**.

*I enjoy dancing. Would you mind closing the door? He's given up smoking.*

Negativa: **not + -ing**: *When I'm on holiday, I enjoy not having to get up early.*

Para el pasado podemos usar **having + participio**: *She admitted having stolen the money* (= admitted stealing).

Con algunos de estos verbos también se puede usar *that…*: *He denied that he had stolen it.*`,
    form: [['Verbo', 'Ejemplo'], ['enjoy', 'I enjoy reading.'], ['mind', "Do you mind waiting?"], ['avoid', 'Try to avoid eating late.'], ['give up', 'She gave up smoking.']],
    uses: ['Verbos fijos + -ing', 'not + -ing para la negativa', 'having + participio para el pasado'],
    aff: ['I enjoy cooking for my friends.|Disfruto cocinar para mis amigos.', 'Have you finished writing the report?|¿Terminaste de escribir el informe?', 'He suggested going to the beach.|Sugirió ir a la playa.'],
    neg: ["I don't mind waiting.|No me molesta esperar."],
    q: ['Would you mind opening the window?|¿Te molestaría abrir la ventana?'],
    err: ['I enjoy to swim.|I enjoy swimming.|enjoy + -ing.', 'She suggested to go out.|She suggested going out.|suggest + -ing.'],
    cmp: { w: [54, 56], x: 'Otros verbos van seguidos de to + infinitivo (unidad 54); algunos admiten ambos (unidad 56).' },
    ex: [
      "? I really enjoy ___ in the sea. | to swim | *swimming | swim >> enjoy + -ing.",
      "? Would you mind ___ the window? | to close | *closing | close >> mind + -ing.",
      "_ Have you finished ___ (eat)? = eating >> finish + -ing.",
      "_ He's given up ___ (smoke). = smoking >> give up + -ing.",
      "s I'm considering [buy] a new car. = buying >> consider + -ing.",
      "o She admitted breaking the window. >> admit + -ing.",
      "t Evitá manejar de noche. = Avoid driving at night ; Avoid driving at night time >> avoid + -ing.",
      "m enjoy = cooking ; give up = smoking ; mind = waiting ; keep = talking >> Todos van con -ing.",
      "?2 Imagine ___ in a big house by the sea! | to live | *living | live >> imagine + -ing.",
      "f2 He denied to steal the money. = He denied stealing the money ; He denied having stolen the money ; He denied that he had stolen the money >> deny + -ing.",
    ],
  },
  {
    n: 54, t: 'Verb + to … (decide to … / forget to … etc.)', es: 'Verbo + to + infinitivo', tags: ['ing-to'],
    goals: ['Reconocer los verbos seguidos de to + infinitivo', 'Usar to be doing / to have done', 'Usar verbo + wh- + to (how to, what to…)'],
    x: `Después de **offer, decide, hope, deserve, attempt, promise, agree, plan, aim, afford, threaten, manage, fail, refuse, arrange, forget, learn, tend, seem, appear, pretend, claim** usamos **to + infinitivo**:

*We decided to take a taxi. I can't afford to buy a car. She seems to be happy.*

Negativa: **not to**: *I promised not to be late.*

Con seem/appear/pretend: **to be doing** y **to have done**: *He seems to be enjoying himself. She pretended to have forgotten.*

Después de **ask, decide, know, remember, forget, explain, learn, understand, wonder** podemos usar **wh- + to**: *Do you know how to get there? I don't know what to do.*`,
    form: [['Verbo', 'Ejemplo'], ['decide', 'We decided to stay.'], ['afford', "I can't afford to go."], ['refuse', 'He refused to help.'], ['how/what to', "I don't know what to say."]],
    uses: ['Verbos fijos + to', 'not to para la negativa', 'seem to be doing / to have done', 'wh- + to'],
    aff: ['I hope to see you soon.|Espero verte pronto.', 'She managed to finish on time.|Logró terminar a tiempo.', "I don't know how to use this machine.|No sé cómo usar esta máquina."],
    neg: ['He promised not to tell anyone.|Prometió no contárselo a nadie.'],
    q: ['Have you decided where to go?|¿Decidiste adónde ir?'],
    err: ['I decided going home.|I decided to go home.|decide + to.', "I can't afford buying it.|I can't afford to buy it.|afford + to."],
    cmp: { w: [53, 55], x: 'Verbo + -ing (53) vs. verbo + to (54) vs. verbo + objeto + to (55).' },
    ex: [
      "? We decided ___ a taxi. | taking | *to take | take >> decide + to.",
      "? He refused ___ me. | helping | *to help | help >> refuse + to.",
      "_ I hope ___ (see) you again soon. = to see >> hope + to.",
      "_ She pretended ___ (not/see) me. = not to see >> not to + verbo.",
      "s They agreed [helping] us. = to help >> agree + to.",
      "o I don't know what to say. >> wh- + to.",
      "t No me alcanza para comprar una casa. = I can't afford to buy a house ; I cannot afford to buy a house >> afford + to.",
      "?2 He seems ___ a lot of weight. | to lose | *to have lost | losing >> Pasado con seem: to have + participio.",
      "f2 Can you show me how use this phone? = Can you show me how to use this phone >> how + to.",
      "m decide = to stay ; enjoy = staying ; promise = to call ; avoid = calling >> ¿-ing o to?",
    ],
  },
  {
    n: 55, t: 'Verb (+ object) + to … (I want you to …)', es: 'Verbo + objeto + to', tags: ['ing-to'], pre: [54],
    goals: ['Usar want/ask/tell/advise + objeto + to', 'Usar make y let sin to', 'Evitar want that…'],
    x: `Algunos verbos llevan **objeto + to + infinitivo**: **want, ask, help, would like, expect, beg, mean, tell, remind, warn, persuade, enable, teach, invite, advise, allow, encourage, force**.

*I want you to listen. They told me to wait. She advised me to see a doctor.*

En español decimos "quiero que…", pero en inglés **no** usamos *want that*: *I want you to come* (no *I want that you come*).

**make** y **let** van con objeto + **infinitivo sin to**: *They made me wait. Let me help you.* (Pero en pasiva: *I was made to wait*.)`,
    form: [['Verbo', 'Objeto', 'to + verbo'], ['want', 'you', 'to come'], ['advise', 'me', 'to rest'], ['make', 'me', 'laugh (sin to)'], ['let', 'us', 'go (sin to)']],
    uses: ['want/ask/tell/advise… + objeto + to', 'make/let + objeto + verbo sin to', 'No usar want that'],
    aff: ['I want you to be happy.|Quiero que seas feliz.', 'My parents let me stay out late.|Mis padres me dejan quedarme afuera hasta tarde.', 'The film made me cry.|La película me hizo llorar.'],
    neg: ["She warned me not to touch it.|Me advirtió que no lo tocara."],
    q: ['Do you want me to help you?|¿Querés que te ayude?'],
    err: ['I want that you come.|I want you to come.|want + objeto + to.', 'They made me to wait.|They made me wait.|make + objeto + verbo sin to.'],
    cmp: { w: [48], x: 'Mismo patrón que en estilo indirecto: told me to…' },
    ex: [
      "? I want ___ the truth. | that you tell me | *you to tell me | you tell me >> want + objeto + to.",
      "? My boss made me ___ late. | to work | *work | working >> make + objeto + verbo sin to.",
      "_ The doctor advised me ___ (rest). = to rest >> advise + objeto + to.",
      "_ Let me ___ (carry) your bag. = carry >> let + objeto + verbo sin to.",
      "s They made me [to] wait for an hour. = (quitar to) >> make + objeto + verbo sin to.",
      "o She reminded me to buy some milk. >> remind + objeto + to.",
      "t Quiero que vengas a mi fiesta. = I want you to come to my party >> want + objeto + to.",
      "?2 'Don't forget to lock the door,' she said to me. → She reminded me ___ the door. | locking | *to lock | lock >> remind + objeto + to.",
      "f2 My parents didn't let me to go to the party. = My parents didn't let me go to the party ; My parents did not let me go to the party >> let sin to.",
    ],
  },
  {
    n: 56, t: 'Verb + -ing or to … 1 (remember, regret etc.)', es: '-ing o to (1): remember, regret…', tags: ['ing-to'], pre: [53, 54],
    goals: ['Usar verbos que admiten ambas formas con el mismo sentido', 'Distinguir remember/forget/regret/go on + -ing / to'],
    x: `Algunos verbos aceptan **-ing o to** con **el mismo significado**: **begin, start, continue, intend, bother**: *It started raining / to rain.*

Otros **cambian de significado**:
• **remember / forget doing** = recordar algo que **ya hiciste**: *I remember locking the door.*
• **remember / forget to do** = acordarse de hacer algo **antes de hacerlo**: *Remember to lock the door.*
• **regret doing** = lamentar algo que hiciste; **regret to tell/say** = lamento informar: *We regret to inform you…*
• **go on doing** = seguir haciendo lo mismo; **go on to do** = pasar a hacer otra cosa: *He went on to become a famous writer.*`,
    form: [['Verbo', '+ -ing', '+ to'], ['remember', 'recordar algo pasado', 'acordarse de hacer'], ['forget', 'olvidar algo pasado', 'olvidarse de hacer'], ['regret', 'lamentar lo hecho', 'lamentar informar'], ['go on', 'seguir con lo mismo', 'pasar a otra cosa']],
    uses: ['begin/start/continue: igual con ambas', 'remember/forget: -ing (pasado) vs. to (tarea)', 'regret, go on: cambian de sentido'],
    aff: ['I remember meeting her at a party.|Recuerdo haberla conocido en una fiesta.', 'Please remember to post the letter.|Acordate de mandar la carta.', 'I regret telling him.|Me arrepiento de habérselo dicho.'],
    neg: ["I'll never forget seeing the Pyramids.|Nunca voy a olvidar haber visto las pirámides."],
    q: ['Did you remember to call your mum?|¿Te acordaste de llamar a tu mamá?'],
    err: ['Remember locking the door when you go out.|Remember to lock the door when you go out.|Tarea futura → remember to.', 'I remember to see him there last year.|I remember seeing him there last year.|Recuerdo de algo pasado → -ing.'],
    cmp: { w: [57, 58], x: 'try, need, help, like… también tienen matices: unidades 57–58.' },
    ex: [
      "? Did you remember ___ the door? (antes de salir) | locking | *to lock | lock >> Tarea: remember to.",
      "? I clearly remember ___ the door. I'm sure I did it. | to lock | *locking | lock >> Recuerdo de algo hecho: -ing.",
      "_ I'll never forget ___ (meet) the president. = meeting >> Recuerdo del pasado: -ing.",
      "_ We regret ___ (inform) you that your flight is cancelled. = to inform >> regret to inform = lamentamos informar.",
      "s Don't forget [posting] the letter. = to post >> Tarea: forget to.",
      "o He went on to become a famous actor. >> go on to = pasar a hacer otra cosa.",
      "t Me arrepiento de no haber estudiado más. = I regret not studying more ; I regret not having studied more >> regret + -ing.",
      "?2 The teacher explained the rule and then went on ___ us an example. | giving | *to give | give >> Pasó a otra acción: go on to.",
      "f2 I remember to visit Rome when I was a child. = I remember visiting Rome when I was a child >> Recuerdo del pasado: -ing.",
      "m remember doing = recuerdo de algo hecho ; remember to do = acordarse de hacerlo ; go on doing = seguir haciendo ; go on to do = pasar a otra cosa >> Cambios de significado.",
    ],
  },
  {
    n: 57, t: 'Verb + -ing or to … 2 (try, need, help)', es: '-ing o to (2): try, need, help', tags: ['ing-to'], pre: [56],
    goals: ['Distinguir try to do y try doing', 'Usar need doing (= necesita ser hecho)', "Usar help (to) do y can't help doing"],
    x: `**try to do** = intentar (esforzarse) hacer algo: *I tried to keep my eyes open.*
**try doing** = probar algo como experimento para ver si funciona: *Try turning it off and on again.*

**need to do** = es necesario que yo lo haga: *I need to wash my car.*
**need doing** = necesita ser hecho (sentido pasivo): *My car needs washing* (= needs to be washed).

**help** + infinitivo **con o sin to**: *Can you help me (to) move this table?*
**can't help doing** = no poder evitarlo: *I can't help laughing.*`,
    form: [['Forma', 'Significado'], ['try to do', 'intentar'], ['try doing', 'probar como experimento'], ['need doing', 'necesita ser hecho'], ["can't help doing", 'no poder evitar']],
    uses: ['try to / try -ing', 'need to / need -ing (pasivo)', "help (to) / can't help -ing"],
    aff: ['Try adding some salt.|Probá agregarle sal.', 'The grass needs cutting.|Hay que cortar el pasto.', 'She helped me (to) carry the bags.|Me ayudó a llevar las bolsas.'],
    neg: ["I couldn't help smiling.|No pude evitar sonreír."],
    q: ['Have you tried restarting the computer?|¿Probaste reiniciar la computadora?'],
    err: ['My hair needs to cut.|My hair needs cutting.|need + -ing = necesita ser hecho.', "I can't help to laugh.|I can't help laughing.|can't help + -ing."],
    ex: [
      "? I was so tired that I ___ my eyes open. | *tried to keep | tried keeping | try keep >> try to = esforzarse.",
      "? The radio doesn't work. Try ___ the batteries. | to change | *changing | change >> Probar como experimento: try -ing.",
      "_ The windows are dirty. They need ___ (clean). = cleaning ; to be cleaned >> need -ing = necesita ser hecho.",
      "_ I'm sorry, I couldn't help ___ (overhear) your conversation. = overhearing >> can't help + -ing.",
      "s Your car needs [wash]. = washing >> need + -ing.",
      "o Can you help me move this table? >> help + objeto + verbo (sin to).",
      "t Probá tomar un vaso de agua. = Try drinking a glass of water ; Try having a glass of water >> try -ing = probar.",
      "?2 'I can't sleep.' 'Why don't you try ___ a hot drink before bed?' | to have | *having | have >> Sugerencia de experimento.",
      "f2 I can't help to think about it. = I can't help thinking about it ; I cannot help thinking about it >> can't help + -ing.",
    ],
  },
  {
    n: 58, t: 'Verb + -ing or to … 3 (like / would like etc.)', es: '-ing o to (3): like / would like', tags: ['ing-to'], pre: [56],
    goals: ['Usar like/love/hate/prefer + -ing o to', 'Usar would like/love + to', 'Usar would like to have done'],
    x: `**like, love, hate, can't bear** pueden ir con **-ing** o **to**. Con -ing nos enfocamos en el disfrute: *I love dancing.* Con **to** a veces expresamos que **algo es buena idea / un hábito**: *I like to wash my hair twice a week* (creo que es bueno hacerlo).

**enjoy, mind, dislike** → solo **-ing**.

**would like / would love / would hate / would prefer** → **to + infinitivo**: *I'd like to go to Japan.* (no *I'd like going*).

Para algo que **no pasó**: **would like to have + participio**: *I'd like to have seen the film* (pero no la vi).`,
    form: [['Forma', 'Ejemplo'], ['like + -ing / to', 'I like swimming / to swim.'], ['enjoy + -ing (solo)', 'I enjoy swimming.'], ["would like + to", "I'd like to swim."], ['would like to have done', "I'd like to have seen it."]],
    uses: ['like/love/hate + -ing o to', 'would like/love/prefer + to', 'would like to have done = no pasó'],
    aff: ["I'd love to come.|Me encantaría ir.", 'I hate getting up early.|Odio levantarme temprano.', "I'd like to have been there.|Me hubiera gustado estar ahí."],
    neg: ["I wouldn't like to be in his position.|No me gustaría estar en su lugar."],
    q: ['Would you like to dance?|¿Querés bailar?'],
    err: ["I'd like going to the cinema tonight.|I'd like to go to the cinema tonight.|would like + to.", 'I enjoy to read.|I enjoy reading.|enjoy solo + -ing.'],
    ex: [
      "? I'd like ___ to Australia one day. | going | *to go | go >> would like + to.",
      "? I really enjoy ___. | to cook | *cooking | cook >> enjoy + -ing.",
      "_ Would you like ___ (have) dinner with us? = to have >> would like + to.",
      "_ It's a pity we missed the concert. I'd like ___ (see) it. = to have seen >> Algo que no pasó.",
      "s I'd love [going] to Paris with you. = to go >> would love + to.",
      "o I hate being late for meetings. >> hate + -ing.",
      "t Me encantaría conocerla. = I'd love to meet her ; I would love to meet her >> would love + to.",
      "?2 Which is NOT correct? | I like swimming. | I like to swim. | *I'd like swimming now. >> would like + to.",
      "f2 Would you prefer staying at home tonight? = Would you prefer to stay at home tonight ; Would you prefer to stay home tonight >> would prefer + to.",
    ],
  },
  {
    n: 59, t: 'prefer and would rather', es: 'prefer y would rather', tags: ['ing-to'], pre: [58],
    goals: ['Usar prefer … to … y would prefer to … rather than', 'Usar would rather + verbo base', 'Usar would rather + sujeto + pasado'],
    x: `**prefer** (en general): *I prefer **something to** something else / I prefer **doing to** doing*: *I prefer tea to coffee. I prefer driving to travelling by train.*

**would prefer** (en una situación concreta): *I'd prefer **to** stay at home **rather than** go out.*

**would rather** + **verbo base** (sin to): *I'd rather stay at home (than go out).* Negativa: *I'd rather **not** go.*

**would rather + sujeto + pasado** = preferiría que **otra persona** hiciera algo: *I'd rather you didn't tell anyone.*`,
    form: [['Estructura', 'Ejemplo'], ['prefer X to Y', 'I prefer cats to dogs.'], ['would prefer to … rather than …', "I'd prefer to walk rather than take a taxi."], ['would rather + verbo (than …)', "I'd rather walk than take a taxi."], ['would rather + sujeto + pasado', "I'd rather you stayed."]],
    uses: ['prefer (general) + to', 'would prefer to … rather than', 'would rather + verbo base', 'would rather + sujeto + pasado'],
    aff: ["I prefer summer to winter.|Prefiero el verano al invierno.", "I'd rather walk than take the bus.|Prefiero caminar a tomar el colectivo.", "I'd rather you came tomorrow.|Preferiría que vinieras mañana."],
    neg: ["I'd rather not talk about it.|Prefiero no hablar de eso."],
    q: ["Would you rather have tea or coffee?|¿Preferís té o café?"],
    err: ["I'd rather to stay at home.|I'd rather stay at home.|would rather + verbo sin to.", 'I prefer tea than coffee.|I prefer tea to coffee.|prefer X to Y.'],
    cmp: { w: [58], x: 'would rather ≈ would prefer, pero sin to.' },
    ex: [
      "? I'd rather ___ at home tonight. | to stay | *stay | staying >> would rather + verbo base.",
      "? I prefer walking ___ driving. | than | *to | from >> prefer X to Y.",
      "_ I'd rather you ___ (not/smoke) in here. = didn't smoke ; did not smoke >> would rather + sujeto + pasado.",
      "_ I'd prefer to eat at home rather ___ go to a restaurant. = than >> would prefer to … rather than.",
      "s I'd rather [to] go by train. = (quitar to) >> would rather + verbo base.",
      "o I'd rather not go out tonight. >> would rather not.",
      "t Prefiero ver comedia en vivo que mirar la tele. = I'd rather see live comedy than watch TV ; I would rather see live comedy than watch TV >> would rather … than (ejemplo del workbook, unidad 24).",
      "?2 'Shall I tell Ann?' 'I'd rather you ___.' | don't | *didn't | won't >> would rather + sujeto + pasado.",
      "f2 I prefer to read books than watching TV. = I prefer reading books to watching TV ; I'd rather read books than watch TV ; I prefer to read books rather than watch TV >> Estructuras de preferencia.",
    ],
  },
  {
    n: 60, t: 'Preposition (in/for/about etc.) + -ing', es: 'Preposición + -ing', tags: ['ing-to', 'prepositions'],
    goals: ['Usar -ing después de preposiciones', 'Usar before/after/without/by + -ing', 'Recordar look forward to + -ing'],
    x: `Después de una **preposición**, el verbo va en **-ing**: *I'm interested in learning Spanish. What about going out? I'm fed up with waiting.*

**before / after / without + -ing**: *Before going out, I called Sarah. He left without saying goodbye.*

**by + -ing** = cómo se hace algo: *You can improve your English by reading more.*

**to** puede ser preposición: entonces va -ing: *I'm looking forward to **seeing** you* (no *to see*). También *object to, be used to* (unidad 61).`,
    form: [['Preposición', 'Ejemplo'], ['interested in', 'interested in learning'], ['good at', 'good at drawing'], ['without', 'without asking'], ['look forward to', 'looking forward to seeing you']],
    uses: ['Preposición + -ing', 'before/after/without + -ing', 'by + -ing = el modo', 'look forward to + -ing'],
    aff: ["I'm thinking of changing my job.|Estoy pensando en cambiar de trabajo.", 'She left without saying goodbye.|Se fue sin despedirse.', "I look forward to hearing from you.|Espero tener noticias suyas."],
    neg: ["I'm not very good at remembering names.|No soy muy bueno para recordar nombres."],
    q: ['How about going for a walk?|¿Qué tal si salimos a caminar?'],
    err: ["I'm looking forward to see you.|I'm looking forward to seeing you.|to es preposición → -ing.", 'Before to leave, close the door.|Before leaving, close the door.|before + -ing.'],
    cmp: { w: [61, 62], x: 'be used to + -ing (61) y verbo + preposición + -ing (62).' },
    ex: [
      "? I'm interested ___ photography. | to learn | *in learning | in learn >> Preposición + -ing.",
      "? He left without ___ anything. | to say | *saying | say >> without + -ing.",
      "_ I look forward to ___ (meet) you. = meeting >> look forward to + -ing.",
      "_ You can save money ___ (cook) at home. = by cooking >> by + -ing = el modo.",
      "s After [finish] work, I went home. = finishing >> after + -ing.",
      "o I'm tired of waiting for the bus. >> tired of + -ing.",
      "t Estoy pensando en mudarme. = I'm thinking of moving ; I am thinking of moving ; I'm thinking about moving >> think of + -ing.",
      "?2 Jenny suggested ___ to the party in a taxi. | to go | *going | go >> suggest + -ing (ejemplo del workbook, unidad 7).",
      "f2 I object to pay to park my car. = I object to paying to park my car >> object to + -ing.",
      "m good at = drawing ; interested in = learning ; afraid of = flying ; tired of = waiting >> Preposición + -ing.",
    ],
  },
  {
    n: 61, t: "be/get used to … (I'm used to …)", es: 'be / get used to', tags: ['ing-to', 'used-to'], pre: [18, 60],
    goals: ['Usar be used to + -ing (estar acostumbrado)', 'Usar get used to (acostumbrarse)', 'Distinguir de used to + infinitivo'],
    x: `**be used to something / doing something** = estar **acostumbrado**; ya no es extraño: *I'm used to driving on the left.* (to es preposición → **-ing**).

**get used to** = **acostumbrarse** (proceso): *It took me a long time to get used to the cold.*

No confundir con **used to do** (hábito pasado, unidad 18): *I used to live alone* (antes vivía solo) ≠ *I'm used to living alone* (estoy acostumbrado).

En la Workbook (Unidad 7): *I am used to doing the washing-up.*`,
    form: [['Forma', 'Significado'], ['be used to + -ing / sustantivo', 'estar acostumbrado'], ['get used to + -ing / sustantivo', 'acostumbrarse'], ['used to + verbo base', 'hábito pasado (unidad 18)']],
    uses: ['be used to = estar acostumbrado', 'get used to = acostumbrarse', 'Diferencia con used to do'],
    aff: ["I'm used to getting up early.|Estoy acostumbrado a levantarme temprano.", "You'll soon get used to the new system.|Pronto te vas a acostumbrar al nuevo sistema."],
    neg: ["I'm not used to working at night.|No estoy acostumbrado a trabajar de noche."],
    q: ['Have you got used to the food yet?|¿Ya te acostumbraste a la comida?'],
    err: ["I'm used to work late.|I'm used to working late.|be used to + -ing.", 'I used to living in London.|I used to live in London.|Hábito pasado: used to + verbo base.'],
    cmp: { w: [18], x: 'used to do (pasado) ≠ be used to doing (acostumbrado).' },
    ex: [
      "? I'm used to ___ on the left. | drive | *driving | drove >> be used to + -ing.",
      "? It took me months to ___ the climate. | used to | *get used to | be use to >> get used to = acostumbrarse.",
      "_ She isn't used to ___ (work) at night. = working >> be used to + -ing.",
      "? I ___ in Paris, but now I live in Rome. | am used to live | *used to live | am used to living >> Hábito pasado.",
      "s I'm not used to [eat] so much. = eating >> be used to + -ing.",
      "o You'll get used to the noise. >> get used to + sustantivo.",
      "t Estoy acostumbrado a vivir solo. = I'm used to living alone ; I am used to living alone ; I'm used to living on my own >> be used to + -ing.",
      "?2 'I'm used to it' means… | I did it in the past. | *It's not strange for me. | I use it. >> be used to = acostumbrado.",
      "f2 He is used to get up at 6. = He is used to getting up at 6 ; He's used to getting up at 6 >> be used to + -ing.",
    ],
  },
  {
    n: 62, t: 'Verb + preposition + -ing (succeed in -ing / insist on -ing etc.)', es: 'Verbo + preposición + -ing', tags: ['ing-to', 'prepositions'], pre: [60],
    goals: ['Usar verbo + preposición + -ing', 'Usar verbo + objeto + preposición + -ing', 'Practicar insist on, succeed in, apologise for…'],
    x: `Muchos verbos van con una **preposición** fija y luego **-ing**:
**insist on, succeed in, think of/about, dream of, approve of, decide against, feel like, look forward to, apologise for, talk about**.

*She insisted on paying. They succeeded in finding a solution. I don't feel like going out.*

Con **objeto**: **accuse sb of, suspect sb of, congratulate sb on, prevent/stop sb from, thank sb for, forgive sb for, warn sb against**:
*They accused him of stealing. Thank you for helping me. The rain prevented us from going out.*`,
    form: [['Verbo + prep.', 'Ejemplo'], ['insist on', 'He insisted on knowing.'], ['succeed in', 'We succeeded in winning.'], ['accuse sb of', 'They accused her of lying.'], ['thank sb for', 'Thanks for coming.']],
    uses: ['verbo + preposición + -ing', 'verbo + objeto + preposición + -ing'],
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
      "t Me disculpé por llegar tarde. = I apologised for being late ; I apologized for being late ; I apologised for arriving late >> apologise for + -ing.",
      "m insist = on ; succeed = in ; accuse sb = of ; thank sb = for >> Preposición correcta.",
      "?2 'Can I see the letter?' he insisted. → He insisted ___ the letter. | to see | *on seeing | seeing >> insist on (workbook, unidad 24).",
      "f2 We're thinking to move to the countryside. = We're thinking of moving to the countryside ; We're thinking about moving to the countryside ; We are thinking of moving to the countryside >> think of/about + -ing.",
    ],
  },
  {
    n: 63, t: "there's no point in -ing, it's worth -ing etc.", es: "there's no point / it's worth", tags: ['ing-to'], pre: [60],
    goals: ["Usar there's no point (in) -ing", "Usar it's worth / not worth -ing", 'Usar have trouble/difficulty -ing y spend/waste time -ing'],
    x: `Expresiones seguidas de **-ing**:
• **There's no point (in) -ing** = no tiene sentido: *There's no point in waiting.*
• **It's (not) worth -ing** = (no) vale la pena: *The museum is worth visiting. It's not worth repairing.*
• **have trouble / difficulty / a problem (in) -ing**: *I had difficulty finding the hotel.*
• **spend / waste time -ing**: *I spent hours trying to fix it.*
• **go -ing** para actividades: *go swimming, go shopping, go skiing.*`,
    form: [['Expresión', 'Ejemplo'], ["there's no point (in) -ing", "There's no point arguing."], ["it's worth -ing", "It's worth seeing."], ['have difficulty -ing', 'I had difficulty sleeping.'], ['spend time -ing', 'I spent the day reading.']],
    uses: ['no point / worth + -ing', 'difficulty/trouble + -ing', 'spend/waste time + -ing', 'go + -ing (actividades)'],
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
      "t Pasé la tarde leyendo. = I spent the afternoon reading >> spend + tiempo + -ing.",
      "?2 'Should we take a taxi?' 'No, it's only 5 minutes. It's not worth ___ a taxi.' | to take | *taking | take >> worth + -ing.",
      "f2 There's no point to call him. He's not at home. = There's no point calling him. He's not at home ; There's no point in calling him. He's not at home >> no point + -ing.",
    ],
  },
  {
    n: 64, t: 'to … , for … and so that …', es: 'to, for y so that (finalidad)', tags: ['ing-to', 'conjunctions'],
    goals: ['Expresar finalidad con to + infinitivo', 'Usar for + sustantivo', 'Usar so that con can/could/will/would'],
    x: `Para decir **para qué** hacemos algo usamos **to + infinitivo**: *I went out to buy some bread* (no *for buy*).

**for + sustantivo**: *I went out for some bread.* (o for + -ing para el uso de un objeto: *This knife is for cutting bread*).

**so that** + oración, sobre todo cuando:
• el **sujeto cambia**: *I gave him my number so that he could call me.*
• hay un **negativo**: *I hurried so that I wouldn't be late.*
Con so that solemos usar **can/could/will/would**.

En la Workbook: *I'm going to town to buy a new jumper.*`,
    form: [['Forma', 'Ejemplo'], ['to + verbo', 'I came to see you.'], ['for + sustantivo', 'I came for a visit.'], ['so that + sujeto + can/could', 'I left early so that I could catch the bus.']],
    uses: ['Finalidad: to + infinitivo', 'for + sustantivo', 'so that con cambio de sujeto o negativa'],
    aff: ["I'm saving money to buy a car.|Ahorro para comprarme un auto.", 'We went out for dinner.|Salimos a cenar.', 'Speak slowly so that everybody can understand.|Hablá despacio para que todos entiendan.'],
    neg: ["I wrote it down so that I wouldn't forget.|Lo anoté para no olvidarme."],
    q: ['Why did you go to the bank? – To get some money.|¿Para qué fuiste al banco? – Para sacar plata.'],
    err: ['I went to the shop for buy milk.|I went to the shop to buy milk.|Finalidad con verbo → to.', "I'm going to town for to buy a jumper.|I'm going to town to buy a jumper.|Sin for antes de to."],
    ex: [
      "? I went to the bank ___ some money. | for get | *to get | for getting >> Finalidad: to + verbo.",
      "? We went to a restaurant ___ dinner. | to | *for | so that >> for + sustantivo.",
      "_ I'll give you my number ___ you can call me. = so that ; so >> Cambio de sujeto: so that.",
      "_ I left early ___ I wouldn't miss the train. = so that ; so >> so that + negativo.",
      "s She came to London [for] study English. = to >> Finalidad con verbo: to.",
      "o I'm learning English to get a better job. >> to + verbo.",
      "t Ahorro para viajar. = I'm saving to travel ; I am saving to travel ; I'm saving money to travel ; I'm saving up to travel >> Finalidad: to.",
      "?2 I'm going to town ___ a new jumper. | for buying | *to buy | for to buy >> Workbook unidad 7.",
      "f2 I turned down the music so that the baby can't wake up. = I turned down the music so that the baby wouldn't wake up ; I turned down the music so the baby wouldn't wake up ; I turned the music down so that the baby wouldn't wake up >> so that + would (pasado).",
    ],
  },
  {
    n: 65, t: 'Adjective + to …', es: 'Adjetivo + to', tags: ['ing-to', 'adjectives'],
    goals: ['Usar It is + adjetivo + to', 'Usar sujeto + is + adjetivo + to (She is easy to talk to)', 'Usar the first/last/next + to'],
    x: `**It's + adjetivo + (for sb) + to + verbo**: *It's difficult to understand him. It's easy for me to get there.*

También podemos poner el objeto como sujeto: *He is difficult to understand* (= It's difficult to understand him). Así con **easy, hard, difficult, impossible, nice, safe, dangerous, cheap, interesting**.

**It's nice/kind/silly of sb to do**: *It was kind of you to help me.*

**sorry / glad / surprised / pleased + to**: *I'm glad to hear that.*

**the first / the last / the next / the only + to**: *She was the first person to arrive.*`,
    form: [['Estructura', 'Ejemplo'], ["It's + adj + to", "It's hard to believe."], ['sujeto + is + adj + to', 'This book is easy to read.'], ['It was kind of you to…', 'It was kind of you to come.'], ['the first to', 'He was the first to leave.']],
    uses: ["It's + adjetivo + to", 'Sujeto + adjetivo + to', 'kind/nice of sb to', 'the first/last/only + to'],
    aff: ["It's easy to make mistakes.|Es fácil cometer errores.", 'This question is hard to answer.|Esta pregunta es difícil de responder.', 'It was nice of you to call.|Fue muy amable de tu parte llamar.'],
    neg: ["It's not safe to swim here.|No es seguro nadar acá."],
    q: ['Who was the last person to leave?|¿Quién fue el último en irse?'],
    err: ['This book is difficult to understand it.|This book is difficult to understand.|Sin it al final.', 'It was kind for you to help me.|It was kind of you to help me.|kind of you.'],
    ex: [
      "? Her accent is difficult to ___. | understand it | *understand | understanding >> Sin it al final.",
      "? It was very kind ___ you to help me. | for | *of | to >> kind of sb.",
      "_ He was the first person ___ (arrive). = to arrive >> the first + to.",
      "_ I'm glad ___ (hear) that you're feeling better. = to hear >> glad + to.",
      "s This river isn't safe [swimming] in. = to swim >> adjetivo + to.",
      "o It's easy to get lost in this city. >> It's + adj + to.",
      "t Es difícil de creer. = It's hard to believe ; It's difficult to believe ; It is hard to believe ; It is difficult to believe >> It's + adj + to.",
      "?2 'It's impossible to answer this question.' → This question ___. | *is impossible to answer | is impossible to answer it | impossible to answer >> Objeto como sujeto.",
      "f2 It was silly for me to forget. = It was silly of me to forget >> silly of sb.",
    ],
  },
  {
    n: 66, t: 'to … (afraid to do) and preposition + -ing (afraid of -ing)', es: 'afraid to / afraid of -ing', tags: ['ing-to', 'prepositions'], pre: [60, 65],
    goals: ['Distinguir afraid to do y afraid of doing', 'Distinguir interested to y interested in', 'Usar sorry to / sorry for'],
    x: `**afraid to do** = no quiero hacerlo **porque es peligroso** (decisión): *I was afraid to go out alone.*
**afraid of doing** = miedo de que **algo pase sin querer**: *I was afraid of falling* (no lo decidiría).

**interested in doing** = interesado en algo; **interested to hear/know/see** = me interesó saber: *I'd be interested to hear your opinion.*

**sorry to** = lamento (algo que pasa ahora o una noticia): *Sorry to bother you.* **sorry for doing** = disculpa por algo hecho: *I'm sorry for shouting.*

**certain/sure to** = seguro que pasará; **certain/sure of** = el que habla está seguro.`,
    form: [['Forma', 'Significado'], ['afraid to do', 'no hacerlo por miedo'], ['afraid of doing', 'miedo de que pase'], ['interested in doing', 'interés general'], ['sorry for doing', 'disculpa por algo hecho']],
    uses: ['afraid to / afraid of -ing', 'interested in / interested to', 'sorry to / sorry for'],
    aff: ['I was afraid to tell him the truth.|Tenía miedo de decirle la verdad.', 'I was afraid of losing my job.|Tenía miedo de perder el trabajo.', "I'm interested in learning Chinese.|Me interesa aprender chino."],
    neg: ["Don't be afraid to ask questions.|No tengas miedo de hacer preguntas."],
    q: [],
    err: ["I'm interested to learn French in general.|I'm interested in learning French.|Interés general → in + -ing.", "I'm sorry to shout at you yesterday.|I'm sorry for shouting at you yesterday.|Algo ya hecho → sorry for + -ing."],
    ex: [
      "? The path was icy, so we walked carefully. We were afraid ___. | to fall | *of falling | falling >> Algo que podría pasar sin querer.",
      "? She was afraid ___ alone at night. (she decided not to) | of going out | *to go out | going out >> Decisión por miedo: afraid to.",
      "_ I'm interested ___ (learn) more about history. = in learning >> interested in + -ing.",
      "_ I'm sorry ___ (bother) you, but can I ask a question? = to bother >> sorry to (ahora).",
      "s I'm sorry for [be] late yesterday. = being >> sorry for + -ing.",
      "o I'd be interested to hear your opinion. >> interested to hear.",
      "t Tengo miedo de perder el avión. = I'm afraid of missing the plane ; I am afraid of missing the plane ; I'm afraid of missing my flight >> afraid of + -ing (algo involuntario).",
      "?2 'Don't be afraid ___ for help.' | of asking | *to ask | ask >> Decisión: afraid to.",
      "f2 He is sure of win. = He is sure to win ; He's sure to win >> sure to = seguro que va a pasar.",
    ],
  },
  {
    n: 67, t: 'see somebody do and see somebody doing', es: 'see somebody do / doing', tags: ['ing-to'],
    goals: ['Usar see/hear/watch + objeto + verbo base (acción completa)', 'Usar see/hear + objeto + -ing (acción en curso)'],
    x: `Con **see, hear, watch, notice, feel, smell** podemos usar:

• **objeto + verbo base** = vimos la acción **completa**, de principio a fin: *I saw him get into the car and drive away.*
• **objeto + -ing** = vimos/oímos a alguien **en el medio** de la acción: *I saw him walking along the street* (no vi toda la caminata).

*I heard a girl scream* (un grito corto, completo) / *I heard her singing* (estaba cantando).`,
    form: [['Estructura', 'Ejemplo'], ['see + obj + verbo', 'I saw her leave.'], ['see + obj + -ing', 'I saw her leaving.'], ['hear + obj + verbo', 'I heard the door close.'], ['smell + obj + -ing', 'I can smell something burning.']],
    uses: ['Acción completa → verbo base', 'Acción en curso → -ing'],
    aff: ['I saw her cross the road.|La vi cruzar la calle.', 'I heard someone shouting.|Escuché a alguien gritando.', 'Can you smell something burning?|¿Sentís olor a quemado?'],
    neg: ["I didn't notice him leave.|No me di cuenta de que se fue."],
    q: ['Did you see the accident happen?|¿Viste ocurrir el accidente?'],
    err: ['I saw him to leave.|I saw him leave.|see + objeto + verbo sin to.', 'I heard her to sing.|I heard her singing.|hear + objeto + -ing o verbo base.'],
    ex: [
      "? I saw Tom ___ the bus and drive away. | to get off | *get off | got off >> Acción completa: verbo base.",
      "? When I walked past, I heard them ___ an argument. | to have | *having | had >> En el medio de la acción.",
      "_ I can smell something ___ (burn). = burning >> smell + objeto + -ing.",
      "_ Did you hear the phone ___ (ring)? = ring ; ringing >> Ambos posibles.",
      "s I watched them [played] football. = playing >> watch + objeto + -ing (o verbo base: play).",
      "o I felt something touch my arm. >> Acción corta completa.",
      "t La vi bailando. = I saw her dancing >> see + objeto + -ing.",
      "?2 'I saw him cross the road' means… | *I saw the whole action. | I saw part of it. | I crossed the road. >> verbo base = acción completa.",
      "f2 We heard somebody to scream. = We heard somebody scream ; We heard somebody screaming >> Sin to.",
    ],
  },
  {
    n: 68, t: '-ing clauses (He hurt his knee playing football.)', es: 'Cláusulas con -ing', tags: ['ing-to'],
    goals: ['Usar cláusulas -ing para acciones simultáneas', 'Usar having done para acciones previas', 'Usar -ing para explicar causas'],
    x: `Una **cláusula -ing** puede describir algo que pasa **al mismo tiempo**: *Kate is in the kitchen making coffee. Jim hurt his knee playing football* (mientras jugaba).

Si una acción ocurre **antes** de otra, usamos **having + participio**: *Having finished her work, she went home.* (o simplemente *After finishing…*)

También para **explicar una causa**: *Feeling tired, I went to bed early* (como me sentía cansado). *Not having a car, she finds it hard to get around.*`,
    form: [['Uso', 'Ejemplo'], ['Simultáneo', 'She walked out smiling.'], ['Mientras', 'He cut himself shaving.'], ['Anterior', 'Having eaten, we left.'], ['Causa', "Being tired, I didn't go."]],
    uses: ['Acciones simultáneas', 'having + participio = antes', 'Causa (= because/as)'],
    aff: ['She sat in the garden reading a book.|Estaba sentada en el jardín leyendo un libro.', 'Having finished the report, I sent it to my boss.|Después de terminar el informe, se lo mandé a mi jefe.', 'Feeling hungry, we stopped for lunch.|Como teníamos hambre, paramos a almorzar.'],
    neg: ["Not knowing what to do, I called my mother.|Sin saber qué hacer, llamé a mi mamá."],
    q: [],
    err: ['Finished his work, he went out.|Having finished his work, he went out.|Acción anterior → having + participio.', 'Not know the answer, I said nothing.|Not knowing the answer, I said nothing.|Causa → not + -ing.'],
    ex: [
      "? He hurt his back ___ the piano. | moved | *moving | to move >> Mientras: -ing.",
      "? ___ the letter, she put it in an envelope. | Writing | *Having written | Written >> Acción anterior.",
      "_ ___ (feel) tired, I went to bed early. = Feeling >> Causa: -ing.",
      "_ ___ (not/have) a car, she goes everywhere by bike. = Not having >> not + -ing.",
      "s [Finish] the meal, they left the restaurant. = Having finished >> Acción anterior.",
      "o Jim cut himself shaving this morning. >> -ing = mientras.",
      "t Como no sabía su número, no pude llamarlo. = Not knowing his number, I couldn't call him ; Not knowing his number, I could not call him >> Causa negativa.",
      "?2 'Being a student, she gets a discount.' means… | *Because she is a student… | Although she is a student… | When she becomes a student… >> -ing = causa.",
      "f2 Having went to bed late, I was tired. = Having gone to bed late, I was tired >> having + participio.",
    ],
  },
];

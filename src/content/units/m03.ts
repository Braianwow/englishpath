import type { UnitSrc } from '../dsl';

// Module 3 — Future (EGU units 19–25)
export const m03: UnitSrc[] = [
  {
    n: 19, t: 'Present tenses (I am doing / I do) for the future', es: 'Presentes con valor de futuro', tags: ['future', 'present-continuous', 'present-simple'], pre: [1, 2],
    goals: ['Usar el present continuous para planes organizados', 'Usar el present simple para horarios', 'Elegir entre ambos'],
    x: `**Present continuous** para el futuro = algo que **ya decidiste y organizaste** (hay un arreglo: entradas, citas, reservas). *I'm meeting Kate on Saturday.* *What are you doing tomorrow?*

**Present simple** para el futuro = **horarios y programas** fijos (transporte, espectáculos, clases): *The train leaves at 7.15.* *The film starts at 8.*

Para planes personales normalmente **no** usamos el present simple: *I'm going to the cinema tonight* (no *I go*).`,
    form: [['Uso', 'Tiempo', 'Ejemplo'], ['Plan personal organizado', 'Present continuous', "I'm leaving tomorrow."], ['Horario / programa', 'Present simple', 'The plane lands at 10.']],
    uses: ['Planes y citas organizadas → am/is/are + -ing', 'Horarios, programas, calendarios → present simple'],
    aff: ["I'm playing tennis with Ben tomorrow.|Mañana juego al tenis con Ben.", 'The concert starts at 8 p.m.|El concierto empieza a las 8.', "We're going to Rome next week.|La semana que viene vamos a Roma."],
    neg: ["I'm not working next week.|La semana que viene no trabajo."],
    q: ['What are you doing this evening?|¿Qué hacés esta noche?', 'What time does the train leave?|¿A qué hora sale el tren?'],
    err: ['I go to a party tonight.|I am going to a party tonight.|Plan personal → present continuous.', 'What time is the film starting tomorrow?|What time does the film start tomorrow?|Programa → present simple (más natural).'],
    cmp: { w: [20, 23], x: 'going to = intención decidida (quizá sin organizar). Present continuous = ya está organizado.' },
    ex: [
      "? ___ anything this weekend? | Do you do | *Are you doing | Will you do >> Preguntar por planes → present continuous.",
      "? The train ___ at 8.30 tomorrow morning. | is leaving | *leaves | leave >> Horario fijo → present simple.",
      "_ I ___ (see) the dentist on Friday. I've made an appointment. = 'm seeing ; am seeing >> Cita organizada.",
      "_ What time ___ the exhibition ___ (open) tomorrow? = does / open >> Horario → present simple.",
      "s We [go] to a wedding next Saturday. = are going >> Plan organizado → are going.",
      "o I'm having dinner with Sue tonight. >> Plan → present continuous.",
      "t Mañana a la noche vamos al teatro. = We're going to the theatre tomorrow night ; We are going to the theatre tomorrow night ; We're going to the theater tomorrow night >> Plan organizado.",
      "?2 'Tim is playing football tomorrow' means… | Tim plays every day. | *Tim has arranged to play tomorrow. | Tim is playing now. >> Arreglo futuro.",
      "f2 I meet my friends at 7 this evening. = I'm meeting my friends at 7 this evening ; I am meeting my friends at 7 this evening >> Plan personal → continuo.",
      "d2 A: Are you free on Sunday? B: No, I ___ my grandparents. | visit | *'m visiting | visited >> Plan ya organizado.",
    ],
  },
  {
    n: 20, t: "I'm going to (do)", es: 'be going to', tags: ['future', 'going-to'],
    goals: ['Expresar intenciones decididas', 'Hacer predicciones basadas en evidencia presente', 'Usar was/were going to'],
    x: `**be going to + infinitivo** = algo que **ya decidiste hacer** (intención): *I'm going to buy a new phone.*

También para **predicciones** cuando **hay evidencia ahora**: *Look at those clouds! It's going to rain.* *I feel sick. I think I'm going to faint.*

**was/were going to** = intención en el pasado que **no se cumplió**: *We were going to travel by train, but we went by car.*`,
    form: [['Sujeto', 'am/is/are', 'going to', 'verbo'], ['I', 'am', 'going to', 'study'], ['she', 'is', 'going to', 'leave'], ['they', 'are', 'going to', 'win']],
    uses: ['Intención ya decidida', 'Predicción con evidencia presente', 'was/were going to = plan pasado que no ocurrió'],
    aff: ["I'm going to learn to drive.|Voy a aprender a manejar.", "Look at the sky. It's going to rain.|Mirá el cielo. Va a llover.", 'I was going to call you, but I forgot.|Te iba a llamar, pero me olvidé.'],
    neg: ["I'm not going to accept the offer.|No voy a aceptar la oferta."],
    q: ['What are you going to wear to the party?|¿Qué te vas a poner para la fiesta?'],
    err: ['I going to study medicine.|I am going to study medicine.|Falta el verbo be.', "Look! That car is going crash!|Look! That car is going to crash!|going to + infinitivo."],
    cmp: { w: [21, 23], x: 'going to = decidido antes de hablar. will = decidido en el momento de hablar.' },
    ex: [
      "? I've decided. I ___ a new job. | will look for | *'m going to look for | look for >> Intención ya decidida.",
      "? Look out! You ___ the glass! | will drop | *'re going to drop | drop >> Evidencia ahora: predicción.",
      "_ We ___ (go) by train, but then we decided to drive. = were going to go >> Plan pasado que no se cumplió.",
      "_ ___ you ___ (watch) the match tonight? = Are / going to watch >> Pregunta: Are + going to.",
      "s She is [go] to have a baby. = going >> be going to.",
      "o What are you going to do this summer? >> Wh- + are + going to.",
      "t No voy a decir nada. = I'm not going to say anything ; I am not going to say anything >> Intención negativa.",
      "?2 'I feel terrible.' 'You look pale. I think you ___.' | will faint | *'re going to faint | faint >> Evidencia presente (está pálido).",
      "f2 I was go to phone you, but I didn't have time. = I was going to phone you, but I didn't have time ; I was going to phone you but I didn't have time >> was going to + verbo.",
      "b2 it / be / a hot day / look at the sun = It's going to be a hot day. Look at the sun ; It is going to be a hot day. Look at the sun >> Predicción con evidencia.",
    ],
  },
  {
    n: 21, t: 'will and shall 1', es: 'will y shall (1)', tags: ['future', 'will'],
    goals: ['Usar will para decisiones en el momento', 'Ofrecer, prometer, aceptar o negarse con will', 'Usar shall I/we para ofrecer y sugerir'],
    x: `Usamos **will** cuando **decidimos en el momento de hablar**: *'The phone's ringing.' 'I'll get it.'*

También para **ofrecer**, **acordar**, **prometer** y pedir algo: *I'll help you. I promise I won't be late. Will you shut the door, please?*

**won't** = negarse a hacer algo: *The car won't start.*

**Shall I…? / Shall we…?** para ofrecer o sugerir: *Shall I open the window? Shall we go out tonight?*

No uses will para cosas ya decididas: *I'm working tomorrow* (no *I'll work*).`,
    form: [['Afirmativa', 'Negativa', 'Pregunta'], ["I'll (will) help", "I won't (will not) tell", 'Will you…?'], ['', '', 'Shall I / Shall we…?']],
    uses: ['Decisión en el momento', 'Ofrecer, acordar, prometer, pedir', "won't = negarse", 'Shall I/we…? = ofrecer/sugerir'],
    aff: ["I'm thirsty. – I'll get you a drink.|Tengo sed. – Te traigo algo de beber.", "I'll lend you some money.|Te presto plata.", "I promise I'll phone you.|Prometo que te llamo."],
    neg: ["The door won't open.|La puerta no abre.", "I won't tell anyone.|No se lo voy a contar a nadie."],
    q: ['Will you marry me?|¿Te casás conmigo?', 'Shall I carry your bag?|¿Te llevo el bolso?'],
    err: ["I'll go to the dentist tomorrow (appointment made).|I'm going to the dentist tomorrow.|Plan ya organizado → present continuous.", 'Do I open the window?|Shall I open the window?|Ofrecimiento → Shall I…?'],
    cmp: { w: [20, 23], x: "will = decisión ahora; going to / present continuous = decisión previa." },
    ex: [
      "? 'Did you call Lucy?' 'Oh no, I forgot. I ___ her now.' | 'm calling | *'ll call | call >> Decisión en el momento.",
      "? 'It's cold in here.' '___ close the window?' | Will I | *Shall I | Do I >> Ofrecimiento: Shall I…?",
      "_ I've tried to start the car, but it ___ (not/start). = won't start ; will not start >> won't = se niega a.",
      "_ Don't worry, I ___ (not/tell) anybody. = won't tell ; will not tell >> Promesa negativa.",
      "s I promise I [don't] tell anyone. = won't >> Promesa sobre el futuro → won't.",
      "m I'll help you = ofrecimiento ; I promise I'll come = promesa ; Shall we go? = sugerencia ; The car won't start = se niega a funcionar >> Usos de will/shall.",
      "t Te ayudo con los platos. = I'll help you with the dishes ; I will help you with the dishes ; I'll help you with the washing-up >> Ofrecimiento → will.",
      "?2 'What would you like?' 'I ___ the fish, please.' | 'm having | *'ll have | have >> Decisión en el momento (restaurante).",
      "f2 I'll go to my cousin's wedding on Saturday. We've already bought the tickets. = I'm going to my cousin's wedding on Saturday. We've already bought the tickets ; I am going to my cousin's wedding on Saturday. We've already bought the tickets >> Plan organizado.",
      "d2 A: Where shall we eat? B: I don't know. ___ that new Italian place? | Will we try | *Shall we try | Do we try >> Sugerencia: Shall we…?",
    ],
  },
  {
    n: 22, t: 'will and shall 2', es: 'will y shall (2): predicciones', tags: ['future', 'will'], pre: [21],
    goals: ['Predecir el futuro con will', 'Usar I think / probably / I’m sure + will', 'Distinguir will de planes ya organizados'],
    x: `Usamos **will** para **predecir** o decir lo que **creemos** que pasará: *Kate has lived abroad a long time. When she comes back, she'll find a lot of changes.*

Es muy común con: **I think / I don't think, probably, I'm sure, I expect, I wonder, I bet**: *I think Kelly will pass the exam. I don't think it will rain.* (mejor que *I think it won't*).

**will be** = estará: *Don't phone at 8. They'll be busy.*

No usamos will para planes ya organizados ni para lo que alguien ya decidió (unidades 19–20).`,
    form: [['Expresión', 'Ejemplo'], ['I think … will', 'I think you’ll like it.'], ["I don't think … will", "I don't think she'll come."], ['probably', "He'll probably be late."]],
    uses: ['Predicciones y opiniones sobre el futuro', 'Con I think / probably / I’m sure', 'will be para situaciones futuras'],
    aff: ["I think you'll enjoy the film.|Creo que la película te va a gustar.", "Tom will probably be late.|Tom probablemente llegue tarde.", "I'm sure you'll pass.|Seguro que aprobás."],
    neg: ["I don't think it will rain.|No creo que llueva."],
    q: ['When do you think it will be ready?|¿Cuándo creés que estará listo?'],
    err: ["I think it won't rain.|I don't think it will rain.|Lo natural: I don't think … will.", "Tom will probably to be late.|Tom will probably be late.|will + verbo base, sin to."],
    cmp: { w: [20, 23], x: 'Predicción con evidencia presente → going to. Opinión/creencia → will.' },
    ex: [
      "? I think the weather ___ nice tomorrow. | is | *will be | is being >> Predicción/opinión.",
      "? I ___ it will rain. | think not | *don't think | not think >> I don't think + will.",
      "_ Don't call them at 9. They ___ (be) asleep. = 'll be ; will be >> Predicción sobre una situación futura.",
      "_ Where do you think you ___ (live) in ten years? = will live ; 'll live >> Predicción.",
      "s He'll probably [arrives] at six. = arrive >> will + verbo base (sin -s).",
      "o I'm sure you will find a job. >> I'm sure + will.",
      "t Probablemente llegue tarde. = I'll probably be late ; I will probably be late >> probably va después de will.",
      "?2 'Shall I come with you?' 'No, it's all right. I ___ alone.' | 'm going | *'ll go | go >> Decisión/reacción en el momento.",
      "f2 She will probably to pass the exam. = She will probably pass the exam ; She'll probably pass the exam >> will + verbo base.",
      "e2 I bet he'll forget. | *Apuesto a que se va a olvidar. | Apostó que se olvidó. | Se olvida siempre. >> I bet + will.",
    ],
  },
  {
    n: 23, t: "I will and I'm going to", es: "will vs. going to", tags: ['future', 'will', 'going-to'], pre: [20, 21, 22],
    goals: ['Distinguir decisiones en el momento (will) de decisiones previas (going to)', 'Elegir el futuro para predicciones', 'Corregir confusiones típicas'],
    x: `**Acciones futuras**:
• **will** → decidimos **en el momento de hablar**: *'Gary has phoned.' 'Oh, I'll call him back.'*
• **going to** → **ya lo habíamos decidido** antes: *I'm going to call Gary back later* (ya lo pensé).

**Predicciones**: ambas son posibles muchas veces (*It will / It's going to be a hot summer*). Con **evidencia presente** (lo que vemos ahora) usamos **going to**: *Look at those black clouds. It's going to rain.* Con opiniones (I think…), **will**.`,
    form: [['', 'will', 'going to'], ['Decisión', 'en el momento', 'ya tomada antes'], ['Predicción', 'opinión, creencia', 'evidencia presente']],
    uses: ['Decisión espontánea → will', 'Intención previa → going to', 'Evidencia visible → going to'],
    aff: ["'We need some bread.' 'I'll get some.'|'Necesitamos pan.' 'Voy a buscar.'", "I'm going to paint the kitchen this weekend.|Este fin de semana voy a pintar la cocina."],
    neg: ["I'm not going to come to the party.|No voy a ir a la fiesta."],
    q: ['What are you going to do with the money?|¿Qué vas a hacer con la plata?'],
    err: ["'There's no milk.' 'I'm going to buy some.' (decided now)|'There's no milk.' 'I'll buy some.'|Decisión en el momento → will.", "Look at the sky! It will rain.|Look at the sky! It's going to rain.|Evidencia presente → going to."],
    cmp: { w: [19, 20, 21], x: 'Resumen: will (decisión ahora / opinión), going to (intención / evidencia), present continuous (plan organizado).' },
    ex: [
      "? 'The phone's ringing.' 'OK, I ___ it.' | 'm going to answer | *'ll answer | answer >> Decisión en el momento.",
      "? 'Why are you buying paint?' 'I ___ the bedroom.' | 'll paint | *'m going to paint | paint >> Decisión previa.",
      "? Oh no, look at the time! We ___ late. | will be | *'re going to be | are >> Evidencia presente.",
      "_ 'I need some help.' 'Wait, I ___ (help) you.' = 'll help ; will help >> Ofrecimiento espontáneo.",
      "_ 'Have you decided what to study?' 'Yes, I ___ (study) law.' = 'm going to study ; am going to study >> Ya decidido.",
      "s Look at those clouds! It's [will] rain. = going to >> Evidencia presente → It's going to rain.",
      "t Ya decidí: voy a vender el auto. = I've decided: I'm going to sell the car ; I have decided. I'm going to sell the car ; I've decided. I'm going to sell the car >> Intención previa.",
      "?2 'Did you remember to buy coffee?' 'Oh no, I forgot. I ___ some later.' | 'm going to buy | *'ll buy | buy >> Decide en el momento.",
      "f2 I've made a decision. I'll leave my job. = I've made a decision. I'm going to leave my job ; I have made a decision. I am going to leave my job >> Decisión ya tomada.",
      "d2 A: Are you free tonight? B: Sorry, I ___ to the cinema with Sam. | 'll go | *'m going | go >> Plan organizado.",
    ],
  },
  {
    n: 24, t: 'will be doing and will have done', es: 'Futuro continuo y futuro perfecto', tags: ['future', 'will'], pre: [21],
    goals: ['Usar will be + -ing para acciones en curso en el futuro', 'Usar will have + participio para acciones completas antes de un momento futuro', 'Preguntar por planes con will you be -ing'],
    x: `**will be + -ing** = en un momento del futuro, estaremos **en el medio** de una acción: *This time tomorrow I'll be lying on the beach.*

También para cosas que ya son **parte de lo planeado/normal**: *I'll be going to the shops later. Can I get you anything?* Y para preguntar con amabilidad por planes: *Will you be using your car tonight?*

**will have + participio** = algo estará **terminado antes** de un momento futuro: *By the time you get here, we'll have finished dinner.* *Next year they'll have been married for 25 years.*`,
    form: [['Forma', 'Estructura', 'Ejemplo'], ['Futuro continuo', 'will be + -ing', "I'll be working at 10."], ['Futuro perfecto', 'will have + participio', "I'll have finished by 10."]],
    uses: ['Acción en curso en un momento futuro', 'Acciones ya planeadas / preguntas corteses', 'Algo terminado antes de un momento futuro (by…)'],
    aff: ["This time next week I'll be flying to Peru.|La semana que viene a esta hora voy a estar volando a Perú.", "By 2030 they'll have built the new airport.|Para 2030 habrán construido el nuevo aeropuerto."],
    neg: ["Don't call at 7. We won't have finished dinner.|No llames a las 7. No habremos terminado de cenar."],
    q: ['Will you be using the car this evening?|¿Vas a usar el auto esta noche?'],
    err: ['By Friday I will finish the report.|By Friday I will have finished the report.|by + momento futuro → will have done.', "At 9 I'll work.|At 9 I'll be working.|En curso en un momento futuro → will be -ing."],
    cmp: { w: [21, 22], x: 'will do = acción completa; will be doing = en curso; will have done = terminada antes.' },
    ex: [
      "? Don't phone me between 7 and 8. We ___ dinner. | will have | *'ll be having | have >> En curso en ese momento.",
      "? By the time you arrive, I ___ the work. | will finish | *'ll have finished | finish >> Terminado antes de un momento futuro.",
      "_ This time tomorrow I ___ (lie) on a beach. = 'll be lying ; will be lying >> Acción en curso en el futuro.",
      "_ Next year we ___ (be) married for ten years. = 'll have been ; will have been >> Duración hasta un momento futuro.",
      "s By the end of the year I will [finish] this course. = have finished >> by + futuro → will have finished.",
      "o Will you be going to the shops later? >> Pregunta cortés sobre planes.",
      "t Para el lunes habré leído el libro. = By Monday I'll have read the book ; By Monday I will have read the book ; I'll have read the book by Monday ; I will have read the book by Monday >> will have + participio.",
      "?2 'Can we meet at 10?' 'Sorry, I ___ a class then.' | 'll have taught | *'ll be teaching | teach >> En curso a esa hora.",
      "f2 By 2040 scientists will find a cure. = By 2040 scientists will have found a cure >> by + momento futuro.",
      "e2 She'll have left by then. | *Para entonces ya se habrá ido. | Se va a ir entonces. | Se estaba yendo entonces. >> will have done.",
    ],
  },
  {
    n: 25, t: "when I do and when I've done, if and when", es: 'when / if + presente', tags: ['future', 'conjunctions', 'time'], pre: [21],
    goals: ['Usar presente (no will) después de when, if, as soon as, until, before…', 'Usar present perfect para algo terminado antes', 'Distinguir if de when'],
    x: `Después de **when, while, before, after, as soon as, until/till, if** hablando del **futuro**, usamos el **presente**, **no will**: *I'll call you **when I get** home* (no *when I'll get*).

Para mostrar que algo estará **terminado** antes de la otra acción usamos el **present perfect**: *When I've read this book, I'll lend it to you.*

**if** = no sabemos si pasará; **when** = estamos seguros de que pasará: *If I'm late, start without me.* / *I'm going shopping. When I come back, we can have lunch.*`,
    form: [['Oración principal (futuro)', 'Conjunción + presente'], ["I'll call you", 'when I arrive.'], ['Wait here', 'until I come back.'], ["I'll lend you the book", "when I've finished it."]],
    uses: ['when/as soon as/until/before/after + presente con sentido futuro', 'when + present perfect = terminado antes', 'if = posible; when = seguro'],
    aff: ["I'll phone you as soon as I arrive.|Te llamo en cuanto llegue.", "Wait here until I come back.|Esperá acá hasta que vuelva.", "When I've finished, I'll help you.|Cuando termine, te ayudo."],
    neg: ["I won't go out until it stops raining.|No voy a salir hasta que pare de llover."],
    q: ['What will you do when you finish school?|¿Qué vas a hacer cuando termines la escuela?'],
    err: ["I'll call you when I'll get home.|I'll call you when I get home.|Después de when → presente.", "If it will rain, we'll stay in.|If it rains, we'll stay in.|Después de if → presente."],
    cmp: { w: [38], x: 'Igual que en el primer condicional: if + presente, will en la otra parte.' },
    ex: [
      "? I'll tell you when I ___ the results. | will get | *get | got >> when + presente con sentido futuro.",
      "_ We'll start as soon as everybody ___ (arrive). = arrives ; has arrived >> as soon as + presente.",
      "_ Don't go out until it ___ (stop) raining. = stops >> until + presente.",
      "? I'll lend you the book when I ___ reading it. | will finish | *'ve finished | finished >> Terminado antes: present perfect.",
      "? I'm going to the shops. ___ I come back, we'll have lunch. | If | *When | Unless >> Es seguro que vuelvo → when.",
      "s Wait here until I [will] come back. = (quitar will) >> Después de until usamos presente: until I come back.",
      "o I'll phone you when I get to the hotel. >> when + presente.",
      "t Te mando un mensaje cuando llegue. = I'll text you when I arrive ; I will text you when I arrive ; I'll send you a message when I arrive ; I'll text you when I get there >> when + presente.",
      "f2 Before you will leave, close the windows. = Before you leave, close the windows ; Before you leave close the windows >> before + presente.",
      "b2 if / you / need / help / call me = If you need help, call me ; If you need help call me ; Call me if you need help >> if + presente.",
    ],
  },
];

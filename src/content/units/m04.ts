import type { UnitSrc } from '../dsl';

// Module 4 — Modals (EGU units 26–37)
export const m04: UnitSrc[] = [
  {
    n: 26, t: 'can, could and (be) able to', es: 'can, could, be able to', tags: ['modals'],
    goals: ['Expresar habilidad y posibilidad con can/could', 'Usar be able to en tiempos que can no tiene', 'Distinguir could y was able to en el pasado'],
    x: `**can** = es posible / sé hacer algo: *I can swim. You can see the sea from here.*

**be able to** es posible pero **can** es más común en presente. Usamos **be able to** donde can no existe: infinitivo, present perfect, futuro: *I'd like to be able to play the piano. I haven't been able to sleep. You'll be able to walk soon.*

**could** = habilidad **general** en el pasado: *My grandfather could speak five languages.*

Para un **logro concreto** en una situación pasada (lo conseguiste) usamos **was/were able to** o **managed to**, no could: *The fire spread quickly, but everybody **was able to** escape.* En negativa, **couldn't** sirve para ambos: *I couldn't sleep.*`,
    form: [['Tiempo', 'Forma'], ['Presente', 'can / am able to'], ['Pasado (general)', 'could'], ['Pasado (logro concreto)', 'was able to / managed to'], ['Perfect / futuro / infinitivo', 'have been able to / will be able to / to be able to']],
    uses: ['Habilidad o posibilidad presente: can', 'Formas que can no tiene: be able to', 'Pasado general: could; logro concreto: was able to'],
    aff: ['I can play the guitar.|Sé tocar la guitarra.', "I haven't been able to sleep recently.|Últimamente no pude dormir.", 'They were able to escape from the fire.|Lograron escapar del incendio.'],
    neg: ["I couldn't find my keys.|No pude encontrar mis llaves."],
    q: ['Can you speak Japanese?|¿Hablás japonés?', 'Will you be able to come?|¿Vas a poder venir?'],
    err: ["I haven't could sleep.|I haven't been able to sleep.|can no tiene present perfect.", 'The fire was big, but we could escape.|The fire was big, but we were able to escape.|Logro concreto → was/were able to.'],
    cmp: { w: [27], x: 'could también se usa para posibilidades y sugerencias en presente (unidad 27).' },
    ex: [
      "? I'm sorry, I ___ come to your party next week. | can't to | *won't be able to | don't can >> Futuro: will be able to.",
      "_ I'd love to ___ (be able to) speak Chinese. = be able to >> Después de to: be able to.",
      "? When she was young, she ___ run very fast. | was able | *could | can >> Habilidad general pasada.",
      "? The water was cold, but we ___ swim to the boat. | could | *managed to | can >> Logro concreto: managed to / were able to.",
      "_ I ___ (not/see) anything. It was too dark. = couldn't see ; could not see >> couldn't sirve para habilidad general y concreta.",
      "s Ted hasn't been [can] to walk since the operation. = able >> have been able to (can no tiene present perfect).",
      "o Will you be able to help me tomorrow? >> Futuro: will be able to.",
      "t Hace semanas que no puedo dormir bien. = I haven't been able to sleep well for weeks ; I have not been able to sleep well for weeks >> present perfect: have been able to.",
      "f2 He tried hard and finally he could pass the exam. = He tried hard and finally he was able to pass the exam ; He tried hard and finally he managed to pass the exam >> Logro concreto.",
      "m can = habilidad presente ; could = habilidad general pasada ; was able to = logro concreto pasado ; will be able to = habilidad futura >> Formas de can.",
    ],
  },
  {
    n: 27, t: 'could (do) and could have (done)', es: 'could y could have', tags: ['modals'], pre: [26],
    goals: ['Usar could para posibilidades y sugerencias', 'Expresar posibilidades no realizadas con could have done', 'Usar couldn’t + comparativo'],
    x: `**could** = algo **posible** ahora o en el futuro, o una **sugerencia**: *We could go to the cinema tonight. It could rain later.*

También para cosas **no realistas**: *I'm so hungry I could eat a horse.*

**could have + participio** = algo era **posible en el pasado pero no ocurrió**: *I was so tired, I could have slept for a week. Why did you stay at a hotel? You could have stayed with us.*

**couldn't have done** = habría sido imposible: *We couldn't have done it without your help.*`,
    form: [['Forma', 'Significado'], ['could + verbo', 'posibilidad / sugerencia ahora o futuro'], ['could have + participio', 'posibilidad pasada no realizada'], ["couldn't have + participio", 'imposible en el pasado']],
    uses: ['Sugerencias (We could…)', 'Posibilidad presente/futura', 'could have done = podría haber (y no)'],
    aff: ['We could go out for dinner.|Podríamos salir a cenar.', 'You could have called me!|¡Me podrías haber llamado!', 'It could be true.|Podría ser verdad.'],
    neg: ["We couldn't have won without you.|No podríamos haber ganado sin vos."],
    q: ['Could it be a mistake?|¿Podría ser un error?'],
    err: ['You could come yesterday.|You could have come yesterday.|Posibilidad pasada no realizada → could have + participio.', 'I could have went.|I could have gone.|could have + participio.'],
    cmp: { w: [28, 29], x: 'could = posible; must = deducción segura; might = posibilidad.' },
    ex: [
      "? 'What shall we do tonight?' 'We ___ go to the beach.' | could have | *could | can't >> Sugerencia.",
      "_ Why did you take a taxi? I ___ (give) you a lift. = could have given >> Posibilidad pasada no realizada.",
      "? It was a dangerous road. You ___ had an accident. | could | *could have | can have >> could have + participio.",
      "_ I'm so tired, I ___ (sleep) for a week. = could sleep >> Exageración no realista.",
      "s We could [went] to the concert, but we stayed home. = have gone >> could have + participio.",
      "o You could have told me the truth. >> could have + participio.",
      "t Podríamos ir a la playa mañana. = We could go to the beach tomorrow >> Sugerencia: could.",
      "?2 The match was close. We ___ easily ___. | *could / have won | could / win | can / won >> could have won = podríamos haber ganado.",
      "f2 Thanks for your help. We couldn't do it without you. = Thanks for your help. We couldn't have done it without you ; Thanks for your help. We could not have done it without you >> Pasado: couldn't have done.",
      "e2 You could have been killed! | *¡Podrías haberte matado! | ¡Te mataron! | ¡Te podés matar! >> could have been + participio.",
    ],
  },
  {
    n: 28, t: "must and can't", es: "must y can't (deducción)", tags: ['modals'],
    goals: ['Deducir con seguridad con must', 'Negar con seguridad con can’t', 'Hacer deducciones sobre el pasado con must have / can’t have'],
    x: `**must** = estoy **seguro** de que algo es verdad (deducción lógica): *You've been travelling all day. You must be tired.*

**can't** = estoy **seguro** de que algo **no** es posible: *She can't be hungry. She's just eaten.* (no usamos mustn't para esto).

En el **pasado**: **must have + participio** / **can't have (couldn't have) + participio**: *The phone rang, but I didn't hear it. I must have been asleep.* *She walked past me. She can't have seen me.*

Estructura: *must be -ing* para acciones en curso: *Someone must be playing music.*`,
    form: [['', 'Presente', 'Pasado'], ['Seguro que sí', 'must be / must do', 'must have done'], ['Seguro que no', "can't be / can't do", "can't have done / couldn't have done"]],
    uses: ['Deducción afirmativa: must', "Deducción negativa: can't", 'Deducción pasada: must have / can’t have + participio'],
    aff: ["You must be tired after the trip.|Debés estar cansado después del viaje.", "I've lost my phone. I must have left it on the bus.|Perdí el teléfono. Debo haberlo dejado en el colectivo."],
    neg: ["That can't be true.|Eso no puede ser cierto.", "He can't have finished already. He only started ten minutes ago.|No puede haber terminado ya."],
    q: ['Where can she be?|¿Dónde puede estar?'],
    err: ["She mustn't be at home. The lights are off.|She can't be at home. The lights are off.|Deducción negativa → can't.", 'He must be left early.|He must have left early.|Pasado → must have + participio.'],
    cmp: { w: [29, 31], x: 'must de deducción ≠ must de obligación (unidad 31). might = posible, no seguro.' },
    ex: [
      "? You've been walking all day. You ___ tired. | can't be | *must be | must have been >> Deducción segura sobre el presente.",
      "? Mark ___ hungry. He's just had a big lunch. | mustn't be | *can't be | must be >> Deducción negativa: can't.",
      "_ The ground is wet. It ___ (rain) last night. = must have rained >> Deducción pasada.",
      "_ She passed me without speaking. She ___ (see) me. = can't have seen ; couldn't have seen >> Deducción negativa pasada.",
      "s Kate [mustn't] be at work. Her car is outside her house. = can't >> Deducción negativa: can't.",
      "o He must have forgotten about the meeting. >> must have + participio.",
      "t Debés estar bromeando. = You must be joking >> must be + -ing (deducción).",
      "?2 'Jane hasn't answered my messages.' 'She ___ busy.' | can't be | *must be | must have >> Deducción plausible.",
      "f2 The door was unlocked. Somebody must forget to lock it. = The door was unlocked. Somebody must have forgotten to lock it >> Deducción pasada.",
      "m must be = seguro que es ; can't be = seguro que no es ; must have been = seguro que fue ; can't have been = seguro que no fue >> Grados de certeza.",
    ],
  },
  {
    n: 29, t: 'may and might 1', es: 'may y might (1)', tags: ['modals'],
    goals: ['Expresar posibilidad con may/might', 'Usar may/might have + participio para el pasado', 'Distinguir might no de can’t'],
    x: `**may** y **might** = **es posible** que algo sea verdad o que pase: *It may be true. She might be at work.*

Negativa: **may not / might not (mightn't)** = es posible que no: *She might not come.*

Para el **pasado**: **may / might have + participio**: *I can't find my bag. I might have left it in the shop.*

**could** también puede expresar posibilidad, pero **couldn't** = imposible: *She might not be at home* (quizás no) ≠ *She couldn't be at home* (imposible).`,
    form: [['Presente / futuro', 'Pasado'], ['may/might + verbo', 'may/might have + participio'], ['may/might be + -ing', 'may/might have been + -ing']],
    uses: ['Posibilidad presente o futura', 'Posibilidad sobre el pasado: might have done', 'might not = quizá no'],
    aff: ["It might rain this afternoon.|Puede que llueva esta tarde.", "She may be in a meeting.|Puede que esté en una reunión.", "He might have missed the bus.|Puede que haya perdido el colectivo."],
    neg: ["I might not go to the party.|Puede que no vaya a la fiesta."],
    q: ["'Where's Tom?' 'He may be in the garden.'|—¿Dónde está Tom? —Puede que esté en el jardín."],
    err: ['He might to come later.|He might come later.|might + verbo base.', 'She may has forgotten.|She may have forgotten.|may have + participio.'],
    cmp: { w: [28, 30], x: 'must = seguro; may/might = posible; can’t = seguro que no.' },
    ex: [
      "? Take an umbrella. It ___ rain later. | must | *might | can't >> Posibilidad, no certeza.",
      "_ I'm not sure where Anna is. She ___ (be) in the library. = might be ; may be ; could be >> Posibilidad.",
      "_ He didn't answer the phone. He ___ (be) asleep. = might have been ; may have been ; could have been >> Posibilidad pasada.",
      "? I ___ go to the party. I haven't decided. | must | *may not | can't >> Posibilidad negativa.",
      "s She might [has] left already. = have >> might + have + participio.",
      "o I might have left my keys at work. >> might have + participio.",
      "t Puede que no venga. = He might not come ; She might not come ; He may not come ; She may not come >> might/may not + verbo.",
      "?2 'She might not be at home' means… | *Perhaps she isn't at home. | It's impossible that she's at home. | She must be at home. >> might not = quizás no.",
      "f2 I can't find my wallet. I might drop it in the street. = I can't find my wallet. I might have dropped it in the street ; I can't find my wallet. I may have dropped it in the street >> Pasado: might have + participio.",
      "e2 They may be waiting for us. | *Puede que nos estén esperando. | Nos esperaron. | Deben esperarnos siempre. >> may be + -ing.",
    ],
  },
  {
    n: 30, t: 'may and might 2', es: 'may y might (2)', tags: ['modals'], pre: [29],
    goals: ['Hablar de posibles acciones futuras con may/might', 'Usar might as well', 'Usar may/might be -ing para planes posibles'],
    x: `Usamos **may/might** para **acciones o situaciones futuras posibles**: *I don't know what I'm doing this weekend. I might go away.*

**might be -ing** = posible plan: *I might be going to Rome next month.*

**might as well / may as well** = no hay mejor opción, hagámoslo (aunque no es ideal): *The bus doesn't come for an hour. We might as well walk.*

**may** también se usa para **pedir permiso** de forma formal (*May I sit here?*), unidad 37.`,
    form: [['Estructura', 'Ejemplo'], ['might + verbo', 'I might go away.'], ['might be + -ing', "I might be working late."], ['might as well + verbo', 'We might as well walk.']],
    uses: ['Posibles acciones futuras', 'Planes posibles (might be -ing)', 'might as well = no hay mejor opción'],
    aff: ["I might buy a new laptop next month.|Puede que me compre una notebook el mes que viene.", "We might as well go home. Nobody's coming.|Mejor nos vamos a casa. No viene nadie."],
    neg: ["I may not have time tomorrow.|Puede que mañana no tenga tiempo."],
    q: ['Might you be free on Friday?|¿Puede que estés libre el viernes?'],
    err: ['We might as well to walk.|We might as well walk.|might as well + verbo base.', 'Maybe I will might come.|I might come.|might ya expresa posibilidad.'],
    cmp: { w: [29], x: 'Misma idea de posibilidad aplicada al futuro.' },
    ex: [
      "? I'm not sure what to do. I ___ study law. | will | *might | must >> Acción futura posible.",
      "_ The film starts in 5 minutes. We'll be late. We ___ as well stay at home. = might ; may >> might as well.",
      "? Take your phone. I ___ need to call you. | must | *might | will to >> Posibilidad futura.",
      "_ I ___ (be/work) on Saturday. I'll know tomorrow. = might be working ; may be working >> Plan posible.",
      "s We might as well [to] go now. = (quitar to) >> might as well + verbo base sin to.",
      "o We might as well take a taxi. >> might as well + verbo base.",
      "t Puede que vaya a Chile en diciembre. = I might go to Chile in December ; I may go to Chile in December >> Posibilidad futura.",
      "?2 'Shall we wait for the next bus?' 'It's only 10 minutes' walk. We ___.' | must walk | *might as well walk | can't walk >> No hay razón para esperar.",
      "f2 Maybe I will to be late tomorrow. = I might be late tomorrow ; I may be late tomorrow ; Maybe I will be late tomorrow ; Maybe I'll be late tomorrow >> might + verbo base.",
    ],
  },
  {
    n: 31, t: 'have to and must', es: 'have to y must', tags: ['modals'],
    goals: ['Expresar obligación con have to y must', 'Usar don’t have to y mustn’t correctamente', 'Usar had to y will have to'],
    x: `**I have to** y **I must** expresan **obligación** / necesidad.

• **must**: la obligación la siente **quien habla** (opinión personal): *I must go to bed earlier.* También en reglas escritas.
• **have to**: la obligación viene de **afuera** (reglas, circunstancias): *I have to work on Saturdays* (mi jefe lo exige).

**must** solo existe en presente/futuro. Para el **pasado**: **had to**; futuro: **will have to**; preguntas: **Do you have to…?**

**don't have to** = **no es necesario** (podés si querés) ≠ **mustn't** = **está prohibido**.`,
    form: [['Forma', 'Significado'], ['must / have to', 'es necesario'], ["don't have to", 'no es necesario'], ["mustn't", 'está prohibido'], ['had to', 'fue necesario (pasado)']],
    uses: ['must = obligación personal', 'have to = obligación externa', "don't have to ≠ mustn't", 'had to / will have to / do you have to'],
    aff: ['I have to wear a uniform at work.|Tengo que usar uniforme en el trabajo.', 'I must remember to call Mum.|Tengo que acordarme de llamar a mamá.', 'We had to wait for an hour.|Tuvimos que esperar una hora.'],
    neg: ["You don't have to come if you don't want to.|No tenés que venir si no querés.", "You mustn't tell anyone.|No se lo podés decir a nadie."],
    q: ['Do you have to work tomorrow?|¿Tenés que trabajar mañana?'],
    err: ['I must work late yesterday.|I had to work late yesterday.|Pasado → had to.', "You mustn't pay. It's free.|You don't have to pay. It's free.|No es necesario → don't have to."],
    cmp: { w: [32], x: "La unidad 32 profundiza mustn't / needn't / don't need to." },
    ex: [
      "? I ___ get up early yesterday. | must | *had to | have to >> Pasado: had to.",
      "? You ___ pay for the museum. It's free. | mustn't | *don't have to | must >> No es necesario.",
      "? You ___ smoke inside the hospital. | don't have to | *mustn't | needn't to >> Está prohibido.",
      "_ ___ you ___ (have to) wear a tie at work? = Do / have to >> Pregunta: Do you have to…?",
      "_ If you fail, you ___ (have to) do the exam again. = 'll have to ; will have to >> Futuro: will have to.",
      "s Last night I [must] stay late at the office. = had to >> must no tiene pasado.",
      "m mustn't = prohibido ; don't have to = no es necesario ; had to = fue necesario ; must = es necesario (opinión) >> Obligación y ausencia de obligación.",
      "t No tenés que hacerlo hoy. = You don't have to do it today ; You do not have to do it today >> don't have to = no es necesario.",
      "?2 'I ___ go to the dentist. I have toothache.' (speaker's own feeling) | *must | mustn't | don't have to >> Necesidad que siente quien habla.",
      "f2 Did you must show your passport? = Did you have to show your passport >> Pasado/pregunta: did you have to.",
    ],
  },
  {
    n: 32, t: "must mustn't needn't", es: "must, mustn't, needn't", tags: ['modals'], pre: [31],
    goals: ['Usar needn’t / don’t need to (no es necesario)', 'Usar needn’t have done para el pasado', 'Distinguir didn’t need to y needn’t have'],
    x: `**must** = es necesario; **mustn't** = no lo hagas (prohibido); **needn't / don't need to** = **no es necesario**: *You needn't come if you don't want to.*

Pasado:
• **didn't need to** = no era necesario (quizá lo hiciste o no): *I didn't need to get up early, so I didn't.*
• **needn't have + participio** = **lo hiciste, pero no era necesario** (esfuerzo inútil): *I needn't have brought an umbrella. It didn't rain.*`,
    form: [['Forma', 'Significado'], ["mustn't do", 'no lo hagas'], ["needn't do / don't need to do", 'no es necesario'], ["didn't need to do", 'no era necesario'], ["needn't have done", 'lo hice, pero no era necesario']],
    uses: ["mustn't = prohibición", "needn't = falta de necesidad", "needn't have done = acción innecesaria en el pasado"],
    aff: ['You must keep it a secret.|Tenés que guardar el secreto.'],
    neg: ["You needn't shout. I can hear you.|No hace falta que grites. Te escucho.", "I needn't have cooked so much. Nobody was hungry.|No hacía falta que cocinara tanto."],
    q: ['Do we need to book a table?|¿Hace falta reservar mesa?'],
    err: ["You needn't to worry.|You needn't worry.|needn't + verbo base (o don't need to).", "You mustn't hurry. We have lots of time.|You needn't hurry. We have lots of time.|No es necesario → needn't."],
    cmp: { w: [31], x: "Resumen: mustn't (prohibido) / needn't = don't have to (no necesario)." },
    ex: [
      "? We have plenty of time. You ___ hurry. | mustn't | *needn't | must >> No es necesario.",
      "? This is a secret. You ___ tell anyone. | needn't | *mustn't | don't need >> Prohibido.",
      "? I ___ brought my coat. It was warm all day. | didn't need to | *needn't have | mustn't have >> Lo traje y no hacía falta.",
      "_ You ___ (not/need) to pay now. You can pay later. = don't need ; do not need >> don't need to = no es necesario.",
      "s You needn't [to] come early. = (quitar to) >> needn't + verbo base.",
      "o You needn't have bought me a present. >> needn't have + participio.",
      "t No hace falta que me esperes. = You needn't wait for me ; You don't need to wait for me ; You don't have to wait for me >> needn't / don't need to.",
      "?2 'I didn't need to wait' means… | I waited but it wasn't necessary. | *It wasn't necessary to wait. | I mustn't wait. >> didn't need to = no era necesario (no dice si lo hizo).",
      "f2 We needn't hurry, so we got there too early. = We needn't have hurried. We got there too early ; We needn't have hurried, we got there too early >> Lo hicimos y no hacía falta → needn't have.",
    ],
  },
  {
    n: 33, t: 'should 1', es: 'should (1)', tags: ['modals'],
    goals: ['Dar consejos y opiniones con should', 'Expresar expectativas con should', 'Usar should have + participio para críticas del pasado'],
    x: `**should** = es **buena idea**, es lo **correcto**: *You should see a doctor. You shouldn't eat so much.*

También para lo que **esperamos** que pase: *She's been studying hard. She should pass the exam.*

**should have + participio** = algo era lo correcto pero **no se hizo** (o se hizo algo mal): *I should have studied more. You shouldn't have said that.*

**ought to** = significado parecido a should: *You ought to rest.*`,
    form: [['Forma', 'Ejemplo'], ['should + verbo', 'You should rest.'], ["shouldn't + verbo", "You shouldn't worry."], ['should have + participio', 'I should have called you.']],
    uses: ['Consejo, opinión', 'Expectativa razonable', 'should have done = crítica / arrepentimiento', 'ought to = should'],
    aff: ['You should try this cake.|Tenés que probar esta torta.', 'I should have listened to you.|Te debería haber escuchado.', 'They should arrive soon.|Deberían llegar pronto.'],
    neg: ["You shouldn't work so hard.|No deberías trabajar tanto."],
    q: ['Should I tell him?|¿Debería decírselo?'],
    err: ['You should to see a doctor.|You should see a doctor.|should + verbo base.', "I should studied more.|I should have studied more.|Pasado → should have + participio."],
    cmp: { w: [34, 35], x: "had better = consejo más fuerte para una situación concreta (unidad 35)." },
    ex: [
      "? You look tired. You ___ go to bed. | must to | *should | should to >> Consejo.",
      "_ The film was great. You ___ (come) with us. = should have come >> Crítica/arrepentimiento pasado.",
      "_ You ___ (not/eat) so much sugar. It's bad for you. = shouldn't eat ; should not eat >> Consejo negativo.",
      "? Ann has studied a lot. She ___ pass the exam easily. | *should | shouldn't | should have >> Expectativa.",
      "s I'm sorry. I should have [tell] you before. = told >> should have + participio (told).",
      "o You shouldn't have shouted at him. >> shouldn't have + participio.",
      "t Deberías dejar de fumar. = You should stop smoking ; You should give up smoking ; You ought to stop smoking ; You ought to give up smoking >> Consejo: should.",
      "?2 'I'm lost.' 'You ___ a map.' | should take | *should have taken | must take >> Ya pasó: should have taken.",
      "f2 We should to leave now. = We should leave now ; We ought to leave now >> should + verbo base.",
      "m should = consejo ; should have done = era lo correcto pero no se hizo ; ought to = sinónimo de should ; shouldn't = no es buena idea >> Usos de should.",
    ],
  },
  {
    n: 34, t: 'should 2', es: 'should (2)', tags: ['modals'], pre: [33],
    goals: ['Usar should después de insist, suggest, recommend…', 'Usar should en it’s important/strange that…', 'Usar if … should y I should think'],
    x: `Después de verbos como **insist, suggest, propose, recommend, demand** podemos usar **should** (o el verbo en forma base / el subjuntivo): *They insisted that we should have dinner with them* = *…that we have dinner…*

Con **suggest** NO usamos el infinitivo: *I suggest that you should go / that you go / going* (no *I suggest you to go*).

**It's important / essential / strange / surprising that … should…**: *It's strange that she should be late. She's usually punctual.*

**If … should** = si por casualidad: *If anyone should call, tell them I'm out.*`,
    form: [['Estructura', 'Ejemplo'], ['suggest/insist that + sujeto + (should) + verbo', 'I suggest that he (should) apologise.'], ['suggest + -ing', 'I suggest going by bus.'], ["it's strange that … should", "It's strange that he should say that."]],
    uses: ['Después de insist, suggest, recommend, demand', 'Con important / strange / surprising that…', 'If … should = si por casualidad'],
    aff: ['The doctor recommended that I should rest.|El médico me recomendó que descansara.', 'I suggest we take a taxi.|Sugiero que tomemos un taxi.', "If you should see Tom, say hello.|Si por casualidad ves a Tom, saludalo."],
    neg: ["They insisted that we shouldn't pay.|Insistieron en que no pagáramos."],
    q: ['What do you suggest I should do?|¿Qué me sugerís que haga?'],
    err: ['I suggest you to go home.|I suggest you go home.|suggest no lleva objeto + to.', 'She suggested me to rest.|She suggested that I should rest.|suggest that + sujeto + (should) + verbo.'],
    cmp: { w: [55], x: 'Otros verbos sí llevan objeto + to (advise, tell, ask): unidad 55.' },
    ex: [
      "? I suggest ___ by train. | to go | *going | go to >> suggest + -ing.",
      "? The doctor insisted that he ___ more exercise. | doing | *should do | to do >> insist that + (should) + verbo.",
      "_ They suggested that we ___ (stay) at a hotel. = should stay ; stay >> suggest that + (should) + verbo.",
      "s I suggest that you [to] call her. = (quitar to) >> suggest that + sujeto + verbo base (o should). ++ I suggest that you call her.",
      "_ It's strange that he ___ (say) that. = should say >> It's strange that … should.",
      "o I recommend that you should book in advance. >> recommend that + should.",
      "t Sugiero que cenemos afuera. = I suggest we eat out ; I suggest that we eat out ; I suggest that we should eat out ; I suggest eating out >> suggest + oración / -ing.",
      "?2 If anyone ___ call, tell them I'm out. | *should | would | shall to >> If … should = si por casualidad.",
      "f2 What do you suggest me to do? = What do you suggest I do ; What do you suggest I should do ; What do you suggest that I do ; What do you suggest that I should do >> suggest + oración.",
    ],
  },
  {
    n: 35, t: "I'd better … it's time …", es: "had better / it's time", tags: ['modals'],
    goals: ['Dar consejos urgentes con had better', 'Usar it’s time + pasado', 'Usar it’s time to + verbo'],
    x: `**I'd better (had better) + verbo base** = sería mejor hacerlo; si no, puede haber un problema. Es para una **situación concreta**: *It's going to rain. You'd better take an umbrella.* Negativa: **had better not**: *You'd better not be late.*

Aunque es "had", **no es pasado**: se refiere al presente o futuro.

**It's time + to + verbo**: *It's time to go.*
**It's time + sujeto + pasado** = ya deberíamos hacerlo (crítica/queja): *It's time you went to bed. It's (high/about) time you did something.*`,
    form: [['Estructura', 'Ejemplo'], ["had better (’d better) + verbo", "You'd better hurry."], ['had better not + verbo', "We'd better not wake him."], ["it's time + to + verbo", "It's time to leave."], ["it's time + sujeto + pasado", "It's time we left."]],
    uses: ['Consejo urgente para una situación concreta', "it's time to…", "it's (high) time + pasado = ya debería pasar"],
    aff: ["We'd better leave now or we'll miss the train.|Mejor nos vamos ahora o perdemos el tren.", "It's time you got a job.|Ya es hora de que consigas trabajo."],
    neg: ["You'd better not tell her.|Mejor no se lo digas."],
    q: ["Hadn't we better ask first?|¿No sería mejor preguntar primero?"],
    err: ["You'd better to go.|You'd better go.|had better + verbo base.", "It's time we go home.|It's time we went home.|it's time + sujeto + pasado."],
    cmp: { w: [33], x: 'should = consejo general; had better = consejo para ahora con advertencia implícita.' },
    ex: [
      "? It's late. We ___ go home. | 'd better to | *'d better | had to >> had better + verbo base.",
      "? You ___ touch that. It's hot. | 'd not better | *'d better not | hadn't better to >> Negativa: had better not.",
      "_ It's 11 o'clock. It's time the children ___ (go) to bed. = went >> it's time + sujeto + pasado.",
      "_ It's late. It's time ___ (leave). = to leave >> it's time + to.",
      "s You'd better [to] call your mother. = (quitar to) >> had better + verbo base.",
      "o It's high time you found a job. >> high time + sujeto + pasado.",
      "t Mejor no lleguemos tarde. = We'd better not be late ; We had better not be late >> had better not.",
      "?2 'I feel sick.' 'You ___ see a doctor.' | 'd better to | *'d better | had better saw >> Consejo urgente.",
      "f2 It's time you go to bed. = It's time you went to bed ; It's time for you to go to bed >> it's time + pasado.",
    ],
  },
  {
    n: 36, t: 'would', es: 'would', tags: ['modals', 'conditionals', 'used-to'],
    goals: ['Usar would para situaciones imaginarias', 'Usar would have + participio', 'Expresar hábitos pasados y negativas pasadas con would/wouldn’t'],
    x: `**would** sirve para **imaginar** situaciones o acciones: *It would be nice to have a holiday. I wouldn't like to be a teacher.*

**would have + participio** = acciones imaginarias en el **pasado** (no ocurrieron): *They helped us a lot. I don't know what we'd have done without them.*

**wouldn't** = alguien **se negó** en el pasado: *I asked him, but he wouldn't tell me.*

**would** también expresa **hábitos pasados** (acciones repetidas, no estados): *When we were children, we would go to the beach every summer.* Para estados usamos used to.`,
    form: [['Uso', 'Ejemplo'], ['Situación imaginaria', 'It would be great.'], ['Pasado imaginario', "I would have helped you."], ['Negativa pasada', "She wouldn't listen."], ['Hábito pasado', 'He would walk for hours.']],
    uses: ['Situaciones imaginarias', 'would have done = pasado imaginario', "wouldn't = se negó", 'Hábitos pasados (solo acciones)'],
    aff: ['It would be lovely to live by the sea.|Sería precioso vivir junto al mar.', 'Every Sunday my grandmother would make pasta.|Todos los domingos mi abuela hacía pasta.'],
    neg: ["I asked her to help, but she wouldn't.|Le pedí ayuda, pero no quiso.", "I wouldn't like to live there.|No me gustaría vivir ahí."],
    q: ['Would you like to come?|¿Te gustaría venir?', 'What would you do?|¿Qué harías?'],
    err: ['When I was a child, I would have a dog.|When I was a child, I used to have a dog.|Estado pasado → used to, no would.', 'I would helped you.|I would have helped you.|would have + participio.'],
    cmp: { w: [18, 38, 39], x: 'would en condicionales: unidades 38–40. Hábitos pasados con estados: used to (unidad 18).' },
    ex: [
      "? It ___ nice to have a bigger flat. | will be | *would be | would have >> Situación imaginaria.",
      "? I asked him to help, but he ___. | didn't want | *wouldn't | won't >> Negativa pasada.",
      "_ I didn't know you were in hospital. I ___ (visit) you. = would have visited ; 'd have visited >> Pasado imaginario.",
      "? When I was a child, I ___ a bike. (state) | would have | *used to have | would >> Estado → used to.",
      "s Every evening my father would [to] read us a story. = (quitar to) >> would + verbo base. ++ Every evening my father would read us a story.",
      "o I wouldn't like to be a politician. >> wouldn't like to.",
      "t ¿Qué harías vos? = What would you do >> Situación imaginaria.",
      "f2 The car wouldn't to start this morning. = The car wouldn't start this morning ; The car would not start this morning >> wouldn't + verbo base.",
      "?2 Which sentence is NOT correct? | We would go fishing every summer. | *We would live in a small house in those days. | She wouldn't listen to me. >> Estado (live) → used to.",
    ],
  },
  {
    n: 37, t: 'can/could/would you … ? etc. (Requests, offers, permission and invitations)', es: 'Pedidos, ofrecimientos, permiso e invitaciones', tags: ['modals', 'questions'],
    goals: ['Pedir cosas con Can/Could/Would you…?', 'Pedir permiso con Can/Could/May I…?', 'Ofrecer e invitar con Can I…?, Would you like…?'],
    x: `**Pedir algo**: *Can you…? Could you…?* (más cortés), *Would you…? Do you think you could…?* También *Can I have…? / Could I have…?* para pedir cosas.

**Pedir permiso**: *Can I…? Could I…? May I…?* (formal). Respuesta: *Yes, of course. / Sure.* También *Do you mind if I…?*

**Ofrecer**: *Can I get you something? Would you like…?*

**Invitar**: *Would you like to come…? Would you like…?* (no *Do you like…?*, que pregunta por gustos).

No usamos **Would I…?** para pedir permiso.`,
    form: [['Función', 'Ejemplos'], ['Pedir', 'Can/Could/Would you…? Could I have…?'], ['Permiso', 'Can/Could/May I…? Do you mind if I…?'], ['Ofrecer', 'Can I…? Would you like…?'], ['Invitar', 'Would you like to…?']],
    uses: ['Pedidos corteses', 'Pedir permiso', 'Ofrecimientos e invitaciones'],
    aff: ['Could you open the window, please?|¿Podrías abrir la ventana, por favor?', 'Can I have a glass of water?|¿Me das un vaso de agua?'],
    neg: [],
    q: ['May I use your phone?|¿Puedo usar su teléfono?', 'Would you like to come to dinner?|¿Te gustaría venir a cenar?', 'Can I help you?|¿Te ayudo?'],
    err: ['Do you like a coffee?|Would you like a coffee?|Ofrecimiento → Would you like.', 'Would I use your bathroom?|Could I use your bathroom?|Permiso → Can/Could/May I.'],
    cmp: { w: [26, 36], x: 'Aquí can/could/would no expresan habilidad ni situación imaginaria, sino cortesía.' },
    ex: [
      "? (in a café) ___ have a coffee, please? | Do I | *Could I | Would I >> Pedir algo: Could I have…?",
      "? ___ you like something to drink? | Do | *Would | Can >> Ofrecimiento: Would you like…?",
      "? (formal) ___ I come in? | Would | *May | Shall to >> Permiso formal: May I…?",
      "_ ___ you tell me the time, please? = Could ; Can ; Would >> Pedido: Could you…?",
      "s [Do] you like to come to the cinema tonight? = Would >> Invitación: Would you like…?",
      "o Could you help me with my bags? >> Could you + verbo base.",
      "t ¿Te molesta si abro la ventana? = Do you mind if I open the window >> Do you mind if I…?",
      "m Could you…? = pedido ; May I…? = permiso formal ; Would you like…? = invitación/ofrecimiento ; Can I help you? = ofrecer ayuda >> Funciones.",
      "f2 Would I borrow your pen? = Could I borrow your pen ; Can I borrow your pen ; May I borrow your pen >> Permiso.",
      "d2 A: ___ I get you anything? B: A cup of tea would be nice. | Would | *Can | Do >> Ofrecimiento: Can I get you…?",
    ],
  },
];

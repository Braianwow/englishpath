import type { UnitSrc } from '../dsl';

// Module 6 — Passive (EGU units 42–46)
export const m06: UnitSrc[] = [
  {
    n: 42, t: 'Passive 1 (is done / was done)', es: 'Voz pasiva (1)', tags: ['passive'],
    goals: ['Formar la pasiva con be + participio', 'Saber cuándo usarla', 'Usar by para el agente'],
    x: `La **voz pasiva** (be + participio) se usa cuando lo importante es **lo que pasa** o **a quién/qué le pasa**, no quién lo hace: *This house was built in 1890.*

Si queremos decir quién lo hizo, usamos **by**: *The telephone was invented by Bell.*

El tiempo lo indica **be**: *is made* (presente), *was made* (pasado), *has been made*, *will be made*, *is being made*…

Solo los verbos con objeto (transitivos) tienen pasiva: *happen, arrive* no tienen.`,
    form: [['Activa', 'Pasiva'], ['They make cars here.', 'Cars are made here.'], ['Somebody stole my bike.', 'My bike was stolen.'], ['They clean the office every day.', 'The office is cleaned every day.']],
    uses: ['Cuando el agente no importa o no se conoce', 'Agente con by', 'be cambia según el tiempo'],
    aff: ['English is spoken in many countries.|El inglés se habla en muchos países.', 'My car was stolen last night.|Anoche me robaron el auto.', 'The museum was designed by a famous architect.|El museo fue diseñado por un arquitecto famoso.'],
    neg: ["The room isn't cleaned every day.|La habitación no se limpia todos los días."],
    q: ['When was this bridge built?|¿Cuándo se construyó este puente?', 'Where were you born?|¿Dónde naciste?'],
    err: ['I born in 1998.|I was born in 1998.|born siempre en pasiva: was born.', 'The accident was happened at night.|The accident happened at night.|happen no tiene pasiva.'],
    cmp: { w: [43, 44], x: 'La pasiva en otros tiempos y con infinitivo/-ing: unidades 43–44.' },
    ex: [
      "? Paper ___ from wood. | makes | *is made | is making >> Pasiva presente: is made.",
      "? The window ___ by a football yesterday. | broke | *was broken | is broken >> Pasiva pasada.",
      "_ This castle ___ (build) in the 15th century. = was built >> Pasiva pasada.",
      "_ Where ___ you ___ (born)? = were / born >> born siempre en pasiva.",
      "s The film was [direct] by Steven Spielberg. = directed >> be + participio.",
      "o The letters are delivered every morning. >> Pasiva presente.",
      "t Mi bicicleta fue robada. = My bike was stolen ; My bicycle was stolen >> Pasiva: was + participio.",
      "?2 Which verb has NO passive? | write | *happen | build >> happen es intransitivo.",
      "f2 The accident was happened at 9 p.m. = The accident happened at 9 p.m >> happen no tiene pasiva.",
      "b2 the Mona Lisa / paint / by Leonardo da Vinci = The Mona Lisa was painted by Leonardo da Vinci >> Pasiva con agente.",
    ],
  },
  {
    n: 43, t: 'Passive 2 (be done / been done / being done)', es: 'Voz pasiva (2)', tags: ['passive'], pre: [42],
    goals: ['Usar la pasiva después de modales (be done)', 'Usar have been done y being done', 'Formar pasivas en continuo y perfect'],
    x: `**Infinitivo pasivo**: (to) **be done** después de modales y verbos: *The problem will be solved. It must be done today. I don't want to be disturbed.*

Pasado de modales: **have been done**: *The letter should have been sent yesterday.*

**Present perfect pasivo**: *My car **has been repaired**.* **Past perfect**: *had been done*.

**Continuo pasivo**: **being done**: *The road **is being repaired** (ahora). The house **was being painted** when I visited.*

**-ing pasivo**: *I don't like being told what to do.*`,
    form: [['Tiempo', 'Activa', 'Pasiva'], ['Modal', 'They will finish it.', 'It will be finished.'], ['Present perfect', 'They have sold it.', 'It has been sold.'], ['Continuo', 'They are repairing it.', 'It is being repaired.'], ['-ing', 'I hate people asking me.', 'I hate being asked.']],
    uses: ['Modal + be + participio', 'have/has been + participio', 'is/was being + participio', 'being + participio después de preposiciones/verbos'],
    aff: ['The meeting has been cancelled.|La reunión fue cancelada.', 'My car is being repaired at the moment.|Están arreglando mi auto ahora.', 'This must be done carefully.|Esto se tiene que hacer con cuidado.'],
    neg: ["The results haven't been published yet.|Todavía no se publicaron los resultados."],
    q: ['Has the doctor been called?|¿Llamaron al médico?'],
    err: ['The house is painting at the moment.|The house is being painted at the moment.|Continuo pasivo: is being + participio.', 'It should have be done.|It should have been done.|have + been + participio.'],
    cmp: { w: [42, 44], x: 'Siempre: be (en el tiempo que corresponda) + participio.' },
    ex: [
      "? The work will ___ tomorrow. | finish | *be finished | been finished >> Modal + be + participio.",
      "? The road ___ at the moment, so we have to drive slowly. | is repairing | *is being repaired | has repaired >> Continuo pasivo.",
      "_ My bike ___ (steal). I can't find it. = has been stolen >> Present perfect pasivo.",
      "_ The letter should ___ (send) last week. = have been sent >> should have been + participio.",
      "s The meeting has been [cancel]. = cancelled >> has been + participio.",
      "o I don't like being told what to do. >> being + participio.",
      "t Están construyendo un hotel nuevo. (pasiva) = A new hotel is being built >> is being + participio.",
      "?2 'I hate ___ at.' | laughing | *being laughed | be laughed >> Después de hate: -ing pasivo.",
      "f2 The results have been publish already. = The results have already been published ; The results have been published already >> participio: published.",
    ],
  },
  {
    n: 44, t: 'Passive 3', es: 'Voz pasiva (3)', tags: ['passive'], pre: [43],
    goals: ['Usar la pasiva con verbos de dos objetos', 'Usar get en lugar de be', 'Usar I was offered / I was told'],
    x: `Algunos verbos tienen **dos objetos** (give, offer, show, tell, ask, pay, send, teach). En pasiva, lo más común es empezar con la **persona**: *They gave **me** the information* → ***I was given** the information.*

**I was born** (no *I am born*): siempre en pasado para el nacimiento.

**get** + participio puede reemplazar a be para cosas que **pasan** (a menudo sin planearlo): *I got stung by a bee. There was a fight but nobody got hurt.* También *get married, get dressed, get lost.*

**be told / be asked / be offered** son muy comunes: *I've been offered a job.*`,
    form: [['Activa', 'Pasiva (persona como sujeto)'], ['They offered me the job.', 'I was offered the job.'], ['Someone told us to wait.', 'We were told to wait.'], ['A bee stung me.', 'I got stung by a bee.']],
    uses: ['Pasiva con verbos de dos objetos', 'I was born', 'get + participio para cosas que suceden'],
    aff: ['I was offered a new job.|Me ofrecieron un trabajo nuevo.', 'We were told to wait outside.|Nos dijeron que esperáramos afuera.', 'They got married last year.|Se casaron el año pasado.'],
    neg: ["Nobody got hurt.|Nadie salió herido."],
    q: ['Were you paid for the work?|¿Te pagaron por el trabajo?'],
    err: ['I am born in Lima.|I was born in Lima.|Nacimiento → was born.', 'I was given it the information.|I was given the information.|Un solo objeto en pasiva.'],
    cmp: { w: [46], x: 'have/get something done: unidad 46.' },
    ex: [
      "? I ___ a job in Madrid, but I refused it. | offered | *was offered | was offering >> La persona es sujeto de la pasiva.",
      "_ We ___ (tell) to arrive at 9. = were told >> be told.",
      "? There was a fight, but nobody ___ hurt. | was get | *got | has >> get + participio.",
      "_ Where ___ your father ___ (born)? = was / born >> was born.",
      "s I [am] born in 1995. = was >> born → was born.",
      "o I was given a present by my colleagues. >> Pasiva con dos objetos.",
      "t Me pagaron muy poco. = I was paid very little >> Persona como sujeto.",
      "?2 'They showed us the new office' → ___ | The new office showed us. | *We were shown the new office. | We showed the new office. >> Persona como sujeto.",
      "f2 He got stinged by a bee. = He got stung by a bee >> participio irregular: stung.",
    ],
  },
  {
    n: 45, t: 'it is said that … he is said to … he is supposed to …', es: 'it is said that / be supposed to', tags: ['passive'], pre: [42],
    goals: ['Usar it is said/believed/thought that…', 'Usar sujeto + is said to + infinitivo', 'Usar be supposed to (se supone / debería)'],
    x: `Para contar lo que **la gente dice o cree** (sin decir quién), usamos:
• **It is said / believed / thought / reported that…**: *It is said that he is 100 years old.*
• **sujeto + is said to + infinitivo**: *He is said to be 100 years old.* Para el pasado: **to have + participio**: *He is said to have won the lottery.*

**be supposed to** tiene dos sentidos:
1. **se dice que**: *The film is supposed to be very good.*
2. **lo que está planeado / esperado**, que a menudo no ocurre: *You're supposed to be at work now! I was supposed to call her, but I forgot.*`,
    form: [['Estructura', 'Ejemplo'], ['It is said that + oración', 'It is said that he is rich.'], ['sujeto + is said to + verbo', 'He is said to be rich.'], ['sujeto + is said to have + participio', 'He is said to have escaped.'], ['be supposed to', "You're supposed to wear a helmet."]],
    uses: ['Información de fuentes no especificadas', 'to have + participio para el pasado', 'be supposed to = se dice / está previsto'],
    aff: ['It is believed that the fire started in the kitchen.|Se cree que el fuego empezó en la cocina.', 'She is said to be the best doctor in town.|Dicen que es la mejor médica del pueblo.', "You're supposed to take your shoes off.|Se supone que tenés que sacarte los zapatos."],
    neg: ["You're not supposed to park here.|No se puede estacionar acá."],
    q: ['What time are we supposed to arrive?|¿A qué hora se supone que llegamos?'],
    err: ['He is said that he is rich.|He is said to be rich.|sujeto + is said to + verbo.', 'She is supposed to be left yesterday.|She is supposed to have left yesterday.|Pasado → to have + participio.'],
    ex: [
      "? The building ___ to be haunted. | says | *is said | said >> sujeto + is said to.",
      "? It ___ that the prisoner escaped through a window. | believes | *is believed | is believing >> It is believed that…",
      "_ The thief is thought ___ (escape) on a motorbike. = to have escaped >> Pasado: to have + participio.",
      "_ You ___ (supposed) to be here at 9. It's 9.30! = were supposed ; 're supposed ; are supposed >> be supposed to = lo previsto.",
      "s The castle is said [be] 900 years old. = to be >> sujeto + is said + to + verbo.",
      "o The new restaurant is supposed to be excellent. >> be supposed to = se dice.",
      "t Se dice que el castillo tiene 900 años. = The castle is said to be 900 years old ; It is said that the castle is 900 years old >> is said to / It is said that.",
      "?2 'I was supposed to phone Anna' means… | I phoned her. | *I planned to phone her but didn't. | I must phone her. >> was supposed to = estaba previsto (no ocurrió).",
      "f2 The president is reported to resign yesterday. = The president is reported to have resigned yesterday >> Pasado: to have + participio.",
    ],
  },
  {
    n: 46, t: 'have something done', es: 'have something done', tags: ['passive'], pre: [42],
    goals: ['Usar have/get + objeto + participio para servicios', 'Hablar de cosas desagradables que nos pasan', 'Diferenciar I did it / I had it done'],
    x: `**have + objeto + participio** = **alguien hace algo para nosotros** (normalmente pagamos el servicio): *I had my hair cut* (me corté el pelo en la peluquería) ≠ *I cut my hair* (lo hice yo).

Se usa en todos los tiempos: *We're having the house painted. Have you had your car serviced?*

**get something done** significa lo mismo (más informal): *I need to get my phone repaired.*

También para cosas **malas** que nos pasan: *He had his bike stolen.* (Le robaron la bici.)`,
    form: [['have', 'objeto', 'participio'], ['I had', 'my hair', 'cut'], ["We're having", 'the kitchen', 'painted'], ['She had', 'her bag', 'stolen']],
    uses: ['Servicios que pagamos (haircut, repair…)', 'get something done (informal)', 'Experiencias desagradables (had … stolen)'],
    aff: ['I had my eyes tested last week.|La semana pasada me hice controlar la vista.', "We're having a new kitchen fitted.|Nos están instalando una cocina nueva.", 'She had her passport stolen.|Le robaron el pasaporte.'],
    neg: ["I haven't had my car washed for ages.|Hace siglos que no hago lavar el auto."],
    q: ['Where do you have your hair cut?|¿Dónde te cortás el pelo?'],
    err: ['I had cut my hair at the hairdresser’s.|I had my hair cut at the hairdresser’s.|have + objeto + participio.', 'I need to get repaired my phone.|I need to get my phone repaired.|Objeto antes del participio.'],
    cmp: { w: [44], x: 'have/get done = alguien lo hace por nosotros; pasiva normal = no importa quién.' },
    ex: [
      "? I didn't cut my hair myself. I ___. | cut it | *had it cut | had cut it >> Alguien lo hizo por mí.",
      "_ We are ___ (have/the house/paint) next week. = having the house painted >> have + objeto + participio.",
      "_ Lisa had her bag ___ (steal) on the train. = stolen >> Experiencia desagradable.",
      "? You should ___ your car serviced before the trip. | *get | make | do >> get something done.",
      "s I'm going to have my car [repair] tomorrow. = repaired >> have + objeto + participio.",
      "o I had my photo taken for my passport. >> have + objeto + participio.",
      "t Me hice arreglar los zapatos. = I had my shoes repaired ; I got my shoes repaired ; I had my shoes mended >> have/get + objeto + participio.",
      "?2 'He had his nose broken in a fight' means… | He broke his nose himself on purpose. | *Someone broke his nose. | He paid someone to break his nose. >> Experiencia desagradable.",
      "f2 How often do you have cut your hair? = How often do you have your hair cut ; How often do you get your hair cut >> Orden: objeto + participio.",
    ],
  },
];

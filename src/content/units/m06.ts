import type { UnitSrc } from '../dsl';

// Module 6 — Passive (EGU units 42–46)
export const m06: UnitSrc[] = [
  {
    n: 42, t: 'Passive 1 (is done / was done)', es: 'Voz pasiva (1)', tags: ['passive'],
    goals: ['Form the passive with be + past participle', 'Know when to use it', 'Use by for the agent'],
    x: `The **passive** (be + past participle) is used when the important thing is **what happens** or **who/what it happens to**, not who does it: *This house was built in 1890.*

If we want to say who did it, we use **by**: *The telephone was invented by Bell.*

**be** shows the tense: *is made* (present), *was made* (past), *has been made*, *will be made*, *is being made*…

Only verbs with an object (transitive verbs) have a passive: *happen, arrive* don't.`,
    form: [['Activa', 'Pasiva'], ['They make cars here.', 'Cars are made here.'], ['Somebody stole my bike.', 'My bike was stolen.'], ['They clean the office every day.', 'The office is cleaned every day.']],
    uses: ['When the agent doesn\'t matter or isn\'t known', 'The agent with by', 'be changes with the tense'],
    aff: ['English is spoken in many countries.|El inglés se habla en muchos países.', 'My car was stolen last night.|Anoche me robaron el auto.', 'The museum was designed by a famous architect.|El museo fue diseñado por un arquitecto famoso.'],
    neg: ["The room isn't cleaned every day.|La habitación no se limpia todos los días."],
    q: ['When was this bridge built?|¿Cuándo se construyó este puente?', 'Where were you born?|¿Dónde naciste?'],
    err: ['I born in 1998.|I was born in 1998.|born is always passive: was born.', 'The accident was happened at night.|The accident happened at night.|happen has no passive.'],
    cmp: { w: [43, 44], x: 'The passive in other tenses and with the infinitive/-ing: units 43–44.' },
    ex: [
      "? Paper ___ from wood. | makes | *is made | is making >> Present passive: is made.",
      "? The window ___ by a football yesterday. | broke | *was broken | is broken >> Past passive.",
      "_ This castle ___ (build) in the 15th century. = was built >> Past passive.",
      "_ Where ___ you ___ (born)? = were / born >> born is always passive.",
      "s The film was [direct] by Steven Spielberg. = directed >> be + past participle.",
      "o The letters are delivered every morning. >> Present passive.",
      "o My bike was stolen >> Passive: was + past participle.",
      "?2 Which verb has NO passive? | write | *happen | build >> happen is intransitive.",
      "f2 The accident was happened at 9 p.m. = The accident happened at 9 p.m >> happen has no passive.",
      "b2 the Mona Lisa / paint / by Leonardo da Vinci = The Mona Lisa was painted by Leonardo da Vinci >> Passive with an agent.",
    ],
  },
  {
    n: 43, t: 'Passive 2 (be done / been done / being done)', es: 'Voz pasiva (2)', tags: ['passive'], pre: [42],
    goals: ['Use the passive after modals (be done)', 'Use have been done and being done', 'Form continuous and perfect passives'],
    x: `**Passive infinitive**: (to) **be done** after modals and verbs: *The problem will be solved. It must be done today. I don't want to be disturbed.*

Past of modals: **have been done**: *The letter should have been sent yesterday.*

**Present perfect passive**: *My car **has been repaired**.* **Past perfect**: *had been done*.

**Continuous passive**: **being done**: *The road **is being repaired** (now). The house **was being painted** when I visited.*

**Passive -ing**: *I don't like being told what to do.*`,
    form: [['Tiempo', 'Activa', 'Pasiva'], ['Modal', 'They will finish it.', 'It will be finished.'], ['Present perfect', 'They have sold it.', 'It has been sold.'], ['Continuo', 'They are repairing it.', 'It is being repaired.'], ['-ing', 'I hate people asking me.', 'I hate being asked.']],
    uses: ['Modal + be + past participle', 'have/has been + past participle', 'is/was being + past participle', 'being + past participle after prepositions/verbs'],
    aff: ['The meeting has been cancelled.|La reunión fue cancelada.', 'My car is being repaired at the moment.|Están arreglando mi auto ahora.', 'This must be done carefully.|Esto se tiene que hacer con cuidado.'],
    neg: ["The results haven't been published yet.|Todavía no se publicaron los resultados."],
    q: ['Has the doctor been called?|¿Llamaron al médico?'],
    err: ['The house is painting at the moment.|The house is being painted at the moment.|Continuous passive: is being + past participle.', 'It should have be done.|It should have been done.|have + been + past participle.'],
    cmp: { w: [42, 44], x: 'Always: be (in the right tense) + past participle.' },
    ex: [
      "? The work will ___ tomorrow. | finish | *be finished | been finished >> Modal + be + past participle.",
      "? The road ___ at the moment, so we have to drive slowly. | is repairing | *is being repaired | has repaired >> Continuous passive.",
      "_ My bike ___ (steal). I can't find it. = has been stolen >> Present perfect passive.",
      "_ The letter should ___ (send) last week. = have been sent >> should have been + past participle.",
      "s The meeting has been [cancel]. = cancelled >> has been + past participle.",
      "o I don't like being told what to do. >> being + past participle.",
      "o A new hotel is being built >> is being + past participle.",
      "?2 'I hate ___ at.' | laughing | *being laughed | be laughed >> After hate: passive -ing.",
      "f2 The results have been publish already. = The results have already been published ; The results have been published already >> Past participle: published.",
    ],
  },
  {
    n: 44, t: 'Passive 3', es: 'Voz pasiva (3)', tags: ['passive'], pre: [43],
    goals: ['Use the passive with verbs that have two objects', 'Use get instead of be', 'Use I was offered / I was told'],
    x: `Some verbs have **two objects** (give, offer, show, tell, ask, pay, send, teach). In the passive, it is most common to start with the **person**: *They gave **me** the information* → ***I was given** the information.*

**I was born** (not *I am born*): always past for birth.

**get** + past participle can replace be for things that **happen** (often without planning): *I got stung by a bee. There was a fight but nobody got hurt.* Also *get married, get dressed, get lost.*

**be told / be asked / be offered** are very common: *I've been offered a job.*`,
    form: [['Activa', 'Pasiva (persona como sujeto)'], ['They offered me the job.', 'I was offered the job.'], ['Someone told us to wait.', 'We were told to wait.'], ['A bee stung me.', 'I got stung by a bee.']],
    uses: ['Passive with verbs that have two objects', 'I was born', 'get + past participle for things that happen'],
    aff: ['I was offered a new job.|Me ofrecieron un trabajo nuevo.', 'We were told to wait outside.|Nos dijeron que esperáramos afuera.', 'They got married last year.|Se casaron el año pasado.'],
    neg: ["Nobody got hurt.|Nadie salió herido."],
    q: ['Were you paid for the work?|¿Te pagaron por el trabajo?'],
    err: ['I am born in Lima.|I was born in Lima.|Birth → was born.', 'I was given it the information.|I was given the information.|Only one object in the passive.'],
    cmp: { w: [46], x: 'have/get something done: unit 46.' },
    ex: [
      "? I ___ a job in Madrid, but I refused it. | offered | *was offered | was offering >> The person is the subject of the passive.",
      "_ We ___ (tell) to arrive at 9. = were told >> be told.",
      "? There was a fight, but nobody ___ hurt. | was get | *got | has >> get + past participle.",
      "_ Where ___ your father ___ (born)? = was / born >> was born.",
      "s I [am] born in 1995. = was >> born → was born.",
      "o I was given a present by my colleagues. >> Passive with two objects.",
      "o I was paid very little >> The person as the subject.",
      "?2 'They showed us the new office' → ___ | The new office showed us. | *We were shown the new office. | We showed the new office. >> The person as the subject.",
      "f2 He got stinged by a bee. = He got stung by a bee >> Irregular past participle: stung.",
    ],
  },
  {
    n: 45, t: 'it is said that … he is said to … he is supposed to …', es: 'it is said that / be supposed to', tags: ['passive'], pre: [42],
    goals: ['Use it is said/believed/thought that…', 'Use subject + is said to + infinitive', 'Use be supposed to (people say / it should happen)'],
    x: `To report what **people say or believe** (without saying who), we use:
• **It is said / believed / thought / reported that…**: *It is said that he is 100 years old.*
• **subject + is said to + infinitive**: *He is said to be 100 years old.* For the past: **to have + past participle**: *He is said to have won the lottery.*

**be supposed to** has two meanings:
1. **people say that**: *The film is supposed to be very good.*
2. **what is planned / expected**, which often doesn't happen: *You're supposed to be at work now! I was supposed to call her, but I forgot.*`,
    form: [['Estructura', 'Ejemplo'], ['It is said that + oración', 'It is said that he is rich.'], ['sujeto + is said to + verbo', 'He is said to be rich.'], ['sujeto + is said to have + participio', 'He is said to have escaped.'], ['be supposed to', "You're supposed to wear a helmet."]],
    uses: ['Information from unnamed sources', 'to have + past participle for the past', 'be supposed to = people say / it is planned'],
    aff: ['It is believed that the fire started in the kitchen.|Se cree que el fuego empezó en la cocina.', 'She is said to be the best doctor in town.|Dicen que es la mejor médica del pueblo.', "You're supposed to take your shoes off.|Se supone que tenés que sacarte los zapatos."],
    neg: ["You're not supposed to park here.|No se puede estacionar acá."],
    q: ['What time are we supposed to arrive?|¿A qué hora se supone que llegamos?'],
    err: ['He is said that he is rich.|He is said to be rich.|subject + is said to + verb.', 'She is supposed to be left yesterday.|She is supposed to have left yesterday.|Past → to have + past participle.'],
    ex: [
      "? The building ___ to be haunted. | says | *is said | said >> subject + is said to.",
      "? It ___ that the prisoner escaped through a window. | believes | *is believed | is believing >> It is believed that…",
      "_ The thief is thought ___ (escape) on a motorbike. = to have escaped >> Past: to have + past participle.",
      "_ You ___ (supposed) to be here at 9. It's 9.30! = were supposed ; 're supposed ; are supposed >> be supposed to = what was planned.",
      "s The castle is said [be] 900 years old. = to be >> subject + is said + to + verb.",
      "o The new restaurant is supposed to be excellent. >> be supposed to = people say.",
      "o The castle is said to be 900 years old >> is said to / It is said that.",
      "?2 'I was supposed to phone Anna' means… | I phoned her. | *I planned to phone her but didn't. | I must phone her. >> was supposed to = it was planned (but it didn't happen).",
      "f2 The president is reported to resign yesterday. = The president is reported to have resigned yesterday >> Past: to have + past participle.",
    ],
  },
  {
    n: 46, t: 'have something done', es: 'have something done', tags: ['passive'], pre: [42],
    goals: ['Use have/get + object + past participle for services', 'Talk about unpleasant things that happen to us', 'Tell I did it from I had it done'],
    x: `**have + object + past participle** = **someone does something for us** (we usually pay for the service): *I had my hair cut* (at the hairdresser's) ≠ *I cut my hair* (I did it myself).

It is used in all tenses: *We're having the house painted. Have you had your car serviced?*

**get something done** means the same (more informal): *I need to get my phone repaired.*

Also for **bad** things that happen to us: *He had his bike stolen.* (Someone stole his bike.)`,
    form: [['have', 'objeto', 'participio'], ['I had', 'my hair', 'cut'], ["We're having", 'the kitchen', 'painted'], ['She had', 'her bag', 'stolen']],
    uses: ['Services we pay for (haircut, repair…)', 'get something done (informal)', 'Unpleasant experiences (had … stolen)'],
    aff: ['I had my eyes tested last week.|La semana pasada me hice controlar la vista.', "We're having a new kitchen fitted.|Nos están instalando una cocina nueva.", 'She had her passport stolen.|Le robaron el pasaporte.'],
    neg: ["I haven't had my car washed for ages.|Hace siglos que no hago lavar el auto."],
    q: ['Where do you have your hair cut?|¿Dónde te cortás el pelo?'],
    err: ['I had cut my hair at the hairdresser’s.|I had my hair cut at the hairdresser’s.|have + object + past participle.', 'I need to get repaired my phone.|I need to get my phone repaired.|The object goes before the past participle.'],
    cmp: { w: [44], x: 'have/get done = someone does it for us; a normal passive = it doesn\'t matter who.' },
    ex: [
      "? I didn't cut my hair myself. I ___. | cut it | *had it cut | had cut it >> Someone did it for me.",
      "_ We are ___ (have/the house/paint) next week. = having the house painted >> have + object + past participle.",
      "_ Lisa had her bag ___ (steal) on the train. = stolen >> An unpleasant experience.",
      "? You should ___ your car serviced before the trip. | *get | make | do >> get something done.",
      "s I'm going to have my car [repair] tomorrow. = repaired >> have + object + past participle.",
      "o I had my photo taken for my passport. >> have + object + past participle.",
      "o I had my shoes repaired >> have/get + object + past participle.",
      "?2 'He had his nose broken in a fight' means… | He broke his nose himself on purpose. | *Someone broke his nose. | He paid someone to break his nose. >> An unpleasant experience.",
      "f2 How often do you have cut your hair? = How often do you have your hair cut ; How often do you get your hair cut >> Order: object + past participle.",
    ],
  },
];

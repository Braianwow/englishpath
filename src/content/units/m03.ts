import type { UnitSrc } from '../dsl';

// Module 3 — Future (EGU units 19–25)
export const m03: UnitSrc[] = [
  {
    n: 19, t: 'Present tenses (I am doing / I do) for the future', es: 'Presentes con valor de futuro', tags: ['future', 'present-continuous', 'present-simple'], pre: [1, 2],
    goals: ['Use the present continuous for arranged plans', 'Use the present simple for timetables', 'Choose between the two'],
    x: `**Present continuous** for the future = something you **have already decided and arranged** (there is an arrangement: tickets, appointments, bookings). *I'm meeting Kate on Saturday.* *What are you doing tomorrow?*

**Present simple** for the future = fixed **timetables and programmes** (transport, shows, classes): *The train leaves at 7.15.* *The film starts at 8.*

For personal plans we **don't** usually use the present simple: *I'm going to the cinema tonight* (not *I go*).`,
    form: [['Uso', 'Tiempo', 'Ejemplo'], ['Plan personal organizado', 'Present continuous', "I'm leaving tomorrow."], ['Horario / programa', 'Present simple', 'The plane lands at 10.']],
    uses: ['Arranged plans and appointments → am/is/are + -ing', 'Timetables, programmes, calendars → present simple'],
    aff: ["I'm playing tennis with Ben tomorrow.|Mañana juego al tenis con Ben.", 'The concert starts at 8 p.m.|El concierto empieza a las 8.', "We're going to Rome next week.|La semana que viene vamos a Roma."],
    neg: ["I'm not working next week.|La semana que viene no trabajo."],
    q: ['What are you doing this evening?|¿Qué hacés esta noche?', 'What time does the train leave?|¿A qué hora sale el tren?'],
    err: ['I go to a party tonight.|I am going to a party tonight.|A personal plan → present continuous.', 'What time is the film starting tomorrow?|What time does the film start tomorrow?|A programme → present simple (more natural).'],
    cmp: { w: [20, 23], x: 'going to = a decided intention (maybe not arranged). Present continuous = already arranged.' },
    ex: [
      "? ___ anything this weekend? | Do you do | *Are you doing | Will you do >> Asking about plans → present continuous.",
      "? The train ___ at 8.30 tomorrow morning. | is leaving | *leaves | leave >> A fixed timetable → present simple.",
      "_ I ___ (see) the dentist on Friday. I've made an appointment. = 'm seeing ; am seeing >> An arranged appointment.",
      "_ What time ___ the exhibition ___ (open) tomorrow? = does / open >> A timetable → present simple.",
      "s We [go] to a wedding next Saturday. = are going >> An arranged plan → are going.",
      "o I'm having dinner with Sue tonight. >> A plan → present continuous.",
      "o We're going to the theatre tomorrow night >> An arranged plan.",
      "?2 'Tim is playing football tomorrow' means… | Tim plays every day. | *Tim has arranged to play tomorrow. | Tim is playing now. >> A future arrangement.",
      "f2 I meet my friends at 7 this evening. = I'm meeting my friends at 7 this evening ; I am meeting my friends at 7 this evening >> A personal plan → continuous.",
      "d2 A: Are you free on Sunday? B: No, I ___ my grandparents. | visit | *'m visiting | visited >> A plan already arranged.",
    ],
  },
  {
    n: 20, t: "I'm going to (do)", es: 'be going to', tags: ['future', 'going-to'],
    goals: ['Talk about decided intentions', 'Make predictions based on present evidence', 'Use was/were going to'],
    x: `**be going to + infinitive** = something you **have already decided to do** (an intention): *I'm going to buy a new phone.*

Also for **predictions** when **there is evidence now**: *Look at those clouds! It's going to rain.* *I feel sick. I think I'm going to faint.*

**was/were going to** = an intention in the past that **didn't happen**: *We were going to travel by train, but we went by car.*`,
    form: [['Sujeto', 'am/is/are', 'going to', 'verbo'], ['I', 'am', 'going to', 'study'], ['she', 'is', 'going to', 'leave'], ['they', 'are', 'going to', 'win']],
    uses: ['An intention already decided', 'A prediction based on present evidence', 'was/were going to = a past plan that didn\'t happen'],
    aff: ["I'm going to learn to drive.|Voy a aprender a manejar.", "Look at the sky. It's going to rain.|Mirá el cielo. Va a llover.", 'I was going to call you, but I forgot.|Te iba a llamar, pero me olvidé.'],
    neg: ["I'm not going to accept the offer.|No voy a aceptar la oferta."],
    q: ['What are you going to wear to the party?|¿Qué te vas a poner para la fiesta?'],
    err: ['I going to study medicine.|I am going to study medicine.|The verb be is missing.', "Look! That car is going crash!|Look! That car is going to crash!|going to + infinitive."],
    cmp: { w: [21, 23], x: 'going to = decided before speaking. will = decided at the moment of speaking.' },
    ex: [
      "? I've decided. I ___ a new job. | will look for | *'m going to look for | look for >> An intention already decided.",
      "? Look out! You ___ the glass! | will drop | *'re going to drop | drop >> Evidence now: a prediction.",
      "_ We ___ (go) by train, but then we decided to drive. = were going to go >> A past plan that didn't happen.",
      "_ ___ you ___ (watch) the match tonight? = Are / going to watch >> Question: Are + going to.",
      "s She is [go] to have a baby. = going >> be going to.",
      "o What are you going to do this summer? >> Wh- + are + going to.",
      "o I'm not going to say anything >> A negative intention.",
      "?2 'I feel terrible.' 'You look pale. I think you ___.' | will faint | *'re going to faint | faint >> Present evidence (he looks pale).",
      "f2 I was go to phone you, but I didn't have time. = I was going to phone you, but I didn't have time ; I was going to phone you but I didn't have time >> was going to + verb.",
      "b2 it / be / a hot day / look at the sun = It's going to be a hot day. Look at the sun ; It is going to be a hot day. Look at the sun >> A prediction based on evidence.",
    ],
  },
  {
    n: 21, t: 'will and shall 1', es: 'will y shall (1)', tags: ['future', 'will'],
    goals: ['Use will for decisions made at the moment of speaking', 'Offer, promise, agree or refuse with will', 'Use shall I/we to offer and suggest'],
    x: `We use **will** when we **decide at the moment of speaking**: *'The phone's ringing.' 'I'll get it.'*

Also to **offer**, **agree**, **promise** and ask for something: *I'll help you. I promise I won't be late. Will you shut the door, please?*

**won't** = refuse to do something: *The car won't start.*

**Shall I…? / Shall we…?** to offer or suggest: *Shall I open the window? Shall we go out tonight?*

Don't use will for things already decided: *I'm working tomorrow* (not *I'll work*).`,
    form: [['Afirmativa', 'Negativa', 'Pregunta'], ["I'll (will) help", "I won't (will not) tell", 'Will you…?'], ['', '', 'Shall I / Shall we…?']],
    uses: ['A decision made at the moment', 'Offering, agreeing, promising, asking', "won't = refuse", 'Shall I/we…? = offer/suggest'],
    aff: ["I'm thirsty. – I'll get you a drink.|Tengo sed. – Te traigo algo de beber.", "I'll lend you some money.|Te presto plata.", "I promise I'll phone you.|Prometo que te llamo."],
    neg: ["The door won't open.|La puerta no abre.", "I won't tell anyone.|No se lo voy a contar a nadie."],
    q: ['Will you marry me?|¿Te casás conmigo?', 'Shall I carry your bag?|¿Te llevo el bolso?'],
    err: ["I'll go to the dentist tomorrow (appointment made).|I'm going to the dentist tomorrow.|An arranged plan → present continuous.", 'Do I open the window?|Shall I open the window?|An offer → Shall I…?'],
    cmp: { w: [20, 23], x: "will = a decision now; going to / present continuous = an earlier decision." },
    ex: [
      "? 'Did you call Lucy?' 'Oh no, I forgot. I ___ her now.' | 'm calling | *'ll call | call >> A decision made at the moment of speaking.",
      "? 'It's cold in here.' '___ close the window?' | Will I | *Shall I | Do I >> An offer: Shall I…?",
      "_ I've tried to start the car, but it ___ (not/start). = won't start ; will not start >> won't = refuses to.",
      "_ Don't worry, I ___ (not/tell) anybody. = won't tell ; will not tell >> A negative promise.",
      "s I promise I [don't] tell anyone. = won't >> A promise about the future → won't.",
      "m I'll help you = an offer ; I promise I'll come = a promise ; Shall we go? = a suggestion ; The car won't start = it refuses to work >> Uses of will/shall.",
      "o I'll help you with the dishes >> An offer → will.",
      "?2 'What would you like?' 'I ___ the fish, please.' | 'm having | *'ll have | have >> A decision made at the moment (in a restaurant).",
      "f2 I'll go to my cousin's wedding on Saturday. We've already bought the tickets. = I'm going to my cousin's wedding on Saturday. We've already bought the tickets ; I am going to my cousin's wedding on Saturday. We've already bought the tickets >> An arranged plan.",
      "d2 A: Where shall we eat? B: I don't know. ___ that new Italian place? | Will we try | *Shall we try | Do we try >> A suggestion: Shall we…?",
    ],
  },
  {
    n: 22, t: 'will and shall 2', es: 'will y shall (2): predicciones', tags: ['future', 'will'], pre: [21],
    goals: ['Predict the future with will', 'Use I think / probably / I\'m sure + will', 'Tell will from arranged plans'],
    x: `We use **will** to **predict** or say what we **think** will happen: *Kate has lived abroad a long time. When she comes back, she'll find a lot of changes.*

It is very common with: **I think / I don't think, probably, I'm sure, I expect, I wonder, I bet**: *I think Kelly will pass the exam. I don't think it will rain.* (better than *I think it won't*).

**will be** = will be in a state or place: *Don't phone at 8. They'll be busy.*

We don't use will for arranged plans or for things someone has already decided (units 19–20).`,
    form: [['Expresión', 'Ejemplo'], ['I think … will', 'I think you’ll like it.'], ["I don't think … will", "I don't think she'll come."], ['probably', "He'll probably be late."]],
    uses: ['Predictions and opinions about the future', 'With I think / probably / I\'m sure', 'will be for future situations'],
    aff: ["I think you'll enjoy the film.|Creo que la película te va a gustar.", "Tom will probably be late.|Tom probablemente llegue tarde.", "I'm sure you'll pass.|Seguro que aprobás."],
    neg: ["I don't think it will rain.|No creo que llueva."],
    q: ['When do you think it will be ready?|¿Cuándo creés que estará listo?'],
    err: ["I think it won't rain.|I don't think it will rain.|The natural form: I don't think … will.", "Tom will probably to be late.|Tom will probably be late.|will + base verb, without to."],
    cmp: { w: [20, 23], x: 'A prediction with present evidence → going to. An opinion/belief → will.' },
    ex: [
      "? I think the weather ___ nice tomorrow. | is | *will be | is being >> A prediction/opinion.",
      "? I ___ it will rain. | think not | *don't think | not think >> I don't think + will.",
      "_ Don't call them at 9. They ___ (be) asleep. = 'll be ; will be >> A prediction about a future situation.",
      "_ Where do you think you ___ (live) in ten years? = will live ; 'll live >> A prediction.",
      "s He'll probably [arrives] at six. = arrive >> will + base verb (no -s).",
      "o I'm sure you will find a job. >> I'm sure + will.",
      "o I'll probably be late >> probably goes after will.",
      "?2 'Shall I come with you?' 'No, it's all right. I ___ alone.' | 'm going | *'ll go | go >> A decision/reaction at the moment.",
      "f2 She will probably to pass the exam. = She will probably pass the exam ; She'll probably pass the exam >> will + base verb.",
      "e2 I bet he'll forget. | *I'm almost sure he'll forget. | He made a bet and forgot. | He always forgets. >> I bet + will.",
    ],
  },
  {
    n: 23, t: "I will and I'm going to", es: "will vs. going to", tags: ['future', 'will', 'going-to'], pre: [20, 21, 22],
    goals: ['Tell decisions made now (will) from earlier decisions (going to)', 'Choose the future form for predictions', 'Correct typical mix-ups'],
    x: `**Future actions**:
• **will** → we decide **at the moment of speaking**: *'Gary has phoned.' 'Oh, I'll call him back.'*
• **going to** → we **had already decided** before: *I'm going to call Gary back later* (I've already thought about it).

**Predictions**: both are often possible (*It will / It's going to be a hot summer*). With **present evidence** (what we can see now) we use **going to**: *Look at those black clouds. It's going to rain.* With opinions (I think…), **will**.`,
    form: [['', 'will', 'going to'], ['Decisión', 'en el momento', 'ya tomada antes'], ['Predicción', 'opinión, creencia', 'evidencia presente']],
    uses: ['A spontaneous decision → will', 'An earlier intention → going to', 'Visible evidence → going to'],
    aff: ["'We need some bread.' 'I'll get some.'|'Necesitamos pan.' 'Voy a buscar.'", "I'm going to paint the kitchen this weekend.|Este fin de semana voy a pintar la cocina."],
    neg: ["I'm not going to come to the party.|No voy a ir a la fiesta."],
    q: ['What are you going to do with the money?|¿Qué vas a hacer con la plata?'],
    err: ["'There's no milk.' 'I'm going to buy some.' (decided now)|'There's no milk.' 'I'll buy some.'|A decision made at the moment → will.", "Look at the sky! It will rain.|Look at the sky! It's going to rain.|Present evidence → going to."],
    cmp: { w: [19, 20, 21], x: 'Summary: will (a decision now / an opinion), going to (an intention / evidence), present continuous (an arranged plan).' },
    ex: [
      "? 'The phone's ringing.' 'OK, I ___ it.' | 'm going to answer | *'ll answer | answer >> A decision made at the moment of speaking.",
      "? 'Why are you buying paint?' 'I ___ the bedroom.' | 'll paint | *'m going to paint | paint >> A decision made earlier.",
      "? Oh no, look at the time! We ___ late. | will be | *'re going to be | are >> Present evidence.",
      "_ 'I need some help.' 'Wait, I ___ (help) you.' = 'll help ; will help >> A spontaneous offer.",
      "_ 'Have you decided what to study?' 'Yes, I ___ (study) law.' = 'm going to study ; am going to study >> Already decided.",
      "s Look at those clouds! It's [will] rain. = going to >> Present evidence → It's going to rain.",
      "o I've decided: I'm going to sell the car >> An earlier intention.",
      "?2 'Did you remember to buy coffee?' 'Oh no, I forgot. I ___ some later.' | 'm going to buy | *'ll buy | buy >> He decides at the moment.",
      "f2 I've made a decision. I'll leave my job. = I've made a decision. I'm going to leave my job ; I have made a decision. I am going to leave my job >> A decision already made.",
      "d2 A: Are you free tonight? B: Sorry, I ___ to the cinema with Sam. | 'll go | *'m going | go >> An arranged plan.",
    ],
  },
  {
    n: 24, t: 'will be doing and will have done', es: 'Futuro continuo y futuro perfecto', tags: ['future', 'will'], pre: [21],
    goals: ['Use will be + -ing for actions in progress in the future', 'Use will have + past participle for actions completed before a future moment', 'Ask about plans with will you be -ing'],
    x: `**will be + -ing** = at a moment in the future, we will be **in the middle** of an action: *This time tomorrow I'll be lying on the beach.*

Also for things that are already **part of the plan/normal routine**: *I'll be going to the shops later. Can I get you anything?* And to ask politely about plans: *Will you be using your car tonight?*

**will have + past participle** = something will be **finished before** a moment in the future: *By the time you get here, we'll have finished dinner.* *Next year they'll have been married for 25 years.*`,
    form: [['Forma', 'Estructura', 'Ejemplo'], ['Futuro continuo', 'will be + -ing', "I'll be working at 10."], ['Futuro perfecto', 'will have + participio', "I'll have finished by 10."]],
    uses: ['An action in progress at a moment in the future', 'Actions already planned / polite questions', 'Something finished before a moment in the future (by…)'],
    aff: ["This time next week I'll be flying to Peru.|La semana que viene a esta hora voy a estar volando a Perú.", "By 2030 they'll have built the new airport.|Para 2030 habrán construido el nuevo aeropuerto."],
    neg: ["Don't call at 7. We won't have finished dinner.|No llames a las 7. No habremos terminado de cenar."],
    q: ['Will you be using the car this evening?|¿Vas a usar el auto esta noche?'],
    err: ['By Friday I will finish the report.|By Friday I will have finished the report.|by + a moment in the future → will have done.', "At 9 I'll work.|At 9 I'll be working.|In progress at a moment in the future → will be -ing."],
    cmp: { w: [21, 22], x: 'will do = a complete action; will be doing = in progress; will have done = finished before.' },
    ex: [
      "? Don't phone me between 7 and 8. We ___ dinner. | will have | *'ll be having | have >> In progress at that moment.",
      "? By the time you arrive, I ___ the work. | will finish | *'ll have finished | finish >> Finished before a moment in the future.",
      "_ This time tomorrow I ___ (lie) on a beach. = 'll be lying ; will be lying >> An action in progress in the future.",
      "_ Next year we ___ (be) married for ten years. = 'll have been ; will have been >> Duration until a moment in the future.",
      "s By the end of the year I will [finish] this course. = have finished >> by + future → will have finished.",
      "o Will you be going to the shops later? >> A polite question about plans.",
      "o By Monday I'll have read the book >> will have + past participle.",
      "?2 'Can we meet at 10?' 'Sorry, I ___ a class then.' | 'll have taught | *'ll be teaching | teach >> In progress at that time.",
      "f2 By 2040 scientists will find a cure. = By 2040 scientists will have found a cure >> by + a moment in the future.",
      "e2 She'll have left by then. | *She will leave before that time. | She will leave at exactly that time. | She was leaving at that time. >> will have done.",
    ],
  },
  {
    n: 25, t: "when I do and when I've done, if and when", es: 'when / if + presente', tags: ['future', 'conjunctions', 'time'], pre: [21],
    goals: ['Use the present (not will) after when, if, as soon as, until, before…', 'Use the present perfect for something finished earlier', 'Tell if from when'],
    x: `After **when, while, before, after, as soon as, until/till, if**, talking about the **future**, we use the **present**, **not will**: *I'll call you **when I get** home* (not *when I'll get*).

To show that something will be **finished** before the other action, we use the **present perfect**: *When I've read this book, I'll lend it to you.*

**if** = we don't know if it will happen; **when** = we are sure it will happen: *If I'm late, start without me.* / *I'm going shopping. When I come back, we can have lunch.*`,
    form: [['Oración principal (futuro)', 'Conjunción + presente'], ["I'll call you", 'when I arrive.'], ['Wait here', 'until I come back.'], ["I'll lend you the book", "when I've finished it."]],
    uses: ['when/as soon as/until/before/after + present with a future meaning', 'when + present perfect = finished before', 'if = possible; when = certain'],
    aff: ["I'll phone you as soon as I arrive.|Te llamo en cuanto llegue.", "Wait here until I come back.|Esperá acá hasta que vuelva.", "When I've finished, I'll help you.|Cuando termine, te ayudo."],
    neg: ["I won't go out until it stops raining.|No voy a salir hasta que pare de llover."],
    q: ['What will you do when you finish school?|¿Qué vas a hacer cuando termines la escuela?'],
    err: ["I'll call you when I'll get home.|I'll call you when I get home.|After when → present.", "If it will rain, we'll stay in.|If it rains, we'll stay in.|After if → present."],
    cmp: { w: [38], x: 'The same as in the first conditional: if + present, will in the other part.' },
    ex: [
      "? I'll tell you when I ___ the results. | will get | *get | got >> when + present with a future meaning.",
      "_ We'll start as soon as everybody ___ (arrive). = arrives ; has arrived >> as soon as + present.",
      "_ Don't go out until it ___ (stop) raining. = stops >> until + present.",
      "? I'll lend you the book when I ___ reading it. | will finish | *'ve finished | finished >> Finished before: present perfect.",
      "? I'm going to the shops. ___ I come back, we'll have lunch. | If | *When | Unless >> It is certain that I'll come back → when.",
      "s Wait here until I [will] come back. = (quitar will) >> After until we use the present: until I come back.",
      "o I'll phone you when I get to the hotel. >> when + present.",
      "o I'll text you when I arrive >> when + present.",
      "f2 Before you will leave, close the windows. = Before you leave, close the windows ; Before you leave close the windows >> before + present.",
      "b2 if / you / need / help / call me = If you need help, call me ; If you need help call me ; Call me if you need help >> if + present.",
    ],
  },
];

import type { UnitSrc } from '../dsl';

// Module 4 — Modals (EGU units 26–37)
export const m04: UnitSrc[] = [
  {
    n: 26, t: 'can, could and (be) able to', es: 'can, could, be able to', tags: ['modals'],
    goals: ['Talk about ability and possibility with can/could', 'Use be able to in the tenses that can doesn\'t have', 'Tell could from was able to in the past'],
    x: `**can** = it is possible / I know how to do something: *I can swim. You can see the sea from here.*

**be able to** is possible, but **can** is more common in the present. We use **be able to** where can doesn't exist: infinitive, present perfect, future: *I'd like to be able to play the piano. I haven't been able to sleep. You'll be able to walk soon.*

**could** = **general** ability in the past: *My grandfather could speak five languages.*

For a **specific achievement** in a past situation (you managed to do it) we use **was/were able to** or **managed to**, not could: *The fire spread quickly, but everybody **was able to** escape.* In the negative, **couldn't** works for both: *I couldn't sleep.*`,
    form: [['Tiempo', 'Forma'], ['Presente', 'can / am able to'], ['Pasado (general)', 'could'], ['Pasado (logro concreto)', 'was able to / managed to'], ['Perfect / futuro / infinitivo', 'have been able to / will be able to / to be able to']],
    uses: ['Present ability or possibility: can', 'Forms that can doesn\'t have: be able to', 'General past: could; a specific achievement: was able to'],
    aff: ['I can play the guitar.|Sé tocar la guitarra.', "I haven't been able to sleep recently.|Últimamente no pude dormir.", 'They were able to escape from the fire.|Lograron escapar del incendio.'],
    neg: ["I couldn't find my keys.|No pude encontrar mis llaves."],
    q: ['Can you speak Japanese?|¿Hablás japonés?', 'Will you be able to come?|¿Vas a poder venir?'],
    err: ["I haven't could sleep.|I haven't been able to sleep.|can has no present perfect.", 'The fire was big, but we could escape.|The fire was big, but we were able to escape.|A specific achievement → was/were able to.'],
    cmp: { w: [27], x: 'could is also used for possibilities and suggestions in the present (unit 27).' },
    ex: [
      "? I'm sorry, I ___ come to your party next week. | can't to | *won't be able to | don't can >> Future: will be able to.",
      "_ I'd love to ___ (be able to) speak Chinese. = be able to >> After to: be able to.",
      "? When she was young, she ___ run very fast. | was able | *could | can >> General ability in the past.",
      "? The water was cold, but we ___ swim to the boat. | could | *managed to | can >> A specific achievement: managed to / were able to.",
      "_ I ___ (not/see) anything. It was too dark. = couldn't see ; could not see >> couldn't works for general and specific ability.",
      "s Ted hasn't been [can] to walk since the operation. = able >> have been able to (can has no present perfect).",
      "o Will you be able to help me tomorrow? >> Future: will be able to.",
      "o I haven't been able to sleep well for weeks >> present perfect: have been able to.",
      "f2 He tried hard and finally he could pass the exam. = He tried hard and finally he was able to pass the exam ; He tried hard and finally he managed to pass the exam >> A specific achievement.",
      "m can = present ability ; could = general past ability ; was able to = a specific past achievement ; will be able to = future ability >> Forms of can.",
    ],
  },
  {
    n: 27, t: 'could (do) and could have (done)', es: 'could y could have', tags: ['modals'], pre: [26],
    goals: ['Use could for possibilities and suggestions', 'Talk about things that were possible but didn\'t happen with could have done', 'Use couldn\'t + comparative'],
    x: `**could** = something is **possible** now or in the future, or a **suggestion**: *We could go to the cinema tonight. It could rain later.*

Also for things that are **not realistic**: *I'm so hungry I could eat a horse.*

**could have + past participle** = something was **possible in the past but didn't happen**: *I was so tired, I could have slept for a week. Why did you stay at a hotel? You could have stayed with us.*

**couldn't have done** = it would have been impossible: *We couldn't have done it without your help.*`,
    form: [['Forma', 'Significado'], ['could + verbo', 'posibilidad / sugerencia ahora o futuro'], ['could have + participio', 'posibilidad pasada no realizada'], ["couldn't have + participio", 'imposible en el pasado']],
    uses: ['Suggestions (We could…)', 'Present/future possibility', 'could have done = it was possible (but it didn\'t happen)'],
    aff: ['We could go out for dinner.|Podríamos salir a cenar.', 'You could have called me!|¡Me podrías haber llamado!', 'It could be true.|Podría ser verdad.'],
    neg: ["We couldn't have won without you.|No podríamos haber ganado sin vos."],
    q: ['Could it be a mistake?|¿Podría ser un error?'],
    err: ['You could come yesterday.|You could have come yesterday.|A past possibility that didn\'t happen → could have + past participle.', 'I could have went.|I could have gone.|could have + past participle.'],
    cmp: { w: [28, 29], x: 'could = possible; must = a certain deduction; might = a possibility.' },
    ex: [
      "? 'What shall we do tonight?' 'We ___ go to the beach.' | could have | *could | can't >> A suggestion.",
      "_ Why did you take a taxi? I ___ (give) you a lift. = could have given >> A past possibility that didn't happen.",
      "? It was a dangerous road. You ___ had an accident. | could | *could have | can have >> could have + past participle.",
      "_ I'm so tired, I ___ (sleep) for a week. = could sleep >> An unrealistic exaggeration.",
      "s We could [went] to the concert, but we stayed home. = have gone >> could have + past participle.",
      "o You could have told me the truth. >> could have + past participle.",
      "o We could go to the beach tomorrow >> A suggestion: could.",
      "?2 The match was close. We ___ easily ___. | *could / have won | could / win | can / won >> could have won = it was possible to win, but we didn't.",
      "f2 Thanks for your help. We couldn't do it without you. = Thanks for your help. We couldn't have done it without you ; Thanks for your help. We could not have done it without you >> Past: couldn't have done.",
      "e2 You could have been killed! | *It was possible for you to die, but you didn't. | Someone killed you. | It's possible you will die. >> could have been + past participle.",
    ],
  },
  {
    n: 28, t: "must and can't", es: "must y can't (deducción)", tags: ['modals'],
    goals: ['Make certain deductions with must', 'Make certain negative deductions with can\'t', 'Make deductions about the past with must have / can\'t have'],
    x: `**must** = I am **sure** that something is true (a logical deduction): *You've been travelling all day. You must be tired.*

**can't** = I am **sure** that something is **not** possible: *She can't be hungry. She's just eaten.* (we don't use mustn't for this).

In the **past**: **must have + past participle** / **can't have (couldn't have) + past participle**: *The phone rang, but I didn't hear it. I must have been asleep.* *She walked past me. She can't have seen me.*

Structure: *must be -ing* for actions in progress: *Someone must be playing music.*`,
    form: [['', 'Presente', 'Pasado'], ['Seguro que sí', 'must be / must do', 'must have done'], ['Seguro que no', "can't be / can't do", "can't have done / couldn't have done"]],
    uses: ['Positive deduction: must', "Negative deduction: can't", 'Past deduction: must have / can\'t have + past participle'],
    aff: ["You must be tired after the trip.|Debés estar cansado después del viaje.", "I've lost my phone. I must have left it on the bus.|Perdí el teléfono. Debo haberlo dejado en el colectivo."],
    neg: ["That can't be true.|Eso no puede ser cierto.", "He can't have finished already. He only started ten minutes ago.|No puede haber terminado ya."],
    q: ['Where can she be?|¿Dónde puede estar?'],
    err: ["She mustn't be at home. The lights are off.|She can't be at home. The lights are off.|Negative deduction → can't.", 'He must be left early.|He must have left early.|Past → must have + past participle.'],
    cmp: { w: [29, 31], x: 'must for deduction ≠ must for obligation (unit 31). might = possible, not certain.' },
    ex: [
      "? You've been walking all day. You ___ tired. | can't be | *must be | must have been >> A certain deduction about the present.",
      "? Mark ___ hungry. He's just had a big lunch. | mustn't be | *can't be | must be >> Negative deduction: can't.",
      "_ The ground is wet. It ___ (rain) last night. = must have rained >> A past deduction.",
      "_ She passed me without speaking. She ___ (see) me. = can't have seen ; couldn't have seen >> A negative past deduction.",
      "s Kate [mustn't] be at work. Her car is outside her house. = can't >> Negative deduction: can't.",
      "o He must have forgotten about the meeting. >> must have + past participle.",
      "o You must be joking >> must be + -ing (deduction).",
      "?2 'Jane hasn't answered my messages.' 'She ___ busy.' | can't be | *must be | must have >> A possible deduction.",
      "f2 The door was unlocked. Somebody must forget to lock it. = The door was unlocked. Somebody must have forgotten to lock it >> A past deduction.",
      "m must be = seguro que es ; can't be = seguro que no es ; must have been = seguro que fue ; can't have been = seguro que no fue >> Degrees of certainty.",
    ],
  },
  {
    n: 29, t: 'may and might 1', es: 'may y might (1)', tags: ['modals'],
    goals: ['Talk about possibility with may/might', 'Use may/might have + past participle for the past', 'Tell might not from can\'t'],
    x: `**may** and **might** = it **is possible** that something is true or will happen: *It may be true. She might be at work.*

Negative: **may not / might not (mightn't)** = it's possible that it isn't true or won't happen: *She might not come.*

For the **past**: **may / might have + past participle**: *I can't find my bag. I might have left it in the shop.*

**could** can also express possibility, but **couldn't** = impossible: *She might not be at home* (maybe not) ≠ *She couldn't be at home* (impossible).`,
    form: [['Presente / futuro', 'Pasado'], ['may/might + verbo', 'may/might have + participio'], ['may/might be + -ing', 'may/might have been + -ing']],
    uses: ['Present or future possibility', 'Possibility about the past: might have done', 'might not = maybe not'],
    aff: ["It might rain this afternoon.|Puede que llueva esta tarde.", "She may be in a meeting.|Puede que esté en una reunión.", "He might have missed the bus.|Puede que haya perdido el colectivo."],
    neg: ["I might not go to the party.|Puede que no vaya a la fiesta."],
    q: ["'Where's Tom?' 'He may be in the garden.'|—¿Dónde está Tom? —Puede que esté en el jardín."],
    err: ['He might to come later.|He might come later.|might + base verb.', 'She may has forgotten.|She may have forgotten.|may have + past participle.'],
    cmp: { w: [28, 30], x: 'must = certain; may/might = possible; can\'t = certain it isn\'t.' },
    ex: [
      "? Take an umbrella. It ___ rain later. | must | *might | can't >> Possibility, not certainty.",
      "_ I'm not sure where Anna is. She ___ (be) in the library. = might be ; may be ; could be >> Possibility.",
      "_ He didn't answer the phone. He ___ (be) asleep. = might have been ; may have been ; could have been >> A past possibility.",
      "? I ___ go to the party. I haven't decided. | must | *may not | can't >> A negative possibility.",
      "s She might [has] left already. = have >> might + have + past participle.",
      "o I might have left my keys at work. >> might have + past participle.",
      "o He might not come >> might/may not + verb.",
      "?2 'She might not be at home' means… | *Perhaps she isn't at home. | It's impossible that she's at home. | She must be at home. >> might not = maybe not.",
      "f2 I can't find my wallet. I might drop it in the street. = I can't find my wallet. I might have dropped it in the street ; I can't find my wallet. I may have dropped it in the street >> Past: might have + past participle.",
      "e2 They may be waiting for us. | *It's possible that they are waiting for us now. | They waited for us. | They must always wait for us. >> may be + -ing.",
    ],
  },
  {
    n: 30, t: 'may and might 2', es: 'may y might (2)', tags: ['modals'], pre: [29],
    goals: ['Talk about possible future actions with may/might', 'Use might as well', 'Use may/might be -ing for possible plans'],
    x: `We use **may/might** for **possible future actions or situations**: *I don't know what I'm doing this weekend. I might go away.*

**might be -ing** = a possible plan: *I might be going to Rome next month.*

**might as well / may as well** = there is no better option, so let's do it (even if it isn't ideal): *The bus doesn't come for an hour. We might as well walk.*

**may** is also used to **ask for permission** formally (*May I sit here?*), unit 37.`,
    form: [['Estructura', 'Ejemplo'], ['might + verbo', 'I might go away.'], ['might be + -ing', "I might be working late."], ['might as well + verbo', 'We might as well walk.']],
    uses: ['Possible future actions', 'Possible plans (might be -ing)', 'might as well = there is no better option'],
    aff: ["I might buy a new laptop next month.|Puede que me compre una notebook el mes que viene.", "We might as well go home. Nobody's coming.|Mejor nos vamos a casa. No viene nadie."],
    neg: ["I may not have time tomorrow.|Puede que mañana no tenga tiempo."],
    q: ['Might you be free on Friday?|¿Puede que estés libre el viernes?'],
    err: ['We might as well to walk.|We might as well walk.|might as well + base verb.', 'Maybe I will might come.|I might come.|might already expresses possibility.'],
    cmp: { w: [29], x: 'The same idea of possibility applied to the future.' },
    ex: [
      "? I'm not sure what to do. I ___ study law. | will | *might | must >> A possible future action.",
      "_ The film starts in 5 minutes. We'll be late. We ___ as well stay at home. = might ; may >> might as well.",
      "? Take your phone. I ___ need to call you. | must | *might | will to >> A future possibility.",
      "_ I ___ (be/work) on Saturday. I'll know tomorrow. = might be working ; may be working >> A possible plan.",
      "s We might as well [to] go now. = (quitar to) >> might as well + base verb without to.",
      "o We might as well take a taxi. >> might as well + base verb.",
      "o I might go to Chile in December >> A future possibility.",
      "?2 'Shall we wait for the next bus?' 'It's only 10 minutes' walk. We ___.' | must walk | *might as well walk | can't walk >> There is no reason to wait.",
      "f2 Maybe I will to be late tomorrow. = I might be late tomorrow ; I may be late tomorrow ; Maybe I will be late tomorrow ; Maybe I'll be late tomorrow >> might + base verb.",
    ],
  },
  {
    n: 31, t: 'have to and must', es: 'have to y must', tags: ['modals'],
    goals: ['Talk about obligation with have to and must', 'Use don\'t have to and mustn\'t correctly', 'Use had to and will have to'],
    x: `**I have to** and **I must** express **obligation** / necessity.

• **must**: the **speaker** feels the obligation (personal opinion): *I must go to bed earlier.* Also in written rules.
• **have to**: the obligation comes from **outside** (rules, circumstances): *I have to work on Saturdays* (my boss says so).

**must** only exists in the present/future. For the **past**: **had to**; future: **will have to**; questions: **Do you have to…?**

**don't have to** = **it isn't necessary** (you can if you want) ≠ **mustn't** = **it is not allowed**.`,
    form: [['Forma', 'Significado'], ['must / have to', 'es necesario'], ["don't have to", 'no es necesario'], ["mustn't", 'está prohibido'], ['had to', 'fue necesario (pasado)']],
    uses: ['must = personal obligation', 'have to = external obligation', "don't have to ≠ mustn't", 'had to / will have to / do you have to'],
    aff: ['I have to wear a uniform at work.|Tengo que usar uniforme en el trabajo.', 'I must remember to call Mum.|Tengo que acordarme de llamar a mamá.', 'We had to wait for an hour.|Tuvimos que esperar una hora.'],
    neg: ["You don't have to come if you don't want to.|No tenés que venir si no querés.", "You mustn't tell anyone.|No se lo podés decir a nadie."],
    q: ['Do you have to work tomorrow?|¿Tenés que trabajar mañana?'],
    err: ['I must work late yesterday.|I had to work late yesterday.|Past → had to.', "You mustn't pay. It's free.|You don't have to pay. It's free.|It isn't necessary → don't have to."],
    cmp: { w: [32], x: "Unit 32 goes deeper into mustn't / needn't / don't need to." },
    ex: [
      "? I ___ get up early yesterday. | must | *had to | have to >> Past: had to.",
      "? You ___ pay for the museum. It's free. | mustn't | *don't have to | must >> It isn't necessary.",
      "? You ___ smoke inside the hospital. | don't have to | *mustn't | needn't to >> It is not allowed.",
      "_ ___ you ___ (have to) wear a tie at work? = Do / have to >> Question: Do you have to…?",
      "_ If you fail, you ___ (have to) do the exam again. = 'll have to ; will have to >> Future: will have to.",
      "s Last night I [must] stay late at the office. = had to >> must has no past form.",
      "m mustn't = not allowed ; don't have to = not necessary ; had to = it was necessary ; must = it's necessary (my opinion) >> Obligation and no obligation.",
      "o You don't have to do it today >> don't have to = it isn't necessary.",
      "?2 'I ___ go to the dentist. I have toothache.' (speaker's own feeling) | *must | mustn't | don't have to >> A need felt by the speaker.",
      "f2 Did you must show your passport? = Did you have to show your passport >> Past/question: did you have to.",
    ],
  },
  {
    n: 32, t: "must mustn't needn't", es: "must, mustn't, needn't", tags: ['modals'], pre: [31],
    goals: ['Use needn\'t / don\'t need to (it isn\'t necessary)', 'Use needn\'t have done for the past', 'Tell didn\'t need to from needn\'t have'],
    x: `**must** = it is necessary; **mustn't** = don't do it (not allowed); **needn't / don't need to** = **it isn't necessary**: *You needn't come if you don't want to.*

Past:
• **didn't need to** = it wasn't necessary (maybe you did it, maybe not): *I didn't need to get up early, so I didn't.*
• **needn't have + past participle** = **you did it, but it wasn't necessary** (wasted effort): *I needn't have brought an umbrella. It didn't rain.*`,
    form: [['Forma', 'Significado'], ["mustn't do", 'no lo hagas'], ["needn't do / don't need to do", 'no es necesario'], ["didn't need to do", 'no era necesario'], ["needn't have done", 'lo hice, pero no era necesario']],
    uses: ["mustn't = it is not allowed", "needn't = it isn't necessary", "needn't have done = an unnecessary action in the past"],
    aff: ['You must keep it a secret.|Tenés que guardar el secreto.'],
    neg: ["You needn't shout. I can hear you.|No hace falta que grites. Te escucho.", "I needn't have cooked so much. Nobody was hungry.|No hacía falta que cocinara tanto."],
    q: ['Do we need to book a table?|¿Hace falta reservar mesa?'],
    err: ["You needn't to worry.|You needn't worry.|needn't + base verb (or don't need to).", "You mustn't hurry. We have lots of time.|You needn't hurry. We have lots of time.|It isn't necessary → needn't."],
    cmp: { w: [31], x: "Summary: mustn't (not allowed) / needn't = don't have to (not necessary)." },
    ex: [
      "? We have plenty of time. You ___ hurry. | mustn't | *needn't | must >> It isn't necessary.",
      "? This is a secret. You ___ tell anyone. | needn't | *mustn't | don't need >> Not allowed.",
      "? I ___ brought my coat. It was warm all day. | didn't need to | *needn't have | mustn't have >> I brought it and it wasn't necessary.",
      "_ You ___ (not/need) to pay now. You can pay later. = don't need ; do not need >> don't need to = it isn't necessary.",
      "s You needn't [to] come early. = (quitar to) >> needn't + base verb.",
      "o You needn't have bought me a present. >> needn't have + past participle.",
      "o You needn't wait for me >> needn't / don't need to.",
      "?2 'I didn't need to wait' means… | I waited but it wasn't necessary. | *It wasn't necessary to wait. | I mustn't wait. >> didn't need to = it wasn't necessary (it doesn't say if he did it).",
      "f2 We needn't hurry, so we got there too early. = We needn't have hurried. We got there too early ; We needn't have hurried, we got there too early >> We did it and it wasn't necessary → needn't have.",
    ],
  },
  {
    n: 33, t: 'should 1', es: 'should (1)', tags: ['modals'],
    goals: ['Give advice and opinions with should', 'Talk about expectations with should', 'Use should have + past participle to criticise the past'],
    x: `**should** = it is a **good idea**, it is the **right thing**: *You should see a doctor. You shouldn't eat so much.*

Also for what we **expect** to happen: *She's been studying hard. She should pass the exam.*

**should have + past participle** = something was the right thing to do but it **wasn't done** (or something was done wrong): *I should have studied more. You shouldn't have said that.*

**ought to** = a similar meaning to should: *You ought to rest.*`,
    form: [['Forma', 'Ejemplo'], ['should + verbo', 'You should rest.'], ["shouldn't + verbo", "You shouldn't worry."], ['should have + participio', 'I should have called you.']],
    uses: ['Advice, opinion', 'A reasonable expectation', 'should have done = criticism / regret', 'ought to = should'],
    aff: ['You should try this cake.|Tenés que probar esta torta.', 'I should have listened to you.|Te debería haber escuchado.', 'They should arrive soon.|Deberían llegar pronto.'],
    neg: ["You shouldn't work so hard.|No deberías trabajar tanto."],
    q: ['Should I tell him?|¿Debería decírselo?'],
    err: ['You should to see a doctor.|You should see a doctor.|should + base verb.', "I should studied more.|I should have studied more.|Past → should have + past participle."],
    cmp: { w: [34, 35], x: "had better = stronger advice for a specific situation (unit 35)." },
    ex: [
      "? You look tired. You ___ go to bed. | must to | *should | should to >> Advice.",
      "_ The film was great. You ___ (come) with us. = should have come >> Past criticism/regret.",
      "_ You ___ (not/eat) so much sugar. It's bad for you. = shouldn't eat ; should not eat >> Negative advice.",
      "? Ann has studied a lot. She ___ pass the exam easily. | *should | shouldn't | should have >> An expectation.",
      "s I'm sorry. I should have [tell] you before. = told >> should have + past participle (told).",
      "o You shouldn't have shouted at him. >> shouldn't have + past participle.",
      "o You should stop smoking >> Advice: should.",
      "?2 'I'm lost.' 'You ___ a map.' | should take | *should have taken | must take >> It's already happened: should have taken.",
      "f2 We should to leave now. = We should leave now ; We ought to leave now >> should + base verb.",
      "m should = advice ; should have done = it was right but it wasn't done ; ought to = means the same as should ; shouldn't = it's not a good idea >> Uses of should.",
    ],
  },
  {
    n: 34, t: 'should 2', es: 'should (2)', tags: ['modals'], pre: [33],
    goals: ['Use should after insist, suggest, recommend…', 'Use should in it\'s important/strange that…', 'Use if … should and I should think'],
    x: `After verbs like **insist, suggest, propose, recommend, demand** we can use **should** (or the base form of the verb / the subjunctive): *They insisted that we should have dinner with them* = *…that we have dinner…*

With **suggest** we DON'T use the infinitive: *I suggest that you should go / that you go / going* (not *I suggest you to go*).

**It's important / essential / strange / surprising that … should…**: *It's strange that she should be late. She's usually punctual.*

**If … should** = if by chance: *If anyone should call, tell them I'm out.*`,
    form: [['Estructura', 'Ejemplo'], ['suggest/insist that + sujeto + (should) + verbo', 'I suggest that he (should) apologise.'], ['suggest + -ing', 'I suggest going by bus.'], ["it's strange that … should", "It's strange that he should say that."]],
    uses: ['After insist, suggest, recommend, demand', 'With important / strange / surprising that…', 'If … should = if by chance'],
    aff: ['The doctor recommended that I should rest.|El médico me recomendó que descansara.', 'I suggest we take a taxi.|Sugiero que tomemos un taxi.', "If you should see Tom, say hello.|Si por casualidad ves a Tom, saludalo."],
    neg: ["They insisted that we shouldn't pay.|Insistieron en que no pagáramos."],
    q: ['What do you suggest I should do?|¿Qué me sugerís que haga?'],
    err: ['I suggest you to go home.|I suggest you go home.|suggest doesn\'t take object + to.', 'She suggested me to rest.|She suggested that I should rest.|suggest that + subject + (should) + verb.'],
    cmp: { w: [55], x: 'Other verbs do take object + to (advise, tell, ask): unit 55.' },
    ex: [
      "? I suggest ___ by train. | to go | *going | go to >> suggest + -ing.",
      "? The doctor insisted that he ___ more exercise. | doing | *should do | to do >> insist that + (should) + verb.",
      "_ They suggested that we ___ (stay) at a hotel. = should stay ; stay >> suggest that + (should) + verb.",
      "s I suggest that you [to] call her. = (quitar to) >> suggest that + subject + base verb (or should). ++ I suggest that you call her.",
      "_ It's strange that he ___ (say) that. = should say >> It's strange that … should.",
      "o I recommend that you should book in advance. >> recommend that + should.",
      "o I suggest we eat out >> suggest + clause / -ing.",
      "?2 If anyone ___ call, tell them I'm out. | *should | would | shall to >> If … should = if by chance.",
      "f2 What do you suggest me to do? = What do you suggest I do ; What do you suggest I should do ; What do you suggest that I do ; What do you suggest that I should do >> suggest + clause.",
    ],
  },
  {
    n: 35, t: "I'd better … it's time …", es: "had better / it's time", tags: ['modals'],
    goals: ['Give urgent advice with had better', 'Use it\'s time + past', 'Use it\'s time to + verb'],
    x: `**I'd better (had better) + base verb** = it would be better to do it; if not, there may be a problem. It's for a **specific situation**: *It's going to rain. You'd better take an umbrella.* Negative: **had better not**: *You'd better not be late.*

Although it is "had", **it is not past**: it refers to the present or future.

**It's time + to + verb**: *It's time to go.*
**It's time + subject + past** = we should do it now (criticism/complaint): *It's time you went to bed. It's (high/about) time you did something.*`,
    form: [['Estructura', 'Ejemplo'], ["had better (’d better) + verbo", "You'd better hurry."], ['had better not + verbo', "We'd better not wake him."], ["it's time + to + verbo", "It's time to leave."], ["it's time + sujeto + pasado", "It's time we left."]],
    uses: ['Urgent advice for a specific situation', "it's time to…", "it's (high) time + past = it should happen now"],
    aff: ["We'd better leave now or we'll miss the train.|Mejor nos vamos ahora o perdemos el tren.", "It's time you got a job.|Ya es hora de que consigas trabajo."],
    neg: ["You'd better not tell her.|Mejor no se lo digas."],
    q: ["Hadn't we better ask first?|¿No sería mejor preguntar primero?"],
    err: ["You'd better to go.|You'd better go.|had better + base verb.", "It's time we go home.|It's time we went home.|it's time + subject + past."],
    cmp: { w: [33], x: 'should = general advice; had better = advice for now with a hidden warning.' },
    ex: [
      "? It's late. We ___ go home. | 'd better to | *'d better | had to >> had better + base verb.",
      "? You ___ touch that. It's hot. | 'd not better | *'d better not | hadn't better to >> Negative: had better not.",
      "_ It's 11 o'clock. It's time the children ___ (go) to bed. = went >> it's time + subject + past.",
      "_ It's late. It's time ___ (leave). = to leave >> it's time + to.",
      "s You'd better [to] call your mother. = (quitar to) >> had better + base verb.",
      "o It's high time you found a job. >> high time + subject + past.",
      "o We'd better not be late >> had better not.",
      "?2 'I feel sick.' 'You ___ see a doctor.' | 'd better to | *'d better | had better saw >> Urgent advice.",
      "f2 It's time you go to bed. = It's time you went to bed ; It's time for you to go to bed >> it's time + past.",
    ],
  },
  {
    n: 36, t: 'would', es: 'would', tags: ['modals', 'conditionals', 'used-to'],
    goals: ['Use would for imaginary situations', 'Use would have + past participle', 'Talk about past habits and past refusals with would/wouldn\'t'],
    x: `**would** is used to **imagine** situations or actions: *It would be nice to have a holiday. I wouldn't like to be a teacher.*

**would have + past participle** = imaginary actions in the **past** (they didn't happen): *They helped us a lot. I don't know what we'd have done without them.*

**wouldn't** = someone **refused** in the past: *I asked him, but he wouldn't tell me.*

**would** also expresses **past habits** (repeated actions, not states): *When we were children, we would go to the beach every summer.* For states we use used to.`,
    form: [['Uso', 'Ejemplo'], ['Situación imaginaria', 'It would be great.'], ['Pasado imaginario', "I would have helped you."], ['Negativa pasada', "She wouldn't listen."], ['Hábito pasado', 'He would walk for hours.']],
    uses: ['Imaginary situations', 'would have done = an imaginary past', "wouldn't = refused", 'Past habits (actions only)'],
    aff: ['It would be lovely to live by the sea.|Sería precioso vivir junto al mar.', 'Every Sunday my grandmother would make pasta.|Todos los domingos mi abuela hacía pasta.'],
    neg: ["I asked her to help, but she wouldn't.|Le pedí ayuda, pero no quiso.", "I wouldn't like to live there.|No me gustaría vivir ahí."],
    q: ['Would you like to come?|¿Te gustaría venir?', 'What would you do?|¿Qué harías?'],
    err: ['When I was a child, I would have a dog.|When I was a child, I used to have a dog.|A past state → used to, not would.', 'I would helped you.|I would have helped you.|would have + past participle.'],
    cmp: { w: [18, 38, 39], x: 'would in conditionals: units 38–40. Past habits with states: used to (unit 18).' },
    ex: [
      "? It ___ nice to have a bigger flat. | will be | *would be | would have >> An imaginary situation.",
      "? I asked him to help, but he ___. | didn't want | *wouldn't | won't >> A negative in the past.",
      "_ I didn't know you were in hospital. I ___ (visit) you. = would have visited ; 'd have visited >> An imaginary past.",
      "? When I was a child, I ___ a bike. (state) | would have | *used to have | would >> A state → used to.",
      "s Every evening my father would [to] read us a story. = (quitar to) >> would + base verb. ++ Every evening my father would read us a story.",
      "o I wouldn't like to be a politician. >> wouldn't like to.",
      "o What would you do >> An imaginary situation.",
      "f2 The car wouldn't to start this morning. = The car wouldn't start this morning ; The car would not start this morning >> wouldn't + base verb.",
      "?2 Which sentence is NOT correct? | We would go fishing every summer. | *We would live in a small house in those days. | She wouldn't listen to me. >> A state (live) → used to.",
    ],
  },
  {
    n: 37, t: 'can/could/would you … ? etc. (Requests, offers, permission and invitations)', es: 'Pedidos, ofrecimientos, permiso e invitaciones', tags: ['modals', 'questions'],
    goals: ['Ask for things with Can/Could/Would you…?', 'Ask for permission with Can/Could/May I…?', 'Offer and invite with Can I…?, Would you like…?'],
    x: `**Asking for something**: *Can you…? Could you…?* (more polite), *Would you…? Do you think you could…?* Also *Can I have…? / Could I have…?* to ask for things.

**Asking for permission**: *Can I…? Could I…? May I…?* (formal). Answer: *Yes, of course. / Sure.* Also *Do you mind if I…?*

**Offering**: *Can I get you something? Would you like…?*

**Inviting**: *Would you like to come…? Would you like…?* (not *Do you like…?*, which asks about what you like).

We don't use **Would I…?** to ask for permission.`,
    form: [['Función', 'Ejemplos'], ['Pedir', 'Can/Could/Would you…? Could I have…?'], ['Permiso', 'Can/Could/May I…? Do you mind if I…?'], ['Ofrecer', 'Can I…? Would you like…?'], ['Invitar', 'Would you like to…?']],
    uses: ['Polite requests', 'Asking for permission', 'Offers and invitations'],
    aff: ['Could you open the window, please?|¿Podrías abrir la ventana, por favor?', 'Can I have a glass of water?|¿Me das un vaso de agua?'],
    neg: [],
    q: ['May I use your phone?|¿Puedo usar su teléfono?', 'Would you like to come to dinner?|¿Te gustaría venir a cenar?', 'Can I help you?|¿Te ayudo?'],
    err: ['Do you like a coffee?|Would you like a coffee?|An offer → Would you like.', 'Would I use your bathroom?|Could I use your bathroom?|Permission → Can/Could/May I.'],
    cmp: { w: [26, 36], x: 'Here can/could/would don\'t express ability or an imaginary situation, but politeness.' },
    ex: [
      "? (in a café) ___ have a coffee, please? | Do I | *Could I | Would I >> Asking for something: Could I have…?",
      "? ___ you like something to drink? | Do | *Would | Can >> An offer: Would you like…?",
      "? (formal) ___ I come in? | Would | *May | Shall to >> Formal permission: May I…?",
      "_ ___ you tell me the time, please? = Could ; Can ; Would >> A request: Could you…?",
      "s [Do] you like to come to the cinema tonight? = Would >> Invitation: Would you like…?",
      "o Could you help me with my bags? >> Could you + base verb.",
      "o Do you mind if I open the window >> Do you mind if I…?",
      "m Could you…? = a request ; May I…? = formal permission ; Would you like…? = an invitation/offer ; Can I help you? = offering help >> Functions.",
      "f2 Would I borrow your pen? = Could I borrow your pen ; Can I borrow your pen ; May I borrow your pen >> Permission.",
      "d2 A: ___ I get you anything? B: A cup of tea would be nice. | Would | *Can | Do >> An offer: Can I get you…?",
    ],
  },
];

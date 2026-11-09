import type { UnitSrc } from '../dsl';

// Module 5 — if and wish (EGU units 38–41)
export const m05: UnitSrc[] = [
  {
    n: 38, t: 'if I do … and if I did …', es: 'Condicional real vs. imaginario', tags: ['conditionals'], pre: [25],
    goals: ['Use if + present for real possibilities', 'Use if + past for imaginary situations', 'Choose between them depending on how likely it is'],
    x: `**if I do** (+ will): we talk about something **possible / realistic**: *If I find your keys, I'll give them to you.*

**if I did** (+ would): an **imaginary** or **unlikely** situation, even when we talk about the present or future. The past form does **not** mean past time: *If I found a wallet in the street, I'd take it to the police* (I don't expect to find one).

We never use would in the **if** part: *If I had more time…* (not *If I would have*).

Compare: *If we take the bus, it will be cheaper* (a real option) / *If we took the bus, it would take hours* (we're not thinking of taking it).`,
    form: [['Tipo', 'Parte if', 'Resultado'], ['Real / posible', 'if + presente', 'will + verbo'], ['Imaginario / improbable', 'if + pasado', 'would + verbo']],
    uses: ['A real possibility → if + present, will', 'An imaginary situation → if + past, would', 'No would after if'],
    aff: ["If it rains, we'll stay at home.|Si llueve, nos quedamos en casa.", "If I won the lottery, I'd travel round the world.|Si ganara la lotería, viajaría por el mundo."],
    neg: ["If you don't hurry, you'll miss the bus.|Si no te apurás, vas a perder el colectivo.", "I wouldn't go if I were you.|Yo no iría."],
    q: ['What would you do if you lost your job?|¿Qué harías si perdieras el trabajo?'],
    err: ['If I would have money, I would buy it.|If I had money, I would buy it.|No would in the if part.', "If it will rain, we'll stay in.|If it rains, we'll stay in.|if + present for the future."],
    cmp: { w: [39, 40], x: 'Unit 39: if + past for the unreal present. Unit 40: if + past perfect for the past.' },
    ex: [
      "? If I ___ him, I'll tell him. | will see | *see | saw >> Possible: if + present.",
      "? If I ___ a million dollars, I'd buy an island. | have | *had | would have >> Imaginary: if + past.",
      "_ If you ___ (not/study), you won't pass. = don't study ; do not study >> Real: if + present.",
      "_ What ___ you ___ (do) if somebody gave you a car? = would / do >> Imaginary: would + verb.",
      "s If I [know] the answer, I'd tell you. = knew >> An imaginary situation: if + past (knew).",
      "o If I found a wallet, I would take it to the police. >> if + past, would + verb.",
      "o If I had time, I would learn Japanese >> An imaginary situation.",
      "?2 (You are not going to be a teacher.) If I ___ a teacher, I'd be very strict. | am | *was | will be >> Imaginary → past (were is also possible).",
      "f2 If he will call, tell him I'm busy. = If he calls, tell him I'm busy ; If he calls tell him I'm busy >> if + present.",
      "m If it rains = we'll stay in ; If I were rich = I'd buy a boat ; If you heat ice = it melts ; If I were you = I'd apologise >> Combine the parts.",
    ],
  },
  {
    n: 39, t: 'if I knew … I wish I knew …', es: 'if / wish + pasado (presente irreal)', tags: ['conditionals', 'wish'], pre: [38],
    goals: ['Talk about the unreal present with if + past', 'Use were with all persons', 'Use I wish + past'],
    x: `**if + past** is also used for **present situations that are not real**: *If I knew his number, I'd call him* (= I don't know it).

With **be** we can use **were** for all persons: *If I were you, I'd take the job.* (If I was is also possible in informal English).

**I wish + past** = I would like something to be different **now**: *I wish I knew the answer* (I don't know it). *I wish I didn't have to work.*

Don't use would in the if part or after I wish for states: *I wish I had a car* (not *would have*).`,
    form: [['Estructura', 'Ejemplo'], ['if + pasado, would + verbo', "If I had a car, I'd drive."], ['If I were you, I would…', "If I were you, I'd rest."], ['I wish + pasado', 'I wish I lived nearer.']],
    uses: ['Unreal present: if + past', 'If I were you = advice', 'I wish + past = a wish about the present'],
    aff: ["If I were you, I'd see a doctor.|Yo en tu lugar iría al médico.", 'I wish I could speak French.|Ojalá supiera hablar francés.', "If it weren't so expensive, I'd buy it.|Si no fuera tan caro, lo compraría."],
    neg: ["I wish I didn't have to go.|Ojalá no tuviera que ir."],
    q: ['Would you live here if you had the choice?|¿Vivirías acá si pudieras elegir?'],
    err: ['I wish I would have a car.|I wish I had a car.|wish + past.', 'If I am you, I would go.|If I were you, I would go.|Unreal present → were.'],
    cmp: { w: [40, 41], x: 'wish + past (present) / wish + had done (past) / wish + would (a complaint about others).' },
    ex: [
      "? If I ___ his address, I would send him a card. | know | *knew | would know >> Unreal present.",
      "? If I ___ you, I wouldn't do that. | am | *were | would be >> If I were you.",
      "_ I wish I ___ (have) more free time. = had >> wish + past.",
      "_ I wish I ___ (can) play the piano. = could >> can → could.",
      "s I wish I [live] by the sea. = lived >> wish + past (lived).",
      "o If I were you, I would take the job. >> Advice: If I were you…",
      "o I wish you were here >> wish + were.",
      "?2 'I don't know the answer.' → I wish I ___ the answer. | know | *knew | had known >> A wish about the present.",
      "f2 If she would be here, she would help us. = If she were here, she would help us ; If she was here, she would help us ; If she were here she would help us >> No would in the if part.",
      "b2 it / not / be / so cold / we / go / out = If it weren't so cold, we would go out ; If it wasn't so cold, we would go out ; If it weren't so cold, we'd go out ; If it wasn't so cold, we'd go out >> Unreal present.",
    ],
  },
  {
    n: 40, t: 'if I had known … I wish I had known …', es: 'if / wish + past perfect (pasado irreal)', tags: ['conditionals', 'wish'], pre: [15, 39],
    goals: ['Talk about the unreal past with if + had + past participle', 'Use would have + past participle', 'Express regret with I wish I had…'],
    x: `To imagine something **different in the past** we use **if + had + past participle** and **would have + past participle**: *If I had known you were ill, I would have visited you* (I didn't know and I didn't go).

Also **could have / might have** in the result: *If we'd run, we might have caught the train.*

**I wish + had + past participle** = regret about the past: *I wish I hadn't said that.*

**Mixed conditional** (a workbook topic): an unreal past with a present result: *If I had studied medicine, I would be a doctor now.*`,
    form: [['Parte if', 'Resultado'], ['if + had + participio', 'would have + participio'], ['if + had + participio', 'could / might have + participio'], ['(mixto) if + had + participio', 'would + verbo (ahora)']],
    uses: ['Unreal past', 'Regret: I wish I had / hadn\'t…', 'Mixed conditional: past → present'],
    aff: ["If I'd seen you, I would have said hello.|Si te hubiera visto, te habría saludado.", 'I wish I had studied harder.|Ojalá hubiera estudiado más.', 'If I had taken the job, I would be rich now.|Si hubiera aceptado el trabajo, ahora sería rico.'],
    neg: ["If you hadn't helped me, I wouldn't have finished.|Si no me hubieras ayudado, no habría terminado."],
    q: ['What would you have done if you had missed the plane?|¿Qué habrías hecho si hubieras perdido el avión?'],
    err: ['If I would have known, I would have come.|If I had known, I would have come.|No would in the if part.', 'I wish I didn’t say that yesterday.|I wish I hadn’t said that yesterday.|Past → wish + had + past participle.'],
    cmp: { w: [39], x: 'if + past = unreal present; if + had done = unreal past.' },
    ex: [
      "? If I ___ about the party, I would have gone. | knew | *had known | would know >> Unreal past.",
      "? If you had taken a taxi, you ___ late. | wouldn't be | *wouldn't have been | weren't >> would have + past participle.",
      "_ I wish I ___ (not/eat) so much last night. = hadn't eaten ; had not eaten >> A regret about the past.",
      "_ If she ___ (leave) earlier, she would have caught the train. = had left ; 'd left >> if + had + past participle.",
      "s If I [would've] known, I would have helped you. = had >> No would in the if part: If I had known.",
      "o I wish I had listened to your advice. >> wish + had + past participle.",
      "o If you had called me, I would have come >> Unreal past.",
      "?2 (mixed) If I had saved more money, I ___ a new car now. | *would have | will have | had had >> Mixed conditional: unreal past → present result (would + verb). ++ If I had saved more money, I would have a new car now.",
      "f2 If he would have run, he would have caught the bus. = If he had run, he would have caught the bus ; If he'd run, he would have caught the bus ; If he had run he would have caught the bus >> if + had + past participle.",
      "e2 I wish I hadn't sold my bike. | *I sold my bike and now I regret it. | I hope I won't sell my bike. | I'm happy I sold my bike. >> wish + had done = regret.",
    ],
  },
  {
    n: 41, t: 'wish', es: 'wish', tags: ['wish'], pre: [39, 40],
    goals: ['Tell wish from hope', 'Use I wish … would for complaints', 'Review wish + past and wish + had done'],
    x: `**I hope** = I want something **possible**: *I hope you have a good holiday.* **I wish you** + noun for formal wishes: *I wish you a happy birthday.*

**I wish** + past / had done = I would like the situation to be **different** (it isn't real).

**I wish … would** = something **annoys** me and I want someone (or something) to **change**: *I wish it would stop raining. I wish you wouldn't keep interrupting me.*

We don't say **I wish I would**: we say *I wish I could…* or *I wish I had…*`,
    form: [['Estructura', 'Uso'], ['I hope + presente/will', 'deseo posible'], ['I wish + pasado', 'presente irreal'], ['I wish + had + participio', 'pasado irreal'], ['I wish + sb + would', 'queja / quiero que cambie']],
    uses: ['hope (possible) vs. wish (unreal)', 'wish … would = a complaint', 'wish + could'],
    aff: ['I hope you get the job.|Espero que consigas el trabajo.', "I wish it would stop raining.|Ojalá dejara de llover.", 'I wish I could come with you.|Ojalá pudiera ir con vos.'],
    neg: ["I wish you wouldn't drive so fast.|Ojalá no manejaras tan rápido."],
    q: [],
    err: ['I wish I would know the answer.|I wish I knew the answer.|We don\'t say I wish I would.', 'I wish you pass your exam.|I hope you pass your exam.|A possible wish → hope.'],
    cmp: { w: [39, 40], x: 'wish + past, wish + had done, wish + would: three tenses and three meanings.' },
    ex: [
      "? I ___ you have a nice weekend. | wish | *hope | would >> A possible wish: hope.",
      "? I wish the neighbours ___ so much noise. | don't make | *wouldn't make | won't make >> A complaint: wish + would.",
      "_ I wish I ___ (can) help you, but I can't. = could >> wish + could.",
      "_ I wish I ___ (go) to the concert last night. It was great. = had gone ; 'd gone >> Unreal past.",
      "s I hope I [would] see you soon. = will >> hope + normal future: I hope I will see you / I hope to see you.",
      "o I wish you wouldn't leave your clothes on the floor. >> wish + would = a complaint.",
      "o I wish it would stop raining >> wish + would.",
      "m I hope = something possible ; I wish I were = unreal present ; I wish I had = unreal past (with past participle) ; I wish you would = a complaint >> Structures with wish/hope.",
      "f2 I wish I would be taller. = I wish I were taller ; I wish I was taller >> We don't say I wish I would.",
      "?2 'Dave wishes he ___ more about earthquakes.' | would know | *knew | knows >> wish + past (state verb).",
    ],
  },
];

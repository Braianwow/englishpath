import type { UnitSrc } from '../dsl';

// Module 5 — if and wish (EGU units 38–41)
export const m05: UnitSrc[] = [
  {
    n: 38, t: 'if I do … and if I did …', es: 'Condicional real vs. imaginario', tags: ['conditionals'], pre: [25],
    goals: ['Usar if + presente para posibilidades reales', 'Usar if + pasado para situaciones imaginarias', 'Elegir entre ambos según la probabilidad'],
    x: `**if I do** (+ will): hablamos de algo **posible / realista**: *If I find your keys, I'll give them to you.*

**if I did** (+ would): situación **imaginaria** o **poco probable**, aunque hablemos del presente o futuro. El pasado **no** indica tiempo pasado: *If I found a wallet in the street, I'd take it to the police* (no espero encontrar una).

Nunca usamos would en la parte del **if**: *If I had more time…* (no *If I would have*).

Comparar: *If we take the bus, it will be cheaper* (es una opción real) / *If we took the bus, it would take hours* (no pensamos tomarlo).`,
    form: [['Tipo', 'Parte if', 'Resultado'], ['Real / posible', 'if + presente', 'will + verbo'], ['Imaginario / improbable', 'if + pasado', 'would + verbo']],
    uses: ['Posibilidad real → if + presente, will', 'Situación imaginaria → if + pasado, would', 'Sin would después de if'],
    aff: ["If it rains, we'll stay at home.|Si llueve, nos quedamos en casa.", "If I won the lottery, I'd travel round the world.|Si ganara la lotería, viajaría por el mundo."],
    neg: ["If you don't hurry, you'll miss the bus.|Si no te apurás, vas a perder el colectivo.", "I wouldn't go if I were you.|Yo no iría."],
    q: ['What would you do if you lost your job?|¿Qué harías si perdieras el trabajo?'],
    err: ['If I would have money, I would buy it.|If I had money, I would buy it.|Sin would en la parte if.', "If it will rain, we'll stay in.|If it rains, we'll stay in.|if + presente para el futuro."],
    cmp: { w: [39, 40], x: 'Unidad 39: if + pasado para el presente irreal. Unidad 40: if + past perfect para el pasado.' },
    ex: [
      "? If I ___ him, I'll tell him. | will see | *see | saw >> Posible: if + presente.",
      "? If I ___ a million dollars, I'd buy an island. | have | *had | would have >> Imaginario: if + pasado.",
      "_ If you ___ (not/study), you won't pass. = don't study ; do not study >> Real: if + presente.",
      "_ What ___ you ___ (do) if somebody gave you a car? = would / do >> Imaginario: would + verbo.",
      "s If I [know] the answer, I'd tell you. = knew >> Situación imaginaria: if + pasado (knew).",
      "o If I found a wallet, I would take it to the police. >> if + pasado, would + verbo.",
      "t Si tuviera tiempo, aprendería japonés. = If I had time, I would learn Japanese ; If I had time, I'd learn Japanese ; If I had time I would learn Japanese ; If I had time I'd learn Japanese >> Situación imaginaria.",
      "?2 (You are not going to be a teacher.) If I ___ a teacher, I'd be very strict. | am | *was | will be >> Imaginario → pasado (were también es posible).",
      "f2 If he will call, tell him I'm busy. = If he calls, tell him I'm busy ; If he calls tell him I'm busy >> if + presente.",
      "m If it rains = we'll stay in ; If I were rich = I'd buy a boat ; If you heat ice = it melts ; If I were you = I'd apologise >> Combiná las partes.",
    ],
  },
  {
    n: 39, t: 'if I knew … I wish I knew …', es: 'if / wish + pasado (presente irreal)', tags: ['conditionals', 'wish'], pre: [38],
    goals: ['Hablar del presente irreal con if + pasado', 'Usar were con todas las personas', 'Usar I wish + pasado'],
    x: `**if + pasado** también se usa para **situaciones presentes que no son reales**: *If I knew his number, I'd call him* (= no lo sé).

Con **be** podemos usar **were** para todas las personas: *If I were you, I'd take the job.* (If I was también es posible en inglés informal).

**I wish + pasado** = me gustaría que algo fuera distinto **ahora**: *I wish I knew the answer* (no la sé). *I wish I didn't have to work.*

No uses would en la parte del if ni después de I wish para estados: *I wish I had a car* (no *would have*).`,
    form: [['Estructura', 'Ejemplo'], ['if + pasado, would + verbo', "If I had a car, I'd drive."], ['If I were you, I would…', "If I were you, I'd rest."], ['I wish + pasado', 'I wish I lived nearer.']],
    uses: ['Presente irreal: if + pasado', 'If I were you = consejo', 'I wish + pasado = deseo sobre el presente'],
    aff: ["If I were you, I'd see a doctor.|Yo en tu lugar iría al médico.", 'I wish I could speak French.|Ojalá supiera hablar francés.', "If it weren't so expensive, I'd buy it.|Si no fuera tan caro, lo compraría."],
    neg: ["I wish I didn't have to go.|Ojalá no tuviera que ir."],
    q: ['Would you live here if you had the choice?|¿Vivirías acá si pudieras elegir?'],
    err: ['I wish I would have a car.|I wish I had a car.|wish + pasado.', 'If I am you, I would go.|If I were you, I would go.|Presente irreal → were.'],
    cmp: { w: [40, 41], x: 'wish + pasado (presente) / wish + had done (pasado) / wish + would (queja sobre otros).' },
    ex: [
      "? If I ___ his address, I would send him a card. | know | *knew | would know >> Presente irreal.",
      "? If I ___ you, I wouldn't do that. | am | *were | would be >> If I were you.",
      "_ I wish I ___ (have) more free time. = had >> wish + pasado.",
      "_ I wish I ___ (can) play the piano. = could >> can → could.",
      "s I wish I [live] by the sea. = lived >> wish + pasado (lived).",
      "o If I were you, I would take the job. >> Consejo: If I were you…",
      "t Ojalá estuvieras acá. = I wish you were here ; I wish you was here >> wish + were.",
      "?2 'I don't know the answer.' → I wish I ___ the answer. | know | *knew | had known >> Deseo sobre el presente.",
      "f2 If she would be here, she would help us. = If she were here, she would help us ; If she was here, she would help us ; If she were here she would help us >> Sin would en la parte if.",
      "b2 it / not / be / so cold / we / go / out = If it weren't so cold, we would go out ; If it wasn't so cold, we would go out ; If it weren't so cold, we'd go out ; If it wasn't so cold, we'd go out >> Presente irreal.",
    ],
  },
  {
    n: 40, t: 'if I had known … I wish I had known …', es: 'if / wish + past perfect (pasado irreal)', tags: ['conditionals', 'wish'], pre: [15, 39],
    goals: ['Hablar del pasado irreal con if + had + participio', 'Usar would have + participio', 'Expresar arrepentimiento con I wish I had…'],
    x: `Para imaginar algo **distinto en el pasado** usamos **if + had + participio** y **would have + participio**: *If I had known you were ill, I would have visited you* (no lo sabía y no fui).

También **could have / might have** en el resultado: *If we'd run, we might have caught the train.*

**I wish + had + participio** = arrepentimiento sobre el pasado: *I wish I hadn't said that.*

**Condicional mixto** (tema del workbook): pasado irreal con resultado presente: *If I had studied medicine, I would be a doctor now.*`,
    form: [['Parte if', 'Resultado'], ['if + had + participio', 'would have + participio'], ['if + had + participio', 'could / might have + participio'], ['(mixto) if + had + participio', 'would + verbo (ahora)']],
    uses: ['Pasado irreal', 'Arrepentimiento: I wish I had / hadn’t…', 'Condicional mixto: pasado → presente'],
    aff: ["If I'd seen you, I would have said hello.|Si te hubiera visto, te habría saludado.", 'I wish I had studied harder.|Ojalá hubiera estudiado más.', 'If I had taken the job, I would be rich now.|Si hubiera aceptado el trabajo, ahora sería rico.'],
    neg: ["If you hadn't helped me, I wouldn't have finished.|Si no me hubieras ayudado, no habría terminado."],
    q: ['What would you have done if you had missed the plane?|¿Qué habrías hecho si hubieras perdido el avión?'],
    err: ['If I would have known, I would have come.|If I had known, I would have come.|Sin would en la parte if.', 'I wish I didn’t say that yesterday.|I wish I hadn’t said that yesterday.|Pasado → wish + had + participio.'],
    cmp: { w: [39], x: 'if + pasado = presente irreal; if + had done = pasado irreal.' },
    ex: [
      "? If I ___ about the party, I would have gone. | knew | *had known | would know >> Pasado irreal.",
      "? If you had taken a taxi, you ___ late. | wouldn't be | *wouldn't have been | weren't >> would have + participio.",
      "_ I wish I ___ (not/eat) so much last night. = hadn't eaten ; had not eaten >> Arrepentimiento sobre el pasado.",
      "_ If she ___ (leave) earlier, she would have caught the train. = had left ; 'd left >> if + had + participio.",
      "s If I [would've] known, I would have helped you. = had >> Sin would en la parte if: If I had known.",
      "o I wish I had listened to your advice. >> wish + had + participio.",
      "t Si me hubieras llamado, habría venido. = If you had called me, I would have come ; If you'd called me, I'd have come ; If you had phoned me, I would have come >> Pasado irreal.",
      "?2 (mixed) If I had saved more money, I ___ a new car now. | *would have | will have | had had >> Condicional mixto: pasado irreal → resultado presente (would + verbo). ++ If I had saved more money, I would have a new car now.",
      "f2 If he would have run, he would have caught the bus. = If he had run, he would have caught the bus ; If he'd run, he would have caught the bus ; If he had run he would have caught the bus >> if + had + participio.",
      "e2 I wish I hadn't sold my bike. | *Ojalá no hubiera vendido mi bici. | Ojalá no venda mi bici. | Vendí mi bici. >> wish + had done = arrepentimiento.",
    ],
  },
  {
    n: 41, t: 'wish', es: 'wish', tags: ['wish'], pre: [39, 40],
    goals: ['Distinguir wish y hope', 'Usar I wish … would para quejas', 'Repasar wish + pasado y wish + had done'],
    x: `**I hope** = deseo algo **posible**: *I hope you have a good holiday.* **I wish you** + sustantivo para deseos formales: *I wish you a happy birthday.*

**I wish** + pasado / had done = me gustaría que la situación fuera **distinta** (no es real).

**I wish … would** = me **molesta** algo y quiero que alguien (o algo) **cambie**: *I wish it would stop raining. I wish you wouldn't keep interrupting me.*

No usamos **I wish I would**: decimos *I wish I could…* o *I wish I had…*`,
    form: [['Estructura', 'Uso'], ['I hope + presente/will', 'deseo posible'], ['I wish + pasado', 'presente irreal'], ['I wish + had + participio', 'pasado irreal'], ['I wish + sb + would', 'queja / quiero que cambie']],
    uses: ['hope (posible) vs. wish (irreal)', 'wish … would = queja', 'wish + could'],
    aff: ['I hope you get the job.|Espero que consigas el trabajo.', "I wish it would stop raining.|Ojalá dejara de llover.", 'I wish I could come with you.|Ojalá pudiera ir con vos.'],
    neg: ["I wish you wouldn't drive so fast.|Ojalá no manejaras tan rápido."],
    q: [],
    err: ['I wish I would know the answer.|I wish I knew the answer.|No se dice I wish I would.', 'I wish you pass your exam.|I hope you pass your exam.|Deseo posible → hope.'],
    cmp: { w: [39, 40], x: 'wish + pasado, wish + had done, wish + would: tres tiempos y tres significados.' },
    ex: [
      "? I ___ you have a nice weekend. | wish | *hope | would >> Deseo posible: hope.",
      "? I wish the neighbours ___ so much noise. | don't make | *wouldn't make | won't make >> Queja: wish + would.",
      "_ I wish I ___ (can) help you, but I can't. = could >> wish + could.",
      "_ I wish I ___ (go) to the concert last night. It was great. = had gone ; 'd gone >> Pasado irreal.",
      "s I hope I [would] see you soon. = will >> hope + futuro normal: I hope I will see you / I hope to see you.",
      "o I wish you wouldn't leave your clothes on the floor. >> wish + would = queja.",
      "t Ojalá dejara de llover. = I wish it would stop raining >> wish + would.",
      "m I hope = algo posible ; I wish I were = presente irreal ; I wish I had = pasado irreal (con participio) ; I wish you would = queja >> Estructuras con wish/hope.",
      "f2 I wish I would be taller. = I wish I were taller ; I wish I was taller >> No usamos I wish I would.",
      "?2 'Dave wishes he ___ more about earthquakes.' | would know | *knew | knows >> wish + pasado (verbo de estado).",
    ],
  },
];

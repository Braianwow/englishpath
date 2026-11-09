import type { UnitSrc } from '../dsl';

// Module 14 — Conjunctions and prepositions (EGU units 113–120)
export const m14: UnitSrc[] = [
  {
    n: 113, t: 'although though even though in spite of despite', es: 'although / in spite of / despite', tags: ['conjunctions'],
    goals: ['Use although/though/even though + clause', 'Use in spite of / despite + noun or -ing', 'Use though at the end of a sentence'],
    x: `To express **contrast**:

• **although / though / even though** + **subject + verb**: *Although it rained, we went out.* (even though is stronger).
• **in spite of / despite** + **noun** or **-ing**: *In spite of the rain, we went out. Despite feeling tired, she kept working.* (not *despite of*).
• **in spite of the fact (that)** + clause.

**though** at the **end** = however: *The house isn't very nice. I like the garden, though.*

The Workbook (unit 15) practises *although, despite, besides, furthermore, as a result* in a letter.`,
    form: [['Conector', 'Seguido de', 'Ejemplo'], ['although / even though', 'oración', 'Although it was cold, …'], ['in spite of / despite', 'sustantivo / -ing', 'Despite the cold, …'], ['in spite of the fact that', 'oración', 'in spite of the fact that it was cold']],
    uses: ['although + clause', 'despite / in spite of + noun / -ing', 'though at the end = however'],
    aff: ['Although I was tired, I went to the party.|Aunque estaba cansado, fui a la fiesta.', 'Despite the traffic, we arrived on time.|A pesar del tráfico, llegamos a tiempo.', 'In spite of having little money, they were happy.|A pesar de tener poco dinero, eran felices.'],
    neg: ["Even though she studied hard, she didn't pass.|Aunque estudió mucho, no aprobó."],
    q: [],
    err: ['Despite of the rain, we went out.|Despite the rain, we went out.|despite without of.', 'Although the rain, we played.|Despite the rain, we played.|A noun → despite / in spite of.'],
    cmp: { w: [115, 116], x: 'unless / as long as (115) and as (116) are other common linkers.' },
    ex: [
      "? ___ it was raining, we went for a walk. | Despite | *Although | In spite of >> A clause → although.",
      "? ___ the bad weather, the match wasn't cancelled. | Although | *Despite | Even though >> A noun → despite.",
      "_ In spite ___ being ill, she went to work. = of >> in spite of + -ing.",
      "_ I couldn't sleep ___ I was very tired. = although ; though ; even though >> Contrast + clause.",
      "s Despite [of] the noise, I fell asleep. = (quitar of) >> despite without of.",
      "o Although he's rich, he isn't happy. >> although + clause.",
      "o Despite the rain, we went out >> despite + noun.",
      "?2 'The flat is small. I love the view, ___.' | although | *though | despite >> though at the end = however.",
      "f2 Despite he was tired, he kept working. = Although he was tired, he kept working ; Despite being tired, he kept working ; In spite of being tired, he kept working ; Even though he was tired, he kept working >> despite + -ing or although + clause.",
      "m although = + clause ; despite = + noun ; in spite of = + -ing ; though = at the end (however) >> Contrast linkers.",
    ],
  },
  {
    n: 114, t: 'in case', es: 'in case', tags: ['conjunctions'],
    goals: ['Use in case for precautions', 'Tell in case from if', 'Use in case of + noun'],
    x: `**in case** = because something **might** happen: we do something **now** as a **precaution**: *I'll take an umbrella **in case** it rains.*

After in case we use the **present** for the future (not will): *in case it **rains***.

**in case ≠ if**: *I'll buy some food **in case** Tom comes* (I'll buy it anyway, just in case) / *I'll buy some food **if** Tom comes* (only if he comes).

**in case of** + noun = if there is (in notices): *In case of fire, use the stairs.*

Workbook (unit 6): *(just) in case*.`,
    form: [['Estructura', 'Ejemplo'], ['… in case + presente', 'Take a map in case you get lost.'], ['… in case + pasado', 'I took a map in case I got lost.'], ['in case of + sustantivo', 'In case of emergency, call 112.']],
    uses: ['A precaution: in case', 'in case ≠ if', 'in case of + noun'],
    aff: ["Take your phone in case you need to call me.|Llevá el teléfono por si necesitás llamarme.", 'I wrote down the address in case I forgot it.|Anoté la dirección por si me olvidaba.'],
    neg: ["Take some money in case you don't find a cash machine.|Llevá plata por si no encontrás un cajero."],
    q: [],
    err: ["Take a coat in case it will be cold.|Take a coat in case it's cold.|in case + present.", 'In case fire, do not use the lift.|In case of fire, do not use the lift.|in case of + noun.'],
    ex: [
      "? Take an umbrella ___ it rains. | if | *in case | unless >> A precaution.",
      "? I'll call you ___ I need help. (only then) | in case | *if | unless >> A condition: if.",
      "_ I'll write down your number in case I ___ (forget) it. = forget >> in case + present.",
      "_ In case ___ emergency, press the red button. = of >> in case of + noun.",
      "s Take a sweater in case it [will] get cold. = (quitar will) >> in case + present.",
      "o I always carry a pen in case I need it. >> in case + present.",
      "o Take some water in case you get thirsty >> in case.",
      "?2 'I bought some food in case Tom came' means… | I bought food only because Tom came. | *I bought food as a precaution. | Tom bought the food. >> in case = to be ready if something happens.",
      "f2 I'll leave the key under the mat if you'll arrive early. = I'll leave the key under the mat in case you arrive early >> in case + present.",
    ],
  },
  {
    n: 115, t: 'unless as long as provided', es: 'unless / as long as / provided', tags: ['conjunctions', 'conditionals'], pre: [38],
    goals: ['Use unless = if … not', 'Use as long as / provided (that) = only if', 'Use the present after these linkers'],
    x: `**unless** = **except if / if … not**: *Don't tell Ann **unless** she asks you* (= if she doesn't ask). Workbook unit 6: *Conditionals with if and unless.*

**as long as / so long as / provided (that) / providing (that)** = **only if**, on condition that: *You can borrow my car **as long as** you drive carefully.*

As with if, we use the **present** for the future: *unless it **rains*** (not *will rain*).`,
    form: [['Conector', 'Significado', 'Ejemplo'], ['unless', 'si no / a menos que', "I'll go unless it rains."], ['as long as', 'solo si', "OK, as long as you're back by 10."], ['provided (that)', 'con la condición de que', 'provided you pay now']],
    uses: ['unless = if not', 'as long as / provided = a condition', 'Present with a future meaning'],
    aff: ["We'll play tennis unless it rains.|Vamos a jugar al tenis a menos que llueva.", "You can stay as long as you're quiet.|Te podés quedar si estás en silencio.", 'Provided you pay in advance, you get a discount.|Siempre que pagues por adelantado, tenés descuento.'],
    neg: ["I won't go unless you come with me.|No voy a ir a menos que vengas conmigo."],
    q: [],
    err: ["Unless you don't hurry, you'll be late.|Unless you hurry, you'll be late.|unless is already negative.", "I'll come as long as it won't rain.|I'll come as long as it doesn't rain.|Present after as long as."],
    ex: [
      "? I'll be there at 8 ___ the train is late. | if | *unless | as long as >> unless = except if.",
      "? You can use my bike ___ you bring it back tomorrow. | unless | *as long as | in case >> A condition: as long as.",
      "_ We'll miss the bus ___ we hurry. = unless >> unless = if … not.",
      "_ I'll lend you the money ___ you pay me back next week. = as long as ; provided ; provided that ; providing ; so long as >> A condition.",
      "s Unless you [don't] hurry, you'll miss the bus. = (quitar don't) >> unless is already negative: Unless you hurry…",
      "o I'll come with you as long as you drive. >> as long as + present.",
      "o Don't do it unless you're sure >> unless.",
      "?2 'If you don't leave, I'll call the police.' → ___ you leave, I'll call the police. | If | *Unless | As long as >> Workbook: if you don't leave → unless you leave.",
      "f2 Unless it won't rain, we'll go to the beach. = Unless it rains, we'll go to the beach ; If it doesn't rain, we'll go to the beach >> unless + affirmative present.",
    ],
  },
  {
    n: 116, t: 'as (as I walked … / as I was … etc.)', es: 'as (mientras / porque)', tags: ['conjunctions'],
    goals: ['Use as = while / at the moment when', 'Use as = because', 'Don\'t confuse as with like (unit 117)'],
    x: `**as** = **when / while** two things happen **at the same time**: *We all waved goodbye **as** the train left. **As** I was walking home, I met Tom.*

Also for changes that happen together: ***As** the day went on, it got hotter.*

**as** = **because / since**: ***As** it was late, we took a taxi.* (= because, since).

In the Workbook (unit 20) *as* appears in *open cloze* exercises.`,
    form: [['Uso', 'Ejemplo'], ['al mismo tiempo', 'As I opened the door, the phone rang.'], ['mientras (progreso)', 'As time passed, …'], ['porque', "As it's raining, let's stay in."]],
    uses: ['as = when / while', 'as = because'],
    aff: ['The phone rang just as I was going out.|El teléfono sonó justo cuando estaba saliendo.', "As I didn't have a car, I took the bus.|Como no tenía auto, tomé el colectivo."],
    neg: ["As we didn't have much time, we didn't stop.|Como no teníamos mucho tiempo, no paramos."],
    q: [],
    err: ['Like I was tired, I went to bed.|As I was tired, I went to bed.|A cause → as (not like).', 'As I walked home, I was meeting Tom.|As I was walking home, I met Tom.|A short action → past simple.'],
    cmp: { w: [117], x: 'as and like are not interchangeable: unit 117.' },
    ex: [
      "? ___ it was a public holiday, the shops were closed. | Like | *As | Despite >> as = because.",
      "? I slipped ___ I was getting off the bus. | like | *as | during >> as = while.",
      "_ ___ I didn't know anybody, I felt a bit lonely. = As ; Because ; Since >> A cause.",
      "_ We watched the sun go down ___ we walked along the beach. = as ; while >> At the same time.",
      "s [Like] it was late, we went home. = As >> A cause: as.",
      "o As I was leaving the house, it started to rain. >> as = when.",
      "o As it was cold, we stayed at home >> as = because.",
      "?2 '___ the day went on, the weather got worse.' | When | *As | While >> as = while (gradual change).",
      "f2 Like it was raining, we took a taxi. = As it was raining, we took a taxi ; Because it was raining, we took a taxi >> as = because.",
    ],
  },
  {
    n: 117, t: 'like and as', es: 'like y as', tags: ['conjunctions', 'prepositions'],
    goals: ['Use like = similar to', 'Use as = in the role of (as a teacher)', 'Use as + clause (as I said)'],
    x: `**like** = **similar to** (a comparison) + noun/pronoun: *She looks like her mother. He swims like a fish.*

**as** = **in the role of**, with the function of: *She works **as** a teacher. I used the box **as** a table.*

Compare: *As your boss, I can't allow it* (I am your boss) / *Like your boss, I think…* (I think the same as him).

**as** + clause: *as I said, as you know, as usual, do as I tell you.* In informal English also *like* + clause.

**such as** / **like** = for example: *sports such as football / like football*.

Workbook (unit 4): *as and like*.`,
    form: [['like', 'as'], ['similar a: like a child', 'función: as a nurse'], ['looks like rain', 'as I said'], ['like this', 'as usual']],
    uses: ['like = similar to', 'as = function/role', 'as + clause'],
    aff: ['She sings like an angel.|Canta como un ángel.', 'He worked as a waiter for two years.|Trabajó como mozo dos años.', 'As I told you, the shop is closed.|Como te dije, el negocio está cerrado.'],
    neg: ["Don't talk to me like that.|No me hables así."],
    q: ['What does she look like?|¿Cómo es ella (físicamente)?'],
    err: ['She works like a teacher.|She works as a teacher.|A job/role → as.', 'As your father, he is very tall.|Like your father, he is very tall.|A comparison → like.'],
    ex: [
      "? My sister works ___ a nurse. | like | *as | such >> A job → as.",
      "? Your house looks ___ a palace! | as | *like | such as >> A comparison → like.",
      "_ ___ usual, Tom was late. = As >> as usual.",
      "_ He ran ___ the wind. = like >> A comparison.",
      "s I used the newspaper [like] an umbrella. = as >> A function → as.",
      "o As I said, the meeting is at ten. >> as + clause.",
      "o I work as a designer >> as + job.",
      "?2 'There are many sports ___ tennis and golf.' | as | *like | as like >> like / such as = for example.",
      "f2 She dances as a professional, but she's an amateur. = She dances like a professional, but she's an amateur ; She dances like a professional but she's an amateur >> A comparison (it isn't really that) → like.",
    ],
  },
  {
    n: 118, t: 'like as if', es: 'as if / as though', tags: ['conjunctions'], pre: [117],
    goals: ['Use look/sound/feel + as if', 'Use as if + past for something unreal', 'Use it looks like + noun / clause'],
    x: `**as if / as though** describe how something **seems**: *She looks **as if** she's tired. It sounds **as if** they're arguing.*

With **look, sound, feel, smell, taste** and also *It looks as if it's going to rain.* In informal English: *It looks like…*

For something **unreal** we use the **past** (as with if): *He talks **as if** he **knew** everything* (he doesn't know everything). *I'm not a child. Don't treat me as if I **were** a child.*`,
    form: [['Estructura', 'Ejemplo'], ['look/sound + as if', 'You look as if you need a rest.'], ['as if + pasado (irreal)', 'He acts as if he owned the place.'], ['It looks as if / like', "It looks as if it's going to rain."]],
    uses: ['Appearance: look/sound/feel as if', 'Unreal: as if + past'],
    aff: ['You look as if you have seen a ghost.|Parece que viste un fantasma.', 'He spends money as if he were rich.|Gasta plata como si fuera rico.'],
    neg: ["It doesn't look as if she's coming.|No parece que vaya a venir."],
    q: ['Does it sound as if they are happy?|¿Suena como si estuvieran contentos?'],
    err: ['He talks like he is the boss (he is not).|He talks as if he were the boss.|Formal unreal → as if + past.', 'It looks as if raining.|It looks as if it’s going to rain.|as if + a complete clause.'],
    ex: [
      "? You look ___ you haven't slept. | like if | *as if | as >> look as if.",
      "? He behaves as if he ___ the owner. (he isn't) | is | *were | will be >> Unreal: past.",
      "_ It sounds as ___ they're having a party next door. = if ; though >> as if / as though.",
      "_ I feel as if I ___ (be) going to faint. = am ; 'm >> A real appearance: present.",
      "s He talks as if he [is] the boss, but he isn't. = were >> Unreal: as if + past (were).",
      "o It looks as if it's going to rain. >> It looks as if + clause.",
      "o He treats me as if I were a child >> as if + past.",
      "?2 'Tom always talks ___ he knew everything.' | like | *as if | as >> as if (unreal).",
      "f2 You look as you need a holiday. = You look as if you need a holiday ; You look as though you need a holiday ; You look like you need a holiday >> as if.",
    ],
  },
  {
    n: 119, t: 'during for while', es: 'during / for / while', tags: ['conjunctions', 'time', 'prepositions'],
    goals: ['Use during + noun (when)', 'Use for + period (how long)', 'Use while + clause'],
    x: `**during** + **noun** = **when** something happens: *I fell asleep **during** the film.*
**for** + **period** = **how long** it lasts: *I slept **for** two hours.* (not *during two hours*).
**while** + **subject + verb**: *I fell asleep **while** I was watching the film.*

Compare: *during the meeting* (noun) / *while we were having the meeting* (clause).

With while for the future we use the present: *while you're away…*`,
    form: [['Palabra', 'Seguido de', 'Ejemplo'], ['during', 'sustantivo', 'during the night'], ['for', 'período de tiempo', 'for three hours'], ['while', 'sujeto + verbo', 'while I was sleeping']],
    uses: ['during = in the course of', 'for = duration', 'while + clause'],
    aff: ['It rained during the night.|Llovió durante la noche.', 'We waited for an hour.|Esperamos una hora.', 'I met her while I was living in Rome.|La conocí mientras vivía en Roma.'],
    neg: ["Don't talk during the exam.|No hables durante el examen."],
    q: ['What did you do while I was out?|¿Qué hiciste mientras yo no estaba?'],
    err: ['I stayed there during two weeks.|I stayed there for two weeks.|Duration → for.', 'During I was cooking, the phone rang.|While I was cooking, the phone rang.|A clause → while.'],
    ex: [
      "? I fell asleep ___ the lesson. | while | *during | for >> during + noun.",
      "? We lived in Peru ___ three years. | during | *for | while >> Duration → for.",
      "_ Somebody stole my bag ___ I was swimming. = while >> while + clause.",
      "_ ___ the summer, the town is full of tourists. = During ; In >> during + noun.",
      "s I waited [during] two hours. = for >> Duration → for.",
      "o The phone rang while I was having a shower. >> while + clause.",
      "o I fell asleep during the film >> during.",
      "?2 'We met a lot of people ___ we were on holiday.' | during | *while | for >> while + clause.",
      "f2 During I was waiting, I read a book. = While I was waiting, I read a book ; While I was waiting I read a book >> while + clause.",
    ],
  },
  {
    n: 120, t: 'by and until by the time …', es: 'by / until / by the time', tags: ['conjunctions', 'time', 'prepositions'],
    goals: ['Use by = not later than', 'Use until = up to that time (it continues)', 'Use by the time + clause'],
    x: `**by** + time = **not later than** (a deadline): *Please send me the report **by** Monday.*

**until / till** = something **continues** up to that moment: *I'll be at work **until** 6.*

Compare: *I'll be away **until** Friday* (I come back on Friday) / *I'll be back **by** Friday* (on Friday at the latest).

**by the time** + clause = at the moment when (or before): ***By the time*** *we got to the cinema, the film **had** already **started**.* With the future we use the present: *By the time you get here, we'll have finished.*`,
    form: [['Palabra', 'Significado', 'Ejemplo'], ['by', 'no más tarde de', 'by 5 p.m.'], ['until', 'hasta (continúa)', 'until 5 p.m.'], ['by the time + oración', 'para cuando', 'By the time I arrived, …']],
    uses: ['by = a deadline', 'until = duration up to', 'by the time + clause'],
    aff: ["I'll finish the work by Friday.|Voy a terminar el trabajo para el viernes.", 'We waited until the rain stopped.|Esperamos hasta que paró de llover.', 'By the time I got home, everyone was asleep.|Para cuando llegué a casa, todos dormían.'],
    neg: ["I won't know the results until next week.|No voy a saber los resultados hasta la semana que viene."],
    q: ['Can you finish it by tomorrow?|¿Lo podés terminar para mañana?'],
    err: ['I have to finish this until Monday.|I have to finish this by Monday.|A deadline → by.', "I'll wait here by you come back.|I'll wait here until you come back.|It continues → until."],
    ex: [
      "? Please pay the bill ___ the end of the month. | until | *by | while >> A deadline.",
      "? I'll stay here ___ you come back. | by | *until | by the time >> It continues until.",
      "_ ___ the time we arrived, the shop had closed. = By >> by the time.",
      "_ The shop is open ___ 8 p.m. = until ; till >> Duration until.",
      "s I'll have finished the report [until] Friday. = by >> A deadline.",
      "o By the time I found the keys, it was too late. >> by the time + past.",
      "o You have to return the book by Monday >> by.",
      "?2 'Let's wait ___ it stops raining.' | by | *until | by the time >> until + clause.",
      "f2 By the time you will get here, we'll have eaten. = By the time you get here, we'll have eaten ; By the time you get here, we will have eaten >> by the time + present.",
    ],
  },
];

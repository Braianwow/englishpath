import type { UnitSrc } from '../dsl';

// Module 14 — Conjunctions and prepositions (EGU units 113–120)
export const m14: UnitSrc[] = [
  {
    n: 113, t: 'although though even though in spite of despite', es: 'although / in spite of / despite', tags: ['conjunctions'],
    goals: ['Usar although/though/even though + oración', 'Usar in spite of / despite + sustantivo o -ing', 'Usar though al final de la oración'],
    x: `Para expresar **contraste** ("aunque", "a pesar de"):

• **although / though / even though** + **sujeto + verbo**: *Although it rained, we went out.* (even though es más fuerte).
• **in spite of / despite** + **sustantivo** o **-ing**: *In spite of the rain, we went out. Despite feeling tired, she kept working.* (no *despite of*).
• **in spite of the fact (that)** + oración.

**though** al **final** = sin embargo: *The house isn't very nice. I like the garden, though.*

El Workbook (unidad 15) practica *although, despite, besides, furthermore, as a result* en una carta.`,
    form: [['Conector', 'Seguido de', 'Ejemplo'], ['although / even though', 'oración', 'Although it was cold, …'], ['in spite of / despite', 'sustantivo / -ing', 'Despite the cold, …'], ['in spite of the fact that', 'oración', 'in spite of the fact that it was cold']],
    uses: ['although + oración', 'despite / in spite of + sustantivo / -ing', 'though al final = sin embargo'],
    aff: ['Although I was tired, I went to the party.|Aunque estaba cansado, fui a la fiesta.', 'Despite the traffic, we arrived on time.|A pesar del tráfico, llegamos a tiempo.', 'In spite of having little money, they were happy.|A pesar de tener poco dinero, eran felices.'],
    neg: ["Even though she studied hard, she didn't pass.|Aunque estudió mucho, no aprobó."],
    q: [],
    err: ['Despite of the rain, we went out.|Despite the rain, we went out.|despite sin of.', 'Although the rain, we played.|Despite the rain, we played.|Sustantivo → despite / in spite of.'],
    cmp: { w: [115, 116], x: 'unless / as long as (115) y as (116) son otros conectores frecuentes.' },
    ex: [
      "? ___ it was raining, we went for a walk. | Despite | *Although | In spite of >> Oración → although.",
      "? ___ the bad weather, the match wasn't cancelled. | Although | *Despite | Even though >> Sustantivo → despite.",
      "_ In spite ___ being ill, she went to work. = of >> in spite of + -ing.",
      "_ I couldn't sleep ___ I was very tired. = although ; though ; even though >> Contraste + oración.",
      "s Despite [of] the noise, I fell asleep. = (quitar of) >> despite sin of.",
      "o Although he's rich, he isn't happy. >> although + oración.",
      "t A pesar de la lluvia, salimos. = Despite the rain, we went out ; In spite of the rain, we went out ; Despite the rain we went out >> despite + sustantivo.",
      "?2 'The flat is small. I love the view, ___.' | although | *though | despite >> though al final = sin embargo.",
      "f2 Despite he was tired, he kept working. = Although he was tired, he kept working ; Despite being tired, he kept working ; In spite of being tired, he kept working ; Even though he was tired, he kept working >> despite + -ing o although + oración.",
      "m although = + oración ; despite = + sustantivo ; in spite of = + -ing ; though = al final (sin embargo) >> Conectores de contraste.",
    ],
  },
  {
    n: 114, t: 'in case', es: 'in case', tags: ['conjunctions'],
    goals: ['Usar in case para precauciones', 'Distinguir in case y if', 'Usar in case of + sustantivo'],
    x: `**in case** = **por si** (algo pasa): hacemos algo **ahora** como **precaución**: *I'll take an umbrella **in case** it rains.*

Después de in case usamos **presente** para el futuro (no will): *in case it **rains***.

**in case ≠ if**: *I'll buy some food **in case** Tom comes* (la compro igual, por si acaso) / *I'll buy some food **if** Tom comes* (solo si viene).

**in case of** + sustantivo = en caso de (avisos): *In case of fire, use the stairs.*

Workbook (unidad 6): *(just) in case*.`,
    form: [['Estructura', 'Ejemplo'], ['… in case + presente', 'Take a map in case you get lost.'], ['… in case + pasado', 'I took a map in case I got lost.'], ['in case of + sustantivo', 'In case of emergency, call 112.']],
    uses: ['Precaución: in case', 'in case ≠ if', 'in case of + sustantivo'],
    aff: ["Take your phone in case you need to call me.|Llevá el teléfono por si necesitás llamarme.", 'I wrote down the address in case I forgot it.|Anoté la dirección por si me olvidaba.'],
    neg: ["Take some money in case you don't find a cash machine.|Llevá plata por si no encontrás un cajero."],
    q: [],
    err: ["Take a coat in case it will be cold.|Take a coat in case it's cold.|in case + presente.", 'In case fire, do not use the lift.|In case of fire, do not use the lift.|in case of + sustantivo.'],
    ex: [
      "? Take an umbrella ___ it rains. | if | *in case | unless >> Precaución.",
      "? I'll call you ___ I need help. (only then) | in case | *if | unless >> Condición: if.",
      "_ I'll write down your number in case I ___ (forget) it. = forget >> in case + presente.",
      "_ In case ___ emergency, press the red button. = of >> in case of + sustantivo.",
      "s Take a sweater in case it [will] get cold. = (quitar will) >> in case + presente.",
      "o I always carry a pen in case I need it. >> in case + presente.",
      "t Llevá agua por si tenés sed. = Take some water in case you get thirsty ; Take water in case you get thirsty ; Take some water in case you're thirsty >> in case.",
      "?2 'I bought some food in case Tom came' means… | I bought food only because Tom came. | *I bought food as a precaution. | Tom bought the food. >> in case = por si acaso.",
      "f2 I'll leave the key under the mat if you'll arrive early. = I'll leave the key under the mat in case you arrive early >> in case + presente.",
    ],
  },
  {
    n: 115, t: 'unless as long as provided', es: 'unless / as long as / provided', tags: ['conjunctions', 'conditionals'], pre: [38],
    goals: ['Usar unless = if … not', 'Usar as long as / provided (that) = solo si', 'Usar presente después de estos conectores'],
    x: `**unless** = **a menos que / si no**: *Don't tell Ann **unless** she asks you* (= if she doesn't ask). Workbook unidad 6: *Conditionals with if and unless.*

**as long as / so long as / provided (that) / providing (that)** = **solo si**, con la condición de que: *You can borrow my car **as long as** you drive carefully.*

Igual que con if, usamos **presente** para el futuro: *unless it **rains*** (no *will rain*).`,
    form: [['Conector', 'Significado', 'Ejemplo'], ['unless', 'si no / a menos que', "I'll go unless it rains."], ['as long as', 'solo si', "OK, as long as you're back by 10."], ['provided (that)', 'con la condición de que', 'provided you pay now']],
    uses: ['unless = if not', 'as long as / provided = condición', 'Presente con sentido futuro'],
    aff: ["We'll play tennis unless it rains.|Vamos a jugar al tenis a menos que llueva.", "You can stay as long as you're quiet.|Te podés quedar si estás en silencio.", 'Provided you pay in advance, you get a discount.|Siempre que pagues por adelantado, tenés descuento.'],
    neg: ["I won't go unless you come with me.|No voy a ir a menos que vengas conmigo."],
    q: [],
    err: ["Unless you don't hurry, you'll be late.|Unless you hurry, you'll be late.|unless ya es negativo.", "I'll come as long as it won't rain.|I'll come as long as it doesn't rain.|Presente después de as long as."],
    ex: [
      "? I'll be there at 8 ___ the train is late. | if | *unless | as long as >> unless = a menos que.",
      "? You can use my bike ___ you bring it back tomorrow. | unless | *as long as | in case >> Condición: as long as.",
      "_ We'll miss the bus ___ we hurry. = unless >> unless = if … not.",
      "_ I'll lend you the money ___ you pay me back next week. = as long as ; provided ; provided that ; providing ; so long as >> Condición.",
      "s Unless you [don't] hurry, you'll miss the bus. = (quitar don't) >> unless ya es negativo: Unless you hurry…",
      "o I'll come with you as long as you drive. >> as long as + presente.",
      "t No lo hagas a menos que estés seguro. = Don't do it unless you're sure ; Don't do it unless you are sure >> unless.",
      "?2 'If you don't leave, I'll call the police.' → ___ you leave, I'll call the police. | If | *Unless | As long as >> Workbook: if you don't leave → unless you leave.",
      "f2 Unless it won't rain, we'll go to the beach. = Unless it rains, we'll go to the beach ; If it doesn't rain, we'll go to the beach >> unless + presente afirmativo.",
    ],
  },
  {
    n: 116, t: 'as (as I walked … / as I was … etc.)', es: 'as (mientras / porque)', tags: ['conjunctions'],
    goals: ['Usar as = mientras / en el momento en que', 'Usar as = porque', 'No confundir as con like (unidad 117)'],
    x: `**as** = **cuando / mientras** dos cosas pasan **al mismo tiempo**: *We all waved goodbye **as** the train left. **As** I was walking home, I met Tom.*

También para cambios paralelos: ***As** the day went on, it got hotter.*

**as** = **porque / ya que**: ***As** it was late, we took a taxi.* (= because, since).

En el Workbook (unidad 20) *as* aparece en ejercicios de *open cloze*.`,
    form: [['Uso', 'Ejemplo'], ['al mismo tiempo', 'As I opened the door, the phone rang.'], ['mientras (progreso)', 'As time passed, …'], ['porque', "As it's raining, let's stay in."]],
    uses: ['as = cuando / mientras', 'as = porque'],
    aff: ['The phone rang just as I was going out.|El teléfono sonó justo cuando estaba saliendo.', "As I didn't have a car, I took the bus.|Como no tenía auto, tomé el colectivo."],
    neg: ["As we didn't have much time, we didn't stop.|Como no teníamos mucho tiempo, no paramos."],
    q: [],
    err: ['Like I was tired, I went to bed.|As I was tired, I went to bed.|Causa → as (no like).', 'As I walked home, I was meeting Tom.|As I was walking home, I met Tom.|Acción corta → past simple.'],
    cmp: { w: [117], x: 'as y like no son intercambiables: unidad 117.' },
    ex: [
      "? ___ it was a public holiday, the shops were closed. | Like | *As | Despite >> as = porque.",
      "? I slipped ___ I was getting off the bus. | like | *as | during >> as = mientras.",
      "_ ___ I didn't know anybody, I felt a bit lonely. = As ; Because ; Since >> Causa.",
      "_ We watched the sun go down ___ we walked along the beach. = as ; while >> Al mismo tiempo.",
      "s [Like] it was late, we went home. = As >> Causa: as.",
      "o As I was leaving the house, it started to rain. >> as = cuando.",
      "t Como hacía frío, nos quedamos en casa. = As it was cold, we stayed at home ; As it was cold, we stayed home ; Because it was cold, we stayed at home >> as = porque.",
      "?2 '___ the day went on, the weather got worse.' | When | *As | While >> as = a medida que.",
      "f2 Like it was raining, we took a taxi. = As it was raining, we took a taxi ; Because it was raining, we took a taxi >> as = porque.",
    ],
  },
  {
    n: 117, t: 'like and as', es: 'like y as', tags: ['conjunctions', 'prepositions'],
    goals: ['Usar like = similar a', 'Usar as = en función de (as a teacher)', 'Usar as + oración (as I said)'],
    x: `**like** = **similar a**, como (comparación) + sustantivo/pronombre: *She looks like her mother. He swims like a fish.*

**as** = **en función de**, con el rol de: *She works **as** a teacher. I used the box **as** a table.*

Comparar: *As your boss, I can't allow it* (soy tu jefe) / *Like your boss, I think…* (pienso igual que él).

**as** + oración: *as I said, as you know, as usual, do as I tell you.* En inglés informal también *like* + oración.

**such as** / **like** = por ejemplo: *sports such as football / like football*.

Workbook (unidad 4): *as and like*.`,
    form: [['like', 'as'], ['similar a: like a child', 'función: as a nurse'], ['looks like rain', 'as I said'], ['like this', 'as usual']],
    uses: ['like = parecido a', 'as = función/rol', 'as + oración'],
    aff: ['She sings like an angel.|Canta como un ángel.', 'He worked as a waiter for two years.|Trabajó como mozo dos años.', 'As I told you, the shop is closed.|Como te dije, el negocio está cerrado.'],
    neg: ["Don't talk to me like that.|No me hables así."],
    q: ['What does she look like?|¿Cómo es ella (físicamente)?'],
    err: ['She works like a teacher.|She works as a teacher.|Profesión/rol → as.', 'As your father, he is very tall.|Like your father, he is very tall.|Comparación → like.'],
    ex: [
      "? My sister works ___ a nurse. | like | *as | such >> Profesión → as.",
      "? Your house looks ___ a palace! | as | *like | such as >> Comparación → like.",
      "_ ___ usual, Tom was late. = As >> as usual.",
      "_ He ran ___ the wind. = like >> Comparación.",
      "s I used the newspaper [like] an umbrella. = as >> Función → as.",
      "o As I said, the meeting is at ten. >> as + oración.",
      "t Trabajo como diseñador. = I work as a designer >> as + profesión.",
      "?2 'There are many sports ___ tennis and golf.' | as | *like | as like >> like / such as = por ejemplo.",
      "f2 She dances as a professional, but she's an amateur. = She dances like a professional, but she's an amateur ; She dances like a professional but she's an amateur >> Comparación (no lo es) → like.",
    ],
  },
  {
    n: 118, t: 'like as if', es: 'as if / as though', tags: ['conjunctions'], pre: [117],
    goals: ['Usar look/sound/feel + as if', 'Usar as if + pasado para algo irreal', 'Usar it looks like + sustantivo / oración'],
    x: `**as if / as though** = como si: describe cómo **parece** algo: *She looks **as if** she's tired. It sounds **as if** they're arguing.*

Con **look, sound, feel, smell, taste** y también *It looks as if it's going to rain.* En inglés informal: *It looks like…*

Para algo **irreal** usamos el **pasado** (como en if): *He talks **as if** he **knew** everything* (no lo sabe todo). *I'm not a child. Don't treat me as if I **were** a child.*`,
    form: [['Estructura', 'Ejemplo'], ['look/sound + as if', 'You look as if you need a rest.'], ['as if + pasado (irreal)', 'He acts as if he owned the place.'], ['It looks as if / like', "It looks as if it's going to rain."]],
    uses: ['Apariencia: look/sound/feel as if', 'Irreal: as if + pasado'],
    aff: ['You look as if you have seen a ghost.|Parece que viste un fantasma.', 'He spends money as if he were rich.|Gasta plata como si fuera rico.'],
    neg: ["It doesn't look as if she's coming.|No parece que vaya a venir."],
    q: ['Does it sound as if they are happy?|¿Suena como si estuvieran contentos?'],
    err: ['He talks like he is the boss (he is not).|He talks as if he were the boss.|Irreal formal → as if + pasado.', 'It looks as if raining.|It looks as if it’s going to rain.|as if + oración completa.'],
    ex: [
      "? You look ___ you haven't slept. | like if | *as if | as >> look as if.",
      "? He behaves as if he ___ the owner. (he isn't) | is | *were | will be >> Irreal: pasado.",
      "_ It sounds as ___ they're having a party next door. = if ; though >> as if / as though.",
      "_ I feel as if I ___ (be) going to faint. = am ; 'm >> Apariencia real: presente.",
      "s He talks as if he [is] the boss, but he isn't. = were >> Irreal: as if + pasado (were).",
      "o It looks as if it's going to rain. >> It looks as if + oración.",
      "t Me trata como si fuera un niño. = He treats me as if I were a child ; She treats me as if I were a child ; He treats me as if I was a child ; She treats me as if I was a child >> as if + pasado.",
      "?2 'Tom always talks ___ he knew everything.' | like | *as if | as >> as if (irreal).",
      "f2 You look as you need a holiday. = You look as if you need a holiday ; You look as though you need a holiday ; You look like you need a holiday >> as if.",
    ],
  },
  {
    n: 119, t: 'during for while', es: 'during / for / while', tags: ['conjunctions', 'time', 'prepositions'],
    goals: ['Usar during + sustantivo (cuándo)', 'Usar for + período (cuánto)', 'Usar while + oración'],
    x: `**during** + **sustantivo** = **cuándo** pasa algo: *I fell asleep **during** the film.*
**for** + **período** = **cuánto** dura: *I slept **for** two hours.* (no *during two hours*).
**while** + **sujeto + verbo**: *I fell asleep **while** I was watching the film.*

Comparar: *during the meeting* (sustantivo) / *while we were having the meeting* (oración).

Con while para el futuro usamos presente: *while you're away…*`,
    form: [['Palabra', 'Seguido de', 'Ejemplo'], ['during', 'sustantivo', 'during the night'], ['for', 'período de tiempo', 'for three hours'], ['while', 'sujeto + verbo', 'while I was sleeping']],
    uses: ['during = en el transcurso de', 'for = duración', 'while + oración'],
    aff: ['It rained during the night.|Llovió durante la noche.', 'We waited for an hour.|Esperamos una hora.', 'I met her while I was living in Rome.|La conocí mientras vivía en Roma.'],
    neg: ["Don't talk during the exam.|No hables durante el examen."],
    q: ['What did you do while I was out?|¿Qué hiciste mientras yo no estaba?'],
    err: ['I stayed there during two weeks.|I stayed there for two weeks.|Duración → for.', 'During I was cooking, the phone rang.|While I was cooking, the phone rang.|Oración → while.'],
    ex: [
      "? I fell asleep ___ the lesson. | while | *during | for >> during + sustantivo.",
      "? We lived in Peru ___ three years. | during | *for | while >> Duración → for.",
      "_ Somebody stole my bag ___ I was swimming. = while >> while + oración.",
      "_ ___ the summer, the town is full of tourists. = During ; In >> during + sustantivo.",
      "s I waited [during] two hours. = for >> Duración → for.",
      "o The phone rang while I was having a shower. >> while + oración.",
      "t Me dormí durante la película. = I fell asleep during the film ; I fell asleep during the movie >> during.",
      "?2 'We met a lot of people ___ we were on holiday.' | during | *while | for >> while + oración.",
      "f2 During I was waiting, I read a book. = While I was waiting, I read a book ; While I was waiting I read a book >> while + oración.",
    ],
  },
  {
    n: 120, t: 'by and until by the time …', es: 'by / until / by the time', tags: ['conjunctions', 'time', 'prepositions'],
    goals: ['Usar by = no más tarde de', 'Usar until = hasta (algo continúa)', 'Usar by the time + oración'],
    x: `**by** + tiempo = **no más tarde de** (como límite): *Please send me the report **by** Monday.*

**until / till** = **hasta**: algo **continúa** hasta ese momento: *I'll be at work **until** 6.*

Comparar: *I'll be away **until** Friday* (vuelvo el viernes) / *I'll be back **by** Friday* (el viernes como máximo).

**by the time** + oración = para cuando: ***By the time*** *we got to the cinema, the film **had** already **started**.* Con futuro usamos presente: *By the time you get here, we'll have finished.*`,
    form: [['Palabra', 'Significado', 'Ejemplo'], ['by', 'no más tarde de', 'by 5 p.m.'], ['until', 'hasta (continúa)', 'until 5 p.m.'], ['by the time + oración', 'para cuando', 'By the time I arrived, …']],
    uses: ['by = fecha límite', 'until = duración hasta', 'by the time + oración'],
    aff: ["I'll finish the work by Friday.|Voy a terminar el trabajo para el viernes.", 'We waited until the rain stopped.|Esperamos hasta que paró de llover.', 'By the time I got home, everyone was asleep.|Para cuando llegué a casa, todos dormían.'],
    neg: ["I won't know the results until next week.|No voy a saber los resultados hasta la semana que viene."],
    q: ['Can you finish it by tomorrow?|¿Lo podés terminar para mañana?'],
    err: ['I have to finish this until Monday.|I have to finish this by Monday.|Fecha límite → by.', "I'll wait here by you come back.|I'll wait here until you come back.|Continúa → until."],
    ex: [
      "? Please pay the bill ___ the end of the month. | until | *by | while >> Fecha límite.",
      "? I'll stay here ___ you come back. | by | *until | by the time >> Continúa hasta.",
      "_ ___ the time we arrived, the shop had closed. = By >> by the time.",
      "_ The shop is open ___ 8 p.m. = until ; till >> Duración hasta.",
      "s I'll have finished the report [until] Friday. = by >> Fecha límite.",
      "o By the time I found the keys, it was too late. >> by the time + pasado.",
      "t Tenés que devolver el libro para el lunes. = You have to return the book by Monday ; You must return the book by Monday ; You need to return the book by Monday ; You have to give the book back by Monday >> by.",
      "?2 'Let's wait ___ it stops raining.' | by | *until | by the time >> until + oración.",
      "f2 By the time you will get here, we'll have eaten. = By the time you get here, we'll have eaten ; By the time you get here, we will have eaten >> by the time + presente.",
    ],
  },
];

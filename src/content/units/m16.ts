import type { UnitSrc } from '../dsl';

// Module 16 — Phrasal verbs (EGU units 137–145)
export const m16: UnitSrc[] = [
  {
    n: 137, t: 'Phrasal verbs 1 Introduction', es: 'Phrasal verbs: introducción', tags: ['phrasal-verbs'],
    goals: ['Understand what a phrasal verb is', 'Place the object (turn the light off / turn it off)', 'Recognise meanings that are not literal'],
    x: `A **phrasal verb** is a verb + a particle (**in, out, on, off, up, down, away, back…**): *get up, give up, look after*.

Sometimes the meaning is **literal** (*come in* = enter), but often it **changes**: *give up* = stop doing something, *break down* = stop working.

**Position of the object** (separable verbs):
• with a noun: *Turn off the light* or *Turn the light off*.
• with a **pronoun** (it, them, me…): **always in the middle**: *Turn **it** off* (not *Turn off it*).

Some take an extra preposition: *look forward **to**, run out **of**, keep up **with***.`,
    form: [['Estructura', 'Ejemplo'], ['verbo + partícula', 'The plane took off.'], ['verbo + partícula + objeto', 'Put on your coat.'], ['verbo + objeto + partícula', 'Put your coat on.'], ['verbo + pronombre + partícula', 'Put it on. (obligatorio)']],
    uses: ['Verb + particle = a new meaning', 'Noun object: before or after', 'Pronoun: always in the middle'],
    aff: ['He gave up smoking.|Dejó de fumar.', 'The plane took off on time.|El avión despegó a horario.', "It's cold. Put your jacket on.|Hace frío. Ponete la campera."],
    neg: ["I can't turn it off.|No lo puedo apagar."],
    q: ['What time did you get up?|¿A qué hora te levantaste?'],
    err: ['Turn off it, please.|Turn it off, please.|The pronoun goes in the middle.', 'Can you pick up me at 8?|Can you pick me up at 8?|The pronoun goes in the middle.'],
    ex: [
      "? 'He gave up smoking' means he… | started smoking | *stopped smoking | smoked more >> give up = stop.",
      "? The light is on. Can you ___? | turn off it | *turn it off | off turn it >> The pronoun goes in the middle.",
      "_ It's cold outside. Put ___ on. (your coat → pronombre) = it >> The pronoun goes in the middle: Put it on.",
      "_ What time did you get ___ this morning? = up >> get up = get out of bed.",
      "s Turn it off, please. >> Correct: with a pronoun, the particle goes at the end (turn it off).",
      "o Please turn the music down. >> The object between the verb and the particle.",
      "o Turn it off, please >> The pronoun goes in the middle.",
      "m give up = dejar ; take off = despegar ; get up = levantarse ; break down = averiarse >> Meanings.",
      "f2 I don't need these papers. You can throw away them. = I don't need these papers. You can throw them away >> The pronoun goes in the middle.",
    ],
  },
  {
    n: 138, t: 'Phrasal verbs 2 in/out', es: 'Phrasal verbs: in / out', tags: ['phrasal-verbs'], pre: [137],
    goals: ['Use in/out = go in/go out', 'Use fill in, check in/out, drop out…', 'Use move in / move out'],
    x: `**in** = **to the inside**, **out** = **to the outside**: *come in, go out, get in (a car), get out (of)*.

Others: **check in / check out** (hotel, airport), **move in / move out** (start/stop living in a home), **drop in** (visit without warning), **join in** (take part), **fill in** (complete a form), **hand in** (give to a teacher/boss), **drop out (of)** (leave a course), **break in / break into** (enter to steal), **plug in**, **give in** (stop fighting), **eat out** (eat at a restaurant), **lock sb out**.`,
    form: [['Phrasal verb', 'Significado'], ['check in / out', 'registrarse / irse (hotel)'], ['fill in', 'completar (formulario)'], ['drop out', 'abandonar (estudios)'], ['eat out', 'comer afuera']],
    uses: ['Literal in/out', 'Common expressions with in/out'],
    aff: ['Please fill in this form.|Por favor completá este formulario.', 'We checked in at the hotel at 3.|Hicimos el check-in en el hotel a las 3.', "Let's eat out tonight.|Esta noche comamos afuera."],
    neg: ["He didn't hand in his homework.|No entregó la tarea."],
    q: ['When are you moving in?|¿Cuándo te mudás?'],
    err: ['Please fill this form.|Please fill in this form.|fill in = complete (a form).', 'She dropped from university.|She dropped out of university.|drop out of.'],
    ex: [
      "? Please ___ your name and address on this form. | fill | *fill in | fill out of >> fill in.",
      "? She ___ of university after one year. | dropped in | *dropped out | dropped >> drop out.",
      "_ Our new neighbours moved ___ last week. = in >> move in = start living in a new home.",
      "_ What time do we have to check ___ of the hotel? = out >> check out.",
      "s Somebody broke [in] our house last night. = into >> break into + place.",
      "o I'm too tired to cook. Let's eat out. >> eat out.",
      "o Hand in your exams, please >> hand in.",
      "m check in = registrarse ; drop in = visitar sin avisar ; give in = rendirse ; join in = sumarse >> in.",
      "f2 Please turn of the lights when you leave. = Please turn off the lights when you leave ; Please switch off the lights when you leave ; Please turn the lights off when you leave >> turn off (Workbook 138.1).",
    ],
  },
  {
    n: 139, t: 'Phrasal verbs 3 out', es: 'Phrasal verbs: out', tags: ['phrasal-verbs'], pre: [138],
    goals: ['Use out = disappear/finish (run out, go out)', 'Use out = aloud / to everyone (read out, give out)', 'Use find out, work out, turn out, carry out'],
    x: `**out** can mean:
• **disappear / finish**: *run out (of)* (have none left), *go out* (stop burning: *The fire went out*), *put out* (stop a fire), *sell out*.
• **aloud / to everyone**: *read out, call out, shout out, give out / hand out* (give to each person).
• **complete, solve**: *find out* (discover), *work out* (solve, calculate; also do exercise), *figure out*, *sort out*, *carry out* (do a task), *fill out*.
• **end up being**: *turn out*: *It turned out that he was right.*
• Others: *point out, try out, leave out, cross out*.`,
    form: [['Phrasal verb', 'Significado'], ['run out of', 'quedarse sin'], ['find out', 'averiguar'], ['work out', 'resolver / entrenar'], ['turn out', 'resultar']],
    uses: ['out = run out, finish', 'out = to everyone / aloud', 'out = solve', 'turn out = end up being'],
    aff: ["We've run out of milk.|Nos quedamos sin leche.", 'I need to find out the times of the trains.|Tengo que averiguar los horarios de los trenes.', 'It turned out to be a great day.|Resultó ser un gran día.'],
    neg: ["I can't work out the answer.|No puedo resolver la respuesta."],
    q: ['Did you find out what happened?|¿Averiguaste qué pasó?'],
    err: ["We've run off milk.|We've run out of milk.|run out of.", 'I want to know out the truth.|I want to find out the truth.|find out.'],
    ex: [
      "? We've ___ of milk. Can you buy some? | run off | *run out | ran out >> run out of (Workbook 139.1).",
      "? I'm trying to ___ how much the trip will cost. | work off | *work out | out work >> work out = calculate.",
      "_ It ___ out that she was right after all. = turned >> turn out = end up being.",
      "_ The teacher handed ___ the exam papers. = out >> hand out = give to each person.",
      "s The firefighters soon put the fire [off]. = out >> put out = stop a fire burning.",
      "o I found out the truth yesterday. >> find out.",
      "o I work out at the gym three times a week >> work out = train, do exercise.",
      "m run out of = have none left ; carry out = do (a task) ; point out = tell someone about a fact ; turn out = end up being >> out.",
      "f2 We've run off coffee. = We've run out of coffee ; We have run out of coffee >> run out of = have none left.",
    ],
  },
  {
    n: 140, t: 'Phrasal verbs 4 on/off (1)', es: 'Phrasal verbs: on / off (1)', tags: ['phrasal-verbs'], pre: [137],
    goals: ['Use on/off with devices (turn on/off)', 'Use put on / take off (clothes)', 'Use get on/off, take off (plane)'],
    x: `**on/off** with **devices**: *turn / switch on, turn / switch off*: *Turn off the TV.*

**Clothes**: *put on* (start wearing) / *take off* (remove); *try on* (see if it fits).

**Transport**: *get on / get off* (bus, train, plane, bike).

**take off** = leave the ground (a plane). **set off** = start a journey. **call off** = cancel. **put off** = postpone (unit 141 goes deeper).`,
    form: [['Phrasal verb', 'Significado'], ['turn on / off', 'encender / apagar'], ['put on / take off', 'ponerse / sacarse'], ['get on / off', 'subir / bajar (transporte)'], ['take off', 'despegar']],
    uses: ['Devices', 'Clothes', 'Transport', 'take off / set off / call off'],
    aff: ['Put your coat on. It’s cold.|Ponete el abrigo. Hace frío.', 'Can I try these shoes on?|¿Me puedo probar estos zapatos?', 'The plane took off late.|El avión despegó tarde.'],
    neg: ["Don't forget to switch off the lights.|No te olvides de apagar las luces."],
    q: ['Where do we get off the bus?|¿Dónde nos bajamos del colectivo?'],
    err: ['Wear your coat, we are leaving.|Put your coat on, we are leaving.|The action of getting dressed → put on.', 'I got down the bus.|I got off the bus.|get off.'],
    ex: [
      "? Please ___ your coat; it's cold outside. | take off | *put on | turn on >> put on (Workbook 140.1).",
      "? It's hot in here. I'm going to ___ my jacket. | put on | *take off | get off >> take off = remove (clothes).",
      "_ The plane took ___ at 6.30. = off >> take off = leave the ground (a plane).",
      "_ We got ___ the train at the next station. = off >> get off = leave (a bus, train).",
      "s Can I try [in] this shirt? = on >> try on = put on clothes to see if they fit.",
      "o Don't forget to turn off the lights. >> turn off.",
      "o Turn on the TV >> turn on.",
      "m put on = ponerse ; take off = sacarse / despegar ; get on = subirse ; switch off = apagar >> on/off.",
      "f2 What time does the plane take of? = What time does the plane take off >> take off = leave the ground (a plane).",
    ],
  },
  {
    n: 141, t: 'Phrasal verbs 5 on/off (2)', es: 'Phrasal verbs: on / off (2)', tags: ['phrasal-verbs'], pre: [140],
    goals: ['Use on = continue (go on, carry on, keep on)', 'Use off = leave / separate (set off, show off, tell off)', 'Use put off and call off'],
    x: `**on** = **continue**: *go on, carry on, keep on (doing)*: *Carry on working. Don't stop.* Also *get on (with)* = continue with something / have a good relationship with someone.

**off** = **leave, go away, separate**: *set off* (start a journey), *go off* (ring / explode / go bad), *show off* (try to impress), *tell sb off* (speak angrily to), *see sb off* (say goodbye at a station or airport).

**off** = **postpone / cancel**: *put off* (postpone), *call off* (cancel).

Workbook (unit 1): *keep up with, get away with* are other useful phrasal verbs.`,
    form: [['Phrasal verb', 'Significado'], ['go on / carry on', 'continuar'], ['get on with', 'llevarse bien con'], ['put off', 'posponer'], ['call off', 'cancelar'], ['tell sb off', 'retar']],
    uses: ['on = continue', 'off = leave / separate', 'put off / call off'],
    aff: ['The meeting was put off until Friday.|La reunión se pospuso hasta el viernes.', 'I get on well with my colleagues.|Me llevo bien con mis compañeros.', 'Carry on. I’m listening.|Seguí, te escucho.'],
    neg: ["Don't put off going to the doctor.|No postergues ir al médico."],
    q: ['Why did they call off the match?|¿Por qué suspendieron el partido?'],
    err: ['The match was cancelled off.|The match was called off.|call off = cancel.', 'I get on good with him.|I get on well with him.|get on well with.'],
    ex: [
      "? The meeting was ___ off until Friday. | called | *put | got >> put off = postpone (Workbook 141.1).",
      "? The match was ___ off because of the rain. | put | *called | set >> call off = cancel.",
      "_ Don't stop. Carry ___ working. = on >> carry on = continue.",
      "_ We set ___ early to avoid the traffic. = off >> set off = start a journey.",
      "s The teacher told him [of] for being late. = off >> tell sb off = speak angrily to someone.",
      "o I get on well with my sister. >> get on (well) with.",
      "o He went on talking >> go on / keep on + -ing.",
      "m put off = posponer ; call off = cancelar ; show off = presumir ; go off = sonar (alarma) >> off.",
      "f2 My alarm clock went out at 6. = My alarm clock went off at 6 >> go off = start ringing (an alarm).",
    ],
  },
  {
    n: 142, t: 'Phrasal verbs 6 up/down', es: 'Phrasal verbs: up / down', tags: ['phrasal-verbs'], pre: [137],
    goals: ['Use literal up/down (pick up, sit down)', 'Use turn up/down (volume)', 'Use cut down, break down, turn down, slow down'],
    x: `Literal **up/down**: *stand up, sit down, pick up, put down, look up, climb up, knock down*.

**turn up / turn down** = make the volume or temperature higher / lower: *Could you turn the music down?*

**down** = **reduce / get worse**: *cut down (on)* (reduce), *slow down* (go more slowly), *calm down* (become calm).

Others: *break down* (stop working / lose control of your feelings), *turn down* (refuse an offer), *let sb down* (disappoint), *write down* (make a note of), *close down* (stop a business).`,
    form: [['Phrasal verb', 'Significado'], ['turn up / down', 'subir / bajar (volumen)'], ['cut down on', 'reducir'], ['break down', 'averiarse'], ['turn down', 'rechazar'], ['write down', 'anotar']],
    uses: ['Literal up/down', 'turn up/down', 'down = reduce', 'Others with down'],
    aff: ['Could you turn the volume down?|¿Podrías bajar el volumen?', "I'm trying to cut down on coffee.|Estoy tratando de tomar menos café.", 'Write down your password.|Anotá tu contraseña.'],
    neg: ["Don't let me down.|No me decepciones."],
    q: ['Why did you turn the offer down?|¿Por qué rechazaste la oferta?'],
    err: ['Our car broke on the motorway.|Our car broke down on the motorway.|break down = stop working.', 'Could you lower down the music?|Could you turn down the music?|turn down.'],
    ex: [
      "? Could you ___ the volume down? | put | *turn | cut >> turn down (Workbook 142.1).",
      "? Our car ___ on the way to the airport. | broke up | *broke down | turned down >> break down = stop working.",
      "_ They offered him a job, but he turned it ___. = down >> turn down = refuse.",
      "_ You're driving too fast. Slow ___! = down >> slow down.",
      "s I'm trying to cut [up] on sugar. = down >> cut down on = reduce.",
      "o Please write down your name. >> write down.",
      "o Calm down, it's nothing >> calm down.",
      "m sit down = sentarse ; pick up = levantar / recoger ; let down = decepcionar ; close down = cerrar (negocio) >> up/down.",
      "f2 The old cinema was knocked up and replaced by a supermarket. = The old cinema was knocked down and replaced by a supermarket >> knock down = demolish.",
    ],
  },
  {
    n: 143, t: 'Phrasal verbs 7 up (1)', es: 'Phrasal verbs: up (1)', tags: ['phrasal-verbs'], pre: [142],
    goals: ['Use get up, wake up, grow up', 'Use go up / come up (increase, appear)', 'Use turn up, set up, take up, make up'],
    x: `Phrasal verbs with **up**:
• **get up** (get out of bed), **wake up** (stop sleeping), **stay up** (not go to bed), **grow up** (become an adult).
• **go up** (prices rise), **come up** (a topic/problem appears), **put up** (raise prices / let someone stay).
• **turn up / show up** (appear, arrive).
• **set up** (start, organise), **take up** (start a hobby / use space), **make up** (invent; become friends again), **bring up** (raise a child; start talking about a topic), **end up** (finally be/do).

Workbook (unit 12): *take up* = start a hobby.`,
    form: [['Phrasal verb', 'Significado'], ['get up', 'levantarse'], ['grow up', 'criarse'], ['turn up', 'aparecer'], ['take up', 'empezar (hobby)'], ['end up', 'terminar (en)']],
    uses: ['Routine: get up, wake up, stay up', 'Increases: go up', 'Appear: turn up', 'Start / create: take up, set up'],
    aff: ['I need to get up early tomorrow.|Mañana tengo que levantarme temprano.', 'I grew up in a small village.|Me crié en un pueblo chico.', "He's taken up photography.|Empezó con la fotografía."],
    neg: ["She didn't turn up to the meeting.|No apareció en la reunión."],
    q: ['What time did you wake up?|¿A qué hora te despertaste?'],
    err: ['I grew in Lima.|I grew up in Lima.|grow up = become an adult.', 'Prices have gone on again.|Prices have gone up again.|go up = rise.'],
    ex: [
      "? I need to ___ up early tomorrow. | stay | *get | grow >> get up (Workbook 143.1).",
      "? We waited for an hour, but he didn't ___ up. | show off | *turn | take >> turn up = arrive, appear.",
      "_ Where did you grow ___? = up >> grow up = spend your childhood.",
      "_ We got lost and ended ___ in a small village. = up >> end up = finally be (in a place or situation).",
      "s The price of petrol has gone [on] again. = up >> go up = rise.",
      "o She has taken up yoga. >> take up = start a hobby.",
      "o I stayed up late >> stay up.",
      "m set up = fundar ; make up = inventar ; bring up = criar ; come up = surgir >> up.",
      "f2 I woke on at 7 but I didn't get up until 8. = I woke up at 7 but I didn't get up until 8 ; I woke up at 7, but I didn't get up until 8 >> wake up.",
    ],
  },
  {
    n: 144, t: 'Phrasal verbs 8 up (2)', es: 'Phrasal verbs: up (2)', tags: ['phrasal-verbs'], pre: [143],
    goals: ['Use up = completely (eat up, use up, tidy up)', 'Use give up, look up, pick up', 'Use come up with, keep up with, put up with'],
    x: `**up** can also mean **completely**: *eat up, drink up, use up, tidy up, clean up, fill up, break up* (end a relationship), *split up*.

Others:
• **give up** = stop / stop trying; **look up** = find (in a dictionary); **pick up** = collect / learn without studying; **do up** = fasten; **hold up** = delay; **blow up** = explode.
• With a preposition: **come up with** (think of an idea), **keep up with** (go at the same speed / stay informed), **put up with** (tolerate), **catch up with** (reach).

Workbook (unit 1): *keep up with* and *smarten up*.`,
    form: [['Phrasal verb', 'Significado'], ['give up', 'dejar, rendirse'], ['look up', 'buscar (dato)'], ['come up with', 'idear'], ['keep up with', 'estar al día'], ['put up with', 'tolerar']],
    uses: ['up = completely', 'Three-part phrasal verbs'],
    aff: ['They came up with a new plan.|Se les ocurrió un plan nuevo.', 'Look the word up in the dictionary.|Buscá la palabra en el diccionario.', 'I read magazines to keep up with fashion.|Leo revistas para estar al día con la moda.'],
    neg: ["I can't put up with this noise.|No aguanto este ruido."],
    q: ['Why did they break up?|¿Por qué se separaron?'],
    err: ["He gave out smoking.|He gave up smoking.|give up = stop.", 'They came with a good idea.|They came up with a good idea.|come up with.'],
    ex: [
      "? They decided to ___ up with a new plan. | get | *come | keep >> come up with (Workbook 144.1).",
      "? If you don't know the word, ___ it up. | pick | *look | give >> look up = find information.",
      "_ I go to fashion shows to keep ___ with the latest designs. = up >> keep up with (Workbook unit 1).",
      "_ Don't give ___! You can do it. = up >> give up = stop trying.",
      "s Tidy [on] your room, please. = up >> tidy up.",
      "o She picked up Spanish while living in Madrid. >> pick up = learn without studying.",
      "o They broke up after two years >> break up.",
      "m eat up = comer todo ; do up = abrochar ; hold up = demorar ; blow up = explotar >> up.",
      "f2 I can't put on with his behaviour any more. = I can't put up with his behaviour any more ; I can't put up with his behavior any more ; I cannot put up with his behaviour any more >> put up with.",
    ],
  },
  {
    n: 145, t: 'Phrasal verbs 9 away/back', es: 'Phrasal verbs: away / back', tags: ['phrasal-verbs'], pre: [137],
    goals: ['Use away = leave (go away, run away)', 'Use back = return (come back, call back)', 'Use throw away, give away, pay back'],
    x: `**away** = **leave / go to another place**: *go away, run away, walk away, get away (escape), stay away, keep away*. Also **not here**: *She's away on holiday.*

**away** = **get rid of something**: *throw away* (put in the bin), *give away* (give for free), *put away* (put in its place).

**back** = **return / give back**: *come back, go back, be back, get back* (return); *call / phone back* (return a call); *pay back* (return money); *give back, take back* (return an object); *look back* (remember the past).`,
    form: [['Phrasal verb', 'Significado'], ['go away', 'irse'], ['throw away', 'tirar'], ['give away', 'regalar'], ['come back / be back', 'volver'], ['pay back', 'devolver (dinero)']],
    uses: ['away = leave / get rid of', 'back = return / give back'],
    aff: ['When will you be back from your trip?|¿Cuándo volvés de tu viaje?', 'I threw away my old shoes.|Tiré mis zapatos viejos.', "I'll pay you back tomorrow.|Te devuelvo la plata mañana."],
    neg: ["Don't go away. I'll be back in a minute.|No te vayas. Vuelvo en un minuto."],
    q: ['Can you call me back later?|¿Me podés llamar más tarde?'],
    err: ['I will return back tomorrow.|I will come back tomorrow.|return already means come back: come back or return.', 'Throw it out the window away.|Throw it away.|throw away = put in the bin.'],
    ex: [
      "? When will you ___ back from your trip? | go | *be | give >> be back = return (Workbook 145.1).",
      "? Don't ___ away those old photos! | give | *throw | run >> throw away = put in the bin.",
      "_ I'm busy now. Can I call you ___ later? = back >> call back.",
      "_ He lent me £20 and I paid him ___ the next day. = back >> pay back.",
      "s The thief got [out] before the police arrived. = away >> get away = escape.",
      "o She's away on holiday this week. >> away = not here.",
      "o I'll be back in ten minutes >> be back.",
      "m give away = regalar ; put away = guardar ; look back = recordar ; take back = devolver (a la tienda) >> away/back.",
      "f2 Please give me back it. = Please give it back to me ; Please give it back ; Give it back to me, please >> The pronoun goes in the middle.",
    ],
  },
];

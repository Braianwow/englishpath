import type { UnitSrc } from '../dsl';

// Module 16 — Phrasal verbs (EGU units 137–145)
export const m16: UnitSrc[] = [
  {
    n: 137, t: 'Phrasal verbs 1 Introduction', es: 'Phrasal verbs: introducción', tags: ['phrasal-verbs'],
    goals: ['Entender qué es un phrasal verb', 'Ubicar el objeto (turn the light off / turn it off)', 'Reconocer significados no literales'],
    x: `Un **phrasal verb** es un verbo + una partícula (**in, out, on, off, up, down, away, back…**): *get up, give up, look after*.

A veces el significado es **literal** (*come in* = entrar), pero muchas veces **cambia**: *give up* = dejar de hacer algo, *break down* = averiarse.

**Posición del objeto** (verbos separables):
• con sustantivo: *Turn off the light* o *Turn the light off*.
• con **pronombre** (it, them, me…): **siempre en el medio**: *Turn **it** off* (no *Turn off it*).

Algunos van con preposición extra: *look forward **to**, run out **of**, keep up **with***.`,
    form: [['Estructura', 'Ejemplo'], ['verbo + partícula', 'The plane took off.'], ['verbo + partícula + objeto', 'Put on your coat.'], ['verbo + objeto + partícula', 'Put your coat on.'], ['verbo + pronombre + partícula', 'Put it on. (obligatorio)']],
    uses: ['Verbo + partícula = nuevo significado', 'Objeto sustantivo: antes o después', 'Pronombre: siempre en el medio'],
    aff: ['He gave up smoking.|Dejó de fumar.', 'The plane took off on time.|El avión despegó a horario.', "It's cold. Put your jacket on.|Hace frío. Ponete la campera."],
    neg: ["I can't turn it off.|No lo puedo apagar."],
    q: ['What time did you get up?|¿A qué hora te levantaste?'],
    err: ['Turn off it, please.|Turn it off, please.|Pronombre en el medio.', 'Can you pick up me at 8?|Can you pick me up at 8?|Pronombre en el medio.'],
    ex: [
      "? 'He gave up smoking' means he… | started smoking | *stopped smoking | smoked more >> give up = dejar.",
      "? The light is on. Can you ___? | turn off it | *turn it off | off turn it >> Pronombre en el medio.",
      "_ It's cold outside. Put ___ on. (your coat → pronombre) = it >> Pronombre en el medio: Put it on.",
      "_ What time did you get ___ this morning? = up >> get up = levantarse.",
      "s Turn it off, please. >> Correcta: con pronombre, la partícula va al final (turn it off).",
      "o Please turn the music down. >> Objeto entre verbo y partícula.",
      "t Apagalo, por favor. = Turn it off, please ; Please turn it off ; Switch it off, please ; Please switch it off >> Pronombre en el medio.",
      "m give up = dejar ; take off = despegar ; get up = levantarse ; break down = averiarse >> Significados.",
      "f2 I don't need these papers. You can throw away them. = I don't need these papers. You can throw them away >> Pronombre en el medio.",
    ],
  },
  {
    n: 138, t: 'Phrasal verbs 2 in/out', es: 'Phrasal verbs: in / out', tags: ['phrasal-verbs'], pre: [137],
    goals: ['Usar in/out = entrar/salir', 'Usar fill in, check in/out, drop out…', 'Usar move in / move out'],
    x: `**in** = **hacia adentro**, **out** = **hacia afuera**: *come in, go out, get in (un auto), get out (of)*.

Otros: **check in / check out** (hotel, aeropuerto), **move in / move out** (mudarse), **drop in** (visitar sin avisar), **join in** (sumarse), **fill in** (completar un formulario), **hand in** (entregar), **drop out (of)** (abandonar estudios), **break in / break into** (entrar a robar), **plug in**, **give in** (rendirse), **eat out** (comer afuera), **lock sb out**.`,
    form: [['Phrasal verb', 'Significado'], ['check in / out', 'registrarse / irse (hotel)'], ['fill in', 'completar (formulario)'], ['drop out', 'abandonar (estudios)'], ['eat out', 'comer afuera']],
    uses: ['in/out literal', 'Expresiones frecuentes con in/out'],
    aff: ['Please fill in this form.|Por favor completá este formulario.', 'We checked in at the hotel at 3.|Hicimos el check-in en el hotel a las 3.', "Let's eat out tonight.|Esta noche comamos afuera."],
    neg: ["He didn't hand in his homework.|No entregó la tarea."],
    q: ['When are you moving in?|¿Cuándo te mudás?'],
    err: ['Please fill this form.|Please fill in this form.|fill in = completar.', 'She dropped from university.|She dropped out of university.|drop out of.'],
    ex: [
      "? Please ___ your name and address on this form. | fill | *fill in | fill out of >> fill in.",
      "? She ___ of university after one year. | dropped in | *dropped out | dropped >> drop out.",
      "_ Our new neighbours moved ___ last week. = in >> move in = mudarse (llegar).",
      "_ What time do we have to check ___ of the hotel? = out >> check out.",
      "s Somebody broke [in] our house last night. = into >> break into + lugar.",
      "o I'm too tired to cook. Let's eat out. >> eat out.",
      "t Entregá los exámenes, por favor. = Hand in your exams, please ; Please hand in your exams ; Hand your exams in, please >> hand in.",
      "m check in = registrarse ; drop in = visitar sin avisar ; give in = rendirse ; join in = sumarse >> in.",
      "f2 Please turn of the lights when you leave. = Please turn off the lights when you leave ; Please switch off the lights when you leave ; Please turn the lights off when you leave >> turn off (Cuadernillo 138.1).",
    ],
  },
  {
    n: 139, t: 'Phrasal verbs 3 out', es: 'Phrasal verbs: out', tags: ['phrasal-verbs'], pre: [138],
    goals: ['Usar out = desaparecer/terminar (run out, go out)', 'Usar out = en voz alta / a todos (read out, give out)', 'Usar find out, work out, turn out, carry out'],
    x: `**out** puede significar:
• **desaparecer / terminarse**: *run out (of)* (quedarse sin), *go out* (apagarse: *The fire went out*), *put out* (apagar fuego), *sell out*.
• **en voz alta / para todos**: *read out, call out, shout out, give out / hand out* (repartir).
• **completar, resolver**: *find out* (averiguar), *work out* (resolver, calcular; también hacer ejercicio), *figure out*, *sort out*, *carry out* (llevar a cabo), *fill out*.
• **resultar**: *turn out*: *It turned out that he was right.*
• Otros: *point out, try out, leave out, cross out*.`,
    form: [['Phrasal verb', 'Significado'], ['run out of', 'quedarse sin'], ['find out', 'averiguar'], ['work out', 'resolver / entrenar'], ['turn out', 'resultar']],
    uses: ['out = terminarse', 'out = para todos / en voz alta', 'out = resolver', 'turn out = resultar'],
    aff: ["We've run out of milk.|Nos quedamos sin leche.", 'I need to find out the times of the trains.|Tengo que averiguar los horarios de los trenes.', 'It turned out to be a great day.|Resultó ser un gran día.'],
    neg: ["I can't work out the answer.|No puedo resolver la respuesta."],
    q: ['Did you find out what happened?|¿Averiguaste qué pasó?'],
    err: ["We've run off milk.|We've run out of milk.|run out of.", 'I want to know out the truth.|I want to find out the truth.|find out.'],
    ex: [
      "? We've ___ of milk. Can you buy some? | run off | *run out | ran out >> run out of (Cuadernillo 139.1).",
      "? I'm trying to ___ how much the trip will cost. | work off | *work out | out work >> work out = calcular.",
      "_ It ___ out that she was right after all. = turned >> turn out = resultar.",
      "_ The teacher handed ___ the exam papers. = out >> hand out = repartir.",
      "s The firefighters soon put the fire [off]. = out >> put out = apagar (fuego).",
      "o I found out the truth yesterday. >> find out.",
      "t Hago ejercicio en el gimnasio tres veces por semana. = I work out at the gym three times a week ; I work out in the gym three times a week >> work out = entrenar.",
      "m run out of = quedarse sin ; carry out = llevar a cabo ; point out = señalar ; turn out = resultar >> out.",
      "f2 We've run off coffee. = We've run out of coffee ; We have run out of coffee >> run out of = quedarse sin.",
    ],
  },
  {
    n: 140, t: 'Phrasal verbs 4 on/off (1)', es: 'Phrasal verbs: on / off (1)', tags: ['phrasal-verbs'], pre: [137],
    goals: ['Usar on/off con aparatos (turn on/off)', 'Usar put on / take off (ropa)', 'Usar get on/off, take off (avión)'],
    x: `**on/off** con **aparatos**: *turn / switch on, turn / switch off*: *Turn off the TV.*

**Ropa**: *put on* (ponerse) / *take off* (sacarse); *try on* (probarse).

**Transporte**: *get on / get off* (bus, tren, avión, bici).

**take off** = despegar (avión). **set off** = salir de viaje. **call off** = cancelar. **put off** = posponer (unidad 141 profundiza).`,
    form: [['Phrasal verb', 'Significado'], ['turn on / off', 'encender / apagar'], ['put on / take off', 'ponerse / sacarse'], ['get on / off', 'subir / bajar (transporte)'], ['take off', 'despegar']],
    uses: ['Aparatos', 'Ropa', 'Transporte', 'take off / set off / call off'],
    aff: ['Put your coat on. It’s cold.|Ponete el abrigo. Hace frío.', 'Can I try these shoes on?|¿Me puedo probar estos zapatos?', 'The plane took off late.|El avión despegó tarde.'],
    neg: ["Don't forget to switch off the lights.|No te olvides de apagar las luces."],
    q: ['Where do we get off the bus?|¿Dónde nos bajamos del colectivo?'],
    err: ['Wear your coat, we are leaving.|Put your coat on, we are leaving.|Acción de ponerse → put on.', 'I got down the bus.|I got off the bus.|get off.'],
    ex: [
      "? Please ___ your coat; it's cold outside. | take off | *put on | turn on >> put on (Cuadernillo 140.1).",
      "? It's hot in here. I'm going to ___ my jacket. | put on | *take off | get off >> take off = sacarse.",
      "_ The plane took ___ at 6.30. = off >> take off = despegar.",
      "_ We got ___ the train at the next station. = off >> get off = bajarse.",
      "s Can I try [in] this shirt? = on >> try on = probarse.",
      "o Don't forget to turn off the lights. >> turn off.",
      "t Prendé la tele. = Turn on the TV ; Switch on the TV ; Turn the TV on ; Switch the TV on >> turn on.",
      "m put on = ponerse ; take off = sacarse / despegar ; get on = subirse ; switch off = apagar >> on/off.",
      "f2 What time does the plane take of? = What time does the plane take off >> take off = despegar.",
    ],
  },
  {
    n: 141, t: 'Phrasal verbs 5 on/off (2)', es: 'Phrasal verbs: on / off (2)', tags: ['phrasal-verbs'], pre: [140],
    goals: ['Usar on = continuar (go on, carry on, keep on)', 'Usar off = salir / separarse (set off, show off, tell off)', 'Usar put off y call off'],
    x: `**on** = **continuar**: *go on, carry on, keep on (doing)*: *Carry on working. Don't stop.* También *get on (with)* = continuar con algo / llevarse bien con alguien.

**off** = **salir, irse, separarse**: *set off* (salir de viaje), *go off* (sonar una alarma / explotar / ponerse feo), *show off* (presumir), *tell sb off* (retar), *see sb off* (despedir).

**off** = **posponer / cancelar**: *put off* (posponer), *call off* (cancelar).

Workbook (unidad 1): *keep up with, get away with* son otros phrasal verbs útiles.`,
    form: [['Phrasal verb', 'Significado'], ['go on / carry on', 'continuar'], ['get on with', 'llevarse bien con'], ['put off', 'posponer'], ['call off', 'cancelar'], ['tell sb off', 'retar']],
    uses: ['on = continuar', 'off = partir / separarse', 'put off / call off'],
    aff: ['The meeting was put off until Friday.|La reunión se pospuso hasta el viernes.', 'I get on well with my colleagues.|Me llevo bien con mis compañeros.', 'Carry on. I’m listening.|Seguí, te escucho.'],
    neg: ["Don't put off going to the doctor.|No postergues ir al médico."],
    q: ['Why did they call off the match?|¿Por qué suspendieron el partido?'],
    err: ['The match was cancelled off.|The match was called off.|call off = cancelar.', 'I get on good with him.|I get on well with him.|get on well with.'],
    ex: [
      "? The meeting was ___ off until Friday. | called | *put | got >> put off = posponer (Cuadernillo 141.1).",
      "? The match was ___ off because of the rain. | put | *called | set >> call off = cancelar.",
      "_ Don't stop. Carry ___ working. = on >> carry on = continuar.",
      "_ We set ___ early to avoid the traffic. = off >> set off = salir de viaje.",
      "s The teacher told him [of] for being late. = off >> tell sb off = retar.",
      "o I get on well with my sister. >> get on (well) with.",
      "t Siguió hablando. = He went on talking ; She went on talking ; He kept on talking ; She kept on talking ; He carried on talking ; She carried on talking >> go on / keep on + -ing.",
      "m put off = posponer ; call off = cancelar ; show off = presumir ; go off = sonar (alarma) >> off.",
      "f2 My alarm clock went out at 6. = My alarm clock went off at 6 >> go off = sonar.",
    ],
  },
  {
    n: 142, t: 'Phrasal verbs 6 up/down', es: 'Phrasal verbs: up / down', tags: ['phrasal-verbs'], pre: [137],
    goals: ['Usar up/down literal (pick up, sit down)', 'Usar turn up/down (volumen)', 'Usar cut down, break down, turn down, slow down'],
    x: `**up/down** literal: *stand up, sit down, pick up, put down, look up, climb up, knock down*.

**turn up / turn down** = subir / bajar el volumen o la temperatura: *Could you turn the music down?*

**down** = **reducir / empeorar**: *cut down (on)* (reducir), *slow down* (ir más despacio), *calm down* (calmarse).

Otros: *break down* (averiarse / quebrarse emocionalmente), *turn down* (rechazar una oferta), *let sb down* (decepcionar), *write down* (anotar), *close down* (cerrar un negocio).`,
    form: [['Phrasal verb', 'Significado'], ['turn up / down', 'subir / bajar (volumen)'], ['cut down on', 'reducir'], ['break down', 'averiarse'], ['turn down', 'rechazar'], ['write down', 'anotar']],
    uses: ['up/down literal', 'turn up/down', 'down = reducir', 'Otros con down'],
    aff: ['Could you turn the volume down?|¿Podrías bajar el volumen?', "I'm trying to cut down on coffee.|Estoy tratando de tomar menos café.", 'Write down your password.|Anotá tu contraseña.'],
    neg: ["Don't let me down.|No me decepciones."],
    q: ['Why did you turn the offer down?|¿Por qué rechazaste la oferta?'],
    err: ['Our car broke on the motorway.|Our car broke down on the motorway.|break down = averiarse.', 'Could you lower down the music?|Could you turn down the music?|turn down.'],
    ex: [
      "? Could you ___ the volume down? | put | *turn | cut >> turn down (Cuadernillo 142.1).",
      "? Our car ___ on the way to the airport. | broke up | *broke down | turned down >> break down = averiarse.",
      "_ They offered him a job, but he turned it ___. = down >> turn down = rechazar.",
      "_ You're driving too fast. Slow ___! = down >> slow down.",
      "s I'm trying to cut [up] on sugar. = down >> cut down on = reducir.",
      "o Please write down your name. >> write down.",
      "t Calmate, no pasa nada. = Calm down, it's nothing ; Calm down, nothing's wrong ; Calm down, it's OK ; Calm down, it's fine >> calm down.",
      "m sit down = sentarse ; pick up = levantar / recoger ; let down = decepcionar ; close down = cerrar (negocio) >> up/down.",
      "f2 The old cinema was knocked up and replaced by a supermarket. = The old cinema was knocked down and replaced by a supermarket >> knock down = demoler.",
    ],
  },
  {
    n: 143, t: 'Phrasal verbs 7 up (1)', es: 'Phrasal verbs: up (1)', tags: ['phrasal-verbs'], pre: [142],
    goals: ['Usar get up, wake up, grow up', 'Usar go up / come up (aumentar, surgir)', 'Usar turn up, set up, take up, make up'],
    x: `Phrasal verbs con **up**:
• **get up** (levantarse), **wake up** (despertarse), **stay up** (quedarse despierto), **grow up** (crecer, criarse).
• **go up** (subir precios), **come up** (surgir un tema/problema), **put up** (subir precios / alojar a alguien).
• **turn up / show up** (aparecer, llegar).
• **set up** (fundar, armar), **take up** (empezar un hobby / ocupar espacio), **make up** (inventar; reconciliarse), **bring up** (criar; sacar un tema), **end up** (terminar en/haciendo).

Workbook (unidad 12): *take up* = empezar un hobby.`,
    form: [['Phrasal verb', 'Significado'], ['get up', 'levantarse'], ['grow up', 'criarse'], ['turn up', 'aparecer'], ['take up', 'empezar (hobby)'], ['end up', 'terminar (en)']],
    uses: ['Rutina: get up, wake up, stay up', 'Aumentos: go up', 'Aparecer: turn up', 'Empezar / crear: take up, set up'],
    aff: ['I need to get up early tomorrow.|Mañana tengo que levantarme temprano.', 'I grew up in a small village.|Me crié en un pueblo chico.', "He's taken up photography.|Empezó con la fotografía."],
    neg: ["She didn't turn up to the meeting.|No apareció en la reunión."],
    q: ['What time did you wake up?|¿A qué hora te despertaste?'],
    err: ['I grew in Lima.|I grew up in Lima.|grow up = criarse.', 'Prices have gone on again.|Prices have gone up again.|go up = subir.'],
    ex: [
      "? I need to ___ up early tomorrow. | stay | *get | grow >> get up (Cuadernillo 143.1).",
      "? We waited for an hour, but he didn't ___ up. | show off | *turn | take >> turn up = aparecer.",
      "_ Where did you grow ___? = up >> grow up = criarse.",
      "_ We got lost and ended ___ in a small village. = up >> end up = terminar (en).",
      "s The price of petrol has gone [on] again. = up >> go up = subir.",
      "o She has taken up yoga. >> take up = empezar un hobby.",
      "t Me quedé despierto hasta tarde. = I stayed up late >> stay up.",
      "m set up = fundar ; make up = inventar ; bring up = criar ; come up = surgir >> up.",
      "f2 I woke on at 7 but I didn't get up until 8. = I woke up at 7 but I didn't get up until 8 ; I woke up at 7, but I didn't get up until 8 >> wake up.",
    ],
  },
  {
    n: 144, t: 'Phrasal verbs 8 up (2)', es: 'Phrasal verbs: up (2)', tags: ['phrasal-verbs'], pre: [143],
    goals: ['Usar up = completamente (eat up, use up, tidy up)', 'Usar give up, look up, pick up', 'Usar come up with, keep up with, put up with'],
    x: `**up** también significa **completamente**: *eat up, drink up, use up, tidy up, clean up, fill up, break up* (terminar una relación), *split up*.

Otros:
• **give up** = dejar / rendirse; **look up** = buscar (en el diccionario); **pick up** = recoger / aprender sin estudiar; **do up** = abrochar; **hold up** = demorar; **blow up** = explotar.
• Con preposición: **come up with** (idear), **keep up with** (seguir el ritmo / estar al día), **put up with** (aguantar), **catch up with** (alcanzar).

Workbook (unidad 1): *keep up with* y *smarten up*.`,
    form: [['Phrasal verb', 'Significado'], ['give up', 'dejar, rendirse'], ['look up', 'buscar (dato)'], ['come up with', 'idear'], ['keep up with', 'estar al día'], ['put up with', 'tolerar']],
    uses: ['up = completamente', 'Phrasal verbs de 3 partes'],
    aff: ['They came up with a new plan.|Se les ocurrió un plan nuevo.', 'Look the word up in the dictionary.|Buscá la palabra en el diccionario.', 'I read magazines to keep up with fashion.|Leo revistas para estar al día con la moda.'],
    neg: ["I can't put up with this noise.|No aguanto este ruido."],
    q: ['Why did they break up?|¿Por qué se separaron?'],
    err: ["He gave out smoking.|He gave up smoking.|give up = dejar.", 'They came with a good idea.|They came up with a good idea.|come up with.'],
    ex: [
      "? They decided to ___ up with a new plan. | get | *come | keep >> come up with (Cuadernillo 144.1).",
      "? If you don't know the word, ___ it up. | pick | *look | give >> look up = buscar.",
      "_ I go to fashion shows to keep ___ with the latest designs. = up >> keep up with (Workbook unidad 1).",
      "_ Don't give ___! You can do it. = up >> give up = rendirse.",
      "s Tidy [on] your room, please. = up >> tidy up.",
      "o She picked up Spanish while living in Madrid. >> pick up = aprender sin estudiar.",
      "t Rompieron después de dos años. = They broke up after two years ; They split up after two years >> break up.",
      "m eat up = comer todo ; do up = abrochar ; hold up = demorar ; blow up = explotar >> up.",
      "f2 I can't put on with his behaviour any more. = I can't put up with his behaviour any more ; I can't put up with his behavior any more ; I cannot put up with his behaviour any more >> put up with.",
    ],
  },
  {
    n: 145, t: 'Phrasal verbs 9 away/back', es: 'Phrasal verbs: away / back', tags: ['phrasal-verbs'], pre: [137],
    goals: ['Usar away = alejarse (go away, run away)', 'Usar back = volver (come back, call back)', 'Usar throw away, give away, pay back'],
    x: `**away** = **alejarse / irse**: *go away, run away, walk away, get away (escapar), stay away, keep away*. También **ausente**: *She's away on holiday.*

**away** = **deshacerse de algo**: *throw away* (tirar), *give away* (regalar), *put away* (guardar).

**back** = **volver / devolver**: *come back, go back, be back, get back* (volver); *call / phone back* (devolver la llamada); *pay back* (devolver dinero); *give back, take back* (devolver un objeto); *look back* (recordar el pasado).`,
    form: [['Phrasal verb', 'Significado'], ['go away', 'irse'], ['throw away', 'tirar'], ['give away', 'regalar'], ['come back / be back', 'volver'], ['pay back', 'devolver (dinero)']],
    uses: ['away = alejarse / deshacerse', 'back = volver / devolver'],
    aff: ['When will you be back from your trip?|¿Cuándo volvés de tu viaje?', 'I threw away my old shoes.|Tiré mis zapatos viejos.', "I'll pay you back tomorrow.|Te devuelvo la plata mañana."],
    neg: ["Don't go away. I'll be back in a minute.|No te vayas. Vuelvo en un minuto."],
    q: ['Can you call me back later?|¿Me podés llamar más tarde?'],
    err: ['I will return back tomorrow.|I will come back tomorrow.|return ya significa volver: come back o return.', 'Throw it out the window away.|Throw it away.|throw away = tirar.'],
    ex: [
      "? When will you ___ back from your trip? | go | *be | give >> be back = volver (Cuadernillo 145.1).",
      "? Don't ___ away those old photos! | give | *throw | run >> throw away = tirar.",
      "_ I'm busy now. Can I call you ___ later? = back >> call back.",
      "_ He lent me £20 and I paid him ___ the next day. = back >> pay back.",
      "s The thief got [out] before the police arrived. = away >> get away = escapar.",
      "o She's away on holiday this week. >> away = ausente.",
      "t Vuelvo en diez minutos. = I'll be back in ten minutes ; I will be back in ten minutes ; I'll come back in ten minutes >> be back.",
      "m give away = regalar ; put away = guardar ; look back = recordar ; take back = devolver (a la tienda) >> away/back.",
      "f2 Please give me back it. = Please give it back to me ; Please give it back ; Give it back to me, please >> Pronombre en el medio.",
    ],
  },
];

import type { UnitSrc } from '../dsl';

// Module 15 — Prepositions (EGU units 121–136)
export const m15: UnitSrc[] = [
  {
    n: 121, t: 'at/on/in (time)', es: 'at / on / in (tiempo)', tags: ['prepositions', 'time'],
    goals: ['Usar at con horas y momentos', 'Usar on con días y fechas', 'Usar in con meses, años y partes del día'],
    x: `**at** + **hora** y momentos concretos: *at 5 o'clock, at midnight, at lunchtime, at the weekend* (británico), *at Christmas, at the moment*.

**on** + **días y fechas**: *on Monday, on 25 April, on my birthday, on Friday morning*.

**in** + **períodos largos**: *in April, in 2020, in (the) summer, in the 1990s* y partes del día: *in the morning, in the evening* (pero **at night**).

**Sin preposición** con *next, last, this, every*: *next Monday, last year, every day*.

**in** + tiempo = dentro de: *I'll be back in ten minutes.*`,
    form: [['Preposición', 'Uso', 'Ejemplos'], ['at', 'horas, momentos', "at 7.30, at night, at the weekend"], ['on', 'días, fechas', 'on Sunday, on 3 May'], ['in', 'meses, años, estaciones, partes del día', 'in June, in 2010, in the morning']],
    uses: ['at + hora', 'on + día/fecha', 'in + mes/año/parte del día', 'Sin preposición: next/last/this/every'],
    aff: ['The film starts at 8 p.m.|La película empieza a las 8.', 'My birthday is on 12 July.|Mi cumpleaños es el 12 de julio.', 'We met in 2015.|Nos conocimos en 2015.'],
    neg: ["I don't work at the weekend.|No trabajo los fines de semana."],
    q: ['What do you usually do in the evening?|¿Qué hacés normalmente a la noche?'],
    err: ['See you on next Monday.|See you next Monday.|next sin preposición.', 'I was born in 15 May.|I was born on 15 May.|Fecha → on.'],
    ex: [
      "? I'll meet you ___ 6 o'clock. | on | *at | in >> Hora → at.",
      "? We usually go skiing ___ February. | on | *in | at >> Mes → in.",
      "_ She was born ___ 1998. = in >> Año → in.",
      "_ The shop is closed ___ Sundays. = on >> Día → on.",
      "s I'll call you [on] next week. = (quitar on) >> next week sin preposición.",
      "o I usually read in the evening. >> in the evening.",
      "t Nos vemos el viernes a la mañana. = See you on Friday morning >> on + día + parte del día.",
      "m at = midnight ; on = my birthday ; in = the summer ; — = next year >> Elegí la preposición.",
      "?2 'I'll be ready ___ five minutes.' | after | *in | on >> in + tiempo = dentro de.",
      "f2 I can't sleep in night. = I can't sleep at night ; I cannot sleep at night >> at night.",
    ],
  },
  {
    n: 122, t: 'on time and in time at the end and in the end', es: 'on time / in time, at the end / in the end', tags: ['prepositions', 'time'], pre: [121],
    goals: ['Distinguir on time (puntual) e in time (con tiempo suficiente)', 'Distinguir at the end of y in the end'],
    x: `**on time** = **puntual**, a la hora prevista: *The train left on time.*
**in time (for / to do)** = **con tiempo suficiente**, antes del límite: *I got home in time for dinner. We arrived just in time to catch the train.* Lo contrario: **too late**. **just in time** = justo a tiempo.

**at the end (of)** = al **final** de algo (momento): *at the end of the month, at the end of the film.*
**in the end** = **finalmente**, después de un tiempo o de dudas: *We didn't know where to go. In the end we stayed at home.*`,
    form: [['Expresión', 'Significado', 'Ejemplo'], ['on time', 'puntual', 'The bus came on time.'], ['in time', 'con tiempo', 'in time for the start'], ['at the end of', 'al final de', 'at the end of May'], ['in the end', 'finalmente', 'In the end we agreed.']],
    uses: ['on time = puntual', 'in time = sin llegar tarde', 'at the end of = momento final', 'in the end = finalmente'],
    aff: ['The meeting started on time.|La reunión empezó a la hora.', "We'll be home in time for dinner.|Vamos a llegar a casa a tiempo para cenar.", 'In the end, we decided to stay.|Al final decidimos quedarnos.'],
    neg: ["We didn't get there in time.|No llegamos a tiempo."],
    q: ['What happens at the end of the film?|¿Qué pasa al final de la película?'],
    err: ['In the end of the month I get paid.|At the end of the month I get paid.|Momento final → at the end of.', 'The plane arrived in time (exactly at 10.00).|The plane arrived on time.|Puntual → on time.'],
    ex: [
      "? The train left ___, at exactly 8.15. | in time | *on time | at time >> Puntual → on time.",
      "? Hurry up or we won't be there ___ for the start. | on time | *in time | at time >> Con tiempo suficiente.",
      "_ We get paid ___ the end of every month. = at >> at the end of.",
      "_ We couldn't decide. ___ the end, we went to the beach. = In >> in the end = finalmente.",
      "s I got to the station just [on] time to catch the train. = in >> Con tiempo suficiente → in time.",
      "o In the end we stayed at home. >> in the end.",
      "t Llegamos justo a tiempo. = We arrived just in time ; We got there just in time >> just in time.",
      "?2 'I was going to buy a car, but ___ I bought a motorbike.' | at the end | *in the end | on the end >> Finalmente → in the end.",
      "f2 We're going on holiday in the end of July. = We're going on holiday at the end of July ; We are going on holiday at the end of July >> at the end of.",
    ],
  },
  {
    n: 123, t: 'in/at/on (position) 1', es: 'in / at / on (lugar) 1', tags: ['prepositions', 'place'],
    goals: ['Usar in = dentro de', 'Usar at = en un punto', 'Usar on = sobre una superficie'],
    x: `**in** = **dentro** de un espacio cerrado o un área: *in a room, in a box, in the garden, in the water, in a photo*.

**at** = en un **punto** concreto: *at the door, at the bus stop, at the traffic lights, at the top/bottom of the page*.

**on** = sobre una **superficie**: *on the table, on the wall, on the floor, on the page, on her nose*.

Comparar: *There's water **in** the bottle* / *There's a label **on** the bottle*; *Somebody is **at** the door* / *There's a notice **on** the door*.`,
    form: [['in', 'at', 'on'], ['dentro', 'en un punto', 'sobre una superficie'], ['in the kitchen', 'at the door', 'on the wall'], ['in a box', 'at the bus stop', 'on the floor']],
    uses: ['in = dentro', 'at = punto', 'on = superficie'],
    aff: ['The keys are in my bag.|Las llaves están en mi bolso.', "There's someone at the door.|Hay alguien en la puerta.", 'There’s a picture on the wall.|Hay un cuadro en la pared.'],
    neg: ["There's nothing on the table.|No hay nada sobre la mesa."],
    q: ['What’s in that box?|¿Qué hay en esa caja?'],
    err: ['The picture is in the wall.|The picture is on the wall.|Superficie → on.', 'Wait for me on the bus stop.|Wait for me at the bus stop.|Punto → at.'],
    ex: [
      "? The children are playing ___ the garden. | on | *in | at >> Área → in.",
      "? Turn left ___ the traffic lights. | in | *at | on >> Punto → at.",
      "_ There's a fly ___ your nose! = on >> Superficie → on.",
      "_ Write your name ___ the top of the page. = at >> at the top of.",
      "s There's a lot of water [on] the bottle. = in >> Dentro → in.",
      "o The cat is sleeping on the sofa. >> on = superficie.",
      "t La leche está en la heladera. = The milk is in the fridge >> Dentro → in.",
      "m in = the box ; at = the door ; on = the ceiling ; in = the photo >> Elegí la preposición.",
      "?2 'Who is the woman ___ that photo?' | on | *in | at >> in a photo.",
      "f2 He was waiting on the entrance. = He was waiting at the entrance >> Punto → at.",
    ],
  },
  {
    n: 124, t: 'in/at/on (position) 2', es: 'in / at / on (lugar) 2', tags: ['prepositions', 'place'], pre: [123],
    goals: ['Usar in bed, in hospital, in the sky…', 'Usar at home, at work, at a party…', 'Usar on a bus, on the left, on the first floor…'],
    x: `**in**: *in a line/row, in bed, in hospital, in prison, in the sky, in the world, in a newspaper/book, in the country, in a car/taxi*.

**at**: *at home, at work, at school, at university, at the station/airport, at a party/concert/conference, at the top/bottom/end of*.

**on**: *on the left/right, on the first floor, on a map, on the menu, on a list, on a farm, on a bus/train/plane/ship* (pero *in a car*), *on the way*.`,
    form: [['in', 'at', 'on'], ['in bed', 'at home', 'on the left'], ['in hospital', 'at work', 'on the first floor'], ['in a car / taxi', 'at a party', 'on a bus / train / plane']],
    uses: ['Expresiones fijas con in', 'Expresiones fijas con at', 'Expresiones fijas con on'],
    aff: ['I read about it in the newspaper.|Lo leí en el diario.', 'She’s at a party tonight.|Esta noche está en una fiesta.', 'Our flat is on the third floor.|Nuestro departamento está en el tercer piso.'],
    neg: ["I'm not at home right now.|Ahora no estoy en casa."],
    q: ['Is there any fish on the menu?|¿Hay pescado en el menú?'],
    err: ['I met her in a party.|I met her at a party.|Evento → at.', 'We travelled in the train.|We travelled on the train.|Transporte público → on (auto → in).'],
    ex: [
      "? I saw Tom ___ the concert last night. | in | *at | on >> Evento → at.",
      "? The bathroom is the second door ___ the left. | in | *on | at >> on the left.",
      "_ I'm tired. I'm going to stay ___ bed. = in >> in bed.",
      "_ We sat ___ the back of the bus. = at ; in >> at the back.",
      "s There were a lot of people [in] the plane. = on >> Avión → on.",
      "o She is waiting at the bus stop. >> at + punto.",
      "t Mi papá está en el hospital. = My dad is in hospital ; My father is in hospital ; My dad is in the hospital ; My father is in the hospital >> in hospital.",
      "?2 'We got stuck in traffic ___ our way home.' | in | *on | at >> on the way.",
      "f2 Let's meet in the airport. = Let's meet at the airport >> at the airport.",
    ],
  },
  {
    n: 125, t: 'in/at/on (position) 3', es: 'in / at / on (lugar) 3', tags: ['prepositions', 'place'], pre: [124],
    goals: ['Usar in / at con edificios', 'Usar arrive in / arrive at', 'Usar on the coast, on a river'],
    x: `Con **edificios** podemos usar **at** o **in**: **at** cuando pensamos en el lugar como un punto/evento (*We had dinner at the hotel*); **in** cuando hablamos del **interior** (*It was cold in the hotel*).

**arrive in** + **ciudad / país**: *arrive in Paris*; **arrive at** + **otros lugares**: *arrive at the airport, at the hotel*. **get to** = llegar (cualquier lugar). Nunca *arrive to*.

**on** con líneas: *on the coast, on a river, on the border*: *Lima is on the coast.* Workbook (unidad 3): *prepositions of location*.`,
    form: [['Expresión', 'Ejemplo'], ['arrive in + ciudad/país', 'arrive in Rome'], ['arrive at + lugar', 'arrive at the station'], ['on the coast / on a river', 'a town on the river'], ['at / in + edificio', 'at the cinema / in the cinema']],
    uses: ['at/in con edificios', 'arrive in / arrive at', 'on + costa / río'],
    aff: ['We arrived in Tokyo at midnight.|Llegamos a Tokio a medianoche.', 'There’s a nice village on the coast.|Hay un pueblo lindo en la costa.', 'I was at the cinema last night.|Anoche estuve en el cine.'],
    neg: ["We didn't arrive at the hotel until 10.|No llegamos al hotel hasta las 10."],
    q: ['What time did you arrive at the station?|¿A qué hora llegaste a la estación?'],
    err: ['We arrived to London.|We arrived in London.|arrive in + ciudad.', 'We arrived in the airport.|We arrived at the airport.|arrive at + lugar.'],
    ex: [
      "? What time did you arrive ___ Madrid? | at | *in | to >> Ciudad → arrive in.",
      "? We arrived ___ the hotel very late. | in | *at | to >> Lugar → arrive at.",
      "_ Brighton is a town ___ the south coast of England. = on >> on the coast.",
      "_ I'll meet you ___ the station. = at >> Punto de encuentro → at.",
      "s They arrived [to] Paris yesterday. = in >> arrive in + ciudad.",
      "o Budapest is on the river Danube. >> on + río.",
      "t Llegamos al aeropuerto a las seis. = We arrived at the airport at six ; We got to the airport at six >> arrive at.",
      "?2 'It was very warm ___ the restaurant.' (inside) | at | *in | on >> Interior → in.",
      "f2 When did you arrive to the office? = When did you arrive at the office ; When did you get to the office >> Nunca arrive to.",
    ],
  },
  {
    n: 126, t: 'to, at, in and into', es: 'to, at, in, into', tags: ['prepositions', 'place'], pre: [125],
    goals: ['Usar go/come/travel to', 'Usar be at/in (posición) vs. go to (movimiento)', 'Usar into = hacia adentro'],
    x: `**to** = **movimiento** hacia un lugar: *go to France, come to the party, travel to work, walk to school*. Pero **go home** (sin to).

**at / in** = **posición** (estar): *be at the party, be in France.*

**into** = movimiento **hacia adentro**: *He walked into the room. Get into the car.* Opuesto: **out of**. Con transporte público: **get on / off** (*get on the bus*).

También **into** para choques: *I walked into a door.*`,
    form: [['Movimiento', 'Posición'], ['go to the bank', 'be at the bank'], ['travel to Italy', 'live in Italy'], ['walk into the room', 'be in the room']],
    uses: ['to = hacia', 'at/in = posición', 'into = hacia adentro', 'go home (sin to)'],
    aff: ['I’m going to the bank.|Voy al banco.', 'She got into the taxi.|Se subió al taxi.', 'We walked home.|Volvimos a casa caminando.'],
    neg: ["I've never been to Australia.|Nunca estuve en Australia."],
    q: ['When are you going back to Brazil?|¿Cuándo volvés a Brasil?'],
    err: ['I went to home early.|I went home early.|go home sin to.', 'I was to the party yesterday.|I was at the party yesterday.|Posición → at.'],
    ex: [
      "? I'm going ___ the cinema tonight. | at | *to | in >> Movimiento → to.",
      "? I was ___ the cinema last night. | to | *at | into >> Posición → at.",
      "_ She opened the door and walked ___ the room. = into >> Hacia adentro → into.",
      "_ I'm tired. Let's go ___ now. = home >> go home.",
      "s We travelled [at] Mexico last summer. = to >> Movimiento → to.",
      "o He got into the car and drove away. >> into = hacia adentro.",
      "t ¿Alguna vez fuiste a Japón? = Have you ever been to Japan >> been to.",
      "?2 'I wasn't looking and I walked ___ a lamp post.' | to | *into | at >> Choque → into.",
      "f2 What time did you go to home? = What time did you go home >> go home.",
    ],
  },
  {
    n: 127, t: 'in/on/at (other uses)', es: 'in / on / at (otros usos)', tags: ['prepositions'],
    goals: ['Usar in the rain, in a hurry, in love…', 'Usar on holiday, on TV, on purpose…', 'Usar at 50 km/h, at the age of…'],
    x: `**in**: *in the rain/sun/shade, in ink/pencil, in words, in cash, in love, in my opinion, in a hurry, in a bad mood*.

**on**: *on holiday, on business, on a trip, on TV/the radio/the internet, on the phone, on fire, on strike, on a diet, on purpose, on the whole*.

**at**: *at the age of 30, at 100 km an hour, at 100 degrees*.

**by** para transporte (*by bus*) se ve en la unidad 128; caminando: **on foot**.`,
    form: [['in', 'on', 'at'], ['in a hurry', 'on holiday', 'at the age of 16'], ['in cash', 'on TV', 'at 50 km/h'], ['in my opinion', 'on purpose', 'at 0 degrees']],
    uses: ['Expresiones con in', 'Expresiones con on', 'Expresiones con at (edad, velocidad, temperatura)'],
    aff: ["I'm going away on holiday next week.|La semana que viene me voy de vacaciones.", 'He left school at the age of 16.|Dejó la escuela a los 16 años.', 'In my opinion, the film was too long.|En mi opinión, la película era demasiado larga.'],
    neg: ["I didn't do it on purpose!|¡No lo hice a propósito!"],
    q: ['What’s on TV tonight?|¿Qué dan en la tele esta noche?'],
    err: ["I'm in holiday.|I'm on holiday.|on holiday.", 'He did it in purpose.|He did it on purpose.|on purpose.'],
    ex: [
      "? Sorry, I can't stop. I'm ___ a hurry. | on | *in | at >> in a hurry.",
      "? Did you watch the match ___ TV? | in | *on | at >> on TV.",
      "_ She started playing the piano ___ the age of five. = at >> at the age of.",
      "_ Workers at the factory are ___ strike. = on >> on strike.",
      "s Can I pay [by] cash? = in >> in cash.",
      "o He broke the glass on purpose. >> on purpose.",
      "t Fuimos a pie. = We went on foot ; We walked >> on foot.",
      "m on = holiday ; in = love ; at = 100 km an hour ; on = fire >> Expresiones fijas.",
      "f2 We went to Paris in business. = We went to Paris on business >> on business.",
      "?2 'The house is ___ fire! Call 999!' | in | *on | at >> on fire.",
    ],
  },
  {
    n: 128, t: 'by', es: 'by', tags: ['prepositions'],
    goals: ['Usar by + transporte', 'Usar by en la pasiva', 'Usar by = al lado de, y by + -ing'],
    x: `**by** + **transporte** (sin artículo): *by car, by bus, by train, by plane, by bike* (pero *on foot*). Con artículo/posesivo: *in my car, on the 8.15 train*.

Otros usos: *by email, by phone, by credit card* (pero *in cash*), *by chance, by mistake*.

**by** en la **pasiva** (quién lo hizo): *The book was written by Orwell.* También *a painting by Picasso*.

**by** = **al lado de**: *Come and sit by me.* **by + -ing** = cómo: *You can save money by cooking at home.*`,
    form: [['Uso', 'Ejemplo'], ['transporte', 'by train'], ['medio', 'by email, by credit card'], ['pasiva / autor', 'written by Orwell'], ['al lado de', 'a house by the sea']],
    uses: ['by + transporte', 'by + medio de comunicación/pago', 'Agente de la pasiva', 'by = al lado de'],
    aff: ['I usually go to work by bus.|Normalmente voy al trabajo en colectivo.', 'This song was written by John Lennon.|Esta canción la escribió John Lennon.', 'We have a little house by the sea.|Tenemos una casita junto al mar.'],
    neg: ["I didn't come by car. I walked.|No vine en auto. Caminé."],
    q: ['Can I pay by credit card?|¿Puedo pagar con tarjeta?'],
    err: ['I came by the car.|I came by car.|by + transporte sin artículo.', 'I go to school by foot.|I go to school on foot.|on foot.'],
    ex: [
      "? We travelled to Rome ___ train. | with | *by | in >> by + transporte.",
      "? I sent the documents ___ email. | in | *by | with >> by email.",
      "_ 'Romeo and Juliet' was written ___ Shakespeare. = by >> Pasiva → by.",
      "_ I took your umbrella ___ mistake. Sorry! = by >> by mistake.",
      "s She goes to work [by] foot. = on >> on foot.",
      "o I usually travel by bus. >> by + transporte (Cuadernillo 127.1).",
      "t Pagué con tarjeta. = I paid by card ; I paid by credit card >> by card.",
      "?2 'We went in ___ car.' | by | *my | the by >> in my car (con posesivo, no by).",
      "f2 I came here by the bike. = I came here by bike ; I came here on my bike >> Sin artículo.",
    ],
  },
  {
    n: 129, t: 'Noun + preposition (reason for, cause of etc.)', es: 'Sustantivo + preposición', tags: ['prepositions'],
    goals: ['Usar las preposiciones fijas después de sustantivos', 'Practicar reason for, cause of, increase in…'],
    x: `Muchos **sustantivos** van seguidos de una **preposición fija**:

• **for**: *a reason for, a demand for, a need for*.
• **of**: *a cause of, a photo of, an advantage/disadvantage of, a picture of*.
• **in**: *an increase/decrease/rise/fall in, a change in*.
• **to**: *a solution to, an answer to, a reply to, a key to, a reaction to, an invitation to*.
• **with / between**: *a relationship with, a difference between, contact with*.

*There's been an increase **in** prices. What's the solution **to** the problem?*`,
    form: [['Preposición', 'Sustantivos'], ['for', 'reason, demand, need'], ['of', 'cause, photo, advantage'], ['in', 'increase, decrease, change'], ['to', 'solution, answer, reply, invitation']],
    uses: ['Sustantivo + preposición fija'],
    aff: ['There has been an increase in crime.|Hubo un aumento del delito.', "I couldn't find the answer to the question.|No encontré la respuesta a la pregunta.", 'What is the cause of the problem?|¿Cuál es la causa del problema?'],
    neg: ["There's no need for you to come.|No hace falta que vengas."],
    q: ["What's the difference between these two?|¿Cuál es la diferencia entre estos dos?"],
    err: ['What is the reason of your visit?|What is the reason for your visit?|reason for.', 'There was an increase of prices.|There was an increase in prices.|increase in.'],
    ex: [
      "? What's the reason ___ the delay? | of | *for | to >> reason for.",
      "? There has been a fall ___ unemployment. | of | *in | to >> fall in.",
      "_ Have you received an invitation ___ the wedding? = to >> invitation to.",
      "_ Smoking is a major cause ___ heart disease. = of >> cause of.",
      "s We need to find a solution [for] this problem. = to >> solution to.",
      "o What's the difference between a frog and a toad? >> difference between.",
      "t ¿Cuál es la respuesta a la pregunta 3? = What's the answer to question 3 ; What is the answer to question 3 >> answer to.",
      "m reason = for ; cause = of ; increase = in ; reply = to >> Sustantivo + preposición.",
      "f2 I have a good relationship to my boss. = I have a good relationship with my boss >> relationship with.",
    ],
  },
  {
    n: 130, t: 'Adjective + preposition 1', es: 'Adjetivo + preposición (1)', tags: ['prepositions', 'adjectives'],
    goals: ['Usar nice/kind of sb to…', 'Usar adjetivos de sentimiento + about/with/at', 'Usar interested in, afraid of…'],
    x: `**nice / kind / good / generous / stupid / silly of** somebody (to do): *It was kind **of** you to help.* Pero con la persona que recibe: *be nice **to** somebody*.

Sentimientos sobre algo: **angry / annoyed / furious about** algo, **with** alguien (**for** doing): *I'm angry **with** him **for** lying.*

**excited / worried / nervous / upset about**; **surprised / shocked / amazed at/by**; **disappointed with/by**; **impressed by/with**; **fed up / bored with**.

Otros: **interested in**, **afraid / scared / frightened of**, **proud of**, **tired of**, **keen on**.`,
    form: [['Adjetivo', 'Preposición'], ['kind / nice (de parte de)', 'of'], ['angry, annoyed', 'about (algo) / with (alguien)'], ['excited, worried', 'about'], ['surprised, shocked', 'at / by'], ['interested', 'in']],
    uses: ['kind of sb / nice to sb', 'Sentimientos + about / with / at', 'Combinaciones fijas'],
    aff: ['It was very kind of you to help me.|Fue muy amable de tu parte ayudarme.', "I'm excited about the trip.|Estoy entusiasmado con el viaje.", 'She’s really interested in photography.|Le interesa mucho la fotografía.'],
    neg: ["Don't be angry with me.|No te enojes conmigo."],
    q: ['Are you afraid of spiders?|¿Le tenés miedo a las arañas?'],
    err: ["I'm interested on art.|I'm interested in art.|interested in.", "It's nice from you to call.|It's nice of you to call.|nice of you."],
    ex: [
      "? I'm really interested ___ history. | on | *in | about >> interested in.",
      "? It was very generous ___ you to pay for us. | from | *of | to >> generous of sb.",
      "_ Why are you angry ___ me? What did I do? = with >> angry with + persona.",
      "_ Are you nervous ___ the exam? = about >> nervous about.",
      "s I was very surprised [of] the news. = at >> surprised at / by.",
      "o She's always been afraid of the dark. >> afraid of.",
      "t Estoy harto de esperar. = I'm fed up with waiting ; I'm tired of waiting ; I am fed up with waiting ; I am tired of waiting >> fed up with / tired of.",
      "m interested = in ; afraid = of ; excited = about ; keen = on >> Adjetivo + preposición.",
      "f2 He's very proud for his daughter. = He's very proud of his daughter ; He is very proud of his daughter >> proud of.",
    ],
  },
  {
    n: 131, t: 'Adjective + preposition 2', es: 'Adjetivo + preposición (2)', tags: ['prepositions', 'adjectives'], pre: [130],
    goals: ['Usar good/bad at', 'Usar responsible for, famous for', 'Usar similar to, different from, full of…'],
    x: `Más combinaciones fijas:

• **at**: *good / bad / brilliant / hopeless at* (habilidad): *I'm bad at maths.*
• **for**: *famous for, responsible for*: *She's responsible for the project.*
• **to**: *similar to, married to, kind / nice / polite to (somebody)*.
• **from / to**: *different from* (o *to*).
• **of**: *full of, short of, capable of, aware of, fond of, jealous of*.
• **on / in**: *keen on, dependent on*; *rich in, interested in*.
• **with**: *crowded with, satisfied with, familiar with*.`,
    form: [['Adjetivo', 'Preposición'], ['good / bad', 'at'], ['responsible / famous', 'for'], ['similar / married', 'to'], ['full / short / aware', 'of'], ['crowded / satisfied', 'with']],
    uses: ['Combinaciones fijas adjetivo + preposición'],
    aff: ["She's very good at languages.|Es muy buena para los idiomas.", 'Italy is famous for its food.|Italia es famosa por su comida.', 'The street was crowded with tourists.|La calle estaba llena de turistas.'],
    neg: ["I'm not very good at remembering names.|No soy muy bueno recordando nombres."],
    q: ['Who is responsible for this mess?|¿Quién es responsable de este lío?'],
    err: ["She's good in tennis.|She's good at tennis.|good at.", 'He is married with a doctor.|He is married to a doctor.|married to.'],
    ex: [
      "? I'm hopeless ___ maths. | in | *at | on >> hopeless at.",
      "? Who is responsible ___ this department? | of | *for | to >> responsible for.",
      "_ Your bag is similar ___ mine. = to >> similar to.",
      "_ The glass is full ___ water. = of >> full of.",
      "s My sister is married [with] an Australian. = to >> married to.",
      "o The town is famous for its castle. >> famous for.",
      "t Soy malo para cocinar. = I'm bad at cooking ; I am bad at cooking ; I'm not good at cooking >> bad at + -ing.",
      "m good = at ; similar = to ; short = of ; satisfied = with >> Adjetivo + preposición.",
      "f2 This city is different than mine in many ways. (British English) = This city is different from mine in many ways ; This city is different to mine in many ways >> different from/to.",
    ],
  },
  {
    n: 132, t: 'Verb + preposition 1 to and at', es: 'Verbo + preposición (1): to y at', tags: ['prepositions'],
    goals: ['Usar talk/listen/apologise/explain + to', 'Usar look/stare/laugh/aim + at', 'Recordar que phone, discuss, answer no llevan preposición'],
    x: `**to**: *talk / speak **to** sb, listen **to**, write **to**, apologise **to** sb (for sth), explain sth **to** sb, describe sth **to** sb, belong **to**, happen **to**, invite sb **to**, look forward **to***.

Con explain/describe: *Can you explain this **to** me?* (no *explain me*).

**at**: *look / stare / glance **at**, laugh **at**, point / aim **at***; *shout **at** sb* (con enojo) vs. *shout **to** sb* (para que escuche); *throw sth **at** sb* (para golpear) vs. *throw sth **to** sb* (para que lo atrape).

**Sin preposición**: *phone sb, call sb, answer sb, discuss sth, enter a room*.`,
    form: [['to', 'at', 'sin preposición'], ['listen to', 'look at', 'phone / call'], ['explain sth to sb', 'laugh at', 'discuss sth'], ['belong to', 'stare at', 'answer / enter']],
    uses: ['Verbos + to', 'Verbos + at', 'Verbos sin preposición'],
    aff: ['I like listening to music.|Me gusta escuchar música.', 'Can you explain the rule to me?|¿Me podés explicar la regla?', 'Why are you looking at me?|¿Por qué me mirás?'],
    neg: ["Don't laugh at me!|¡No te rías de mí!"],
    q: ['Who does this bag belong to?|¿De quién es este bolso?'],
    err: ['Can you explain me the problem?|Can you explain the problem to me?|explain sth to sb.', "Let's discuss about the plan.|Let's discuss the plan.|discuss sin preposición."],
    ex: [
      "? Listen ___ me, please. | at | *to | — >> listen to.",
      "? Why are you staring ___ me? | to | *at | on >> stare at.",
      "_ I'm looking forward ___ seeing you. = to >> look forward to (Cuadernillo 132.1).",
      "_ This car belongs ___ my uncle. = to >> belong to.",
      "s Could you explain [me] what happened? = to me >> explain (sth) to sb. ++ Could you explain to me what happened?",
      "o We discussed the problem at the meeting. >> discuss sin preposición.",
      "t Llamé a mi mamá anoche. = I phoned my mum last night ; I called my mum last night ; I phoned my mother last night ; I called my mother last night >> phone/call sin preposición.",
      "?2 'She threw the ball ___ me and I caught it.' | at | *to | on >> Para que lo atrape → to.",
      "f2 We discussed about the trip. = We discussed the trip ; We talked about the trip >> discuss sin about.",
    ],
  },
  {
    n: 133, t: 'Verb + preposition 2 about/for/of/after', es: 'Verbo + preposición (2): about, for, of, after', tags: ['prepositions'], pre: [132],
    goals: ['Usar talk/think/dream about', 'Usar ask/apply/wait/look for', 'Usar look after, take care of'],
    x: `**about**: *talk / read / know / hear / dream / care about*: *We were talking about you.*

**for**: *ask (sb) for, apply for, wait for, look for, pay for, search for, apologise for*: *I applied for a job. He apologised for the mistake.*

**care about** (importar) vs. **care for** (gustar / cuidar) vs. **take care of** (cuidar).

**look after** = cuidar: *Who looks after the children?*
**look for** = buscar.

Workbook (unidad 3): *look after, look for*.`,
    form: [['about', 'for', 'after / of'], ['talk about', 'wait for', 'look after'], ['dream about', 'apply for', 'take care of'], ['care about', 'apologise for', '—']],
    uses: ['Verbos + about', 'Verbos + for', 'look after / take care of'],
    aff: ['I applied for the job last week.|La semana pasada me postulé al trabajo.', 'He apologized for the mistake.|Se disculpó por el error.', 'Can you look after my cat this weekend?|¿Podés cuidar a mi gato este fin de semana?'],
    neg: ["I don't care about money.|No me importa la plata."],
    q: ['What are you looking for?|¿Qué estás buscando?'],
    err: ['I am waiting the bus.|I am waiting for the bus.|wait for.', 'I asked him the bill.|I asked him for the bill.|ask sb for sth.'],
    ex: [
      "? I'm waiting ___ my friend. | to | *for | about >> wait for.",
      "? She has applied ___ a new job. | to | *for | of >> apply for.",
      "_ Who's going to look ___ the children? = after >> look after = cuidar.",
      "_ We were talking ___ the new film. = about >> talk about (Cuadernillo 134.1).",
      "s I'm looking [after] my keys. Have you seen them? = for >> look for = buscar.",
      "o He apologized for the mistake. >> apologise for (Cuadernillo 133.1).",
      "t Le pedí ayuda. = I asked him for help ; I asked her for help >> ask sb for.",
      "m look for = buscar ; look after = cuidar ; apply for = postularse ; dream about = soñar con >> Verbo + preposición.",
      "f2 Who's going to pay the drinks? = Who's going to pay for the drinks ; Who is going to pay for the drinks >> pay for.",
    ],
  },
  {
    n: 134, t: 'Verb + preposition 3 about and of', es: 'Verbo + preposición (3): about y of', tags: ['prepositions'], pre: [133],
    goals: ['Distinguir hear about / hear of / hear from', 'Distinguir think about / think of', 'Usar remind sb of / about, complain about'],
    x: `**hear about** = enterarse de algo; **hear of** = conocer de nombre (*Have you heard of her?*); **hear from** = tener noticias de alguien (*I haven't heard from Ann*).

**think about** = pensar en algo (considerar); **think of** = ocurrírsele, tener una opinión (*What do you think of my plan?*), recordar.

**dream of** = imaginar (*I wouldn't dream of doing that*); **dream about** = soñar (dormido).

**remind sb about** = recordarle a alguien que haga algo; **remind sb of** = hacer acordar (*She reminds me of her mother*).

**complain to sb about sth**; **warn sb about/of**.`,
    form: [['Verbo', 'about', 'of / from'], ['hear', 'hear about (enterarse)', 'hear of (conocer) / hear from'], ['think', 'think about (considerar)', 'think of (opinar, ocurrírsele)'], ['remind', 'remind about (tarea)', 'remind of (parecido)']],
    uses: ['hear about / of / from', 'think about / of', 'remind about / of'],
    aff: ["I'm thinking about changing my job.|Estoy pensando en cambiar de trabajo.", 'This town reminds me of my childhood.|Este pueblo me recuerda mi infancia.', 'We complained to the manager about the noise.|Nos quejamos al gerente por el ruido.'],
    neg: ["I haven't heard from Mark for months.|Hace meses que no sé nada de Mark."],
    q: ['What do you think of my new hairstyle?|¿Qué te parece mi nuevo peinado?'],
    err: ["I haven't heard of my sister this week.|I haven't heard from my sister this week.|Tener noticias de alguien → hear from.", 'She reminds me to her mother.|She reminds me of her mother.|remind sb of.'],
    ex: [
      "? Have you ever heard ___ a singer called Rosalía? | about | *of | from >> Conocer de nombre → hear of.",
      "? I haven't heard ___ my brother since he moved. | about | *from | of >> Tener noticias → hear from.",
      "_ This song reminds me ___ our holiday. = of >> remind sb of (Cuadernillo 135.1).",
      "_ Can you remind me ___ the meeting tomorrow? = about >> remind sb about.",
      "s What do you think [to] my idea? = of >> think of = opinión.",
      "o I'm thinking about buying a new phone. >> think about = considerar.",
      "t ¿Te enteraste del accidente? = Did you hear about the accident ; Have you heard about the accident >> hear about.",
      "?2 'I couldn't ___ his name.' (remember) | think about | *think of | think from >> think of = recordar, ocurrírsele.",
      "f2 We complained the waiter about the food. = We complained to the waiter about the food >> complain to sb about.",
    ],
  },
  {
    n: 135, t: 'Verb + preposition 4 of/for/from/on', es: 'Verbo + preposición (4): of, for, from, on', tags: ['prepositions'], pre: [133],
    goals: ['Usar accuse/suspect sb of', 'Usar blame sb for / blame sth on', 'Usar depend on, rely on, protect from…'],
    x: `**of**: *accuse sb **of**, suspect sb **of**, consist **of**, approve **of**, die **of** (an illness)*.

**for**: *pay **for**, thank sb **for**, forgive sb **for**, blame sb **for** sth* (o *blame sth **on** sb*).

**from**: *suffer **from**, protect sb **from**, prevent / stop sb **from** doing, borrow **from***.

**on**: *depend **on**, rely **on**, live **on** (comida/dinero), congratulate sb **on**, concentrate **on**, insist **on***.

*It depends **on** the weather. She insisted **on** paying.*`,
    form: [['of', 'for', 'from', 'on'], ['accuse sb of', 'blame sb for', 'suffer from', 'depend on'], ['consist of', 'thank sb for', 'protect from', 'rely on'], ['die of', 'pay for', 'prevent from', 'congratulate on']],
    uses: ['Combinaciones verbo + preposición'],
    aff: ['It depends on the price.|Depende del precio.', 'They accused him of lying.|Lo acusaron de mentir.', 'She suffers from headaches.|Sufre de dolores de cabeza.'],
    neg: ["Don't blame me for your mistakes.|No me culpes por tus errores."],
    q: ['Can I rely on you?|¿Puedo contar con vos?'],
    err: ['It depends of the weather.|It depends on the weather.|depend on.', 'The police accused him for stealing.|The police accused him of stealing.|accuse sb of.'],
    ex: [
      "? Whether we go out depends ___ the weather. | of | *on | from >> depend on.",
      "? He was accused ___ stealing a car. | for | *of | from | with >> accuse of.",
      "_ She suffers ___ asthma. = from >> suffer from.",
      "_ They congratulated me ___ passing my exam. = on >> congratulate on.",
      "s The team consists [from] eleven players. = of >> consist of.",
      "o Sun cream protects your skin from the sun. >> protect from.",
      "t Puedo contar con él. = I can rely on him ; I can count on him >> rely on.",
      "m depend = on ; suffer = from ; accuse = of ; blame sb = for >> Verbo + preposición.",
      "f2 He blamed the accident to the other driver. = He blamed the accident on the other driver ; He blamed the other driver for the accident >> blame sth on / blame sb for.",
    ],
  },
  {
    n: 136, t: 'Verb + preposition 5 in/into/with/to/on', es: 'Verbo + preposición (5): in, into, with, to, on', tags: ['prepositions'], pre: [135],
    goals: ['Usar believe/succeed/specialise in', 'Usar crash/translate/divide into', 'Usar happen to, provide with, spend on…'],
    x: `**in**: *believe **in**, specialise **in**, succeed **in** (doing), invest **in**, take part **in***: *She succeeded **in** passing the exam.*

**into**: *break **into**, crash/drive/bump **into**, divide/cut/split **into**, translate **into***.

**with**: *collide **with**, fill **with**, provide/supply sb **with**, deal **with***.

**to**: *happen **to**, prefer sth **to** sth, invite **to***.

**on**: *spend money/time **on**, waste **on**, concentrate **on***.

Workbook (unidad 24): *put up with, insist on*.`,
    form: [['in', 'into', 'with', 'on'], ['believe in', 'crash into', 'provide with', 'spend on'], ['succeed in', 'translate into', 'deal with', 'concentrate on'], ['specialise in', 'divide into', 'fill with', 'waste on']],
    uses: ['Combinaciones verbo + preposición'],
    aff: ['Do you believe in ghosts?|¿Creés en los fantasmas?', 'The book has been translated into 30 languages.|El libro fue traducido a 30 idiomas.', 'I spend a lot of money on clothes.|Gasto mucha plata en ropa.'],
    neg: ["I can't put up with this noise.|No soporto este ruido."],
    q: ['What happened to your car?|¿Qué le pasó a tu auto?'],
    err: ['He succeeded to pass the exam.|He succeeded in passing the exam.|succeed in + -ing.', 'I spent all my money in books.|I spent all my money on books.|spend on.'],
    ex: [
      "? She succeeded ___ passing the exam. | to | *in | on >> succeed in (Cuadernillo 136.1).",
      "? The car crashed ___ a tree. | in | *into | with >> crash into.",
      "_ How much do you spend ___ food every week? = on >> spend on.",
      "_ The teacher divided the class ___ three groups. = into >> divide into.",
      "s The hotel provided us [of] towels. = with >> provide sb with.",
      "o Can you translate this into Spanish? >> translate into.",
      "t Le pasó algo a Tom. = Something happened to Tom ; Something has happened to Tom >> happen to.",
      "m believe = in ; translate = into ; deal = with ; concentrate = on >> Verbo + preposición.",
      "f2 I can't put up this noise any longer. = I can't put up with this noise any longer ; I cannot put up with this noise any longer >> put up with (Workbook unidad 24).",
    ],
  },
];

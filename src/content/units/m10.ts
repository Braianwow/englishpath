import type { UnitSrc } from '../dsl';

// Module 10 — Articles and nouns (EGU units 69–81)
export const m10: UnitSrc[] = [
  {
    n: 69, t: 'Countable and uncountable 1', es: 'Contables e incontables (1)', tags: ['countable', 'nouns', 'articles'],
    goals: ['Distinguir sustantivos contables e incontables', 'Usar a/an solo con contables singulares', 'Usar much/little/some con incontables'],
    x: `Los sustantivos **contables** se pueden contar: *a car, two cars*. Los **incontables** no: *water, rice, music, money, advice, information*.

Con un contable **singular** necesitamos un determinante (*a, the, my…*): *I've got **a** car* (no *I've got car*).

Los incontables **no** llevan a/an y **no** tienen plural: *some music, a lot of advice* (no *an advice, advices*). Para contarlos usamos **a piece of / a glass of / a bowl of**…

Muchos sustantivos pueden ser de los dos tipos con sentido diferente (unidad 70).`,
    form: [['Contable', 'Incontable'], ['a job / jobs', 'work'], ['a suggestion', 'advice'], ['a dollar / dollars', 'money'], ['a song', 'music']],
    uses: ['a/an + contable singular', 'Incontables: sin a/an, sin plural', 'a piece of / a bottle of + incontable'],
    aff: ['Can you give me some advice?|¿Me podés dar un consejo?', "I've got a lot of homework tonight.|Tengo mucha tarea esta noche.", 'She gave me a piece of information.|Me dio un dato.'],
    neg: ["We haven't got much time.|No tenemos mucho tiempo."],
    q: ['How much money do you need?|¿Cuánta plata necesitás?'],
    err: ['Can you give me an advice?|Can you give me some advice?|advice es incontable.', 'I need informations.|I need some information.|information no tiene plural.'],
    cmp: { w: [70, 71], x: 'Unidad 70: palabras que cambian de sentido; unidad 71: a/an y some.' },
    ex: [
      "? Can you give me ___ advice? | an | *some | many >> advice es incontable.",
      "? I'm looking for ___. | job | *a job | work a >> Contable singular necesita a.",
      "? We haven't got ___ time. | many | *much | a >> much + incontable.",
      "_ Would you like ___ piece of cake? = a >> a piece of + incontable.",
      "s Listen! I've got some good [newses]. = news >> news es incontable (sin -s extra).",
      "o I need some information about the course. >> some + incontable.",
      "t Necesito un consejo. = I need some advice ; I need a piece of advice >> advice incontable.",
      "m advice = a piece of advice ; water = a glass of water ; bread = a loaf of bread ; soup = a bowl of soup >> Contar incontables.",
      "f2 The furnitures in this room are very old. = The furniture in this room is very old >> furniture es incontable (singular).",
      "?2 Which word is countable? | luggage | *suitcase | equipment >> suitcase se cuenta.",
    ],
  },
  {
    n: 70, t: 'Countable and uncountable 2', es: 'Contables e incontables (2)', tags: ['countable', 'nouns'], pre: [69],
    goals: ['Reconocer palabras incontables en inglés que en español son contables', 'Usar palabras con doble sentido (a paper / paper)', 'Usar travel/journey/trip y work/job'],
    x: `Algunas palabras son **incontables en inglés** aunque en español se cuentan: **accommodation, advice, baggage, behaviour, bread, chaos, damage, furniture, information, luggage, news, permission, progress, scenery, traffic, weather, work**.

Hay palabras con **dos sentidos**:
• *a paper* (un diario/documento) / *paper* (material)
• *a hair* (un pelo) / *hair* (el cabello)
• *a room* (habitación) / *room* (espacio)
• *a time* (una vez) / *time* (tiempo)
• *an experience* (algo que te pasó) / *experience* (experiencia laboral)

**travel** (incontable) vs. **a journey / a trip** (contables). **work** (incontable) vs. **a job**.`,
    form: [['Incontable', 'Contable con sentido parecido'], ['work', 'a job'], ['travel', 'a journey / a trip'], ['luggage / baggage', 'a suitcase / a bag'], ['bread', 'a loaf / a roll']],
    uses: ['Incontables típicos del inglés', 'Sentidos distintos: a paper / paper, a room / room', 'travel vs. a trip, work vs. a job'],
    aff: ['I bought a paper to read on the train.|Compré un diario para leer en el tren.', 'Is there room for me?|¿Hay lugar para mí?', 'We had a great trip.|Hicimos un viaje genial.'],
    neg: ["They don't have enough experience.|No tienen suficiente experiencia."],
    q: ['What was the weather like?|¿Cómo estuvo el tiempo?'],
    err: ['We had a terrible weather.|We had terrible weather.|weather es incontable.', 'I have a lot of works.|I have a lot of work.|work (trabajo) es incontable.'],
    ex: [
      "? We had ___ on holiday. | a lovely weather | *lovely weather | lovely weathers >> weather incontable.",
      "? I'm looking for ___. | a work | *a job | job >> job es contable.",
      "? There isn't ___ in the car for all of us. | a room | *room | rooms >> room = espacio (incontable).",
      "_ How was your ___? Did you have a good flight? = trip ; journey ; flight >> trip/journey contables.",
      "s The [traffics] was terrible this morning. = traffic >> traffic incontable.",
      "o I had some interesting experiences in Japan. >> experiences = cosas que te pasaron.",
      "t Hicimos muchos progresos. = We made a lot of progress ; We've made a lot of progress ; We have made a lot of progress >> progress incontable.",
      "?2 'There's a hair in my soup!' — here hair is… | uncountable | *countable (one single hair) | plural >> a hair = un pelo.",
      "f2 Do you have many luggages? = Do you have much luggage ; Do you have a lot of luggage >> luggage incontable.",
    ],
  },
  {
    n: 71, t: 'Countable nouns with a/an and some', es: 'a/an y some con contables', tags: ['articles', 'countable'], pre: [69],
    goals: ['Usar a/an para decir qué es algo o qué hace alguien', 'Usar some con plurales', 'Omitir some en afirmaciones generales'],
    x: `Usamos **a/an** para decir **qué es** una cosa o **qué trabajo** hace alguien: *That's a nice dress. She's a doctor* (no *She's doctor*).

En **plural** usamos **some** (= algunos/un número de) o nada: *I've seen some good films recently.*

**Sin some** cuando hablamos de cosas **en general** o decimos qué son: *Dogs are loyal animals. Those are oranges.* (no *some oranges* para identificarlas).

Recordá: a/an + contable singular; some + plural o incontable.`,
    form: [['Uso', 'Ejemplo'], ['Profesión', "He's an engineer."], ['Qué es algo', "It's a bird."], ['Algunos (plural)', "I've bought some apples."], ['General (sin some)', 'Apples are good for you.']],
    uses: ['a/an para profesiones y definiciones', 'some + plural = algunos', 'Sin artículo para generalizaciones'],
    aff: ["She's a teacher.|Es profesora.", "I've read some interesting books this year.|Este año leí algunos libros interesantes.", 'Cats are independent animals.|Los gatos son animales independientes.'],
    neg: ["I didn't buy any eggs.|No compré huevos."],
    q: ['Is that a hospital?|¿Eso es un hospital?'],
    err: ['My sister is nurse.|My sister is a nurse.|Profesión → a/an.', 'Some dogs are animals.|Dogs are animals.|Generalización → sin some.'],
    ex: [
      "? My brother is ___. | engineer | *an engineer | the engineer >> Profesión: an.",
      "? I've bought ___ for the party. | flowers some | *some flowers | a flowers >> some + plural.",
      "_ What's that? – It's ___ insect. = an >> an antes de sonido vocálico.",
      "? ___ are mammals. | Some whales | *Whales | The whale are >> Generalización: sin some.",
      "s Tom is [doctor] at the hospital. = a doctor >> Profesión → a doctor.",
      "o I met some interesting people at the conference. >> some + plural.",
      "t Mi papá es arquitecto. = My father is an architect ; My dad is an architect >> Profesión: an.",
      "?2 'Those are ___.' (pointing at some fruit) | some bananas | *bananas | a bananas >> Identificar: sin some.",
      "f2 She is very good teacher. = She is a very good teacher ; She's a very good teacher >> a + adjetivo + sustantivo.",
    ],
  },
  {
    n: 72, t: 'a/an and the', es: 'a/an y the', tags: ['articles'], pre: [71],
    goals: ['Usar a/an la primera vez y the después', 'Usar the cuando está claro de qué hablamos', 'Usar the con cosas únicas en un contexto'],
    x: `Usamos **a/an** cuando mencionamos algo **por primera vez** o no importa cuál: *I saw a dog in the park.*

Usamos **the** cuando el oyente **sabe de qué hablamos**: porque ya se mencionó (*The dog was very big*), porque es **único** en ese contexto (*Can you close **the** door?*, *the kitchen*, *the station*), o porque lo especificamos (*the man I met yesterday*).

Comparar: *I'm going to **a** party tonight* (una fiesta) / *Did you enjoy **the** party?* (la que ambos sabemos).

En la Workbook (unidad 16) se practica con huecos: a, an, the o – (sin artículo).`,
    form: [['a / an', 'the'], ['Primera mención', 'Ya mencionado / conocido'], ['Uno cualquiera', 'El único en el contexto'], ['I need a pen.', 'Can you pass me the pen? (esa)']],
    uses: ['a/an = uno cualquiera / primera vez', 'the = el oyente sabe cuál', 'the con cosas únicas del contexto (the door, the city centre)'],
    aff: ['I had a sandwich and an apple. The sandwich was good.|Comí un sándwich y una manzana. El sándwich estaba rico.', 'Can you turn off the light?|¿Podés apagar la luz?'],
    neg: ["I haven't got a car.|No tengo auto."],
    q: ['Where is the nearest bank?|¿Dónde está el banco más cercano?'],
    err: ['I saw the film last night. A film was good.|I saw a film last night. The film was good.|Primera mención a, después the.', 'Can you close a door, please?|Can you close the door, please?|La puerta que ambos conocemos.'],
    cmp: { w: [73, 74, 75], x: 'Más usos de the (unidades 73–76) y nombres propios (77–78).' },
    ex: [
      "? I bought ___ jacket and a shirt. ___ jacket was expensive. | the / A | *a / The | a / A >> Primera mención a, luego the.",
      "? Could you open ___ window, please? | a | *the | — >> La ventana de esta habitación.",
      "_ We stayed at ___ hotel near the beach. = a >> Uno cualquiera / primera vez.",
      "_ What's the name of ___ man who called you? = the >> Especificado por la oración.",
      "s Excuse me, where is [a] station? = the >> La estación (única en el lugar).",
      "o There's a dog in the garden. >> a (nuevo) + the (conocido).",
      "t Vi una película anoche. La película era aburrida. = I saw a film last night. The film was boring ; I watched a film last night. The film was boring ; I saw a movie last night. The movie was boring >> a → the.",
      "?2 'I'm going to ___ dentist tomorrow.' | a | *the | — >> the dentist = mi dentista habitual.",
      "f2 Our house has a kitchen, two bedrooms and a garden. A garden is very small. = Our house has a kitchen, two bedrooms and a garden. The garden is very small >> Segunda mención: the.",
    ],
  },
  {
    n: 73, t: 'the 1', es: 'the (1)', tags: ['articles'], pre: [72],
    goals: ['Usar the con cosas únicas (the sun, the world)', 'Usar the con the sea, the cinema, the radio', 'No usar the con TV, breakfast, next/last week'],
    x: `Usamos **the** con cosas **únicas**: *the sun, the moon, the world, the sky, the sea, the ground, the environment, the capital*.

Expresiones con **the**: *go to **the** cinema/theatre, listen to **the** radio, **the** same, **the** first/last, **the** best*.

**Sin the**: *watch **television** (TV)* (pero *Turn off the TV* = el aparato), *have **breakfast/lunch/dinner***, *next week, last year*, *at **night***.

**the** + número/orden: *the third floor, the 1990s*.`,
    form: [['Con the', 'Sin the'], ['the sun, the sea, the world', 'space (el espacio exterior)'], ['go to the cinema', 'watch TV'], ['the radio', 'have breakfast'], ['the same / the best', 'next week / last year']],
    uses: ['Cosas únicas', 'Expresiones fijas con the', 'Sin the: TV, comidas, next/last…'],
    aff: ['The sun rises in the east.|El sol sale por el este.', 'We went to the cinema last night.|Anoche fuimos al cine.', 'What did you have for breakfast?|¿Qué desayunaste?'],
    neg: ["I don't watch TV very often.|No miro mucha tele."],
    q: ['What is the capital of Peru?|¿Cuál es la capital de Perú?'],
    err: ['I watched the television all evening.|I watched television all evening.|watch TV sin the.', 'We had the lunch at 2.|We had lunch at 2.|Comidas sin the.'],
    ex: [
      "? ___ moon goes round the earth. | A | *The | — >> Única: the moon.",
      "? I'll see you ___. | the next week | *next week | at next week >> next week sin the.",
      "_ We usually have ___ dinner at 8. = — ; - >> Comidas sin artículo. (Escribí - o —)",
      "? Do you often listen to ___? | radio | *the radio | a radio >> listen to the radio.",
      "s We went to [cinema] on Saturday. = the cinema >> go to the cinema.",
      "o Turn off the TV, please. >> the TV = el aparato.",
      "t Es el mejor restaurante de la ciudad. = It's the best restaurant in the city ; It is the best restaurant in the city ; It's the best restaurant in town >> the + superlativo.",
      "?2 Our flat is on ___ floor. | third | *the third | a third >> the + ordinal.",
      "f2 I love swimming in sea. = I love swimming in the sea >> the sea.",
    ],
  },
  {
    n: 74, t: 'the 2 (school / the school etc.)', es: 'school / the school', tags: ['articles'], pre: [73],
    goals: ['Usar school, hospital, prison, church sin the según su función', 'Usar go to bed, go to work, be at home', 'Distinguir go to hospital / go to the hospital'],
    x: `**school, university, hospital, prison, church** van **sin the** cuando hablamos de su **función** (para lo que existe el lugar): *Ken's brother is in prison* (está preso). *She goes to school* (es alumna).

Con **the** cuando hablamos del **edificio** o de una visita: *Ken went to **the** prison to visit his brother.* *I went to the school to talk to the teacher.*

Sin the también: **go to bed, be in bed, go to work, be at work, go home, be at home, go to sea**.`,
    form: [['Sin the (función)', 'Con the (edificio / visita)'], ['go to school (alumno)', 'go to the school (para una reunión)'], ['be in hospital (paciente)', 'go to the hospital (visitar)'], ['go to bed / work / home', '—']],
    uses: ['Función del lugar → sin the', 'Edificio / visita → the', 'bed, work, home sin the'],
    aff: ['She was taken to hospital after the accident.|La llevaron al hospital después del accidente.', "I went to the hospital to visit her.|Fui al hospital a visitarla.", "I'm tired. I'm going to bed.|Estoy cansado. Me voy a dormir."],
    neg: ["He didn't go to work yesterday.|Ayer no fue a trabajar."],
    q: ['What time do you go to bed?|¿A qué hora te acostás?'],
    err: ['I go to the bed at eleven.|I go to bed at eleven.|go to bed sin the.', 'He is at the home now.|He is at home now.|at home sin the.'],
    ex: [
      "? I'm going ___. I'm very tired. | to the bed | *to bed | to a bed >> go to bed.",
      "? Mrs Lee went to ___ to meet her son's teacher. | school | *the school | a school >> Visita al edificio.",
      "_ Children start ___ school at five in England. = — ; - >> Como alumnos: sin the.",
      "? It's late. I want to go ___. | to the home | *home | at home >> go home (sin to ni the).",
      "s After the accident, Joe was in [the] hospital for two weeks. = (quitar the) >> Como paciente (inglés británico): in hospital.",
      "o She's at work at the moment. >> at work sin the.",
      "t Mañana no voy a trabajar. = I'm not going to work tomorrow ; I am not going to work tomorrow >> go to work sin the.",
      "?2 'The workmen went to ___ church to repair the roof.' | church | *the church | a church >> Edificio, no función.",
      "f2 What time did you get to the home? = What time did you get home >> get home sin to ni the.",
    ],
  },
  {
    n: 75, t: 'the 3 (children / the children)', es: 'Generalizar: children / the children', tags: ['articles'], pre: [72],
    goals: ['No usar the al generalizar', 'Usar the para grupos concretos', 'Comparar life / the life of…'],
    x: `Cuando hablamos **en general** de cosas o personas, **no** usamos the: *Children learn from playing. I'm afraid of dogs. Life is short. Crime is a problem.*

En español decimos *"los niños", "la vida"*, pero en inglés va **sin artículo**.

Usamos **the** cuando hablamos de un grupo o cosa **concreta**: *Where are **the** children?* (nuestros hijos). *The life of Mozart. The crime rate in this city.*`,
    form: [['General (sin the)', 'Concreto (con the)'], ['Dogs are loyal.', 'The dogs next door are noisy.'], ['I like music.', 'The music at the party was loud.'], ['History is interesting.', 'the history of Spain']],
    uses: ['Generalizar → sin the', 'Específico → the'],
    aff: ['I love animals.|Me encantan los animales.', 'Money doesn’t buy happiness.|El dinero no compra la felicidad.', 'The children are playing in the garden.|Los chicos están jugando en el jardín.'],
    neg: ["I don't like cold weather.|No me gusta el frío."],
    q: ['Do you like classical music?|¿Te gusta la música clásica?'],
    err: ['The life is beautiful.|Life is beautiful.|Generalización sin the.', "I'm afraid of the spiders.|I'm afraid of spiders.|En general, sin the."],
    ex: [
      "? ___ are often afraid of the dark. | The children | *Children | A children >> Generalización.",
      "? Where are ___? I can't find them. | children | *the children | a children >> Grupo concreto.",
      "_ I'm not interested in ___ politics. = — ; - >> Generalización: sin the.",
      "? ___ of Picasso was very interesting. | Life | *The life | A life >> Específico: the life of…",
      "s [The] money isn't everything. = (quitar The) >> Generalización: Money isn't everything.",
      "o Most people like holidays. >> Generalización.",
      "t Me encanta la música de los 80. = I love the music of the 80s ; I love the music of the eighties ; I love 80s music >> Específico: the music of…",
      "?2 'Did you like ___ we saw yesterday?' | films | *the films | a films >> Específicos.",
      "f2 The crime is increasing in many cities. = Crime is increasing in many cities >> Generalización.",
    ],
  },
  {
    n: 76, t: 'the 4 (the giraffe / the telephone / the old etc.)', es: 'the (4): especies, inventos, grupos', tags: ['articles'], pre: [75],
    goals: ['Usar the + singular para especies e inventos', 'Usar the + adjetivo para grupos de personas', 'Usar the + nacionalidad'],
    x: `**the + sustantivo singular** para hablar de un **tipo** de animal, máquina o invento: *The giraffe is the tallest animal. Who invented the telephone?* También instrumentos musicales: *play **the** piano*.

**the + adjetivo** = un **grupo de personas**: *the rich, the poor, the old, the young, the unemployed, the homeless* (siempre plural: *The rich **are**…*).

**the + nacionalidad** terminada en -ch/-sh/-ese/-ss: *the French, the English, the Chinese, the Swiss*. Otras usan plural: *the Brazilians, the Germans*.`,
    form: [['Uso', 'Ejemplo'], ['Especie', 'The whale is a mammal.'], ['Invento', 'the wheel, the computer'], ['Grupo (the + adj)', 'the young, the poor'], ['Nacionalidad', 'the French, the Japanese']],
    uses: ['the + especie / invento', 'the + adjetivo = grupo de personas (plural)', 'the + nacionalidad'],
    aff: ['The tiger is an endangered species.|El tigre es una especie en peligro.', 'The computer has changed our lives.|La computadora cambió nuestras vidas.', 'The rich are getting richer.|Los ricos son cada vez más ricos.'],
    neg: ["The poor don't have enough to eat.|Los pobres no tienen suficiente para comer."],
    q: ['Can you play the guitar?|¿Sabés tocar la guitarra?'],
    err: ['The rich is not always happy.|The rich are not always happy.|the + adjetivo = plural.', 'She plays piano very well.|She plays the piano very well.|Instrumentos con the (inglés británico).'],
    ex: [
      "? ___ is the fastest land animal. | Cheetah | *The cheetah | A cheetahs >> the + especie.",
      "? Who invented ___? | telephone | *the telephone | a telephones >> the + invento.",
      "_ We should help ___ homeless. = the >> the + adjetivo.",
      "? The young ___ often more open to change. | is | *are | be >> the young = plural.",
      "s The French [is] famous for their food. = are >> the + nacionalidad = plural.",
      "o The elderly need more support. >> the + adjetivo.",
      "t Sé tocar el violín. = I can play the violin >> play the + instrumento.",
      "?2 'The Swiss ___ four official languages.' | has | *have | having >> the Swiss = plural.",
      "f2 The unemployed has a difficult life. = The unemployed have a difficult life >> plural.",
    ],
  },
  {
    n: 77, t: 'Names with and without the 1', es: 'Nombres con y sin the (1)', tags: ['articles'],
    goals: ['No usar the con personas, ciudades, la mayoría de países y continentes', 'Usar the con the USA, the UK, the Netherlands', 'Usar the con océanos, ríos y cordilleras'],
    x: `**Sin the**: personas (*Helen, Mr Smith*), ciudades, **la mayoría** de países, continentes, islas sueltas, montañas sueltas (*Everest*), lagos (*Lake Titicaca*).

**Con the**: países con **republic, kingdom, states**: *the United States, the United Kingdom, the Czech Republic*; plurales: *the Netherlands, the Philippines*.

**Con the**: **océanos, mares, ríos, canales**: *the Atlantic, the Mediterranean, the Amazon*; **cordilleras** y grupos de islas: *the Andes, the Alps, the Canaries*; desiertos: *the Sahara*.

**the north / the south**: *the north of Spain* (pero *northern Spain*).`,
    form: [['Sin the', 'Con the'], ['France, Peru, Asia', 'the USA, the UK, the Netherlands'], ['Everest, Lake Garda', 'the Andes, the Alps'], ['Sicily', 'the Canary Islands'], ['northern Italy', 'the north of Italy']],
    uses: ['Sin the: personas, ciudades, países, continentes', 'Con the: republic/kingdom/states y plurales', 'Con the: océanos, ríos, cordilleras, desiertos'],
    aff: ['The Amazon is the longest river in South America.|El Amazonas es el río más largo de Sudamérica.', 'They live in the Netherlands.|Viven en los Países Bajos.', 'We went skiing in the Alps.|Fuimos a esquiar a los Alpes.'],
    neg: ["I've never been to Africa.|Nunca estuve en África."],
    q: ['Have you ever crossed the Atlantic?|¿Alguna vez cruzaste el Atlántico?'],
    err: ['I live in the Argentina.|I live in Argentina.|Países sin the.', 'We sailed across Atlantic.|We sailed across the Atlantic.|Océanos con the.'],
    ex: [
      "? I'd like to visit ___. | the Brazil | *Brazil | a Brazil >> Países sin the.",
      "? Washington is the capital of ___. | United States | *the United States | a United States >> States → the.",
      "_ ___ Nile is the longest river in Africa. = The >> Ríos con the.",
      "? We climbed ___ last summer. | the Mount Everest | *Mount Everest | a Mount Everest >> Montaña suelta sin the.",
      "s They travelled across [Sahara] by camel. = the Sahara >> Desiertos con the.",
      "o The Andes run through seven countries. >> Cordilleras con the.",
      "t Viven en el norte de Italia. = They live in the north of Italy ; They live in northern Italy >> the north of / northern.",
      "m the = Pacific ; no article = Asia ; the = Philippines ; no article = Lake Victoria >> ¿Con o sin the?",
      "f2 My cousin lives in the Canada. = My cousin lives in Canada >> Sin the.",
    ],
  },
  {
    n: 78, t: 'Names with and without the 2', es: 'Nombres con y sin the (2)', tags: ['articles'], pre: [77],
    goals: ['Usar o no the con calles, edificios y lugares', 'Usar the con hoteles, cines, museos, periódicos', 'Usar of en nombres (the Bank of England)'],
    x: `**Sin the**: calles, plazas, parques (*Oxford Street, Times Square, Central Park*), aeropuertos y estaciones (*Heathrow Airport, Victoria Station*), universidades con nombre propio (*Cambridge University*), muchos negocios con nombre de persona (*McDonald's*), lugares con nombre de lugar + building (*Westminster Abbey*).

**Con the**: hoteles, restaurantes, cines, teatros, museos, galerías: *the Hilton, the Odeon, the Louvre, the National Gallery*; diarios: *the Guardian, the Times*; organizaciones: *the European Union, the BBC*.

Nombres con **of** suelen llevar the: *the Bank of England, the Tower of London, the University of Oxford*.`,
    form: [['Sin the', 'Con the'], ['Oxford Street, Hyde Park', 'the Hilton, the Ritz'], ['Heathrow Airport', 'the British Museum'], ['Cambridge University', 'the University of Cambridge'], ["McDonald's", 'the Guardian, the BBC']],
    uses: ['Calles, parques, estaciones → sin the', 'Hoteles, museos, cines, diarios → the', 'Nombre con of → the'],
    aff: ['We stayed at the Hilton.|Nos alojamos en el Hilton.', 'Let’s meet in Central Park.|Nos encontramos en el Central Park.', 'I read it in the Times.|Lo leí en el Times.'],
    neg: [],
    q: ['Have you been to the Louvre?|¿Fuiste al Louvre?'],
    err: ['We walked along the Oxford Street.|We walked along Oxford Street.|Calles sin the.', 'I visited British Museum.|I visited the British Museum.|Museos con the.'],
    ex: [
      "? We had lunch in ___. | the Hyde Park | *Hyde Park | a Hyde Park >> Parques sin the.",
      "? I saw a great exhibition at ___. | National Gallery | *the National Gallery | a Tate Modern >> Galerías con the.",
      "_ He works for ___ BBC. = the >> Organizaciones con the.",
      "? My flight leaves from ___. | the Gatwick Airport | *Gatwick Airport | a Gatwick Airport >> Aeropuertos sin the.",
      "s She studied at [University] of Oxford. = the University >> Nombre con of → the.",
      "o We stayed at the Grand Hotel. >> Hoteles con the.",
      "t Me gusta leer el Guardian. = I like reading the Guardian ; I like to read the Guardian >> Diarios con the.",
      "m the = Ritz Hotel ; no article = Fifth Avenue ; the = Tower of London ; no article = Victoria Station >> ¿Con o sin the?",
      "f2 Let's meet outside the Victoria Station. = Let's meet outside Victoria Station >> Estaciones sin the.",
    ],
  },
  {
    n: 79, t: 'Singular and plural', es: 'Singular y plural', tags: ['nouns'],
    goals: ['Reconocer palabras siempre plurales (trousers, scissors)', 'Usar verbo singular/plural con police, news, team…', 'Usar a pair of'],
    x: `Algunas palabras son **siempre plurales**: *trousers, jeans, shorts, glasses, scissors, pyjamas* → *My jeans **are** too tight.* Para contar: ***a pair of** trousers*.

**news** termina en -s pero es **singular**: *The news **is** bad.* También *mathematics, physics, athletics*.

**police** es siempre **plural**: *The police **are** investigating.*

Palabras de grupo (*team, family, government, company*) pueden ir con verbo singular o plural (británico).

Cantidades como un todo usan **singular**: *Twenty pounds **is** too much. Three years **is** a long time.*`,
    form: [['Palabra', 'Verbo'], ['trousers, jeans, glasses', 'plural (are)'], ['news, maths, physics', 'singular (is)'], ['police', 'plural (are)'], ['ten miles / 20 dollars (cantidad)', 'singular (is)']],
    uses: ['Siempre plurales + a pair of', 'news = singular', 'police = plural', 'Cantidades = singular'],
    aff: ['These trousers are too long.|Estos pantalones son demasiado largos.', 'The news was surprising.|La noticia fue sorprendente.', 'The police have arrested a man.|La policía arrestó a un hombre.'],
    neg: ["Ten minutes isn't enough time.|Diez minutos no es suficiente tiempo."],
    q: ['Where are my glasses?|¿Dónde están mis anteojos?'],
    err: ['The news are good.|The news is good.|news → singular.', 'I need a new trouser.|I need a new pair of trousers.|trousers siempre plural.'],
    ex: [
      "? My jeans ___ dirty. | is | *are | be >> jeans → plural.",
      "? The news ___ very interesting today. | are | *is | were >> news → singular.",
      "_ The police ___ (be) looking for the thief. = are >> police → plural.",
      "_ I bought a new ___ of shoes. = pair >> a pair of.",
      "s Physics [are] my favourite subject. = is >> physics → singular.",
      "o Three hours is a long time to wait. >> Cantidad = singular.",
      "t ¿Dónde están mis tijeras? = Where are my scissors >> scissors → plural.",
      "?2 Fifty euros ___ too much for a T-shirt. | are | *is | be >> Cantidad como un todo.",
      "f2 The police is coming. = The police are coming >> police → plural.",
    ],
  },
  {
    n: 80, t: 'Noun + noun (a bus driver / a headache)', es: 'Sustantivo + sustantivo', tags: ['nouns'],
    goals: ['Formar sustantivos compuestos (a bus driver)', 'Saber que el primer sustantivo funciona como adjetivo (singular)', 'Usar a ten-minute walk'],
    x: `En inglés podemos poner **dos sustantivos juntos**: el **primero** describe al segundo, como un adjetivo: *a **bus** driver* (un conductor de colectivo), *a **tennis** ball*, *a **city** centre*, *a **road** accident*.

El primer sustantivo va normalmente en **singular**: *a shoe shop* (no *shoes shop*), *a toothbrush*.

Con números: **a ten-minute walk, a three-hour journey, a 20-pound note** (singular y con guion). Pero: *The walk is ten minutes.*

Algunos se escriben juntos: *a headache, a bedroom, a weekend*.`,
    form: [['Compuesto', 'Significado'], ['a bus driver', 'un conductor de colectivo'], ['a city centre', 'un centro de la ciudad'], ['a ten-minute walk', 'una caminata de diez minutos'], ['a two-week holiday', 'unas vacaciones de dos semanas']],
    uses: ['Sustantivo + sustantivo', 'El primero en singular', 'Número + sustantivo singular con guion'],
    aff: ["It's a ten-minute walk to the station.|Son diez minutos a pie hasta la estación.", 'Have you got a phone charger?|¿Tenés un cargador de teléfono?'],
    neg: ["It isn't a long journey.|No es un viaje largo."],
    q: ['Where is the bus stop?|¿Dónde está la parada del colectivo?'],
    err: ['It was a three-hours journey.|It was a three-hour journey.|Número + sustantivo singular.', 'I went to a shoes shop.|I went to a shoe shop.|Primer sustantivo en singular.'],
    ex: [
      "? We went on a ___ holiday. | two-weeks | *two-week | two weeks' of >> Número + sustantivo singular.",
      "? I need a new ___. | brush tooth | *toothbrush | teeth brush >> Compuesto: toothbrush.",
      "_ A shop that sells books is a ___. = bookshop ; book shop >> book (singular) + shop.",
      "_ He drives a bus. He's a ___. = bus driver >> bus + driver.",
      "s We took a [two-hours] flight to Rome. = two-hour >> Número + sustantivo singular.",
      "o It's a five-minute walk from here. >> a + número-sustantivo + sustantivo.",
      "t Tengo dolor de cabeza. = I've got a headache ; I have a headache >> headache.",
      "m bus = stop ; tennis = court ; city = centre ; road = accident >> Formá compuestos.",
      "f2 It's a four-stars hotel. = It's a four-star hotel ; It is a four-star hotel >> four-star (singular).",
    ],
  },
  {
    n: 81, t: "-'s (your sister's name) and of … (the name of the book)", es: "Posesivo 's y of", tags: ['nouns'],
    goals: ["Usar 's con personas y animales", 'Usar of con cosas', "Usar 's con tiempo (today's newspaper)"],
    x: `Usamos **'s** (o solo **'** después de plural en -s) principalmente con **personas y animales**: *my sister's name, the dog's tail, my parents' house*.

Con **cosas** solemos usar **of**: *the name **of** the book, the roof **of** the house* (no *the book's name* normalmente).

**'s** también con **organizaciones, lugares** y **expresiones de tiempo**: *the company's success, the city's streets, today's newspaper, last week's meeting, two weeks' holiday*.

**'s** sin sustantivo = la casa / el negocio: *at the doctor's, at my aunt's*.`,
    form: [["'s", 'of'], ["Anna's car", 'the end of the film'], ["my parents' house", 'the top of the page'], ["today's news", 'the name of the street']],
    uses: ["Personas/animales → 's", 'Cosas → of', "Tiempo → 's (yesterday's, a week's)", "at the doctor's = consultorio"],
    aff: ["This is Maria's bag.|Este es el bolso de María.", 'I read about it in yesterday’s paper.|Lo leí en el diario de ayer.', 'What’s the name of this street?|¿Cómo se llama esta calle?'],
    neg: ["That isn't my brother's car.|Ese no es el auto de mi hermano."],
    q: ["Where's the children's room?|¿Dónde está el cuarto de los chicos?"],
    err: ["the car of my father|my father's car|Persona → 's.", "the film's end|the end of the film|Cosa → of."],
    ex: [
      "? This is ___ house. | the my friend house | *my friend's | my friends' of >> Persona → 's.",
      "? I didn't understand ___. | the film's end | *the end of the film | end the film >> Cosa → of.",
      "_ My ___ (parents) house is very old. = parents' >> Plural en -s → s'.",
      "_ Did you see ___ (today) match? = today's >> Tiempo → 's.",
      "s The [roof's] house needs repairing. = roof of the >> Cosa → of. ++ The roof of the house needs repairing.",
      "o I'm going to the dentist's tomorrow. >> 's = consultorio.",
      "t El cumpleaños de mi hermana es en mayo. = My sister's birthday is in May >> Persona → 's.",
      "?2 'The ___ toys are everywhere.' (more than one child) | childrens' | *children's | childs' >> children (plural irregular) + 's.",
      "f2 I've got two week's holiday. = I've got two weeks' holiday ; I have two weeks' holiday >> Plural en -s → s'.",
    ],
  },
];

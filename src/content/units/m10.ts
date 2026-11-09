import type { UnitSrc } from '../dsl';

// Module 10 — Articles and nouns (EGU units 69–81)
export const m10: UnitSrc[] = [
  {
    n: 69, t: 'Countable and uncountable 1', es: 'Contables e incontables (1)', tags: ['countable', 'nouns', 'articles'],
    goals: ['Tell countable nouns from uncountable ones', 'Use a/an only with singular countable nouns', 'Use much/little/some with uncountable nouns'],
    x: `**Countable** nouns can be counted: *a car, two cars*. **Uncountable** nouns can't: *water, rice, music, money, advice, information*.

With a **singular** countable noun we need a determiner (*a, the, my…*): *I've got **a** car* (not *I've got car*).

Uncountable nouns **don't** take a/an and **don't** have a plural: *some music, a lot of advice* (not *an advice, advices*). To count them we use **a piece of / a glass of / a bowl of**…

Many nouns can be both types, with a different meaning (unit 70).`,
    form: [['Contable', 'Incontable'], ['a job / jobs', 'work'], ['a suggestion', 'advice'], ['a dollar / dollars', 'money'], ['a song', 'music']],
    uses: ['a/an + singular countable', 'Uncountable: no a/an, no plural', 'a piece of / a bottle of + uncountable'],
    aff: ['Can you give me some advice?|¿Me podés dar un consejo?', "I've got a lot of homework tonight.|Tengo mucha tarea esta noche.", 'She gave me a piece of information.|Me dio un dato.'],
    neg: ["We haven't got much time.|No tenemos mucho tiempo."],
    q: ['How much money do you need?|¿Cuánta plata necesitás?'],
    err: ['Can you give me an advice?|Can you give me some advice?|advice is uncountable.', 'I need informations.|I need some information.|information has no plural.'],
    cmp: { w: [70, 71], x: 'Unit 70: words that change meaning; unit 71: a/an and some.' },
    ex: [
      "? Can you give me ___ advice? | an | *some | many >> advice is uncountable.",
      "? I'm looking for ___. | job | *a job | work a >> A singular countable noun needs a.",
      "? We haven't got ___ time. | many | *much | a >> much + uncountable.",
      "_ Would you like ___ piece of cake? = a >> a piece of + uncountable.",
      "s Listen! I've got some good [newses]. = news >> news is uncountable (no extra -s).",
      "o I need some information about the course. >> some + uncountable.",
      "o I need some advice >> advice is uncountable.",
      "m advice = a piece of advice ; water = a glass of water ; bread = a loaf of bread ; soup = a bowl of soup >> Counting uncountable nouns.",
      "f2 The furnitures in this room are very old. = The furniture in this room is very old >> furniture is uncountable (singular).",
      "?2 Which word is countable? | luggage | *suitcase | equipment >> suitcase is countable.",
    ],
  },
  {
    n: 70, t: 'Countable and uncountable 2', es: 'Contables e incontables (2)', tags: ['countable', 'nouns'], pre: [69],
    goals: ['Recognise nouns that are uncountable in English (advice, news, information…)', 'Use words with two meanings (a paper / paper)', 'Use travel/journey/trip and work/job'],
    x: `Some words are **uncountable in English**, even though they are countable in other languages: **accommodation, advice, baggage, behaviour, bread, chaos, damage, furniture, information, luggage, news, permission, progress, scenery, traffic, weather, work**.

Some words have **two meanings**:
• *a paper* (a newspaper/document) / *paper* (the material)
• *a hair* (one hair) / *hair* (all the hair on your head)
• *a room* (a bedroom, etc.) / *room* (space)
• *a time* (an occasion) / *time* (minutes, hours)
• *an experience* (something that happened to you) / *experience* (knowledge from work)

**travel** (uncountable) vs. **a journey / a trip** (countable). **work** (uncountable) vs. **a job**.`,
    form: [['Incontable', 'Contable con sentido parecido'], ['work', 'a job'], ['travel', 'a journey / a trip'], ['luggage / baggage', 'a suitcase / a bag'], ['bread', 'a loaf / a roll']],
    uses: ['Typical uncountable nouns in English', 'Different meanings: a paper / paper, a room / room', 'travel vs. a trip, work vs. a job'],
    aff: ['I bought a paper to read on the train.|Compré un diario para leer en el tren.', 'Is there room for me?|¿Hay lugar para mí?', 'We had a great trip.|Hicimos un viaje genial.'],
    neg: ["They don't have enough experience.|No tienen suficiente experiencia."],
    q: ['What was the weather like?|¿Cómo estuvo el tiempo?'],
    err: ['We had a terrible weather.|We had terrible weather.|weather is uncountable.', 'I have a lot of works.|I have a lot of work.|work is uncountable.'],
    ex: [
      "? We had ___ on holiday. | a lovely weather | *lovely weather | lovely weathers >> weather is uncountable.",
      "? I'm looking for ___. | a work | *a job | job >> job is countable.",
      "? There isn't ___ in the car for all of us. | a room | *room | rooms >> room = space (uncountable).",
      "_ How was your ___? Did you have a good flight? = trip ; journey ; flight >> trip/journey are countable.",
      "s The [traffics] was terrible this morning. = traffic >> traffic is uncountable.",
      "o I had some interesting experiences in Japan. >> experiences = things that happened to you.",
      "o We made a lot of progress >> progress is uncountable.",
      "?2 'There's a hair in my soup!' — here hair is… | uncountable | *countable (one single hair) | plural >> a hair = one single hair.",
      "f2 Do you have many luggages? = Do you have much luggage ; Do you have a lot of luggage >> luggage is uncountable.",
    ],
  },
  {
    n: 71, t: 'Countable nouns with a/an and some', es: 'a/an y some con contables', tags: ['articles', 'countable'], pre: [69],
    goals: ['Use a/an to say what something is or what someone does', 'Use some with plurals', 'Leave out some in general statements'],
    x: `We use **a/an** to say **what** something is or **what job** someone does: *That's a nice dress. She's a doctor* (not *She's doctor*).

In the **plural** we use **some** (= a number of) or nothing: *I've seen some good films recently.*

**No some** when we talk about things **in general** or say what they are: *Dogs are loyal animals. Those are oranges.* (not *some oranges* to identify them).

Remember: a/an + singular countable; some + plural or uncountable.`,
    form: [['Uso', 'Ejemplo'], ['Profesión', "He's an engineer."], ['Qué es algo', "It's a bird."], ['Algunos (plural)', "I've bought some apples."], ['General (sin some)', 'Apples are good for you.']],
    uses: ['a/an for jobs and definitions', 'some + plural = a few, not all', 'No article for generalisations'],
    aff: ["She's a teacher.|Es profesora.", "I've read some interesting books this year.|Este año leí algunos libros interesantes.", 'Cats are independent animals.|Los gatos son animales independientes.'],
    neg: ["I didn't buy any eggs.|No compré huevos."],
    q: ['Is that a hospital?|¿Eso es un hospital?'],
    err: ['My sister is nurse.|My sister is a nurse.|A job → a/an.', 'Some dogs are animals.|Dogs are animals.|A generalisation → no some.'],
    ex: [
      "? My brother is ___. | engineer | *an engineer | the engineer >> Job: an.",
      "? I've bought ___ for the party. | flowers some | *some flowers | a flowers >> some + plural.",
      "_ What's that? – It's ___ insect. = an >> an before a vowel sound.",
      "? ___ are mammals. | Some whales | *Whales | The whale are >> A generalisation: no some.",
      "s Tom is [doctor] at the hospital. = a doctor >> Job → a doctor.",
      "o I met some interesting people at the conference. >> some + plural.",
      "o My father is an architect >> Job: an.",
      "?2 'Those are ___.' (pointing at some fruit) | some bananas | *bananas | a bananas >> Identifying: no some.",
      "f2 She is very good teacher. = She is a very good teacher ; She's a very good teacher >> a + adjective + noun.",
    ],
  },
  {
    n: 72, t: 'a/an and the', es: 'a/an y the', tags: ['articles'], pre: [71],
    goals: ['Use a/an the first time and the after that', 'Use the when it\'s clear what we are talking about', 'Use the with things that are unique in a context'],
    x: `We use **a/an** when we mention something **for the first time** or it doesn't matter which one: *I saw a dog in the park.*

We use **the** when the listener **knows what we mean**: because we've already mentioned it (*The dog was very big*), because it is **the only one** in that context (*Can you close **the** door?*, *the kitchen*, *the station*), or because we say which one (*the man I met yesterday*).

Compare: *I'm going to **a** party tonight* (one party) / *Did you enjoy **the** party?* (the one we both know about).

In the Workbook (unit 16) you practise with gaps: a, an, the or – (no article).`,
    form: [['a / an', 'the'], ['Primera mención', 'Ya mencionado / conocido'], ['Uno cualquiera', 'El único en el contexto'], ['I need a pen.', 'Can you pass me the pen? (esa)']],
    uses: ['a/an = any one / first time', 'the = the listener knows which one', 'the with things that are unique in the context (the door, the city centre)'],
    aff: ['I had a sandwich and an apple. The sandwich was good.|Comí un sándwich y una manzana. El sándwich estaba rico.', 'Can you turn off the light?|¿Podés apagar la luz?'],
    neg: ["I haven't got a car.|No tengo auto."],
    q: ['Where is the nearest bank?|¿Dónde está el banco más cercano?'],
    err: ['I saw the film last night. A film was good.|I saw a film last night. The film was good.|First mention a, then the.', 'Can you close a door, please?|Can you close the door, please?|The door we both know about.'],
    cmp: { w: [73, 74, 75], x: 'More uses of the (units 73–76) and proper names (77–78).' },
    ex: [
      "? I bought ___ jacket and a shirt. ___ jacket was expensive. | the / A | *a / The | a / A >> First mention a, then the.",
      "? Could you open ___ window, please? | a | *the | — >> The window of this room.",
      "_ We stayed at ___ hotel near the beach. = a >> Any one / first time.",
      "_ What's the name of ___ man who called you? = the >> Made specific by the sentence.",
      "s Excuse me, where is [a] station? = the >> The station (the only one in the place).",
      "o There's a dog in the garden. >> a (new) + the (known).",
      "o I saw a film last night. The film was boring >> a → the.",
      "?2 'I'm going to ___ dentist tomorrow.' | a | *the | — >> the dentist = my usual dentist.",
      "f2 Our house has a kitchen, two bedrooms and a garden. A garden is very small. = Our house has a kitchen, two bedrooms and a garden. The garden is very small >> Second mention: the.",
    ],
  },
  {
    n: 73, t: 'the 1', es: 'the (1)', tags: ['articles'], pre: [72],
    goals: ['Use the with unique things (the sun, the world)', 'Use the with the sea, the cinema, the radio', 'Don\'t use the with TV, breakfast, next/last week'],
    x: `We use **the** with **unique** things: *the sun, the moon, the world, the sky, the sea, the ground, the environment, the capital*.

Expressions with **the**: *go to **the** cinema/theatre, listen to **the** radio, **the** same, **the** first/last, **the** best*.

**No the**: *watch **television** (TV)* (but *Turn off the TV* = the set), *have **breakfast/lunch/dinner***, *next week, last year*, *at **night***.

**the** + number/order: *the third floor, the 1990s*.`,
    form: [['Con the', 'Sin the'], ['the sun, the sea, the world', 'space (el espacio exterior)'], ['go to the cinema', 'watch TV'], ['the radio', 'have breakfast'], ['the same / the best', 'next week / last year']],
    uses: ['Unique things', 'Fixed expressions with the', 'No the: TV, meals, next/last…'],
    aff: ['The sun rises in the east.|El sol sale por el este.', 'We went to the cinema last night.|Anoche fuimos al cine.', 'What did you have for breakfast?|¿Qué desayunaste?'],
    neg: ["I don't watch TV very often.|No miro mucha tele."],
    q: ['What is the capital of Peru?|¿Cuál es la capital de Perú?'],
    err: ['I watched the television all evening.|I watched television all evening.|watch TV without the.', 'We had the lunch at 2.|We had lunch at 2.|Meals without the.'],
    ex: [
      "? ___ moon goes round the earth. | A | *The | — >> Only one: the moon.",
      "? I'll see you ___. | the next week | *next week | at next week >> next week without the.",
      "_ We usually have ___ dinner at 8. = — ; - >> Meals without an article. (Write - or —)",
      "? Do you often listen to ___? | radio | *the radio | a radio >> listen to the radio.",
      "s We went to [cinema] on Saturday. = the cinema >> go to the cinema.",
      "o Turn off the TV, please. >> the TV = the TV set.",
      "o It's the best restaurant in the city >> the + superlative.",
      "?2 Our flat is on ___ floor. | third | *the third | a third >> the + ordinal number.",
      "f2 I love swimming in sea. = I love swimming in the sea >> the sea.",
    ],
  },
  {
    n: 74, t: 'the 2 (school / the school etc.)', es: 'school / the school', tags: ['articles'], pre: [73],
    goals: ['Use school, hospital, prison, church without the depending on their purpose', 'Use go to bed, go to work, be at home', 'Tell go to hospital from go to the hospital'],
    x: `**school, university, hospital, prison, church** go **without the** when we talk about their **purpose** (what the place is for): *Ken's brother is in prison* (he's a prisoner). *She goes to school* (she's a student).

With **the** when we talk about the **building** or a visit: *Ken went to **the** prison to visit his brother.* *I went to the school to talk to the teacher.*

Also without the: **go to bed, be in bed, go to work, be at work, go home, be at home, go to sea**.`,
    form: [['Sin the (función)', 'Con the (edificio / visita)'], ['go to school (alumno)', 'go to the school (para una reunión)'], ['be in hospital (paciente)', 'go to the hospital (visitar)'], ['go to bed / work / home', '—']],
    uses: ['The purpose of the place → no the', 'The building / a visit → the', 'bed, work, home without the'],
    aff: ['She was taken to hospital after the accident.|La llevaron al hospital después del accidente.', "I went to the hospital to visit her.|Fui al hospital a visitarla.", "I'm tired. I'm going to bed.|Estoy cansado. Me voy a dormir."],
    neg: ["He didn't go to work yesterday.|Ayer no fue a trabajar."],
    q: ['What time do you go to bed?|¿A qué hora te acostás?'],
    err: ['I go to the bed at eleven.|I go to bed at eleven.|go to bed without the.', 'He is at the home now.|He is at home now.|at home without the.'],
    ex: [
      "? I'm going ___. I'm very tired. | to the bed | *to bed | to a bed >> go to bed.",
      "? Mrs Lee went to ___ to meet her son's teacher. | school | *the school | a school >> Visiting the building.",
      "_ Children start ___ school at five in England. = — ; - >> As students: no the.",
      "? It's late. I want to go ___. | to the home | *home | at home >> go home (no to and no the).",
      "s After the accident, Joe was in [the] hospital for two weeks. = (quitar the) >> As a patient (British English): in hospital.",
      "o She's at work at the moment. >> at work without the.",
      "o I'm not going to work tomorrow >> go to work without the.",
      "?2 'The workmen went to ___ church to repair the roof.' | church | *the church | a church >> The building, not its purpose.",
      "f2 What time did you get to the home? = What time did you get home >> get home without to or the.",
    ],
  },
  {
    n: 75, t: 'the 3 (children / the children)', es: 'Generalizar: children / the children', tags: ['articles'], pre: [72],
    goals: ['Don\'t use the when generalising', 'Use the for specific groups', 'Compare life / the life of…'],
    x: `When we talk about things or people **in general**, we **don't** use the: *Children learn from playing. I'm afraid of dogs. Life is short. Crime is a problem.*

Many languages use an article here ("the children", "the life"), but in English there is **no article**.

We use **the** when we talk about a **specific** group or thing: *Where are **the** children?* (our children). *The life of Mozart. The crime rate in this city.*`,
    form: [['General (sin the)', 'Concreto (con the)'], ['Dogs are loyal.', 'The dogs next door are noisy.'], ['I like music.', 'The music at the party was loud.'], ['History is interesting.', 'the history of Spain']],
    uses: ['Generalising → no the', 'Specific → the'],
    aff: ['I love animals.|Me encantan los animales.', 'Money doesn’t buy happiness.|El dinero no compra la felicidad.', 'The children are playing in the garden.|Los chicos están jugando en el jardín.'],
    neg: ["I don't like cold weather.|No me gusta el frío."],
    q: ['Do you like classical music?|¿Te gusta la música clásica?'],
    err: ['The life is beautiful.|Life is beautiful.|A generalisation without the.', "I'm afraid of the spiders.|I'm afraid of spiders.|In general, no the."],
    ex: [
      "? ___ are often afraid of the dark. | The children | *Children | A children >> A generalisation.",
      "? Where are ___? I can't find them. | children | *the children | a children >> A specific group.",
      "_ I'm not interested in ___ politics. = — ; - >> A generalisation: no the.",
      "? ___ of Picasso was very interesting. | Life | *The life | A life >> Specific: the life of…",
      "s [The] money isn't everything. = (quitar The) >> A generalisation: Money isn't everything.",
      "o Most people like holidays. >> A generalisation.",
      "o I love the music of the 80s >> Specific: the music of…",
      "?2 'Did you like ___ we saw yesterday?' | films | *the films | a films >> Specific ones.",
      "f2 The crime is increasing in many cities. = Crime is increasing in many cities >> A generalisation.",
    ],
  },
  {
    n: 76, t: 'the 4 (the giraffe / the telephone / the old etc.)', es: 'the (4): especies, inventos, grupos', tags: ['articles'], pre: [75],
    goals: ['Use the + singular for species and inventions', 'Use the + adjective for groups of people', 'Use the + nationality'],
    x: `**the + singular noun** to talk about a **type** of animal, machine or invention: *The giraffe is the tallest animal. Who invented the telephone?* Also musical instruments: *play **the** piano*.

**the + adjective** = a **group of people**: *the rich, the poor, the old, the young, the unemployed, the homeless* (always plural: *The rich **are**…*).

**the + nationality** ending in -ch/-sh/-ese/-ss: *the French, the English, the Chinese, the Swiss*. Others use the plural: *the Brazilians, the Germans*.`,
    form: [['Uso', 'Ejemplo'], ['Especie', 'The whale is a mammal.'], ['Invento', 'the wheel, the computer'], ['Grupo (the + adj)', 'the young, the poor'], ['Nacionalidad', 'the French, the Japanese']],
    uses: ['the + species / invention', 'the + adjective = a group of people (plural)', 'the + nationality'],
    aff: ['The tiger is an endangered species.|El tigre es una especie en peligro.', 'The computer has changed our lives.|La computadora cambió nuestras vidas.', 'The rich are getting richer.|Los ricos son cada vez más ricos.'],
    neg: ["The poor don't have enough to eat.|Los pobres no tienen suficiente para comer."],
    q: ['Can you play the guitar?|¿Sabés tocar la guitarra?'],
    err: ['The rich is not always happy.|The rich are not always happy.|the + adjective = plural.', 'She plays piano very well.|She plays the piano very well.|Instruments with the (British English).'],
    ex: [
      "? ___ is the fastest land animal. | Cheetah | *The cheetah | A cheetahs >> the + species.",
      "? Who invented ___? | telephone | *the telephone | a telephones >> the + invention.",
      "_ We should help ___ homeless. = the >> the + adjective.",
      "? The young ___ often more open to change. | is | *are | be >> the young = plural.",
      "s The French [is] famous for their food. = are >> the + nationality = plural.",
      "o The elderly need more support. >> the + adjective.",
      "o I can play the violin >> play the + instrument.",
      "?2 'The Swiss ___ four official languages.' | has | *have | having >> the Swiss = plural.",
      "f2 The unemployed has a difficult life. = The unemployed have a difficult life >> Plural.",
    ],
  },
  {
    n: 77, t: 'Names with and without the 1', es: 'Nombres con y sin the (1)', tags: ['articles'],
    goals: ['Don\'t use the with people, cities, most countries and continents', 'Use the with the USA, the UK, the Netherlands', 'Use the with oceans, rivers and mountain ranges'],
    x: `**No the**: people (*Helen, Mr Smith*), cities, **most** countries, continents, single islands, single mountains (*Everest*), lakes (*Lake Titicaca*).

**With the**: countries with **republic, kingdom, states**: *the United States, the United Kingdom, the Czech Republic*; plurals: *the Netherlands, the Philippines*.

**With the**: **oceans, seas, rivers, canals**: *the Atlantic, the Mediterranean, the Amazon*; **mountain ranges** and groups of islands: *the Andes, the Alps, the Canaries*; deserts: *the Sahara*.

**the north / the south**: *the north of Spain* (but *northern Spain*).`,
    form: [['Sin the', 'Con the'], ['France, Peru, Asia', 'the USA, the UK, the Netherlands'], ['Everest, Lake Garda', 'the Andes, the Alps'], ['Sicily', 'the Canary Islands'], ['northern Italy', 'the north of Italy']],
    uses: ['No the: people, cities, countries, continents', 'With the: republic/kingdom/states and plurals', 'With the: oceans, rivers, mountain ranges, deserts'],
    aff: ['The Amazon is the longest river in South America.|El Amazonas es el río más largo de Sudamérica.', 'They live in the Netherlands.|Viven en los Países Bajos.', 'We went skiing in the Alps.|Fuimos a esquiar a los Alpes.'],
    neg: ["I've never been to Africa.|Nunca estuve en África."],
    q: ['Have you ever crossed the Atlantic?|¿Alguna vez cruzaste el Atlántico?'],
    err: ['I live in the Argentina.|I live in Argentina.|Countries without the.', 'We sailed across Atlantic.|We sailed across the Atlantic.|Oceans with the.'],
    ex: [
      "? I'd like to visit ___. | the Brazil | *Brazil | a Brazil >> Countries without the.",
      "? Washington is the capital of ___. | United States | *the United States | a United States >> States → the.",
      "_ ___ Nile is the longest river in Africa. = The >> Rivers with the.",
      "? We climbed ___ last summer. | the Mount Everest | *Mount Everest | a Mount Everest >> A single mountain without the.",
      "s They travelled across [Sahara] by camel. = the Sahara >> Deserts with the.",
      "o The Andes run through seven countries. >> Mountain ranges with the.",
      "o They live in the north of Italy >> the north of / northern.",
      "m the = Pacific ; no article = Asia ; the = Philippines ; no article = Lake Victoria >> With or without the?",
      "f2 My cousin lives in the Canada. = My cousin lives in Canada >> No the.",
    ],
  },
  {
    n: 78, t: 'Names with and without the 2', es: 'Nombres con y sin the (2)', tags: ['articles'], pre: [77],
    goals: ['Use or leave out the with streets, buildings and places', 'Use the with hotels, cinemas, museums, newspapers', 'Use of in names (the Bank of England)'],
    x: `**No the**: streets, squares, parks (*Oxford Street, Times Square, Central Park*), airports and stations (*Heathrow Airport, Victoria Station*), universities with a proper name (*Cambridge University*), many shops named after people (*McDonald's*), places named with place + building (*Westminster Abbey*).

**With the**: hotels, restaurants, cinemas, theatres, museums, galleries: *the Hilton, the Odeon, the Louvre, the National Gallery*; newspapers: *the Guardian, the Times*; organisations: *the European Union, the BBC*.

Names with **of** usually take the: *the Bank of England, the Tower of London, the University of Oxford*.`,
    form: [['Sin the', 'Con the'], ['Oxford Street, Hyde Park', 'the Hilton, the Ritz'], ['Heathrow Airport', 'the British Museum'], ['Cambridge University', 'the University of Cambridge'], ["McDonald's", 'the Guardian, the BBC']],
    uses: ['Streets, parks, stations → no the', 'Hotels, museums, cinemas, newspapers → the', 'A name with of → the'],
    aff: ['We stayed at the Hilton.|Nos alojamos en el Hilton.', 'Let’s meet in Central Park.|Nos encontramos en el Central Park.', 'I read it in the Times.|Lo leí en el Times.'],
    neg: [],
    q: ['Have you been to the Louvre?|¿Fuiste al Louvre?'],
    err: ['We walked along the Oxford Street.|We walked along Oxford Street.|Streets without the.', 'I visited British Museum.|I visited the British Museum.|Museums with the.'],
    ex: [
      "? We had lunch in ___. | the Hyde Park | *Hyde Park | a Hyde Park >> Parks without the.",
      "? I saw a great exhibition at ___. | National Gallery | *the National Gallery | a Tate Modern >> Galleries with the.",
      "_ He works for ___ BBC. = the >> Organisations with the.",
      "? My flight leaves from ___. | the Gatwick Airport | *Gatwick Airport | a Gatwick Airport >> Airports without the.",
      "s She studied at [University] of Oxford. = the University >> A name with of → the.",
      "o We stayed at the Grand Hotel. >> Hotels with the.",
      "o I like reading the Guardian >> Newspapers with the.",
      "m the = Ritz Hotel ; no article = Fifth Avenue ; the = Tower of London ; no article = Victoria Station >> With or without the?",
      "f2 Let's meet outside the Victoria Station. = Let's meet outside Victoria Station >> Stations without the.",
    ],
  },
  {
    n: 79, t: 'Singular and plural', es: 'Singular y plural', tags: ['nouns'],
    goals: ['Recognise words that are always plural (trousers, scissors)', 'Use a singular/plural verb with police, news, team…', 'Use a pair of'],
    x: `Some words are **always plural**: *trousers, jeans, shorts, glasses, scissors, pyjamas* → *My jeans **are** too tight.* To count them: ***a pair of** trousers*.

**news** ends in -s but it is **singular**: *The news **is** bad.* Also *mathematics, physics, athletics*.

**police** is always **plural**: *The police **are** investigating.*

Group words (*team, family, government, company*) can take a singular or plural verb (British English).

Amounts seen as a whole use the **singular**: *Twenty pounds **is** too much. Three years **is** a long time.*`,
    form: [['Palabra', 'Verbo'], ['trousers, jeans, glasses', 'plural (are)'], ['news, maths, physics', 'singular (is)'], ['police', 'plural (are)'], ['ten miles / 20 dollars (cantidad)', 'singular (is)']],
    uses: ['Always plural + a pair of', 'news = singular', 'police = plural', 'Amounts = singular'],
    aff: ['These trousers are too long.|Estos pantalones son demasiado largos.', 'The news was surprising.|La noticia fue sorprendente.', 'The police have arrested a man.|La policía arrestó a un hombre.'],
    neg: ["Ten minutes isn't enough time.|Diez minutos no es suficiente tiempo."],
    q: ['Where are my glasses?|¿Dónde están mis anteojos?'],
    err: ['The news are good.|The news is good.|news → singular.', 'I need a new trouser.|I need a new pair of trousers.|trousers is always plural.'],
    ex: [
      "? My jeans ___ dirty. | is | *are | be >> jeans → plural.",
      "? The news ___ very interesting today. | are | *is | were >> news → singular.",
      "_ The police ___ (be) looking for the thief. = are >> police → plural.",
      "_ I bought a new ___ of shoes. = pair >> a pair of.",
      "s Physics [are] my favourite subject. = is >> physics → singular.",
      "o Three hours is a long time to wait. >> An amount = singular.",
      "o Where are my scissors >> scissors → plural.",
      "?2 Fifty euros ___ too much for a T-shirt. | are | *is | be >> An amount as a whole.",
      "f2 The police is coming. = The police are coming >> police → plural.",
    ],
  },
  {
    n: 80, t: 'Noun + noun (a bus driver / a headache)', es: 'Sustantivo + sustantivo', tags: ['nouns'],
    goals: ['Make compound nouns (a bus driver)', 'Know that the first noun works like an adjective (singular)', 'Use a ten-minute walk'],
    x: `In English we can put **two nouns together**: the **first** one describes the second, like an adjective: *a **bus** driver*, *a **tennis** ball*, *a **city** centre*, *a **road** accident*.

The first noun is usually **singular**: *a shoe shop* (not *shoes shop*), *a toothbrush*.

With numbers: **a ten-minute walk, a three-hour journey, a 20-pound note** (singular, with a hyphen). But: *The walk is ten minutes.*

Some are written as one word: *a headache, a bedroom, a weekend*.`,
    form: [['Compuesto', 'Significado'], ['a bus driver', 'un conductor de colectivo'], ['a city centre', 'un centro de la ciudad'], ['a ten-minute walk', 'una caminata de diez minutos'], ['a two-week holiday', 'unas vacaciones de dos semanas']],
    uses: ['Noun + noun', 'The first one is singular', 'Number + singular noun with a hyphen'],
    aff: ["It's a ten-minute walk to the station.|Son diez minutos a pie hasta la estación.", 'Have you got a phone charger?|¿Tenés un cargador de teléfono?'],
    neg: ["It isn't a long journey.|No es un viaje largo."],
    q: ['Where is the bus stop?|¿Dónde está la parada del colectivo?'],
    err: ['It was a three-hours journey.|It was a three-hour journey.|Number + singular noun.', 'I went to a shoes shop.|I went to a shoe shop.|The first noun is singular.'],
    ex: [
      "? We went on a ___ holiday. | two-weeks | *two-week | two weeks' of >> Number + singular noun.",
      "? I need a new ___. | brush tooth | *toothbrush | teeth brush >> Compound noun: toothbrush.",
      "_ A shop that sells books is a ___. = bookshop ; book shop >> book (singular) + shop.",
      "_ He drives a bus. He's a ___. = bus driver >> bus + driver.",
      "s We took a [two-hours] flight to Rome. = two-hour >> Number + singular noun.",
      "o It's a five-minute walk from here. >> a + number-noun + noun.",
      "o I've got a headache >> headache.",
      "m bus = stop ; tennis = court ; city = centre ; road = accident >> Make compound nouns.",
      "f2 It's a four-stars hotel. = It's a four-star hotel ; It is a four-star hotel >> four-star (singular).",
    ],
  },
  {
    n: 81, t: "-'s (your sister's name) and of … (the name of the book)", es: "Posesivo 's y of", tags: ['nouns'],
    goals: ["Use 's with people and animals", 'Use of with things', "Use 's with time (today's newspaper)"],
    x: `We use **'s** (or just **'** after a plural ending in -s) mainly with **people and animals**: *my sister's name, the dog's tail, my parents' house*.

With **things** we usually use **of**: *the name **of** the book, the roof **of** the house* (not usually *the book's name*).

**'s** also with **organisations, places** and **time expressions**: *the company's success, the city's streets, today's newspaper, last week's meeting, two weeks' holiday*.

**'s** without a noun = the house / the shop: *at the doctor's, at my aunt's*.`,
    form: [["'s", 'of'], ["Anna's car", 'the end of the film'], ["my parents' house", 'the top of the page'], ["today's news", 'the name of the street']],
    uses: ["People/animals → 's", 'Things → of', "Time → 's (yesterday's, a week's)", "at the doctor's = the doctor's surgery"],
    aff: ["This is Maria's bag.|Este es el bolso de María.", 'I read about it in yesterday’s paper.|Lo leí en el diario de ayer.', 'What’s the name of this street?|¿Cómo se llama esta calle?'],
    neg: ["That isn't my brother's car.|Ese no es el auto de mi hermano."],
    q: ["Where's the children's room?|¿Dónde está el cuarto de los chicos?"],
    err: ["the car of my father|my father's car|A person → 's.", "the film's end|the end of the film|A thing → of."],
    ex: [
      "? This is ___ house. | the my friend house | *my friend's | my friends' of >> A person → 's.",
      "? I didn't understand ___. | the film's end | *the end of the film | end the film >> A thing → of.",
      "_ My ___ (parents) house is very old. = parents' >> Plural ending in -s → s'.",
      "_ Did you see ___ (today) match? = today's >> Time → 's.",
      "s The [roof's] house needs repairing. = roof of the >> A thing → of. ++ The roof of the house needs repairing.",
      "o I'm going to the dentist's tomorrow. >> 's = the doctor's surgery.",
      "o My sister's birthday is in May >> A person → 's.",
      "?2 'The ___ toys are everywhere.' (more than one child) | childrens' | *children's | childs' >> children (irregular plural) + 's.",
      "f2 I've got two week's holiday. = I've got two weeks' holiday ; I have two weeks' holiday >> Plural ending in -s → s'.",
    ],
  },
];

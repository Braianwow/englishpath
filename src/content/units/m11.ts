import type { UnitSrc } from '../dsl';

// Module 11 — Pronouns and determiners (EGU units 82–91)
export const m11: UnitSrc[] = [
  {
    n: 82, t: 'myself/yourself/themselves etc.', es: 'Pronombres reflexivos', tags: ['pronouns'],
    goals: ['Usar los pronombres reflexivos', 'Saber qué verbos no son reflexivos en inglés', 'Distinguir themselves y each other; usar by myself'],
    x: `Usamos **myself, yourself, himself, herself, itself, ourselves, yourselves, themselves** cuando el **sujeto y el objeto son la misma persona**: *I cut myself. Enjoy yourselves!*

Muchos verbos reflexivos en español **no** lo son en inglés: *feel, relax, concentrate, meet, wash, dress, shave* (*I got up, washed and dressed*; *Do you feel tired?*).

**themselves** ≠ **each other**: *They looked at themselves* (cada uno a sí mismo) / *They looked at each other* (uno al otro).

Para énfasis: *I did it myself* (yo mismo, sin ayuda). **by myself** = solo, sin compañía.`,
    form: [['Persona', 'Reflexivo'], ['I / you', 'myself / yourself'], ['he / she / it', 'himself / herself / itself'], ['we / you (pl.)', 'ourselves / yourselves'], ['they', 'themselves']],
    uses: ['Sujeto = objeto', 'Énfasis: I did it myself', 'by myself = solo', 'each other = mutuamente'],
    aff: ['Be careful. Don’t hurt yourself.|Cuidado. No te lastimes.', 'We enjoyed ourselves at the party.|La pasamos bien en la fiesta.', 'She made the dress herself.|Hizo el vestido ella misma.'],
    neg: ["I don't feel very well.|No me siento muy bien."],
    q: ['Did you paint the house yourself?|¿Pintaste la casa vos mismo?'],
    err: ['I feel myself tired.|I feel tired.|feel no es reflexivo.', 'They love themselves (each loves the other).|They love each other.|Mutuo → each other.'],
    ex: [
      "? Be careful! You'll cut ___. | you | *yourself | your >> Sujeto = objeto.",
      "? I got up and ___ quickly. | dressed myself up | *dressed | dressed me >> dress no suele ser reflexivo.",
      "_ We really enjoyed ___ at the concert. = ourselves >> enjoy oneself.",
      "_ Ann and Tom don't speak to ___ any more. = each other ; one another >> Mutuo.",
      "s Try to relax [yourself]. = (quitar yourself) >> relax no es reflexivo.",
      "o She lives by herself in a small flat. >> by herself = sola.",
      "t Lo arreglé yo mismo. = I fixed it myself ; I repaired it myself ; I mended it myself >> Énfasis: myself.",
      "?2 'They looked at ___ in the mirror.' (each looked at himself/herself) | each other | *themselves | them >> Cada uno a sí mismo.",
      "f2 I can't concentrate myself. = I can't concentrate ; I cannot concentrate >> concentrate no es reflexivo.",
    ],
  },
  {
    n: 83, t: 'a friend of mine my own house on my own / by myself', es: 'a friend of mine / my own / on my own', tags: ['pronouns'], pre: [82],
    goals: ['Usar a friend of mine/yours/his', 'Usar my own / your own', 'Usar on my own / by myself'],
    x: `**a friend of mine/yours/his/hers/ours/theirs** = un amigo mío (no *a friend of me*). También *a friend of Tom's*.

**my own / your own…** = de mi propiedad, no compartido: *I'd like to have **my own** room.* También *a room of my own*. Con sustantivo después: *She makes her own clothes* (los hace ella).

**on my own** = **by myself** = solo, sin compañía: *I like living on my own.*`,
    form: [['Estructura', 'Ejemplo'], ['a friend of mine', 'He’s a friend of mine.'], ['my own + sustantivo', 'I have my own car.'], ['a … of my own', 'a house of her own'], ['on my own / by myself', 'I went on my own.']],
    uses: ['a … of mine/yours…', 'my own = propio', 'on my own / by myself = solo'],
    aff: ["A friend of mine works in a bank.|Un amigo mío trabaja en un banco.", 'They have their own business.|Tienen su propio negocio.', 'He did it on his own.|Lo hizo solo.'],
    neg: ["I don't like eating on my own.|No me gusta comer solo."],
    q: ['Do you have your own room?|¿Tenés tu propio cuarto?'],
    err: ['He is a friend of me.|He is a friend of mine.|of + mine.', 'I want an own car.|I want my own car.|my/your… own.'],
    ex: [
      "? Lisa is a colleague ___. | of me | *of mine | of my >> of + mine.",
      "? I don't want to share. I want ___ room. | an own | *my own | own >> my own.",
      "_ She lives ___ her own. = on >> on her own.",
      "_ I went to the cinema by ___. = myself >> by myself.",
      "s He's an old friend of [her]. = hers >> of + hers.",
      "o They grow their own vegetables. >> their own.",
      "t Quiero tener mi propia casa. = I want to have my own house ; I'd like to have my own house ; I want my own house >> my own.",
      "?2 'I travelled ___ — nobody came with me.' | on myself | *on my own | by my own >> on my own / by myself.",
      "f2 It's a good idea of you. = It's a good idea of yours >> of + yours.",
    ],
  },
  {
    n: 84, t: 'there … and it …', es: 'there y it', tags: ['pronouns'],
    goals: ['Usar there is/are para decir que algo existe', 'Usar it para referirse a algo conocido', 'Usar there y it con tiempo, distancia y clima'],
    x: `**there is / there are** = algo **existe** o está en un lugar (se menciona por primera vez): *There's a new restaurant in King Street.*

**it** = algo **ya conocido** o mencionado: *I went to the new restaurant. **It**'s very good.*

**it** también para **tiempo, distancia, clima y situaciones**: *It's 3 o'clock. It's a long way to the station. It's raining. It's difficult to get a job.*

Formas de **there**: *there will be, there has been, there might be, there used to be, there's going to be*: *There will be a meeting tomorrow.*`,
    form: [['there', 'it'], ['There is a problem.', 'It is serious.'], ['There will be a party.', "It'll be fun."], ['There used to be a cinema here.', "It's cold today."]],
    uses: ['there = existencia', 'it = algo conocido', 'it = clima, hora, distancia', 'there + otros tiempos'],
    aff: ['There’s a bank near here.|Hay un banco cerca.', "It's a nice day today.|Hoy es un lindo día.", 'There will be rain tomorrow.|Mañana va a llover.'],
    neg: ["There isn't any milk in the fridge.|No hay leche en la heladera."],
    q: ['Is there a supermarket near here?|¿Hay un supermercado cerca?', "How far is it to the airport?|¿Qué distancia hay al aeropuerto?"],
    err: ['It has a lot of people here.|There are a lot of people here.|Existencia → there.', 'Is very cold today.|It is very cold today.|Clima → it como sujeto.'],
    ex: [
      "? ___ a lot of traffic this morning. | It was | *There was | Was >> Existencia: there was.",
      "? I like this hotel. ___ very comfortable. | There's | *It's | Is >> Algo ya mencionado: it.",
      "_ ___ a long way from here to the coast. = It's ; It is >> Distancia: it.",
      "_ ___ be a meeting tomorrow at 10. = There will ; There'll >> there + will be.",
      "s [It] is a new restaurant in my street. = There >> Existencia: There is.",
      "o There used to be a cinema in this town. >> there used to be.",
      "t Hay mucha gente acá. = There are a lot of people here ; There are lots of people here ; There are many people here >> there are.",
      "?2 '___ no point in waiting.' | It's | *There's | Is >> there's no point (unidad 63).",
      "f2 It's not easy to find a job here; it are very few. = It's not easy to find a job here; there are very few ; It is not easy to find a job here; there are very few >> Existencia: there are.",
    ],
  },
  {
    n: 85, t: 'some and any', es: 'some y any', tags: ['determiners', 'quantifiers'],
    goals: ['Usar some en afirmativas y ofrecimientos', 'Usar any en negativas y preguntas', 'Usar any = no importa cuál; compuestos (somebody, anything…)'],
    x: `**some** en frases **afirmativas**; **any** en **negativas** y **preguntas**: *I've got some money. I haven't got any money. Have you got any money?*

En **ofrecimientos y pedidos** usamos **some** en preguntas: *Would you like some tea? Can I have some water?*

**any** en afirmativas = **no importa cuál**: *You can take any bus. Come any time.*

**Compuestos**: somebody/someone, something, somewhere / anybody/anyone, anything, anywhere: *Is there anybody here? I didn't see anything.*

**if** + any: *If you need any help, call me.*`,
    form: [['', 'some', 'any'], ['Afirmativa', "I've got some."], ['Negativa', '', "I haven't got any."], ['Pregunta', 'Would you like some? (ofrecer)', 'Have you got any?'], ['Compuestos', 'somebody, something, somewhere', 'anybody, anything, anywhere']],
    uses: ['some = afirmativas y ofrecimientos', 'any = negativas, preguntas, if', 'any = no importa cuál'],
    aff: ["I've bought some bread.|Compré pan.", 'Someone is at the door.|Hay alguien en la puerta.', 'You can sit anywhere.|Podés sentarte donde quieras.'],
    neg: ["I didn't buy anything.|No compré nada."],
    q: ['Would you like some coffee?|¿Querés café?', 'Is there anything to eat?|¿Hay algo para comer?'],
    err: ["I didn't see nobody.|I didn't see anybody.|Negativa con any (no doble negación).", 'Have you got some brothers?|Have you got any brothers?|Pregunta neutral → any.'],
    cmp: { w: [86], x: 'no / none / nothing / nobody: unidad 86. Workbook unidad 15 practica estos compuestos.' },
    ex: [
      "? Would you like ___ cake? | any | *some | a >> Ofrecimiento: some.",
      "? I haven't got ___ money. | some | *any | no >> Negativa: any.",
      "_ There's ___ at the door. Can you open it? = somebody ; someone >> Afirmativa: somebody.",
      "_ Did you go ___ interesting at the weekend? = anywhere >> Pregunta: anywhere.",
      "s I didn't say [nothing]. = anything >> Negativa + any.",
      "o If you need any help, let me know. >> if + any.",
      "t No vi a nadie. = I didn't see anybody ; I didn't see anyone ; I saw nobody ; I saw no one >> Negativa: anybody / nobody.",
      "?2 'Which bus should I take?' '___ bus. They all go to the centre.' | Some | *Any | No >> any = no importa cuál.",
      "m some = afirmativa ; any = negativa ; someone = alguien ; anywhere = en cualquier lugar >> some / any.",
      "f2 Is there someone who can help me? (neutral question) = Is there anyone who can help me ; Is there anybody who can help me >> Pregunta neutral: anyone.",
    ],
  },
  {
    n: 86, t: 'no/none/any nothing/nobody etc.', es: 'no / none / nothing / nobody', tags: ['determiners', 'quantifiers'], pre: [85],
    goals: ['Usar no + sustantivo y none solo', 'Usar nothing/nobody/nowhere', 'Evitar la doble negación'],
    x: `**no + sustantivo** = not any: *There are **no** shops here* = *There aren't **any** shops.*

**none** se usa **solo** (sin sustantivo) o con **of**: *'How much money have you got?' 'None.' None of my friends came.*

**nothing, nobody/no one, nowhere** = not anything / not anybody / not anywhere: *I said nothing* = *I didn't say anything.*

En inglés **no** hay doble negación: *I didn't see anybody* o *I saw nobody* (no *I didn't see nobody*).

Después de **nobody/no one** usamos **they/them**: *Nobody phoned, did they?*`,
    form: [['Forma', 'Ejemplo'], ['no + sustantivo', 'I have no time.'], ['none (solo) / none of', 'None of them knew.'], ['nothing', 'There’s nothing to do.'], ['nobody / no one', 'Nobody came.']],
    uses: ['no + sustantivo', 'none solo / none of', 'nothing, nobody, nowhere', 'Sin doble negación'],
    aff: ['There’s nothing in the fridge.|No hay nada en la heladera.', 'Nobody told me.|Nadie me lo dijo.', 'None of the answers were correct.|Ninguna de las respuestas era correcta.'],
    neg: ["I don't know anybody here.|No conozco a nadie acá."],
    q: ['Why did nobody call me?|¿Por qué no me llamó nadie?'],
    err: ["I don't have no money.|I don't have any money.|Sin doble negación.", 'None people came.|No people came.|none no va con sustantivo: no + sustantivo / none of.'],
    ex: [
      "? 'How many tickets are left?' '___.' | No | *None | Nothing >> none solo.",
      "? There are ___ buses after midnight. | none | *no | any >> no + sustantivo.",
      "_ I'm bored. There's ___ to do. = nothing >> nothing = no … nada.",
      "_ ___ of my friends could come. = None >> none of.",
      "s We didn't go [nowhere]. = anywhere >> Sin doble negación.",
      "o Nobody knew the answer. >> nobody + verbo afirmativo.",
      "t No tengo tiempo. = I have no time ; I've got no time ; I don't have any time ; I haven't got any time >> no / not any.",
      "m no = + sustantivo ; none = solo / none of ; nothing = ninguna cosa ; nowhere = ningún lugar >> Formas negativas.",
      "f2 I didn't say nothing. = I didn't say anything ; I said nothing ; I did not say anything >> Una sola negación.",
    ],
  },
  {
    n: 87, t: 'much, many, little, few, a lot, plenty', es: 'much, many, little, few, a lot, plenty', tags: ['quantifiers'],
    goals: ['Usar much (incontable) y many (contable)', 'Usar a lot of / plenty of', 'Distinguir little/a little y few/a few'],
    x: `**much** + incontable; **many** + contable plural: *much time, many friends*. En afirmativas se prefiere **a lot of / lots of**: *We spent a lot of money.* (much/many en negativas y preguntas: *Do you have many friends?*).

**plenty of** = más que suficiente: *There's plenty of time.*

**little** (incontable) / **few** (contable) = **poco, no suficiente** (sentido negativo): *There's little hope. Few people came.*

**a little / a few** = **algo, unos pocos** (sentido positivo): *I have a little money* (algo tengo). *A few friends came.*`,
    form: [['', 'Incontable', 'Contable plural'], ['mucho', 'much / a lot of', 'many / a lot of'], ['poco (negativo)', 'little', 'few'], ['algo, unos pocos', 'a little', 'a few'], ['de sobra', 'plenty of', 'plenty of']],
    uses: ['much / many', 'a lot of en afirmativas', 'little/few (negativo) vs. a little/a few (positivo)', 'plenty of = de sobra'],
    aff: ['We have plenty of time.|Tenemos tiempo de sobra.', 'I speak a little Italian.|Hablo un poco de italiano.', 'A few people came to the meeting.|Vinieron algunas personas a la reunión.'],
    neg: ["I don't have much money.|No tengo mucha plata.", 'Few people understand this.|Poca gente entiende esto.'],
    q: ['How many people were there?|¿Cuánta gente había?'],
    err: ['How much people came?|How many people came?|people es contable → many.', 'I have many work.|I have a lot of work.|work incontable → a lot of / much.'],
    ex: [
      "? How ___ sugar do you take? | many | *much | few >> sugar incontable → much.",
      "? There were ___ people at the concert. | much | *a lot of | a little >> Afirmativa: a lot of.",
      "_ Hurry up! We have very ___ time. = little >> little = poco (negativo).",
      "_ I've got ___ friends in London, so I'm not alone. = a few >> a few = algunos (positivo).",
      "s There aren't [much] restaurants in this town. = many >> Contable plural → many.",
      "o There's plenty of food for everyone. >> plenty of.",
      "t Hablo un poco de francés. = I speak a little French >> a little.",
      "?2 'She's lonely. She has ___ friends.' | a few | *few | a little >> few = pocos (negativo).",
      "m much = time ; many = books ; a little = milk ; a few = minutes >> Contable / incontable.",
      "f2 How much chairs do we need? = How many chairs do we need >> Contable → many.",
    ],
  },
  {
    n: 88, t: 'all / all of most / most of no / none of etc.', es: 'all / most / some / none (of)', tags: ['quantifiers', 'determiners'],
    goals: ['Usar all/most/some/any/no + sustantivo para generalizar', 'Usar all of/most of… + the/my/these', 'Usar all of us / most of them'],
    x: `**all, most, some, any, much, many, little, few, no** + **sustantivo** para hablar **en general**: *Most people like music. Some cars are electric.*

Con **of** cuando hablamos de un grupo **concreto** (the, my, these…): *Most **of the** people I know… Some **of my** friends… All **of the** students…* (no *most of people*).

Con **pronombres** siempre **of**: *all of us, most of them, none of it*.

**all of** = all + the: *all (of) the students*. Workbook unidad 14: *all* y *the whole*.`,
    form: [['General', 'Concreto'], ['Most people', 'Most of the people in this room'], ['Some children', 'Some of my children'], ['All cars', 'All (of) the cars in the car park'], ['—', 'none of them / all of us']],
    uses: ['Cuantificador + sustantivo (general)', 'Cuantificador + of + the/my/these', 'Con pronombres: of obligatorio'],
    aff: ['Most people enjoy holidays.|A la mayoría de la gente le gustan las vacaciones.', 'Some of my friends live abroad.|Algunos de mis amigos viven afuera.', 'All of us passed the exam.|Todos aprobamos el examen.'],
    neg: ['None of them knew the answer.|Ninguno sabía la respuesta.'],
    q: ['Have you read any of these books?|¿Leíste alguno de estos libros?'],
    err: ['Most of people like chocolate.|Most people like chocolate.|General: sin of.', 'All us were tired.|All of us were tired.|Pronombre → of.'],
    cmp: { w: [89, 90], x: 'both/either/neither (89), all/every/whole (90).' },
    ex: [
      "? ___ people think that money is important. | Most of | *Most | The most >> General: most + sustantivo.",
      "? ___ my friends are students. | Most | *Most of | The most >> Concreto: most of + my.",
      "_ ___ of them came to the party. Not one! = None >> none of.",
      "_ I spent ___ of the money I had. = all ; most ; some ; half >> Cuantificador + of the.",
      "s Most [of] people like chocolate. = (quitar of) >> Generalización: Most people (sin of).",
      "o Most of the students passed the test. >> most of + the.",
      "t La mayoría de mis amigos viven en Madrid. = Most of my friends live in Madrid >> most of + my.",
      "?2 'All ___ were very tired after the trip.' | us | *of us | we of >> all of + pronombre.",
      "f2 Some of people don't like cats. = Some people don't like cats >> General: sin of.",
    ],
  },
  {
    n: 89, t: 'both / both of neither / neither of either / either of', es: 'both, either, neither', tags: ['quantifiers', 'determiners'], pre: [88],
    goals: ['Usar both, either, neither para dos cosas o personas', 'Usar both … and, either … or, neither … nor', 'Usar of con the/my/pronombres'],
    x: `Para **dos** cosas o personas:
• **both** = los dos: *Both restaurants are good.*
• **either** = uno u otro (cualquiera de los dos): *You can take either road.*
• **neither** = ninguno de los dos: *Neither restaurant is expensive.*

Con **of**: *both of / either of / neither of + the/my/these/us/them*: *Neither of us went.*

Estructuras dobles: **both … and**, **either … or**, **neither … nor**: *Both Ann and Tom were late. You can either walk or take a taxi. Neither Sue nor Bob came.*

Cuidado: neither ya es negativo: *Neither of them **is/are** here* (no *isn't*).`,
    form: [['Palabra', 'Significado', 'Ejemplo'], ['both', 'los dos', 'Both are fine.'], ['either', 'cualquiera de los dos', 'Either day is OK.'], ['neither', 'ninguno de los dos', 'Neither answer is right.']],
    uses: ['Dos elementos: both, either, neither', 'both … and / either … or / neither … nor', 'Con of + the/my/pronombre'],
    aff: ['Both my parents are teachers.|Mis dos padres son profesores.', 'You can sit in either chair.|Podés sentarte en cualquiera de las dos sillas.'],
    neg: ['Neither of my sisters is married.|Ninguna de mis dos hermanas está casada.'],
    q: ['Do you know either of them?|¿Conocés a alguno de los dos?'],
    err: ["Neither of them didn't come.|Neither of them came.|neither ya es negativo.", 'Both of restaurants are good.|Both (of the) restaurants are good.|both of + the.'],
    ex: [
      "? ___ my brothers live in London. They both work there. | Either | *Both | Neither >> Los dos.",
      "? I tried two shirts, but ___ of them fitted me. | both | *neither | either >> Ninguno de los dos.",
      "_ You can go ___ by bus or by train. = either >> either … or.",
      "_ ___ Paul nor Anna came to the meeting. = Neither >> neither … nor.",
      "s Neither of us [wasn't] hungry. = was >> neither ya es negativo: Neither of us was hungry.",
      "o Both Lisa and Mark are on holiday. >> both … and.",
      "t Ninguno de los dos hoteles era barato. = Neither hotel was cheap ; Neither of the hotels was cheap ; Neither of the hotels were cheap >> neither.",
      "?2 'Is it Monday or Tuesday today?' '___. It's Wednesday.' | Either | *Neither | Both >> Ninguno de los dos.",
      "f2 Both of restaurants were full. = Both restaurants were full ; Both of the restaurants were full ; Both the restaurants were full >> both of + the.",
    ],
  },
  {
    n: 90, t: 'all every whole', es: 'all, every, whole', tags: ['quantifiers', 'determiners'], pre: [88],
    goals: ['Usar all y everything/everybody', 'Usar every + singular', 'Usar the whole / all the'],
    x: `**all** + sustantivo plural/incontable: *All children like games.* Solo, **all** suele significar "lo único": *All I've eaten today is an apple.* Para "todo/todos" en general usamos **everything / everybody**: *Everybody was happy* (no *All was happy*).

**every** + **singular** (con verbo singular): *Every student has a book.*

**whole** = completo, entero: **the whole** + singular: *the whole day* = *all day*. *She ate the whole cake.*

**every day** (todos los días) ≠ **all day** (el día entero). Workbook unidad 14 practica *all* y *the whole*.`,
    form: [['Forma', 'Ejemplo'], ['all + plural', 'All the shops were closed.'], ['every + singular', 'Every shop was closed.'], ['the whole + singular', 'the whole week'], ['everything / everybody', 'Everybody laughed.']],
    uses: ['all + plural / incontable', 'every + singular', 'the whole = entero', 'every day vs. all day'],
    aff: ['Everybody enjoyed the party.|Todos disfrutaron la fiesta.', 'I go to the gym every day.|Voy al gimnasio todos los días.', 'I stayed in bed all day.|Me quedé en la cama todo el día.'],
    neg: ["Not every student passed.|No todos los alumnos aprobaron."],
    q: ['Did you read the whole book?|¿Leíste el libro entero?'],
    err: ['All was very kind.|Everybody was very kind.|Personas en general → everybody.', 'Every students has a computer.|Every student has a computer.|every + singular.'],
    ex: [
      "? ___ was very friendly to me. | All | *Everybody | Every >> everybody.",
      "? ___ student must bring a dictionary. | All | *Every | Whole >> every + singular.",
      "_ I was ill, so I stayed in bed the ___ day. = whole >> the whole + singular.",
      "_ ___ I want is a cup of tea. = All >> All = lo único.",
      "s Every [students] got a certificate. = student >> every + singular.",
      "o She ate the whole pizza. >> the whole.",
      "t Trabajé todo el día. = I worked all day ; I worked the whole day ; I've been working all day >> all day / the whole day.",
      "?2 'I go swimming ___ day.' (= on each day) | all | *every | whole >> every day.",
      "f2 All was perfect at the wedding. = Everything was perfect at the wedding >> Cosas en general → everything.",
    ],
  },
  {
    n: 91, t: 'each and every', es: 'each y every', tags: ['quantifiers', 'determiners'], pre: [90],
    goals: ['Distinguir each (por separado) y every (todos en conjunto)', 'Usar each of y every one of', 'Usar each después del sustantivo'],
    x: `**each** y **every** son parecidos (+ singular), pero:
• **each** = cada uno **por separado**, a menudo grupos chicos (2 o más): *Each player has a different number.*
• **every** = **todos** como grupo, para grupos grandes: *Every house in the street is the same.*

Con **of**: **each of** + the/my/pronombre (*each of the students, each of them*); **every one of** (no *every of*).

**each** puede ir **solo** o al final: *The tickets cost £10 each.*

Solo **every** con frecuencia: *every day, every three days, every other week.*`,
    form: [['each', 'every'], ['por separado', 'todos (grupo)'], ['each of them', 'every one of them'], ['£5 each', 'every day / every two weeks']],
    uses: ['each = individualmente', 'every = todos, frecuencia', 'each of / every one of'],
    aff: ['Each of the children got a present.|Cada uno de los chicos recibió un regalo.', 'The buses run every ten minutes.|Los colectivos pasan cada diez minutos.', 'The tickets are £5 each.|Las entradas cuestan £5 cada una.'],
    neg: [],
    q: ['Did each student get a copy?|¿Cada alumno recibió una copia?'],
    err: ['Every of the students passed.|Every one of the students passed.|every one of / each of.', 'The cakes cost £2 every.|The cakes cost £2 each.|Al final: each.'],
    ex: [
      "? There are four books on the table. ___ book is a different colour. | Every | *Each | All >> Por separado, grupo chico.",
      "? I go to the dentist ___ six months. | each | *every | all >> Frecuencia: every.",
      "_ The oranges cost 30p ___. = each >> each al final.",
      "_ ___ of the students has a different project. = Each >> each of.",
      "s [Every] of my friends came. = Each >> each of / every one of.",
      "o Every one of the houses was destroyed. >> every one of.",
      "t Cada uno de nosotros recibió un regalo. = Each of us got a present ; Each of us received a present ; Every one of us got a present >> each of + pronombre.",
      "?2 'She visits her parents ___ other week.' | each | *every | all >> every other = cada dos.",
      "f2 Each of students has a laptop. = Each of the students has a laptop ; Each student has a laptop >> each of + the.",
    ],
  },
];

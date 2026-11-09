import type { UnitSrc } from '../dsl';

// Module 11 — Pronouns and determiners (EGU units 82–91)
export const m11: UnitSrc[] = [
  {
    n: 82, t: 'myself/yourself/themselves etc.', es: 'Pronombres reflexivos', tags: ['pronouns'],
    goals: ['Use reflexive pronouns', 'Know which verbs are not reflexive in English', 'Tell themselves from each other; use by myself'],
    x: `We use **myself, yourself, himself, herself, itself, ourselves, yourselves, themselves** when the **subject and the object are the same person**: *I cut myself. Enjoy yourselves!*

Many verbs that are reflexive in other languages are **not** reflexive in English: *feel, relax, concentrate, meet, wash, dress, shave* (*I got up, washed and dressed*; *Do you feel tired?*).

**themselves** ≠ **each other**: *They looked at themselves* (each one at himself/herself) / *They looked at each other* (at one another).

For emphasis: *I did it myself* (I did it, without help). **by myself** = alone, with nobody else.`,
    form: [['Persona', 'Reflexivo'], ['I / you', 'myself / yourself'], ['he / she / it', 'himself / herself / itself'], ['we / you (pl.)', 'ourselves / yourselves'], ['they', 'themselves']],
    uses: ['Subject = object', 'Emphasis: I did it myself', 'by myself = alone', 'each other = to one another'],
    aff: ['Be careful. Don’t hurt yourself.|Cuidado. No te lastimes.', 'We enjoyed ourselves at the party.|La pasamos bien en la fiesta.', 'She made the dress herself.|Hizo el vestido ella misma.'],
    neg: ["I don't feel very well.|No me siento muy bien."],
    q: ['Did you paint the house yourself?|¿Pintaste la casa vos mismo?'],
    err: ['I feel myself tired.|I feel tired.|feel is not reflexive.', 'They love themselves (each loves the other).|They love each other.|Mutual → each other.'],
    ex: [
      "? Be careful! You'll cut ___. | you | *yourself | your >> Subject = object.",
      "? I got up and ___ quickly. | dressed myself up | *dressed | dressed me >> dress is not usually reflexive.",
      "_ We really enjoyed ___ at the concert. = ourselves >> enjoy oneself.",
      "_ Ann and Tom don't speak to ___ any more. = each other ; one another >> Each other (mutual).",
      "s Try to relax [yourself]. = (quitar yourself) >> relax is not reflexive.",
      "o She lives by herself in a small flat. >> by herself = alone.",
      "o I fixed it myself >> Emphasis: myself.",
      "?2 'They looked at ___ in the mirror.' (each looked at himself/herself) | each other | *themselves | them >> Each one to themselves.",
      "f2 I can't concentrate myself. = I can't concentrate ; I cannot concentrate >> concentrate is not reflexive.",
    ],
  },
  {
    n: 83, t: 'a friend of mine my own house on my own / by myself', es: 'a friend of mine / my own / on my own', tags: ['pronouns'], pre: [82],
    goals: ['Use a friend of mine/yours/his', 'Use my own / your own', 'Use on my own / by myself'],
    x: `**a friend of mine/yours/his/hers/ours/theirs** (not *a friend of me*). Also *a friend of Tom's*.

**my own / your own…** = belonging to me, not shared: *I'd like to have **my own** room.* Also *a room of my own*. With a noun after it: *She makes her own clothes* (she makes them herself).

**on my own** = **by myself** = alone, with nobody else: *I like living on my own.*`,
    form: [['Estructura', 'Ejemplo'], ['a friend of mine', 'He’s a friend of mine.'], ['my own + sustantivo', 'I have my own car.'], ['a … of my own', 'a house of her own'], ['on my own / by myself', 'I went on my own.']],
    uses: ['a … of mine/yours…', 'my own = belonging to me', 'on my own / by myself = alone'],
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
      "o I want to have my own house >> my own.",
      "?2 'I travelled ___ — nobody came with me.' | on myself | *on my own | by my own >> on my own / by myself.",
      "f2 It's a good idea of you. = It's a good idea of yours >> of + yours.",
    ],
  },
  {
    n: 84, t: 'there … and it …', es: 'there y it', tags: ['pronouns'],
    goals: ['Use there is/are to say that something exists', 'Use it for something already known', 'Use there and it with time, distance and weather'],
    x: `**there is / there are** = something **exists** or is in a place (we mention it for the first time): *There's a new restaurant in King Street.*

**it** = something **already known** or mentioned: *I went to the new restaurant. **It**'s very good.*

**it** also for **time, distance, weather and situations**: *It's 3 o'clock. It's a long way to the station. It's raining. It's difficult to get a job.*

Forms of **there**: *there will be, there has been, there might be, there used to be, there's going to be*: *There will be a meeting tomorrow.*`,
    form: [['there', 'it'], ['There is a problem.', 'It is serious.'], ['There will be a party.', "It'll be fun."], ['There used to be a cinema here.', "It's cold today."]],
    uses: ['there = something exists', 'it = something known', 'it = weather, time, distance', 'there + other tenses'],
    aff: ['There’s a bank near here.|Hay un banco cerca.', "It's a nice day today.|Hoy es un lindo día.", 'There will be rain tomorrow.|Mañana va a llover.'],
    neg: ["There isn't any milk in the fridge.|No hay leche en la heladera."],
    q: ['Is there a supermarket near here?|¿Hay un supermercado cerca?', "How far is it to the airport?|¿Qué distancia hay al aeropuerto?"],
    err: ['It has a lot of people here.|There are a lot of people here.|Something exists → there.', 'Is very cold today.|It is very cold today.|Weather → it as the subject.'],
    ex: [
      "? ___ a lot of traffic this morning. | It was | *There was | Was >> Something exists: there was.",
      "? I like this hotel. ___ very comfortable. | There's | *It's | Is >> Something already mentioned: it.",
      "_ ___ a long way from here to the coast. = It's ; It is >> Distance: it.",
      "_ ___ be a meeting tomorrow at 10. = There will ; There'll >> there + will be.",
      "s [It] is a new restaurant in my street. = There >> Something exists: There is.",
      "o There used to be a cinema in this town. >> there used to be.",
      "o There are a lot of people here >> there are.",
      "?2 '___ no point in waiting.' | It's | *There's | Is >> there's no point (unit 63).",
      "f2 It's not easy to find a job here; it are very few. = It's not easy to find a job here; there are very few ; It is not easy to find a job here; there are very few >> Something exists: there are.",
    ],
  },
  {
    n: 85, t: 'some and any', es: 'some y any', tags: ['determiners', 'quantifiers'],
    goals: ['Use some in affirmatives and offers', 'Use any in negatives and questions', 'Use any = it doesn\'t matter which; compounds (somebody, anything…)'],
    x: `**some** in **affirmative** sentences; **any** in **negatives** and **questions**: *I've got some money. I haven't got any money. Have you got any money?*

In **offers and requests** we use **some** in questions: *Would you like some tea? Can I have some water?*

**any** in affirmatives = **it doesn't matter which**: *You can take any bus. Come any time.*

**Compounds**: somebody/someone, something, somewhere / anybody/anyone, anything, anywhere: *Is there anybody here? I didn't see anything.*

**if** + any: *If you need any help, call me.*`,
    form: [['', 'some', 'any'], ['Afirmativa', "I've got some."], ['Negativa', '', "I haven't got any."], ['Pregunta', 'Would you like some? (ofrecer)', 'Have you got any?'], ['Compuestos', 'somebody, something, somewhere', 'anybody, anything, anywhere']],
    uses: ['some = affirmatives and offers', 'any = negatives, questions, if', 'any = it doesn\'t matter which'],
    aff: ["I've bought some bread.|Compré pan.", 'Someone is at the door.|Hay alguien en la puerta.', 'You can sit anywhere.|Podés sentarte donde quieras.'],
    neg: ["I didn't buy anything.|No compré nada."],
    q: ['Would you like some coffee?|¿Querés café?', 'Is there anything to eat?|¿Hay algo para comer?'],
    err: ["I didn't see nobody.|I didn't see anybody.|Negative with any (no double negative).", 'Have you got some brothers?|Have you got any brothers?|A neutral question → any.'],
    cmp: { w: [86], x: 'no / none / nothing / nobody: unit 86. Workbook unit 15 practises these compounds.' },
    ex: [
      "? Would you like ___ cake? | any | *some | a >> An offer: some.",
      "? I haven't got ___ money. | some | *any | no >> Negative: any.",
      "_ There's ___ at the door. Can you open it? = somebody ; someone >> Affirmative: somebody.",
      "_ Did you go ___ interesting at the weekend? = anywhere >> Question: anywhere.",
      "s I didn't say [nothing]. = anything >> Negative + any.",
      "o If you need any help, let me know. >> if + any.",
      "o I didn't see anybody >> Negative: anybody / nobody.",
      "?2 'Which bus should I take?' '___ bus. They all go to the centre.' | Some | *Any | No >> any = it doesn't matter which.",
      "m some = affirmative ; any = negative ; someone = a person, not saying who ; anywhere = in any place >> some / any.",
      "f2 Is there someone who can help me? (neutral question) = Is there anyone who can help me ; Is there anybody who can help me >> A neutral question: anyone.",
    ],
  },
  {
    n: 86, t: 'no/none/any nothing/nobody etc.', es: 'no / none / nothing / nobody', tags: ['determiners', 'quantifiers'], pre: [85],
    goals: ['Use no + noun and none on its own', 'Use nothing/nobody/nowhere', 'Avoid double negatives'],
    x: `**no + noun** = not any: *There are **no** shops here* = *There aren't **any** shops.*

**none** is used **on its own** (with no noun) or with **of**: *'How much money have you got?' 'None.' None of my friends came.*

**nothing, nobody/no one, nowhere** = not anything / not anybody / not anywhere: *I said nothing* = *I didn't say anything.*

In English there are **no** double negatives: *I didn't see anybody* or *I saw nobody* (not *I didn't see nobody*).

After **nobody/no one** we use **they/them**: *Nobody phoned, did they?*`,
    form: [['Forma', 'Ejemplo'], ['no + sustantivo', 'I have no time.'], ['none (solo) / none of', 'None of them knew.'], ['nothing', 'There’s nothing to do.'], ['nobody / no one', 'Nobody came.']],
    uses: ['no + noun', 'none on its own / none of', 'nothing, nobody, nowhere', 'No double negatives'],
    aff: ['There’s nothing in the fridge.|No hay nada en la heladera.', 'Nobody told me.|Nadie me lo dijo.', 'None of the answers were correct.|Ninguna de las respuestas era correcta.'],
    neg: ["I don't know anybody here.|No conozco a nadie acá."],
    q: ['Why did nobody call me?|¿Por qué no me llamó nadie?'],
    err: ["I don't have no money.|I don't have any money.|No double negative.", 'None people came.|No people came.|none doesn\'t go with a noun: no + noun / none of.'],
    ex: [
      "? 'How many tickets are left?' '___.' | No | *None | Nothing >> none on its own.",
      "? There are ___ buses after midnight. | none | *no | any >> no + noun.",
      "_ I'm bored. There's ___ to do. = nothing >> nothing = not … anything.",
      "_ ___ of my friends could come. = None >> none of.",
      "s We didn't go [nowhere]. = anywhere >> No double negative.",
      "o Nobody knew the answer. >> nobody + affirmative verb.",
      "o I have no time >> no / not any.",
      "m no = + noun ; none = on its own / none of ; nothing = not anything ; nowhere = not anywhere >> Negative forms.",
      "f2 I didn't say nothing. = I didn't say anything ; I said nothing ; I did not say anything >> Only one negative.",
    ],
  },
  {
    n: 87, t: 'much, many, little, few, a lot, plenty', es: 'much, many, little, few, a lot, plenty', tags: ['quantifiers'],
    goals: ['Use much (uncountable) and many (countable)', 'Use a lot of / plenty of', 'Tell little/a little and few/a few apart'],
    x: `**much** + uncountable; **many** + plural countable: *much time, many friends*. In affirmatives we prefer **a lot of / lots of**: *We spent a lot of money.* (much/many in negatives and questions: *Do you have many friends?*).

**plenty of** = more than enough: *There's plenty of time.*

**little** (uncountable) / **few** (countable) = **not much / not many, not enough** (negative meaning): *There's little hope. Few people came.*

**a little / a few** = **some, a small amount** (positive meaning): *I have a little money* (I have some). *A few friends came.*`,
    form: [['', 'Incontable', 'Contable plural'], ['mucho', 'much / a lot of', 'many / a lot of'], ['poco (negativo)', 'little', 'few'], ['algo, unos pocos', 'a little', 'a few'], ['de sobra', 'plenty of', 'plenty of']],
    uses: ['much / many', 'a lot of in affirmatives', 'little/few (negative) vs. a little/a few (positive)', 'plenty of = more than enough'],
    aff: ['We have plenty of time.|Tenemos tiempo de sobra.', 'I speak a little Italian.|Hablo un poco de italiano.', 'A few people came to the meeting.|Vinieron algunas personas a la reunión.'],
    neg: ["I don't have much money.|No tengo mucha plata.", 'Few people understand this.|Poca gente entiende esto.'],
    q: ['How many people were there?|¿Cuánta gente había?'],
    err: ['How much people came?|How many people came?|people is countable → many.', 'I have many work.|I have a lot of work.|work is uncountable → a lot of / much.'],
    ex: [
      "? How ___ sugar do you take? | many | *much | few >> sugar is uncountable → much.",
      "? There were ___ people at the concert. | much | *a lot of | a little >> Affirmative: a lot of.",
      "_ Hurry up! We have very ___ time. = little >> little = not much (negative).",
      "_ I've got ___ friends in London, so I'm not alone. = a few >> a few = some (positive).",
      "s There aren't [much] restaurants in this town. = many >> Plural countable → many.",
      "o There's plenty of food for everyone. >> plenty of.",
      "o I speak a little French >> a little.",
      "?2 'She's lonely. She has ___ friends.' | a few | *few | a little >> few = not many (negative).",
      "m much = time ; many = books ; a little = milk ; a few = minutes >> Countable / uncountable.",
      "f2 How much chairs do we need? = How many chairs do we need >> Countable → many.",
    ],
  },
  {
    n: 88, t: 'all / all of most / most of no / none of etc.', es: 'all / most / some / none (of)', tags: ['quantifiers', 'determiners'],
    goals: ['Use all/most/some/any/no + noun to generalise', 'Use all of/most of… + the/my/these', 'Use all of us / most of them'],
    x: `**all, most, some, any, much, many, little, few, no** + **noun** to talk **in general**: *Most people like music. Some cars are electric.*

With **of** when we talk about a **specific** group (the, my, these…): *Most **of the** people I know… Some **of my** friends… All **of the** students…* (not *most of people*).

With **pronouns** always **of**: *all of us, most of them, none of it*.

**all of** = all + the: *all (of) the students*. Workbook unit 14: *all* and *the whole*.`,
    form: [['General', 'Concreto'], ['Most people', 'Most of the people in this room'], ['Some children', 'Some of my children'], ['All cars', 'All (of) the cars in the car park'], ['—', 'none of them / all of us']],
    uses: ['Quantifier + noun (general)', 'Quantifier + of + the/my/these', 'With pronouns: of is necessary'],
    aff: ['Most people enjoy holidays.|A la mayoría de la gente le gustan las vacaciones.', 'Some of my friends live abroad.|Algunos de mis amigos viven afuera.', 'All of us passed the exam.|Todos aprobamos el examen.'],
    neg: ['None of them knew the answer.|Ninguno sabía la respuesta.'],
    q: ['Have you read any of these books?|¿Leíste alguno de estos libros?'],
    err: ['Most of people like chocolate.|Most people like chocolate.|General: no of.', 'All us were tired.|All of us were tired.|Pronoun → of.'],
    cmp: { w: [89, 90], x: 'both/either/neither (89), all/every/whole (90).' },
    ex: [
      "? ___ people think that money is important. | Most of | *Most | The most >> General: most + noun.",
      "? ___ my friends are students. | Most | *Most of | The most >> Specific: most of + my.",
      "_ ___ of them came to the party. Not one! = None >> none of.",
      "_ I spent ___ of the money I had. = all ; most ; some ; half >> Quantifier + of the.",
      "s Most [of] people like chocolate. = (quitar of) >> A generalisation: Most people (no of).",
      "o Most of the students passed the test. >> most of + the.",
      "o Most of my friends live in Madrid >> most of + my.",
      "?2 'All ___ were very tired after the trip.' | us | *of us | we of >> all of + pronoun.",
      "f2 Some of people don't like cats. = Some people don't like cats >> General: no of.",
    ],
  },
  {
    n: 89, t: 'both / both of neither / neither of either / either of', es: 'both, either, neither', tags: ['quantifiers', 'determiners'], pre: [88],
    goals: ['Use both, either, neither for two things or people', 'Use both … and, either … or, neither … nor', 'Use of with the/my/pronouns'],
    x: `For **two** things or people:
• **both** = the two: *Both restaurants are good.*
• **either** = one or the other (any of the two): *You can take either road.*
• **neither** = not one and not the other: *Neither restaurant is expensive.*

With **of**: *both of / either of / neither of + the/my/these/us/them*: *Neither of us went.*

Double structures: **both … and**, **either … or**, **neither … nor**: *Both Ann and Tom were late. You can either walk or take a taxi. Neither Sue nor Bob came.*

Be careful: neither is already negative: *Neither of them **is/are** here* (not *isn't*).`,
    form: [['Palabra', 'Significado', 'Ejemplo'], ['both', 'los dos', 'Both are fine.'], ['either', 'cualquiera de los dos', 'Either day is OK.'], ['neither', 'ninguno de los dos', 'Neither answer is right.']],
    uses: ['Two things: both, either, neither', 'both … and / either … or / neither … nor', 'With of + the/my/pronoun'],
    aff: ['Both my parents are teachers.|Mis dos padres son profesores.', 'You can sit in either chair.|Podés sentarte en cualquiera de las dos sillas.'],
    neg: ['Neither of my sisters is married.|Ninguna de mis dos hermanas está casada.'],
    q: ['Do you know either of them?|¿Conocés a alguno de los dos?'],
    err: ["Neither of them didn't come.|Neither of them came.|neither is already negative.", 'Both of restaurants are good.|Both (of the) restaurants are good.|both of + the.'],
    ex: [
      "? ___ my brothers live in London. They both work there. | Either | *Both | Neither >> The two of them.",
      "? I tried two shirts, but ___ of them fitted me. | both | *neither | either >> Neither of the two.",
      "_ You can go ___ by bus or by train. = either >> either … or.",
      "_ ___ Paul nor Anna came to the meeting. = Neither >> neither … nor.",
      "s Neither of us [wasn't] hungry. = was >> neither is already negative: Neither of us was hungry.",
      "o Both Lisa and Mark are on holiday. >> both … and.",
      "o Neither hotel was cheap >> neither.",
      "?2 'Is it Monday or Tuesday today?' '___. It's Wednesday.' | Either | *Neither | Both >> Neither of the two.",
      "f2 Both of restaurants were full. = Both restaurants were full ; Both of the restaurants were full ; Both the restaurants were full >> both of + the.",
    ],
  },
  {
    n: 90, t: 'all every whole', es: 'all, every, whole', tags: ['quantifiers', 'determiners'], pre: [88],
    goals: ['Use all and everything/everybody', 'Use every + singular', 'Use the whole / all the'],
    x: `**all** + plural/uncountable noun: *All children like games.* On its own, **all** often means "the only thing": *All I've eaten today is an apple.* For "everything/everyone" in general we use **everything / everybody**: *Everybody was happy* (not *All was happy*).

**every** + **singular** (with a singular verb): *Every student has a book.*

**whole** = complete, entire: **the whole** + singular: *the whole day* = *all day*. *She ate the whole cake.*

**every day** (on all days) ≠ **all day** (the complete day). Workbook unit 14 practises *all* and *the whole*.`,
    form: [['Forma', 'Ejemplo'], ['all + plural', 'All the shops were closed.'], ['every + singular', 'Every shop was closed.'], ['the whole + singular', 'the whole week'], ['everything / everybody', 'Everybody laughed.']],
    uses: ['all + plural / uncountable', 'every + singular', 'the whole = complete', 'every day vs. all day'],
    aff: ['Everybody enjoyed the party.|Todos disfrutaron la fiesta.', 'I go to the gym every day.|Voy al gimnasio todos los días.', 'I stayed in bed all day.|Me quedé en la cama todo el día.'],
    neg: ["Not every student passed.|No todos los alumnos aprobaron."],
    q: ['Did you read the whole book?|¿Leíste el libro entero?'],
    err: ['All was very kind.|Everybody was very kind.|People in general → everybody.', 'Every students has a computer.|Every student has a computer.|every + singular.'],
    ex: [
      "? ___ was very friendly to me. | All | *Everybody | Every >> everybody.",
      "? ___ student must bring a dictionary. | All | *Every | Whole >> every + singular.",
      "_ I was ill, so I stayed in bed the ___ day. = whole >> the whole + singular.",
      "_ ___ I want is a cup of tea. = All >> All = the only thing.",
      "s Every [students] got a certificate. = student >> every + singular.",
      "o She ate the whole pizza. >> the whole.",
      "o I worked all day >> all day / the whole day.",
      "?2 'I go swimming ___ day.' (= on each day) | all | *every | whole >> every day.",
      "f2 All was perfect at the wedding. = Everything was perfect at the wedding >> Things in general → everything.",
    ],
  },
  {
    n: 91, t: 'each and every', es: 'each y every', tags: ['quantifiers', 'determiners'], pre: [90],
    goals: ['Tell each (separately) from every (all together)', 'Use each of and every one of', 'Use each after the noun'],
    x: `**each** and **every** are similar (+ singular), but:
• **each** = every one **separately**, often small groups (2 or more): *Each player has a different number.*
• **every** = **all** as a group, for big groups: *Every house in the street is the same.*

With **of**: **each of** + the/my/pronoun (*each of the students, each of them*); **every one of** (not *every of*).

**each** can be used **on its own** or at the end: *The tickets cost £10 each.*

Only **every** for frequency: *every day, every three days, every other week.*`,
    form: [['each', 'every'], ['por separado', 'todos (grupo)'], ['each of them', 'every one of them'], ['£5 each', 'every day / every two weeks']],
    uses: ['each = individually', 'every = all, frequency', 'each of / every one of'],
    aff: ['Each of the children got a present.|Cada uno de los chicos recibió un regalo.', 'The buses run every ten minutes.|Los colectivos pasan cada diez minutos.', 'The tickets are £5 each.|Las entradas cuestan £5 cada una.'],
    neg: [],
    q: ['Did each student get a copy?|¿Cada alumno recibió una copia?'],
    err: ['Every of the students passed.|Every one of the students passed.|every one of / each of.', 'The cakes cost £2 every.|The cakes cost £2 each.|At the end: each.'],
    ex: [
      "? There are four books on the table. ___ book is a different colour. | Every | *Each | All >> Separately, a small group.",
      "? I go to the dentist ___ six months. | each | *every | all >> Frequency: every.",
      "_ The oranges cost 30p ___. = each >> each at the end.",
      "_ ___ of the students has a different project. = Each >> each of.",
      "s [Every] of my friends came. = Each >> each of / every one of.",
      "o Every one of the houses was destroyed. >> every one of.",
      "o Each of us got a present >> each of + pronoun.",
      "?2 'She visits her parents ___ other week.' | each | *every | all >> every other = one in every two.",
      "f2 Each of students has a laptop. = Each of the students has a laptop ; Each student has a laptop >> each of + the.",
    ],
  },
];

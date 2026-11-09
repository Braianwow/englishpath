import type { UnitSrc } from '../dsl';

// Module 12 — Relative clauses (EGU units 92–97)
export const m12: UnitSrc[] = [
  {
    n: 92, t: 'Relative clauses 1: clauses with who/that/which', es: 'Relativos (1): who / that / which', tags: ['relative'],
    goals: ['Use who for people and which for things', 'Use that for people and things', 'Don\'t repeat the subject inside the clause'],
    x: `A **relative clause** tells us **which person or thing** we are talking about: *The woman **who lives next door** is a doctor.*

• **who** → people: *the man who called*
• **which** → things: *the car which was stolen*
• **that** → people or things: *the man that called / the car that was stolen*

**what** = "the thing that": *What she said was true.* We don't use what after a noun (*everything that*, not *everything what*).

Don't repeat the subject: *The man who **lives** next door* (not *who he lives*).`,
    form: [['Antecedente', 'Relativo', 'Cláusula'], ['the woman', 'who / that', 'lives next door'], ['the book', 'which / that', 'is on the table'], ['—', 'what (= the thing that)', 'happened was strange']],
    uses: ['who/that for people', 'which/that for things', 'what = the thing that', 'Don\'t repeat the subject'],
    aff: ['The man who/that phoned didn’t leave his name.|El hombre que llamó no dejó su nombre.', 'I lost the watch which/that you gave me.|Perdí el reloj que me regalaste.', 'What happened was my fault.|Lo que pasó fue mi culpa.'],
    neg: ["I don't like people who are never on time.|No me gusta la gente que nunca es puntual."],
    q: ['Where is the book that was on the table?|¿Dónde está el libro que estaba en la mesa?'],
    err: ['The man which lives here is a teacher.|The man who lives here is a teacher.|People → who/that.', 'Everything what he said was true.|Everything that he said was true.|After everything → that.'],
    cmp: { w: [93, 94, 95], x: 'When you can leave out the relative pronoun (93), whose/whom/where (94) and extra-information clauses (95).' },
    ex: [
      "? The woman ___ lives next door is very friendly. | which | *who | what >> A person → who.",
      "? Where's the cake ___ was in the fridge? | who | *that | what >> A thing → that/which.",
      "_ A dictionary is a book ___ gives you the meaning of words. = which ; that >> A thing → which/that.",
      "_ ___ she told me was very surprising. = What >> what = the thing that.",
      "s The people who [they] work here are very nice. = (quitar they) >> Don't repeat the subject.",
      "o The man who helped me was very kind. >> who + verb.",
      "o The girl who won the prize is my cousin >> who/that.",
      "?2 'Everything ___ he said was a lie.' | what | *that | who >> After everything: that.",
      "f2 The bus which go to the airport leaves every hour. = The bus which goes to the airport leaves every hour ; The bus that goes to the airport leaves every hour >> The bus → goes.",
    ],
  },
  {
    n: 93, t: 'Relative clauses 2: clauses with and without who/that/which', es: 'Relativos (2): con y sin pronombre', tags: ['relative'], pre: [92],
    goals: ['Leave out the relative pronoun when it is the object', 'Keep it when it is the subject', 'Put the preposition at the end'],
    x: `If **who/that/which** is the **object** of the clause (there is another subject after it), we can **leave it out**:
*The woman **(who) I wanted to see** was away.* (I = subject, the woman = object)

If it is the **subject**, you **can't** leave it out: *The woman **who lives** next door…* (not *The woman lives next door…*).

**Prepositions** usually go at the **end** of the clause: *The man (who) I was talking **to**… The bed (that) I slept **in** was uncomfortable.*

Don't repeat the object: *The film (that) I saw* (not *that I saw it*).`,
    form: [['Relativo = sujeto (obligatorio)', 'Relativo = objeto (opcional)'], ['the man who called me', 'the man (who) I called'], ['the book which won the prize', 'the book (which) I bought'], ['—', 'the person (who) I spoke to']],
    uses: ['Leave out the object relative pronoun', 'Keep the subject relative pronoun', 'The preposition at the end'],
    aff: ['The film we saw last night was great.|La película que vimos anoche estuvo genial.', 'Is this the key you were looking for?|¿Esta es la llave que estabas buscando?'],
    neg: ["The hotel we stayed at wasn't very clean.|El hotel en el que nos quedamos no estaba muy limpio."],
    q: ['Who is the girl you were talking to?|¿Quién es la chica con la que hablabas?'],
    err: ['The book I bought it was expensive.|The book I bought was expensive.|Don\'t repeat the object.', 'The man lives next door is a teacher.|The man who lives next door is a teacher.|A subject relative pronoun is necessary.'],
    ex: [
      "? The dress ___ was beautiful. | she wore it | *she wore | who she wore >> Object relative pronoun left out, without repeating it.",
      "? I met a man ___ in Canada. | *who works | works | he works >> Subject relative pronoun: you must use it.",
      "_ Is this the music ___ you like? = — ; - ; that ; which >> Object: optional (write - if you leave it out).",
      "_ The man I was sitting ___ on the bus was asleep. = next to ; beside >> The preposition goes at the end.",
      "s The people we met [them] on holiday were very nice. = (quitar them) >> Don't repeat the object.",
      "o This is the house I grew up in. >> The preposition goes at the end.",
      "o Where's the book you lent me >> Object relative pronoun: you can leave it out.",
      "?2 In which sentence can you leave out 'that'? | The car that hit me was red. | *The car that I bought is red. | The car that is outside is red. >> Only when it is the object.",
      "f2 The job I applied for it was very interesting. = The job I applied for was very interesting ; The job that I applied for was very interesting >> Don't repeat it.",
    ],
  },
  {
    n: 94, t: 'Relative clauses 3: whose/whom/where', es: 'Relativos (3): whose, whom, where', tags: ['relative'], pre: [92],
    goals: ['Use whose for possession', 'Use whom (formal) as the object', 'Use where, when and why in relative clauses'],
    x: `**whose** = possession, instead of his/her/their: *A widow is a woman **whose** husband is dead.*

**whom** = who as the **object**, formal: *the woman whom I wanted to see*. With a preposition: *the man **to whom** I spoke* (formal) = *the man I spoke to* (normal).

**where** = a place: *the hotel where we stayed*. **when** (time): *the day when we met*. **why** (reason): *the reason why I'm calling*.

In the Workbook (unit 17) these relative pronouns appear in *open cloze* exercises.`,
    form: [['Relativo', 'Uso', 'Ejemplo'], ['whose', 'posesión', 'the man whose car was stolen'], ['whom', 'objeto (formal)', 'the person to whom I wrote'], ['where', 'lugar', 'the city where I was born'], ['when / why', 'tiempo / razón', 'the day when…, the reason why…']],
    uses: ['whose = belonging to whom', 'whom is formal', 'where = in which (place)', 'when / why'],
    aff: ['I met a woman whose brother is a famous actor.|Conocí a una mujer cuyo hermano es un actor famoso.', 'This is the house where I was born.|Esta es la casa donde nací.', 'I remember the day when we first met.|Recuerdo el día en que nos conocimos.'],
    neg: ["The reason why I didn't call is that I was busy.|La razón por la que no llamé es que estaba ocupado."],
    q: ['Is that the restaurant where you had your birthday?|¿Ese es el restaurante donde festejaste tu cumpleaños?'],
    err: ['The man who his car was stolen called the police.|The man whose car was stolen called the police.|Possession → whose.', 'The town which I live is small.|The town where I live is small.|A place → where (or which … in).'],
    ex: [
      "? A widow is a woman ___ husband is dead. | who | *whose | which >> Possession: whose.",
      "? The hotel ___ we stayed was very nice. | which | *where | whose >> A place: where.",
      "_ I'll never forget the day ___ I met you. = when ; that >> A time: when.",
      "_ The person to ___ I spoke was very helpful. = whom >> After a preposition: whom.",
      "s That's the girl [who] father is a pilot. = whose >> Possession: whose.",
      "o What's the name of the man whose car you borrowed? >> whose + noun.",
      "o That's the city where I work >> where.",
      "?2 'Tell me the reason ___ you were late.' | which | *why | where >> A reason: why.",
      "m whose = possession ; where = place ; when = time ; whom = formal object >> Relative pronouns.",
      "f2 The children who their parents work can stay late. = The children whose parents work can stay late >> whose.",
    ],
  },
  {
    n: 95, t: 'Relative clauses 4: extra information clauses (1)', es: 'Relativos (4): cláusulas explicativas', tags: ['relative'], pre: [92],
    goals: ['Tell defining and extra-information clauses apart', 'Use commas with extra-information clauses', 'Don\'t use that or leave out the pronoun in extra-information clauses'],
    x: `**Defining clause** (no commas): it says **which** person or thing: *The woman who lives next door is a doctor.*

**Extra-information clause** (with **commas**): it gives **extra information** about something we already know: *My brother Jim, **who lives in Hong Kong**, is an architect.*

In extra-information clauses:
• we **don't** use **that**: *Colin told me about his new job, which he's enjoying* (not *that*).
• we **can't leave out** the relative pronoun.`,
    form: [['Especificativa (sin comas)', 'Explicativa (con comas)'], ['The man who called is my boss.', 'My boss, who called earlier, is angry.'], ['that / who / which (u omitido)', 'solo who / which (nunca that)']],
    uses: ['Extra information between commas', 'No that', 'Don\'t leave out the relative pronoun'],
    aff: ['Paris, which is the capital of France, is beautiful.|París, que es la capital de Francia, es hermosa.', 'My mother, who is 70, still works.|Mi madre, que tiene 70 años, todavía trabaja.'],
    neg: ["Ann, who I don't know very well, invited me.|Ann, a quien no conozco muy bien, me invitó."],
    q: [],
    err: ['My father, that is a doctor, works a lot.|My father, who is a doctor, works a lot.|Extra-information clause: no that.', 'Rome, I visited last year, is lovely.|Rome, which I visited last year, is lovely.|Extra-information clause: you can\'t leave out the relative pronoun.'],
    ex: [
      "? My sister, ___ lives in Spain, is coming to visit. | that | *who | — >> Extra information about a person: who.",
      "? We stayed at the Hilton, ___ is near the station. | that | *which | what >> Extra information about a thing: which.",
      "_ John, ___ I've known for years, is getting married. = who ; whom >> Extra-information clause: you can't leave it out.",
      "s The Eiffel Tower, [that] was built in 1889, is in Paris. = which >> Extra-information clause: no that.",
      "o My car, which is ten years old, still runs well. >> Extra information between commas.",
      "o My grandfather, who is 90, still drives >> An extra-information clause with commas.",
      "?2 Which sentence needs commas? | The man who called you is here. | *My dad who is 50 loves football. | The book that I read was good. >> Extra information: My dad, who is 50, loves football.",
      "f2 Lisbon, that is the capital of Portugal, is very old. = Lisbon, which is the capital of Portugal, is very old >> Extra information: which.",
    ],
  },
  {
    n: 96, t: 'Relative clauses 5: extra information clauses (2)', es: 'Relativos (5): explicativas (2)', tags: ['relative'], pre: [95],
    goals: ['Use preposition + whom/which in extra-information clauses', 'Use all of whom / most of which', 'Use which to refer to a whole sentence'],
    x: `In extra-information clauses, prepositions can go **before** whom/which (formal) or at the end: *Mr Lee, **to whom** I spoke…* = *Mr Lee, who I spoke to…*

**all of / most of / none of / some of / both of + whom/which**: *Mary has three brothers, **all of whom** are married. He gave me a lot of advice, **most of which** was useful.*

**which** can refer to **the whole** previous sentence: *Jane couldn't come, **which** was a pity.* (not *what*).`,
    form: [['Estructura', 'Ejemplo'], ['preposición + whom/which', 'the bed, in which I slept'], ['quantifier + of + whom/which', 'two sons, both of whom live abroad'], [', which (= toda la oración)', 'He failed, which surprised us.']],
    uses: ['Preposition + whom/which', 'most of which / all of whom', ', which = and this'],
    aff: ['I have two sisters, both of whom are teachers.|Tengo dos hermanas, ambas profesoras.', 'It rained all day, which was annoying.|Llovió todo el día, lo cual fue molesto.'],
    neg: ["He invited ten people, none of whom came.|Invitó a diez personas, ninguna de las cuales vino."],
    q: [],
    err: ['She passed the exam, what was great.|She passed the exam, which was great.|The whole sentence → which.', 'I have two brothers, both of them live abroad.|I have two brothers, both of whom live abroad.|Quantifier + of whom.'],
    ex: [
      "? He was late, ___ annoyed everybody. | what | *which | that >> which = and this.",
      "? I bought ten apples, some of ___ were bad. | them | *which | what >> some of which.",
      "_ They have three children, all of ___ are at university. = whom >> all of whom.",
      "_ Mr Brown, to ___ I sent the letter, never replied. = whom >> preposition + whom.",
      "s Kate lost her phone, [what] made her very upset. = which >> which = and this.",
      "o The team lost, which was disappointing. >> , which = and this.",
      "o He came late, which annoyed me >> which = and this.",
      "?2 'Tom has two cars, ___ are red.' | both of them | *both of which | both which >> both of which.",
      "f2 There were 30 students, most of them passed. = There were 30 students, most of whom passed >> most of whom.",
    ],
  },
  {
    n: 97, t: '-ing and -ed clauses (the woman talking to Tom, the boy injured in the accident)', es: 'Cláusulas de participio', tags: ['relative', 'passive'], pre: [92],
    goals: ['Use -ing to shorten active clauses', 'Use -ed (past participle) for passive clauses', 'Use there is … -ing / -ed'],
    x: `We can shorten a relative clause:

• **-ing** = **active** meaning (someone does something): *Who is the woman **talking to Tom**?* (= who is talking).
• **-ed / past participle** = **passive** meaning: *The boy **injured in the accident** was taken to hospital* (= who was injured).

Also: *There's somebody **waiting** for you. There were some children **swimming** in the river. Most of the goods **made** in this factory are exported.*`,
    form: [['Cláusula completa', 'Abreviada'], ['the man who is sitting there', 'the man sitting there'], ['the car which was stolen', 'the car stolen'], ['people who live here', 'people living here']],
    uses: ['-ing = active', 'past participle = passive', 'there is/are + noun + -ing/-ed'],
    aff: ['The girl sitting next to me was very friendly.|La chica sentada a mi lado era muy amable.', 'Most of the people invited to the party came.|La mayoría de los invitados a la fiesta vino.', 'There’s a man waiting outside.|Hay un hombre esperando afuera.'],
    neg: ['Paintings stolen from the museum were never found.|Los cuadros robados del museo nunca aparecieron.'],
    q: ['Who is the man standing by the door?|¿Quién es el hombre parado junto a la puerta?'],
    err: ['The window breaking in the storm has been repaired.|The window broken in the storm has been repaired.|Passive → past participle.', 'Who is the boy talked to Ann?|Who is the boy talking to Ann?|Active → -ing.'],
    ex: [
      "? The man ___ next to me on the plane was very nervous. | sat | *sitting | sits >> Active → -ing.",
      "? The cars ___ in this factory are exported. | making | *made | make >> Passive → past participle.",
      "_ Somebody ___ (call) Jack phoned while you were out. = called >> Passive: called Jack.",
      "_ There's a lot of people ___ (wait) outside. = waiting >> there are + noun + -ing.",
      "s The bridge [building] in 1900 is still used today. = built >> Passive → past participle.",
      "o I was woken up by a bell ringing. >> Active -ing.",
      "o The woman talking to Tom is my teacher >> -ing = active.",
      "?2 'The people ___ in the accident were taken to hospital.' | injuring | *injured | injure >> Passive.",
      "f2 Most of the people inviting to the wedding came. = Most of the people invited to the wedding came >> Passive → invited.",
    ],
  },
];

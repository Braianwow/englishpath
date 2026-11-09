import type { UnitSrc } from '../dsl';

// Module 12 — Relative clauses (EGU units 92–97)
export const m12: UnitSrc[] = [
  {
    n: 92, t: 'Relative clauses 1: clauses with who/that/which', es: 'Relativos (1): who / that / which', tags: ['relative'],
    goals: ['Usar who para personas y which para cosas', 'Usar that para personas y cosas', 'No repetir el sujeto dentro de la cláusula'],
    x: `Una **cláusula de relativo** dice **de qué persona o cosa** hablamos: *The woman **who lives next door** is a doctor.*

• **who** → personas: *the man who called*
• **which** → cosas: *the car which was stolen*
• **that** → personas o cosas: *the man that called / the car that was stolen*

**what** = "lo que" (*the thing that*): *What she said was true.* No se usa what después de un sustantivo (*everything that*, no *everything what*).

No repitas el sujeto: *The man who **lives** next door* (no *who he lives*).`,
    form: [['Antecedente', 'Relativo', 'Cláusula'], ['the woman', 'who / that', 'lives next door'], ['the book', 'which / that', 'is on the table'], ['—', 'what (= the thing that)', 'happened was strange']],
    uses: ['who/that para personas', 'which/that para cosas', 'what = lo que', 'Sin repetir el sujeto'],
    aff: ['The man who/that phoned didn’t leave his name.|El hombre que llamó no dejó su nombre.', 'I lost the watch which/that you gave me.|Perdí el reloj que me regalaste.', 'What happened was my fault.|Lo que pasó fue mi culpa.'],
    neg: ["I don't like people who are never on time.|No me gusta la gente que nunca es puntual."],
    q: ['Where is the book that was on the table?|¿Dónde está el libro que estaba en la mesa?'],
    err: ['The man which lives here is a teacher.|The man who lives here is a teacher.|Personas → who/that.', 'Everything what he said was true.|Everything that he said was true.|Después de everything → that.'],
    cmp: { w: [93, 94, 95], x: 'Cuándo se puede omitir el relativo (93), whose/whom/where (94) y cláusulas explicativas (95).' },
    ex: [
      "? The woman ___ lives next door is very friendly. | which | *who | what >> Persona → who.",
      "? Where's the cake ___ was in the fridge? | who | *that | what >> Cosa → that/which.",
      "_ A dictionary is a book ___ gives you the meaning of words. = which ; that >> Cosa → which/that.",
      "_ ___ she told me was very surprising. = What >> what = lo que.",
      "s The people who [they] work here are very nice. = (quitar they) >> No repetir el sujeto.",
      "o The man who helped me was very kind. >> who + verbo.",
      "t La chica que ganó el premio es mi prima. = The girl who won the prize is my cousin ; The girl that won the prize is my cousin >> who/that.",
      "?2 'Everything ___ he said was a lie.' | what | *that | who >> Después de everything: that.",
      "f2 The bus which go to the airport leaves every hour. = The bus which goes to the airport leaves every hour ; The bus that goes to the airport leaves every hour >> El bus → goes.",
    ],
  },
  {
    n: 93, t: 'Relative clauses 2: clauses with and without who/that/which', es: 'Relativos (2): con y sin pronombre', tags: ['relative'], pre: [92],
    goals: ['Omitir el relativo cuando es objeto', 'Mantenerlo cuando es sujeto', 'Poner la preposición al final'],
    x: `Si **who/that/which** es el **objeto** de la cláusula (hay otro sujeto después), lo podemos **omitir**:
*The woman **(who) I wanted to see** was away.* (I = sujeto, the woman = objeto)

Si es el **sujeto**, **no** se puede omitir: *The woman **who lives** next door…* (no *The woman lives next door…*).

Las **preposiciones** suelen ir al **final** de la cláusula: *The man (who) I was talking **to**… The bed (that) I slept **in** was uncomfortable.*

No repitas el objeto: *The film (that) I saw* (no *that I saw it*).`,
    form: [['Relativo = sujeto (obligatorio)', 'Relativo = objeto (opcional)'], ['the man who called me', 'the man (who) I called'], ['the book which won the prize', 'the book (which) I bought'], ['—', 'the person (who) I spoke to']],
    uses: ['Omitir el relativo-objeto', 'Mantener el relativo-sujeto', 'Preposición al final'],
    aff: ['The film we saw last night was great.|La película que vimos anoche estuvo genial.', 'Is this the key you were looking for?|¿Esta es la llave que estabas buscando?'],
    neg: ["The hotel we stayed at wasn't very clean.|El hotel en el que nos quedamos no estaba muy limpio."],
    q: ['Who is the girl you were talking to?|¿Quién es la chica con la que hablabas?'],
    err: ['The book I bought it was expensive.|The book I bought was expensive.|No repetir el objeto.', 'The man lives next door is a teacher.|The man who lives next door is a teacher.|Relativo-sujeto obligatorio.'],
    ex: [
      "? The dress ___ was beautiful. | she wore it | *she wore | who she wore >> Relativo-objeto omitido, sin repetir it.",
      "? I met a man ___ in Canada. | *who works | works | he works >> Relativo-sujeto: obligatorio.",
      "_ Is this the music ___ you like? = — ; - ; that ; which >> Objeto: opcional (escribí - si lo omitís).",
      "_ The man I was sitting ___ on the bus was asleep. = next to ; beside >> Preposición al final.",
      "s The people we met [them] on holiday were very nice. = (quitar them) >> No repetir el objeto.",
      "o This is the house I grew up in. >> Preposición al final.",
      "t ¿Dónde está el libro que me prestaste? = Where's the book you lent me ; Where is the book you lent me ; Where is the book that you lent me ; Where's the book that you lent me >> Relativo-objeto omitible.",
      "?2 In which sentence can you leave out 'that'? | The car that hit me was red. | *The car that I bought is red. | The car that is outside is red. >> Solo cuando es objeto.",
      "f2 The job I applied for it was very interesting. = The job I applied for was very interesting ; The job that I applied for was very interesting >> Sin repetir it.",
    ],
  },
  {
    n: 94, t: 'Relative clauses 3: whose/whom/where', es: 'Relativos (3): whose, whom, where', tags: ['relative'], pre: [92],
    goals: ['Usar whose para posesión', 'Usar whom (formal) como objeto', 'Usar where, when y why en cláusulas de relativo'],
    x: `**whose** = **cuyo** (posesión), en lugar de his/her/their: *A widow is a woman **whose** husband is dead.*

**whom** = who como **objeto**, formal: *the woman whom I wanted to see*. Con preposición: *the man **to whom** I spoke* (formal) = *the man I spoke to* (normal).

**where** = lugar: *the hotel where we stayed*. **when** (tiempo): *the day when we met*. **why** (razón): *the reason why I'm calling*.

En el Workbook (unidad 17) estos relativos aparecen en ejercicios de *open cloze*.`,
    form: [['Relativo', 'Uso', 'Ejemplo'], ['whose', 'posesión', 'the man whose car was stolen'], ['whom', 'objeto (formal)', 'the person to whom I wrote'], ['where', 'lugar', 'the city where I was born'], ['when / why', 'tiempo / razón', 'the day when…, the reason why…']],
    uses: ['whose = cuyo', 'whom formal', 'where = donde', 'when / why'],
    aff: ['I met a woman whose brother is a famous actor.|Conocí a una mujer cuyo hermano es un actor famoso.', 'This is the house where I was born.|Esta es la casa donde nací.', 'I remember the day when we first met.|Recuerdo el día en que nos conocimos.'],
    neg: ["The reason why I didn't call is that I was busy.|La razón por la que no llamé es que estaba ocupado."],
    q: ['Is that the restaurant where you had your birthday?|¿Ese es el restaurante donde festejaste tu cumpleaños?'],
    err: ['The man who his car was stolen called the police.|The man whose car was stolen called the police.|Posesión → whose.', 'The town which I live is small.|The town where I live is small.|Lugar → where (o which … in).'],
    ex: [
      "? A widow is a woman ___ husband is dead. | who | *whose | which >> Posesión: whose.",
      "? The hotel ___ we stayed was very nice. | which | *where | whose >> Lugar: where.",
      "_ I'll never forget the day ___ I met you. = when ; that >> Tiempo: when.",
      "_ The person to ___ I spoke was very helpful. = whom >> Después de preposición: whom.",
      "s That's the girl [who] father is a pilot. = whose >> Posesión: whose.",
      "o What's the name of the man whose car you borrowed? >> whose + sustantivo.",
      "t Esa es la ciudad donde trabajo. = That's the city where I work ; That is the city where I work >> where.",
      "?2 'Tell me the reason ___ you were late.' | which | *why | where >> razón: why.",
      "m whose = posesión ; where = lugar ; when = tiempo ; whom = objeto formal >> Pronombres relativos.",
      "f2 The children who their parents work can stay late. = The children whose parents work can stay late >> whose.",
    ],
  },
  {
    n: 95, t: 'Relative clauses 4: extra information clauses (1)', es: 'Relativos (4): cláusulas explicativas', tags: ['relative'], pre: [92],
    goals: ['Distinguir cláusulas especificativas y explicativas', 'Usar comas con las explicativas', 'No usar that ni omitir el relativo en las explicativas'],
    x: `**Cláusula especificativa** (sin comas): dice **cuál** persona o cosa: *The woman who lives next door is a doctor.*

**Cláusula explicativa** (con **comas**): da **información extra** sobre algo ya identificado: *My brother Jim, **who lives in Hong Kong**, is an architect.*

En las explicativas:
• **no** usamos **that**: *Colin told me about his new job, which he's enjoying* (no *that*).
• **no** podemos **omitir** el relativo.`,
    form: [['Especificativa (sin comas)', 'Explicativa (con comas)'], ['The man who called is my boss.', 'My boss, who called earlier, is angry.'], ['that / who / which (u omitido)', 'solo who / which (nunca that)']],
    uses: ['Información extra entre comas', 'Sin that', 'Sin omitir el relativo'],
    aff: ['Paris, which is the capital of France, is beautiful.|París, que es la capital de Francia, es hermosa.', 'My mother, who is 70, still works.|Mi madre, que tiene 70 años, todavía trabaja.'],
    neg: ["Ann, who I don't know very well, invited me.|Ann, a quien no conozco muy bien, me invitó."],
    q: [],
    err: ['My father, that is a doctor, works a lot.|My father, who is a doctor, works a lot.|Explicativa: sin that.', 'Rome, I visited last year, is lovely.|Rome, which I visited last year, is lovely.|Explicativa: no se omite el relativo.'],
    ex: [
      "? My sister, ___ lives in Spain, is coming to visit. | that | *who | — >> Explicativa con persona: who.",
      "? We stayed at the Hilton, ___ is near the station. | that | *which | what >> Explicativa con cosa: which.",
      "_ John, ___ I've known for years, is getting married. = who ; whom >> Explicativa: no se omite.",
      "s The Eiffel Tower, [that] was built in 1889, is in Paris. = which >> Explicativa: sin that.",
      "o My car, which is ten years old, still runs well. >> Información extra entre comas.",
      "t Mi abuelo, que tiene 90 años, todavía maneja. = My grandfather, who is 90, still drives ; My grandfather, who is 90 years old, still drives >> Explicativa con comas.",
      "?2 Which sentence needs commas? | The man who called you is here. | *My dad who is 50 loves football. | The book that I read was good. >> Explicativa: My dad, who is 50, loves football.",
      "f2 Lisbon, that is the capital of Portugal, is very old. = Lisbon, which is the capital of Portugal, is very old >> Explicativa: which.",
    ],
  },
  {
    n: 96, t: 'Relative clauses 5: extra information clauses (2)', es: 'Relativos (5): explicativas (2)', tags: ['relative'], pre: [95],
    goals: ['Usar preposición + whom/which en explicativas', 'Usar all of whom / most of which', 'Usar which para referirse a toda una oración'],
    x: `En las explicativas, las preposiciones pueden ir **antes** de whom/which (formal) o al final: *Mr Lee, **to whom** I spoke…* = *Mr Lee, who I spoke to…*

**all of / most of / none of / some of / both of + whom/which**: *Mary has three brothers, **all of whom** are married. He gave me a lot of advice, **most of which** was useful.*

**which** puede referirse a **toda la oración** anterior: *Jane couldn't come, **which** was a pity.* (no *what*).`,
    form: [['Estructura', 'Ejemplo'], ['preposición + whom/which', 'the bed, in which I slept'], ['quantifier + of + whom/which', 'two sons, both of whom live abroad'], [', which (= toda la oración)', 'He failed, which surprised us.']],
    uses: ['Preposición + whom/which', 'most of which / all of whom', ', which = lo cual'],
    aff: ['I have two sisters, both of whom are teachers.|Tengo dos hermanas, ambas profesoras.', 'It rained all day, which was annoying.|Llovió todo el día, lo cual fue molesto.'],
    neg: ["He invited ten people, none of whom came.|Invitó a diez personas, ninguna de las cuales vino."],
    q: [],
    err: ['She passed the exam, what was great.|She passed the exam, which was great.|Toda la oración → which.', 'I have two brothers, both of them live abroad.|I have two brothers, both of whom live abroad.|Cuantificador + of whom.'],
    ex: [
      "? He was late, ___ annoyed everybody. | what | *which | that >> which = lo cual.",
      "? I bought ten apples, some of ___ were bad. | them | *which | what >> some of which.",
      "_ They have three children, all of ___ are at university. = whom >> all of whom.",
      "_ Mr Brown, to ___ I sent the letter, never replied. = whom >> preposición + whom.",
      "s Kate lost her phone, [what] made her very upset. = which >> which = lo cual.",
      "o The team lost, which was disappointing. >> , which = lo cual.",
      "t Vino tarde, lo cual me molestó. = He came late, which annoyed me ; She came late, which annoyed me ; He arrived late, which annoyed me >> which = lo cual.",
      "?2 'Tom has two cars, ___ are red.' | both of them | *both of which | both which >> both of which.",
      "f2 There were 30 students, most of them passed. = There were 30 students, most of whom passed >> most of whom.",
    ],
  },
  {
    n: 97, t: '-ing and -ed clauses (the woman talking to Tom, the boy injured in the accident)', es: 'Cláusulas de participio', tags: ['relative', 'passive'], pre: [92],
    goals: ['Usar -ing para acortar cláusulas activas', 'Usar -ed (participio) para cláusulas pasivas', 'Usar there is … -ing / -ed'],
    x: `Podemos acortar una cláusula de relativo:

• **-ing** = sentido **activo** (alguien hace algo): *Who is the woman **talking to Tom**?* (= who is talking).
• **-ed / participio** = sentido **pasivo**: *The boy **injured in the accident** was taken to hospital* (= who was injured).

También: *There's somebody **waiting** for you. There were some children **swimming** in the river. Most of the goods **made** in this factory are exported.*`,
    form: [['Cláusula completa', 'Abreviada'], ['the man who is sitting there', 'the man sitting there'], ['the car which was stolen', 'the car stolen'], ['people who live here', 'people living here']],
    uses: ['-ing = activo', 'participio = pasivo', 'there is/are + sustantivo + -ing/-ed'],
    aff: ['The girl sitting next to me was very friendly.|La chica sentada a mi lado era muy amable.', 'Most of the people invited to the party came.|La mayoría de los invitados a la fiesta vino.', 'There’s a man waiting outside.|Hay un hombre esperando afuera.'],
    neg: ['Paintings stolen from the museum were never found.|Los cuadros robados del museo nunca aparecieron.'],
    q: ['Who is the man standing by the door?|¿Quién es el hombre parado junto a la puerta?'],
    err: ['The window breaking in the storm has been repaired.|The window broken in the storm has been repaired.|Pasivo → participio.', 'Who is the boy talked to Ann?|Who is the boy talking to Ann?|Activo → -ing.'],
    ex: [
      "? The man ___ next to me on the plane was very nervous. | sat | *sitting | sits >> Activo → -ing.",
      "? The cars ___ in this factory are exported. | making | *made | make >> Pasivo → participio.",
      "_ Somebody ___ (call) Jack phoned while you were out. = called >> Pasivo: llamado Jack.",
      "_ There's a lot of people ___ (wait) outside. = waiting >> there are + sustantivo + -ing.",
      "s The bridge [building] in 1900 is still used today. = built >> Pasivo → participio.",
      "o I was woken up by a bell ringing. >> -ing activo.",
      "t La mujer que habla con Tom es mi profesora. = The woman talking to Tom is my teacher ; The woman who is talking to Tom is my teacher >> -ing = activo.",
      "?2 'The people ___ in the accident were taken to hospital.' | injuring | *injured | injure >> Pasivo.",
      "f2 Most of the people inviting to the wedding came. = Most of the people invited to the wedding came >> Pasivo → invited.",
    ],
  },
];

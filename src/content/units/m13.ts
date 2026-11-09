import type { UnitSrc } from '../dsl';

// Module 13 — Adjectives and adverbs (EGU units 98–112)
export const m13: UnitSrc[] = [
  {
    n: 98, t: 'Adjectives ending in -ing and -ed (boring/bored etc.)', es: 'Adjetivos -ing / -ed', tags: ['adjectives'],
    goals: ['Usar -ed para cómo se siente alguien', 'Usar -ing para describir lo que causa ese sentimiento', 'Evitar el error I am boring'],
    x: `**-ed** = cómo **se siente** alguien: *I'm bored. She was surprised. We were tired.*
**-ing** = la cosa o persona que **produce** ese sentimiento: *The film was boring. The news was surprising. It was a tiring day.*

*Jane is bored* (se aburre) ≠ *Jane is boring* (es aburrida, aburre a los demás).

Pares comunes: interested/interesting, excited/exciting, tired/tiring, confused/confusing, disappointed/disappointing, embarrassed/embarrassing, annoyed/annoying, frightened/frightening.`,
    form: [['-ed (sentimiento)', '-ing (causa)'], ['bored', 'boring'], ['interested', 'interesting'], ['exhausted', 'exhausting'], ['embarrassed', 'embarrassing']],
    uses: ['-ed = cómo se siente alguien', '-ing = qué produce el sentimiento'],
    aff: ['I was very disappointed with the result.|Me decepcionó mucho el resultado.', 'The lesson was really interesting.|La clase fue muy interesante.'],
    neg: ["I'm not interested in politics.|No me interesa la política."],
    q: ['Are you excited about the trip?|¿Estás entusiasmado con el viaje?'],
    err: ["I'm very boring in this class.|I'm very bored in this class.|Sentimiento → -ed.", 'The trip was very excited.|The trip was very exciting.|Causa → -ing.'],
    ex: [
      "? The film was so ___ that I fell asleep. | bored | *boring | bore >> Causa → -ing.",
      "? I was ___ when I heard the news. | shocking | *shocked | shock >> Sentimiento → -ed.",
      "_ It's been a long, ___ (tire) day. = tiring >> Causa → -ing.",
      "_ Are you ___ (interest) in art? = interested >> Sentimiento → -ed.",
      "s I was really [embarrassing] when I fell over. = embarrassed >> Sentimiento → -ed.",
      "o The instructions were very confusing. >> Causa → -ing.",
      "t Estoy aburrido. = I'm bored ; I am bored >> Sentimiento → bored.",
      "m bored = cómo me siento ; boring = cómo es la película ; annoyed = molesto (persona) ; annoying = que molesta >> -ed / -ing.",
      "?2 'Jane is boring' means… | Jane feels bored. | *Jane makes other people bored. | Jane is tired. >> -ing = causa.",
      "f2 The match was very excited. = The match was very exciting >> Causa → -ing.",
    ],
  },
  {
    n: 99, t: 'Adjectives: a nice new house, you look tired', es: 'Orden de adjetivos y verbos copulativos', tags: ['adjectives', 'word-order'],
    goals: ['Ordenar adjetivos de opinión y de hecho', 'Seguir el orden tamaño-edad-color-origen-material', 'Usar adjetivos (no adverbios) después de look, feel, sound…'],
    x: `Cuando hay varios adjetivos, los de **opinión** van **antes** que los de **hecho**: *a **nice** **new** house, a **beautiful** **old** city*.

Orden habitual de los de hecho: **tamaño → largo/forma → edad → color → origen → material → uso**: *a **large old red** brick building, a **small black plastic** bag*.

Después de **be, look, feel, sound, taste, smell, seem** usamos **adjetivos**, no adverbios: *You look tired. This soup tastes good. Don't be so nervous.*`,
    form: [['Opinión', 'Tamaño', 'Edad', 'Color', 'Origen', 'Material', 'Sustantivo'], ['lovely', 'big', 'old', 'red', 'Italian', 'leather', 'bag']],
    uses: ['Opinión antes que hecho', 'Orden tamaño-edad-color-origen-material', 'look/feel/sound + adjetivo'],
    aff: ['She has long black hair.|Tiene el pelo largo y negro.', 'We stayed in a lovely little hotel.|Nos quedamos en un hotelito precioso.', 'You look happy today.|Hoy se te ve contento.'],
    neg: ["The food didn't taste very good.|La comida no tenía muy buen sabor."],
    q: ['Does this dress look nice on me?|¿Me queda bien este vestido?'],
    err: ['She has black long hair.|She has long black hair.|Largo antes que color.', 'This soup tastes well.|This soup tastes good.|taste + adjetivo.'],
    cmp: { w: [100], x: 'Adjetivo vs. adverbio: unidad 100.' },
    ex: [
      "? She bought a ___ dress. | red beautiful | *beautiful red | red and beautiful >> Opinión antes que color.",
      "? He lives in a ___ house. | stone old big | *big old stone | old big stone >> Tamaño → edad → material.",
      "? You look ___. Are you OK? | badly | *pale | palely >> look + adjetivo.",
      "_ This milk smells ___ (bad). I think it's off. = bad >> smell + adjetivo.",
      "s The music sounds [nicely]. = nice >> sound + adjetivo.",
      "o It was a long hot summer day. >> Orden de adjetivos.",
      "t Tengo un auto viejo y rojo. = I have an old red car ; I've got an old red car >> Edad antes que color.",
      "?2 'a ___ table' | wooden round small | *small round wooden | round wooden small >> Tamaño → forma → material.",
      "f2 I feel very well-ly today. = I feel very well today ; I feel very good today >> feel + adjetivo.",
    ],
  },
  {
    n: 100, t: 'Adjectives and adverbs 1 (quick/quickly)', es: 'Adjetivos y adverbios (1)', tags: ['adjectives', 'adverbs'], pre: [99],
    goals: ['Formar adverbios con -ly', 'Usar el adjetivo con sustantivos y el adverbio con verbos', 'Usar adverbio + adjetivo (seriously ill)'],
    x: `El **adjetivo** describe un **sustantivo**: *a careful driver, a quiet voice*.
El **adverbio** describe un **verbo** (cómo se hace algo): *He drives carefully. She spoke quietly.*

Formación: adjetivo + **-ly** (quick → quickly); -y → -ily (easy → easily); -le → -ly (terrible → terribly); -ic → -ically.

Los adverbios también modifican **adjetivos** y otros adverbios: *reasonably cheap, terribly sorry, extremely quickly*. En el Workbook (unidad 8) se practican collocations como *highly praised, deeply disappointed, perfectly reasonable*.`,
    form: [['Adjetivo', 'Adverbio'], ['quick', 'quickly'], ['careful', 'carefully'], ['easy', 'easily'], ['terrible', 'terribly']],
    uses: ['Adjetivo + sustantivo', 'Verbo + adverbio', 'Adverbio + adjetivo'],
    aff: ['Please drive carefully.|Por favor, manejá con cuidado.', 'She speaks English fluently.|Habla inglés con fluidez.', 'I was deeply disappointed.|Estaba profundamente decepcionado.'],
    neg: ["He didn't do the work very carefully.|No hizo el trabajo con mucho cuidado."],
    q: ['Why are you walking so slowly?|¿Por qué caminás tan despacio?'],
    err: ['He drives very careful.|He drives very carefully.|Verbo → adverbio.', "It's a perfect reasonable price.|It's a perfectly reasonable price.|Adverbio + adjetivo."],
    cmp: { w: [101], x: 'Adverbios irregulares (well, fast, hard, late): unidad 101.' },
    ex: [
      "? Please speak ___. The baby is asleep. | quiet | *quietly | quieter >> Verbo → adverbio.",
      "? She's a very ___ driver. | carefully | *careful | care >> Sustantivo → adjetivo.",
      "_ I'm ___ (terrible) sorry. = terribly >> Adverbio + adjetivo.",
      "_ He answered the question ___ (easy). = easily >> -y → -ily.",
      "s Her new book was [high] praised. = highly >> Adverbio + participio (collocation del workbook).",
      "o The children played happily in the garden. >> Verbo + adverbio.",
      "t Habla muy rápido. = He speaks very quickly ; She speaks very quickly ; He speaks very fast ; She speaks very fast >> Verbo + adverbio.",
      "m deeply = disappointed ; highly = praised ; perfectly = reasonable ; seriously = ill >> Collocations adverbio + adjetivo.",
      "f2 The exam was surprising easy. = The exam was surprisingly easy >> Adverbio + adjetivo.",
    ],
  },
  {
    n: 101, t: 'Adjectives and adverbs 2 (well, fast, late, hard/hardly)', es: 'Adjetivos y adverbios (2)', tags: ['adjectives', 'adverbs'], pre: [100],
    goals: ['Usar well como adverbio de good', 'Usar fast, hard, late, early como adverbios', 'Distinguir hard/hardly y late/lately'],
    x: `**good** (adjetivo) → **well** (adverbio): *She's a good singer. She sings well.* (well también = sano: *I don't feel well*.)

**fast, hard, late, early** son iguales como adjetivo y adverbio: *He drives fast. She works hard. I got up late.*

**hardly** = casi no (no es el adverbio de hard): *I hardly slept last night.* **hardly any / hardly ever**.
**lately** = últimamente (no es "tarde"): *Have you seen her lately?*`,
    form: [['Adjetivo', 'Adverbio'], ['good', 'well'], ['fast', 'fast'], ['hard', 'hard (≠ hardly = casi no)'], ['late', 'late (≠ lately = últimamente)']],
    uses: ['good → well', 'fast/hard/late sin -ly', 'hardly = casi no', 'lately = últimamente'],
    aff: ['You speak English very well.|Hablás inglés muy bien.', 'She works very hard.|Trabaja mucho.', 'I hardly know him.|Casi no lo conozco.'],
    neg: ["I hardly ever go to the cinema.|Casi nunca voy al cine."],
    q: ['Have you been busy lately?|¿Estuviste ocupado últimamente?'],
    err: ['She plays tennis very good.|She plays tennis very well.|Verbo → well.', 'He works hardly.|He works hard.|hard es adverbio; hardly = casi no.'],
    ex: [
      "? You did the exam very ___. Congratulations! | good | *well | goodly >> Verbo → well.",
      "? He drives too ___. | fastly | *fast | faster than >> fast es adverbio.",
      "_ I was so tired I could ___ keep my eyes open. = hardly >> hardly = casi no.",
      "_ Have you heard from Tom ___? = lately ; recently >> lately = últimamente.",
      "s You've been working very [hardly]. = hard >> hard (adverbio).",
      "o I hardly ever eat meat. >> hardly ever = casi nunca.",
      "t Casi no dormí anoche. = I hardly slept last night >> hardly.",
      "?2 'The train arrived ___.' (= not on time) | lately | *late | latest >> late = tarde.",
      "f2 I don't feel good-ly today. = I don't feel well today ; I do not feel well today >> well = sano.",
    ],
  },
  {
    n: 102, t: 'so and such', es: 'so y such', tags: ['adjectives', 'adverbs'],
    goals: ['Usar so + adjetivo/adverbio', 'Usar such (a) + (adjetivo) + sustantivo', 'Usar so/such … that'],
    x: `**so** + **adjetivo** o **adverbio**: *It's so cold today. She speaks so quickly.*

**such** + (adjetivo) + **sustantivo**: *It was such a nice day. They're such nice people.* Con singular contable: **such a/an**.

Ambos con **that** para el resultado: *It was **so** hot **that** we stayed inside. It was **such** a hot day **that**…*

**so much / so many / so long** y **such a lot of / such a long time**.

En el Workbook (unidad 18): *I have never read **such a** long book.*`,
    form: [['so', 'such'], ['so + adjetivo', 'such a + adjetivo + sustantivo singular'], ["It's so beautiful.", "It's such a beautiful place."], ['so many people', 'such a lot of people']],
    uses: ['so + adjetivo/adverbio', 'such (a) + sustantivo', 'so/such … that'],
    aff: ['The film was so funny!|¡La película fue tan graciosa!', 'It was such a good party.|Fue una fiesta tan buena.', 'I was so tired that I fell asleep.|Estaba tan cansado que me quedé dormido.'],
    neg: ["I didn't know it was such a long way.|No sabía que era tan lejos."],
    q: ['Why are you so angry?|¿Por qué estás tan enojado?'],
    err: ['It was so nice day.|It was such a nice day.|Sustantivo → such a.', 'I have never read a such long book.|I have never read such a long book.|such a (orden).'],
    ex: [
      "? It was ___ a lovely evening. | so | *such | very >> such a + sustantivo.",
      "? The weather was ___ bad that we stayed at home. | such | *so | such a >> so + adjetivo.",
      "_ They are ___ friendly people. = such >> such + adjetivo + plural.",
      "_ I've never seen ___ many people in one place. = so >> so many.",
      "s It was [so] a long journey. = such >> such a + sustantivo.",
      "o The story was so complicated that I gave up. >> so … that (workbook unidad 18).",
      "t ¡Es una casa tan linda! = It's such a nice house ; It's such a beautiful house ; It's such a lovely house ; It is such a nice house >> such a.",
      "?2 'I didn't know you had ___ beautiful garden.' | so | *such a | such >> such a + singular.",
      "f2 I have never read a such long book as this one. = I have never read such a long book as this one ; I've never read such a long book as this one >> Workbook unidad 18.",
    ],
  },
  {
    n: 103, t: 'enough and too', es: 'enough y too', tags: ['adjectives', 'quantifiers'], pre: [102],
    goals: ['Usar enough después de adjetivos y antes de sustantivos', 'Usar too + adjetivo (demasiado)', 'Usar too/enough + for … + to'],
    x: `**enough**:
• **antes** de un sustantivo: *enough money, enough time*.
• **después** de un adjetivo/adverbio: *old enough, fast enough* (no *enough old*).

**too** + adjetivo/adverbio = **demasiado** (hay un problema): *It's too expensive.* **too much / too many** + sustantivo.

Con **for** y **to**: *It's too cold **for** swimming / **to** swim. He's not old enough **to** drive. The box was too heavy (for me) to carry.*

No confundir **too** (demasiado) con **very** (muy).`,
    form: [['Estructura', 'Ejemplo'], ['enough + sustantivo', 'enough chairs'], ['adjetivo + enough', 'big enough'], ['too + adjetivo', 'too small'], ['too + adj + to', 'too tired to walk']],
    uses: ['enough + sustantivo / adjetivo + enough', 'too = demasiado', 'too / enough + to + verbo'],
    aff: ["There isn't enough time.|No hay suficiente tiempo.", "She's old enough to decide.|Tiene edad suficiente para decidir.", "This coffee is too hot to drink.|Este café está demasiado caliente para tomarlo."],
    neg: ["The room isn't big enough for six people.|La habitación no es lo suficientemente grande para seis personas."],
    q: ['Have you got enough money?|¿Tenés suficiente plata?'],
    err: ["He isn't enough old to drive.|He isn't old enough to drive.|adjetivo + enough.", 'Hardback books are much too expensive for buy.|Hardback books are much too expensive to buy.|too + adj + to.'],
    ex: [
      "? Is the water warm ___ for swimming? | enough warm | *enough | too >> adjetivo + enough.",
      "? We haven't got ___ for everyone. | chairs enough | *enough chairs | too chairs >> enough + sustantivo.",
      "_ This bag is ___ heavy for me to carry. = too >> too = demasiado.",
      "_ There are ___ many people here. Let's go. = too >> too many.",
      "s The room isn't big enough for six people. >> Correcta: adjetivo + enough.",
      "o The coffee is too hot to drink. >> too + adj + to.",
      "t No hay suficientes libros. = There aren't enough books ; There are not enough books >> enough + sustantivo.",
      "?2 Not ___ were ordered. | books enough | *enough books | too books >> Workbook unidad 18.",
      "f2 You're too young for drive. = You're too young to drive ; You are too young to drive >> too + adj + to.",
    ],
  },
  {
    n: 104, t: 'quite, pretty, rather and fairly', es: 'quite, pretty, rather, fairly', tags: ['adverbs'],
    goals: ['Usar quite/pretty/rather/fairly = bastante', 'Ubicar quite a + adjetivo + sustantivo', 'Entender quite = completamente con algunos adjetivos'],
    x: `**quite, pretty, rather, fairly** = **bastante** (menos que *very*):
• **quite / pretty**: muy comunes (pretty es informal): *It's quite cold. The film was pretty good.*
• **rather**: a menudo con ideas **negativas** o de sorpresa: *It's rather expensive.*
• **fairly**: más débil: *I speak French fairly well.*

Orden: **quite a / rather a** + adjetivo + sustantivo (*quite a good film*), pero **a fairly / a pretty** + adjetivo (*a fairly good film*).

Con adjetivos "extremos" (*right, sure, different, impossible, amazing*) **quite** = **completamente**: *You're quite right.*`,
    form: [['Palabra', 'Ejemplo'], ['quite', "It's quite good / quite a good book."], ['pretty', 'pretty expensive (informal)'], ['rather', "It's rather cold."], ['fairly', 'a fairly easy test']],
    uses: ['Grado moderado', 'quite a + adj + sustantivo', 'quite = completamente con ciertos adjetivos'],
    aff: ["It's quite a long way.|Es bastante lejos.", 'The test was fairly easy.|El examen fue bastante fácil.', "You're quite right.|Tenés toda la razón."],
    neg: ["I'm not quite sure.|No estoy del todo seguro."],
    q: ['Was it pretty difficult?|¿Fue bastante difícil?'],
    err: ["It's a quite good film.|It's quite a good film.|quite a + adj + sustantivo.", "You're fairly right.|You're quite right.|quite = completamente."],
    ex: [
      "? It's ___ restaurant. | a quite good | *quite a good | quite good a >> quite a + adj + sustantivo.",
      "? 'Are you sure?' 'Yes, ___ sure.' | rather | *quite | fairly >> quite = completamente.",
      "_ The weather was ___ cold, but we went out anyway. = quite ; rather ; pretty ; fairly >> bastante.",
      "s It was a [quite] interesting book. = fairly >> a fairly + adj (o quite an interesting book).",
      "o The film was pretty good. >> pretty = bastante (informal).",
      "t Mi inglés es bastante bueno. = My English is quite good ; My English is fairly good ; My English is pretty good ; My English is rather good >> quite/fairly/pretty.",
      "?2 'It's ___ a pity you can't come.' | fairly | *rather | very >> rather a pity.",
      "f2 It's a quite long journey. = It's quite a long journey ; It is quite a long journey ; It's a fairly long journey >> Orden.",
    ],
  },
  {
    n: 105, t: 'Comparative 1 (cheaper, more expensive etc.)', es: 'Comparativos (1)', tags: ['comparison', 'adjectives'],
    goals: ['Formar comparativos con -er y more', 'Usar than', 'Conocer los irregulares better, worse, further'],
    x: `**Adjetivos cortos** (una sílaba, y los de dos terminados en -y) → **-er**: *cheap → cheaper, big → bigger, easy → easier*.

**Adjetivos largos** → **more**: *more expensive, more interesting*. También **less**: *less expensive*.

**Irregulares**: good → **better**, bad → **worse**, far → **further/farther**.

Usamos **than**: *Flat shoes are more comfortable than high-heeled ones.* (ejemplo del Workbook, unidad 1).

Adverbios: *more slowly, more carefully*; *faster, harder, earlier*.`,
    form: [['Adjetivo', 'Comparativo'], ['cheap', 'cheaper'], ['big', 'bigger'], ['easy', 'easier'], ['expensive', 'more expensive'], ['good / bad / far', 'better / worse / further']],
    uses: ['-er para cortos', 'more/less para largos', 'Irregulares', '+ than'],
    aff: ['Cotton shirts are cheaper than woollen ones.|Las camisas de algodón son más baratas que las de lana.', 'Jeans are more casual than trousers.|Los jeans son más informales que los pantalones.', 'Her English is better than mine.|Su inglés es mejor que el mío.'],
    neg: ["This hotel isn't more expensive than the other one.|Este hotel no es más caro que el otro."],
    q: ['Is London bigger than Paris?|¿Londres es más grande que París?'],
    err: ['This is more cheap.|This is cheaper.|Corto → -er.', 'She is more better than me.|She is better than me.|No combinar more + -er.'],
    cmp: { w: [106, 107, 108], x: 'much better / any better (106), as … as (107), superlativos (108).' },
    ex: [
      "? This book is ___ than the other one. | more interesting than | *more interesting | interestinger >> Largo → more.",
      "? My new flat is ___ than the old one. | more big | *bigger | biger >> big → bigger.",
      "_ Supermodels are ___ (thin) than other people. = thinner >> thin → thinner (Workbook unidad 1).",
      "_ Your English is ___ (good) than mine. = better >> good → better.",
      "s Jogging is less [dangerouser] than bungee-jumping. = dangerous >> less + adjetivo base.",
      "o New York is bigger than San Francisco. >> -er + than (Workbook unidad 1).",
      "t Este examen es más fácil que el otro. = This exam is easier than the other one ; This test is easier than the other one ; This exam is easier than the other >> easy → easier.",
      "m good = better ; bad = worse ; far = further ; happy = happier >> Comparativos irregulares y -y.",
      "?2 'The weather today is ___ than yesterday.' | badder | *worse | more bad >> bad → worse.",
      "f2 Clubbing is more tiringer than studying. = Clubbing is more tiring than studying >> more + adjetivo largo.",
    ],
  },
  {
    n: 106, t: 'Comparative 2 (much better / any better etc.)', es: 'Comparativos (2)', tags: ['comparison'], pre: [105],
    goals: ['Modificar comparativos con much, a lot, a bit, far', 'Usar any/no + comparativo', 'Usar comparativo + and + comparativo y the … the …'],
    x: `Para decir **cuánto** más: **much / a lot / far** (mucho) y **a bit / a little / slightly** (un poco) + comparativo: *much better, a bit cheaper, far more expensive.*

**any / no** + comparativo: *Is it any better? It's no bigger than a coin.*

**cada vez más**: comparativo **and** comparativo: *It's getting **colder and colder**. More and more people…*

**the … the …** = cuanto más…, más…: ***The sooner*** *we leave, **the earlier** we'll arrive.* ***The more*** *you practise, **the better** you get.*`,
    form: [['Estructura', 'Ejemplo'], ['much / a lot + comparativo', 'much cheaper'], ['a bit / slightly + comparativo', 'a bit older'], ['X-er and X-er', 'bigger and bigger'], ['the … the …', 'the more, the better']],
    uses: ['much / a bit + comparativo', 'any / no + comparativo', 'cada vez más', 'the … the …'],
    aff: ['Your English is much better now.|Tu inglés está mucho mejor ahora.', "It's getting warmer and warmer.|Está haciendo cada vez más calor.", 'The more I know him, the more I like him.|Cuanto más lo conozco, más me gusta.'],
    neg: ["I'm not any better today.|Hoy no estoy nada mejor."],
    q: ['Could you speak a bit more slowly?|¿Podrías hablar un poco más despacio?'],
    err: ["It's very better.|It's much better.|very no va con comparativos.", 'The more you study, more you learn.|The more you study, the more you learn.|the … the …'],
    ex: [
      "? This hotel is ___ than the last one. | very cheaper | *much cheaper | more cheaper >> much + comparativo.",
      "? Prices are getting ___. | high and high | *higher and higher | more high and high >> cada vez más.",
      "_ The ___ (soon) we start, the sooner we'll finish. = sooner >> the … the …",
      "_ Could you speak a ___ more slowly? = bit ; little >> a bit / a little.",
      "s She's [very] older than her brother. = much >> much + comparativo.",
      "o The more you practise, the better you get. >> the … the …",
      "t Es mucho más caro de lo que pensaba. = It's much more expensive than I thought ; It's a lot more expensive than I thought ; It is much more expensive than I thought >> much + comparativo.",
      "?2 'Is your headache ___ better?' 'No, it's the same.' | some | *any | very >> any + comparativo en preguntas.",
      "f2 The more I read, more I understand. = The more I read, the more I understand >> the … the …",
    ],
  },
  {
    n: 107, t: 'Comparative 3 (as … as / than)', es: 'as … as / than', tags: ['comparison'], pre: [105],
    goals: ['Usar as … as e not as … as', 'Usar the same as', 'Usar than me / than I am'],
    x: `**as + adjetivo/adverbio + as** = igual de: *She's as tall as her brother.*
**not as … as** = menos … que: *This year the prices are **not as low as** last year* (ejemplo del Workbook, unidad 1).

**twice as … as, three times as … as**: *It's twice as expensive as before.*

**the same (…) as**: *My phone is the same as yours.*

Después de **than / as** podemos usar **me/him** o **I am / he is**: *You're taller than me / than I am.*`,
    form: [['Estructura', 'Ejemplo'], ['as + adj + as', "I'm as tall as you."], ['not as + adj + as', "It's not as cold as yesterday."], ['twice as … as', 'twice as big as'], ['the same as', 'the same as mine']],
    uses: ['Igualdad: as … as', 'Inferioridad: not as … as', 'Multiplicadores', 'the same as'],
    aff: ['He is as old as my father.|Tiene la misma edad que mi papá.', 'Your bag is the same as mine.|Tu bolso es igual al mío.'],
    neg: ["This exercise isn't as difficult as I thought.|Este ejercicio no es tan difícil como pensaba.", "Ben won the race, but George wasn't as fast as him.|Ben ganó la carrera, pero George no fue tan rápido como él."],
    q: ['Is it as good as the first film?|¿Es tan buena como la primera película?'],
    err: ["It's not so expensive than I thought.|It's not as expensive as I thought.|not as … as.", 'My car is the same like yours.|My car is the same as yours.|the same as.'],
    ex: [
      "? This year prices are ___ as last year. | not as lower | *not as low | not lower >> not as + adjetivo + as.",
      "? Your phone is the same ___ mine. | like | *as | than >> the same as.",
      "_ I can't run as fast ___ you. = as >> as … as.",
      "_ A car costs twice ___ much as a motorbike. = as >> twice as … as.",
      "s He's not as tall [than] his sister. = as >> not as … as.",
      "o This exercise is not as difficult as I thought. >> not as … as (Workbook unidad 1).",
      "t No es tan caro como pensaba. = It's not as expensive as I thought ; It isn't as expensive as I thought ; It is not as expensive as I thought >> not as … as.",
      "?2 'Ben won the race but George came second.' → George was ___. | as fast as Ben | *not as fast as Ben | faster than Ben >> Workbook unidad 1.",
      "f2 She's as clever like her mother. = She's as clever as her mother ; She is as clever as her mother >> as … as.",
    ],
  },
  {
    n: 108, t: 'Superlative (the longest, the most enjoyable etc.)', es: 'Superlativos', tags: ['comparison'], pre: [105],
    goals: ['Formar superlativos con -est y most', 'Usar in/of después del superlativo', 'Usar superlativo + present perfect (the best I’ve ever…)'],
    x: `**Superlativo**: **the + -est** (cortos) o **the most / the least** (largos): *the cheapest, the biggest, the most expensive*. Irregulares: **the best, the worst, the furthest**.

Después usamos **in** con lugares/grupos (*the tallest building **in** the world*) y **of** con períodos o grupos de cosas (*the best day **of** my life*).

Con **present perfect**: *It's **the best** film **I've ever seen**.*

**one of the** + superlativo + **plural**: *one of the most famous singers*.`,
    form: [['Adjetivo', 'Superlativo'], ['long', 'the longest'], ['easy', 'the easiest'], ['important', 'the most important'], ['good / bad', 'the best / the worst']],
    uses: ['the -est / the most', 'in + lugar, of + grupo/período', '+ I’ve ever…', 'one of the + superlativo + plural'],
    aff: ["It's the oldest building in the city.|Es el edificio más antiguo de la ciudad.", "That was the best meal I've ever had.|Fue la mejor comida que comí en mi vida.", "She's one of the most famous actresses in Spain.|Es una de las actrices más famosas de España."],
    neg: ["It's not the cheapest option.|No es la opción más barata."],
    q: ["What's the highest mountain in the world?|¿Cuál es la montaña más alta del mundo?"],
    err: ["It's the most big city.|It's the biggest city.|Corto → -est.", "He's the best player of the team.|He's the best player in the team.|Grupo/lugar → in."],
    ex: [
      "? It's the ___ day of the year. | most short | *shortest | shorter >> short → the shortest.",
      "? Everest is the highest mountain ___ the world. | of | *in | at >> Lugar → in.",
      "_ It's the ___ (good) film I've ever seen. = best >> good → best.",
      "_ She's one of the most famous ___ (writer) in the country. = writers >> one of the + plural.",
      "s It was the [baddest] day of my life. = worst >> bad → worst.",
      "o It was the most exciting match I've ever seen. >> the most + I've ever.",
      "t Es el restaurante más caro de la ciudad. = It's the most expensive restaurant in the city ; It's the most expensive restaurant in town ; It is the most expensive restaurant in the city >> the most + in.",
      "?2 'The jeans are certainly ___!' | more expensive | *the most expensive | most expensive the >> Superlativo (texto del Workbook unidad 1).",
      "f2 He's the most tall boy in the class. = He's the tallest boy in the class ; He is the tallest boy in the class >> tall → tallest.",
    ],
  },
  {
    n: 109, t: 'Word order 1: verb + object; place and time', es: 'Orden (1): verbo + objeto, lugar y tiempo', tags: ['word-order'],
    goals: ['No separar el verbo de su objeto', 'Ordenar lugar antes de tiempo', 'Ordenar oraciones con varios complementos'],
    x: `En inglés el **verbo** y su **objeto** van **juntos**: *I like **Italian food** very much* (no *I like very much Italian food*). *Did you **see Tom** yesterday?*

Con **lugar y tiempo**, normalmente **lugar → tiempo**: *I'm going **to Paris on Monday**. We arrived **at the hotel early**.*

El tiempo también puede ir al **principio**: *On Monday I'm going to Paris.*

El Workbook (unidad 6) tiene un ejercicio de ordenar palabras: *(Yesterday) I bought her a lovely blue silk dress (yesterday).*`,
    form: [['Sujeto', 'Verbo', 'Objeto', 'Lugar', 'Tiempo'], ['I', 'met', 'Anna', 'in town', 'yesterday'], ['She', 'bought', 'a dress', 'at the market', 'last week']],
    uses: ['Verbo + objeto juntos', 'Lugar antes que tiempo', 'Tiempo al principio o al final'],
    aff: ['I speak English quite well.|Hablo inglés bastante bien.', 'We went to the beach on Sunday.|El domingo fuimos a la playa.'],
    neg: ["I didn't see anybody at the party last night.|No vi a nadie en la fiesta anoche."],
    q: ['Did you go to the gym this morning?|¿Fuiste al gimnasio esta mañana?'],
    err: ['I like very much chocolate.|I like chocolate very much.|Verbo + objeto juntos.', 'I went yesterday to the cinema.|I went to the cinema yesterday.|Lugar antes que tiempo.'],
    ex: [
      "? Which is correct? | I like very much football. | *I like football very much. | I very much football like. >> Verbo + objeto juntos.",
      "o I walk to work every morning. >> Lugar → tiempo.",
      "o She speaks French very well. >> Verbo + objeto + adverbio.",
      "b I / buy / a new phone / last week = I bought a new phone last week ; Last week I bought a new phone >> Objeto antes de tiempo.",
      "s I met my friends in town yesterday. >> Correcta: objeto → lugar → tiempo.",
      "t Llegamos al hotel tarde. = We arrived at the hotel late ; We got to the hotel late >> Lugar → tiempo.",
      "?2 'We went ___.' | last night to the cinema | *to the cinema last night | the cinema to last night >> Lugar → tiempo.",
      "f2 I bought yesterday a lovely blue silk dress for her. = I bought her a lovely blue silk dress yesterday ; Yesterday I bought her a lovely blue silk dress ; I bought a lovely blue silk dress for her yesterday >> Workbook unidad 6.",
      "b2 quite a few / members of the audience / be / students = Quite a few members of the audience were students >> Workbook unidad 6.",
    ],
  },
  {
    n: 110, t: 'Word order 2: adverbs with the verb', es: 'Orden (2): adverbios con el verbo', tags: ['word-order', 'adverbs'], pre: [109],
    goals: ['Colocar always/never/also/just/probably', 'Ubicarlos antes del verbo principal y después de be/auxiliar', 'Ordenar con dos auxiliares'],
    x: `Adverbios como **always, often, usually, never, also, just, already, probably, all, both** van **en el medio** de la oración:
• **antes** del verbo principal: *I **always** drive to work. She **also** speaks Spanish.*
• **después** de **be**: *You're **always** late.*
• **después del primer auxiliar**: *I have **never** been there. They will **probably** come.*

Con negativas: **probably** va **antes** de won't/doesn't: *He **probably** won't come.*

Workbook (unidad 6): *Alan never used to be keen on swimming.*`,
    form: [['Posición', 'Ejemplo'], ['antes del verbo', 'I often go out.'], ['después de be', "She's often late."], ['después del 1.er auxiliar', "I've just finished."], ['probably + negativa', "I probably won't go."]],
    uses: ['Antes del verbo principal', 'Después de be y del auxiliar', 'probably antes de won’t'],
    aff: ['I usually get up at seven.|Normalmente me levanto a las siete.', "I've already eaten.|Ya comí.", 'They both live in Rome.|Los dos viven en Roma.'],
    neg: ["He probably won't be here.|Probablemente no esté acá."],
    q: ['Do you always walk to work?|¿Siempre vas caminando al trabajo?'],
    err: ['I go always to work by bus.|I always go to work by bus.|always antes del verbo.', 'She is late always.|She is always late.|Después de be.'],
    ex: [
      "? Which is correct? | I drink never coffee. | *I never drink coffee. | Never I drink coffee. >> Antes del verbo principal.",
      "? She ___ late. | always is | *is always | is late always >> Después de be.",
      "o I have never been to Japan. >> Después del primer auxiliar.",
      "o He probably won't come to the party. >> probably antes de won't.",
      "s We often go to the cinema. >> Correcta: often antes del verbo principal.",
      "t Ya terminé. = I've already finished ; I have already finished >> Después del auxiliar.",
      "b Alan / never / use to / be / keen on swimming = Alan never used to be keen on swimming >> Workbook unidad 6.",
      "?2 'We ___ for a long time.' | have known each other both | *have both known each other | both have known each other >> both después del primer auxiliar.",
      "f2 She speaks also German. = She also speaks German >> also antes del verbo principal.",
    ],
  },
  {
    n: 111, t: 'still any more yet already', es: 'still, any more, yet, already', tags: ['adverbs', 'time'],
    goals: ['Usar still (todavía, continúa)', 'Usar not … any more (ya no)', 'Usar yet y already'],
    x: `**still** = algo **continúa** (no terminó): *It's 10 o'clock and Tom is **still** in bed.* Va en el medio de la oración. Negativa con still = todavía no, con sorpresa: *She **still** hasn't called.*

**not … any more / any longer / no longer** = algo **terminó**: *Ann doesn't work here **any more**. She **no longer** works here.*

**yet** = hasta ahora (preguntas y negativas, al final): *Has it stopped raining **yet**? I haven't finished **yet**.*

**already** = antes de lo esperado: *I've **already** done it.*`,
    form: [['Palabra', 'Significado', 'Ejemplo'], ['still', 'todavía (sigue)', "He's still here."], ['not … any more', 'ya no', "She doesn't live here any more."], ['yet', 'todavía / ya (preguntas)', "Have you finished yet?"], ['already', 'ya (antes de lo esperado)', "I've already eaten."]],
    uses: ['still = continúa', 'not any more = terminó', 'yet en preguntas y negativas', 'already = antes de lo esperado'],
    aff: ['Do you still live in the same house?|¿Seguís viviendo en la misma casa?', "I've already paid.|Ya pagué."],
    neg: ["He doesn't work here any more.|Ya no trabaja acá.", "The film hasn't started yet.|La película todavía no empezó."],
    q: ['Have you done your homework yet?|¿Ya hiciste la tarea?'],
    err: ['I already haven’t finished.|I haven’t finished yet.|Negativa → yet.', "She doesn't work here still.|She doesn't work here any more.|Ya no → any more."],
    ex: [
      "? It's 11 a.m. and he's ___ in bed. | yet | *still | already >> still = continúa.",
      "? I used to smoke, but I don't smoke ___. | yet | *any more | still >> Ya no → any more.",
      "_ Have you finished your work ___? = yet >> yet en preguntas.",
      "_ 'Do you want something to eat?' 'No, thanks. I've ___ eaten.' = already ; just >> already.",
      "s I haven't decided [already]. = yet >> Negativa → yet.",
      "o She no longer lives in London. >> no longer = ya no.",
      "t Todavía no llegaron. = They haven't arrived yet ; They have not arrived yet ; They still haven't arrived >> yet / still.",
      "?2 'I wrote to him a month ago and he ___ hasn't replied.' | yet | *still | already >> still + negativa = sorpresa.",
      "f2 Is it raining still? = Is it still raining >> still en el medio.",
    ],
  },
  {
    n: 112, t: 'even', es: 'even', tags: ['adverbs'],
    goals: ['Usar even para algo sorprendente', 'Usar not even', 'Usar even + comparativo, even if/when/though'],
    x: `**even** = **incluso / hasta**, para algo **sorprendente** o inesperado: *Everybody came to the party, **even** Tom* (que nunca va a fiestas).

Posición: normalmente en el medio de la oración (antes del verbo, después de be/auxiliar): *He **even** cleaned the windows.*

**not even** = ni siquiera: *She didn't **even** say goodbye.*

**even + comparativo** = aún más: *It was hot yesterday, but today it's **even hotter**.*

**even if / even when / even though**: *I'll go **even if** it rains.* (even though → unidad 113).`,
    form: [['Estructura', 'Ejemplo'], ['even + verbo', 'He even paid for us.'], ['not even', "She didn't even call."], ['even + comparativo', 'even better'], ['even if', "even if it's expensive"]],
    uses: ['even = incluso', 'not even = ni siquiera', 'even + comparativo', 'even if / even though'],
    aff: ['He speaks lots of languages, even Chinese.|Habla muchos idiomas, incluso chino.', 'The second film was even better.|La segunda película fue aún mejor.'],
    neg: ["I can't even remember his name.|Ni siquiera me acuerdo de su nombre."],
    q: [],
    err: ["She didn't say even goodbye.|She didn't even say goodbye.|even antes del verbo.", "It's even more better.|It's even better.|even + comparativo."],
    ex: [
      "? The hotel was terrible. There ___ any hot water. | even wasn't | *wasn't even | wasn't evenly >> even después de be. ++ There wasn't even any hot water.",
      "? It was cold yesterday, but today it's ___. | even cold | *even colder | more even colder >> even + comparativo.",
      "_ I'll go to the beach ___ if it rains. = even >> even if.",
      "s The second film was even [more] better. = (quitar more) >> even + comparativo: even better.",
      "o I didn't even know her name. >> not even.",
      "t Ni siquiera me llamó. = He didn't even call me ; She didn't even call me ; He didn't even phone me ; She didn't even phone me >> not even.",
      "?2 'Everyone was there, ___ the manager.' | still | *even | yet >> even = incluso.",
      "f2 It's even more cheaper online. = It's even cheaper online ; It is even cheaper online >> even + comparativo.",
    ],
  },
];

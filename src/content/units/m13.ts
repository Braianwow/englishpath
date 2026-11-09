import type { UnitSrc } from '../dsl';

// Module 13 — Adjectives and adverbs (EGU units 98–112)
export const m13: UnitSrc[] = [
  {
    n: 98, t: 'Adjectives ending in -ing and -ed (boring/bored etc.)', es: 'Adjetivos -ing / -ed', tags: ['adjectives'],
    goals: ['Use -ed for how someone feels', 'Use -ing to describe what causes that feeling', 'Avoid the mistake I am boring'],
    x: `**-ed** = how someone **feels**: *I'm bored. She was surprised. We were tired.*
**-ing** = the thing or person that **causes** the feeling: *The film was boring. The news was surprising. It was a tiring day.*

*Jane is bored* (she feels bored) ≠ *Jane is boring* (she makes other people feel bored).

Common pairs: interested/interesting, excited/exciting, tired/tiring, confused/confusing, disappointed/disappointing, embarrassed/embarrassing, annoyed/annoying, frightened/frightening.`,
    form: [['-ed (sentimiento)', '-ing (causa)'], ['bored', 'boring'], ['interested', 'interesting'], ['exhausted', 'exhausting'], ['embarrassed', 'embarrassing']],
    uses: ['-ed = how someone feels', '-ing = what causes the feeling'],
    aff: ['I was very disappointed with the result.|Me decepcionó mucho el resultado.', 'The lesson was really interesting.|La clase fue muy interesante.'],
    neg: ["I'm not interested in politics.|No me interesa la política."],
    q: ['Are you excited about the trip?|¿Estás entusiasmado con el viaje?'],
    err: ["I'm very boring in this class.|I'm very bored in this class.|A feeling → -ed.", 'The trip was very excited.|The trip was very exciting.|The cause → -ing.'],
    ex: [
      "? The film was so ___ that I fell asleep. | bored | *boring | bore >> The cause → -ing.",
      "? I was ___ when I heard the news. | shocking | *shocked | shock >> A feeling → -ed.",
      "_ It's been a long, ___ (tire) day. = tiring >> The cause → -ing.",
      "_ Are you ___ (interest) in art? = interested >> A feeling → -ed.",
      "s I was really [embarrassing] when I fell over. = embarrassed >> A feeling → -ed.",
      "o The instructions were very confusing. >> The cause → -ing.",
      "o I'm bored with this film. >> A feeling → bored.",
      "m bored = how I feel ; boring = what the film is like ; annoyed = how a person feels ; annoying = what makes you feel that way >> -ed / -ing.",
      "?2 'Jane is boring' means… | Jane feels bored. | *Jane makes other people bored. | Jane is tired. >> -ing = cause.",
      "f2 The match was very excited. = The match was very exciting >> The cause → -ing.",
    ],
  },
  {
    n: 99, t: 'Adjectives: a nice new house, you look tired', es: 'Orden de adjetivos y verbos copulativos', tags: ['adjectives', 'word-order'],
    goals: ['Put opinion adjectives before fact adjectives', 'Follow the order size-age-colour-origin-material', 'Use adjectives (not adverbs) after look, feel, sound…'],
    x: `When there are several adjectives, **opinion** adjectives go **before** **fact** adjectives: *a **nice** **new** house, a **beautiful** **old** city*.

The usual order of fact adjectives: **size → length/shape → age → colour → origin → material → use**: *a **large old red** brick building, a **small black plastic** bag*.

After **be, look, feel, sound, taste, smell, seem** we use **adjectives**, not adverbs: *You look tired. This soup tastes good. Don't be so nervous.*`,
    form: [['Opinión', 'Tamaño', 'Edad', 'Color', 'Origen', 'Material', 'Sustantivo'], ['lovely', 'big', 'old', 'red', 'Italian', 'leather', 'bag']],
    uses: ['Opinion before fact', 'Order: size-age-colour-origin-material', 'look/feel/sound + adjective'],
    aff: ['She has long black hair.|Tiene el pelo largo y negro.', 'We stayed in a lovely little hotel.|Nos quedamos en un hotelito precioso.', 'You look happy today.|Hoy se te ve contento.'],
    neg: ["The food didn't taste very good.|La comida no tenía muy buen sabor."],
    q: ['Does this dress look nice on me?|¿Me queda bien este vestido?'],
    err: ['She has black long hair.|She has long black hair.|Length before colour.', 'This soup tastes well.|This soup tastes good.|taste + adjective.'],
    cmp: { w: [100], x: 'Adjective vs. adverb: unit 100.' },
    ex: [
      "? She bought a ___ dress. | red beautiful | *beautiful red | red and beautiful >> Opinion before colour.",
      "? He lives in a ___ house. | stone old big | *big old stone | old big stone >> Size → age → material.",
      "? You look ___. Are you OK? | badly | *pale | palely >> look + adjective.",
      "_ This milk smells ___ (bad). I think it's off. = bad >> smell + adjective.",
      "s The music sounds [nicely]. = nice >> sound + adjective.",
      "o It was a long hot summer day. >> Adjective order.",
      "o I have an old red car >> Age before colour.",
      "?2 'a ___ table' | wooden round small | *small round wooden | round wooden small >> Size → shape → material.",
      "f2 I feel very well-ly today. = I feel very well today ; I feel very good today >> feel + adjective.",
    ],
  },
  {
    n: 100, t: 'Adjectives and adverbs 1 (quick/quickly)', es: 'Adjetivos y adverbios (1)', tags: ['adjectives', 'adverbs'], pre: [99],
    goals: ['Form adverbs with -ly', 'Use the adjective with nouns and the adverb with verbs', 'Use adverb + adjective (seriously ill)'],
    x: `The **adjective** describes a **noun**: *a careful driver, a quiet voice*.
The **adverb** describes a **verb** (how something is done): *He drives carefully. She spoke quietly.*

Formation: adjective + **-ly** (quick → quickly); -y → -ily (easy → easily); -le → -ly (terrible → terribly); -ic → -ically.

Adverbs also modify **adjectives** and other adverbs: *reasonably cheap, terribly sorry, extremely quickly*. In the Workbook (unit 8) you practise collocations like *highly praised, deeply disappointed, perfectly reasonable*.`,
    form: [['Adjetivo', 'Adverbio'], ['quick', 'quickly'], ['careful', 'carefully'], ['easy', 'easily'], ['terrible', 'terribly']],
    uses: ['Adjective + noun', 'Verb + adverb', 'Adverb + adjective'],
    aff: ['Please drive carefully.|Por favor, manejá con cuidado.', 'She speaks English fluently.|Habla inglés con fluidez.', 'I was deeply disappointed.|Estaba profundamente decepcionado.'],
    neg: ["He didn't do the work very carefully.|No hizo el trabajo con mucho cuidado."],
    q: ['Why are you walking so slowly?|¿Por qué caminás tan despacio?'],
    err: ['He drives very careful.|He drives very carefully.|Verb → adverb.', "It's a perfect reasonable price.|It's a perfectly reasonable price.|Adverb + adjective."],
    cmp: { w: [101], x: 'Irregular adverbs (well, fast, hard, late): unit 101.' },
    ex: [
      "? Please speak ___. The baby is asleep. | quiet | *quietly | quieter >> Verb → adverb.",
      "? She's a very ___ driver. | carefully | *careful | care >> Noun → adjective.",
      "_ I'm ___ (terrible) sorry. = terribly >> Adverb + adjective.",
      "_ He answered the question ___ (easy). = easily >> -y → -ily.",
      "s Her new book was [high] praised. = highly >> Adverb + participle (a collocation from the workbook).",
      "o The children played happily in the garden. >> Verb + adverb.",
      "o He speaks very quickly >> Verb + adverb.",
      "m deeply = disappointed ; highly = praised ; perfectly = reasonable ; seriously = ill >> Adverb + adjective collocations.",
      "f2 The exam was surprising easy. = The exam was surprisingly easy >> Adverb + adjective.",
    ],
  },
  {
    n: 101, t: 'Adjectives and adverbs 2 (well, fast, late, hard/hardly)', es: 'Adjetivos y adverbios (2)', tags: ['adjectives', 'adverbs'], pre: [100],
    goals: ['Use well as the adverb of good', 'Use fast, hard, late, early as adverbs', 'Tell hard/hardly and late/lately apart'],
    x: `**good** (adjective) → **well** (adverb): *She's a good singer. She sings well.* (well also = healthy: *I don't feel well*.)

**fast, hard, late, early** are the same as adjectives and adverbs: *He drives fast. She works hard. I got up late.*

**hardly** = almost not (it is not the adverb of hard): *I hardly slept last night.* **hardly any / hardly ever**.
**lately** = recently (it doesn't mean "late"): *Have you seen her lately?*`,
    form: [['Adjetivo', 'Adverbio'], ['good', 'well'], ['fast', 'fast'], ['hard', 'hard (≠ hardly = casi no)'], ['late', 'late (≠ lately = últimamente)']],
    uses: ['good → well', 'fast/hard/late without -ly', 'hardly = almost not', 'lately = recently'],
    aff: ['You speak English very well.|Hablás inglés muy bien.', 'She works very hard.|Trabaja mucho.', 'I hardly know him.|Casi no lo conozco.'],
    neg: ["I hardly ever go to the cinema.|Casi nunca voy al cine."],
    q: ['Have you been busy lately?|¿Estuviste ocupado últimamente?'],
    err: ['She plays tennis very good.|She plays tennis very well.|Verb → well.', 'He works hardly.|He works hard.|hard is an adverb; hardly = almost not.'],
    ex: [
      "? You did the exam very ___. Congratulations! | good | *well | goodly >> Verb → well.",
      "? He drives too ___. | fastly | *fast | faster than >> fast is an adverb.",
      "_ I was so tired I could ___ keep my eyes open. = hardly >> hardly = almost not.",
      "_ Have you heard from Tom ___? = lately ; recently >> lately = recently.",
      "s You've been working very [hardly]. = hard >> hard (adverb).",
      "o I hardly ever eat meat. >> hardly ever = almost never.",
      "o I hardly slept last night >> hardly.",
      "?2 'The train arrived ___.' (= not on time) | lately | *late | latest >> late = not on time.",
      "f2 I don't feel good-ly today. = I don't feel well today ; I do not feel well today >> well = healthy.",
    ],
  },
  {
    n: 102, t: 'so and such', es: 'so y such', tags: ['adjectives', 'adverbs'],
    goals: ['Use so + adjective/adverb', 'Use such (a) + (adjective) + noun', 'Use so/such … that'],
    x: `**so** + **adjective** or **adverb**: *It's so cold today. She speaks so quickly.*

**such** + (adjective) + **noun**: *It was such a nice day. They're such nice people.* With a singular countable noun: **such a/an**.

Both with **that** for the result: *It was **so** hot **that** we stayed inside. It was **such** a hot day **that**…*

**so much / so many / so long** and **such a lot of / such a long time**.

In the Workbook (unit 18): *I have never read **such a** long book.*`,
    form: [['so', 'such'], ['so + adjetivo', 'such a + adjetivo + sustantivo singular'], ["It's so beautiful.", "It's such a beautiful place."], ['so many people', 'such a lot of people']],
    uses: ['so + adjective/adverb', 'such (a) + noun', 'so/such … that'],
    aff: ['The film was so funny!|¡La película fue tan graciosa!', 'It was such a good party.|Fue una fiesta tan buena.', 'I was so tired that I fell asleep.|Estaba tan cansado que me quedé dormido.'],
    neg: ["I didn't know it was such a long way.|No sabía que era tan lejos."],
    q: ['Why are you so angry?|¿Por qué estás tan enojado?'],
    err: ['It was so nice day.|It was such a nice day.|A noun → such a.', 'I have never read a such long book.|I have never read such a long book.|such a (order).'],
    ex: [
      "? It was ___ a lovely evening. | so | *such | very >> such a + noun.",
      "? The weather was ___ bad that we stayed at home. | such | *so | such a >> so + adjective.",
      "_ They are ___ friendly people. = such >> such + adjective + plural.",
      "_ I've never seen ___ many people in one place. = so >> so many.",
      "s It was [so] a long journey. = such >> such a + noun.",
      "o The story was so complicated that I gave up. >> so … that (workbook unit 18).",
      "o It's such a nice house >> such a.",
      "?2 'I didn't know you had ___ beautiful garden.' | so | *such a | such >> such a + singular.",
      "f2 I have never read a such long book as this one. = I have never read such a long book as this one ; I've never read such a long book as this one >> Workbook unit 18.",
    ],
  },
  {
    n: 103, t: 'enough and too', es: 'enough y too', tags: ['adjectives', 'quantifiers'], pre: [102],
    goals: ['Use enough after adjectives and before nouns', 'Use too + adjective (more than you want)', 'Use too/enough + for … + to'],
    x: `**enough**:
• **before** a noun: *enough money, enough time*.
• **after** an adjective/adverb: *old enough, fast enough* (not *enough old*).

**too** + adjective/adverb = **more than you want** (there's a problem): *It's too expensive.* **too much / too many** + noun.

With **for** and **to**: *It's too cold **for** swimming / **to** swim. He's not old enough **to** drive. The box was too heavy (for me) to carry.*

Don't confuse **too** (more than you want) with **very**.`,
    form: [['Estructura', 'Ejemplo'], ['enough + sustantivo', 'enough chairs'], ['adjetivo + enough', 'big enough'], ['too + adjetivo', 'too small'], ['too + adj + to', 'too tired to walk']],
    uses: ['enough + noun / adjective + enough', 'too = more than you want', 'too / enough + to + verb'],
    aff: ["There isn't enough time.|No hay suficiente tiempo.", "She's old enough to decide.|Tiene edad suficiente para decidir.", "This coffee is too hot to drink.|Este café está demasiado caliente para tomarlo."],
    neg: ["The room isn't big enough for six people.|La habitación no es lo suficientemente grande para seis personas."],
    q: ['Have you got enough money?|¿Tenés suficiente plata?'],
    err: ["He isn't enough old to drive.|He isn't old enough to drive.|adjective + enough.", 'Hardback books are much too expensive for buy.|Hardback books are much too expensive to buy.|too + adjective + to.'],
    ex: [
      "? Is the water warm ___ for swimming? | enough warm | *enough | too >> adjective + enough.",
      "? We haven't got ___ for everyone. | chairs enough | *enough chairs | too chairs >> enough + noun.",
      "_ This bag is ___ heavy for me to carry. = too >> too = more than you want.",
      "_ There are ___ many people here. Let's go. = too >> too many.",
      "s The room isn't big enough for six people. >> Correct: adjective + enough.",
      "o The coffee is too hot to drink. >> too + adjective + to.",
      "o There aren't enough books >> enough + noun.",
      "?2 Not ___ were ordered. | books enough | *enough books | too books >> Workbook unit 18.",
      "f2 You're too young for drive. = You're too young to drive ; You are too young to drive >> too + adjective + to.",
    ],
  },
  {
    n: 104, t: 'quite, pretty, rather and fairly', es: 'quite, pretty, rather, fairly', tags: ['adverbs'],
    goals: ['Use quite/pretty/rather/fairly', 'Put quite a + adjective + noun in the right order', 'Understand quite = completely with some adjectives'],
    x: `**quite, pretty, rather, fairly** = less than *very*:
• **quite / pretty**: very common (pretty is informal): *It's quite cold. The film was pretty good.*
• **rather**: often with **negative** ideas or surprise: *It's rather expensive.*
• **fairly**: weaker: *I speak French fairly well.*

Order: **quite a / rather a** + adjective + noun (*quite a good film*), but **a fairly / a pretty** + adjective (*a fairly good film*).

With "extreme" adjectives (*right, sure, different, impossible, amazing*) **quite** = **completely**: *You're quite right.*`,
    form: [['Palabra', 'Ejemplo'], ['quite', "It's quite good / quite a good book."], ['pretty', 'pretty expensive (informal)'], ['rather', "It's rather cold."], ['fairly', 'a fairly easy test']],
    uses: ['A moderate degree', 'quite a + adjective + noun', 'quite = completely with certain adjectives'],
    aff: ["It's quite a long way.|Es bastante lejos.", 'The test was fairly easy.|El examen fue bastante fácil.', "You're quite right.|Tenés toda la razón."],
    neg: ["I'm not quite sure.|No estoy del todo seguro."],
    q: ['Was it pretty difficult?|¿Fue bastante difícil?'],
    err: ["It's a quite good film.|It's quite a good film.|quite a + adjective + noun.", "You're fairly right.|You're quite right.|quite = completely."],
    ex: [
      "? It's ___ restaurant. | a quite good | *quite a good | quite good a >> quite a + adjective + noun.",
      "? 'Are you sure?' 'Yes, ___ sure.' | rather | *quite | fairly >> quite = completely.",
      "_ The weather was ___ cold, but we went out anyway. = quite ; rather ; pretty ; fairly >> Fairly.",
      "s It was a [quite] interesting book. = fairly >> a fairly + adjective (or quite an interesting book).",
      "o The film was pretty good. >> pretty = fairly (informal).",
      "o My English is quite good >> quite/fairly/pretty.",
      "?2 'It's ___ a pity you can't come.' | fairly | *rather | very >> rather a pity.",
      "f2 It's a quite long journey. = It's quite a long journey ; It is quite a long journey ; It's a fairly long journey >> Order.",
    ],
  },
  {
    n: 105, t: 'Comparative 1 (cheaper, more expensive etc.)', es: 'Comparativos (1)', tags: ['comparison', 'adjectives'],
    goals: ['Form comparatives with -er and more', 'Use than', 'Know the irregular forms better, worse, further'],
    x: `**Short adjectives** (one syllable, and two-syllable ones ending in -y) → **-er**: *cheap → cheaper, big → bigger, easy → easier*.

**Long adjectives** → **more**: *more expensive, more interesting*. Also **less**: *less expensive*.

**Irregular**: good → **better**, bad → **worse**, far → **further/farther**.

We use **than**: *Flat shoes are more comfortable than high-heeled ones.* (example from the Workbook, unit 1).

Adverbs: *more slowly, more carefully*; *faster, harder, earlier*.`,
    form: [['Adjetivo', 'Comparativo'], ['cheap', 'cheaper'], ['big', 'bigger'], ['easy', 'easier'], ['expensive', 'more expensive'], ['good / bad / far', 'better / worse / further']],
    uses: ['-er for short adjectives', 'more/less for long adjectives', 'Irregular forms', '+ than'],
    aff: ['Cotton shirts are cheaper than woollen ones.|Las camisas de algodón son más baratas que las de lana.', 'Jeans are more casual than trousers.|Los jeans son más informales que los pantalones.', 'Her English is better than mine.|Su inglés es mejor que el mío.'],
    neg: ["This hotel isn't more expensive than the other one.|Este hotel no es más caro que el otro."],
    q: ['Is London bigger than Paris?|¿Londres es más grande que París?'],
    err: ['This is more cheap.|This is cheaper.|Short → -er.', 'She is more better than me.|She is better than me.|Don\'t combine more + -er.'],
    cmp: { w: [106, 107, 108], x: 'much better / any better (106), as … as (107), superlatives (108).' },
    ex: [
      "? This book is ___ than the other one. | more interesting than | *more interesting | interestinger >> Long adjective → more.",
      "? My new flat is ___ than the old one. | more big | *bigger | biger >> big → bigger.",
      "_ Supermodels are ___ (thin) than other people. = thinner >> thin → thinner (Workbook unit 1).",
      "_ Your English is ___ (good) than mine. = better >> good → better.",
      "s Jogging is less [dangerouser] than bungee-jumping. = dangerous >> less + base adjective.",
      "o New York is bigger than San Francisco. >> -er + than (Workbook unit 1).",
      "o This exam is easier than the other one >> easy → easier.",
      "m good = better ; bad = worse ; far = further ; happy = happier >> Irregular comparatives and -y.",
      "?2 'The weather today is ___ than yesterday.' | badder | *worse | more bad >> bad → worse.",
      "f2 Clubbing is more tiringer than studying. = Clubbing is more tiring than studying >> more + long adjective.",
    ],
  },
  {
    n: 106, t: 'Comparative 2 (much better / any better etc.)', es: 'Comparativos (2)', tags: ['comparison'], pre: [105],
    goals: ['Modify comparatives with much, a lot, a bit, far', 'Use any/no + comparative', 'Use comparative + and + comparative and the … the …'],
    x: `To say **how much** more: **much / a lot / far** (a big difference) and **a bit / a little / slightly** (a small difference) + comparative: *much better, a bit cheaper, far more expensive.*

**any / no** + comparative: *Is it any better? It's no bigger than a coin.*

**more and more**: comparative **and** comparative: *It's getting **colder and colder**. More and more people…*

**the … the …** = one thing depends on the other: ***The sooner*** *we leave, **the earlier** we'll arrive.* ***The more*** *you practise, **the better** you get.*`,
    form: [['Estructura', 'Ejemplo'], ['much / a lot + comparativo', 'much cheaper'], ['a bit / slightly + comparativo', 'a bit older'], ['X-er and X-er', 'bigger and bigger'], ['the … the …', 'the more, the better']],
    uses: ['much / a bit + comparative', 'any / no + comparative', 'more and more', 'the … the …'],
    aff: ['Your English is much better now.|Tu inglés está mucho mejor ahora.', "It's getting warmer and warmer.|Está haciendo cada vez más calor.", 'The more I know him, the more I like him.|Cuanto más lo conozco, más me gusta.'],
    neg: ["I'm not any better today.|Hoy no estoy nada mejor."],
    q: ['Could you speak a bit more slowly?|¿Podrías hablar un poco más despacio?'],
    err: ["It's very better.|It's much better.|very doesn't go with comparatives.", 'The more you study, more you learn.|The more you study, the more you learn.|the … the …'],
    ex: [
      "? This hotel is ___ than the last one. | very cheaper | *much cheaper | more cheaper >> much + comparative.",
      "? Prices are getting ___. | high and high | *higher and higher | more high and high >> more and more.",
      "_ The ___ (soon) we start, the sooner we'll finish. = sooner >> the … the …",
      "_ Could you speak a ___ more slowly? = bit ; little >> a bit / a little.",
      "s She's [very] older than her brother. = much >> much + comparative.",
      "o The more you practise, the better you get. >> the … the …",
      "o It's much more expensive than I thought >> much + comparative.",
      "?2 'Is your headache ___ better?' 'No, it's the same.' | some | *any | very >> any + comparative in questions.",
      "f2 The more I read, more I understand. = The more I read, the more I understand >> the … the …",
    ],
  },
  {
    n: 107, t: 'Comparative 3 (as … as / than)', es: 'as … as / than', tags: ['comparison'], pre: [105],
    goals: ['Use as … as and not as … as', 'Use the same as', 'Use than me / than I am'],
    x: `**as + adjective/adverb + as** = equally: *She's as tall as her brother.*
**not as … as** = less … than: *This year the prices are **not as low as** last year* (example from the Workbook, unit 1).

**twice as … as, three times as … as**: *It's twice as expensive as before.*

**the same (…) as**: *My phone is the same as yours.*

After **than / as** we can use **me/him** or **I am / he is**: *You're taller than me / than I am.*`,
    form: [['Estructura', 'Ejemplo'], ['as + adj + as', "I'm as tall as you."], ['not as + adj + as', "It's not as cold as yesterday."], ['twice as … as', 'twice as big as'], ['the same as', 'the same as mine']],
    uses: ['Equality: as … as', 'Less: not as … as', 'Multipliers', 'the same as'],
    aff: ['He is as old as my father.|Tiene la misma edad que mi papá.', 'Your bag is the same as mine.|Tu bolso es igual al mío.'],
    neg: ["This exercise isn't as difficult as I thought.|Este ejercicio no es tan difícil como pensaba.", "Ben won the race, but George wasn't as fast as him.|Ben ganó la carrera, pero George no fue tan rápido como él."],
    q: ['Is it as good as the first film?|¿Es tan buena como la primera película?'],
    err: ["It's not so expensive than I thought.|It's not as expensive as I thought.|not as … as.", 'My car is the same like yours.|My car is the same as yours.|the same as.'],
    ex: [
      "? This year prices are ___ as last year. | not as lower | *not as low | not lower >> not as + adjective + as.",
      "? Your phone is the same ___ mine. | like | *as | than >> the same as.",
      "_ I can't run as fast ___ you. = as >> as … as.",
      "_ A car costs twice ___ much as a motorbike. = as >> twice as … as.",
      "s He's not as tall [than] his sister. = as >> not as … as.",
      "o This exercise is not as difficult as I thought. >> not as … as (Workbook unit 1).",
      "o It's not as expensive as I thought >> not as … as.",
      "?2 'Ben won the race but George came second.' → George was ___. | as fast as Ben | *not as fast as Ben | faster than Ben >> Workbook unit 1.",
      "f2 She's as clever like her mother. = She's as clever as her mother ; She is as clever as her mother >> as … as.",
    ],
  },
  {
    n: 108, t: 'Superlative (the longest, the most enjoyable etc.)', es: 'Superlativos', tags: ['comparison'], pre: [105],
    goals: ['Form superlatives with -est and most', 'Use in/of after the superlative', 'Use superlative + present perfect (the best I\'ve ever…)'],
    x: `**Superlative**: **the + -est** (short adjectives) or **the most / the least** (long ones): *the cheapest, the biggest, the most expensive*. Irregular: **the best, the worst, the furthest**.

After it we use **in** with places/groups (*the tallest building **in** the world*) and **of** with periods or groups of things (*the best day **of** my life*).

With the **present perfect**: *It's **the best** film **I've ever seen**.*

**one of the** + superlative + **plural**: *one of the most famous singers*.`,
    form: [['Adjetivo', 'Superlativo'], ['long', 'the longest'], ['easy', 'the easiest'], ['important', 'the most important'], ['good / bad', 'the best / the worst']],
    uses: ['the -est / the most', 'in + place, of + group/period', '+ I\'ve ever…', 'one of the + superlative + plural'],
    aff: ["It's the oldest building in the city.|Es el edificio más antiguo de la ciudad.", "That was the best meal I've ever had.|Fue la mejor comida que comí en mi vida.", "She's one of the most famous actresses in Spain.|Es una de las actrices más famosas de España."],
    neg: ["It's not the cheapest option.|No es la opción más barata."],
    q: ["What's the highest mountain in the world?|¿Cuál es la montaña más alta del mundo?"],
    err: ["It's the most big city.|It's the biggest city.|Short → -est.", "He's the best player of the team.|He's the best player in the team.|A group/place → in."],
    ex: [
      "? It's the ___ day of the year. | most short | *shortest | shorter >> short → the shortest.",
      "? Everest is the highest mountain ___ the world. | of | *in | at >> A place → in.",
      "_ It's the ___ (good) film I've ever seen. = best >> good → best.",
      "_ She's one of the most famous ___ (writer) in the country. = writers >> one of the + plural.",
      "s It was the [baddest] day of my life. = worst >> bad → worst.",
      "o It was the most exciting match I've ever seen. >> the most + I've ever.",
      "o It's the most expensive restaurant in the city >> the most + in.",
      "?2 'The jeans are certainly ___!' | more expensive | *the most expensive | most expensive the >> Superlative (text from Workbook unit 1).",
      "f2 He's the most tall boy in the class. = He's the tallest boy in the class ; He is the tallest boy in the class >> tall → tallest.",
    ],
  },
  {
    n: 109, t: 'Word order 1: verb + object; place and time', es: 'Orden (1): verbo + objeto, lugar y tiempo', tags: ['word-order'],
    goals: ['Don\'t separate the verb from its object', 'Put place before time', 'Order sentences with several extra parts'],
    x: `In English the **verb** and its **object** go **together**: *I like **Italian food** very much* (not *I like very much Italian food*). *Did you **see Tom** yesterday?*

With **place and time**, usually **place → time**: *I'm going **to Paris on Monday**. We arrived **at the hotel early**.*

Time can also go at the **beginning**: *On Monday I'm going to Paris.*

The Workbook (unit 6) has a word order exercise: *(Yesterday) I bought her a lovely blue silk dress (yesterday).*`,
    form: [['Sujeto', 'Verbo', 'Objeto', 'Lugar', 'Tiempo'], ['I', 'met', 'Anna', 'in town', 'yesterday'], ['She', 'bought', 'a dress', 'at the market', 'last week']],
    uses: ['Verb + object together', 'Place before time', 'Time at the beginning or at the end'],
    aff: ['I speak English quite well.|Hablo inglés bastante bien.', 'We went to the beach on Sunday.|El domingo fuimos a la playa.'],
    neg: ["I didn't see anybody at the party last night.|No vi a nadie en la fiesta anoche."],
    q: ['Did you go to the gym this morning?|¿Fuiste al gimnasio esta mañana?'],
    err: ['I like very much chocolate.|I like chocolate very much.|Verb + object together.', 'I went yesterday to the cinema.|I went to the cinema yesterday.|Place before time.'],
    ex: [
      "? Which is correct? | I like very much football. | *I like football very much. | I very much football like. >> Verb + object together.",
      "o I walk to work every morning. >> Place → time.",
      "o She speaks French very well. >> Verb + object + adverb.",
      "b I / buy / a new phone / last week = I bought a new phone last week ; Last week I bought a new phone >> Object before time.",
      "s I met my friends in town yesterday. >> Correct: object → place → time.",
      "o We arrived at the hotel late >> Place → time.",
      "?2 'We went ___.' | last night to the cinema | *to the cinema last night | the cinema to last night >> Place → time.",
      "f2 I bought yesterday a lovely blue silk dress for her. = I bought her a lovely blue silk dress yesterday ; Yesterday I bought her a lovely blue silk dress ; I bought a lovely blue silk dress for her yesterday >> Workbook unit 6.",
      "b2 quite a few / members of the audience / be / students = Quite a few members of the audience were students >> Workbook unit 6.",
    ],
  },
  {
    n: 110, t: 'Word order 2: adverbs with the verb', es: 'Orden (2): adverbios con el verbo', tags: ['word-order', 'adverbs'], pre: [109],
    goals: ['Place always/never/also/just/probably', 'Put them before the main verb and after be/an auxiliary', 'Word order with two auxiliaries'],
    x: `Adverbs like **always, often, usually, never, also, just, already, probably, all, both** go **in the middle** of the sentence:
• **before** the main verb: *I **always** drive to work. She **also** speaks Spanish.*
• **after** **be**: *You're **always** late.*
• **after the first auxiliary**: *I have **never** been there. They will **probably** come.*

With negatives: **probably** goes **before** won't/doesn't: *He **probably** won't come.*

Workbook (unit 6): *Alan never used to be keen on swimming.*`,
    form: [['Posición', 'Ejemplo'], ['antes del verbo', 'I often go out.'], ['después de be', "She's often late."], ['después del 1.er auxiliar', "I've just finished."], ['probably + negativa', "I probably won't go."]],
    uses: ['Before the main verb', 'After be and the auxiliary', 'probably before won\'t'],
    aff: ['I usually get up at seven.|Normalmente me levanto a las siete.', "I've already eaten.|Ya comí.", 'They both live in Rome.|Los dos viven en Roma.'],
    neg: ["He probably won't be here.|Probablemente no esté acá."],
    q: ['Do you always walk to work?|¿Siempre vas caminando al trabajo?'],
    err: ['I go always to work by bus.|I always go to work by bus.|always before the verb.', 'She is late always.|She is always late.|After be.'],
    ex: [
      "? Which is correct? | I drink never coffee. | *I never drink coffee. | Never I drink coffee. >> Before the main verb.",
      "? She ___ late. | always is | *is always | is late always >> After be.",
      "o I have never been to Japan. >> After the first auxiliary.",
      "o He probably won't come to the party. >> probably before won't.",
      "s We often go to the cinema. >> Correct: often goes before the main verb.",
      "o I've already finished >> After the auxiliary.",
      "b Alan / never / use to / be / keen on swimming = Alan never used to be keen on swimming >> Workbook unit 6.",
      "?2 'We ___ for a long time.' | have known each other both | *have both known each other | both have known each other >> both after the first auxiliary.",
      "f2 She speaks also German. = She also speaks German >> also before the main verb.",
    ],
  },
  {
    n: 111, t: 'still any more yet already', es: 'still, any more, yet, already', tags: ['adverbs', 'time'],
    goals: ['Use still (it continues)', 'Use not … any more (it has stopped)', 'Use yet and already'],
    x: `**still** = something **continues** (it hasn't finished): *It's 10 o'clock and Tom is **still** in bed.* It goes in the middle of the sentence. A negative with still = not yet, with surprise: *She **still** hasn't called.*

**not … any more / any longer / no longer** = something **has stopped**: *Ann doesn't work here **any more**. She **no longer** works here.*

**yet** = until now (questions and negatives, at the end): *Has it stopped raining **yet**? I haven't finished **yet**.*

**already** = sooner than expected: *I've **already** done it.*`,
    form: [['Palabra', 'Significado', 'Ejemplo'], ['still', 'todavía (sigue)', "He's still here."], ['not … any more', 'ya no', "She doesn't live here any more."], ['yet', 'todavía / ya (preguntas)', "Have you finished yet?"], ['already', 'ya (antes de lo esperado)', "I've already eaten."]],
    uses: ['still = it continues', 'not any more = it has stopped', 'yet in questions and negatives', 'already = sooner than expected'],
    aff: ['Do you still live in the same house?|¿Seguís viviendo en la misma casa?', "I've already paid.|Ya pagué."],
    neg: ["He doesn't work here any more.|Ya no trabaja acá.", "The film hasn't started yet.|La película todavía no empezó."],
    q: ['Have you done your homework yet?|¿Ya hiciste la tarea?'],
    err: ['I already haven’t finished.|I haven’t finished yet.|Negative → yet.', "She doesn't work here still.|She doesn't work here any more.|Not any longer → any more."],
    ex: [
      "? It's 11 a.m. and he's ___ in bed. | yet | *still | already >> still = it continues.",
      "? I used to smoke, but I don't smoke ___. | yet | *any more | still >> Not any longer → any more.",
      "_ Have you finished your work ___? = yet >> yet in questions.",
      "_ 'Do you want something to eat?' 'No, thanks. I've ___ eaten.' = already ; just >> already.",
      "s I haven't decided [already]. = yet >> Negative → yet.",
      "o She no longer lives in London. >> no longer = not any more.",
      "o They haven't arrived yet >> yet / still.",
      "?2 'I wrote to him a month ago and he ___ hasn't replied.' | yet | *still | already >> still + negative = surprise.",
      "f2 Is it raining still? = Is it still raining >> still in the middle.",
    ],
  },
  {
    n: 112, t: 'even', es: 'even', tags: ['adverbs'],
    goals: ['Use even for something surprising', 'Use not even', 'Use even + comparative, even if/when/though'],
    x: `**even** = for something **surprising** or unexpected: *Everybody came to the party, **even** Tom* (who never goes to parties).

Position: usually in the middle of the sentence (before the verb, after be/an auxiliary): *He **even** cleaned the windows.*

**not even** = not … at all (surprising): *She didn't **even** say goodbye.*

**even + comparative** = still more: *It was hot yesterday, but today it's **even hotter**.*

**even if / even when / even though**: *I'll go **even if** it rains.* (even though → unit 113).`,
    form: [['Estructura', 'Ejemplo'], ['even + verbo', 'He even paid for us.'], ['not even', "She didn't even call."], ['even + comparativo', 'even better'], ['even if', "even if it's expensive"]],
    uses: ['even = this is surprising', 'not even = not … at all (surprising)', 'even + comparative', 'even if / even though'],
    aff: ['He speaks lots of languages, even Chinese.|Habla muchos idiomas, incluso chino.', 'The second film was even better.|La segunda película fue aún mejor.'],
    neg: ["I can't even remember his name.|Ni siquiera me acuerdo de su nombre."],
    q: [],
    err: ["She didn't say even goodbye.|She didn't even say goodbye.|even before the verb.", "It's even more better.|It's even better.|even + comparative."],
    ex: [
      "? The hotel was terrible. There ___ any hot water. | even wasn't | *wasn't even | wasn't evenly >> even after be. ++ There wasn't even any hot water.",
      "? It was cold yesterday, but today it's ___. | even cold | *even colder | more even colder >> even + comparative.",
      "_ I'll go to the beach ___ if it rains. = even >> even if.",
      "s The second film was even [more] better. = (quitar more) >> even + comparative: even better.",
      "o I didn't even know her name. >> not even.",
      "o He didn't even call me >> not even.",
      "?2 'Everyone was there, ___ the manager.' | still | *even | yet >> even = this is surprising.",
      "f2 It's even more cheaper online. = It's even cheaper online ; It is even cheaper online >> even + comparative.",
    ],
  },
];

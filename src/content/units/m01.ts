import type { UnitSrc } from '../dsl';

// Module 1 — Present and past (EGU units 1–6)
export const m01: UnitSrc[] = [
  {
    n: 1, t: 'Present continuous (I am doing)', es: 'Presente continuo', tags: ['present-continuous', 'tenses'],
    goals: ['Formar el presente continuo con am/is/are + -ing', 'Usarlo para acciones en curso ahora o “alrededor de ahora”', 'Hablar de situaciones que están cambiando'],
    x: `El **present continuous** describe una acción que **empezó y todavía no terminó**: estás “en el medio” de hacerla.

Puede estar ocurriendo **en este momento** (She's driving to work) o **alrededor de ahora**, aunque no en el instante exacto en que hablás (I'm reading a great book — lo empecé y no lo terminé).

También se usa con períodos que incluyen el presente (**today, this week, this year**) y para **situaciones que cambian** (get, change, become, increase, rise, improve).`,
    form: [['Sujeto', 'be', 'verbo + -ing'], ['I', 'am (’m)', 'working'], ['he / she / it', 'is (’s)', 'working'], ['we / you / they', 'are (’re)', 'working']],
    uses: ['Acción en curso en el momento de hablar', 'Acción en curso “alrededor de ahora” (aunque no en este instante)', 'Con today / this week / this year…', 'Cambios en progreso: get, change, become, increase, rise, improve, begin, start'],
    aff: ["She's driving to work right now.|Está manejando al trabajo ahora mismo.", "Kate is learning Italian because she wants to work in Rome.|Kate está aprendiendo italiano porque quiere trabajar en Roma.", "The population of the world is rising very fast.|La población mundial está aumentando muy rápido."],
    neg: ["It isn't raining any more.|Ya no está lloviendo.", "I'm not working this week. I'm on holiday.|No estoy trabajando esta semana. Estoy de vacaciones."],
    q: ["Are you enjoying your new job?|¿Estás disfrutando tu nuevo trabajo?", "What's happening? Why is everybody shouting?|¿Qué está pasando? ¿Por qué grita todo el mundo?"],
    err: ["Please be quiet. I try to work.|Please be quiet. I'm trying to work.|La acción está en curso ahora: present continuous.", "Is your English get better?|Is your English getting better?|be + -ing: falta el -ing.", "She is work today.|She is working today.|Después de am/is/are va el verbo con -ing."],
    cmp: { w: [2, 3], x: 'Present simple (I do) = hechos generales y acciones repetidas. Present continuous (I am doing) = acción en curso, temporal.' },
    ex: [
      "? Listen! Somebody ___ the piano. | plays | *is playing | play >> Listen! indica que ocurre ahora: present continuous.",
      "_ Please don't make so much noise. I ___ (try) to work. = 'm trying ; am trying >> Acción en curso en este momento → am + trying.",
      "_ Let's go out now. It ___ (not/rain) any more. = isn't raining ; is not raining ; 's not raining >> Negativo: is not + -ing.",
      "? 'Where's Mark?' 'He ___ a shower.' | has | *'s having | have >> Ahora mismo está en la ducha: acción en curso.",
      "o She is learning Italian this year. >> Orden: sujeto + am/is/are + verbo-ing + complemento.",
      "t Estoy leyendo un libro muy interesante. = I'm reading a very interesting book ; I am reading a very interesting book >> Lo empezaste y no lo terminaste: present continuous.",
      "s Your English is getting better. >> La oración es correcta: un cambio en progreso (get better).",
      "f The price of food increase at the moment. = The price of food is increasing at the moment >> Cambio en progreso ahora: is increasing.",
      "?2 Which sentence describes something happening 'around now' but not necessarily at this moment? | *Some friends of mine are building their own house. | I'm writing this sentence now. | I write to my mother every week. >> Construyen la casa este año, aunque no justo ahora.",
      "_2 You ___ (work) hard today. 'Yes, I have a lot to do.' = 're working ; are working >> today es un período alrededor de ahora → present continuous.",
      "b2 why / you / look / at me / like that = Why are you looking at me like that >> Pregunta: Wh- + are + sujeto + -ing.",
      "s2 Is it [rain] now? = raining >> Falta -ing: Is it raining now?",
    ],
  },
  {
    n: 2, t: 'Present simple (I do)', es: 'Presente simple', tags: ['present-simple', 'tenses'],
    goals: ['Formar el presente simple, incluida la -s de la 3.ª persona', 'Usar do/does en negaciones y preguntas', 'Expresar hábitos, hechos generales y frecuencia'],
    x: `El **present simple** se usa para **hechos generales** y **cosas que pasan de forma repetida o habitual**. No importa si está ocurriendo ahora.

Con **he/she/it** el verbo lleva **-s** (works, does, has). En negativas y preguntas usamos **do/does** y el verbo vuelve a su forma base: She doesn't work / Does she work?

Lo combinamos con expresiones de frecuencia (always, often, never, every day, How often…?). También con verbos que realizan una acción al decirlos: **I promise**, **I suggest**, **I apologise**, **I insist**.`,
    form: [['Afirmativa', 'Negativa', 'Pregunta'], ['I/we/you/they work', "I/we/you/they don't work", 'do I/we/you/they work?'], ['he/she/it works', "he/she/it doesn't work", 'does he/she/it work?']],
    uses: ['Hechos generales y verdades', 'Hábitos y rutinas (every day, usually…)', 'Preguntar con qué frecuencia: How often…?', 'Promesas, sugerencias, disculpas: I promise, I suggest'],
    aff: ['Nurses look after patients in hospitals.|Los enfermeros cuidan a los pacientes en los hospitales.', 'The earth goes round the sun.|La Tierra gira alrededor del Sol.', 'I promise I won’t be late.|Prometo que no llegaré tarde.'],
    neg: ["I don't go away very often.|No salgo de viaje muy seguido.", "Rice doesn't grow in cold climates.|El arroz no crece en climas fríos."],
    q: ['How often do you go to the dentist?|¿Cada cuánto vas al dentista?', 'What does this word mean?|¿Qué significa esta palabra?'],
    err: ['She work in a bank.|She works in a bank.|3.ª persona singular: verbo + -s.', "He don't like coffee.|He doesn't like coffee.|Con he/she/it el auxiliar es does.", 'Does she plays tennis?|Does she play tennis?|Después de does el verbo va en forma base.'],
    cmp: { w: [1, 3], x: 'Si la acción es general o repetida → present simple. Si está en curso o es temporal → present continuous.' },
    ex: [
      "? Water ___ at 100 degrees Celsius. | *boils | is boiling | boil >> Es un hecho general: present simple con -s.",
      "_ Julia ___ (speak) four languages. = speaks >> 3.ª persona singular → speaks.",
      "_ I ___ (not/watch) TV very often. = don't watch ; do not watch >> Negativa con I → don't + verbo base.",
      "? How often ___ to the cinema? | you go | *do you go | are you going >> Pregunta de frecuencia con present simple: do + sujeto + verbo.",
      "s She [don't] eat meat. = doesn't >> Con she se usa doesn't.",
      "o What time does the film start? >> Pregunta: Wh- + does + sujeto + verbo base.",
      "t No entiendo esta palabra. = I don't understand this word ; I do not understand this word >> Negativa: don't + understand.",
      "m Hábito = I get up at 7 every day. ; Hecho general = The sun rises in the east. ; Promesa = I promise I'll call you. >> El present simple tiene varios usos generales.",
      "f2 Does your brother works in London? = Does your brother work in London >> Después de does → verbo base (work).",
      "?2 'I'm tired.' 'Then I ___ that you go to bed early tonight.' | am suggesting | *suggest | suggests >> Con suggest/promise/apologise, el verbo realiza la acción: present simple.",
      "_2 What ___ your sister ___ (do)? – She's a teacher. = does / do >> ¿A qué se dedica? → What does she do?",
      "b2 Tom / not / drink / coffee / very often = Tom doesn't drink coffee very often ; Tom does not drink coffee very often >> 3.ª persona → doesn't + verbo base.",
    ],
  },
  {
    n: 3, t: 'Present continuous and present simple 1 (I am doing and I do)', es: 'Continuo vs. simple (1)', tags: ['present-simple', 'present-continuous', 'tenses'], pre: [1, 2],
    goals: ['Distinguir acciones en curso de hechos generales', 'Diferenciar situaciones temporales de permanentes', 'Usar always + continuo para quejas'],
    x: `Comparamos los dos presentes:

**Present continuous** → acciones **en curso** ahora o en un período cercano; situaciones **temporales**. *I'm living with friends until I find a flat.*

**Present simple** → cosas **en general** o **repetidas**; situaciones **permanentes**. *My parents live in London.*

**I always do** = lo hago siempre, cada vez. **I'm always doing** = lo hago con demasiada frecuencia, más de lo normal (a menudo es una queja): *I've lost my keys again. I'm always losing them.*`,
    form: [['Present continuous', 'Present simple'], ['acción en curso / temporal', 'general / repetida / permanente'], ["The water is boiling. Can you turn it off?", 'Water boils at 100 °C.'], ["I'm living with friends (temporal)", 'I live in Buenos Aires (permanente)']],
    uses: ['Temporal → continuous; permanente → simple', 'En curso → continuous; repetido → simple', "always + continuous = 'demasiado a menudo'"],
    aff: ["The water is boiling. Can you turn it off?|El agua está hirviendo. ¿Podés apagarla?", "I'm living with some friends until I find a flat.|Estoy viviendo con amigos hasta encontrar un departamento.", "Paul is always complaining.|Paul se queja todo el tiempo."],
    neg: ["I don't usually work at weekends, but I'm working this Saturday.|Normalmente no trabajo los fines de semana, pero este sábado sí."],
    q: ["What do you do? / What are you doing?|¿A qué te dedicás? / ¿Qué estás haciendo?"],
    err: ["My parents are living in Rome all their lives.|My parents have lived in Rome all their lives.|Situación permanente que empezó en el pasado → present perfect (ver unidad 11).", "I'm always going to work by bus.|I always go to work by bus.|Hábito normal sin queja → present simple."],
    cmp: { w: [1, 2, 4], x: 'Pensá: ¿temporal o permanente? ¿en curso o habitual?' },
    ex: [
      "? Hurry up! Everybody ___ for you. | waits | *is waiting | wait >> Está pasando ahora.",
      "? My parents ___ in a small village near the coast. | are living | *live | lives >> Situación permanente → present simple.",
      "_ I'm ___ (live) with friends until I find a flat. = living >> Situación temporal → present continuous.",
      "? 'What ___?' 'I'm an engineer.' | are you doing | *do you do | you do >> What do you do? = ¿a qué te dedicás?",
      "_ Normally I ___ (finish) work at 5, but this week I ___ (work) until 6. = finish / 'm working ; finish / am working >> Rutina vs. situación temporal de esta semana.",
      "s The river is flowing very fast today. It's usually much slower. >> Correcto: hoy, temporal → continuous.",
      "f The River Nile is flowing into the Mediterranean. = The River Nile flows into the Mediterranean >> Hecho geográfico permanente → present simple.",
      "?2 I've lost my phone again. I ___ it! | always lose | *'m always losing | always am losing >> always + continuous = sucede con demasiada frecuencia (queja).",
      "t2 Normalmente tomo el tren, pero esta semana estoy yendo en auto. = I usually take the train, but this week I'm going by car ; I usually take the train but this week I am going by car ; Usually I take the train, but this week I'm going by car >> Habitual → simple; temporal → continuous.",
      "o2 You're always interrupting me when I'm talking! >> Queja: always + continuous.",
    ],
  },
  {
    n: 4, t: 'Present continuous and present simple 2 (I am doing and I do)', es: 'Continuo vs. simple (2): verbos de estado', tags: ['present-simple', 'present-continuous', 'state-verbs', 'tenses'], pre: [3],
    goals: ['Reconocer los verbos de estado', 'Usar think/have/see/be con sus dos significados', 'Saber cuándo look/feel admiten ambas formas'],
    x: `Algunos verbos **no se usan normalmente en continuo** porque describen **estados**, no acciones: like, love, hate, want, need, prefer, know, realise, suppose, mean, understand, believe, remember, belong, fit, contain, consist, seem.

**think**: *I think (= opino) you're right* — estado; *I'm thinking about the problem* — acción mental.
**have**: *I have a car* (poseer) — estado; *I'm having a shower / lunch* — acción.
**see/hear/smell/taste**: normalmente en simple, a menudo con **can**: *I can hear music.*
**be**: *He's selfish* (siempre); *He's being selfish* (se está comportando así ahora).
**look / feel** (salud/aspecto): ambas formas son posibles: *You look / You're looking well.*`,
    form: [['Verbo', 'Estado (simple)', 'Acción (continuo)'], ['think', 'I think it’s a good idea.', "I'm thinking about it."], ['have', 'She has two brothers.', "She's having dinner."], ['see', 'I see what you mean.', "I'm seeing the doctor tomorrow."], ['be', 'He is lazy.', "He's being lazy today."]],
    uses: ['Verbos de estado → simple', 'think/have/see/be cambian de sentido en continuo', 'look/feel (salud) admiten ambas'],
    aff: ['I want something to eat.|Quiero algo para comer.', "I'm thinking of buying a new car.|Estoy pensando en comprar un auto nuevo.", "You're being very selfish today.|Hoy estás siendo muy egoísta."],
    neg: ["I don't understand what you mean.|No entiendo lo que querés decir."],
    q: ['Do you know that woman?|¿Conocés a esa mujer?', 'What do you think of my plan?|¿Qué pensás de mi plan?'],
    err: ["I'm wanting a coffee.|I want a coffee.|want es un verbo de estado.", 'Are you believing in God?|Do you believe in God?|believe → simple.', "This bag is belonging to me.|This bag belongs to me.|belong → simple."],
    cmp: { w: [3], x: 'Regla general de la unidad 3 + excepción: los verbos de estado prefieren el simple aunque hablemos de ahora.' },
    ex: [
      "? I ___ what you mean. | 'm understanding | *understand | understands >> understand es verbo de estado.",
      "? Be quiet! I ___ about something. | think | *'m thinking | thinks >> Acción mental en curso → continuous.",
      "? What ___ of the film? Did you like it? | are you thinking | *do you think | you think >> think = opinión → simple.",
      "_ This bag ___ (belong) to my sister. = belongs >> belong → present simple.",
      "? We ___ dinner. Can I call you back? | have | *'re having | has >> have dinner = acción → continuous.",
      "s I don't [believing] you. = believe >> Después de don't va el verbo base; además believe es un verbo de estado.",
      "f Who is this umbrella belonging to? = Who does this umbrella belong to >> belong → simple; pregunta con does.",
      "?2 He's usually polite, but today he ___ very rude. | is | *is being | be >> be en continuo = comportamiento temporal.",
      "e2 You look well today. | *Hoy se te ve bien. | Hoy estás mirando bien. | Hoy mirás bien. >> look = parecer, aspecto.",
      "m2 I think you're right = opinión ; I'm thinking about my holidays = actividad mental ; I have a car = posesión ; I'm having a bath = acción >> think y have cambian de sentido.",
      "_2 I ___ (not/remember) his name. = don't remember ; do not remember >> remember → simple.",
    ],
  },
  {
    n: 5, t: 'Past simple (I did)', es: 'Pasado simple', tags: ['past-simple', 'tenses', 'irregular-verbs'],
    goals: ['Formar el pasado de verbos regulares e irregulares', 'Usar did en negativas y preguntas', 'Usar was/were'],
    x: `El **past simple** habla de acciones o situaciones **terminadas en el pasado**, normalmente con un momento conocido (yesterday, last week, in 2010, ago).

Verbos **regulares**: -ed (work → worked). Muchos verbos son **irregulares** (go → went, see → saw); consultá la lista de verbos irregulares en la sección Referencia.

En negativas y preguntas: **did / didn't + verbo base**: *I didn't go. Did you see it?*
El verbo **be** no usa did: **was/were**, **wasn't/weren't**: *Were you at home?*`,
    form: [['Afirmativa', 'Negativa', 'Pregunta'], ['I worked / I went', "I didn't work / go", 'Did you work / go?'], ['I/he/she/it was', "wasn't", 'was he…?'], ['we/you/they were', "weren't", 'were they…?']],
    uses: ['Acción terminada en un momento del pasado', 'Secuencia de acciones pasadas', 'Hábitos pasados (también used to, unidad 18)'],
    aff: ['Mozart wrote more than 600 pieces of music.|Mozart escribió más de 600 piezas musicales.', 'We went to the cinema last night.|Fuimos al cine anoche.'],
    neg: ["I didn't sleep well last night.|No dormí bien anoche.", "We weren't hungry, so we didn't eat anything.|No teníamos hambre, así que no comimos nada."],
    q: ['Did you go out last night?|¿Saliste anoche?', 'What time did the film start?|¿A qué hora empezó la película?', 'Were you late this morning?|¿Llegaste tarde esta mañana?'],
    err: ['I didn’t went to work.|I didn’t go to work.|Después de didn’t, verbo base.', 'Did you saw him?|Did you see him?|Después de did, verbo base.', 'Did you be tired?|Were you tired?|be no usa did.'],
    cmp: { w: [6, 13], x: 'Past continuous = en el medio de una acción pasada. Present perfect = conexión con el presente sin tiempo terminado.' },
    ex: [
      "_ Yesterday I ___ (go) to the supermarket. = went >> go es irregular: went.",
      "_ We ___ (not/enjoy) the party, so we left early. = didn't enjoy ; did not enjoy >> Negativa: didn't + verbo base.",
      "? ___ at home last night? | Did you be | *Were you | Was you >> be → were you.",
      "? Where ___ your holiday last year? | you spent | *did you spend | did you spent >> did + verbo base.",
      "s I saw him yesterday but I didn't [spoke] to him. = speak >> Después de didn't el verbo va en forma base: speak. ++ I saw him yesterday but I didn't speak to him.",
      "f They didn't went out because it was raining. = They didn't go out because it was raining ; They did not go out because it was raining >> didn't + go.",
      "o What time did you get up this morning? >> Wh- + did + sujeto + verbo base.",
      "t Ayer perdí mis llaves. = I lost my keys yesterday ; Yesterday I lost my keys >> lose → lost.",
      "m buy = bought ; think = thought ; catch = caught ; teach = taught >> Irregulares con -ought/-aught.",
      "_2 'Did you phone Ana?' 'No, I ___ (not/have) time.' = didn't have ; did not have >> didn't + have.",
      "b2 when / you / start / your job = When did you start your job >> Wh- + did + sujeto + verbo base.",
    ],
  },
  {
    n: 6, t: 'Past continuous (I was doing)', es: 'Pasado continuo', tags: ['past-continuous', 'past-simple', 'tenses'], pre: [5],
    goals: ['Formar was/were + -ing', 'Describir una acción en curso en un momento pasado', 'Combinar past continuous y past simple'],
    x: `El **past continuous** indica que alguien estaba **en el medio de una acción** en un momento del pasado: la acción había empezado pero no terminado. *At 10 o'clock I was watching TV.*

Combinado con el **past simple**: la acción larga (continuous) es **interrumpida** por una corta (simple). *I was walking home when I met Tom.*

Si las acciones ocurren **una después de la otra**, usamos past simple en ambas: *When Ann arrived, we had dinner* (llegó y después cenamos).

Los **verbos de estado** (know, want…) no suelen usarse en continuo: *We were good friends. We knew each other well.*`,
    form: [['Sujeto', 'was/were', 'verbo + -ing'], ['I / he / she / it', 'was', 'playing'], ['we / you / they', 'were', 'playing']],
    uses: ['Acción en curso en un momento pasado', 'Acción larga interrumpida por otra (when)', 'Dos acciones simultáneas (while)'],
    aff: ['This time last year I was living in Brazil.|El año pasado a esta hora vivía en Brasil.', 'It was raining when I got up.|Estaba lloviendo cuando me levanté.'],
    neg: ["I waved to her but she wasn't looking.|La saludé pero no estaba mirando."],
    q: ['What were you doing at 11 last night?|¿Qué estabas haciendo anoche a las 11?'],
    err: ['I was knowing him well.|I knew him well.|know → simple.', 'When I arrived, Jo was cooking dinner and then we were eating it.|When I arrived, Jo was cooking dinner and then we ate it.|Acciones sucesivas → past simple.'],
    cmp: { w: [5], x: 'When Ann arrived, we were having dinner (ya cenábamos) ≠ When Ann arrived, we had dinner (cenamos después de que llegó).' },
    ex: [
      "_ At 8 o'clock yesterday I ___ (have) breakfast. = was having >> Acción en curso en un momento pasado.",
      "? I ___ home when I met Lisa. | walked | *was walking | were walking >> Acción larga interrumpida.",
      "? While I was working in the garden, I ___ my back. | was hurting | *hurt | hurting >> Acción corta que interrumpe → past simple.",
      "? When Ann arrived, we ___ dinner, so we invited her to join us. | had | *were having | have >> Ya estaban cenando cuando llegó.",
      "_ We ___ (not/watch) TV when you called. = weren't watching ; were not watching >> Negativa: weren't + -ing.",
      "s Yesterday I [see] Sue in town, but she didn't see me. = saw >> Acción corta y completa en el pasado → saw.",
      "o What were you doing when the phone rang? >> Interrupción: past continuous + when + past simple.",
      "t Estaba lloviendo cuando salimos. = It was raining when we went out ; It was raining when we left >> Acción de fondo → past continuous.",
      "f2 We were being good friends. We were knowing each other well. = We were good friends. We knew each other well >> be/know aquí son estados → simple.",
      "?2 Which sentence means 'first Ann arrived, then we had dinner'? | When Ann arrived, we were having dinner. | *When Ann arrived, we had dinner. >> Past simple en ambas = acciones sucesivas.",
      "b2 the phone / ring / while / I / have / a shower = The phone rang while I was having a shower ; While I was having a shower, the phone rang >> while + acción larga (continuous).",
    ],
  },
];

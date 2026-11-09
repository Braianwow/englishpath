import type { UnitSrc } from '../dsl';

// Module 2 — Present perfect and past (EGU units 7–18)
export const m02: UnitSrc[] = [
  {
    n: 7, t: 'Present perfect 1 (I have done)', es: 'Present perfect (1)', tags: ['present-perfect', 'tenses'], pre: [5],
    goals: ['Formar have/has + participio', 'Expresar acciones pasadas con resultado en el presente', 'Usar just, already y yet'],
    x: `El **present perfect** (have/has + participio) conecta el pasado con el **presente**: algo ocurrió antes de ahora y su **resultado** importa ahora. *I've lost my keys* (= no las tengo ahora).

Lo usamos mucho para dar **noticias** o información nueva: *The road is closed. There's been an accident.*

Con **just** (hace muy poco), **already** (antes de lo esperado) y **yet** (hasta ahora, en preguntas y negativas, al final de la oración).

Diferencia entre **gone** y **been**: *She has gone to Spain* (está allá ahora) / *She has been to Spain* (fue y ya volvió).`,
    form: [['Sujeto', 'have/has', 'participio'], ['I / we / you / they', 'have (’ve)', 'finished'], ['he / she / it', 'has (’s)', 'gone']],
    uses: ['Acción pasada con resultado presente', 'Noticias e información nueva', 'just / already / yet', 'gone (está allá) vs. been (fue y volvió)'],
    aff: ["I've lost my keys. I can't find them.|Perdí mis llaves. No las encuentro.", "She's just gone out.|Acaba de salir.", "I've already told him.|Ya se lo dije."],
    neg: ["I haven't finished my work yet.|Todavía no terminé mi trabajo."],
    q: ['Have you seen my glasses?|¿Viste mis anteojos?', 'Has the film started yet?|¿Ya empezó la película?'],
    err: ['I have lost my keys yesterday.|I lost my keys yesterday.|Con un tiempo pasado terminado (yesterday) se usa past simple.', 'Have you finished already your work?|Have you finished your work yet?|En preguntas se usa yet, al final.'],
    cmp: { w: [13, 14], x: 'Present perfect = resultado o conexión con ahora, sin tiempo terminado. Past simple = momento terminado del pasado (yesterday, in 2010).' },
    ex: [
      "? 'Where's your key?' 'I don't know. I ___ it.' | lost | *'ve lost | have lose >> El resultado importa ahora (no la tengo).",
      "_ Ow! I ___ (cut) my finger. = 've cut ; have cut >> Resultado presente: present perfect.",
      "? Is Sarah here? – No, she ___ to the bank. She'll be back soon. | has been | *has gone | went to >> gone = fue y todavía está allá.",
      "_ Have you finished your homework ___? = yet >> yet en preguntas, al final.",
      "_ 'Would you like something to eat?' 'No, thanks. I've ___ eaten.' = just ; already >> just/already van entre have y el participio.",
      "s She has [went] to work. = gone >> Participio de go: gone.",
      "o I haven't read the email yet. >> haven't + participio + complemento + yet.",
      "t Acabo de terminar el informe. = I've just finished the report ; I have just finished the report >> acabar de = just + present perfect.",
      "?2 Which is correct? | I've seen him yesterday. | *I saw him yesterday. | I've saw him yesterday. >> yesterday = tiempo terminado → past simple.",
      "f2 Did you finish already? = Have you finished already ; Have you already finished >> already con present perfect (inglés británico).",
      "e2 He has been to Japan. | *Ha estado en Japón (y volvió). | Está en Japón ahora. | Va a ir a Japón. >> been = fue y volvió.",
      "b2 the price of petrol / go up / a lot = The price of petrol has gone up a lot >> Cambio con resultado presente.",
    ],
  },
  {
    n: 8, t: 'Present perfect 2 (I have done)', es: 'Present perfect (2): experiencias', tags: ['present-perfect', 'tenses'], pre: [7],
    goals: ['Hablar de experiencias de vida con ever/never', 'Usar períodos no terminados (today, this week)', 'Usar It’s the first time I’ve…'],
    x: `El present perfect también habla de **experiencias** en un período que llega **hasta ahora** (toda tu vida, hasta hoy): *Have you ever been to China?* *I've never ridden a horse.*

Con superlativos: *It's the best film I've ever seen.*

Con períodos **no terminados**: **today, this week, this year**, *since breakfast*. Si el período ya terminó (yesterday, last week) → past simple.

**It's the first time** + present perfect: *It's the first time I've driven a car.*`,
    form: [['Uso', 'Ejemplo'], ['ever / never', "Have you ever eaten sushi? I've never eaten it."], ['superlativo + ever', "It's the best book I've ever read."], ['período no terminado', "I've drunk four coffees today."], ['first time', "It's the first time I've been here."]],
    uses: ['Experiencias (ever/never)', 'Superlativo + I’ve ever…', 'Períodos que incluyen el presente', "It's the first / second time…"],
    aff: ["I've been to Canada twice.|Estuve en Canadá dos veces.", "It's the most boring film I've ever seen.|Es la película más aburrida que vi.", "I've drunk three cups of coffee today.|Hoy tomé tres tazas de café."],
    neg: ["I've never played golf.|Nunca jugué al golf.", "I haven't seen Tom this week.|No vi a Tom esta semana."],
    q: ['Have you ever been to Brazil?|¿Alguna vez estuviste en Brasil?'],
    err: ["It's the first time I see this.|It's the first time I've seen this.|It's the first time + present perfect.", 'Did you ever eat snails?|Have you ever eaten snails?|Experiencia de vida → present perfect.'],
    cmp: { w: [7, 13], x: 'today/this week (no terminados) → present perfect; yesterday/last week (terminados) → past simple.' },
    ex: [
      "? ___ been to Australia? | Did you ever | *Have you ever | Were you ever >> Experiencia de vida: Have you ever…?",
      "_ It's the best meal I've ever ___ (eat). = eaten >> superlativo + I've ever + participio.",
      "_ It's the first time I ___ (drive) a car. = 've driven ; have driven >> first time + present perfect.",
      "? I ___ Lisa this morning, but I haven't seen her since then. | 've seen | *saw | see >> this morning ya terminó (ahora es la tarde).",
      "s I have never [went] to Paris. = been >> have + participio; para experiencias de viaje: been to. ++ I have never been to Paris.",
      "t Nunca vi un elefante. = I've never seen an elephant ; I have never seen an elephant >> Experiencia: never + present perfect.",
      "o Have you ever ridden a horse? >> Have + sujeto + ever + participio.",
      "m ever = alguna vez ; never = nunca ; twice = dos veces ; so far = hasta ahora >> Expresiones típicas del present perfect.",
      "?2 How many times ___ to the dentist this year? | did you go | *have you been | are you >> this year no terminó.",
      "f2 This is the first time I am in London. = This is the first time I've been in London ; This is the first time I have been in London ; This is the first time I've been to London >> first time + present perfect.",
      "b2 she / never / fly / in a plane = She has never flown in a plane ; She's never flown in a plane >> fly → flown.",
    ],
  },
  {
    n: 9, t: 'Present perfect continuous (I have been doing)', es: 'Present perfect continuo', tags: ['present-perfect-continuous', 'tenses'], pre: [7],
    goals: ['Formar have/has been + -ing', 'Hablar de actividades recientes que explican la situación actual', 'Preguntar how long con acciones que continúan'],
    x: `**have/has been + -ing** se usa para una **actividad** que empezó en el pasado y **acaba de terminar** o **sigue** ahora.

Muchas veces vemos su **resultado**: *You're out of breath. Have you been running?* (la actividad explica algo que se ve ahora).

Con **how long, for, since** para actividades que continúan hasta ahora: *It's been raining for two hours.*

También para acciones **repetidas** hasta ahora: *She's been playing tennis since she was eight.*`,
    form: [['Sujeto', 'have/has been', 'verbo -ing'], ['I / we / you / they', 'have been', 'working'], ['he / she / it', 'has been', 'working']],
    uses: ['Actividad reciente con resultado visible', 'Actividad que continúa (how long, for, since)', 'Acción repetida hasta ahora'],
    aff: ["It's been raining. The ground is wet.|Estuvo lloviendo. El suelo está mojado.", "I've been waiting for an hour.|Hace una hora que espero.", "She's been learning English since 2020.|Aprende inglés desde 2020."],
    neg: ["I haven't been feeling well recently.|No me estuve sintiendo bien últimamente."],
    q: ['How long have you been waiting?|¿Cuánto hace que esperás?', 'What have you been doing?|¿Qué estuviste haciendo?'],
    err: ['I am waiting here for an hour.|I have been waiting here for an hour.|Con for/since + hasta ahora → present perfect (continuous).', 'How long are you learning English?|How long have you been learning English?|how long hasta ahora → present perfect continuous.'],
    cmp: { w: [10], x: 'have been doing = la actividad (puede no estar terminada). have done = el resultado/la cantidad terminada.' },
    ex: [
      "_ You're out of breath. ___ you ___ (run)? = Have / been running >> Actividad reciente con resultado visible.",
      "_ It ___ (rain) for two hours. = has been raining ; 's been raining >> Continúa hasta ahora + for.",
      "? How long ___ for me? | are you waiting | *have you been waiting | do you wait >> how long hasta ahora.",
      "s I have [be] working all day. = been >> have + been + -ing.",
      "o She has been learning Spanish for three years. >> has been + -ing + for.",
      "t Hace media hora que te espero. = I've been waiting for you for half an hour ; I have been waiting for you for half an hour >> Hace X que… = have been -ing for X.",
      "?2 Why are your clothes so dirty? What ___? | did you do | *have you been doing | are you doing >> Actividad reciente que explica el resultado.",
      "f2 We are living here since 2015. = We have been living here since 2015 ; We've been living here since 2015 ; We have lived here since 2015 ; We've lived here since 2015 >> since + hasta ahora → present perfect.",
      "e2 He's been playing football since he was six. | *Juega al fútbol desde que tenía seis años. | Jugó al fútbol cuando tenía seis años. | Va a jugar desde los seis. >> Continúa hasta ahora.",
      "b2 my eyes / hurt / I / read / all morning = My eyes hurt. I've been reading all morning ; My eyes hurt. I have been reading all morning >> Actividad que explica el resultado.",
    ],
  },
  {
    n: 10, t: 'Present perfect continuous and simple (I have been doing and I have done)', es: 'Perfect continuo vs. simple', tags: ['present-perfect', 'present-perfect-continuous', 'tenses'], pre: [7, 9],
    goals: ['Distinguir actividad (continuo) de resultado terminado (simple)', 'Usar how much / how many con el simple', 'Recordar que los verbos de estado no van en continuo'],
    x: `**I've been painting** the room = me interesa la **actividad** (puede que no esté terminada).
**I've painted** the room = me interesa el **resultado**: está terminado.

Con **how much, how many, how many times** (cantidades terminadas) usamos el **simple**: *I've written ten emails.* Con **how long** solemos usar el continuo: *I've been writing emails all morning.*

Los **verbos de estado** (know, like, believe…) no van en continuo: *I've known her for years* (no I've been knowing).`,
    form: [['Continuo (actividad)', 'Simple (resultado / cantidad)'], ["I've been reading the book.", "I've read the book. (terminado)"], ["She's been writing emails all day.", "She's written ten emails."]],
    uses: ['Actividad (¿terminada? no importa) → continuo', 'Resultado / cantidad / veces → simple', 'how long → continuo; how many/much → simple', 'Verbos de estado → simple'],
    aff: ["I've been cleaning the kitchen all morning.|Estuve limpiando la cocina toda la mañana.", "I've cleaned the kitchen. It looks great.|Limpié la cocina. Quedó genial.", "She's written three books.|Escribió tres libros."],
    neg: ["I haven't been sleeping well.|No estuve durmiendo bien."],
    q: ['How many pages have you read?|¿Cuántas páginas leíste?'],
    err: ["I've been knowing her for years.|I've known her for years.|know es verbo de estado.", "I've been writing five letters today.|I've written five letters today.|Cantidad terminada → simple."],
    cmp: { w: [9, 11], x: 'Cantidad o resultado → have done. Duración de la actividad → have been doing.' },
    ex: [
      "? I ___ ten emails this morning. | 've been writing | *'ve written | write >> Cantidad terminada (ten) → simple.",
      "? Your hands are dirty. ___ the car? | Have you repaired | *Have you been repairing | Did you repaired >> La actividad explica el resultado visible.",
      "_ How long ___ you ___ (learn) English? = have / been learning >> how long → continuo.",
      "_ How many times ___ you ___ (be) to Italy? = have / been >> how many times → simple.",
      "s I have been [knowing] Paul since we were children. = known >> know no va en continuo: I have known.",
      "t Estuve leyendo toda la tarde. = I've been reading all afternoon ; I have been reading all afternoon >> Duración de una actividad.",
      "m I've painted the room = está terminado ; I've been painting the room = actividad, quizá no terminada ; I've painted two rooms = cantidad >> Actividad vs. resultado.",
      "?2 Ben ___ his car three times this year. | has been crashing | *has crashed | was crashing >> Número de veces → simple.",
      "f2 I've been drinking four cups of coffee today. = I've drunk four cups of coffee today ; I have drunk four cups of coffee today >> Cantidad → simple.",
      "o2 She has been playing tennis since she was eight. >> Acción repetida hasta ahora.",
    ],
  },
  {
    n: 11, t: 'how long have you (been) … ?', es: 'how long + present perfect', tags: ['present-perfect', 'for-since', 'tenses'], pre: [9, 10],
    goals: ['Preguntar y responder sobre la duración hasta ahora', 'No usar el presente para duraciones hasta ahora', 'Usar how long have you known/had…'],
    x: `Cuando hablamos de **una situación que empezó en el pasado y sigue ahora**, y decimos **cuánto tiempo**, usamos present perfect (simple o continuo), **no** el presente.

*Bob and Alice are married* (presente) PERO *They have been married for 20 years* (no *They are married for 20 years*).

**How long have you been** + -ing / **How long have you known / had / been**…? Con verbos de estado usamos el simple: *How long have you known Jane?*

En negativas: *I haven't seen Tom for three days* (la última vez fue hace tres días).`,
    form: [['Presente (ahora)', 'Duración hasta ahora'], ['I know Jane.', "I've known Jane for ten years."], ["They're married.", "They've been married since 2005."], ["It's raining.", "It's been raining all day."]],
    uses: ['Duración de algo que sigue ahora → present perfect', 'Verbos de estado → have known / have had / have been', "No he hecho algo desde hace… → haven't + for"],
    aff: ["I've known Jane for ten years.|Conozco a Jane desde hace diez años.", "They've been married since 2005.|Están casados desde 2005.", "I've had this car for six months.|Tengo este auto hace seis meses."],
    neg: ["I haven't seen Tom for three days.|Hace tres días que no veo a Tom."],
    q: ['How long have you lived here?|¿Cuánto hace que vivís acá?', 'How long have you known each other?|¿Cuánto hace que se conocen?'],
    err: ['I know her since 2010.|I have known her since 2010.|Duración hasta ahora → present perfect.', 'How long are you here?|How long have you been here?|Duración hasta ahora → present perfect.'],
    cmp: { w: [12], x: 'how long + present perfect pregunta por la duración hasta ahora; for/since la responden (unidad 12).' },
    ex: [
      "? We ___ each other for a long time. | know | *have known | are knowing >> Duración hasta ahora + verbo de estado.",
      "? ___ here? – Since January. | How long do you live | *How long have you lived | How long you live >> how long + present perfect.",
      "_ My brother ___ (be) ill since Sunday. = has been ; 's been >> since + hasta ahora.",
      "_ I ___ (not/see) my parents for a month. = haven't seen ; have not seen >> No los veo desde hace un mes.",
      "s I [am] here since nine o'clock. = have been >> since hasta ahora: I have been here.",
      "t Tengo esta bicicleta desde hace dos años. = I've had this bike for two years ; I have had this bike for two years >> have (poseer) → have had.",
      "o How long have you been learning French? >> How long + have + sujeto + been + -ing.",
      "?2 'How long ___ married?' 'Twenty years.' | are they | *have they been | were they >> Duración hasta ahora.",
      "f2 She works here for five years. = She has worked here for five years ; She's worked here for five years ; She has been working here for five years ; She's been working here for five years >> for + hasta ahora → present perfect.",
      "e2 I haven't eaten for hours. | *Hace horas que no como. | No comí durante horas ayer. | Voy a comer en unas horas. >> haven't + for = hace X que no.",
    ],
  },
  {
    n: 12, t: 'for and since, when … ? and how long … ?', es: 'for / since', tags: ['for-since', 'present-perfect', 'time'], pre: [11],
    goals: ['Elegir for (un período) o since (un punto de inicio)', 'Usar It’s … since … y ago', 'Preguntar when…? y how long…?'],
    x: `**for** + un **período** de tiempo: for two hours, for a week, for ages.
**since** + el **punto de inicio**: since 8 o'clock, since Monday, since 2010, since I was a child.

**ago** = hace (desde ahora hacia atrás), con **past simple**: *I met her two years ago.*

Preguntas: **When…?** + past simple (momento): *When did you arrive?* / **How long…?** + present perfect (duración): *How long have you been here?*

Estructuras equivalentes: *It's two years since I saw Joe* = *I haven't seen Joe for two years.*`,
    form: [['for (período)', 'since (punto de inicio)'], ['for three days', 'since Monday'], ['for ten minutes', "since 4 o'clock"], ['for a long time', 'since I was young']],
    uses: ['for + duración', 'since + momento de inicio', 'ago + past simple', "It's + tiempo + since + past simple"],
    aff: ["I've lived here for ten years.|Vivo acá hace diez años.", "I've lived here since 2014.|Vivo acá desde 2014.", "She left an hour ago.|Se fue hace una hora."],
    neg: ["I haven't seen her since Christmas.|No la veo desde Navidad."],
    q: ['When did you start your job?|¿Cuándo empezaste tu trabajo?', 'How long have you had your car?|¿Cuánto hace que tenés tu auto?'],
    err: ["I've been here since three hours.|I've been here for three hours.|three hours es un período → for.", 'I have met her two years ago.|I met her two years ago.|ago → past simple.'],
    cmp: { w: [11], x: 'for/since responden a How long…?; ago responde a When…?' },
    ex: [
      "? I've been waiting ___ 20 minutes. | since | *for | ago >> 20 minutes es un período.",
      "? She's been ill ___ Sunday. | for | *since | ago >> Sunday es el punto de inicio.",
      "_ Paula and I have been friends ___ we were at school. = since >> Punto de inicio: since + oración.",
      "_ The film started ten minutes ___. = ago >> ago + past simple.",
      "m for = a week ; since = last Friday ; ago = two days (con past simple) ; for ages = mucho tiempo >> Elegí la palabra de tiempo.",
      "s I have known him [since] five years. = for >> five years es un período → for.",
      "t No lo veo desde 2019. = I haven't seen him since 2019 ; I have not seen him since 2019 >> since + año.",
      "?2 'It's ages since I last saw you.' means… | *I haven't seen you for ages. | I saw you ages. | I've seen you since ages. >> It's … since … = haven't … for …",
      "f2 I've been here since two weeks. = I've been here for two weeks ; I have been here for two weeks >> período → for.",
      "b2 it / be / three years / since / I / see / Joe = It's been three years since I saw Joe ; It's three years since I saw Joe ; It has been three years since I saw Joe ; It is three years since I saw Joe >> It's + tiempo + since + past simple.",
      "o2 When did you last go to the cinema? >> When + did + sujeto + verbo base.",
    ],
  },
  {
    n: 13, t: 'Present perfect and past 1 (I have done and I did)', es: 'Present perfect vs. past simple (1)', tags: ['present-perfect', 'past-simple', 'tenses'], pre: [5, 7],
    goals: ['Elegir entre resultado presente y hecho terminado', 'Dar una noticia con present perfect y los detalles con past simple', 'Evitar present perfect con tiempo terminado'],
    x: `**Present perfect**: nos interesa el **presente** (resultado ahora). *Tom has lost his key* (todavía no la tiene).
**Past simple**: hablamos de un **hecho terminado** y no decimos nada del presente. *Tom lost his key* (¿la encontró? no sabemos).

Típico: damos la **noticia** con present perfect y luego los **detalles** (cuándo, dónde, cómo) con past simple: *I've cut my finger. — How did you do that? — I cut it while I was cooking.*

No uses present perfect para cosas que no están conectadas con el presente (personas muertas, situaciones terminadas): *Mozart was a composer* (no has been).`,
    form: [['Present perfect', 'Past simple'], ["I've lost my key (no la tengo).", 'I lost my key (¿y ahora? no se dice).'], ["It's stopped raining (ya no llueve).", 'It stopped raining an hour ago.']],
    uses: ['Noticia/resultado → present perfect', 'Detalles (cuándo, cómo) → past simple', 'Personas/situaciones terminadas → past simple'],
    aff: ["The police have arrested two men.|La policía arrestó a dos hombres (noticia).", "They were arrested outside the bank.|Fueron arrestados afuera del banco (detalle).", "Shakespeare wrote many plays.|Shakespeare escribió muchas obras."],
    neg: ["I didn't see the match last night.|No vi el partido anoche."],
    q: ['Have you heard? Ann has had a baby!|¿Te enteraste? ¡Ann tuvo un bebé!', 'When did it happen?|¿Cuándo pasó?'],
    err: ['Shakespeare has written many plays.|Shakespeare wrote many plays.|Persona muerta: situación terminada.', "I've cut my finger when I was cooking.|I cut my finger when I was cooking.|Detalle de cuándo → past simple."],
    cmp: { w: [14], x: 'La unidad 14 agrega el criterio de las expresiones de tiempo (yesterday vs. today).' },
    ex: [
      "? 'Is Lisa still here?' 'No, she ___.' | went out | *'s gone out | goes out >> Resultado ahora: no está.",
      "? Mozart ___ more than 600 pieces of music. | has written | *wrote | writes >> Mozart murió: situación terminada.",
      "_ I ___ (cut) my finger. – How did you do that? = 've cut ; have cut >> La noticia, resultado presente.",
      "_ How did you do that? – I ___ (cut) it while I was cooking. = cut >> Detalles de cómo pasó → past simple.",
      "s My grandfather was a soldier in the war. >> Correcta: situación terminada → past simple.",
      "t ¿Viste mis llaves? No las encuentro. = Have you seen my keys? I can't find them ; Have you seen my keys? I cannot find them >> Resultado presente.",
      "?2 Which sentence tells us he still hasn't got his key? | Tom lost his key. | *Tom has lost his key. | Tom was losing his key. >> Present perfect = resultado ahora.",
      "f2 Who has invented the telephone? = Who invented the telephone >> Hecho histórico terminado.",
      "e2 It's stopped raining. | *Paró de llover (ahora no llueve). | Va a parar de llover. | Estaba parando de llover. >> Resultado presente.",
      "o2 The police have arrested two men. >> Noticia: present perfect.",
    ],
  },
  {
    n: 14, t: 'Present perfect and past 2 (I have done and I did)', es: 'Present perfect vs. past simple (2)', tags: ['present-perfect', 'past-simple', 'time'], pre: [13],
    goals: ['Elegir el tiempo según la expresión temporal', 'Usar períodos terminados y no terminados', 'Usar When…? con past simple'],
    x: `Con expresiones de **tiempo terminado** usamos **past simple**: yesterday, last week, in 2015, ten minutes ago, when I was a child. *I saw her yesterday.*

Con **períodos que siguen hasta ahora** usamos **present perfect**: today, this week, recently, so far, since…, ever, never. *I've seen her today.*

**When…?** y **What time…?** van con past simple: *When did you buy it?*

Comparar: *I've done a lot of work today* (el día no terminó) / *I did a lot of work yesterday.* Si ya terminó la mañana: *Did you see Anna this morning?* (a la tarde).`,
    form: [['Present perfect (período no terminado)', 'Past simple (tiempo terminado)'], ['today, this week, this year', 'yesterday, last week, last year'], ['recently, so far, ever, since', 'ago, in 2010, when I was…'], ["I've lived here for 5 years (y sigo).", 'I lived there for 5 years (ya no).']],
    uses: ['Tiempo terminado → past simple', 'Período hasta ahora → present perfect', 'When…? → past simple'],
    aff: ["I've seen a lot of films this year.|Este año vi muchas películas.", "I saw three films last month.|El mes pasado vi tres películas.", "I lived in Rome for two years (now I live in Madrid).|Viví en Roma dos años (ahora vivo en Madrid)."],
    neg: ["It hasn't rained this week.|Esta semana no llovió.", "It didn't rain last week.|La semana pasada no llovió."],
    q: ['When did you arrive?|¿Cuándo llegaste?'],
    err: ['When have you arrived?|When did you arrive?|When → past simple.', "I've finished school in 2018.|I finished school in 2018.|in 2018 = terminado."],
    cmp: { w: [13], x: 'Mirá la expresión de tiempo: ¿el período terminó o llega hasta ahora?' },
    ex: [
      "? I ___ Jo yesterday. | 've seen | *saw | see >> yesterday = tiempo terminado.",
      "? I ___ four coffees so far this week. | drank | *'ve drunk | was drinking >> so far this week = período no terminado.",
      "? ___ did you buy your car? | *When | How long | Since when >> When + past simple.",
      "_ We ___ (live) in Leeds from 2010 to 2016. = lived >> Período terminado.",
      "_ It ___ (not/rain) so far this summer. = hasn't rained ; has not rained >> so far = hasta ahora.",
      "s I lost my phone two days ago. >> Correcta: ago = tiempo terminado → past simple.",
      "m so far = hasta ahora (present perfect) ; two years ago = hace dos años (past simple) ; recently = últimamente (present perfect) ; last night = anoche (past simple) >> Expresión de tiempo → tiempo verbal.",
      "t Ayer no vi a nadie. = I didn't see anybody yesterday ; I didn't see anyone yesterday ; I did not see anybody yesterday ; I did not see anyone yesterday >> yesterday → past simple.",
      "f2 When have you started your new job? = When did you start your new job >> When → past simple.",
      "?2 (It's 3 p.m.) ___ Anna this morning? | Have you seen | *Did you see | Do you see >> La mañana ya terminó.",
      "b2 Mr Lee / work / in a bank / for 15 years / then he retired = Mr Lee worked in a bank for 15 years. Then he retired ; Mr Lee worked in a bank for 15 years, then he retired >> Período terminado (ya se jubiló).",
    ],
  },
  {
    n: 15, t: 'Past perfect (I had done)', es: 'Pasado perfecto', tags: ['past-perfect', 'tenses'], pre: [5, 7],
    goals: ['Formar had + participio', 'Expresar algo anterior a otro momento pasado', 'Comparar past perfect con past simple'],
    x: `El **past perfect** (had + participio) indica que algo pasó **antes** de otro momento del pasado. Es el "pasado del pasado".

*When Sarah arrived at the party, Paul **had** already **gone** home* (Paul se fue antes de que ella llegara).

Comparar: *When I got home, Ben **left*** (llegué y después se fue) / *When I got home, Ben **had left*** (ya se había ido).

También es el pasado del present perfect: *I'd never seen her before* (en ese momento). *The house was dirty. They hadn't cleaned it for weeks.*`,
    form: [['Sujeto', 'had', 'participio'], ['I / you / he / she / we / they', 'had (’d)', 'gone / finished / seen']],
    uses: ['Acción anterior a otra pasada', 'Pasado del present perfect (never … before, already, for/since)', 'Contraste de orden con past simple'],
    aff: ['When I arrived, the film had already started.|Cuando llegué, la película ya había empezado.', "I didn't know who she was. I'd never seen her before.|No sabía quién era. Nunca la había visto."],
    neg: ["He hadn't eaten anything all day, so he was hungry.|No había comido nada en todo el día, así que tenía hambre."],
    q: ['Had you met him before the party?|¿Lo habías conocido antes de la fiesta?'],
    err: ['When we arrived, the train has left.|When we arrived, the train had left.|Anterior a otro pasado → had left.', 'I had went home.|I had gone home.|had + participio (gone).'],
    cmp: { w: [5, 16], x: 'Past simple = secuencia normal. Past perfect = algo ya había pasado antes del momento del que hablamos.' },
    ex: [
      "? When I got to the station, the train ___. I'd missed it. | left | *had left | has left >> Ya se había ido antes de que llegara.",
      "_ I didn't recognise her. I ___ (never/see) her before. = had never seen ; 'd never seen >> Pasado del present perfect.",
      "? When Ann arrived, we ___ dinner. (we started after she arrived) | had had | *had | have had >> Secuencia normal → past simple.",
      "_ The house was dirty. They ___ (not/clean) it for weeks. = hadn't cleaned ; had not cleaned >> Anterior al momento pasado.",
      "s By the time we arrived, everybody had [went] home. = gone >> had + participio: gone.",
      "o By the time I arrived, the meeting had finished. >> had + participio para lo anterior.",
      "t Cuando llegué, ya se habían ido. = When I arrived, they had already left ; When I arrived they had already gone ; When I arrived, they had already gone ; When I arrived they had already left >> had already + participio.",
      "?2 Which means Ben left BEFORE I got home? | When I got home, Ben left. | *When I got home, Ben had left. >> had left = antes.",
      "f2 I was very nervous because I have never flown before. = I was very nervous because I had never flown before ; I was very nervous because I'd never flown before >> Pasado del present perfect.",
      "b2 she / feel / tired / because / she / not / sleep / well = She felt tired because she hadn't slept well ; She felt tired because she had not slept well >> Causa anterior → past perfect.",
    ],
  },
  {
    n: 16, t: 'Past perfect continuous (I had been doing)', es: 'Pasado perfecto continuo', tags: ['past-perfect', 'tenses'], pre: [9, 15],
    goals: ['Formar had been + -ing', 'Explicar una situación pasada con una actividad anterior', 'Expresar duración hasta un momento pasado'],
    x: `**had been + -ing** describe una **actividad** que se desarrolló **antes** de un momento del pasado (y quizá continuaba).

*Yesterday morning the ground was wet. It **had been raining**.* (actividad que explica lo que se veía).

Con **duración** hasta un momento pasado: *We'd been playing for half an hour when it started to rain.*

Comparar con el continuo actual: *I've been waiting for an hour* (hasta ahora) / *I'd been waiting for an hour when he arrived* (hasta un momento pasado). Los verbos de estado van en simple: *I'd known him for years.*`,
    form: [['Sujeto', 'had been', 'verbo -ing'], ['I / you / he / she / we / they', 'had been (’d been)', 'working']],
    uses: ['Actividad anterior que explica una situación pasada', 'Duración hasta un momento pasado (for/since/how long)'],
    aff: ['Her eyes were red. She had been crying.|Tenía los ojos rojos. Había estado llorando.', "We'd been walking for hours when we found a café.|Llevábamos horas caminando cuando encontramos un café."],
    neg: ["He hadn't been feeling well for weeks.|Hacía semanas que no se sentía bien."],
    q: ['How long had you been waiting when the bus came?|¿Cuánto llevabas esperando cuando llegó el colectivo?'],
    err: ["I'd been knowing her for years.|I'd known her for years.|know → simple.", 'We were playing for an hour when it started to rain.|We had been playing for an hour when it started to rain.|Duración hasta un momento pasado.'],
    cmp: { w: [9, 15], x: 'Había estado haciendo (actividad) → had been doing. Había hecho (resultado) → had done.' },
    ex: [
      "_ Tom was out of breath. He ___ (run). = had been running ; 'd been running >> Actividad anterior que explica la situación.",
      "? We ___ for two hours when the car broke down. | were driving | *had been driving | have been driving >> Duración hasta un momento pasado.",
      "? When I met her, I ___ her name for months. | had been knowing | *had known | knew >> know → simple.",
      "s They had [be] waiting for an hour when the doctor called them. = been >> had + been + -ing.",
      "o She had been working there for ten years when she left. >> had been + -ing + for.",
      "t Estaba cansado porque había estado trabajando todo el día. = I was tired because I had been working all day ; I was tired because I'd been working all day >> Actividad anterior.",
      "?2 The ground was wet. It ___. | has been raining | *had been raining | rains >> Pasado del present perfect continuous.",
      "f2 I've been waiting for 20 minutes when he finally arrived. = I had been waiting for 20 minutes when he finally arrived ; I'd been waiting for 20 minutes when he finally arrived >> Momento pasado → had been.",
      "e2 They had been arguing. | *Habían estado discutiendo. | Están discutiendo. | Van a discutir. >> had been + -ing.",
    ],
  },
  {
    n: 17, t: 'have and have got', es: 'have y have got', tags: ['have'],
    goals: ['Usar have y have got para posesión, relaciones y enfermedades', 'Formar negativas y preguntas', 'Usar have para acciones (have a shower, have lunch)'],
    x: `Para **posesión, relaciones, enfermedades y citas** podemos usar **have** o **have got** (británico informal): *I've got a car = I have a car.*

Negativas y preguntas: *I haven't got / I don't have*; *Have you got…? / Do you have…?* (no *Have you a car?*).

En **pasado** solo usamos **had** (no had got): *I had a bike when I was a child.* *Did you have…?*

**have** también se usa para **acciones**: have breakfast/lunch, have a shower, have a rest, have a good time, have a baby, have a look. Con este sentido **no** se usa have got y sí puede ir en continuo: *I'm having a shower.*`,
    form: [['have', 'have got'], ['I have a car.', "I've got a car."], ["I don't have a car.", "I haven't got a car."], ['Do you have a car?', 'Have you got a car?']],
    uses: ['Posesión, relaciones, enfermedades', 'Pasado: had / did you have', 'have + acción: have lunch, have a shower…'],
    aff: ["We've got a new flat.|Tenemos un departamento nuevo.", "I have a headache.|Me duele la cabeza.", "We're having lunch at the moment.|Estamos almorzando ahora."],
    neg: ["She doesn't have any brothers.|No tiene hermanos.", "I haven't got time.|No tengo tiempo."],
    q: ['Have you got a pen?|¿Tenés una birome?', 'Did you have a good holiday?|¿Tuviste buenas vacaciones?'],
    err: ['Have you a car?|Do you have a car?|Pregunta: Do you have / Have you got.', "I'm having a car.|I have a car.|Posesión no va en continuo."],
    ex: [
      "? ___ any brothers or sisters? | Have you | *Have you got | Are you having >> Have you got…? o Do you have…?",
      "_ I ___ (not/have) a car, so I go by bus. = don't have ; do not have ; haven't got ; have not got >> Negativa de posesión.",
      "? We ___ a great time at the party last night. | had got | *had | have got >> Pasado: had (no had got).",
      "? Sorry, I can't talk now. I ___ a shower. | have got | *'m having | have >> have + acción puede ir en continuo.",
      "s She [has] a baby last year. = had >> Acción pasada (last year): had a baby.",
      "m have breakfast = desayunar ; have a shower = ducharse ; have a look = echar un vistazo ; have a rest = descansar >> have + sustantivo = acción.",
      "t ¿Tenés tiempo? = Have you got time ; Do you have time ; Have you got any time ; Do you have any time >> Posesión.",
      "?2 'Did you have a bike when you were a child?' 'Yes, I ___.' | had got | *did | have >> Respuesta corta en pasado: did.",
      "f2 Are you having a headache? = Have you got a headache ; Do you have a headache >> Enfermedad = posesión, no continuo.",
      "o2 What time do you usually have lunch? >> have lunch = acción → do en preguntas.",
    ],
  },
  {
    n: 18, t: 'used to (do)', es: 'used to', tags: ['used-to', 'past-simple'], pre: [5],
    goals: ['Hablar de hábitos y situaciones pasadas que ya no existen', 'Formar negativas y preguntas con did … use to', 'No confundir used to con el presente'],
    x: `**used to + infinitivo** = algo pasaba **regularmente** o era así **en el pasado**, pero **ya no**. *I used to play tennis* (ahora no juego).

También para **estados** pasados: *There used to be a cinema here.*

Negativa y pregunta: **didn't use to**, **Did you use to…?** (sin -d).

**used to** solo existe en pasado. Para el presente usamos el present simple: *I usually get up early* (no *I use to*).

No confundir con **be used to doing** (estar acostumbrado), unidad 61.`,
    form: [['Afirmativa', 'Negativa', 'Pregunta'], ['I used to play', "I didn't use to play", 'Did you use to play?']],
    uses: ['Hábitos pasados que ya no ocurren', 'Estados/situaciones pasadas (There used to be…)', 'Presente → present simple, no use to'],
    aff: ['I used to live in Paris.|Antes vivía en París.', 'There used to be a cinema in this street.|Antes había un cine en esta calle.', 'Kate used to smoke, but she stopped.|Kate fumaba, pero dejó.'],
    neg: ["I didn't use to like cheese, but now I love it.|Antes no me gustaba el queso, pero ahora me encanta."],
    q: ['Did you use to play football?|¿Jugabas al fútbol antes?'],
    err: ['I use to get up early every day.|I usually get up early every day.|Presente → present simple con usually.', "I didn't used to like it.|I didn't use to like it.|Después de didn't: use (sin -d)."],
    cmp: { w: [36, 61], x: 'would también expresa hábitos pasados (no estados): unidad 36. be used to doing = estar acostumbrado: unidad 61.' },
    ex: [
      "? I ___ a lot, but now I don't read at all. | was reading | *used to read | use to read >> Hábito pasado que ya no existe.",
      "_ There ___ (be) a park here, but they built a hotel. = used to be >> Situación pasada.",
      "_ ___ you ___ (live) in London? = Did / use to >> Pregunta: Did + use to.",
      "s I didn't [used] to like vegetables. = use >> didn't + use to.",
      "? She ___ to work by bike. (present habit) | uses | *goes | used >> Presente: present simple.",
      "o We used to go to the beach every summer. >> used to + verbo base.",
      "t Antes tenía el pelo largo. = I used to have long hair >> Situación pasada → used to.",
      "f2 I use to go to the gym on Mondays. = I usually go to the gym on Mondays ; I go to the gym on Mondays >> used to no tiene presente.",
      "?2 Which sentence is correct? | *My grandfather used to be a farmer. | My grandfather is used to be a farmer. | My grandfather use to be a farmer. >> used to + verbo base.",
      "b2 Dan / not / use to / eat / meat = Dan didn't use to eat meat ; Dan did not use to eat meat >> didn't use to.",
    ],
  },
];

import type { UnitSrc } from '../dsl';

// Module 2 — Present perfect and past (EGU units 7–18)
export const m02: UnitSrc[] = [
  {
    n: 7, t: 'Present perfect 1 (I have done)', es: 'Present perfect (1)', tags: ['present-perfect', 'tenses'], pre: [5],
    goals: ['Form have/has + past participle', 'Talk about past actions with a result in the present', 'Use just, already and yet'],
    x: `The **present perfect** (have/has + past participle) connects the past with the **present**: something happened before now and its **result** matters now. *I've lost my keys* (= I haven't got them now).

We often use it to give **news** or new information: *The road is closed. There's been an accident.*

With **just** (a very short time ago), **already** (sooner than expected) and **yet** (until now, in questions and negatives, at the end of the sentence).

The difference between **gone** and **been**: *She has gone to Spain* (she is there now) / *She has been to Spain* (she went and came back).`,
    form: [['Sujeto', 'have/has', 'participio'], ['I / we / you / they', 'have (’ve)', 'finished'], ['he / she / it', 'has (’s)', 'gone']],
    uses: ['A past action with a present result', 'News and new information', 'just / already / yet', 'gone (is there) vs. been (went and came back)'],
    aff: ["I've lost my keys. I can't find them.|Perdí mis llaves. No las encuentro.", "She's just gone out.|Acaba de salir.", "I've already told him.|Ya se lo dije."],
    neg: ["I haven't finished my work yet.|Todavía no terminé mi trabajo."],
    q: ['Have you seen my glasses?|¿Viste mis anteojos?', 'Has the film started yet?|¿Ya empezó la película?'],
    err: ['I have lost my keys yesterday.|I lost my keys yesterday.|With finished past time (yesterday) we use the past simple.', 'Have you finished already your work?|Have you finished your work yet?|In questions we use yet, at the end.'],
    cmp: { w: [13, 14], x: 'Present perfect = a result or a connection with now, with no finished time. Past simple = a finished moment in the past (yesterday, in 2010).' },
    ex: [
      "? 'Where's your key?' 'I don't know. I ___ it.' | lost | *'ve lost | have lose >> The result matters now (I don't have it).",
      "_ Ow! I ___ (cut) my finger. = 've cut ; have cut >> A present result: present perfect.",
      "? Is Sarah here? – No, she ___ to the bank. She'll be back soon. | has been | *has gone | went to >> gone = went and is still there.",
      "_ Have you finished your homework ___? = yet >> yet in questions, at the end.",
      "_ 'Would you like something to eat?' 'No, thanks. I've ___ eaten.' = just ; already >> just/already go between have and the past participle.",
      "s She has [went] to work. = gone >> Past participle of go: gone.",
      "o I haven't read the email yet. >> haven't + past participle + the rest + yet.",
      "o I've just finished the report >> Something that happened a moment ago = just + present perfect.",
      "?2 Which is correct? | I've seen him yesterday. | *I saw him yesterday. | I've saw him yesterday. >> yesterday = finished time → past simple.",
      "f2 Did you finish already? = Have you finished already ; Have you already finished >> already with the present perfect (British English).",
      "e2 He has been to Japan. | *He went to Japan and came back. | He is in Japan now. | He is going to go to Japan. >> been = went and came back.",
      "b2 the price of petrol / go up / a lot = The price of petrol has gone up a lot >> A change with a present result.",
    ],
  },
  {
    n: 8, t: 'Present perfect 2 (I have done)', es: 'Present perfect (2): experiencias', tags: ['present-perfect', 'tenses'], pre: [7],
    goals: ['Talk about life experiences with ever/never', 'Use unfinished periods (today, this week)', 'Use It\'s the first time I\'ve…'],
    x: `The present perfect also talks about **experiences** in a period **until now** (your whole life, until today): *Have you ever been to China?* *I've never ridden a horse.*

With superlatives: *It's the best film I've ever seen.*

With **unfinished** periods: **today, this week, this year**, *since breakfast*. If the period is over (yesterday, last week) → past simple.

**It's the first time** + present perfect: *It's the first time I've driven a car.*`,
    form: [['Uso', 'Ejemplo'], ['ever / never', "Have you ever eaten sushi? I've never eaten it."], ['superlativo + ever', "It's the best book I've ever read."], ['período no terminado', "I've drunk four coffees today."], ['first time', "It's the first time I've been here."]],
    uses: ['Experiences (ever/never)', 'Superlative + I\'ve ever…', 'Periods that include the present', "It's the first / second time…"],
    aff: ["I've been to Canada twice.|Estuve en Canadá dos veces.", "It's the most boring film I've ever seen.|Es la película más aburrida que vi.", "I've drunk three cups of coffee today.|Hoy tomé tres tazas de café."],
    neg: ["I've never played golf.|Nunca jugué al golf.", "I haven't seen Tom this week.|No vi a Tom esta semana."],
    q: ['Have you ever been to Brazil?|¿Alguna vez estuviste en Brasil?'],
    err: ["It's the first time I see this.|It's the first time I've seen this.|It's the first time + present perfect.", 'Did you ever eat snails?|Have you ever eaten snails?|Life experience → present perfect.'],
    cmp: { w: [7, 13], x: 'today/this week (unfinished) → present perfect; yesterday/last week (finished) → past simple.' },
    ex: [
      "? ___ been to Australia? | Did you ever | *Have you ever | Were you ever >> Life experience: Have you ever…?",
      "_ It's the best meal I've ever ___ (eat). = eaten >> superlative + I've ever + past participle.",
      "_ It's the first time I ___ (drive) a car. = 've driven ; have driven >> first time + present perfect.",
      "? I ___ Lisa this morning, but I haven't seen her since then. | 've seen | *saw | see >> this morning is over (it's the afternoon now).",
      "s I have never [went] to Paris. = been >> have + past participle; for travel experiences: been to. ++ I have never been to Paris.",
      "o I've never seen an elephant >> Experience: never + present perfect.",
      "o Have you ever ridden a horse? >> Have + subject + ever + past participle.",
      "m ever = at any time in your life ; never = at no time ; twice = two times ; so far = until now >> Typical present perfect expressions.",
      "?2 How many times ___ to the dentist this year? | did you go | *have you been | are you >> this year isn't over.",
      "f2 This is the first time I am in London. = This is the first time I've been in London ; This is the first time I have been in London ; This is the first time I've been to London >> first time + present perfect.",
      "b2 she / never / fly / in a plane = She has never flown in a plane ; She's never flown in a plane >> fly → flown.",
    ],
  },
  {
    n: 9, t: 'Present perfect continuous (I have been doing)', es: 'Present perfect continuo', tags: ['present-perfect-continuous', 'tenses'], pre: [7],
    goals: ['Form have/has been + -ing', 'Talk about recent activities that explain the present situation', 'Ask how long about actions that continue'],
    x: `**have/has been + -ing** is used for an **activity** that started in the past and **has just finished** or **is still going on** now.

We often see its **result**: *You're out of breath. Have you been running?* (the activity explains something you can see now).

With **how long, for, since** for activities that continue until now: *It's been raining for two hours.*

Also for actions **repeated** until now: *She's been playing tennis since she was eight.*`,
    form: [['Sujeto', 'have/has been', 'verbo -ing'], ['I / we / you / they', 'have been', 'working'], ['he / she / it', 'has been', 'working']],
    uses: ['A recent activity with a visible result', 'An activity that continues (how long, for, since)', 'An action repeated until now'],
    aff: ["It's been raining. The ground is wet.|Estuvo lloviendo. El suelo está mojado.", "I've been waiting for an hour.|Hace una hora que espero.", "She's been learning English since 2020.|Aprende inglés desde 2020."],
    neg: ["I haven't been feeling well recently.|No me estuve sintiendo bien últimamente."],
    q: ['How long have you been waiting?|¿Cuánto hace que esperás?', 'What have you been doing?|¿Qué estuviste haciendo?'],
    err: ['I am waiting here for an hour.|I have been waiting here for an hour.|With for/since + until now → present perfect (continuous).', 'How long are you learning English?|How long have you been learning English?|how long until now → present perfect continuous.'],
    cmp: { w: [10], x: 'have been doing = the activity (it may not be finished). have done = the result/the finished amount.' },
    ex: [
      "_ You're out of breath. ___ you ___ (run)? = Have / been running >> A recent activity with a visible result.",
      "_ It ___ (rain) for two hours. = has been raining ; 's been raining >> It continues until now + for.",
      "? How long ___ for me? | are you waiting | *have you been waiting | do you wait >> how long until now.",
      "s I have [be] working all day. = been >> have + been + -ing.",
      "o She has been learning Spanish for three years. >> has been + -ing + for.",
      "o I've been waiting for you for half an hour >> For X until now = have been -ing for X.",
      "?2 Why are your clothes so dirty? What ___? | did you do | *have you been doing | are you doing >> A recent activity that explains the result.",
      "f2 We are living here since 2015. = We have been living here since 2015 ; We've been living here since 2015 ; We have lived here since 2015 ; We've lived here since 2015 >> since + until now → present perfect.",
      "e2 He's been playing football since he was six. | *He started at six and he still plays. | He played only when he was six. | He will start playing at six. >> It continues until now.",
      "b2 my eyes / hurt / I / read / all morning = My eyes hurt. I've been reading all morning ; My eyes hurt. I have been reading all morning >> An activity that explains the result.",
    ],
  },
  {
    n: 10, t: 'Present perfect continuous and simple (I have been doing and I have done)', es: 'Perfect continuo vs. simple', tags: ['present-perfect', 'present-perfect-continuous', 'tenses'], pre: [7, 9],
    goals: ['Tell an activity (continuous) from a finished result (simple)', 'Use how much / how many with the simple', 'Remember that state verbs are not used in the continuous'],
    x: `**I've been painting** the room = I'm interested in the **activity** (it may not be finished).
**I've painted** the room = I'm interested in the **result**: it's finished.

With **how much, how many, how many times** (finished amounts) we use the **simple**: *I've written ten emails.* With **how long** we usually use the continuous: *I've been writing emails all morning.*

**State verbs** (know, like, believe…) are not used in the continuous: *I've known her for years* (not I've been knowing).`,
    form: [['Continuo (actividad)', 'Simple (resultado / cantidad)'], ["I've been reading the book.", "I've read the book. (terminado)"], ["She's been writing emails all day.", "She's written ten emails."]],
    uses: ['An activity (finished? it doesn\'t matter) → continuous', 'Result / amount / number of times → simple', 'how long → continuous; how many/much → simple', 'State verbs → simple'],
    aff: ["I've been cleaning the kitchen all morning.|Estuve limpiando la cocina toda la mañana.", "I've cleaned the kitchen. It looks great.|Limpié la cocina. Quedó genial.", "She's written three books.|Escribió tres libros."],
    neg: ["I haven't been sleeping well.|No estuve durmiendo bien."],
    q: ['How many pages have you read?|¿Cuántas páginas leíste?'],
    err: ["I've been knowing her for years.|I've known her for years.|know is a state verb.", "I've been writing five letters today.|I've written five letters today.|A finished amount → simple."],
    cmp: { w: [9, 11], x: 'Amount or result → have done. Duration of the activity → have been doing.' },
    ex: [
      "? I ___ ten emails this morning. | 've been writing | *'ve written | write >> A finished amount (ten) → simple.",
      "? Your hands are dirty. ___ the car? | Have you repaired | *Have you been repairing | Did you repaired >> The activity explains the visible result.",
      "_ How long ___ you ___ (learn) English? = have / been learning >> how long → continuous.",
      "_ How many times ___ you ___ (be) to Italy? = have / been >> how many times → simple.",
      "s I have been [knowing] Paul since we were children. = known >> know is not used in the continuous: I have known.",
      "o I've been reading all afternoon >> How long an activity has lasted.",
      "m I've painted the room = it's finished ; I've been painting the room = an activity, maybe not finished ; I've painted two rooms = an amount >> Activity vs. result.",
      "?2 Ben ___ his car three times this year. | has been crashing | *has crashed | was crashing >> Number of times → simple.",
      "f2 I've been drinking four cups of coffee today. = I've drunk four cups of coffee today ; I have drunk four cups of coffee today >> An amount → simple.",
      "o2 She has been playing tennis since she was eight. >> An action repeated until now.",
    ],
  },
  {
    n: 11, t: 'how long have you (been) … ?', es: 'how long + present perfect', tags: ['present-perfect', 'for-since', 'tenses'], pre: [9, 10],
    goals: ['Ask and answer about duration until now', 'Don\'t use the present for duration until now', 'Use how long have you known/had…'],
    x: `When we talk about **a situation that started in the past and continues now**, and we say **how long**, we use the present perfect (simple or continuous), **not** the present.

*Bob and Alice are married* (present) BUT *They have been married for 20 years* (not *They are married for 20 years*).

**How long have you been** + -ing / **How long have you known / had / been**…? With state verbs we use the simple: *How long have you known Jane?*

In negatives: *I haven't seen Tom for three days* (the last time was three days ago).`,
    form: [['Presente (ahora)', 'Duración hasta ahora'], ['I know Jane.', "I've known Jane for ten years."], ["They're married.", "They've been married since 2005."], ["It's raining.", "It's been raining all day."]],
    uses: ['The duration of something that continues now → present perfect', 'State verbs → have known / have had / have been', "I haven't done something for… → haven't + for"],
    aff: ["I've known Jane for ten years.|Conozco a Jane desde hace diez años.", "They've been married since 2005.|Están casados desde 2005.", "I've had this car for six months.|Tengo este auto hace seis meses."],
    neg: ["I haven't seen Tom for three days.|Hace tres días que no veo a Tom."],
    q: ['How long have you lived here?|¿Cuánto hace que vivís acá?', 'How long have you known each other?|¿Cuánto hace que se conocen?'],
    err: ['I know her since 2010.|I have known her since 2010.|Duration until now → present perfect.', 'How long are you here?|How long have you been here?|Duration until now → present perfect.'],
    cmp: { w: [12], x: 'how long + present perfect asks about duration until now; for/since answer it (unit 12).' },
    ex: [
      "? We ___ each other for a long time. | know | *have known | are knowing >> Duration until now + a state verb.",
      "? ___ here? – Since January. | How long do you live | *How long have you lived | How long you live >> how long + present perfect.",
      "_ My brother ___ (be) ill since Sunday. = has been ; 's been >> since + until now.",
      "_ I ___ (not/see) my parents for a month. = haven't seen ; have not seen >> I haven't seen them for a month.",
      "s I [am] here since nine o'clock. = have been >> since, until now: I have been here.",
      "o I've had this bike for two years >> have (possession) → have had.",
      "o How long have you been learning French? >> How long + have + subject + been + -ing.",
      "?2 'How long ___ married?' 'Twenty years.' | are they | *have they been | were they >> Duration until now.",
      "f2 She works here for five years. = She has worked here for five years ; She's worked here for five years ; She has been working here for five years ; She's been working here for five years >> for + until now → present perfect.",
      "e2 I haven't eaten for hours. | *My last meal was hours ago. | I ate for hours yesterday. | I'm going to eat in a few hours. >> haven't + for = it's X since the last time.",
    ],
  },
  {
    n: 12, t: 'for and since, when … ? and how long … ?', es: 'for / since', tags: ['for-since', 'present-perfect', 'time'], pre: [11],
    goals: ['Choose for (a period) or since (a starting point)', 'Use It\'s … since … and ago', 'Ask when…? and how long…?'],
    x: `**for** + a **period** of time: for two hours, for a week, for ages.
**since** + the **starting point**: since 8 o'clock, since Monday, since 2010, since I was a child.

**ago** = before now (counting back from now), with the **past simple**: *I met her two years ago.*

Questions: **When…?** + past simple (a moment): *When did you arrive?* / **How long…?** + present perfect (duration): *How long have you been here?*

Equivalent structures: *It's two years since I saw Joe* = *I haven't seen Joe for two years.*`,
    form: [['for (período)', 'since (punto de inicio)'], ['for three days', 'since Monday'], ['for ten minutes', "since 4 o'clock"], ['for a long time', 'since I was young']],
    uses: ['for + duration', 'since + starting point', 'ago + past simple', "It's + time + since + past simple"],
    aff: ["I've lived here for ten years.|Vivo acá hace diez años.", "I've lived here since 2014.|Vivo acá desde 2014.", "She left an hour ago.|Se fue hace una hora."],
    neg: ["I haven't seen her since Christmas.|No la veo desde Navidad."],
    q: ['When did you start your job?|¿Cuándo empezaste tu trabajo?', 'How long have you had your car?|¿Cuánto hace que tenés tu auto?'],
    err: ["I've been here since three hours.|I've been here for three hours.|three hours is a period → for.", 'I have met her two years ago.|I met her two years ago.|ago → past simple.'],
    cmp: { w: [11], x: 'for/since answer How long…?; ago answers When…?' },
    ex: [
      "? I've been waiting ___ 20 minutes. | since | *for | ago >> 20 minutes is a period.",
      "? She's been ill ___ Sunday. | for | *since | ago >> Sunday is the starting point.",
      "_ Paula and I have been friends ___ we were at school. = since >> Starting point: since + clause.",
      "_ The film started ten minutes ___. = ago >> ago + past simple.",
      "m for = a week ; since = last Friday ; ago = two days (con past simple) ; for ages = mucho tiempo >> Choose the time word.",
      "s I have known him [since] five years. = for >> five years is a period → for.",
      "o I haven't seen him since 2019 >> since + year.",
      "?2 'It's ages since I last saw you.' means… | *I haven't seen you for ages. | I saw you ages. | I've seen you since ages. >> It's … since … = haven't … for …",
      "f2 I've been here since two weeks. = I've been here for two weeks ; I have been here for two weeks >> A period → for.",
      "b2 it / be / three years / since / I / see / Joe = It's been three years since I saw Joe ; It's three years since I saw Joe ; It has been three years since I saw Joe ; It is three years since I saw Joe >> It's + time + since + past simple.",
      "o2 When did you last go to the cinema? >> When + did + subject + base verb.",
    ],
  },
  {
    n: 13, t: 'Present perfect and past 1 (I have done and I did)', es: 'Present perfect vs. past simple (1)', tags: ['present-perfect', 'past-simple', 'tenses'], pre: [5, 7],
    goals: ['Choose between a present result and a finished fact', 'Give news with the present perfect and the details with the past simple', 'Avoid the present perfect with finished time'],
    x: `**Present perfect**: we are interested in the **present** (the result now). *Tom has lost his key* (he still hasn't got it).
**Past simple**: we talk about a **finished event** and say nothing about the present. *Tom lost his key* (did he find it? we don't know).

Typically, we give the **news** with the present perfect and then the **details** (when, where, how) with the past simple: *I've cut my finger. — How did you do that? — I cut it while I was cooking.*

Don't use the present perfect for things that are not connected with the present (people who have died, finished situations): *Mozart was a composer* (not has been).`,
    form: [['Present perfect', 'Past simple'], ["I've lost my key (no la tengo).", 'I lost my key (¿y ahora? no se dice).'], ["It's stopped raining (ya no llueve).", 'It stopped raining an hour ago.']],
    uses: ['News/result → present perfect', 'Details (when, how) → past simple', 'People/situations that are finished → past simple'],
    aff: ["The police have arrested two men.|La policía arrestó a dos hombres (noticia).", "They were arrested outside the bank.|Fueron arrestados afuera del banco (detalle).", "Shakespeare wrote many plays.|Shakespeare escribió muchas obras."],
    neg: ["I didn't see the match last night.|No vi el partido anoche."],
    q: ['Have you heard? Ann has had a baby!|¿Te enteraste? ¡Ann tuvo un bebé!', 'When did it happen?|¿Cuándo pasó?'],
    err: ['Shakespeare has written many plays.|Shakespeare wrote many plays.|A person who has died: a finished situation.', "I've cut my finger when I was cooking.|I cut my finger when I was cooking.|A detail about when → past simple."],
    cmp: { w: [14], x: 'Unit 14 adds the time expression rule (yesterday vs. today).' },
    ex: [
      "? 'Is Lisa still here?' 'No, she ___.' | went out | *'s gone out | goes out >> Result now: it isn't here.",
      "? Mozart ___ more than 600 pieces of music. | has written | *wrote | writes >> Mozart died: a finished situation.",
      "_ I ___ (cut) my finger. – How did you do that? = 've cut ; have cut >> The news, a present result.",
      "_ How did you do that? – I ___ (cut) it while I was cooking. = cut >> Details of how it happened → past simple.",
      "s My grandfather was a soldier in the war. >> Correct: a finished situation → past simple.",
      "o Have you seen my keys? I can't find them >> A present result.",
      "?2 Which sentence tells us he still hasn't got his key? | Tom lost his key. | *Tom has lost his key. | Tom was losing his key. >> Present perfect = result now.",
      "f2 Who has invented the telephone? = Who invented the telephone >> A finished historical fact.",
      "e2 It's stopped raining. | *The rain has finished, so it isn't raining now. | The rain will finish soon. | The rain was finishing. >> A present result.",
      "o2 The police have arrested two men. >> News: present perfect.",
    ],
  },
  {
    n: 14, t: 'Present perfect and past 2 (I have done and I did)', es: 'Present perfect vs. past simple (2)', tags: ['present-perfect', 'past-simple', 'time'], pre: [13],
    goals: ['Choose the tense according to the time expression', 'Use finished and unfinished periods', 'Use When…? with the past simple'],
    x: `With expressions of **finished time** we use the **past simple**: yesterday, last week, in 2015, ten minutes ago, when I was a child. *I saw her yesterday.*

With **periods that continue until now** we use the **present perfect**: today, this week, recently, so far, since…, ever, never. *I've seen her today.*

**When…?** and **What time…?** go with the past simple: *When did you buy it?*

Compare: *I've done a lot of work today* (the day isn't over) / *I did a lot of work yesterday.* If the morning is over: *Did you see Anna this morning?* (in the afternoon).`,
    form: [['Present perfect (período no terminado)', 'Past simple (tiempo terminado)'], ['today, this week, this year', 'yesterday, last week, last year'], ['recently, so far, ever, since', 'ago, in 2010, when I was…'], ["I've lived here for 5 years (y sigo).", 'I lived there for 5 years (ya no).']],
    uses: ['Finished time → past simple', 'A period until now → present perfect', 'When…? → past simple'],
    aff: ["I've seen a lot of films this year.|Este año vi muchas películas.", "I saw three films last month.|El mes pasado vi tres películas.", "I lived in Rome for two years (now I live in Madrid).|Viví en Roma dos años (ahora vivo en Madrid)."],
    neg: ["It hasn't rained this week.|Esta semana no llovió.", "It didn't rain last week.|La semana pasada no llovió."],
    q: ['When did you arrive?|¿Cuándo llegaste?'],
    err: ['When have you arrived?|When did you arrive?|When → past simple.', "I've finished school in 2018.|I finished school in 2018.|in 2018 = finished."],
    cmp: { w: [13], x: 'Look at the time expression: is the period over or does it continue until now?' },
    ex: [
      "? I ___ Jo yesterday. | 've seen | *saw | see >> yesterday = finished time.",
      "? I ___ four coffees so far this week. | drank | *'ve drunk | was drinking >> so far this week = an unfinished period.",
      "? ___ did you buy your car? | *When | How long | Since when >> When + past simple.",
      "_ We ___ (live) in Leeds from 2010 to 2016. = lived >> A finished period.",
      "_ It ___ (not/rain) so far this summer. = hasn't rained ; has not rained >> so far = until now.",
      "s I lost my phone two days ago. >> Correct: ago = finished time → past simple.",
      "m so far = until now (present perfect) ; two years ago = finished time (past simple) ; recently = in the recent past (present perfect) ; last night = the night before today (past simple) >> The time expression → the tense.",
      "o I didn't see anybody yesterday >> yesterday → past simple.",
      "f2 When have you started your new job? = When did you start your new job >> When → past simple.",
      "?2 (It's 3 p.m.) ___ Anna this morning? | Have you seen | *Did you see | Do you see >> The morning is already over.",
      "b2 Mr Lee / work / in a bank / for 15 years / then he retired = Mr Lee worked in a bank for 15 years. Then he retired ; Mr Lee worked in a bank for 15 years, then he retired >> A finished period (he has retired).",
    ],
  },
  {
    n: 15, t: 'Past perfect (I had done)', es: 'Pasado perfecto', tags: ['past-perfect', 'tenses'], pre: [5, 7],
    goals: ['Form had + past participle', 'Talk about something earlier than another moment in the past', 'Compare the past perfect with the past simple'],
    x: `The **past perfect** (had + past participle) shows that something happened **before** another moment in the past. It is the "past of the past".

*When Sarah arrived at the party, Paul **had** already **gone** home* (Paul left before she arrived).

Compare: *When I got home, Ben **left*** (I arrived and then he left) / *When I got home, Ben **had left*** (he had already gone).

It is also the past of the present perfect: *I'd never seen her before* (at that moment). *The house was dirty. They hadn't cleaned it for weeks.*`,
    form: [['Sujeto', 'had', 'participio'], ['I / you / he / she / we / they', 'had (’d)', 'gone / finished / seen']],
    uses: ['An action before another past action', 'The past of the present perfect (never … before, already, for/since)', 'Contrast of order with the past simple'],
    aff: ['When I arrived, the film had already started.|Cuando llegué, la película ya había empezado.', "I didn't know who she was. I'd never seen her before.|No sabía quién era. Nunca la había visto."],
    neg: ["He hadn't eaten anything all day, so he was hungry.|No había comido nada en todo el día, así que tenía hambre."],
    q: ['Had you met him before the party?|¿Lo habías conocido antes de la fiesta?'],
    err: ['When we arrived, the train has left.|When we arrived, the train had left.|Earlier than another past action → had left.', 'I had went home.|I had gone home.|had + past participle (gone).'],
    cmp: { w: [5, 16], x: 'Past simple = the normal order. Past perfect = something had already happened before the moment we are talking about.' },
    ex: [
      "? When I got to the station, the train ___. I'd missed it. | left | *had left | has left >> She had already left before he arrived.",
      "_ I didn't recognise her. I ___ (never/see) her before. = had never seen ; 'd never seen >> The past of the present perfect.",
      "? When Ann arrived, we ___ dinner. (we started after she arrived) | had had | *had | have had >> Normal order of events → past simple.",
      "_ The house was dirty. They ___ (not/clean) it for weeks. = hadn't cleaned ; had not cleaned >> Earlier than the moment in the past.",
      "s By the time we arrived, everybody had [went] home. = gone >> had + past participle: gone.",
      "o By the time I arrived, the meeting had finished. >> had + past participle for the earlier action.",
      "o When I arrived, they had already left >> had already + past participle.",
      "?2 Which means Ben left BEFORE I got home? | When I got home, Ben left. | *When I got home, Ben had left. >> had left = earlier.",
      "f2 I was very nervous because I have never flown before. = I was very nervous because I had never flown before ; I was very nervous because I'd never flown before >> The past of the present perfect.",
      "b2 she / feel / tired / because / she / not / sleep / well = She felt tired because she hadn't slept well ; She felt tired because she had not slept well >> An earlier cause → past perfect.",
    ],
  },
  {
    n: 16, t: 'Past perfect continuous (I had been doing)', es: 'Pasado perfecto continuo', tags: ['past-perfect', 'tenses'], pre: [9, 15],
    goals: ['Form had been + -ing', 'Explain a past situation with an earlier activity', 'Talk about duration until a moment in the past'],
    x: `**had been + -ing** describes an **activity** that went on **before** a moment in the past (and maybe continued).

*Yesterday morning the ground was wet. It **had been raining**.* (an activity that explains what you could see).

With **duration** until a moment in the past: *We'd been playing for half an hour when it started to rain.*

Compare with the present: *I've been waiting for an hour* (until now) / *I'd been waiting for an hour when he arrived* (until a moment in the past). State verbs go in the simple: *I'd known him for years.*`,
    form: [['Sujeto', 'had been', 'verbo -ing'], ['I / you / he / she / we / they', 'had been (’d been)', 'working']],
    uses: ['An earlier activity that explains a past situation', 'Duration until a moment in the past (for/since/how long)'],
    aff: ['Her eyes were red. She had been crying.|Tenía los ojos rojos. Había estado llorando.', "We'd been walking for hours when we found a café.|Llevábamos horas caminando cuando encontramos un café."],
    neg: ["He hadn't been feeling well for weeks.|Hacía semanas que no se sentía bien."],
    q: ['How long had you been waiting when the bus came?|¿Cuánto llevabas esperando cuando llegó el colectivo?'],
    err: ["I'd been knowing her for years.|I'd known her for years.|know → simple.", 'We were playing for an hour when it started to rain.|We had been playing for an hour when it started to rain.|Duration until a moment in the past.'],
    cmp: { w: [9, 15], x: 'Had been doing (an activity) → had been doing. Had done (a result) → had done.' },
    ex: [
      "_ Tom was out of breath. He ___ (run). = had been running ; 'd been running >> An earlier activity that explains the situation.",
      "? We ___ for two hours when the car broke down. | were driving | *had been driving | have been driving >> Duration until a moment in the past.",
      "? When I met her, I ___ her name for months. | had been knowing | *had known | knew >> know → simple.",
      "s They had [be] waiting for an hour when the doctor called them. = been >> had + been + -ing.",
      "o She had been working there for ten years when she left. >> had been + -ing + for.",
      "o I was tired because I had been working all day >> An earlier activity.",
      "?2 The ground was wet. It ___. | has been raining | *had been raining | rains >> The past of the present perfect continuous.",
      "f2 I've been waiting for 20 minutes when he finally arrived. = I had been waiting for 20 minutes when he finally arrived ; I'd been waiting for 20 minutes when he finally arrived >> A moment in the past → had been.",
      "e2 They had been arguing. | *They were arguing before that moment in the past. | They are arguing now. | They are going to argue. >> had been + -ing.",
    ],
  },
  {
    n: 17, t: 'have and have got', es: 'have y have got', tags: ['have'],
    goals: ['Use have and have got for possession, relationships and illnesses', 'Form negatives and questions', 'Use have for actions (have a shower, have lunch)'],
    x: `For **possession, relationships, illnesses and appointments** we can use **have** or **have got** (informal British English): *I've got a car = I have a car.*

Negatives and questions: *I haven't got / I don't have*; *Have you got…? / Do you have…?* (not *Have you a car?*).

In the **past** we only use **had** (not had got): *I had a bike when I was a child.* *Did you have…?*

**have** is also used for **actions**: have breakfast/lunch, have a shower, have a rest, have a good time, have a baby, have a look. With this meaning we **don't** use have got, and it can be continuous: *I'm having a shower.*`,
    form: [['have', 'have got'], ['I have a car.', "I've got a car."], ["I don't have a car.", "I haven't got a car."], ['Do you have a car?', 'Have you got a car?']],
    uses: ['Possession, relationships, illnesses', 'Past: had / did you have', 'have + action: have lunch, have a shower…'],
    aff: ["We've got a new flat.|Tenemos un departamento nuevo.", "I have a headache.|Me duele la cabeza.", "We're having lunch at the moment.|Estamos almorzando ahora."],
    neg: ["She doesn't have any brothers.|No tiene hermanos.", "I haven't got time.|No tengo tiempo."],
    q: ['Have you got a pen?|¿Tenés una birome?', 'Did you have a good holiday?|¿Tuviste buenas vacaciones?'],
    err: ['Have you a car?|Do you have a car?|Question: Do you have / Have you got.', "I'm having a car.|I have a car.|Possession is not used in the continuous."],
    ex: [
      "? ___ any brothers or sisters? | Have you | *Have you got | Are you having >> Have you got…? or Do you have…?",
      "_ I ___ (not/have) a car, so I go by bus. = don't have ; do not have ; haven't got ; have not got >> Negative of possession.",
      "? We ___ a great time at the party last night. | had got | *had | have got >> Past: had (not had got).",
      "? Sorry, I can't talk now. I ___ a shower. | have got | *'m having | have >> have + action can be continuous.",
      "s She [has] a baby last year. = had >> A past action (last year): had a baby.",
      "m have breakfast = desayunar ; have a shower = ducharse ; have a look = echar un vistazo ; have a rest = descansar >> have + noun = an action.",
      "o Have you got time >> Possession.",
      "?2 'Did you have a bike when you were a child?' 'Yes, I ___.' | had got | *did | have >> Short answer in the past: did.",
      "f2 Are you having a headache? = Have you got a headache ; Do you have a headache >> An illness = possession, not continuous.",
      "o2 What time do you usually have lunch? >> have lunch = an action → do in questions.",
    ],
  },
  {
    n: 18, t: 'used to (do)', es: 'used to', tags: ['used-to', 'past-simple'], pre: [5],
    goals: ['Talk about past habits and situations that don\'t exist any more', 'Form negatives and questions with did … use to', 'Don\'t confuse used to with the present'],
    x: `**used to + infinitive** = something happened **regularly** or was true **in the past**, but **not any more**. *I used to play tennis* (I don't play now).

Also for past **states**: *There used to be a cinema here.*

Negative and question: **didn't use to**, **Did you use to…?** (no -d).

**used to** only exists in the past. For the present we use the present simple: *I usually get up early* (not *I use to*).

Don't confuse it with **be used to doing** (be familiar with something), unit 61.`,
    form: [['Afirmativa', 'Negativa', 'Pregunta'], ['I used to play', "I didn't use to play", 'Did you use to play?']],
    uses: ['Past habits that don\'t happen any more', 'Past states/situations (There used to be…)', 'Present → present simple, not use to'],
    aff: ['I used to live in Paris.|Antes vivía en París.', 'There used to be a cinema in this street.|Antes había un cine en esta calle.', 'Kate used to smoke, but she stopped.|Kate fumaba, pero dejó.'],
    neg: ["I didn't use to like cheese, but now I love it.|Antes no me gustaba el queso, pero ahora me encanta."],
    q: ['Did you use to play football?|¿Jugabas al fútbol antes?'],
    err: ['I use to get up early every day.|I usually get up early every day.|Present → present simple with usually.', "I didn't used to like it.|I didn't use to like it.|After didn't: use (no -d)."],
    cmp: { w: [36, 61], x: 'would also expresses past habits (not states): unit 36. be used to doing = be familiar with: unit 61.' },
    ex: [
      "? I ___ a lot, but now I don't read at all. | was reading | *used to read | use to read >> A past habit that doesn't exist any more.",
      "_ There ___ (be) a park here, but they built a hotel. = used to be >> A past situation.",
      "_ ___ you ___ (live) in London? = Did / use to >> Question: Did + use to.",
      "s I didn't [used] to like vegetables. = use >> didn't + use to.",
      "? She ___ to work by bike. (present habit) | uses | *goes | used >> Present: present simple.",
      "o We used to go to the beach every summer. >> used to + base verb.",
      "o I used to have long hair >> A past situation → used to.",
      "f2 I use to go to the gym on Mondays. = I usually go to the gym on Mondays ; I go to the gym on Mondays >> used to has no present form.",
      "?2 Which sentence is correct? | *My grandfather used to be a farmer. | My grandfather is used to be a farmer. | My grandfather use to be a farmer. >> used to + base verb.",
      "b2 Dan / not / use to / eat / meat = Dan didn't use to eat meat ; Dan did not use to eat meat >> didn't use to.",
    ],
  },
];

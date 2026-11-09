import type { UnitSrc } from '../dsl';

// Module 1 — Present and past (EGU units 1–6)
export const m01: UnitSrc[] = [
  {
    n: 1, t: 'Present continuous (I am doing)', es: 'Presente continuo', tags: ['present-continuous', 'tenses'],
    goals: ['Form the present continuous with am/is/are + -ing', 'Use it for actions in progress now or “around now”', 'Talk about situations that are changing'],
    x: `The **present continuous** describes an action that **has started but hasn't finished yet**: you are “in the middle” of doing it.

It can be happening **at this moment** (She's driving to work) or **around now**, even if not at the exact moment you are speaking (I'm reading a great book — I started it and I haven't finished it).

We also use it with periods that include the present (**today, this week, this year**) and for **changing situations** (get, change, become, increase, rise, improve).`,
    form: [['Sujeto', 'be', 'verbo + -ing'], ['I', 'am (’m)', 'working'], ['he / she / it', 'is (’s)', 'working'], ['we / you / they', 'are (’re)', 'working']],
    uses: ['An action in progress at the moment of speaking', 'An action in progress “around now” (although not at this exact moment)', 'With today / this week / this year…', 'Changes in progress: get, change, become, increase, rise, improve, begin, start'],
    aff: ["She's driving to work right now.|Está manejando al trabajo ahora mismo.", "Kate is learning Italian because she wants to work in Rome.|Kate está aprendiendo italiano porque quiere trabajar en Roma.", "The population of the world is rising very fast.|La población mundial está aumentando muy rápido."],
    neg: ["It isn't raining any more.|Ya no está lloviendo.", "I'm not working this week. I'm on holiday.|No estoy trabajando esta semana. Estoy de vacaciones."],
    q: ["Are you enjoying your new job?|¿Estás disfrutando tu nuevo trabajo?", "What's happening? Why is everybody shouting?|¿Qué está pasando? ¿Por qué grita todo el mundo?"],
    err: ["Please be quiet. I try to work.|Please be quiet. I'm trying to work.|The action is in progress now: present continuous.", "Is your English get better?|Is your English getting better?|be + -ing: the -ing is missing.", "She is work today.|She is working today.|After am/is/are the verb takes -ing."],
    cmp: { w: [2, 3], x: 'Present simple (I do) = general facts and repeated actions. Present continuous (I am doing) = an action in progress, temporary.' },
    ex: [
      "? Listen! Somebody ___ the piano. | plays | *is playing | play >> Listen! shows it is happening now: present continuous.",
      "_ Please don't make so much noise. I ___ (try) to work. = 'm trying ; am trying >> An action in progress at this moment → am + trying.",
      "_ Let's go out now. It ___ (not/rain) any more. = isn't raining ; is not raining ; 's not raining >> Negative: is not + -ing.",
      "? 'Where's Mark?' 'He ___ a shower.' | has | *'s having | have >> He is in the shower right now: an action in progress.",
      "o She is learning Italian this year. >> Order: subject + am/is/are + verb-ing + the rest.",
      "o I'm reading a very interesting book >> You started it and haven't finished it: present continuous.",
      "s Your English is getting better. >> The sentence is correct: a change in progress (get better).",
      "f The price of food increase at the moment. = The price of food is increasing at the moment >> A change in progress now: is increasing.",
      "?2 Which sentence describes something happening 'around now' but not necessarily at this moment? | *Some friends of mine are building their own house. | I'm writing this sentence now. | I write to my mother every week. >> They are building the house this year, although not exactly now.",
      "_2 You ___ (work) hard today. 'Yes, I have a lot to do.' = 're working ; are working >> today is a period around now → present continuous.",
      "b2 why / you / look / at me / like that = Why are you looking at me like that >> Question: Wh- + are + subject + -ing.",
      "s2 Is it [rain] now? = raining >> The -ing is missing: Is it raining now?",
    ],
  },
  {
    n: 2, t: 'Present simple (I do)', es: 'Presente simple', tags: ['present-simple', 'tenses'],
    goals: ['Form the present simple, including the 3rd person -s', 'Use do/does in negatives and questions', 'Talk about habits, general facts and frequency'],
    x: `We use the **present simple** for **general facts** and **things that happen again and again or as a habit**. It doesn't matter if it is happening now.

With **he/she/it** the verb takes **-s** (works, does, has). In negatives and questions we use **do/does** and the verb goes back to its base form: She doesn't work / Does she work?

We use it with frequency expressions (always, often, never, every day, How often…?). Also with verbs that do the action when you say them: **I promise**, **I suggest**, **I apologise**, **I insist**.`,
    form: [['Afirmativa', 'Negativa', 'Pregunta'], ['I/we/you/they work', "I/we/you/they don't work", 'do I/we/you/they work?'], ['he/she/it works', "he/she/it doesn't work", 'does he/she/it work?']],
    uses: ['General facts and truths', 'Habits and routines (every day, usually…)', 'Asking how often: How often…?', 'Promises, suggestions, apologies: I promise, I suggest'],
    aff: ['Nurses look after patients in hospitals.|Los enfermeros cuidan a los pacientes en los hospitales.', 'The earth goes round the sun.|La Tierra gira alrededor del Sol.', 'I promise I won’t be late.|Prometo que no llegaré tarde.'],
    neg: ["I don't go away very often.|No salgo de viaje muy seguido.", "Rice doesn't grow in cold climates.|El arroz no crece en climas fríos."],
    q: ['How often do you go to the dentist?|¿Cada cuánto vas al dentista?', 'What does this word mean?|¿Qué significa esta palabra?'],
    err: ['She work in a bank.|She works in a bank.|3rd person singular: verb + -s.', "He don't like coffee.|He doesn't like coffee.|With he/she/it the auxiliary is does.", 'Does she plays tennis?|Does she play tennis?|After does the verb is in the base form.'],
    cmp: { w: [1, 3], x: 'If the action is general or repeated → present simple. If it is in progress or temporary → present continuous.' },
    ex: [
      "? Water ___ at 100 degrees Celsius. | *boils | is boiling | boil >> It is a general fact: present simple with -s.",
      "_ Julia ___ (speak) four languages. = speaks >> 3rd person singular → speaks.",
      "_ I ___ (not/watch) TV very often. = don't watch ; do not watch >> Negative with I → don't + base verb.",
      "? How often ___ to the cinema? | you go | *do you go | are you going >> A question about frequency in the present simple: do + subject + verb.",
      "s She [don't] eat meat. = doesn't >> With she we use doesn't.",
      "o What time does the film start? >> Question: Wh- + does + subject + base verb.",
      "o I don't understand this word >> Negative: don't + understand.",
      "m A habit = I get up at 7 every day. ; A general fact = The sun rises in the east. ; A promise = I promise I'll call you. >> The present simple has several general uses.",
      "f2 Does your brother works in London? = Does your brother work in London >> After does → base verb (work).",
      "?2 'I'm tired.' 'Then I ___ that you go to bed early tonight.' | am suggesting | *suggest | suggests >> With suggest/promise/apologise, saying the verb is the action: present simple.",
      "_2 What ___ your sister ___ (do)? – She's a teacher. = does / do >> Asking about someone's job → What does she do?",
      "b2 Tom / not / drink / coffee / very often = Tom doesn't drink coffee very often ; Tom does not drink coffee very often >> 3rd person → doesn't + base verb.",
    ],
  },
  {
    n: 3, t: 'Present continuous and present simple 1 (I am doing and I do)', es: 'Continuo vs. simple (1)', tags: ['present-simple', 'present-continuous', 'tenses'], pre: [1, 2],
    goals: ['Tell the difference between actions in progress and general facts', 'Tell temporary situations from permanent ones', 'Use always + continuous for complaints'],
    x: `Let's compare the two present tenses:

**Present continuous** → actions **in progress** now or in a period around now; **temporary** situations. *I'm living with friends until I find a flat.*

**Present simple** → things **in general** or **repeated** things; **permanent** situations. *My parents live in London.*

**I always do** = I do it every time. **I'm always doing** = I do it too often, more than is normal (often a complaint): *I've lost my keys again. I'm always losing them.*`,
    form: [['Present continuous', 'Present simple'], ['acción en curso / temporal', 'general / repetida / permanente'], ["The water is boiling. Can you turn it off?", 'Water boils at 100 °C.'], ["I'm living with friends (temporal)", 'I live in Buenos Aires (permanente)']],
    uses: ['Temporary → continuous; permanent → simple', 'In progress → continuous; repeated → simple', "always + continuous = 'too often'"],
    aff: ["The water is boiling. Can you turn it off?|El agua está hirviendo. ¿Podés apagarla?", "I'm living with some friends until I find a flat.|Estoy viviendo con amigos hasta encontrar un departamento.", "Paul is always complaining.|Paul se queja todo el tiempo."],
    neg: ["I don't usually work at weekends, but I'm working this Saturday.|Normalmente no trabajo los fines de semana, pero este sábado sí."],
    q: ["What do you do? / What are you doing?|¿A qué te dedicás? / ¿Qué estás haciendo?"],
    err: ["My parents are living in Rome all their lives.|My parents have lived in Rome all their lives.|A permanent situation that started in the past → present perfect (see unit 11).", "I'm always going to work by bus.|I always go to work by bus.|A normal habit without a complaint → present simple."],
    cmp: { w: [1, 2, 4], x: 'Think: temporary or permanent? In progress or a habit?' },
    ex: [
      "? Hurry up! Everybody ___ for you. | waits | *is waiting | wait >> It is happening now.",
      "? My parents ___ in a small village near the coast. | are living | *live | lives >> A permanent situation → present simple.",
      "_ I'm ___ (live) with friends until I find a flat. = living >> A temporary situation → present continuous.",
      "? 'What ___?' 'I'm an engineer.' | are you doing | *do you do | you do >> What do you do? = what is your job?",
      "_ Normally I ___ (finish) work at 5, but this week I ___ (work) until 6. = finish / 'm working ; finish / am working >> A routine vs. a temporary situation this week.",
      "s The river is flowing very fast today. It's usually much slower. >> Correct: today, temporary → continuous.",
      "f The River Nile is flowing into the Mediterranean. = The River Nile flows into the Mediterranean >> A permanent geographical fact → present simple.",
      "?2 I've lost my phone again. I ___ it! | always lose | *'m always losing | always am losing >> always + continuous = it happens too often (a complaint).",
      "o2 I usually take the train, but this week I'm going by car >> Usual → simple; temporary → continuous.",
      "o2 You're always interrupting me when I'm talking! >> A complaint: always + continuous.",
    ],
  },
  {
    n: 4, t: 'Present continuous and present simple 2 (I am doing and I do)', es: 'Continuo vs. simple (2): verbos de estado', tags: ['present-simple', 'present-continuous', 'state-verbs', 'tenses'], pre: [3],
    goals: ['Recognise state verbs', 'Use think/have/see/be with their two meanings', 'Know when look/feel can take both forms'],
    x: `Some verbs are **not normally used in the continuous** because they describe **states**, not actions: like, love, hate, want, need, prefer, know, realise, suppose, mean, understand, believe, remember, belong, fit, contain, consist, seem.

**think**: *I think (= in my opinion) you're right* — a state; *I'm thinking about the problem* — a mental action.
**have**: *I have a car* (possession) — a state; *I'm having a shower / lunch* — an action.
**see/hear/smell/taste**: usually simple, often with **can**: *I can hear music.*
**be**: *He's selfish* (always); *He's being selfish* (he's behaving like that now).
**look / feel** (health/appearance): both forms are possible: *You look / You're looking well.*`,
    form: [['Verbo', 'Estado (simple)', 'Acción (continuo)'], ['think', 'I think it’s a good idea.', "I'm thinking about it."], ['have', 'She has two brothers.', "She's having dinner."], ['see', 'I see what you mean.', "I'm seeing the doctor tomorrow."], ['be', 'He is lazy.', "He's being lazy today."]],
    uses: ['State verbs → simple', 'think/have/see/be change their meaning in the continuous', 'look/feel (health) can take both'],
    aff: ['I want something to eat.|Quiero algo para comer.', "I'm thinking of buying a new car.|Estoy pensando en comprar un auto nuevo.", "You're being very selfish today.|Hoy estás siendo muy egoísta."],
    neg: ["I don't understand what you mean.|No entiendo lo que querés decir."],
    q: ['Do you know that woman?|¿Conocés a esa mujer?', 'What do you think of my plan?|¿Qué pensás de mi plan?'],
    err: ["I'm wanting a coffee.|I want a coffee.|want is a state verb.", 'Are you believing in God?|Do you believe in God?|believe → simple.', "This bag is belonging to me.|This bag belongs to me.|belong → simple."],
    cmp: { w: [3], x: 'The general rule from unit 3 + an exception: state verbs prefer the simple even when we talk about now.' },
    ex: [
      "? I ___ what you mean. | 'm understanding | *understand | understands >> understand is a state verb.",
      "? Be quiet! I ___ about something. | think | *'m thinking | thinks >> A mental action in progress → continuous.",
      "? What ___ of the film? Did you like it? | are you thinking | *do you think | you think >> think = opinion → simple.",
      "_ This bag ___ (belong) to my sister. = belongs >> belong → present simple.",
      "? We ___ dinner. Can I call you back? | have | *'re having | has >> have dinner = an action → continuous.",
      "s I don't [believing] you. = believe >> After don't we use the base verb; also, believe is a state verb.",
      "f Who is this umbrella belonging to? = Who does this umbrella belong to >> belong → simple; question with does.",
      "?2 He's usually polite, but today he ___ very rude. | is | *is being | be >> be in the continuous = temporary behaviour.",
      "e2 You look well today. | *You seem healthy and fine today. | You are looking at something carefully today. | You can see well today. >> look = seem (appearance).",
      "m2 I think you're right = an opinion ; I'm thinking about my holidays = a mental activity ; I have a car = possession ; I'm having a bath = an action >> think and have change their meaning.",
      "_2 I ___ (not/remember) his name. = don't remember ; do not remember >> remember → simple.",
    ],
  },
  {
    n: 5, t: 'Past simple (I did)', es: 'Pasado simple', tags: ['past-simple', 'tenses', 'irregular-verbs'],
    goals: ['Form the past of regular and irregular verbs', 'Use did in negatives and questions', 'Use was/were'],
    x: `The **past simple** talks about actions or situations **finished in the past**, usually with a known time (yesterday, last week, in 2010, ago).

**Regular** verbs: -ed (work → worked). Many verbs are **irregular** (go → went, see → saw); see the list of irregular verbs in the Reference section.

In negatives and questions: **did / didn't + base verb**: *I didn't go. Did you see it?*
The verb **be** doesn't use did: **was/were**, **wasn't/weren't**: *Were you at home?*`,
    form: [['Afirmativa', 'Negativa', 'Pregunta'], ['I worked / I went', "I didn't work / go", 'Did you work / go?'], ['I/he/she/it was', "wasn't", 'was he…?'], ['we/you/they were', "weren't", 'were they…?']],
    uses: ['An action finished at a moment in the past', 'A sequence of past actions', 'Past habits (also used to, unit 18)'],
    aff: ['Mozart wrote more than 600 pieces of music.|Mozart escribió más de 600 piezas musicales.', 'We went to the cinema last night.|Fuimos al cine anoche.'],
    neg: ["I didn't sleep well last night.|No dormí bien anoche.", "We weren't hungry, so we didn't eat anything.|No teníamos hambre, así que no comimos nada."],
    q: ['Did you go out last night?|¿Saliste anoche?', 'What time did the film start?|¿A qué hora empezó la película?', 'Were you late this morning?|¿Llegaste tarde esta mañana?'],
    err: ['I didn’t went to work.|I didn’t go to work.|After didn\'t, base verb.', 'Did you saw him?|Did you see him?|After did, base verb.', 'Did you be tired?|Were you tired?|be doesn\'t use did.'],
    cmp: { w: [6, 13], x: 'Past continuous = in the middle of a past action. Present perfect = a connection with the present, with no finished time.' },
    ex: [
      "_ Yesterday I ___ (go) to the supermarket. = went >> go is irregular: went.",
      "_ We ___ (not/enjoy) the party, so we left early. = didn't enjoy ; did not enjoy >> Negative: didn't + base verb.",
      "? ___ at home last night? | Did you be | *Were you | Was you >> be → were you.",
      "? Where ___ your holiday last year? | you spent | *did you spend | did you spent >> did + base verb.",
      "s I saw him yesterday but I didn't [spoke] to him. = speak >> After didn't the verb is in the base form: speak. ++ I saw him yesterday but I didn't speak to him.",
      "f They didn't went out because it was raining. = They didn't go out because it was raining ; They did not go out because it was raining >> didn't + go.",
      "o What time did you get up this morning? >> Wh- + did + subject + base verb.",
      "o I lost my keys yesterday >> lose → lost.",
      "m buy = bought ; think = thought ; catch = caught ; teach = taught >> Irregular verbs ending in -ought/-aught.",
      "_2 'Did you phone Ana?' 'No, I ___ (not/have) time.' = didn't have ; did not have >> didn't + have.",
      "b2 when / you / start / your job = When did you start your job >> Wh- + did + subject + base verb.",
    ],
  },
  {
    n: 6, t: 'Past continuous (I was doing)', es: 'Pasado continuo', tags: ['past-continuous', 'past-simple', 'tenses'], pre: [5],
    goals: ['Form was/were + -ing', 'Describe an action in progress at a moment in the past', 'Combine the past continuous and the past simple'],
    x: `The **past continuous** shows that someone was **in the middle of an action** at a moment in the past: the action had started but not finished. *At 10 o'clock I was watching TV.*

With the **past simple**: the long action (continuous) is **interrupted** by a short one (simple). *I was walking home when I met Tom.*

If the actions happen **one after the other**, we use the past simple for both: *When Ann arrived, we had dinner* (she arrived and then we had dinner).

**State verbs** (know, want…) are not usually used in the continuous: *We were good friends. We knew each other well.*`,
    form: [['Sujeto', 'was/were', 'verbo + -ing'], ['I / he / she / it', 'was', 'playing'], ['we / you / they', 'were', 'playing']],
    uses: ['An action in progress at a moment in the past', 'A long action interrupted by another one (when)', 'Two actions at the same time (while)'],
    aff: ['This time last year I was living in Brazil.|El año pasado a esta hora vivía en Brasil.', 'It was raining when I got up.|Estaba lloviendo cuando me levanté.'],
    neg: ["I waved to her but she wasn't looking.|La saludé pero no estaba mirando."],
    q: ['What were you doing at 11 last night?|¿Qué estabas haciendo anoche a las 11?'],
    err: ['I was knowing him well.|I knew him well.|know → simple.', 'When I arrived, Jo was cooking dinner and then we were eating it.|When I arrived, Jo was cooking dinner and then we ate it.|Actions one after another → past simple.'],
    cmp: { w: [5], x: 'When Ann arrived, we were having dinner (we had already started) ≠ When Ann arrived, we had dinner (we had dinner after she arrived).' },
    ex: [
      "_ At 8 o'clock yesterday I ___ (have) breakfast. = was having >> An action in progress at a moment in the past.",
      "? I ___ home when I met Lisa. | walked | *was walking | were walking >> A long action that was interrupted.",
      "? While I was working in the garden, I ___ my back. | was hurting | *hurt | hurting >> A short action that interrupts → past simple.",
      "? When Ann arrived, we ___ dinner, so we invited her to join us. | had | *were having | have >> They were already having dinner when he arrived.",
      "_ We ___ (not/watch) TV when you called. = weren't watching ; were not watching >> Negative: weren't + -ing.",
      "s Yesterday I [see] Sue in town, but she didn't see me. = saw >> A short, complete action in the past → saw.",
      "o What were you doing when the phone rang? >> Interruption: past continuous + when + past simple.",
      "o It was raining when we went out >> A background action → past continuous.",
      "f2 We were being good friends. We were knowing each other well. = We were good friends. We knew each other well >> be/know are states here → simple.",
      "?2 Which sentence means 'first Ann arrived, then we had dinner'? | When Ann arrived, we were having dinner. | *When Ann arrived, we had dinner. >> Past simple in both = one action after another.",
      "b2 the phone / ring / while / I / have / a shower = The phone rang while I was having a shower ; While I was having a shower, the phone rang >> while + a long action (continuous).",
    ],
  },
];

import type { UnitSrc } from '../dsl';

// Module 8 — Questions and auxiliary verbs (EGU units 49–52)
export const m08: UnitSrc[] = [
  {
    n: 49, t: 'Questions 1', es: 'Preguntas (1)', tags: ['questions', 'auxiliaries'],
    goals: ['Swap the subject and the auxiliary in questions', 'Use do/does/did in the present and past simple', 'Make subject questions without do (Who phoned?)'],
    x: `In questions the **auxiliary goes before the subject**: *Tom will → Will Tom…? You have been → Have you been…?*

In the present and past simple we use **do/does/did**: *Do you live near here? What time did the train leave?*

**Subject questions**: if *who/what* is the **subject**, we don't use do: *Who phoned you?* (someone phoned) ≠ *Who did you phone?* (you phoned someone). *What happened?*

**Prepositions** usually go at the **end**: *Who are you talking to? What is it made of?*

Negative questions (*Didn't you hear…? Why don't we…?*) show surprise or suggest something.`,
    form: [['Wh-', 'Auxiliar', 'Sujeto', 'Verbo'], ['Where', 'do', 'you', 'live?'], ['What', 'did', 'she', 'say?'], ['How long', 'have', 'you', 'been here?'], ['Who', '—', '(sujeto)', 'called you?']],
    uses: ['Auxiliary + subject', 'do/does/did in simple tenses', 'Subject questions without do', 'The preposition at the end'],
    aff: ['Tom will come. → Will Tom come?|Tom vendrá. → ¿Vendrá Tom?', 'You have been to Rome. → Have you been to Rome?|Estuviste en Roma. → ¿Estuviste en Roma?'],
    neg: ["Didn't you hear the doorbell?|¿No escuchaste el timbre?"],
    q: ['Where do your parents live?|¿Dónde viven tus padres?', 'Who told you?|¿Quién te lo dijo?', 'What are you looking for?|¿Qué estás buscando?', 'How many people came to the party?|¿Cuánta gente vino a la fiesta?'],
    err: ['Where you live?|Where do you live?|The auxiliary do is missing.', 'Who did tell you?|Who told you?|A subject question: no did.'],
    cmp: { w: [50], x: 'Indirect questions (Do you know where he lives?): no inversion, unit 50.' },
    ex: [
      "? Where ___? | you work | *do you work | does you work >> do + subject + base verb.",
      "? Who ___ the window? (somebody broke it) | did break | *broke | did broke >> Subject question: no did.",
      "? Who ___ at the party? (you saw somebody) | saw you | *did you see | you saw >> Object question: did + subject.",
      "_ What ___ (happen) last night? = happened >> What as the subject: no did.",
      "_ How long ___ you ___ (wait)? = have / been waiting >> The auxiliary goes before the subject.",
      "s Where [you] live? = do you >> The auxiliary is missing: Where do you live?",
      "o Who are you writing to? >> The preposition goes at the end.",
      "o What happened to you >> A subject question.",
      "?2 'I'm thinking.' 'What ___ about?' | you are thinking | *are you thinking | do you think >> Auxiliary + subject + -ing.",
      "b2 how many / students / pass / the exam = How many students passed the exam >> How many students = subject: no did.",
      "f2 What means this word? = What does this word mean >> do + subject + base verb.",
    ],
  },
  {
    n: 50, t: 'Questions 2 (do you know where … ? / he asked me where …)', es: 'Preguntas indirectas', tags: ['questions', 'reported-speech'], pre: [49],
    goals: ['Make indirect questions without inversion', 'Use if/whether in yes/no questions', 'Report questions with asked'],
    x: `When a question is **inside another sentence** (*Do you know…? Can you tell me…? I wonder…*), we use **affirmative word order** (subject + verb) and **no do/does/did**:
*Where has Tom gone?* → *Do you know where Tom has gone?*
*What time does the film start?* → *Can you tell me what time the film starts?*

If there is no question word, we use **if** or **whether**: *Do you know if they're coming?*

The same in **reported questions**: *'Where do you live?'* → *She asked me where I lived.* *He asked me if I was hungry.*`,
    form: [['Directa', 'Indirecta'], ['Where is the station?', 'Could you tell me where the station is?'], ['Did she call?', 'Do you know if she called?'], ['What do you want?', 'He asked me what I wanted.']],
    uses: ['Do you know / Can you tell me / I wonder + affirmative word order', 'if/whether for yes/no questions', 'He asked (me) + affirmative word order'],
    aff: ["I wonder what she's doing now.|Me pregunto qué estará haciendo.", 'She asked me where I lived.|Me preguntó dónde vivía.'],
    neg: ["I don't know if he's at home.|No sé si está en casa."],
    q: ['Do you know where the bank is?|¿Sabés dónde queda el banco?', 'Can you tell me what time it is?|¿Me podés decir qué hora es?'],
    err: ['Do you know where is the station?|Do you know where the station is?|An indirect question: subject + verb.', 'He asked me where did I live.|He asked me where I lived.|No did in reported questions.'],
    cmp: { w: [47, 49], x: 'It combines question word order (49) with reported speech (47).' },
    ex: [
      "? Do you know where ___? | is Tom | *Tom is | does Tom >> Indirect: subject + verb.",
      "? Can you tell me what time ___? | does the bus leave | *the bus leaves | leaves the bus >> Without does, the verb has -s.",
      "_ I don't know ___ she's coming or not. = if ; whether >> Yes/no question → if/whether.",
      "_ 'How old are you?' → He asked me how old I ___. = was >> Reported: subject + verb moved back.",
      "s Could you tell me where the post office is? >> Correct: in an indirect question we use subject + verb.",
      "o I wonder why she didn't call. >> I wonder + affirmative word order.",
      "o Do you know if it opens on Sunday >> if + affirmative word order.",
      "?2 'Did you enjoy it?' → She asked me ___. | did I enjoy it | *if I had enjoyed it | if had I enjoyed it >> if + subject + verb moved back.",
      "f2 Do you know what time does the shop close? = Do you know what time the shop closes >> No does.",
    ],
  },
  {
    n: 51, t: 'Auxiliary verbs (have/do/can etc.) I think so / I hope so etc.', es: 'Auxiliares y respuestas cortas', tags: ['auxiliaries'],
    goals: ['Avoid repeating with auxiliaries', 'Use So am I / Neither do I', 'Use I think so / I hope not'],
    x: `We use **the auxiliary on its own** so we don't repeat: *'Have you locked the door?' 'Yes, I **have**.'* *He doesn't like coffee, but I **do**.*

To react with interest: *'I've lost my keys.' 'Have you? Oh no!'*

**So + auxiliary + subject** = me too (affirmative): *'I'm tired.' 'So am I.'* **Neither / Nor + auxiliary + subject** = me neither: *'I can't swim.' 'Neither can I.'*

**I think so / I hope so / I expect so / I suppose so**; negative: **I don't think so / I hope not / I'm afraid not**.`,
    form: [['Frase', 'Reacción'], ["I'm hungry.", 'So am I.'], ["I didn't go.", 'Neither did I.'], ['Will it rain?', 'I hope not.'], ['Is she coming?', 'I think so.']],
    uses: ['The auxiliary instead of the full verb', 'So am I / Neither do I', 'I think so / I hope not'],
    aff: ["'I love jazz.' 'So do I.'|—Me encanta el jazz. —A mí también.", "'Is it going to rain?' 'I hope not.'|—¿Va a llover? —Espero que no."],
    neg: ["'I haven't seen the film.' 'Neither have I.'|—No vi la película. —Yo tampoco."],
    q: ["'I'm getting married.' 'Are you? Congratulations!'|—Me caso. —¿En serio? ¡Felicitaciones!"],
    err: ["'I'm tired.' 'So I am.'|'I'm tired.' 'So am I.'|Order: So + auxiliary + subject.", "'I don't like it.' 'Neither I do.'|'I don't like it.' 'Neither do I.'|Neither + auxiliary + subject."],
    cmp: { w: [52], x: 'Question tags (isn\'t it?, don\'t you?) use the same auxiliary idea.' },
    ex: [
      "? 'I'm hungry.' '___.' | So I am | *So am I | So I do >> So + auxiliary + subject.",
      "? 'I didn't like the film.' '___.' | So did I | *Neither did I | Neither I did >> Negative → Neither + auxiliary + subject.",
      "? 'Is the shop open today?' 'I ___ so.' | *think | don't hope | believe not >> I think so.",
      "_ 'I can't drive.' 'Neither ___ I.' = can >> The auxiliary of the original verb.",
      "_ He doesn't eat meat, but his wife ___. = does >> An auxiliary so you don't repeat the verb.",
      "s 'Will you be late?' 'I hope [no].' = not >> I hope not.",
      "o 'I love this song.' 'So do I.' >> So + do + I.",
      "m I'm tired = So am I ; I can't swim = Neither can I ; I went out = So did I ; I haven't eaten = Neither have I >> React.",
      "?2 'Will it be expensive?' 'I'm afraid ___.' | not so | *so | yes >> I'm afraid so = unfortunately yes.",
      "f2 'I've never been to Japan.' 'Neither I have.' = Neither have I ; Nor have I >> Order: auxiliary + subject.",
    ],
  },
  {
    n: 52, t: "Question tags (do you? isn't it? etc.)", es: 'Question tags', tags: ['question-tags', 'auxiliaries'], pre: [51],
    goals: ['Make question tags with the right auxiliary', 'Use a negative tag with an affirmative sentence and vice versa', 'Use special tags (Let\'s…, shall we?)'],
    x: `**Question tags** are mini-questions at the end of a sentence: *It's a nice day, **isn't it**?*

Rule: **affirmative** sentence → **negative** tag; **negative** sentence → **affirmative** tag: *You haven't seen Tom, **have you**?*

We use the **auxiliary** in the sentence (or do/does/did if there isn't one): *You live here, don't you? She went out, didn't she?*

Special cases: *I'm late, **aren't I**? Let's go, **shall we**? Open the door, **will you**?* With never/nobody the tag is affirmative: *Nobody came, did they?*`,
    form: [['Frase', 'Tag'], ["It's cold,", "isn't it?"], ["You don't smoke,", 'do you?'], ['She passed,', "didn't she?"], ["I'm right,", "aren't I?"], ["Let's go,", 'shall we?']],
    uses: ['Affirmative → negative tag', 'Negative → affirmative tag', 'The auxiliary in the sentence or do/does/did'],
    aff: ["You're Spanish, aren't you?|Sos español, ¿no?", "She likes coffee, doesn't she?|Le gusta el café, ¿no?"],
    neg: ["You haven't got a pen, have you?|No tenés una birome, ¿no?"],
    q: ["Let's have a break, shall we?|Hagamos una pausa, ¿te parece?"],
    err: ["You live here, isn't it?|You live here, don't you?|A tag with the right auxiliary (do).", "I'm late, am not I?|I'm late, aren't I?|I am → aren't I?"],
    ex: [
      "? It's a beautiful day, ___? | is it | *isn't it | doesn't it >> Affirmative → negative tag with be.",
      "? You don't know Ann, ___? | don't you | *do you | aren't you >> Negative → affirmative.",
      "? Tom went to the party, ___? | wasn't he | *didn't he | did he >> Past simple → did.",
      "_ You've met my sister, ___ you? = haven't >> have → haven't.",
      "_ Let's go out tonight, ___ we? = shall >> Let's → shall we?",
      "s You can swim, [can] you? = can't >> Affirmative → negative tag.",
      "o You haven't seen my keys, have you? >> Negative → affirmative tag.",
      "m She's here = isn't she? ; They won't come = will they? ; You work = don't you? ; I'm right = aren't I? >> Choose the tag.",
      "?2 Nobody called, ___? | didn't they | *did they | did he >> nobody → affirmative tag with they.",
      "o It's cold, isn't it >> be → isn't it?",
    ],
  },
];

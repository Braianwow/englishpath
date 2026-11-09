import type { UnitSrc } from '../dsl';

// Module 8 — Questions and auxiliary verbs (EGU units 49–52)
export const m08: UnitSrc[] = [
  {
    n: 49, t: 'Questions 1', es: 'Preguntas (1)', tags: ['questions', 'auxiliaries'],
    goals: ['Invertir sujeto y auxiliar en preguntas', 'Usar do/does/did en el presente y pasado simple', 'Formar preguntas de sujeto sin do (Who phoned?)'],
    x: `En las preguntas el **auxiliar va antes del sujeto**: *Tom will → Will Tom…? You have been → Have you been…?*

En presente y pasado simple usamos **do/does/did**: *Do you live near here? What time did the train leave?*

**Preguntas de sujeto**: si *who/what* es el **sujeto**, no usamos do: *Who phoned you?* (alguien llamó) ≠ *Who did you phone?* (vos llamaste a alguien). *What happened?*

Las **preposiciones** suelen ir al **final**: *Who are you talking to? What is it made of?*

Preguntas negativas (*Didn't you hear…? Why don't we…?*) muestran sorpresa o sugieren algo.`,
    form: [['Wh-', 'Auxiliar', 'Sujeto', 'Verbo'], ['Where', 'do', 'you', 'live?'], ['What', 'did', 'she', 'say?'], ['How long', 'have', 'you', 'been here?'], ['Who', '—', '(sujeto)', 'called you?']],
    uses: ['Auxiliar + sujeto', 'do/does/did en tiempos simples', 'Preguntas de sujeto sin do', 'Preposición al final'],
    aff: ['Tom will come. → Will Tom come?|Tom vendrá. → ¿Vendrá Tom?', 'You have been to Rome. → Have you been to Rome?|Estuviste en Roma. → ¿Estuviste en Roma?'],
    neg: ["Didn't you hear the doorbell?|¿No escuchaste el timbre?"],
    q: ['Where do your parents live?|¿Dónde viven tus padres?', 'Who told you?|¿Quién te lo dijo?', 'What are you looking for?|¿Qué estás buscando?', 'How many people came to the party?|¿Cuánta gente vino a la fiesta?'],
    err: ['Where you live?|Where do you live?|Falta el auxiliar do.', 'Who did tell you?|Who told you?|Pregunta de sujeto: sin did.'],
    cmp: { w: [50], x: 'Preguntas indirectas (Do you know where he lives?): sin inversión, unidad 50.' },
    ex: [
      "? Where ___? | you work | *do you work | does you work >> do + sujeto + verbo base.",
      "? Who ___ the window? (somebody broke it) | did break | *broke | did broke >> Pregunta de sujeto: sin did.",
      "? Who ___ at the party? (you saw somebody) | saw you | *did you see | you saw >> Pregunta de objeto: did + sujeto.",
      "_ What ___ (happen) last night? = happened >> What como sujeto: sin did.",
      "_ How long ___ you ___ (wait)? = have / been waiting >> Auxiliar antes del sujeto.",
      "s Where [you] live? = do you >> Falta el auxiliar: Where do you live?",
      "o Who are you writing to? >> Preposición al final.",
      "t ¿Qué te pasó? = What happened to you >> Pregunta de sujeto.",
      "?2 'I'm thinking.' 'What ___ about?' | you are thinking | *are you thinking | do you think >> Auxiliar + sujeto + -ing.",
      "b2 how many / students / pass / the exam = How many students passed the exam >> How many students = sujeto: sin did.",
      "f2 What means this word? = What does this word mean >> do + sujeto + verbo base.",
    ],
  },
  {
    n: 50, t: 'Questions 2 (do you know where … ? / he asked me where …)', es: 'Preguntas indirectas', tags: ['questions', 'reported-speech'], pre: [49],
    goals: ['Formar preguntas indirectas sin inversión', 'Usar if/whether en preguntas de sí/no', 'Reportar preguntas con asked'],
    x: `Cuando una pregunta va **dentro de otra frase** (*Do you know…? Can you tell me…? I wonder…*), usamos el **orden de oración afirmativa** (sujeto + verbo) y **sin do/does/did**:
*Where has Tom gone?* → *Do you know where Tom has gone?*
*What time does the film start?* → *Can you tell me what time the film starts?*

Si no hay palabra interrogativa, usamos **if** o **whether**: *Do you know if they're coming?*

Igual en las **preguntas reportadas**: *'Where do you live?'* → *She asked me where I lived.* *He asked me if I was hungry.*`,
    form: [['Directa', 'Indirecta'], ['Where is the station?', 'Could you tell me where the station is?'], ['Did she call?', 'Do you know if she called?'], ['What do you want?', 'He asked me what I wanted.']],
    uses: ['Do you know / Can you tell me / I wonder + orden afirmativo', 'if/whether para preguntas de sí/no', 'He asked (me) + orden afirmativo'],
    aff: ["I wonder what she's doing now.|Me pregunto qué estará haciendo.", 'She asked me where I lived.|Me preguntó dónde vivía.'],
    neg: ["I don't know if he's at home.|No sé si está en casa."],
    q: ['Do you know where the bank is?|¿Sabés dónde queda el banco?', 'Can you tell me what time it is?|¿Me podés decir qué hora es?'],
    err: ['Do you know where is the station?|Do you know where the station is?|Pregunta indirecta: sujeto + verbo.', 'He asked me where did I live.|He asked me where I lived.|Sin did en preguntas reportadas.'],
    cmp: { w: [47, 49], x: 'Combina el orden de las preguntas (49) con el estilo indirecto (47).' },
    ex: [
      "? Do you know where ___? | is Tom | *Tom is | does Tom >> Indirecta: sujeto + verbo.",
      "? Can you tell me what time ___? | does the bus leave | *the bus leaves | leaves the bus >> Sin does, verbo con -s.",
      "_ I don't know ___ she's coming or not. = if ; whether >> Pregunta de sí/no → if/whether.",
      "_ 'How old are you?' → He asked me how old I ___. = was >> Reportada: sujeto + verbo retrocedido.",
      "s Could you tell me where the post office is? >> Correcta: en la pregunta indirecta va sujeto + verbo.",
      "o I wonder why she didn't call. >> I wonder + orden afirmativo.",
      "t ¿Sabés si abre el domingo? = Do you know if it opens on Sunday ; Do you know whether it opens on Sunday ; Do you know if it's open on Sunday >> if + orden afirmativo.",
      "?2 'Did you enjoy it?' → She asked me ___. | did I enjoy it | *if I had enjoyed it | if had I enjoyed it >> if + sujeto + verbo retrocedido.",
      "f2 Do you know what time does the shop close? = Do you know what time the shop closes >> Sin does.",
    ],
  },
  {
    n: 51, t: 'Auxiliary verbs (have/do/can etc.) I think so / I hope so etc.', es: 'Auxiliares y respuestas cortas', tags: ['auxiliaries'],
    goals: ['Evitar repeticiones con auxiliares', 'Usar So am I / Neither do I', 'Usar I think so / I hope not'],
    x: `Usamos el **auxiliar solo** para no repetir: *'Have you locked the door?' 'Yes, I **have**.'* *He doesn't like coffee, but I **do**.*

Para reaccionar con interés: *'I've lost my keys.' 'Have you? Oh no!'*

**So + auxiliar + sujeto** = yo también (afirmativo): *'I'm tired.' 'So am I.'* **Neither / Nor + auxiliar + sujeto** = yo tampoco: *'I can't swim.' 'Neither can I.'*

**I think so / I hope so / I expect so / I suppose so**; negativo: **I don't think so / I hope not / I'm afraid not**.`,
    form: [['Frase', 'Reacción'], ["I'm hungry.", 'So am I.'], ["I didn't go.", 'Neither did I.'], ['Will it rain?', 'I hope not.'], ['Is she coming?', 'I think so.']],
    uses: ['Auxiliar en lugar del verbo completo', 'So am I / Neither do I', 'I think so / I hope not'],
    aff: ["'I love jazz.' 'So do I.'|—Me encanta el jazz. —A mí también.", "'Is it going to rain?' 'I hope not.'|—¿Va a llover? —Espero que no."],
    neg: ["'I haven't seen the film.' 'Neither have I.'|—No vi la película. —Yo tampoco."],
    q: ["'I'm getting married.' 'Are you? Congratulations!'|—Me caso. —¿En serio? ¡Felicitaciones!"],
    err: ["'I'm tired.' 'So I am.'|'I'm tired.' 'So am I.'|Orden: So + auxiliar + sujeto.", "'I don't like it.' 'Neither I do.'|'I don't like it.' 'Neither do I.'|Neither + auxiliar + sujeto."],
    cmp: { w: [52], x: 'Question tags (isn’t it?, don’t you?) usan la misma idea de auxiliar.' },
    ex: [
      "? 'I'm hungry.' '___.' | So I am | *So am I | So I do >> So + auxiliar + sujeto.",
      "? 'I didn't like the film.' '___.' | So did I | *Neither did I | Neither I did >> Negativa → Neither + aux + sujeto.",
      "? 'Is the shop open today?' 'I ___ so.' | *think | don't hope | believe not >> I think so.",
      "_ 'I can't drive.' 'Neither ___ I.' = can >> Auxiliar del verbo original.",
      "_ He doesn't eat meat, but his wife ___. = does >> Auxiliar para no repetir.",
      "s 'Will you be late?' 'I hope [no].' = not >> I hope not.",
      "t —Me encanta esta canción. —A mí también. = 'I love this song.' 'So do I.' ; I love this song. So do I >> So + do + I.",
      "m I'm tired = So am I ; I can't swim = Neither can I ; I went out = So did I ; I haven't eaten = Neither have I >> Reaccioná.",
      "?2 'Will it be expensive?' 'I'm afraid ___.' | not so | *so | yes >> I'm afraid so = lamentablemente sí.",
      "f2 'I've never been to Japan.' 'Neither I have.' = Neither have I ; Nor have I >> Orden: aux + sujeto.",
    ],
  },
  {
    n: 52, t: "Question tags (do you? isn't it? etc.)", es: 'Question tags', tags: ['question-tags', 'auxiliaries'], pre: [51],
    goals: ['Formar question tags con el auxiliar correcto', 'Usar tag negativo con frase afirmativa y viceversa', 'Usar tags especiales (Let’s…, shall we?)'],
    x: `Los **question tags** son preguntitas al final de la frase: *It's a nice day, **isn't it**?*

Regla: frase **afirmativa** → tag **negativo**; frase **negativa** → tag **afirmativo**: *You haven't seen Tom, **have you**?*

Usamos el **auxiliar** de la frase (o do/does/did si no hay): *You live here, don't you? She went out, didn't she?*

Casos especiales: *I'm late, **aren't I**? Let's go, **shall we**? Open the door, **will you**?* Con never/nobody el tag es afirmativo: *Nobody came, did they?*`,
    form: [['Frase', 'Tag'], ["It's cold,", "isn't it?"], ["You don't smoke,", 'do you?'], ['She passed,', "didn't she?"], ["I'm right,", "aren't I?"], ["Let's go,", 'shall we?']],
    uses: ['Afirmativa → tag negativo', 'Negativa → tag afirmativo', 'Auxiliar de la frase o do/does/did'],
    aff: ["You're Spanish, aren't you?|Sos español, ¿no?", "She likes coffee, doesn't she?|Le gusta el café, ¿no?"],
    neg: ["You haven't got a pen, have you?|No tenés una birome, ¿no?"],
    q: ["Let's have a break, shall we?|Hagamos una pausa, ¿te parece?"],
    err: ["You live here, isn't it?|You live here, don't you?|Tag con el auxiliar correcto (do).", "I'm late, am not I?|I'm late, aren't I?|I am → aren't I?"],
    ex: [
      "? It's a beautiful day, ___? | is it | *isn't it | doesn't it >> Afirmativa → negativo con be.",
      "? You don't know Ann, ___? | don't you | *do you | aren't you >> Negativa → afirmativo.",
      "? Tom went to the party, ___? | wasn't he | *didn't he | did he >> Pasado simple → did.",
      "_ You've met my sister, ___ you? = haven't >> have → haven't.",
      "_ Let's go out tonight, ___ we? = shall >> Let's → shall we?",
      "s You can swim, [can] you? = can't >> Afirmativa → tag negativo.",
      "o You haven't seen my keys, have you? >> Negativa → tag afirmativo.",
      "m She's here = isn't she? ; They won't come = will they? ; You work = don't you? ; I'm right = aren't I? >> Elegí el tag.",
      "?2 Nobody called, ___? | didn't they | *did they | did he >> nobody → tag afirmativo con they.",
      "t Hace frío, ¿no? = It's cold, isn't it ; It is cold, isn't it >> be → isn't it?",
    ],
  },
];

import type { UnitSrc } from '../dsl';

// Module 7 — Reported speech (EGU units 47–48)
export const m07: UnitSrc[] = [
  {
    n: 47, t: 'Reported speech 1 (he said that …)', es: 'Estilo indirecto (1)', tags: ['reported-speech'],
    goals: ['Contar lo que otra persona dijo', 'Retroceder los tiempos verbales después de said', 'Usar that de forma opcional'],
    x: `Para contar lo que alguien **dijo** usamos **reported speech**: *Paul said (that) he was feeling ill.*

Si el verbo introductor está en pasado (said, told), normalmente **retrocedemos** el tiempo de lo dicho:
am/is → was · are → were · do → did · will → would · can → could · have done / did → had done.

*'I'm tired.'* → *She said (that) she **was** tired.*
*'I'll help you.'* → *He said he **would** help me.*

**that** se puede omitir. También cambian pronombres y referencias de tiempo/lugar según el contexto (today → that day, here → there).`,
    form: [['Directo', 'Indirecto'], ["'I am happy.'", 'She said she was happy.'], ["'I can swim.'", 'He said he could swim.'], ["'I'll call.'", 'She said she would call.'], ["'I lost it.'", 'He said he had lost it.']],
    uses: ['Retroceso de tiempos después de said', 'that opcional', 'Cambio de pronombres y expresiones de tiempo'],
    aff: ['Tom said (that) he was hungry.|Tom dijo que tenía hambre.', 'She said she would come later.|Dijo que vendría más tarde.', 'He said he had lost his wallet.|Dijo que había perdido la billetera.'],
    neg: ["She said she didn't like the film.|Dijo que no le gustaba la película."],
    q: ['What did he say?|¿Qué dijo?'],
    err: ["She said me that she was tired.|She told me that she was tired.|say no lleva objeto de persona: tell me.", "He said he will come.|He said he would come.|will → would."],
    cmp: { w: [48], x: 'Unidad 48: cuándo NO hace falta cambiar el tiempo, y say vs. tell.' },
    ex: [
      "? 'I'm busy.' → She said she ___ busy. | is | *was | were >> am/is → was.",
      "? 'I'll phone you.' → He said he ___ me. | will phone | *would phone | phones >> will → would.",
      "_ 'I can't swim.' → Anna said she ___ swim. = couldn't ; could not >> can → could.",
      "_ 'We bought a house.' → They said they ___ a house. = had bought >> past simple → past perfect.",
      "s He said that he [is] living in Paris. = was >> Retroceso: is → was.",
      "o She said that she didn't want to go. >> said + (that) + tiempo retrocedido.",
      "t Dijo que estaba cansado. = He said he was tired ; He said that he was tired >> Reported speech.",
      "?2 'I've finished.' → She said she ___. | has finished | *had finished | finished >> present perfect → past perfect.",
      "f2 Mark said me that he was ill. = Mark told me that he was ill ; Mark told me he was ill ; Mark said that he was ill ; Mark said he was ill >> say sin objeto de persona.",
    ],
  },
  {
    n: 48, t: 'Reported speech 2', es: 'Estilo indirecto (2)', tags: ['reported-speech'], pre: [47],
    goals: ['Saber cuándo no hace falta cambiar el tiempo', 'Usar say y tell correctamente', 'Contar órdenes y pedidos con tell/ask + to'],
    x: `**No siempre** cambiamos el tiempo: si lo dicho **sigue siendo verdad**, podemos mantenerlo: *'I'm going to Paris next week.'* → *Tom said he **is going** to Paris next week.* (todavía no fue).

Pero si lo dicho **ya no es cierto** o contrasta con la realidad, retrocedemos: *She said she was coming, but she didn't.*

**say** vs. **tell**: *say something (to sb)* / *tell **sb** something*: *He told me (that) he was tired. He said (that) he was tired.* (no *He said me*).

Órdenes y pedidos: **tell/ask + persona + to + infinitivo**: *The doctor told me **to rest**. She asked me **not to** be late.*`,
    form: [['Directo', 'Indirecto'], ["'Wait here.'", 'He told me to wait there.'], ["'Please don't shout.'", 'She asked them not to shout.'], ["'The earth is round.'", 'He said the earth is round.']],
    uses: ['Mantener el tiempo si sigue siendo verdad', 'say something / tell somebody something', 'tell/ask + persona + (not) to + verbo'],
    aff: ['He told me (that) he loved me.|Me dijo que me quería.', 'The teacher told us to open our books.|El profesor nos dijo que abriéramos los libros.'],
    neg: ['She asked me not to tell anyone.|Me pidió que no le dijera a nadie.'],
    q: ['What did she tell you?|¿Qué te dijo?'],
    err: ['She told to me to wait.|She told me to wait.|tell + persona (sin to).', "He told me don't go.|He told me not to go.|Orden negativa → not to + verbo."],
    cmp: { w: [47, 50], x: 'Preguntas indirectas (he asked me where…): unidad 50.' },
    ex: [
      "? She ___ me that she was leaving. | said | *told | asked to >> tell + persona.",
      "? He ___ that he didn't have time. | told | *said | told to >> say sin objeto de persona.",
      "_ 'Please sit down,' he said to us. → He asked us ___ (sit) down. = to sit >> ask + persona + to.",
      "_ 'Don't touch it!' she said to me. → She told me ___ it. = not to touch >> Orden negativa.",
      "s The doctor told me [stay] in bed. = to stay >> tell + persona + to + verbo.",
      "o My boss told me not to be late again. >> tell + persona + not to.",
      "t Me pidió que la ayudara. = She asked me to help her ; He asked me to help her >> ask + persona + to.",
      "?2 'I'm going to Rome next week.' (said yesterday) → Tom said he ___ to Rome next week. | *is going | goes | would go to >> Sigue siendo cierto: se puede mantener el tiempo.",
      "f2 She said me to call her later. = She told me to call her later ; She asked me to call her later >> say no lleva persona + to.",
      "m say = something (to somebody) ; tell = somebody something ; ask = somebody to do something ; told me not to = orden negativa >> Verbos para reportar.",
    ],
  },
];

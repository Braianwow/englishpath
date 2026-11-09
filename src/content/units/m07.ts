import type { UnitSrc } from '../dsl';

// Module 7 — Reported speech (EGU units 47–48)
export const m07: UnitSrc[] = [
  {
    n: 47, t: 'Reported speech 1 (he said that …)', es: 'Estilo indirecto (1)', tags: ['reported-speech'],
    goals: ['Report what another person said', 'Move tenses back after said', 'Use that (optional)'],
    x: `To report what someone **said** we use **reported speech**: *Paul said (that) he was feeling ill.*

If the reporting verb is in the past (said, told), we usually **move back** the tense of what was said:
am/is → was · are → were · do → did · will → would · can → could · have done / did → had done.

*'I'm tired.'* → *She said (that) she **was** tired.*
*'I'll help you.'* → *He said he **would** help me.*

**that** can be left out. Pronouns and references to time/place also change depending on the context (today → that day, here → there).`,
    form: [['Directo', 'Indirecto'], ["'I am happy.'", 'She said she was happy.'], ["'I can swim.'", 'He said he could swim.'], ["'I'll call.'", 'She said she would call.'], ["'I lost it.'", 'He said he had lost it.']],
    uses: ['Moving tenses back after said', 'that is optional', 'Changes in pronouns and time expressions'],
    aff: ['Tom said (that) he was hungry.|Tom dijo que tenía hambre.', 'She said she would come later.|Dijo que vendría más tarde.', 'He said he had lost his wallet.|Dijo que había perdido la billetera.'],
    neg: ["She said she didn't like the film.|Dijo que no le gustaba la película."],
    q: ['What did he say?|¿Qué dijo?'],
    err: ["She said me that she was tired.|She told me that she was tired.|say doesn't take a person as the object: tell me.", "He said he will come.|He said he would come.|will → would."],
    cmp: { w: [48], x: 'Unit 48: when you DON\'T need to change the tense, and say vs. tell.' },
    ex: [
      "? 'I'm busy.' → She said she ___ busy. | is | *was | were >> am/is → was.",
      "? 'I'll phone you.' → He said he ___ me. | will phone | *would phone | phones >> will → would.",
      "_ 'I can't swim.' → Anna said she ___ swim. = couldn't ; could not >> can → could.",
      "_ 'We bought a house.' → They said they ___ a house. = had bought >> past simple → past perfect.",
      "s He said that he [is] living in Paris. = was >> Moving the tense back: is → was.",
      "o She said that she didn't want to go. >> said + (that) + tense moved back.",
      "o He said he was tired >> Reported speech.",
      "?2 'I've finished.' → She said she ___. | has finished | *had finished | finished >> present perfect → past perfect.",
      "f2 Mark said me that he was ill. = Mark told me that he was ill ; Mark told me he was ill ; Mark said that he was ill ; Mark said he was ill >> say without a person as the object.",
    ],
  },
  {
    n: 48, t: 'Reported speech 2', es: 'Estilo indirecto (2)', tags: ['reported-speech'], pre: [47],
    goals: ['Know when you don\'t need to change the tense', 'Use say and tell correctly', 'Report orders and requests with tell/ask + to'],
    x: `We **don't always** change the tense: if what was said **is still true**, we can keep it: *'I'm going to Paris next week.'* → *Tom said he **is going** to Paris next week.* (he hasn't gone yet).

But if what was said **isn't true any more** or is different from reality, we move it back: *She said she was coming, but she didn't.*

**say** vs. **tell**: *say something (to sb)* / *tell **sb** something*: *He told me (that) he was tired. He said (that) he was tired.* (not *He said me*).

Orders and requests: **tell/ask + person + to + infinitive**: *The doctor told me **to rest**. She asked me **not to** be late.*`,
    form: [['Directo', 'Indirecto'], ["'Wait here.'", 'He told me to wait there.'], ["'Please don't shout.'", 'She asked them not to shout.'], ["'The earth is round.'", 'He said the earth is round.']],
    uses: ['Keep the tense if it is still true', 'say something / tell somebody something', 'tell/ask + person + (not) to + verb'],
    aff: ['He told me (that) he loved me.|Me dijo que me quería.', 'The teacher told us to open our books.|El profesor nos dijo que abriéramos los libros.'],
    neg: ['She asked me not to tell anyone.|Me pidió que no le dijera a nadie.'],
    q: ['What did she tell you?|¿Qué te dijo?'],
    err: ['She told to me to wait.|She told me to wait.|tell + person (no to).', "He told me don't go.|He told me not to go.|A negative order → not to + verb."],
    cmp: { w: [47, 50], x: 'Indirect questions (he asked me where…): unit 50.' },
    ex: [
      "? She ___ me that she was leaving. | said | *told | asked to >> tell + person.",
      "? He ___ that he didn't have time. | told | *said | told to >> say without a person as the object.",
      "_ 'Please sit down,' he said to us. → He asked us ___ (sit) down. = to sit >> ask + person + to.",
      "_ 'Don't touch it!' she said to me. → She told me ___ it. = not to touch >> A negative order.",
      "s The doctor told me [stay] in bed. = to stay >> tell + person + to + verb.",
      "o My boss told me not to be late again. >> tell + person + not to.",
      "o She asked me to help her >> ask + person + to.",
      "?2 'I'm going to Rome next week.' (said yesterday) → Tom said he ___ to Rome next week. | *is going | goes | would go to >> It is still true: you can keep the same tense.",
      "f2 She said me to call her later. = She told me to call her later ; She asked me to call her later >> say doesn't take person + to.",
      "m say = something (to somebody) ; tell = somebody something ; ask = somebody to do something ; told me not to = orden negativa >> Reporting verbs.",
    ],
  },
];

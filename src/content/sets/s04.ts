import type { RawSet } from './index';

// Modules 5–8 — if/wish, passive, reported speech, questions (units 38–52).
// Original sentences, each with a short B1 situation. " @@ text" = situation shown above the item.
export const s04: Record<number, RawSet[]> = {
  38: [
    ['38.1', 'Leé la situación y poné el verbo en la forma correcta: if + presente / will, o if + pasado / would.', [
      "_ Ana and I go to the same gym. If I ___ (see) her tomorrow, I'll give her your message. = see >> Posible → if + presente.",
      "_ Your friend asks what your dream is. 'If I ___ (have) a million dollars, I'd buy an island in the Caribbean.' = had >> Imaginario → if + pasado.",
      "_ The train leaves in ten minutes and the station is far. We ___ (miss) it if we don't leave now. = 'll miss ; will miss >> Posible → will.",
      "_ You're talking about bad situations that probably won't happen. What ___ you ___ (do) if you lost your job? = would / do >> Imaginario → would.",
      "_ The forecast says it might be sunny on Sunday. If it ___ (not/rain), we'll have a picnic in the park. = doesn't rain ; does not rain >> Posible → presente.",
    ]],
    ['38.2', 'Leé la situación y escribí una oración con if.', [
      "b if / I / have / a car, I / drive / to work = If I had a car, I would drive to work ; If I had a car, I'd drive to work >> Presente irreal. @@ No tenés auto, así que vas a trabajar en dos colectivos.",
      "b if / I / see / Tom, I / tell / him = If I see Tom, I'll tell him ; If I see Tom, I will tell him >> Posibilidad real. @@ Puede que veas a Tom en la facultad esta tarde. Tu amiga quiere que le avises algo.",
      "b if / I / speak / Italian, I / work / in Rome = If I spoke Italian, I would work in Rome ; If I spoke Italian, I'd work in Rome >> Imaginario. @@ Te ofrecen un trabajo en Roma, pero piden italiano y no lo hablás.",
    ]],
  ],
  39: [
    ['39.1', 'Leé la situación y completá con el verbo en la forma correcta (presente irreal).', [
      "_ I want to invite Sara to my party, but I don't have her number. If I ___ (know) it, I'd call her. = knew >> No lo sé → pasado.",
      "_ Your friend got a great job offer but is afraid to accept. 'If I ___ (be) you, I'd accept it.' = were ; was >> If I were you.",
      "_ I work twelve hours a day. I'd go out with my friends more if I ___ (not/have) so much work. = didn't have ; did not have >> Irreal negativo.",
      "_ My sister lives in Spain and we only see her at Christmas. If she ___ (live) nearer, we'd see her more often. = lived >> Irreal.",
    ]],
    ['39.2', 'Escribí una oración con I wish … (deseo sobre el presente).', [
      "b I wish / I / can / swim = I wish I could swim >> can → could. @@ Tus amigos se tiran al mar y vos te quedás en la arena porque no sabés nadar.",
      "b I wish / I / have / a garden = I wish I had a garden >> wish + pasado. @@ Vivís en un departamento chico y te encantan las plantas.",
      "b I wish / it / not / rain = I wish it wasn't raining ; I wish it weren't raining >> wish + pasado continuo. @@ Querías ir a la playa, pero llueve muchísimo.",
      "b I wish / I / live / closer to my friends = I wish I lived closer to my friends >> wish + pasado. @@ Tus amigos viven en el centro y vos a dos horas de viaje.",
    ]],
  ],
  40: [
    ['40.1', 'Leé la situación y completá con had + participio / would have + participio.', [
      "_ Nobody told me you were in hospital last month. If I ___ (know), I would have visited you. = had known ; 'd known >> Pasado irreal.",
      "_ We took the bus and arrived 30 minutes late. If we had taken a taxi, we ___ (not/be) late. = wouldn't have been ; would not have been >> Resultado irreal.",
      "_ She failed the exam by two points. She ___ (pass) it if she had studied more. = would have passed ; 'd have passed >> would have + participio.",
      "_ Thanks for the message about the dentist. If you ___ (not/remind) me, I would have forgotten. = hadn't reminded ; had not reminded >> Pasado irreal negativo.",
    ]],
    ['40.2', 'Escribí una oración con I wish I had / hadn’t … (arrepentimiento).', [
      "b I wish / I / study / for the test = I wish I had studied for the test ; I wish I'd studied for the test >> wish + had + participio. @@ Te fue mal en la prueba porque no estudiaste.",
      "b I wish / I / not / eat / so much cake = I wish I hadn't eaten so much cake ; I wish I had not eaten so much cake >> Arrepentimiento. @@ En el cumpleaños comiste cuatro porciones de torta y ahora te duele la panza.",
      "b I wish / I / go / to the concert = I wish I had gone to the concert ; I wish I'd gone to the concert >> wish + had gone. @@ Tus amigos dicen que el recital fue increíble y vos te quedaste en casa.",
    ]],
  ],
  41: [
    ['41.1', 'Leé la situación y elegí hope o wish.', [
      "? Your friend is leaving for Brazil tomorrow. 'I ___ you have a great holiday!' | wish | *hope | would >> Deseo posible → hope.",
      "? You're watching birds in the park. 'I ___ I could fly like them.' | hope | *wish | would >> Irreal → wish.",
      "? We're going to the beach tomorrow. I ___ it doesn't rain. | wish | *hope | would >> Posible → hope.",
    ]],
    ['41.2', 'Leé la situación y completá con wish + would para expresar una queja.', [
      "_ The neighbours have a party every night until 4 a.m. I wish they ___ (be) quieter. = would be ; 'd be >> Queja: wish + would.",
      "_ You keep talking while I'm trying to explain my idea. I wish you ___ (stop) interrupting me. = would stop ; 'd stop >> Queja.",
      "_ It's been raining for five days and the street is flooded. I wish it ___ (stop). = would stop ; 'd stop >> Queja.",
    ]],
  ],
  42: [
    ['42.1', 'Leé la situación y completá con la voz pasiva en presente o pasado.', [
      "_ In geography class: Spanish is a very international language. It ___ (speak) in more than 20 countries. = is spoken >> Pasiva presente.",
      "_ The new museum is very modern. It ___ (design) by a famous architect from Japan. = was designed >> Pasiva pasada.",
      "_ I left my bike outside the house without a lock, and this morning it wasn't there. It ___ (steal) last night. = was stolen >> Pasiva pasada.",
      "_ BMW and Mercedes are German companies. These cars ___ (make) in Germany. = are made >> Pasiva presente plural.",
      "_ You have a strong accent, but I can't guess the country. Where ___ you ___ (born)? = were / born >> was/were born.",
    ]],
    ['42.2', 'Leé la situación y reescribí la oración en voz pasiva.', [
      "f Someone cleans the office every day. = The office is cleaned every day >> Pasiva presente. @@ Querés destacar la oficina, no quién la limpia.",
      "f They built this bridge in 1900. = This bridge was built in 1900 >> Pasiva pasada. @@ Un guía turístico habla del puente más viejo de la ciudad.",
      "f People grow coffee in Colombia. = Coffee is grown in Colombia >> Pasiva presente. @@ Un documental sobre el café de América del Sur.",
      "f Somebody found my wallet. = My wallet was found >> Pasiva pasada. @@ Perdiste la billetera en el tren y la policía te llama con una buena noticia.",
    ]],
  ],
  43: [
    ['43.1', 'Leé la situación y completá con be done / been done / being done.', [
      "_ The client needs the project tomorrow morning. The work must ___ (finish) today. = be finished >> Modal + be + participio.",
      "_ I'm taking the bus this week because my car is at the garage. It ___ (repair) at the moment. = is being repaired >> Continuo pasivo.",
      "_ Don't go to the office. The boss is ill, so the meeting ___ (cancel). Nobody will come. = has been cancelled ; 's been cancelled ; has been canceled >> Present perfect pasivo.",
      "_ I'm 25 and my parents still control everything. I don't like ___ (tell) what to do. = being told >> -ing pasivo.",
      "_ The company didn't receive my application. The letter should ___ (send) yesterday, but nobody did it. = have been sent >> should have been + participio.",
    ]],
  ],
  44: [
    ['44.1', 'Leé la situación y reescribí empezando con la persona (pasiva con dos objetos).', [
      "f They offered me a job. = I was offered a job >> Persona como sujeto. @@ Le contás a tu familia la buena noticia de la entrevista.",
      "f Someone told us to wait. = We were told to wait >> be told. @@ Llegaste al hospital y alguien en recepción les dijo que esperaran.",
      "f They paid her $500. = She was paid $500 >> Persona como sujeto. @@ Tu amiga hizo un trabajo de fotografía para una revista.",
    ]],
    ['44.2', 'Leé la situación y completá con get + participio.', [
      "_ There was a fight outside the stadium, but luckily nobody ___ (hurt). = got hurt >> get + participio.",
      "_ Remember Paula and Juan? They ___ (marry) last summer in a small church in Córdoba. = got married >> get married.",
      "_ Our phones had no battery and all the streets looked the same. We ___ (lose) in the old town. = got lost >> get lost.",
    ]],
  ],
  45: [
    ['45.1', 'Reescribí con It is said that … o sujeto + is said to … .', [
      "b The castle / is said / be haunted = The castle is said to be haunted >> sujeto + is said to. @@ La gente del pueblo dice que en el castillo hay fantasmas.",
      "b It / is believed / that the fire started in the kitchen = It is believed that the fire started in the kitchen >> It is believed that. @@ Una noticia sobre el incendio de un restaurante. Todavía no está confirmado.",
      "b He / is thought / be very rich = He is thought to be very rich >> is thought to. @@ Nadie sabe bien cuánto tiene, pero el vecino nuevo tiene tres autos de lujo.",
    ]],
    ['45.2', 'Leé la situación y completá con be supposed to.', [
      "_ It's the law in Argentina: you ___ wear a helmet on a motorbike. = are supposed to ; 're supposed to >> Regla / lo esperado.",
      "_ It was my mum's birthday yesterday. I ___ call her, but I forgot. She's angry now. = was supposed to >> Plan no cumplido.",
      "_ I haven't seen it yet, but the film ___ be very good. Everyone says so. = is supposed to ; 's supposed to >> Se dice que.",
    ]],
  ],
  46: [
    ['46.1', 'Escribí oraciones con have something done.', [
      "b I / have / my hair / cut / yesterday = I had my hair cut yesterday >> Servicio: had + objeto + participio. @@ Ayer fuiste a la peluquería y ahora tenés el pelo corto.",
      "b we / have / the house / paint / next week = We're having the house painted next week ; We are having the house painted next week >> Plan. @@ Ya contrataste a un pintor que viene la semana que viene.",
      "b she / have / her bag / steal = She had her bag stolen >> Experiencia desagradable. @@ Tu amiga dejó la cartera en la silla del bar y alguien se la llevó.",
      "b you / should / have / your eyes / test = You should have your eyes tested >> Consejo. @@ Tu amigo no lee bien los carteles de lejos.",
    ]],
  ],
  47: [
    ['47.1', 'Leé la situación y pasá a estilo indirecto con said (that) … .', [
      "_ Yesterday Ana told us: 'I'm tired.' → Ana said she ___ tired. = was >> am → was.",
      "_ Last week Tom offered: 'I'll help you with the move.' → Tom said he ___ help me. = would >> will → would.",
      "_ Your friends sent a message: 'We can't come to dinner.' → They said they ___ come. = couldn't ; could not >> can't → couldn't.",
      "_ Your sister called you crying: 'I lost my phone.' → She said she ___ her phone. = had lost >> past → past perfect.",
      "_ You cooked fish for your brother, but he said: 'I don't like it.' → He said he ___ it. = didn't like ; did not like >> don't → didn't.",
    ]],
  ],
  48: [
    ['48.1', 'Leé la situación y completá con say o tell en la forma correcta.', [
      "_ My flatmate is moving out next month. She ___ me last night. = told >> tell + persona.",
      "_ I invited my boss to the party, but he ___ that he was busy. = said >> say sin persona.",
      "_ You went to the doctor about your back. What did the doctor ___ you? = tell >> tell + persona.",
      "_ You talked to Laura yesterday. Did she ___ anything about the party on Saturday? = say >> say + algo.",
    ]],
    ['48.2', 'Leé la situación y pasá la orden o el pedido a estilo indirecto (tell/ask + persona + to).', [
      "b 'Wait here,' the guard said to us. = The guard told us to wait there ; The guard told us to wait here >> tell + persona + to. @@ Le contás a un amigo qué pasó cuando llegaron al museo.",
      "b 'Please help me,' Ana said to me. = Ana asked me to help her >> ask + persona + to. @@ Ana no podía levantar una caja y te pidió ayuda.",
      "b 'Don't be late,' my boss said to me. = My boss told me not to be late >> not to. @@ Mañana tenés una reunión importante y tu jefe te avisó.",
    ]],
  ],
  49: [
    ['49.1', 'Leé la situación y escribí la pregunta.', [
      "b where / your parents / live = Where do your parents live >> do + sujeto + verbo. @@ Conocés a una chica nueva y te cuenta que sus padres no viven en Buenos Aires.",
      "b what time / the film / start = What time does the film start >> does + verbo base. @@ Tu amigo sacó entradas para el cine y no sabés el horario.",
      "b who / phone / you = Who phoned you ; Who called you >> Pregunta de sujeto: sin did. @@ Tu hermana cortó el teléfono sonriendo y querés saber quién la llamó.",
      "b what / happen = What happened >> What como sujeto. @@ Llegás a la oficina y todos están mirando la ventana rota.",
      "b who / you / talk / to = Who are you talking to ; Who were you talking to >> Preposición al final. @@ Tu compañero de cuarto habla por teléfono en voz baja.",
    ]],
  ],
  50: [
    ['50.1', 'Leé la situación y transformá en pregunta indirecta.', [
      "b Do you know / where / the station / is = Do you know where the station is >> Sujeto + verbo. @@ Estás perdido en Londres y le preguntás amablemente a una señora.",
      "b Can you tell me / what time / the bank / open = Can you tell me what time the bank opens >> Sin does. @@ Llamás a información porque necesitás ir al banco.",
      "b I wonder / if / she / get / the job = I wonder if she got the job ; I wonder whether she got the job >> if/whether. @@ Tu amiga tuvo una entrevista ayer y todavía no te contó nada.",
      "b Do you know / how much / it / cost = Do you know how much it costs >> Sin does, verbo con -s. @@ Ves un celular nuevo en una vidriera sin precio y le preguntás a tu amigo.",
    ]],
    ['50.2', 'Leé la situación y pasá la pregunta a estilo indirecto con asked.', [
      "b She asked me / where / I / live = She asked me where I lived >> Sujeto + verbo retrocedido. @@ En la entrevista la recepcionista te preguntó: «Where do you live?»",
      "b He asked me / if / I / be / hungry = He asked me if I was hungry ; He asked me whether I was hungry >> if + sujeto + verbo. @@ Cuando llegaste, tu abuelo te preguntó: «Are you hungry?»",
      "b They asked me / what / I / be / do = They asked me what I was doing >> Sin inversión. @@ Unos policías te vieron en la calle a las 3 de la mañana y te preguntaron: «What are you doing?»",
    ]],
  ],
  51: [
    ['51.1', 'Leé la situación y respondé con So … I o Neither … I.', [
      "_ You and your friend didn't have lunch. 'I'm hungry.' '___ am I. Let's get a pizza.' = So >> Afirmativa: So.",
      "_ You're at the beach and neither of you learnt to swim. 'I can't swim.' '___ can I.' = Neither ; Nor >> Negativa: Neither.",
      "_ You were both at the Coldplay show. 'I went to the concert on Friday.' 'So ___ I! I didn't see you.' = did >> Pasado: did.",
      "_ Nobody in your group has watched the new series. 'I haven't seen it.' 'Neither ___ I.' = have >> Auxiliar: have.",
    ]],
    ['51.2', 'Leé la situación y completá con I think so / I hope so / I hope not / I’m afraid not.', [
      "? Tomorrow is your picnic and you don't want rain. 'Will it rain tomorrow?' '___.' | I think not | *I hope not | I don't hope >> I hope not.",
      "? The last bus left at 11:30, unfortunately. 'Is there a bus after midnight?' '___.' | *I'm afraid not | I'm afraid no | I afraid not >> I'm afraid not.",
      "? Tom said yesterday that he would probably come. 'Is Tom coming?' '___.' | I think it | *I think so | I think yes >> I think so.",
    ]],
  ],
  52: [
    ['52.1', 'Leé la situación y completá con el question tag.', [
      "_ You're waiting for the bus and it's 2 degrees. You say to the person next to you: 'It's cold today, ___?' = isn't it >> Afirmativa → negativo.",
      "_ You're planning a barbecue and you think your friend is vegetarian. 'You don't eat meat, ___?' = do you >> Negativa → afirmativo.",
      "_ Sara isn't at the party any more. 'She went home early, ___?' = didn't she >> Pasado → didn't.",
      "_ Your friend knows a lot about France. 'You've been to Paris, ___?' = haven't you >> have → haven't.",
      "_ Nobody wants to cook tonight. 'Let's order a pizza, ___?' = shall we >> Let's → shall we.",
      "_ You arrive at the meeting and everyone is sitting down. 'I'm late, ___?' = aren't I >> I am → aren't I.",
    ]],
  ],
};

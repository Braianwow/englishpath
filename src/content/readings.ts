import type { Reading } from '../types';
import { parseExercise } from './dsl';
import type { ExMC } from '../types';

/**
 * Reading comprehension. The workbook's own reading texts are copyrighted and
 * only partially legible in the scan, so these are ORIGINAL texts written for
 * this platform on the topics of Objective First units, practising grammar
 * from English Grammar in Use. They are marked as complementary material.
 */
const q = (lines: string[]) => lines.map((l) => parseExercise(l) as ExMC);

export const READINGS: Reading[] = [
  {
    id: 'r-jeans', title: 'The most expensive jeans in the world', theme: 'Moda', src: 'extra', ref: 'wb1',
    text: `Most people own at least one pair of jeans, but very few people would pay thousands of dollars for an old, torn pair. Collectors do. Old denim is now one of the most sought-after items in the world of vintage fashion.

Why are some jeans so valuable? Age is the most important factor. Early jeans were work clothes: miners and farmers wore them until they fell apart, so very few have survived. A pair from the nineteenth century is far rarer than a painting from the same period.

Collectors date jeans by looking at small details. The number of pockets, the type of buttons and the material of the label all changed over the years. A single back pocket, for example, suggests the jeans are older than ones with two.

Not everyone understands the fascination. "They're just old trousers," says one shop owner. "But for collectors, they're a piece of history you can actually wear — although nobody would dare to."`,
    qs: q([
      "? Why have very few early jeans survived? | They were too expensive to buy. | *People wore them until they fell apart. | Collectors destroyed them. >> El texto dice que los mineros y granjeros las usaban hasta que se rompían.",
      "? According to the text, a pair of jeans from the 1800s is … | as common as a painting from that time. | *rarer than a painting from that time. | less valuable than modern jeans. >> 'far rarer than a painting from the same period'.",
      "? What does a single back pocket suggest? | The jeans are fake. | *The jeans are older. | The jeans were made for women. >> 'suggests the jeans are older than ones with two'.",
      "? 'They're just old trousers' expresses … | admiration | *a sceptical opinion | an expert valuation >> El dueño de la tienda no entiende la fascinación: es escéptico.",
      "? Which grammar structure appears in 'far rarer than'? | superlative | *comparative with an intensifier | as … as >> far + comparativo (unidades 105–106 de EGU).",
    ]),
  },
  {
    id: 'r-games', title: 'Are video games bad for you?', theme: 'Videojuegos', src: 'extra', ref: 'wb2',
    text: `For years, video games have had a bad reputation. Parents worry that their children are spending too much time in front of a screen, and newspapers often claim that violent games make young people aggressive.

However, researchers are now looking at the question more carefully. Some studies suggest that certain games improve problem-solving skills and reaction times. Strategy games, in particular, are mentally demanding: players have to plan ahead, manage resources and work out what their opponent is going to do.

Games are also becoming more social. Millions of people play online with friends, and some youth workers use games to build relationships with teenagers who find it difficult to talk to adults.

That doesn't mean there are no risks. Most experts agree that the problem is not games themselves but balance. A teenager who games for an hour after finishing homework is in a very different situation from one who plays all night and can't get up for school.`,
    qs: q([
      "? What do newspapers often claim, according to the text? | Games improve reaction times. | *Violent games make young people aggressive. | Games are becoming more social. >> Primer párrafo.",
      "? Why are strategy games described as 'demanding'? | They are expensive. | *Players must plan and solve problems. | They take a long time to install. >> Hay que planificar, gestionar recursos y anticipar al rival.",
      "? How do some youth workers use games? | To punish teenagers. | *To build relationships with teenagers. | To teach programming. >> Tercer párrafo.",
      "? According to most experts, the main issue is … | the type of game. | *balance. | the price of games. >> 'the problem is not games themselves but balance'.",
      "? 'Parents worry that their children are spending too much time…' uses the present continuous because … | it is a permanent truth. | *it describes a current, ongoing situation. | it is a future plan. >> Situación actual en curso (unidad 1).",
    ]),
  },
  {
    id: 'r-zoo', title: 'A day in the life of a zoo keeper', theme: 'Animales en peligro', src: 'extra', ref: 'wb4',
    text: `Maya has been a zoo keeper for six years. She started with the sea lions, but for the last few months she has been looking after the red pandas, an endangered species that the zoo is trying to breed.

Her day starts at seven. The first job is always the same: preparing food. Red pandas eat mainly bamboo, but they also need fruit and special pellets. After that, she checks every animal carefully. "You learn to notice small changes," she says. "If a panda isn't eating, something is wrong."

The job isn't always pleasant. Keepers work outside in all weathers, and sometimes they have to stay all night with a sick animal. Maya doesn't mind the long hours, but she hates the rain. "Even the animals don't like it," she laughs.

What she loves most is talking to visitors. "If people understand why these animals are disappearing, they might do something about it."`,
    qs: q([
      "? How long has Maya been working with the red pandas? | Six years | *A few months | Since seven o'clock >> 'for the last few months she has been looking after the red pandas'.",
      "? What is the first task of her day? | Cleaning the enclosures | *Preparing food | Talking to visitors >> 'The first job is always the same: preparing food.'",
      "? Why does she check the animals carefully? | Because visitors ask her to | *To notice small changes that may show a problem | Because the zoo is closing >> Si un panda no come, algo anda mal.",
      "? What does Maya dislike about the job? | The long hours | *The rain | The visitors >> 'she hates the rain'.",
      "? 'She has been a zoo keeper for six years' — why the present perfect? | The job finished six years ago. | *The situation started in the past and continues now. | It is a future plan. >> Present perfect + for (unidades 11–12).",
    ]),
  },
  {
    id: 'r-lottery', title: 'What would you do if you won the lottery?', theme: 'Condicionales', src: 'extra', ref: 'wb6',
    text: `Ask people what they would do if they won the lottery and most will give the same answers: buy a big house, travel the world, stop working. But what actually happens to winners?

Research suggests that many winners are less happy than they expected. If you suddenly had millions, your friends and family would treat you differently. Some people might ask you for money; others might feel uncomfortable around you. Several winners say they wish they had kept their win a secret.

Others manage it well. One woman who won a large prize kept her job as a nurse. "If I had stopped working, I would have lost the people I care about," she explained. "Unless you have a reason to get up in the morning, money doesn't help much."

So, would you still buy a ticket? Probably. As one winner put it: "Money doesn't buy happiness — but it does pay the bills."`,
    qs: q([
      "? What does research suggest about many lottery winners? | They are happier than expected. | *They are less happy than they expected. | They all stop working. >> Segundo párrafo.",
      "? Why might winners feel uncomfortable? | They lose the ticket. | *People around them start to behave differently. | They have to pay a lot of tax. >> Amigos y familia los tratan de otra manera.",
      "? What do several winners wish? | They had won more. | *They had kept their win a secret. | They had bought a house. >> wish + past perfect (unidad 40).",
      "? Why did the nurse keep her job? | She needed the money. | *She didn't want to lose the people she cares about. | Her boss asked her to. >> 'If I had stopped working, I would have lost the people I care about'.",
      "? 'Unless you have a reason to get up…' means … | If you have a reason… | *If you don't have a reason… | Because you have a reason… >> unless = if … not (unidad 115).",
    ]),
  },
  {
    id: 'r-dance', title: 'Dance your way to fitness', theme: 'Salud', src: 'extra', ref: 'wb19',
    text: `When people think about getting fit, they usually think about running or going to the gym. But a growing number of people are choosing a different option: dance.

Dance classes have become very popular in the last few years, and not only with young people. Teachers say that attendance has doubled, with students aged from eight to eighty. Some schools have introduced dance lessons for children who find it hard to concentrate, and teachers report that the children have become calmer and more confident.

Doctors point out that dancing can be just as effective as running for improving fitness. The difference is that people are much more likely to keep it up. "Running on your own can be boring," says one instructor. "When you dance, you're part of a group. People come for the exercise and stay for the friendship."

If you have been thinking about doing more exercise, it might be time you had a go.`,
    qs: q([
      "? What has happened to attendance at dance classes? | It has fallen. | *It has doubled. | It has stayed the same. >> 'attendance has doubled'.",
      "? How did dance lessons affect some schoolchildren? | They became more competitive. | *They became calmer and more confident. | They stopped doing sport. >> Segundo párrafo.",
      "? According to doctors, compared to running, dancing is … | much less effective. | *just as effective. | more dangerous. >> 'just as effective as running'.",
      "? Why are people more likely to continue dancing? | It is cheaper. | *It is social: you are part of a group. | It is easier. >> 'People come for the exercise and stay for the friendship.'",
      "? 'It might be time you had a go' — after 'it's time' we use … | the present simple | *the past simple | the infinitive >> it's (high) time + sujeto + pasado (unidad 35).",
    ]),
  },
  {
    id: 'r-books', title: 'Paper or screen?', theme: 'Libros', src: 'extra', ref: 'wb18',
    text: `When e-readers first appeared, many people predicted that printed books would disappear within a few years. That hasn't happened. In fact, sales of paperbacks are still strong, and many young readers say they prefer the feel of a real book.

Why? Part of the answer is practical. You don't need to charge a paperback, and you can lend it to a friend. But there is also something emotional about paper. Readers talk about the smell of new pages, and about seeing a row of books they have read on a shelf.

E-readers have clear advantages too. They are light enough to carry hundreds of books on holiday, and you can make the text bigger if your eyes are tired. Some readers use both: an e-reader for travelling and printed books at home.

Perhaps the question isn't "paper or screen?" but "what is the best way for me to read today?"`,
    qs: q([
      "? What did many people predict when e-readers appeared? | E-readers would fail. | *Printed books would disappear. | Books would become cheaper. >> Primer párrafo.",
      "? Which is NOT mentioned as an advantage of paper books? | You don't need to charge them. | You can lend them. | *You can make the text bigger. >> Agrandar el texto es una ventaja del e-reader.",
      "? 'They are light enough to carry hundreds of books' — 'enough' goes … | before the adjective | *after the adjective | at the end of the sentence >> adjetivo + enough (unidad 103).",
      "? What do some readers do? | Only read on screens. | *Use both formats. | Stop reading on holiday. >> 'Some readers use both'.",
    ]),
  },
  {
    id: 'r-space', title: 'Holidays in space?', theme: 'El futuro', src: 'extra', ref: 'wb10',
    text: `A few decades ago, space travel was only for highly trained astronauts. Today, private companies are already selling tickets for short trips to the edge of space, and some experts believe that by the end of this century thousands of people will have visited space as tourists.

The first trips are short. Passengers will spend just a few minutes in zero gravity before the spacecraft returns to Earth. Tickets are extremely expensive, so for now space tourism is only for the very rich.

Engineers are working on bigger plans. Some companies hope that, within twenty years, they will be flying passengers to hotels in orbit. Others are planning missions to the Moon and even to Mars.

Not everyone is excited. Critics point out that rockets produce pollution and ask whether the money would be better spent on problems here on Earth.`,
    qs: q([
      "? Who could travel to space a few decades ago? | Rich tourists | *Highly trained astronauts | Engineers only >> Primer párrafo.",
      "? 'By the end of this century thousands of people will have visited space' uses … | the future continuous | *the future perfect | the present perfect >> will have + participio = futuro perfecto (unidad 24).",
      "? How long do passengers spend in zero gravity on the first trips? | Several days | *A few minutes | A few hours >> 'just a few minutes in zero gravity'.",
      "? What do critics worry about? | The trips are too short. | *Pollution and how the money is spent. | There are not enough engineers. >> Último párrafo.",
    ]),
  },
  {
    id: 'r-storm', title: 'The night of the storm', theme: 'Fenómenos naturales', src: 'extra', ref: 'wb23',
    text: `I had been asleep for about an hour when the storm started. At first I thought it was a train passing, but then I heard the wind crashing against the windows. There was a flash of lightning and, a second later, the loudest thunder I had ever heard.

My parents were already standing in the kitchen. The electricity had gone off, so we lit some candles and listened to the radio. The forecast had said it would be windy, but nobody had expected anything like this.

In the morning, the garden looked like a battlefield. A tree had fallen across the road, and the river had flooded the field behind our house. Luckily, nobody was hurt.

Now, whenever the weather turns bad, I wish I had paid more attention to the forecast that night. We could have moved the car before the tree fell on it.`,
    qs: q([
      "? What did the writer think the noise was at first? | Thunder | *A train passing | The radio >> 'At first I thought it was a train passing'.",
      "? Why did the family light candles? | It was a tradition. | *The electricity had gone off. | They were celebrating. >> Past perfect: había ocurrido antes (unidad 15).",
      "? What had the forecast said? | There would be a terrible storm. | *It would be windy. | It would be sunny. >> 'The forecast had said it would be windy'.",
      "? What does the writer regret? | Going to bed early. | *Not paying more attention to the forecast. | Calling the neighbours. >> wish + past perfect = arrepentimiento sobre el pasado (unidad 41).",
      "? 'We could have moved the car' expresses … | an obligation in the past | *a past possibility that didn't happen | a present ability >> could have + participio (unidad 27).",
    ]),
  },
];

export const READING_BY_ID: Record<string, Reading> = Object.fromEntries(READINGS.map((r) => [r.id, r]));

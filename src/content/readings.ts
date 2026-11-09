import type { Reading } from '../types';
import { parseExercise } from './dsl';
import type { ExMC } from '../types';

/**
 * Reading comprehension. The workbook's own reading texts are copyrighted and
 * only partially legible in the scan, so these are ORIGINAL texts written for
 * this platform on the topics of Objective First units, practising grammar
 * from English Grammar in Use. They are marked as complementary material.
 * Each text is a long B1–B2 article or story (about 650–750 words) with eight questions.
 */
const q = (lines: string[]) => lines.map((l) => parseExercise(l) as ExMC);

export const READINGS: Reading[] = [
  {
    id: 'r-jeans', title: 'The most expensive jeans in the world', theme: 'Fashion', src: 'extra', ref: 'wb1',
    text: `Most people own at least one pair of jeans, and most of us have thrown away an old pair without thinking twice. Collectors would be horrified. Old denim is now one of the most sought-after items in the world of vintage fashion, and a pair that you might use to clean your bike could, in the right condition, be worth more than a new car.

Why are some jeans so valuable? Age is the most important factor. The first jeans, made in the second half of the nineteenth century, were not fashion items at all. They were work clothes. Miners, farmers and railway workers wore them every day, in mud, dust and rain, until they literally fell apart. When a pair was finished, it was used as a cloth or simply burnt. Nobody thought of keeping them. As a result, very few early jeans have survived, and a pair from the 1880s is far rarer than a painting from the same period.

Many of the most valuable pairs have been found in surprising places. Collectors explore abandoned mines in the American West, sometimes crawling through tunnels that have been closed for a hundred years. In one famous case, a pair was discovered under the floor of an old wooden house, where it had been used to stop the cold wind coming through the boards. Another was found in a rubbish pit next to a former gold-mining camp. The jeans were filthy and full of holes, but they still sold at auction for tens of thousands of dollars.

Experts date jeans by looking at small details, a bit like detectives. The number of pockets, the type of buttons, the stitching and the material of the label all changed over the years. A single back pocket, for example, suggests that the jeans are older than ones with two. Early jeans also had a metal buckle at the back to make the waist tighter, because belts were not yet common. Leather labels were replaced by cardboard ones in the middle of the twentieth century, so the label alone can tell an expert roughly when a pair was made.

Condition matters too, but not in the way you might expect. Collectors are not looking for jeans that look new. In fact, the marks left by the original owner are part of the attraction. A worn area on the knee shows that someone knelt down to work; a pale line on the back pocket shows where a worker kept his tools or his tobacco. "Every hole tells a story," explains Daniel Reyes, who has been collecting vintage clothing for twenty years. "When I hold a pair like that, I'm holding somebody's working life in my hands."

The market has grown enormously over the last two decades. Twenty years ago, only a small group of enthusiasts were interested in old denim. Today there are specialist dealers in Tokyo, Los Angeles and London, and some fashion brands buy old pairs so that their designers can study and copy them. Prices keep rising because the supply cannot increase: no more nineteenth-century jeans are going to be made.

Not everyone understands the fascination. "They're just old trousers," says Margaret Holt, who runs a second-hand clothes shop in Manchester. "People come in and ask if I've got anything from the 1950s, and they're ready to pay hundreds of pounds for something with holes in it. I don't get it." But even she admits that she checks the back pockets of every pair that is brought into her shop, just in case.

So what should you do with your own old jeans? Probably throw them away, or give them to a charity shop. Modern jeans are produced in their millions, and it is very unlikely that they will ever be rare. Still, the story of denim is a reminder that the value of an object can change completely over time. Something ordinary today might become a piece of history tomorrow — although if a pair of jeans is worth a fortune, nobody would ever dare to wear it.`,
    qs: q([
      "? Why have very few early jeans survived? | They were too expensive to buy. | *People wore them until they fell apart and then got rid of them. | Collectors destroyed them. >> The text says workers wore them 'until they literally fell apart' and then used them as cloths or burnt them.",
      "? According to the text, a pair of jeans from the 1880s is … | as common as a painting from that time. | *much rarer than a painting from that time. | less valuable than modern jeans. >> 'far rarer than a painting from the same period'.",
      "? Where was one pair of jeans found? | In a museum in Tokyo. | *Under the floor of an old wooden house. | In a second-hand shop in Manchester. >> It had been used to stop the cold wind coming through the boards.",
      "? What does a single back pocket suggest? | The jeans are fake. | *The jeans are older than ones with two. | The jeans were made for women. >> 'suggests that the jeans are older than ones with two'.",
      "? Why did early jeans have a metal buckle at the back? | To look more fashionable. | *Because belts were not yet common. | To hold the workers' tools. >> The buckle made the waist tighter 'because belts were not yet common'.",
      "? What do collectors think about holes and worn areas? | They make the jeans worthless. | They must be repaired before selling. | *They are part of the attraction because they tell a story. >> 'Every hole tells a story', says Daniel Reyes.",
      "? Why do prices keep rising? | Fashion brands are making copies. | *The number of old jeans cannot increase. | Collectors are destroying them. >> 'the supply cannot increase: no more nineteenth-century jeans are going to be made'.",
      "? What is Margaret Holt's attitude? | She is an expert collector. | *She doesn't understand the interest, but she still checks every pair. | She refuses to sell old jeans. >> She says 'I don't get it' but checks the back pockets 'just in case'.",
    ]),
  },
  {
    id: 'r-games', title: 'Are video games bad for you?', theme: 'Video games', src: 'extra', ref: 'wb2',
    text: `For years, video games have had a bad reputation. Parents worry that their children are spending too much time in front of a screen, teachers complain that students arrive at school exhausted, and newspapers often claim that violent games make young people aggressive. If you believed every headline, you would think that a games console was more dangerous than a motorbike.

However, researchers are now looking at the question more carefully, and the picture they are finding is far more complicated. Some studies suggest that certain games actually improve problem-solving skills and reaction times. Strategy games, in particular, are mentally demanding: players have to plan ahead, manage limited resources and work out what their opponent is going to do next. Puzzle games train people to try a solution, notice that it doesn't work and try again — a skill that is useful far beyond the screen.

Action games seem to have their own benefits. In one experiment, people who had never played video games were asked to play a fast action game for an hour a day over several weeks. At the end of the study, they were better at noticing details at the edge of their vision and at following several moving objects at the same time. Some surgeons even use games to warm up before delicate operations, because the movements of their hands become quicker and more precise.

Games are also becoming far more social than they used to be. The old image of the lonely teenager playing in a dark bedroom is out of date. Millions of people now play online with friends, talking and laughing through headsets while they build cities or complete missions together. For people who live far from their families, a weekly game can be a way of staying in touch. Some youth workers use games to build relationships with teenagers who find it difficult to talk to adults. "Sitting side by side and playing is much less threatening than sitting face to face," says Amira Khan, who works with young people in Birmingham. "After half an hour of playing, they start telling you what's really going on in their lives."

That doesn't mean there are no risks. Most experts agree that the problem is not games themselves but balance. A teenager who plays for an hour after finishing his homework is in a very different situation from one who plays all night and can't get up for school. Sleep is the biggest concern: the light from screens and the excitement of a close game can make it hard to fall asleep, and young people who don't sleep enough find it harder to concentrate and control their mood.

There are also worries about the way some games are designed. Many free games make money by selling small extras, such as new clothes for a character or a faster way to complete a level. These purchases look cheap, but they can add up quickly, and some games use tricks borrowed from gambling, like boxes with a random prize inside. Several countries have already introduced rules to protect children from these features, and others are considering doing the same.

What about violence? After decades of research, there is still no clear evidence that violent games turn normal people into violent people. Some studies have found that players feel more irritated for a short time after a violent game, but the effect seems to disappear quickly. Most researchers now believe that factors such as family problems, friends and mental health are far more important than the games someone plays.

So, are video games bad for you? The honest answer is: it depends on which games, how long and instead of what. A game that replaces sleep, exercise or time with friends can be harmful. A game that you play with friends, that makes you think and that you can stop when you need to is probably no worse than reading a novel or watching a football match. As one researcher put it, "Asking whether games are good or bad is like asking whether food is good or bad. The real question is what kind, and how much."`,
    qs: q([
      "? What is the main idea of the second paragraph? | Games are dangerous for children. | *Some games can improve certain mental skills. | Researchers have stopped studying games. >> Strategy and puzzle games improve problem-solving skills.",
      "? Why are strategy games described as 'mentally demanding'? | They are very long. | *Players have to plan, manage resources and predict their opponent. | They are difficult to buy. >> 'players have to plan ahead, manage limited resources and work out what their opponent is going to do next'.",
      "? What happened to the people in the action-game experiment? | They became more aggressive. | They stopped sleeping well. | *They noticed details at the edge of their vision better. >> They were better at noticing details and following several moving objects.",
      "? Why does Amira Khan use games with teenagers? | Because teenagers prefer games to school. | *Because playing side by side makes it easier for them to talk. | Because it is cheaper than other activities. >> 'Sitting side by side and playing is much less threatening than sitting face to face.'",
      "? According to most experts, what is the real problem? | Violent games. | Online games. | *A lack of balance, especially losing sleep. >> 'the problem is not games themselves but balance'. Sleep is 'the biggest concern'.",
      "? What is said about small extras sold inside free games? | They are always free. | *They can add up quickly and some use tricks from gambling. | They are illegal everywhere. >> 'they can add up quickly, and some games use tricks borrowed from gambling'.",
      "? What does the research say about violent games? | They clearly make people violent. | *There is no clear evidence that they make normal people violent. | They make players calmer. >> 'there is still no clear evidence that violent games turn normal people into violent people'.",
      "? Which grammar structure appears in 'are spending too much time'? | Present simple for habits. | *Present continuous for a current situation. | Present perfect. >> are + -ing describes what is happening around now (EGU unit 1).",
    ]),
  },
  {
    id: 'r-zoo', title: 'A day in the life of a zoo keeper', theme: 'Endangered animals', src: 'extra', ref: 'wb4',
    text: `Leila Haddad's alarm goes off at 5.30 every morning, and by 6.45 she is already walking through the gates of the city zoo, a cup of coffee in one hand and a radio in the other. Leila is a senior keeper in the zoo's Asian forest section, where she looks after red pandas, two Sumatran tigers and a family of gibbons whose loud songs can be heard all over the park.

"People think the job is mostly playing with animals," she says, laughing. "In fact, it's mostly cleaning. Before the visitors arrive, we clean every enclosure, check the fences and make sure nothing has changed overnight. You learn to notice tiny details. If a tiger hasn't eaten all its food, or a gibbon is sitting in a different place, that could be the first sign that something is wrong."

Feeding is the next big task, and it is far more complicated than it sounds. Each animal has its own diet, which is planned by the zoo's nutrition team. The red pandas eat mainly bamboo, which is delivered fresh three times a week, plus special biscuits and a little fruit. The tigers are not fed every day, because in the wild they don't catch something every day either. On some days, the keepers hide pieces of meat in different parts of the enclosure, so the tigers have to search for them. "We call it enrichment," Leila explains. "Animals that don't have to make any effort get bored, and bored animals can become stressed or unhealthy. So we try to make their lives interesting — puzzle feeders, new smells, things to climb."

Leila didn't plan to work with animals. She studied biology at university, and after graduating she spent two years working in a laboratory, testing water samples. "I was good at it, but I was bored," she admits. "I spent the whole day indoors looking at numbers. One weekend I volunteered at a wildlife centre, and I knew immediately that this was what I wanted to do." She worked as a volunteer for a year while doing her lab job part-time, and then applied for a position as a trainee keeper. She has been working at the zoo for eleven years now.

The part of her work she finds most important is conservation. Sumatran tigers are critically endangered: there are only a few hundred left in the wild, mainly because their forests are being cut down for farmland and because they are hunted illegally. Zoos around the world work together in breeding programmes, sharing information and sometimes moving animals from one zoo to another so that the population stays genetically healthy. Two years ago, the zoo's female tiger, Kirana, gave birth to two cubs. "That was the best day of my career," Leila says. "We had been preparing for months. When I saw them on the camera for the first time, I actually cried."

Not everyone believes that zoos should exist, and Leila understands the criticism. "Of course an animal is better off in a healthy wild habitat," she says. "The problem is that many of those habitats are disappearing. Good zoos protect species that might otherwise disappear, and they raise money for projects in the wild. Part of every ticket that visitors buy here goes to a forest protection project in Indonesia." She is also honest about the zoo's limits. "Some animals simply don't do well in captivity, and I think modern zoos should stop keeping them."

The afternoon is often the busiest time. Leila gives a talk to visitors at three o'clock, answers questions from schoolchildren and writes detailed notes on every animal's behaviour. If an animal needs medical treatment, she works with the vets, sometimes staying until late at night. The job is physically hard and not very well paid, and there are no holidays at Christmas, because the animals need to be fed every day.

So why does she do it? Leila thinks for a moment. "Because every time a child stands in front of the tigers and says 'wow', I know that child might grow up caring about forests on the other side of the world. That's worth getting up at 5.30 for."`,
    qs: q([
      "? What does Leila do first when she arrives at work? | She feeds the tigers. | She gives a talk to visitors. | *She cleans the enclosures and checks that everything is normal. >> 'Before the visitors arrive, we clean every enclosure, check the fences…'",
      "? Why does Leila pay attention to tiny details? | Because visitors complain. | *Because small changes can be the first sign of a problem. | Because her boss checks her work. >> A tiger not eating or a gibbon in a different place 'could be the first sign that something is wrong'.",
      "? Why are the tigers not fed every day? | Meat is too expensive. | *In the wild they don't catch something every day. | They don't like the food. >> 'in the wild they don't catch something every day either'.",
      "? What is 'enrichment'? | A special diet for sick animals. | *Activities that make animals' lives more interesting. | A way of raising money. >> Hiding food, puzzle feeders, new smells and things to climb so animals don't get bored.",
      "? What did Leila do before she became a keeper? | She was a vet. | *She worked in a laboratory testing water samples. | She taught biology at a school. >> She spent two years working in a lab and was bored.",
      "? Why are Sumatran tigers endangered? | Zoos have taken them from the wild. | *Their forests are being cut down and they are hunted illegally. | They can't find enough water. >> 'their forests are being cut down for farmland and because they are hunted illegally'.",
      "? What is Leila's opinion about criticism of zoos? | She thinks it is completely wrong. | *She understands it, but believes good zoos help protect species. | She agrees that all zoos should close. >> She admits animals are better off in healthy habitats, but many habitats are disappearing.",
      "? Which tense is used in 'She has been working at the zoo for eleven years'? | Past simple. | *Present perfect continuous, for something that started in the past and continues now. | Past perfect. >> has been + -ing + for (EGU units 9–12).",
    ]),
  },
  {
    id: 'r-lottery', title: 'What would you do if you won the lottery?', theme: 'Conditionals', src: 'extra', ref: 'wb6',
    text: `It's one of the most popular questions in the world, the kind of thing friends discuss late at night or while waiting for a bus: what would you do if you won the lottery? Most people answer immediately. They would give up their job, buy a big house, travel around the world and help their family. Some would buy a football club; others would open a small café by the sea. Very few people say, "I'd carry on exactly as I am."

But what actually happens to people who win? Researchers have been studying lottery winners for decades, and their findings are surprising. In one famous study from the 1970s, psychologists compared a group of lottery winners with a group of people who had not won anything. A year later, the winners were not much happier than the others. They had enjoyed the excitement at first, but after a while ordinary pleasures — a good meal, a conversation with a friend, a sunny afternoon — seemed less exciting than before. Psychologists call this "adaptation": we get used to good things, and they stop making us feel special.

More recent studies have been kinder to money. Research in Sweden, which followed thousands of winners over many years, found that people who had won large amounts were more satisfied with their lives than people who had won small amounts, even ten years later. They weren't necessarily more cheerful from day to day, but they worried less about bills and felt more secure about the future. In other words, money doesn't buy happiness in the moment, but it does remove some important sources of stress.

The way winners use their money seems to make a big difference. People who spend it on experiences — trips, courses, time with friends — tend to be happier than those who spend it mainly on things. People who give some of it away often say that this was the best part of winning. And people who keep working, perhaps in a job they choose rather than one they need, usually cope better than those who suddenly have nothing to do all day.

Some winners have terrible stories to tell. There are well-known cases of people who won millions and lost it all within a few years. Some spent without thinking, buying cars, houses and expensive gifts, and didn't realise how fast the money was disappearing. Others were asked for money by friends, relatives and complete strangers until relationships broke down. "The phone never stopped ringing," one British winner told a newspaper. "If I had known what it was going to be like, I wouldn't have bought the ticket."

That is why many lottery companies now offer advice to big winners. Experts recommend that winners should not make any big decisions for the first few months. They suggest keeping the news private if possible, paying off debts, getting help from a financial adviser and deciding in advance how much they want to give to other people. "If you won tomorrow, the best thing you could do is nothing," says one adviser. "Put the money somewhere safe, go for a walk and wait until the excitement has calmed down."

Of course, for almost all of us, the question will stay imaginary. The chance of winning the top prize in most national lotteries is around one in fourteen million or more — you are far more likely to be struck by lightning. Some economists argue that the lottery is really a tax on dreams, paid mainly by people who don't have much money. Others reply that a ticket is a cheap way to buy a few days of hope and imagination.

Perhaps that is the real value of the question. When people describe what they would do with millions, they often reveal what they really want: more time with their children, the courage to change careers, the freedom to travel, the chance to help someone they love. And some of those things, as many winners have discovered, don't need a lottery ticket at all.`,
    qs: q([
      "? What do most people answer when asked what they would do with a lottery win? | They would carry on as before. | *They would stop working, buy a house and travel. | They would give all the money away. >> 'They would give up their job, buy a big house, travel around the world…'",
      "? What did the 1970s study find? | Winners were much happier a year later. | *Winners were not much happier than other people a year later. | Winners had all lost their money. >> 'A year later, the winners were not much happier than the others.'",
      "? What does 'adaptation' mean in the text? | Moving to a new house. | *Getting used to good things so that they stop feeling special. | Learning to spend less money. >> 'we get used to good things, and they stop making us feel special'.",
      "? What did the Swedish research show? | Big winners worried more about money. | *Big winners felt more satisfied and secure, even years later. | Small winners were happier than big winners. >> They 'worried less about bills and felt more secure about the future'.",
      "? Which kind of winners tend to be happiest? | Those who buy a lot of expensive things. | Those who stop working completely. | *Those who spend on experiences and give some money away. >> Experiences and giving are linked to more happiness.",
      "? Why did one British winner regret buying the ticket? | He lost the ticket. | *People kept asking him for money and the phone never stopped ringing. | He had to pay a lot of tax. >> 'If I had known what it was going to be like, I wouldn't have bought the ticket.'",
      "? What do advisers recommend to new winners? | Spend the money quickly. | *Make no big decisions for the first few months. | Tell everybody the news. >> 'the best thing you could do is nothing'.",
      "? Which conditional is used in 'If I had known…, I wouldn't have bought the ticket'? | First conditional (real future). | Second conditional (imaginary present). | *Third conditional (imaginary past). >> if + past perfect, would have + past participle (EGU unit 40).",
    ]),
  },
  {
    id: 'r-dance', title: 'Dance your way to fitness', theme: 'Health', src: 'extra', ref: 'wb19',
    text: `Every Tuesday evening, the hall of a primary school in the north of Bristol fills with music and noise. About forty people of all ages — teenagers, office workers, a retired bus driver and a grandmother who is nearly eighty — take off their coats and start to move. For the next hour, they jump, turn, clap and laugh, following the instructions of a small, energetic woman called Grace Okafor. By the end of the class, everybody is red in the face and out of breath. Nobody seems to mind.

"Most of the people here hate the gym," Grace says. "They've tried it, and they found it boring or embarrassing. Here, they forget they're exercising. They're just having fun with the music, and an hour goes by in a few minutes."

Dance fitness classes have become extremely popular in the last ten years. Some are based on Latin American music, others on hip-hop, Bollywood or African dance, and many mix several styles. The idea is simple: instead of running on a machine or lifting weights, you follow a series of easy steps to energetic music. You don't need a partner, special clothes or any previous experience.

Scientists are not surprised that these classes work. Dancing is an excellent form of aerobic exercise, which means it makes your heart and lungs work harder. An hour of energetic dancing can burn as many calories as an hour of jogging or cycling. Because it involves constant changes of direction, it also improves balance and coordination, and it strengthens the muscles in the legs and the centre of the body. For older people, better balance is especially important, because it reduces the risk of falling.

The benefits are not only physical. Learning a sequence of steps is good exercise for the brain: you have to remember the movements, listen to the music and react quickly when the instructor changes something. Some studies suggest that regular dancing may help older adults keep their memory sharp. There is also strong evidence that group exercise improves mood. Moving together to music seems to make people feel more connected to each other, and many dancers describe a feeling of happiness that lasts for hours after the class.

Tom Fielding, a 34-year-old software engineer, started coming to Grace's class two years ago. "I was working from home, sitting at a desk all day, and I'd put on a lot of weight," he says. "A friend dragged me here. For the first three weeks I was terrible — I always turned left when everybody else turned right. But nobody laughed at me, and slowly I got better." Since then, Tom has lost twelve kilos and, more importantly, he says, he has made a group of friends. "We go for a drink after the class. Some of them I'd never have met in normal life."

There are a few things to be careful about. Experts advise beginners to start with one or two classes a week and to choose classes that are labelled 'beginner' or 'low impact', especially if they haven't exercised for a long time. Good shoes are important, because jumping on a hard floor can hurt the knees and ankles. And as with any exercise, people with heart problems or other health conditions should speak to a doctor before starting.

Grace herself started dancing as a child in Lagos, where her grandmother taught her traditional dances at family celebrations. She moved to England when she was nineteen to study nursing and worked in a hospital for many years. "I saw so many patients whose health problems could have been prevented with more activity," she says. "But telling people to exercise doesn't work. You have to give them something they actually want to do."

As the music stops and the class ends, the grandmother in the front row, whose name is Patricia, is still smiling. She has been coming every week for five years. "My doctor says I've got the heart of a sixty-year-old," she says proudly. "I tell her it's because I dance."`,
    qs: q([
      "? Why do many people in Grace's class prefer dancing to the gym? | It is cheaper. | *They find the gym boring or embarrassing, but dancing is fun. | The gym is too far away. >> 'Most of the people here hate the gym… Here, they forget they're exercising.'",
      "? What do you need to join a dance fitness class? | A partner and special shoes. | Previous dance experience. | *Nothing special: no partner, special clothes or experience. >> 'You don't need a partner, special clothes or any previous experience.'",
      "? According to the text, an hour of energetic dancing … | burns fewer calories than walking. | *can burn as many calories as jogging or cycling. | is only good for the brain. >> 'can burn as many calories as an hour of jogging or cycling'.",
      "? Why is better balance especially important for older people? | It helps them dance faster. | *It reduces the risk of falling. | It improves their memory. >> 'it reduces the risk of falling'.",
      "? How does dancing help the brain? | It makes you sleep more. | *You have to remember steps, listen and react quickly. | It stops you thinking about work. >> Learning sequences, listening to the music and reacting quickly exercise the brain.",
      "? What was Tom's experience at the beginning? | He was very good from the first class. | *He made a lot of mistakes, but nobody laughed at him. | He left after three weeks. >> 'I always turned left when everybody else turned right. But nobody laughed at me.'",
      "? Why did Grace start teaching dance? | Her doctor told her to. | *As a nurse, she saw that many health problems could be prevented with activity people enjoy. | She wanted to become famous. >> 'You have to give them something they actually want to do.'",
      "? In 'Some of them I'd never have met in normal life', 'I'd never have met' expresses … | a future plan. | *an imaginary past result. | a habit in the past. >> would have + past participle: something that didn't happen (EGU unit 36).",
    ]),
  },
  {
    id: 'r-books', title: 'Paper or screen?', theme: 'Books', src: 'extra', ref: 'wb18',
    text: `When e-readers first became popular, many people predicted the end of the printed book. Why would anyone carry a heavy novel on holiday when they could carry a thousand books in a device thinner than a magazine? Bookshops would close, publishers would stop printing, and libraries would turn into museums. More than fifteen years later, that hasn't happened. In many countries, sales of printed books have actually risen, while sales of e-books have stopped growing. So what went wrong with the prediction?

Part of the answer is that people simply like paper. In surveys, readers say they enjoy the weight of a book, the smell of the pages and the pleasure of seeing it on a shelf after they have finished it. Books are also popular presents, and an e-book is much harder to wrap. Young people, who grew up with screens, are some of the biggest buyers of printed books — partly, it seems, because they want a break from their phones.

But the debate is not only about feelings. Researchers have been comparing how well people understand what they read on paper and on screens, and the results are interesting. For short, simple texts, there seems to be very little difference. For longer, more complicated texts, however, several studies have found that readers understand and remember more when they read on paper. One explanation is that we tend to read more quickly and less carefully on screens, because we are used to scrolling through news, messages and social media. Another is that a physical book gives us a sense of place: we remember that a particular scene happened near the beginning, on a left-hand page, and this helps us build a mental map of the story.

Interestingly, people who read on screens are often too confident. In one experiment, students who read on a computer were more likely to think they had understood a text well, but they did worse in the test than students who read the same text on paper. The researchers concluded that screens encourage us to skim, and that we don't always notice how much we are missing.

That doesn't mean screens are bad for reading. E-readers have real advantages. You can make the letters bigger, which is a huge help for people with poor eyesight. You can look up the meaning of a word with one touch, which is very useful for language learners. E-books are often cheaper, they are available instantly, and they don't take up any space in a small flat. For people who travel a lot, or who read several books at the same time, a device is extremely practical. Audiobooks, too, have become enormously popular, allowing people to 'read' while they drive, cook or go for a run.

There are also environmental arguments on both sides. Printing books uses paper, ink and energy, and transporting them produces pollution. On the other hand, devices are made from metals and plastics that are difficult to recycle, and they need electricity. Experts calculate that an e-reader becomes the greener option only if you read a lot of books on it — probably more than twenty or thirty — before you replace it.

Many readers have stopped seeing the question as a choice. Sara Lindqvist, a teacher from Gothenburg, uses both. "I read novels on paper in bed, because I want to switch off from screens before I sleep," she says. "But I read newspapers and work documents on my tablet, and I listen to audiobooks on the train. Each format is good for something different."

Educators are now thinking about what this means for schools. Some recommend that students should read important or difficult texts on paper, and use screens for searching, checking and short reading. Others say that the most important thing is to teach students to read slowly and carefully, whatever they are reading on. After all, the skill of concentrating on a long text for an hour without checking your phone may be more valuable today than ever before.

Perhaps the printed book survived because it is a very good piece of technology: it never needs charging, it doesn't crash, and it works perfectly in a garden on a sunny afternoon. The future will probably not be paper or screen, but paper and screen — and readers will choose the one that fits the moment.`,
    qs: q([
      "? What did many people predict when e-readers became popular? | That e-books would be more expensive. | *That printed books would disappear. | That libraries would get bigger. >> They predicted 'the end of the printed book'.",
      "? Why do some young people buy printed books, according to the text? | Because they are cheaper. | *Because they want a break from their phones. | Because schools require them. >> 'partly, it seems, because they want a break from their phones'.",
      "? What have studies found about long, complicated texts? | People understand them better on screens. | *People understand and remember more when reading on paper. | There is no difference at all. >> 'readers understand and remember more when they read on paper'.",
      "? Why might a physical book help us remember? | It has bigger letters. | *It gives us a sense of place, like a mental map of the story. | It is heavier. >> We remember that a scene happened on a left-hand page near the beginning.",
      "? What happened to the students who read on a computer in the experiment? | They did better in the test. | *They felt more confident but did worse in the test. | They refused to finish the text. >> They thought they had understood well 'but they did worse in the test'.",
      "? Which is mentioned as an advantage of e-readers? | They never need electricity. | *You can make the letters bigger and look up words easily. | They are easier to recycle. >> Bigger letters for poor eyesight and one-touch dictionaries.",
      "? When does an e-reader become the greener option? | Immediately. | Never. | *Only if you read many books on it before replacing it. >> 'probably more than twenty or thirty' books.",
      "? What is the writer's conclusion? | Paper books will soon disappear. | Screens are better in every way. | *People will use both and choose the one that fits the moment. >> 'not paper or screen, but paper and screen'.",
    ]),
  },
  {
    id: 'r-space', title: 'Holidays in space?', theme: 'The future', src: 'extra', ref: 'wb10',
    text: `For most of the twentieth century, going to space was something only a few hundred highly trained astronauts could do. They were chosen from thousands of applicants, spent years preparing and travelled as part of government programmes that cost billions. Today, that is changing. Private companies have started selling seats on rockets to anyone who can pay, and a new word has entered the dictionary: space tourism.

The first space tourists were extremely rich. In the early 2000s, a handful of businesspeople paid around twenty million dollars each to spend a week on the International Space Station. They had to train for months in Russia, learn basic Russian and spend long periods in a centrifuge, a machine that spins very fast to imitate the forces of a rocket launch. Since then, several companies have developed shorter and cheaper trips. The most common kind is a 'suborbital' flight: the spacecraft goes up to around 100 kilometres above the Earth — the official edge of space — and then comes back down. The whole trip lasts about ten minutes, but passengers experience a few minutes of weightlessness and see the curve of the Earth against the black sky.

Those few minutes still cost hundreds of thousands of dollars, but companies believe prices will fall, just as they did with air travel. A hundred years ago, flying was dangerous, uncomfortable and only for the wealthy; today, millions of people fly every day for the price of a dinner. Supporters of space tourism argue that the same thing will happen with rockets. "By the time my children are grown up, a trip to space will cost about the same as a luxury cruise," one company director claimed in an interview.

What will a space holiday be like in twenty or thirty years? Some companies are already designing hotels that would orbit the Earth. Guests would stay for several days, sleeping in small cabins, looking out at the planet through enormous windows and seeing sixteen sunrises every twenty-four hours. They would eat specially prepared food, take part in experiments and float around a central 'playroom' with no gravity. Some engineers are even talking about trips around the Moon, which would take about a week.

However, there are many reasons to be cautious. Space travel is still dangerous. Rockets carry enormous amounts of fuel, and accidents, although rare, are usually fatal. The human body is not designed for space: in weightlessness, many people feel sick for the first few hours, and on longer trips muscles and bones become weaker. Space tourists also need to be reasonably healthy, so not everybody will be able to go, even if they can afford it.

Then there is the question of the environment. Rocket launches produce pollution high in the atmosphere, where it can stay for a long time. At the moment, the number of launches is small compared with the number of planes, so the total impact is limited. But if space tourism grows as quickly as some companies hope, scientists warn that it could affect the climate and the ozone layer. Critics also point out that it seems strange to spend so much money and energy sending rich people into space while there are serious problems on Earth.

Supporters reply that space tourism helps pay for new technology. Reusable rockets, for example, which land again after a flight instead of falling into the ocean, have already made launching satellites much cheaper. That has benefits for everyone, from weather forecasts to internet connections in remote areas. Many astronauts also describe the 'overview effect': a powerful feeling that comes from seeing the whole Earth from above, small and fragile, without borders. Some believe that if more people experienced this, they would take better care of the planet.

So, will you be taking a holiday in space? For now, it remains a dream for most people — but so did flying, once. Whether space hotels become as normal as beach resorts, or remain an expensive adventure for a few, will depend on safety, cost and how seriously the industry takes its effect on the planet it leaves behind.`,
    qs: q([
      "? What did the first space tourists have to do? | Pay a small fee and fly the next day. | *Pay around twenty million dollars and train for months. | Become government astronauts. >> They trained in Russia, learnt basic Russian and used a centrifuge.",
      "? What is a 'suborbital' flight? | A week-long stay on the space station. | *A short trip to the edge of space and back. | A flight around the Moon. >> It goes up to about 100 km and lasts about ten minutes.",
      "? Why do companies believe prices will fall? | Governments will pay for the trips. | *The same thing happened with air travel. | Rockets will become smaller. >> Flying was once only for the wealthy; now millions fly every day.",
      "? What would guests in a space hotel see? | One sunrise a day. | *Sixteen sunrises every twenty-four hours. | No sunrises at all. >> 'seeing sixteen sunrises every twenty-four hours'.",
      "? Which is a health problem mentioned in the text? | People grow taller. | *Many people feel sick at first and muscles and bones become weaker. | People can't sleep at all. >> Space sickness and weaker muscles and bones on longer trips.",
      "? What environmental worry do scientists have? | Rockets use too much water. | *Rocket pollution high in the atmosphere could affect the climate and the ozone layer. | Space hotels will fall to Earth. >> If launches increase, 'it could affect the climate and the ozone layer'.",
      "? What is the 'overview effect'? | A camera used in rockets. | *A powerful feeling from seeing the whole Earth from above. | A type of space sickness. >> Seeing the Earth 'small and fragile, without borders'.",
      "? Which structure is used in 'Guests would stay for several days'? | would for a past habit. | *would for an imagined future situation. | would for a polite request. >> would describes how things would be in an imaginary future hotel (EGU unit 36).",
    ]),
  },
  {
    id: 'r-storm', title: 'The night of the storm', theme: 'Natural disasters', src: 'extra', ref: 'wb23',
    text: `The forecast had warned about strong winds, but nobody in the small coastal village of Carrick Bay expected what happened on the night of 14 October. Marta Silva, who ran the café by the harbour, had closed early and was watching television with her eleven-year-old son, Leo, when the lights went out. At first she thought it was just a power cut. Then she heard the noise.

"It wasn't like normal wind," she remembers. "It was a deep roar, like a train that never stopped. The whole house was shaking. Leo grabbed my arm and asked if the roof was going to fall off. I told him no, but honestly, I didn't know."

Outside, the storm was destroying everything in its path. Fallen trees blocked the only road out of the village, and waves several metres high were crashing over the harbour wall. Fishing boats that had been tied up for the night broke free and were thrown against the rocks. Marta's phone had no signal, so she couldn't call anyone. She lit a candle, found an old radio that worked with batteries and sat with Leo in the hallway, the part of the house with no windows, listening to the news.

At about midnight, someone knocked on the door. It was her neighbour, Mr Doyle, an eighty-three-year-old widower who lived alone at the end of the street. He was soaking wet and shaking with cold. Water had come in under his front door and the ground floor of his cottage was flooded. "He had walked fifty metres in that wind with a torch," Marta says. "I still don't know how he managed it." She gave him dry clothes, made tea on her small camping stove, and the three of them waited together for the night to end.

The worst of the storm passed at around four in the morning. When the sun came up, the villagers went out to see the damage. Roofs had been torn off, windows smashed and gardens covered in sand and seaweed. The café had lost its sign and part of its terrace, and the inside was full of water. Three boats had sunk. But, amazingly, nobody had been seriously hurt.

What happened next surprised everyone. Within hours, people started to organise themselves. A group of fishermen used their tractors and chainsaws to clear the road. Teenagers went from house to house, checking on older residents and carrying messages, because the phones still weren't working. The village hall became a kitchen and a meeting point. Marta, whose own café was ruined, set up a table there and cooked soup for anyone who needed it, using food that people brought from their freezers before it went bad.

Emergency services arrived the following afternoon, once the road was open. Electricity took four days to come back, and the repairs took months. The village received some money from the government, but it was not enough, so the community organised its own fundraising. A local band played a concert, children sold cakes and a woman who had grown up in the village and now lived in Canada started an online appeal that raised thousands of pounds in a week.

Scientists say that storms like this one may become more frequent as the climate changes and sea levels rise. Coastal communities around the world are being forced to think about how to protect themselves. In Carrick Bay, the harbour wall has been made higher, and every household now has an emergency box with a radio, batteries, a torch, water and a list of neighbours who might need help. "We learnt that the most important thing is knowing who lives around you," says Marta.

A year later, the café is open again, with a new sign and a photo on the wall of the village hall on the morning after the storm, full of people eating soup. Mr Doyle comes in every day for a cup of tea and always sits at the same table by the window. "That night was the most frightening of my life," he says. "But it's also the night I stopped feeling alone."`,
    qs: q([
      "? What was Marta doing when the lights went out? | She was working in the café. | *She was watching television with her son. | She was sleeping. >> 'was watching television with her eleven-year-old son' — past continuous for the background action.",
      "? Why couldn't Marta call anyone? | She had lost her phone. | *Her phone had no signal. | The radio was broken. >> 'Marta's phone had no signal'.",
      "? Why did Marta and Leo sit in the hallway? | It was the warmest room. | *It was the part of the house with no windows. | The radio worked better there. >> It was the safest place, with no windows.",
      "? Why did Mr Doyle come to Marta's house? | He wanted to borrow a torch. | *His cottage was flooded and he was wet and cold. | He wanted to check on Leo. >> Water had come in and his ground floor was flooded.",
      "? What did the teenagers do after the storm? | They cleared the road with tractors. | *They checked on older people and carried messages. | They cooked soup in the village hall. >> 'Teenagers went from house to house, checking on older residents and carrying messages.'",
      "? How did the village get enough money for the repairs? | The government paid for everything. | *The community organised its own fundraising, including an online appeal. | Marta sold her café. >> A concert, a cake sale and an online appeal from Canada.",
      "? What has every household in Carrick Bay got now? | A new boat. | *An emergency box with a radio, a torch, water and a list of neighbours. | A higher wall around the house. >> The emergency box and the list of neighbours who might need help.",
      "? What does Mr Doyle mean when he says 'it's also the night I stopped feeling alone'? | He moved to a new house. | *The storm brought him closer to his neighbours. | He got married. >> Since then he has become part of the community.",
    ]),
  },
];

export const READING_BY_ID: Record<string, Reading> = Object.fromEntries(READINGS.map((r) => [r.id, r]));

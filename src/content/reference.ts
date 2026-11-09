/**
 * Reference material that corresponds to the Appendices of English Grammar in Use
 * (1 Regular and irregular verbs, 2 Present and past tenses, 3 The future,
 * 4 Modal verbs, 5 Short forms, 6 Spelling, 7 American English).
 * Tables and explanations were written for this platform.
 */
export const IRREGULAR: [string, string, string, string][] = (`be was/were been ser/estar
beat beat beaten golpear, vencer
become became become convertirse
begin began begun empezar
bend bent bent doblar
bet bet bet apostar
bite bit bitten morder
blow blew blown soplar
break broke broken romper
bring brought brought traer
build built built construir
burst burst burst reventar
buy bought bought comprar
catch caught caught atrapar
choose chose chosen elegir
come came come venir
cost cost cost costar
creep crept crept arrastrarse
cut cut cut cortar
deal dealt dealt tratar
dig dug dug cavar
do did done hacer
draw drew drawn dibujar
drink drank drunk beber
drive drove driven manejar
eat ate eaten comer
fall fell fallen caer
feed fed fed alimentar
feel felt felt sentir
fight fought fought pelear
find found found encontrar
flee fled fled huir
fly flew flown volar
forbid forbade forbidden prohibir
forget forgot forgotten olvidar
forgive forgave forgiven perdonar
freeze froze frozen congelar
get got got conseguir, llegar
give gave given dar
go went gone ir
grow grew grown crecer
hang hung hung colgar
have had had tener
hear heard heard oír
hide hid hidden esconder
hit hit hit golpear
hold held held sostener
hurt hurt hurt lastimar
keep kept kept guardar, mantener
kneel knelt knelt arrodillarse
know knew known saber, conocer
lay laid laid poner, colocar
lead led led guiar
leave left left irse, dejar
lend lent lent prestar
let let let permitir
lie lay lain yacer, estar acostado
light lit lit encender
lose lost lost perder
make made made hacer, fabricar
mean meant meant significar
meet met met conocer, encontrarse
pay paid paid pagar
put put put poner
quit quit quit dejar, renunciar
read read read leer
ride rode ridden andar (a caballo, en bici)
ring rang rung sonar, llamar
rise rose risen subir, elevarse
run ran run correr
say said said decir
see saw seen ver
seek sought sought buscar
sell sold sold vender
send sent sent enviar
set set set fijar, establecer
sew sewed sewn coser
shake shook shaken sacudir
shine shone shone brillar
shoot shot shot disparar
show showed shown mostrar
shrink shrank shrunk encoger
shut shut shut cerrar
sing sang sung cantar
sink sank sunk hundirse
sit sat sat sentarse
sleep slept slept dormir
slide slid slid deslizar
speak spoke spoken hablar
spend spent spent gastar, pasar (tiempo)
spit spat spat escupir
split split split dividir
spread spread spread extender
spring sprang sprung saltar
stand stood stood estar de pie
steal stole stolen robar
stick stuck stuck pegar
sting stung stung picar
stink stank stunk apestar
strike struck struck golpear
swear swore sworn jurar
sweep swept swept barrer
swim swam swum nadar
swing swung swung balancearse
take took taken tomar, llevar
teach taught taught enseñar
tear tore torn rasgar
tell told told decir, contar
think thought thought pensar
throw threw thrown tirar, lanzar
understand understood understood entender
wake woke woken despertar
wear wore worn usar (ropa)
weep wept wept llorar
win won won ganar
write wrote written escribir`).split('\n').map((l) => {
  const [a, b, c, ...es] = l.split(' ');
  return [a, b, c, es.join(' ')];
});

export const TENSES: string[][] = [
  ['Tense', 'Form', 'Example', 'Units'],
  ['Present simple', 'I do / he does', 'I work in a bank.', '2–4'],
  ['Present continuous', 'I am doing', "I'm working now.", '1, 3–4'],
  ['Present perfect', 'I have done', "I've finished my work.", '7–8, 13–14'],
  ['Present perfect continuous', 'I have been doing', "I've been working all day.", '9–12'],
  ['Past simple', 'I did', 'I worked yesterday.', '5, 13–14'],
  ['Past continuous', 'I was doing', 'I was working when you called.', '6'],
  ['Past perfect', 'I had done', 'I had finished when she arrived.', '15'],
  ['Past perfect continuous', 'I had been doing', 'I had been working for hours.', '16'],
];

export const FUTURE: string[][] = [
  ['Form', 'Use', 'Example', 'Unit'],
  ['Present continuous', 'Plans already arranged', "I'm meeting Tom tomorrow.", '19'],
  ['Present simple', 'Timetables and schedules', 'The train leaves at 8.', '19'],
  ['be going to', 'An intention already decided / present evidence', "I'm going to buy a car. Look, it's going to rain.", '20, 23'],
  ['will', 'A decision made now, a prediction, an offer, a promise', "I'll help you. I think it'll rain.", '21–23'],
  ['will be doing', 'An action in progress at a time in the future', "This time tomorrow I'll be flying.", '24'],
  ['will have done', 'An action finished before a time in the future', "By 2030 I'll have finished.", '24'],
  ['when / if + present', 'The future after time conjunctions', 'Call me when you arrive.', '25'],
];

export const MODALS: string[][] = [
  ['Modal', 'Meaning', 'Example', 'Units'],
  ['can / could', 'Ability, possibility, permission, requests', 'Can you swim? Could you help me?', '26–27, 37'],
  ['be able to', 'Ability (in other tenses)', "I haven't been able to sleep.", '26'],
  ['must / can’t', 'A certain deduction', 'She must be tired. It can’t be true.', '28'],
  ['may / might', 'Possibility', 'It might rain later.', '29–30'],
  ['have to / must', 'Obligation', 'I have to work. You must stop.', '31'],
  ['mustn’t / needn’t', 'Prohibition / no need', 'You mustn’t smoke. You needn’t come.', '32'],
  ['should', 'Advice, the right thing to do', 'You should see a doctor.', '33–34'],
  ['had better', 'Strong advice for a specific situation', "You'd better go now.", '35'],
  ['would', 'Imaginary situations, past habits, requests', 'I would like a coffee.', '36–37'],
  ['modal + have + past participle', 'Past: deduction, possibility, criticism', 'He must have left. You should have told me.', '27–29, 33'],
];

export const SHORT_FORMS: string[][] = [
  ['Full form', 'Short form'],
  ['I am', "I'm"], ['you are / we are / they are', "you're / we're / they're"], ['he is / she is / it is', "he's / she's / it's"],
  ['I have', "I've"], ['he has', "he's"], ['I will', "I'll"], ['I would / I had', "I'd"],
  ['is not / are not', "isn't / aren't"], ['was not / were not', "wasn't / weren't"], ['do not / does not / did not', "don't / doesn't / didn't"],
  ['have not / has not / had not', "haven't / hasn't / hadn't"], ['will not', "won't"], ['cannot', "can't"], ['could not / should not / would not', "couldn't / shouldn't / wouldn't"],
  ['must not / need not', "mustn't / needn't"],
];

export const SPELLING: { rule: string; ex: string }[] = [
  { rule: 'Verbs ending in -s, -sh, -ch, -x, -o add -es in the 3rd person.', ex: 'pass → passes, wash → washes, go → goes' },
  { rule: 'Consonant + y changes to -ies / -ied (but vowel + y does not change).', ex: 'study → studies → studied; play → plays → played' },
  { rule: 'Verbs ending in -e lose the e before -ing / -ed.', ex: 'make → making, hope → hoped (but be → being, see → seeing)' },
  { rule: '-ie → -ying.', ex: 'lie → lying, die → dying' },
  { rule: 'One syllable (or a stressed final syllable) ending in consonant + vowel + consonant: double the consonant.', ex: 'stop → stopped, plan → planning, prefer → preferred, begin → beginning' },
  { rule: 'Do not double it if the final syllable is not stressed.', ex: 'visit → visited, remember → remembering' },
  { rule: 'In British English, a final -l is doubled after a short vowel even if it is not stressed.', ex: 'travel → travelling (US: traveling), cancel → cancelled' },
  { rule: 'Adjective → adverb: + -ly; -y → -ily; -le → -ly; -ic → -ically.', ex: 'quick → quickly, easy → easily, terrible → terribly, basic → basically' },
];

export const AMERICAN: string[][] = [
  ['British', 'American', 'Note'],
  ['I’ve just had lunch. / Have you finished yet?', 'I just had lunch. / Did you finish yet?', 'In the US, the past simple is more common with just, already, yet.'],
  ['have got', 'have', 'I’ve got a car (GB) / I have a car (US).'],
  ['at the weekend', 'on the weekend', ''],
  ['in a street', 'on a street', ''],
  ['different from / to', 'different from / than', ''],
  ['Shall I…?', 'Should I…?', 'shall is unusual in the US.'],
  ['gotten is not used', 'gotten (past participle of get)', 'Your English has gotten better (US).'],
  ['travelling, cancelled', 'traveling, canceled', 'Spelling differences.'],
  ['colour, centre, organise', 'color, center, organize', ''],
  ['underground / flat / holiday', 'subway / apartment / vacation', 'Different vocabulary.'],
];

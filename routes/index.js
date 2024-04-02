const express = require("express")
const router = new express.Router()
const app = express()
const cors = require('cors')

app.use(
  cors({
    origin: "*"
  }

))





let trivia = [
  {   
    question: `when was the first trailer for the indie game "OMORI" released?`,
    a: 2016,
    b: 2017,
    c: 2014,
    d: 2019,
    answer: 'c'
},
{
    question: `what year was staten island technical high school established?`,
    a: 1988,
    b: 1963,
    c: 1971,
    d: 1978,
    answer: 'a'
},
{
    question: `which one of these options isn't a store you can near hylan blvd & new dorp lane?`,
    a: `Chic'n Go`,
    b: '7-11',
    c: 'Cold Stone',
    d: 'Bravo Pizza',
    answer: 'a'
},  
{
    question: `in the anime spy x family, what is the name of Loid's telepathic daughter?`,
    a: `Yor Forger`,
    b: 'Misty Forger',
    c: 'Frankie Forger',
    d: 'Anya Forger',
    answer: 'd'
},  
{
    question: `which one of these pokemon resist the ground type`,
    a: `crustle`,
    b: 'sunflora',
    c: 'raichu',
    d: 'quagsire',
    answer: 'b'
},  
{
    question: `in the show avatar: the last airbender, what is the last element that aang masters`,
    a: `water`,
    b: 'earth',
    c: 'fire',
    d: 'air',
    answer: 'c'
},  
{
    question: `the comic book hero anti-venom was created when which character used his healing powers on venom?`,
    a: `deathstroke`,
    b: 'magneto',
    c: 'deadpool',
    d: 'mr. negative',
    answer: 'd'
},  
{
    question: `which one of these clubs do not meet on a wednesday?`,
    a: `game development club`,
    b: 'glee club',
    c: 'literary magazine',
    d: 'tech science times',
    answer: 'd'
},  
{
    question: `what was the name given to minecraft update 1.16?`,
    a: `combat update`,
    b: 'nether update',
    c: 'village & pillage update',
    d: 'flight update',
    answer: 'b'
},  
{
    question: `taylor swifts boyfriend plays for which nfl team?`,
    a: `green bay packers`,
    b: 'dallas cowboys',
    c: 'kansas city chiefs',
    d: 'san francisco 49ers',
    answer: 'c'
},  
{
    question: `an elementary charge is equal to 10^-19 times...`,
    a: `7.53`,
    b: '1.32',
    c: '1.60',
    d: '9.81',
    answer: 'c'
},
{
  question: `in the critically acclaimed indie game "Outer Wilds", which one of these charaters is not a traveler`,
  a: "Feldspar",
  b: "Chert",
  c: "Riebeck",
  d: "Secca",
  answer: 'd'
},
{
  question: `in "The Alchemist" by paulo coelho, the location of Santiago's treasure is... `,
  a: 'under a sycamore tree',
  b: 'inside a pyramid',
  c: 'Mecca',
  d: 'above the clouds',
  answer: 'a'
},
{
  question: `which one of these characters is a friend of hello kitty`,
  a: 'my melody',
  b: 'hotcake',
  c: 'sugar rush',
  d: 'bluey ',
  answer: 'a'
},
{
  question: `Which Staten Island Tech staff member used to teach a SERP class`,
  a: 'Ms. Ferrigno',
  b: 'Mr. Rams',
  c: 'Ms. Cavaliere',
  d: 'Ms. Brandon',
  answer: 'c'
},
{
  question: `The offical shade of gold used as SITHS' offical color is...`,
  a: 'Sepia',
  b: 'Vegas Gold',
  c: 'Buttermilk Gold',
  d: 'Elastic Gold',
  answer: 'b'
},
{
  question: `Which one of these Noahs is not currently a sophomore as of 2023-2024`,
  a: 'Noah Abbas',
  b: 'Noah Boyle',
  c: 'Noah Rozin',
  d: 'Noah Gontha',
  answer: 'b'
},
{
  question: `Mr. Whalen's favorite pokemon is...`,
  a: 'cherrim',
  b: 'abomasnow',
  c: 'farigiraf',
  d: 'lucario',
  answer: 'b'
},
{
  question: `how many theses did Martin Luther write during the protestant reformation`,
  a: 95,
  b: 101,
  c: 59,
  d: 78,
  answer: 'a'
},
{
  question: `which challenge is Mr. Beast's SECOND most popular video`,
  a: "$456,000 Squid Game In Real Life!",
  b: "I Spent 50 Hours Buried Alive",
  c: "I Spent 7 Days In Solitary Confinement",
  d: "Last To Leave Circle Wins $500,000  ",
  answer: 'd'
},
{
  question: `Which one of these celebrities made a cameo in the Impractical Jokers movie`,
  a: "Will Ferrell",
  b: "Charli D'Amelio",
  c: "Mr. Whalen",
  d: "Chris Evans",
  answer: 'a'
},
{
  question: `Which one of these is not a event that SITHS has a team for`,
  a: "SeaPeach",
  b: "First Tech Challenge",
  c: "Vex Robotics Competion",
  d: "Science Olympaid",
  answer: 'c'
},
{
  question: `Which one of these smash brother characters was introduced in Melee`,
  a: "Ness",
  b: "Young Link",
  c: "Little Mac",
  d: "Pokemon Trainer",
  answer: 'b'
},
{
  question: `Who did NOT help make this website`,
  a: "Izzy Zoltan",
  b: "Rylan Geykhman",
  c: "Gabriel Liberov ",
  d: "Noah Abbas",
  answer: 'c'
},
{
  question: `What was the original title of the movie "Mean Girls"`,
  a: 'Homeschooled',
  b: 'Lipstick Ladies',
  c: 'Plastic',
  d: 'The Fetch Pledge',
  answer: 'a'
},
{
  question: `How many men reign as the king of Scotland throughout the play "MacBeth"`,
  a: '1',
  b: '2',
  c: '3',
  d: '4',
  answer: 'c'
},
{
  question: `Which keyword is NOT a valid way of declaring a variable in JavaScript`,
  a: 'let',
  b: 'var',
  c: 'type',
  d: 'const',
  answer: 'c'
},
{
  question: `The capital of Iowa is... `,
  a: 'Des Moines',
  b: 'New York',
  c: 'Helena',
  d: 'Lansing',
  answer: 'a'
},  
{
  question: `On what day did Shrek 2 come out`,
  a: 'May 19, 2004',
  b: 'April 22, 2001',
  c: 'August 11, 2001',
  d: 'July 4, 2002',
  answer: 'b'
},  
{
  question: `Which one of these acronyms are not a type of 3D printing filament`,
  a: 'PLA',
  b: 'IQW',
  c: 'HIPS',
  d: 'ABS',
  answer: 'b'
},
{
  question: `Who was the author of the classic novel "The Scarlet Letter"`,
  a: 'Nathaniel Hawthorne',
  b: 'Pierce Flits',
  c: 'J. D. Salinger',
  d: 'Noah Rozin',
  answer: 'a'
},
{
  question: `Who was the author of the classic novel "The Scarlet Letter"`,
  a: 'Nathaniel Hawthorne',
  b: 'Pierce Flits',
  c: 'J. D. Salinger',
  d: 'Noah Rozin',
  answer: 'a'
},
{
  question: `Who was the author of the classic novel "The Scarlet Letter"`,
  a: 'Nathaniel Hawthorne',
  b: 'Pierce Flits',
  c: 'J. D. Salinger',
  d: 'Noah Rozin',
  answer: 'a'
},
{
  question: `In "Gravity Falls", where does Dipper find the third journal`,
  a: 'Inside the Sunchaser',
  b: 'Behind the Mystery Shack',
  c: 'In the gnome forest',
  d: 'In a metal tree',
  answer: 'd'
},
{
  question: `What is the full name of the main character in the Bee Movie`,
  a: 'Barry Billop Bartson the Second',
  b: 'Barry Jerry Seinfeld ',
  c: 'Barry Bailey Benson',
  d: 'Bartholomew Bailey "Barry" Benson ',
  answer: 'd'
},
{
  question: `What is the slogan written on Ken's tie-die hoodie in the Barbie movie`,
  a: `It's Oken`,
  b: `Ken't Go On`,
  c: 'I Am Kenough',
  d: 'Ken the Ten',
  answer: 'c'
},
{
  question: `What Ivy League has a section """named""" after a physics teacher in SITHS `,
  a: `Harvard`,
  b: `UPenn`,
  c: 'Brown',
  d: 'Cornell',
  answer: 'b'
},
{
  question: `Which one of these characters is or will not be played by Chris Pratt`,
  a: `Garfield`,
  b: `Owen Grady`,
  c: 'Andy Dwyer',
  d: 'Peter Pan',
  answer: 'd'
},
{
  question: `What is the meaning of life the universe and everything`,
  a: `Sleep`,
  b: `Memories`,
  c: 'Dreams',
  d: '42',
  answer: 'd'
},
{
  question: `What was the name of Leonardo Da Vinci's Teacher?`,
  a: `Joseph Fourier`,
  b: `Andrea del Verrocchio`,
  c: 'Daniel Bernoulli',
  d: 'Keith Devlin',
  answer: 'b'
},
]






















let data = [
    {
      question: 'What percentage of sophomores own an Android phone',
      yes: 20,
      no: 64,
      percent: 24
    },
    {
      question: 'What percentage of sophomores listen to Taylor Swift on a regular basis',
      yes: 11,
      no: 73,
      percent: 13
    },
    {
      question: 'What percentage of sophomores have a favorite subject',
      yes: 60,
      no: 22,
      percent: 73
    },
    {
      question: 'What percentage of sophomores play either Genshin Impact or Honkai Star Rail',
      yes: 12,
      no: 71,
      percent: 14
    },
    {
      question: 'What percentage of sophomores prefer watching movies at home instead of at a theater',
      yes: 45,
      no: 32,
      percent: 58
    },
    {
      question: 'What percentage of sophomores have beaten a Pokemon game',
      yes: 27,
      no: 51,
      percent: 35
    },
    {
      question: 'What percentage of sophomores watch anime on a regular basis',
      yes: 10,
      no: 73,
      percent: 12
    },
    {
      question: 'What percentage of sophomores think that they could beat a horse in a fight',
      yes: 28,
      no: 54,
      percent: 34
    },
    {
      question: 'What percentage of sophomores prefer Xbox over PlayStation',
      yes: 21,
      no: 39,
      percent: 35
    },
    {
      question: 'What percentage of sophomores prefer sweet foods over sour foods',
      yes: 56,
      no: 20,
      percent: 74
    },
    {
      question: 'What percentage of sophomores have went to that one halal food cart near the school (you know the one)',
      yes: 51,
      no: 43,
      percent: 54
    },
    {
      question: 'What percentage of sophomores have fully watched the hit NBC show "The Office"',
      yes: 13,
      no: 69,
      percent: 16
    },
    {
      question: 'What percentage of sophomores have been to the store "Something Sweet"',
      yes: 59,
      no: 23,
      percent: 72
    },
    {
      question: 'What percentage of sophomores have missed their first period due to sleeping in',
      yes: 22,
      no: 61,
      percent: 27
    },
    {
      question: 'What percentage of sophomores think that chicken tenders are the best school lunch',
      yes: 25,
      no: 55,
      percent: 31
    },
    {
      question: 'What percentage of sophomores are on a sports team',
      yes: 36,
      no: 48,
      percent: 43
    },
    {
      question: 'What percentage of sophomores have been to the Wingstop on Hylan Boulevard',
      yes: 28,
      no: 56,
      percent: 33
    },
    {
      question: 'What percentage of sophomores pour milk before cereal',
      yes: 22,
      no: 61,
      percent: 27
    },
    {
      question: 'What percentage of sophomores have a favorite teacher in SITHS',
      yes: 71,
      no: 12,
      percent: 86
    },
    {
      question: 'What percentage of sophomores, if accepted into every college, would go to an Ivy League',
      yes: 51,
      no: 26,
      percent: 66
    },
    {
      question: 'What percentage of sophomores wake up before 6AM on a regular basis',
      yes: 23,
      no: 61,
      percent: 27
    },
    {
      question: 'What percentage of sophomores sleep after 1AM on a regular basis',
      yes: 22,
      no: 62,
      percent: 26
    },
    {
      question: 'What percentage of sophomores like sushi as their favorite food',
      yes: 21,
      no: 62,
      percent: 25
    },
    {
      question: 'What percentage of sophomores usually get two or more toppings on pizza',
      yes: 20,
      no: 63,
      percent: 24
    },
    {
      question: 'What percentage of sophomores intend on taking AP Physics 2 in their Junior Year',
      yes: 22,
      no: 59,
      percent: 27
    },
    {
      question: 'What percentage of sophomores are pushing their art credit to their junior or senior year',
      yes: 11,
      no: 71,
      percent: 13
    },
    //nte
    {
      question: 'What percentage of sophomores plan in advance for April Fools Day',
      yes: 18,
      no: 64,
      percent: 22
    },
    {
      question: 'What percentage of sophomores would consider LeBron James as "The Goat"',
      yes: 24,
      no: 42,
      percent: 36
    },
    {
      question: 'What percentage of sophomores would consider themselves to have bad luck on average',
      yes: 29,
      no: 45,
      percent: 39
    },
    {
      question: 'What percentage of sophomores prefer to go by their last or middle name',
      yes: 8,
      no: 64,
      percent: 11
    },
    {
      question: 'What percentage of sophomores have a least favorite movie',
      yes: 22,
      no: 61,
      percent: 27
    },
    {
      question: 'What percentage of sophomores have pulled an all-nighter',
      yes: 50,
      no: 31,
      percent: 62
    },
    {
      question: 'What percentage of sophomores have been to all five boroughs in NYC',
      yes: 64,
      no: 19,
      percent: 77
    },
    {
      question: 'What percentage of sophomores have been inside a Bass Pro shop',
      yes: 18,
      no: 63,
      percent: 22
    },
    {
      question: 'What percentage of sophomores have written a literature review',
      yes: 40,
      no: 37,
      percent: 52
    },
    {
      question: 'What percentage of sophomores have signed up for a club and never attended a meeting',
      yes: 70,
      no: 12,
      percent: 85
    },
    {
      question: 'What percentage of sophomores have done a homework assignment in class and got a 100 on it',
      yes: 79,
      no: 4,
      percent: 95
    },
    {
      question: 'What percentage of sophomores play rhythm games while NOT knowing how to play an instrument',
      yes: 22,
      no: 61,
      percent: 27
    },
    {
      question: 'What percentage of sophomores have had to had their school ID replaced after losing it',
      yes: 39,
      no: 44,
      percent: 47
    },
    {
      question: 'What percentage of sophomores take the S79 bus home on a frequent basis',
      yes: 53,
      no: 30,
      percent: 64
    },
    {
      question: 'What percentage of sophomores prefer indie video games compared to triple A games',
      yes: 36,
      no: 25,
      percent: 59
    },
    {
      question: 'What percentage of sophomores prefer the name "X" over "Twitter" ',
      yes: 4,
      no: 74,
      percent: 5
    },
    {
      question: 'What percentage of sophomores own more than one SITHS t-shirt',
      yes: 60,
      no: 21,
      percent: 74
    },
    {
      question: 'What percentage of sophomores have more than 3 streaming subscriptions',
      yes: 25,
      no: 56,
      percent: 31
    },
    {
      question: 'What percentage of sophomores have been to a Panera Bread',
      yes: 47,
      no: 36,
      percent: 57
    },
    {
      question: 'What percentage of sophomores pack their own lunches to school',
      yes: 27,
      no: 52,
      percent: 34
    },
    {
      question: 'What percentage of sophomores want to graduate with 8 or more AP classes',
      yes: 55,
      no: 19,
      percent: 74
    },
    {
      question: 'What percentage of sophomores have watched a show or movie with Chris Pratt in it in the past year',
      yes: 40,
      no: 39,
      percent: 51
    },
    {
      question: 'What percentage of sophomores prefer earbuds over headphones',
      yes: 40,
      no: 35,
      percent: 53
    },
    {
      question: 'What percentage of sophomores have a Snapchat',
      yes: 43,
      no: 40,
      percent: 52
    },
    {
      question: 'What percentage of sophomores intend on taking Calc BC junior year',
      yes: 31,
      no: 48,
      percent: 39
    },
    {
      question: 'What percentage of sophomores think math is red',
      yes: 22,
      no: 55,
      percent: 29
    },
    {
      question: 'What percentage of sophomores use light mode',
      yes: 14,
      no: 64,
      percent: 18
    },
    {
      question: 'What percentage of sophomores went to Christa Mcauliffe for middle school',
      yes: 9,
      no: 69,
      percent: 12
    },
    {
      question: 'What percentage of sophomores have coded in Scratch',
      yes: 69,
      no: 12,
      percent: 85
    },
    {
      question: 'What percentage of sophomores, if only able to pick one, would pick boba over coffee',
      yes: 53,
      no: 25,
      percent: 68
    },
    {
      question: 'What percentage of sophomores have worked in SING',
      yes: 26,
      no: 57,
      percent: 31
    },
    {
      question: 'What percentage of sophomores have yelled at friends/family when playing a board game',
      yes: 71,
      no: 9,
      percent: 89
    }
  ]

  let funnies = [
    "Gosh darn it mom! Get out of my room, I'm ___!",
    "New York City now has a new holiday where ___ is celebrated.",
     "6 words or less that can make an entire group of people mad:",
    "A remarkable achievement you probably won't list on your college applications:",
   "You've seen Rozin without Rizz; now get ready for ____!",
   "SITHS is making budget cuts; AP Statistics is now ___.",
     "It's great that you have a degree in computer science and all, but *I* ___!",
   "The hardest question on the AP CSP exam:",
    'As Mr. Whalen once said, "___."',
    "The 10th circle of Hell that nobody knows about:",
    "What Duolingo does after you've broken your Russian streak:",
     "The only thing you can remember from physics:",
     "The only way out of an AP Science class is to ___.",
    "On a shared testing day, a small number of teachers turn into ___.",
     "It's not your fault you failed that exam, it's definitely ___.",
    "'Fool me once, shame on you. Fool me twice, ___.'",
    "You know the class is super boring when you end up ___.",
     "The real reason Mr. Ferrigno decided to shave his beard:",
    "STEM would actually be super fun if only it had ___.",
     "The quickest way to become the most popular kid at Tech:",
     "How do I file my taxes?! Tech never taught me that, only ___!",
    "What seagulls are usually thinking about:",
    "I can finally see the light, the end of ___!",
   "A strange thing for a teacher to say while you're taking an exam:",
   "The worst ringtone to play on your phone during an exam:",
    "Okay wow, God just announced He is sick of hearing prayers about ___.",
    "What's truly affecting your mental health today?",
  ]


router.get("/", async (req,res)=>{ 
    try{
      res.setHeader("Access-Control-Allow-Origin", "*");
        res.json({potato: 'yummy'})
    }
    catch (error){
        console.log(error) 
    }
})



router.get("/:game/:id", async (req,res)=>{ 
    try{
      console.log(funnies)
         getParam(res,req)
    }
    catch (error){
        console.log(error + 'potato') 
    }
})


module.exports = router

function getParam(res,req){
    console.log(req.params.game)
    if(req.params.game == 'gp'){
      res.setHeader("Access-Control-Allow-Origin", "*");
        res.json(trivia[req.params.id ])
    }
    if(req.params.game == 'dt'){
      res.setHeader("Access-Control-Allow-Origin", "*");
        res.json(data[req.params.id ])
    }
}
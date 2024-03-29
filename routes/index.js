const express = require("express")
const router = new express.Router()
const app = express()
app.use(cors())

let data = [
    {
      question: 'What percentage of sophmores own an Android phone',
      yes: 20,
      no: 64,
      percent: 24
    },
    {
      question: 'What percentage of sophmores listen to Taylor Swift on a regular basis',
      yes: 11,
      no: 73,
      percent: 13
    },
    {
      question: 'What percentage of sophmores have a favorite subject',
      yes: 60,
      no: 22,
      percent: 73
    },
    {
      question: 'What percentage of sophmores play either Genshin Impact or Honkai Star Rail',
      yes: 12,
      no: 71,
      percent: 14
    },
    {
      question: 'What percentage of sophmores prefer watching movies at home instead of at a theater',
      yes: 45,
      no: 32,
      percent: 58
    },
    {
      question: 'What percentage of sophmores have beaten a Pokemon game',
      yes: 27,
      no: 51,
      percent: 35
    },
    {
      question: 'What percentage of sophmores watch anime on a regular basis',
      yes: 10,
      no: 73,
      percent: 12
    },
    {
      question: 'What percentage of sophmores think that they could beat a horse in a fight',
      yes: 28,
      no: 54,
      percent: 34
    },
    {
      question: 'What percentage of sophmores prefer Xbox over PlayStation',
      yes: 21,
      no: 39,
      percent: 35
    },
    {
      question: 'What percentage of sophmores prefer sweet foods over sour foods',
      yes: 56,
      no: 20,
      percent: 74
    },
    {
      question: 'What percentage of sophmores have went to that one halal food cart near the school (you know the one)',
      yes: 51,
      no: 43,
      percent: 54
    },
    {
      question: 'What percentage of sophmores have fully watched the hit NBC show "The Office"',
      yes: 13,
      no: 69,
      percent: 16
    },
    {
      question: 'What percentage of sophmores have been to the store "Something Sweet"',
      yes: 59,
      no: 23,
      percent: 72
    },
    {
      question: 'What percentage of sophmores have missed their first period due to sleeping in',
      yes: 22,
      no: 61,
      percent: 27
    },
    {
      question: 'What percentage of sophmores think that chicken tenders are the best school lunch',
      yes: 25,
      no: 55,
      percent: 31
    },
    {
      question: 'What percentage of sophmores are on a sports team',
      yes: 36,
      no: 48,
      percent: 43
    },
    {
      question: 'What percentage of sophmores have been to the Wingstop on Hylan Boulevard',
      yes: 28,
      no: 56,
      percent: 33
    },
    {
      question: 'What percentage of sophmores pour milk before cereal',
      yes: 22,
      no: 61,
      percent: 27
    },
    {
      question: 'What percentage of sophmores have a favorite teacher in SITHS',
      yes: 71,
      no: 12,
      percent: 86
    },
    {
      question: 'What percentage of sophmores, if accepted into every college, would go to an Ivy League',
      yes: 51,
      no: 26,
      percent: 66
    },
    {
      question: 'What percentage of sophmores wake up before 6AM on a regular basis',
      yes: 23,
      no: 61,
      percent: 27
    },
    {
      question: 'What percentage of sophmores sleep after 1AM on a regular basis',
      yes: 22,
      no: 62,
      percent: 26
    },
    {
      question: 'What percentage of sophmores like sushi as their favorite food',
      yes: 21,
      no: 62,
      percent: 25
    },
    {
      question: 'What percentage of sophmores usually get two or more toppings on pizza',
      yes: 20,
      no: 63,
      percent: 24
    },
    {
      question: 'What percentage of sophmores intend on taking AP Physics 2 in their Junior Year',
      yes: 22,
      no: 59,
      percent: 27
    },
    {
      question: 'What percentage of sophmores are pushing their art credit to their junior or senior year',
      yes: 11,
      no: 71,
      percent: 13
    },
    //nte
    {
      question: 'What percentage of sophmores plan in advance for April Fools Day',
      yes: 18,
      no: 64,
      percent: 22
    },
    {
      question: 'What percentage of sophmores would consider LeBron James as "The Goat"',
      yes: 24,
      no: 42,
      percent: 36
    },
    {
      question: 'What percentage of sophmores would consider themselves to have bad luck on average',
      yes: 29,
      no: 45,
      percent: 39
    },
    {
      question: 'What percentage of sophmores prefer to go by their last or middle name',
      yes: 8,
      no: 64,
      percent: 11
    },
    {
      question: 'What percentage of sophmores have a least favorite movie',
      yes: 22,
      no: 61,
      percent: 27
    },
    {
      question: 'What percentage of sophmores have pulled an all-nighter',
      yes: 50,
      no: 31,
      percent: 62
    },
    {
      question: 'What percentage of sophmores have been to all five boroughs in NYC',
      yes: 64,
      no: 19,
      percent: 77
    },
    {
      question: 'What percentage of sophmores have been inside a Bass Pro shop',
      yes: 18,
      no: 63,
      percent: 22
    },
    {
      question: 'What percentage of sophmores have written a literature review',
      yes: 40,
      no: 37,
      percent: 52
    },
    {
      question: 'What percentage of sophmores have signed up for a club and never attended a meeting',
      yes: 70,
      no: 12,
      percent: 85
    },
    {
      question: 'What percentage of sophmores have done a homework assignment in class and got a 100 on it',
      yes: 79,
      no: 4,
      percent: 95
    },
    {
      question: 'What percentage of sophmores play rhythm games while NOT knowing how to play an instrument',
      yes: 22,
      no: 61,
      percent: 27
    },
    {
      question: 'What percentage of sophmores have had to had their school ID replaced after losing it',
      yes: 39,
      no: 44,
      percent: 47
    },
    {
      question: 'What percentage of sophmores take the S79 bus home on a frequent basis',
      yes: 53,
      no: 30,
      percent: 64
    },
    {
      question: 'What percentage of sophmores prefer indie video games compared to triple A games',
      yes: 36,
      no: 25,
      percent: 59
    },
    {
      question: 'What percentage of sophmores prefer the name "X" over "Twitter" ',
      yes: 4,
      no: 74,
      percent: 5
    },
    {
      question: 'What percentage of sophmores own more than one SITHS t-shirt',
      yes: 60,
      no: 21,
      percent: 74
    },
    {
      question: 'What percentage of sophmores have more than 3 streaming subscriptions',
      yes: 25,
      no: 56,
      percent: 31
    },
    {
      question: 'What percentage of sophmores have been to a Panera Bread',
      yes: 47,
      no: 36,
      percent: 57
    },
    {
      question: 'What percentage of sophmores pack their own lunches to school',
      yes: 27,
      no: 52,
      percent: 34
    },
    {
      question: 'What percentage of sophmores want to graduate with 8 or more AP classes',
      yes: 55,
      no: 19,
      percent: 74
    },
    {
      question: 'What percentage of sophmores have watched a show or movie with Chris Pratt in it in the past year',
      yes: 40,
      no: 39,
      percent: 51
    },
    {
      question: 'What percentage of sophmores prefer earbuds over headphones',
      yes: 40,
      no: 35,
      percent: 53
    },
    {
      question: 'What percentage of sophmores have a Snapchat',
      yes: 43,
      no: 40,
      percent: 52
    },
    {
      question: 'What percentage of sophmores intend on taking Calc BC junior year',
      yes: 31,
      no: 48,
      percent: 39
    },
    {
      question: 'What percentage of sophmores think math is red',
      yes: 22,
      no: 55,
      percent: 29
    },
    {
      question: 'What percentage of sophmores use light mode',
      yes: 14,
      no: 64,
      percent: 18
    },
    {
      question: 'What percentage of sophmores went to Christa Mcauliffe for middle school',
      yes: 9,
      no: 69,
      percent: 12
    },
    {
      question: 'What percentage of sophmores have coded in Scratch',
      yes: 69,
      no: 12,
      percent: 85
    },
    {
      question: 'What percentage of sophmores, if only able to pick one, would pick boba over coffee',
      yes: 53,
      no: 25,
      percent: 68
    },
    {
      question: 'What percentage of sophmores have worked in SING',
      yes: 26,
      no: 57,
      percent: 31
    },
    {
      question: 'What percentage of sophmores have yelled at friends/family when playing a board game',
      yes: 71,
      no: 9,
      percent: 89
    }
  ]

let trivia = [{
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
    d: 'combat update',
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
    question: `an elementary charge is equal to 10¹⁶ times...`,
    a: `7.53`,
    b: '1.32',
    c: '1.60',
    d: '9.81',
    answer: 'c'
},
]


router.get("/", async (req,res)=>{ 
    try{
        res.json({potato: 'yummy'})
    }
    catch (error){
        console.log(error) 
    }
})



router.get("/:game/:id", async (req,res)=>{ 
    try{
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
        res.json(trivia[req.params.id ])
    }
    if(req.params.game == 'dt'){
        res.json(data[req.params.id ])
    }
}
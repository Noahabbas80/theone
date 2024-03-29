const express = require("express")
const router = new express.Router()

let data = [{

}]

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
    // const potato = {
    //     game: req.params.game,
    //     id: req.params.id,
    //     taste: 'good'
    // }
    // res.json(potato)
}
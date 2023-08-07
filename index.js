// using readlinesync for taking input
let readlineSync = require("readline-sync");

// Kuler is a package which is used to give color to the text. It takes two param. one is string itself and another is color in hexcode
let kuler = require("kuler");

let score =0;

let userName = readlineSync.question("What is your name ?");
console.log(kuler(`Hello ${userName} welcome to Quizify`,"#dc2626"))

// Rules and Regulations
console.log("\nPlease select any options by typing either a/b/c/d\n")

/* Creating data set . Here we are taking an object instead of an array because it is easy to extend an object using key and value */
const  database = {
    data :[
        {
            question : `let a ={}, b = {}
            console.log(a==b)
            console.log(a===b)`,
            options :{
                a:"false false",
                b:"false true",
                c:"true false",
                d:"true true"
            },
            correctAnswer:"a"
        },
        {
            question: "Object.assign(target, source) creates which type of copy?",
            options: {
                a:"Deep copy",
                b:"Shallow copy",
                c:"Nested copy",
                d:"Creates a new reference "
            },
            correctAnswer : "b"
        },
        {
            question : " Is method chaining possible with forEach ?", //forEach does not return anything that's why method chaining is not possible with forEach like map, filter and reduce.
            options : {
                a : "yes",
                b : "no"
            },
            correctAnswer : "b"
        }
    ]
}

// Creating dataset for leaderboard
const leaderBoard = {
    data : [
        {
            name : "Ashish",
            score : 1
        },
        {
            name : "Vivek",
            score : 3
        },
        {
            name : "Rahul",
            score : 2
        }
    ]
}

// to check whether the input option is correct or not
function playGame(userAnswer, correctAnswer) {
    if(userAnswer === correctAnswer)
    {
        console.log(kuler("Correct Answer","#059669"))
        score++;
    }
    else {
        console.log(kuler("Incorrect Anwer","#b91c1c"))
        console.log(kuler(`Correct answer is ${correctAnswer}`,"#1d4ed8"));
    }
}

// function for iterating over the object and options
function showQuestionAndOPtions(database) {
    for(let i = 0; i<database.data.length; i++)
    {
        console.log(kuler(`\nQ${i+1} - ${database.data[i].question}\n`,"7dd3fc"))
        for(let key in database.data[i].options)
        {
            console.log(`${key} - ${database.data[i].options[key]}`)
        }
        let userAnswer = readlineSync.question("Enter your answer (a/b/c/d) - ").toLowerCase();
        playGame(userAnswer,database.data[i].correctAnswer);
    }
}

// function for leaderBoard
function highScoree(leaderBoard) {
    leaderBoard.data.push({name:userName,score :score})
    let sortedScoreList = leaderBoard.data.sort((a,b) => b.score - a.score);
    console.log(kuler("\nCheck your position on your leaderboard 🤡","#fde047"))
    for(let leader of sortedScoreList) {
        console.log(kuler(`${leader.name} - score : ${leader.score}`,"#9333ea"))
    }
}

showQuestionAndOPtions(database);

console.log(kuler(`\nYour score is ${score} out of ${database.data.length}`,"#5eead4"));

highScoree(leaderBoard);
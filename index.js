var readLineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;
var userName = readLineSync.question(chalk.red("What's your name ?"));
var welcomeMsg = 'Welcome'+ ' '+ userName + " , " + "Do you know Saurabh ?";

console.log(chalk.yellow(welcomeMsg));
console.log(chalk.yellow(readLineSync.question(chalk.red("yes or no ?"))));


var highScores = [ {
  name:"Saurabh",
  score:5
},
{
  name:"Vaibhav",
  score:4
},
{
  name:"Jayashri",
  score:3
}
]


function recordBroken(current,...highScore)
{
  for(i=0;i<highScores.length;i++)
  {
    // console.log("**************");
    if(highScores[i].score < current)
    {
       console.log("Woah !! you have scored higher so for updating score share SS");
      
    }
    else if(highScores[i].score > current)
    {
      console.log(chalk.yellow("Sorry ! Try Again"));
    }
  } 

}


function Play ( question,answer)
{
  var userAnswer = readLineSync.question(chalk.red(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.greenBright("right answer !"));
    score = score+1;
  }
  else {
    console.log(chalk.greenBright("wrong answer"));
  }
   
   console.log(chalk.yellow("Your current Score is : "+score));
   console.log("--------");

}


var questions = [ {
  question:"Where do I live ?",
  answer:"Nashik"
},
{
  question:"Who is my favourite superhero ?",
  answer:"Superman"
},
{
  question:"Where do I Work ?",
  answer:"CodeMischief"
},
{
  question:"What is the name of my favorite food ?",
  answer:"Misal"
},
{
  question:"What is the name of my pet dog ?",
  answer:"Tommy"
}
]


for( i=0 ; i<questions.length;i++)
{
  var currentQue = questions[i];
  Play(currentQue.question,currentQue.answer)
}

for (i=0;i<highScores.length;i++)
{
  console.log(chalk.greenBright("-----Highest Scores -----"));
  console.log(chalk.yellow(highScores[i].name));
   console.log(chalk.yellow(highScores[i].score));
}

var currentScore = readLineSync.question(chalk.red("Tell your current Score ?"));
recordBroken(currentScore,...highScores);




var readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your name ? ");
console.log("Hi " + userName + ", Let's play a quiz on pokemon!!!");
var score = 0;

function pokemon(ques, ans) {
  var userAns = readlineSync.question("\n" + ques + "\n");
  if (userAns.toUpperCase() === ans.toUpperCase()) {
    console.log("Right!!!");
    score = score + 1;
  } else {
    console.log("Wrong :(");
  }
  console.log("Current score ", score);
  console.log("---*---*---*---*---");
  console.log("                     ");
}

var questions = [
  {
    ques: "1. Who is the main character in pokemon ? " + "\n a. Misty \n b. Brock \n c. Ash",
    ans: "c",
  },
  {
    ques: "2. What were the names of starter pokemon ? " + "\n a. Charmander \n b. Squirtle \n c. Bulbasaur \n d. All of the above",
    ans: "d",
  },
  {
    ques: "3. What is the name of professor ? " + "\n a. Rowan \n b. Oak \n c. Juniper",
    ans: "b",
  },
  {
    ques: "4. What is the name of Ash's hometown ? " + "\n a. Pallet \n b. Pewter \n c. Vermillion",
    ans: "a",
  },
  {
    ques: "5. Which is the first pokemon gym Ash won ? " + "\n a. Cascade Badge \n b. Thunder Badge \n c. Boulder Badge",
    ans: "c",
  },
  {
    ques: "6. Generally how many evolution a pokemon have ? " + "\n a. One  \n b. Three \n c. Two",
    ans: "b",
  },
  {
    ques: "7. Next evolution of magicarp is ? " + "\n a. Gyarados \n b. Squirtle \n c. Raichu",
    ans: "a",
  },
  {
    ques: "8. What is the name of first villain team ? " + "\n a. Team Magma \n b. Team Aqua \n c. Team Rocket",
    ans: "c",
  },
  {
    ques: "9. How many gym badges Ash won in Kanto region ? " + "\n a. 8 \n b. 5 \n c. 10",
    ans: "a",
  },
  {
    ques: "10. What is the name of legendary pokemon Ash saw ? " + "\n a. Lugia \n b. HO-OH \n c. Moltres",
    ans: "b",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  pokemon(currentQuestion.ques, currentQuestion.ans);
}

console.log('Your total score is - ', score);
console.log('                       ');
var highScore = [
  {
    name: "Ash",
    score: 10,
  },
  {
    name: 'Misty',
    score: 9,
  },
  {
    name: 'Professor-Oak',
    score: 7,
  },
  {
    name: 'Brock',
    score: 8,
  }
];

console.log("Current highscorers are : ");
for (var i = 0; i < highScore.length; i++) {
  var currentHighscore = highScore[i];
  console.log(currentHighscore.name + ":- " + currentHighscore.score);
}

console.log("\nLet me know if you break the highscore.");
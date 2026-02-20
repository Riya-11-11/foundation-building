const prompt = require("prompt-sync")();
let choices = ["stone", "paper", "scissors"];

let result;
let userScore = 0;
let compScore = 0;

for (let round = 0; round < 5; round++) {
  let userChoice = prompt("Enter stone, paper or scissors :");
  console.log(userChoice);

  let compChoice = choices[Math.floor(Math.random() * 3)];
  console.log(compChoice);

  if (userChoice === compChoice) {
    result = "Draw";
  } else if (
    (userChoice === "scissors" && compChoice === "paper") ||
    (userChoice === "stone" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "stone")
  ) {
    result = "User wins";
    userScore++;
  } else {
    result = "Computer wins";
    compScore++;
  }

  console.log(result);
  console.log("User: ", userScore, "Comp: ", compScore);
}

// FINAL RESULT...
console.log("FINAL RESULT");
if (userScore > compScore) {
  console.log("User Wins!!!");
} else if (compScore > userScore) {
  console.log("Computer Wins!!!");
} else {
  console.log("Game Draw");
}

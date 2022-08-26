const playerText = document.querySelector(".playerText")
const computerText = document.querySelector(".computerText")
const resultText = document.querySelector(".resultText")
const pScore = document.querySelector(".playerScore")
const cScore = document.querySelector(".computerScore")
const options = document.querySelectorAll(".option")

let result;

let playerScore = 0;
let computerScore = 0;
let draws = 0;

function computerPlay() {
  let computerMove = Math.floor(Math.random() * 3);
  if (computerMove == 0) {
    computerMove = "ROCK";
  } else if (computerMove == 1) {
    computerMove = "SCISSORS";
  } else if (computerMove == 2) {
    computerMove = "PAPER";
  }
  return computerMove;
}

function playRound(playerSelection, computerSelection) {
  console.log("1", playerSelection, computerSelection, "2")
  if (playerSelection === computerSelection) {
    const p = document.createElement("p")
    p.innerText = ("Draw! No one wins!")
    resultText.appendChild(p)
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    const p = document.createElement("p")
    p.innerText = (`You win! Rock beats scissors.`);
    playerScore++;
    resultText.appendChild(p)
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    const p = document.createElement("p")
    p.innerText = ("You lose! Paper beats rock.");
    computerScore++;
    resultText.appendChild(p)
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    const p = document.createElement("p")
    p.innerText = ("You lose! Scissors beat paper.");
    computerScore++;
    resultText.appendChild(p)
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    const p = document.createElement("p")
    p.innerText = ("You win! Paper beats rock.");
    playerScore++;
    resultText.appendChild(p)
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    const p = document.createElement("p")
    p.innerText = ("You lose! ROCK beat scissors.");
    computerScore++;
    resultText.appendChild(p)
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    const p = document.createElement("p")
    p.innerText = ("You win! Scissors beat paper.");
    playerScore++;
  }
}


const checkForWinner = function (playerScore, computerScore) {
  if (playerScore === 5) {

  }
}

options.forEach(button => button.addEventListener("click", () => {
  const computerSelection = computerPlay()
  const playerSelection = button.textContent;
  playRound(playerSelection, computerSelection);
}))


// const playerSelection = "ROCK";


// function game() {
//   for (let i = 0; i < 5; i++) {
//     const computerSelection = computerPlay();
//     (playRound(playerSelection, computerSelection))

//   }
//   if (playerScore > computerScore) {
//     return "You beat the computer. You're a genius."
//   } else if (computerScore > playerScore) {
//     return "Computer beat you. Better luck next time."
//   } else if (computerScore == playerScore) {
//     return "It's a draw!"
//   }
// }


// console.log(game());
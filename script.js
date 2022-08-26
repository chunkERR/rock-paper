const resultText = document.querySelector(".resultText")
const pScore = document.querySelector(".player-score")
const cScore = document.querySelector(".computer-score")
const options = document.querySelectorAll(".option")

let result;

let playerScore = 0;
let computerScore = 0;

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
    p.innerText = ("You lose! Rock beat scissors.");
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
    const h3 = document.createElement("h3")
    h3.innerText = (`You beat the computer ${playerScore} to ${computerScore}.`)
    resultText.appendChild(h3)
  } else if (computerScore === 5) {
    const h3 = document.createElement("h3")
    h3.innerText = (`The computer beat you ${computerScore} to ${playerScore}.`)
    resultText.appendChild(h3)

  }
}


const updateScores = function (playerScore, computerScore) {
  pScore.innerText = `Player's Score: ${playerScore}`
  cScore.innerText = `Computer's Score: ${computerScore}`

}

options.forEach(button => button.addEventListener("click", () => {
  const computerSelection = computerPlay()
  const playerSelection = button.textContent;
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, computerScore)
  checkForWinner(playerScore, computerScore)
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
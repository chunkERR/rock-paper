const playerText = document.querySelector(".playerText")
const computerText = document.querySelector(".computerText")
const resultText = document.querySelector(".resultText")
const pScore = document.querySelector(".playerScore")
const cScore = document.querySelector(".computerScore")
const options = document.querySelectorAll(".option")

let playerChoice;
let computerMove;
let result;


options.forEach(button => button.addEventListener("click", () => {

  playerChoice = button.textContent;
  computerPlay();
  playerText.textContent = `Player : ${playerChoice}`
  computerText.textContent = `Computer : ${computerMove}`
  pScore.textContent = `Player score is ${playerScore}`
  cScore.textContent = `Player score is ${computerScore}`
  resultText.textContent = result;
  playRound();
}))


let playerScore = 0;
let computerScore = 0;
let draws = 0;

function computerPlay() {
  computerMove = Math.floor(Math.random() * 3) + 1;
  if (computerMove == 1) {
    computerMove = "ROCK";
  } else if (computerMove == 2) {
    computerMove = "SCISSORS";
  } else if (computerMove == 3) {
    computerMove = "PAPER";
  }
  return computerMove;
}

function playRound() {
  if (playerChoice == computerMove) {
    result = ("Draw! No one wins!")
  } else if (playerChoice == "ROCK" && computerMove == "SCISSORS") {
    playerScore++;
    result = `You win! Rock beats scissors.`;
  } else if (playerChoice == "ROCK" && computerMove == "PAPER") {
    computerScore++;
    result = ("You lose! Paper beats ROCK.");
  } else if (playerChoice == "PAPER" && computerMove == "SCISSORS") {
    computerScore++;
    result = ("You lose! Scissors beat paper.");
  } else if (playerChoice == "PAPER" && computerMove == "ROCK") {
    playerScore++;
    result = ("You win! Paper beats ROCK.");
  } else if (playerChoice == "SCISSORS" && computerMove == "ROCK") {
    computerScore++;
    result = ("You lose! ROCK beat scissors.");
  } else if (playerChoice == "SCISSORS" && computerMove == "PAPER") {
    playerScore++;
    result = ("You win! Scissors beat paper.");
  } else {
    result = 'Something went wrong.'
  }
}


// function gameScore() {
//   if (playerScore > computerScore) {
//     console.log(
//       `You win! The score is PLAYER : ${playerScore}, COMPUTER : ${computerScore}`
//     );
//   } else if (computerScore > playerScore) {
//     console.log(
//       `You lose! The score is PLAYER : ${playerScore}, COMPUTER : ${computerScore}`
//     );
//   } else {
//     `Draw! No one wins`;
//   }
// }

// while (playerScore < 5 || computerScore < 5) {
//   playRound()
//   gameScore();
// }

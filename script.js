let computerMove;
let playerChoice = prompt("What is your move? Rock? Paper? Scissors?");

// let roundResult = "";

let playerScore = 0;
let computerScore = 0;
let draws = 0;
// let score = `The total score is ${playerScore} : ${computerScore}`;

function computerPlay(min, max) {
  computerMove = Math.floor(Math.random() * (4 - 1) + 1);
  if (computerMove == 1) {
    computerMove = "rock";
  } else if (computerMove == 2) {
    computerMove = "scissors";
  } else if (computerMove == 3) {
    computerMove = "paper";
  }
  return computerMove;
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log(`You win! Rock beats scissors.`);
    playerScore++;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("You lose! Paper beats rock.");
    computerScore++;
  } else if (playerSelection === computerSelection) {
    console.log("Draw! No one wins!.");
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("You lose! Scissors beat paper.");
    computerScore++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log()("You win! Paper beats rock.");
    playerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log()("You lose! Rock beat scissors.");
    computerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("You win! Scissors beat paper.");
    playerScore++;
  }
}

for (let i = 0; i < 5; i++) {
  console.log(playRound(playerChoice.toLowerCase(), computerPlay()));
  gameScore();
  if (playerScore === 5 || computerScore == 5) {
    console.log("Game over.");
  }
}

function gameScore() {
  if (playerScore > computerScore) {
    console.log(
      `You win! The score is PLAYER : ${playerScore}, COMPUTER : ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `You lose! The score is PLAYER : ${playerScore}, COMPUTER : ${computerScore}`
    );
  } else {
    `Draw! No one wins`;
  }
}

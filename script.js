let computerMove;

function computerPlay(min, max) {
  const randInt = Math.floor(Math.random() * (max - min) + min);
  if (randInt == 1) {
    computerMove = "rock";
  } else if (randInt == 2) {
    computerMove = "scissors";
  } else if (randInt == 3) {
    computerMove = "paper";
  }
  return computerMove;
}

function playRound(playerSelection, computerSelection) {
  computerPlay(1, 4);
  let playerMove = prompt("What is your move? Rock? Paper? Scissors?");
  let lower = playerMove.toLowerCase();
  if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("You win! Rock beats scissors.");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("You lose! Paper beats rock.");
  } else if (playerSelection == "rock" && computerSelection == "rock") {
    console.log("Draw! No one wins!.");
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("You lose! Scissors beat paper.");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("You win! Paper beats rock.");
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    console.log("Draw! No one wins!.");
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    console.log("Draw! No one wins!.");
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log("You lose! Rock beat scissors.");
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("You win! Scissors beat paper.");
  }
}

console.log(playRound("rock", computerPlay(1, 4)));

let computerMove;
let playerChoice = prompt("What is your move? Rock? Paper? Scissors?");


let roundResult = '';

let playerScore = 0;
let computerScore = 0;
let score = `The total score is ${playerScore} : ${computerScore}`;


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
    playerScore++;
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`)
    console.log(score);
    return (`You win! Rock beats scissors.`);
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`)
    console.log(score)
    return ("You lose! Paper beats rock.");
  } else if (playerSelection == "rock" && computerSelection == "rock") {
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`)
    console.log(score)
    return ("Draw! No one wins!.");
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`)
    console.log(score)
    return ("You lose! Scissors beat paper.");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`)
    console.log(score)
    return ("You win! Paper beats rock.");
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`)
    console.log(score)
    return ("Draw! No one wins!.");
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`)
    console.log(score)
    return ("Draw! No one wins!.");
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`)
    console.log(score)
    computerScore++;
    return ("You lose! Rock beat scissors.");
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`)
    console.log(score)
    return ("You win! Scissors beat paper.");
  };
}




// for (let i = 0; i < 5; i++) {
function game() {
  playerChoice;
  console.log(playRound(playerChoice.toLowerCase(), computerPlay()));
  if (playerScore == 5 || computerScore == 5) {
    return "Game over.";
  }
}



for (let i = 0; i < 5; i++) {
  game();
}

// console.log(score)
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
    console.log((`You win! Rock beats scissors.`));
    playerScore++;
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`);
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log(("You lose! Paper beats rock."));
    computerScore++
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`)
  } else if (playerSelection == "rock" && computerSelection == "rock") {
    console.log(("Draw! No one wins!."))
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`)
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("You lose! Scissors beat paper.");
    computerScore++
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`)
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log()("You win! Paper beats rock.");
    playerScore++;
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`)
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    console.log()("Draw! No one wins!.")
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`);
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    console.log()("Draw! No one wins!.");
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`)
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log()("You lose! Rock beat scissors.");
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`)
    computerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log(("You win! Scissors beat paper."))
    playerScore++;
    console.log(`Computer Score : ${computerScore}, Player Score : ${playerScore}`)
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
let computerMove;

let roundResult = '';

let playerScore = 0;
let computerScore = 0;
let score = `The current score is ${playerScore} : ${computerScore}`;


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


// let playerMove = prompt("What is your move? Rock? Paper? Scissors?");

// function playRound(playerSelection, computerSelection) {
//   computerSelection = computerPlay();
//   if (playerSelection == "rock" && computerSelection == "scissors") {
//     return (`You win! ${playerSelection} beats ${computerSelection}.`);
//   } else if (playerSelection == "rock" && computerSelection == "paper") {
//     return ("You lose! Paper beats rock.");
//   } else if (playerSelection == "rock" && computerSelection == "rock") {
//     return ("Draw! No one wins!.");
//   } else if (playerSelection == "paper" && computerSelection == "scissors") {
//     return ("You lose! Scissors beat paper.");
//   } else if (playerSelection == "paper" && computerSelection == "rock") {
//     return ("You win! Paper beats rock.");
//   } else if (playerSelection == "paper" && computerSelection == "paper") {
//     return ("Draw! No one wins!.");
//   } else if (playerSelection == "scissors" && computerSelection == "scissors") {
//     return ("Draw! No one wins!.");
//   } else if (playerSelection == "scissors" && computerSelection == "rock") {
//     return ("You lose! Rock beat scissors.");
//   } else if (playerSelection == "scissors" && computerSelection == "paper") {
//     return ("You win! Scissors beat paper.");
//   }
// }





function game() {
  for (let i = 0; i < 5; i++) {
    function playRound(playerSelection, computerSelection) {
      computerSelection = computerPlay();
      if (playerSelection == "rock" && computerSelection == "scissors") {
        roundResult = ((`You win! ${playerSelection} beats ${computerSelection}.`));
        playerScore++
      } else if (playerSelection == "rock" && computerSelection == "paper") {
        roundResult = ("You lose! Paper beats rock.");
        computerScore++
      } else if (playerSelection == "rock" && computerSelection == "rock") {
        roundResult = ("Draw! No one wins!.");
      } else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundResult = ("You lose! Scissors beat paper.");
        computerScore++;
      } else if (playerSelection == "paper" && computerSelection == "rock") {
        roundResult = ("You win! Paper beats rock.");
        playerScore++;
      } else if (playerSelection == "paper" && computerSelection == "paper") {
        roundResult = ("Draw! No one wins!.");
      } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        roundResult = ("Draw! No one wins!.");
      } else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundResult = ("You lose! Rock beat scissors.");
        computerScore++;
      } else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundResult = ("You win! Scissors beat paper.");
        playerScore++
        return roundResult;
      }
      i++;

    }
    return score;
  }
}


// let selection = prompt("What is your move? Rock? Paper? Scissors?");
const computerSelection = computerPlay();
console.log(game());

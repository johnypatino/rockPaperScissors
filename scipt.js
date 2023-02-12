const results = document.querySelector('.results');
const content = document.createElement('p');
const scores = document.createElement('p')
const winnerResult = document.createElement('p');
let playerScore = 0;
let computerScore = 0;
const paper = document.getElementById('paper');
paper.addEventListener('click', () => {
    content.textContent = (playGame('paper', getComputerChoice()));
    scores.textContent = `Player Score: ${playerScore}  Computer Score: ${computerScore}`;
    winnerResult.textContent = checkScore(playerScore, computerScore);
   results.append(content, scores, winnerResult);

}) 
const rock = document.getElementById('rock');
rock.addEventListener('click', () => {
    content.textContent = (playGame('rock', getComputerChoice()));
    scores.textContent = `Player Score: ${playerScore}  Computer Score: ${computerScore}`;
    winnerResult.textContent = checkScore(playerScore, computerScore);
   results.append(content, scores, winnerResult);
}) 
const scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => {
    content.textContent = (playGame('scissors', getComputerChoice()));
    scores.textContent = `Player Score: ${playerScore}  Computer Score: ${computerScore}`;
    winnerResult.textContent = checkScore(playerScore, computerScore);
   results.append(content, scores, winnerResult);
}) 
if (playerScore == 5 || computerScore == 5) {
    console.log("end");
}

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}
function playGame(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        return `Tied! You both chose ${playerSelection}.`;
    } 
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You Lose!, Paper beats Rock!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You Win!, Rock beats Scissors!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You Win!, Paper beats Rock!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You Lose!, Scissors beats Paper!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You Lose!, Rock beats Scissors!";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You Win!, Scissors beats Paper!";
    }
    else {
        return "Invalid, Try again!"
    }
}
function checkScore(PlayerScore, ComputerScore) {
 if (PlayerScore == 5 || ComputerScore == 5 ) {
    if (PlayerScore > ComputerScore) {
        playerScore = 0;
        computerScore = 0;
        return "You Win!"
    }
    else if (PlayerScore < ComputerScore)  {
        playerScore = 0;
         computerScore = 0;
        return "Computer Wins!"
    }
    
    playerScore = 0;
    computerScore = 0;
 }
}

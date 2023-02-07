function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}
function playGame(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        return `Tied! You both chose ${playerSelection}.`;
    } 
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose!, Paper beats Rock!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win!, Rock beats Scissors!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win!, Paper beats Rock!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose!, Scissors beats Paper!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose!, Rock beats Scissors!";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win!, Scissors beats Paper!";
    }
    else {
        return "Invalid, Try again!"
    }
}
console.log(playGame("rock", getComputerChoice()));
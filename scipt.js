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
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let winner;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let message = playGame(playerSelection, getComputerChoice());
        console.log(message);
        if (message.slice(0 , 7) == "You Win") {
            playerScore++;
        }
        else if (message.slice(0 , 8) == "You Lose") {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        winner = "You!"
    }
    else if (playerScore < computerScore)
    {
        winner = "Computer!"
    }
    else {
        winner = "No Winner, Tie!"
    }
    console.log(`Your score: ${playerScore} \nComputer Score: ${computerScore} \nWinner: ${winner}`);

}
game();
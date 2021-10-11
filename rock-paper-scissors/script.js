function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

let scorePlayer = 0;
let scoreComputer = 0;

function game() {
    while ((scorePlayer + scoreComputer) < 5) {
        const playerSelection = prompt("Rock, paper or scissors? Choose!", "rock");
        const computerSelection = computerPlay();
        return playRound(playerSelection, computerSelection) + "Your Score = " + scorePlayer + ". PC Score = " + scoreComputer + ".";       
    }    
}   

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "Tie.";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        scorePlayer++;
        return "You Win!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        scorePlayer++;
        return "You Win!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        scorePlayer++;
        return "You Win!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        scoreComputer++;
        return "You Lose!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        scoreComputer++;
        return "You Lose!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
        scoreComputer++;
        return "You Lose!";
    } else {console.log("Error, Start Over");}
  } 
  
 
  console.log(game());
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "Tie.";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        return "You Win!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        return "You Win!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        return "You Win!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        return "You Lose!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        return "You Lose!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
        return "You Lose!";
    } else {console.log("Error, Start Over");}
  } 
  
  const playerSelection = prompt("Rock, paper or scissors? Choose!", "rock");
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
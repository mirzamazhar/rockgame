// Get Computer Choice
function getComputerChoice() {
        let availableChoices = ["rock", "paper", "scissors"];
        let randomChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
        return randomChoice;
}

// Function that plays the game by taking player and computer choice as parameters
function playRound(playerChoice, computerChoice) {
       // Convert inputs to case insensitive
       playerChoice = playerChoice.toLowerCase();
       computerChoice = computerChoice.toLowerCase();
       // win return statements
       let paperWin = "Paper Covers the Rock!"
       let rockWin = "Rock crushes the Scissors!"
       let scissorsWin = "Scissors cut the Paper!"
       let playerWin = "You win!"
       let playerLose = "You lose!"
       // Win Conditions
       if (playerChoice === computerChoice) {
                return "It's a Draw!";
         }
         else if (playerChoice === "rock" && computerChoice === "scissors") {
                return playerWin + " " + rockWin;
         }
         else if (playerChoice==="rock" && computerChoice==="paper") {
                return playerLose + " " + paperWin;
         }
         else if (playerChoice==="paper" && computerChoice==="rock") {
                return playerWin + " " + paperWin;
         }
         else if (playerChoice==="paper" && computerChoice==="scissors") {
                return playerLose + " " + scissorsWin;
         }
         else if (playerChoice==="scissors" && computerChoice==="paper") {
                return  playerWin +  " " + scissorsWin;
         }
         else if (playerChoice==="scissors" && computerChoice==="rock") {
                return playerLose + " " + rockWin;
         }
         else {
              return "I can't recognise the input!";
         }
}
//  Inputs
const playerChoice = prompt("Choose Rock, Scissors or Paper!");
const computerChoice = getComputerChoice();
console.log("Computer Chose:" + " " + computerChoice)
console.log("You Chose:" + " " + playerChoice)
// Execution
console.log(playRound(playerChoice, computerChoice))


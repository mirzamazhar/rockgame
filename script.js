// Get Computer Choice
function getComputerChoice() {
        let availableChoices = ["rock", "paper", "scissors"];
        let randomChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
        return randomChoice;
}

// Function that plays one round game by taking player and computer choice as parameters
function playRound(playerChoice, computerChoice) {
       // Convert inputs to case insensitive
       playerChoice = playerChoice.toLowerCase();
       computerChoice = computerChoice.toLowerCase();
       // win return statements
       let paperWin = "Paper Covers the Rock!"
       let rockWin = "Rock crushes the Scissors!"
       let scissorsWin = "Scissors cut the Paper!"
       // Win Conditions
       if (playerChoice === computerChoice) {
                return "It's a Draw!";     
         }
         else if (playerChoice === "rock" && computerChoice === "scissors") {
              playerScore++
                return `You Win! ${rockWin}`;
         }
         else if (playerChoice==="rock" && computerChoice==="paper") {
              computerScore++
                return `You lose! ${paperWin}`;
         }
         else if (playerChoice==="paper" && computerChoice==="rock") {
              playerScore++
             return `You Win! ${paperWin}`;
         }
         else if (playerChoice==="paper" && computerChoice==="scissors") {
              computerScore++
              return `You lose! ${scissorsWin}`; 
         }
         else if (playerChoice==="scissors" && computerChoice==="paper") {
              playerScore++
             return `You Win! ${scissorsWin}`;
         }
         else if (playerChoice==="scissors" && computerChoice==="rock") {
              computerScore++
              return `You lose! ${rockWin}`;
         }
         else {
              return  "I can't recognise the input!";   
         }
}
var playerScore = 0;
var computerScore = 0;
// Function with loop game five times and reporting the scores  
function game() {
       for (counter = 0; counter < 5; counter++) {
              const playerChoice = prompt("Choose Rock, Scissors or Paper!").toLowerCase();
              const computerChoice = getComputerChoice();
              var roundResult = console.log(playRound(playerChoice, computerChoice));
       }
       if (computerScore>playerScore) {
              console.log(`You lost! Your score was ${playerScore} and Computer Score was ${computerScore}.  Even Computer has better luck than you!`)

       }
       else if (computerScore < playerScore) {
              console.log(`You won! Your score was ${playerScore} and Computer Score was ${computerScore}.  Those Machines don't stand a chance against big brains!`)
       }
       else {
              console.log(`It's a Draw! Your score was ${playerScore} and Computer Score was ${computerScore}. Quite Interesting Game!`)
       }
       
       }
       game()


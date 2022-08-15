// Get Computer Choice
function getComputerChoice() {
        let availableChoices = ["Rock", "Paper", "Scissors"];
        let randomChoice = availableChoices[Math.floor(Math.random()* availableChoices.length)];
        return randomChoice;
        console.log(randomChoice);
}

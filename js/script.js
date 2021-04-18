function computerChoiceGenerator() {

  const gameOptions = ["rock", "paper", "scissors"];
  let randomNumberGenerator = Math.floor(Math.random() * 3);

  const randomComputerChoice = gameOptions[randomNumberGenerator];

  return randomComputerChoice;
  
}
      
const gameButtons = document.getElementsByClassName('gameButton');

for (let i = 0; i < gameButtons.length; i++) {

gameButtons[i].addEventListener('click', handlePlayerChoice);

}
  
function handlePlayerChoice(event) {

  let playerChoice = event.currentTarget.id;
  let computerChoice = computerChoiceGenerator();

  if (playerChoice === computerChoice) {
  alert('It is a draw');
  } else {
    if (playerChoice === 'rock') handleRoundPoints(computerChoice, 'scissors');
    if (playerChoice === 'paper') handleRoundPoints(computerChoice, 'rock');
    if (playerChoice === 'scissors') handleRoundPoints(computerChoice, 'paper');
  }
  
}

let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');

function handleRoundPoints(computerChoice, losingOption) {

  if (computerChoice === losingOption) {
  alert('Player Wins');
  playerScore.textContent++;
  } else {
  alert('Computer Wins');
  computerScore.textContent++;
  }

}
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let computerChoice;
let userChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Pareggio!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "Hai vinto!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "Hai perso!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "Hai vinto!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "Hai perso!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "Hai vinto!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "Hai perso!";
  }
  resultDisplay.innerHTML = result;
}

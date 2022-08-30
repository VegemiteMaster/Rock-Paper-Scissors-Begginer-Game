const computerDisplay = document.getElementById("computerChoice");
const userDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let user;
let computer;
let result;
const resultDiv = document.getElementById("rd");

// On click events
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    user = e.target.id;
    userDisplay.innerHTML = user;
    generateComputerChoice();
    getResult();
    chColor();
  })
);

// Generates the computer choices
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computer = "Rock";
  } else if (randomNumber === 2) {
    computer = "Paper";
  } else if (randomNumber === 3) {
    computer = "Scissors";
  } else {
    computer = undefined;
  }
  computerDisplay.innerHTML = computer;
}

// Generates the results
function getResult() {
  if (computer === user) {
    result = "It's a draw!";
  } else if (computer === "Rock" && user === "Paper") {
    result = "You Win!";
  } else if (computer === "Paper" && user === "Scissors") {
    result = "You Win!";
  } else if (computer === "Scissors" && user === "Rock") {
    result = "You Win!";
  } else {
    result = "You Lose!";
  }
  resultDisplay.innerHTML = result;
}

// Changes the result color based on the answer
function chColor() {
  if (result === "You Win!") {
    resultDiv.style.backgroundColor = "#008000";
  } else if (result === "You Lose!") {
    resultDiv.style.backgroundColor = "#FF5733";
  } else {
    resultDiv.style.backgroundColor = "#BDB76B";
  }
}

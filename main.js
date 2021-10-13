const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const compScore = document.getElementById("computerNumber");
const playerScore = document.getElementById("playerNumber");
const games = document.getElementById("gamesNumber");
let buttons = document.querySelector(".buttons");
let leftHand = document.getElementById("leftHand");
let rightHand = document.getElementById("rightHand");
let result = document.getElementById("gameResult");
let stillPlaying = true;

function computerChoice() {
  let randNum = Math.floor(Math.random() * 3 + 1);

  if (randNum === 1) {
    leftHand.src = "./img/Left-Rock.png";
    return "rock";
  } else if (randNum === 2) {
    leftHand.src = "./img/Left-Paper.png";
    return "paper";
  } else {
    leftHand.src = "./img/Left-Scissors.png";
    return "scissors";
  }
}

function incrementValue(element) {
  const value = Number(element.innerText);
  console.log("val", value);
  element.innerText = value + 1;
}

function incrementGames(games) {
  const value = Number(games.innerText);

  if (winner === 0) {
    element.innerText = value;
  } else {
    element.innerText = value + 1;
  }
}

function textResult() {
  if (result === -1) {
    gameResult.innerText = "You LOSE!";
  } else if (result === 0) {
    gameResult.innerText = "DRAW!";
  } else {
    gameResult.innerText = "You WIN!";
  }
}

// Listening for the button click
rockButton.addEventListener("click", function () {
  const player = rightRock();
  console.log(player);
  const computer = computerChoice();
  console.log(computer);

  const winner = getWinner(player, computer);
  console.log(winner);
  incrementValue(games);

  if (winner === 1) {
    incrementValue(playerScore);
    gameResult.innerText = "You WIN!";
  } else if (winner === -1) {
    incrementValue(compScore);
    gameResult.innerText = "You Lose";
  } else {
    gameResult.innerText = "DRAW!";
  }
});

paperButton.addEventListener("click", function () {
  const player = rightPaper();
  console.log(player);
  const computer = computerChoice();
  console.log(computer);

  const winner = getWinner(player, computer);
  console.log(winner);
  incrementValue(games);

  if (winner === 1) {
    incrementValue(playerScore);
    gameResult.innerText = "You WIN!";
  } else if (winner === -1) {
    incrementValue(compScore);
    gameResult.innerText = "You Lose";
  } else {
    gameResult.innerText = "DRAW!";
  }
});

scissorsButton.addEventListener("click", function () {
  const player = rightScissors();
  console.log(player);
  const computer = computerChoice();
  console.log(computer);

  const winner = getWinner(player, computer);
  console.log(winner);
  incrementValue(games);

  if (winner === 1) {
    incrementValue(playerScore);
    gameResult.innerText = "You WIN!";
  } else if (winner === -1) {
    incrementValue(compScore);
    gameResult.innerText = "You Lose";
  } else {
    gameResult.innerText = "DRAW!";
  }
});

function rightRock() {
  rightHand.src = "./img/Right-Rock.png";
  return "rock";
}
function rightPaper() {
  rightHand.src = "./img/Right-Paper.png";
  return "paper";
}
function rightScissors() {
  rightHand.src = "./img/Right-Scissors.png";
  return "scissors";
}

let playerMove = "rock";
let computerMove = "paper";

function getWinner(playerMove, computerMove) {
  if (playerMove === "rock" && computerMove === "paper") {
    return -1;
  } else if (playerMove === "rock" && computerMove === "scissors") {
    return 1;
  } else if (playerMove === "rock" && computerMove === "rock") {
    return 0;
  } else if (playerMove === "paper" && computerMove === "rock") {
    return 1;
  } else if (playerMove === "paper" && computerMove === "scissors") {
    return -1;
  } else if (playerMove === "paper" && computerMove === "paper") {
    return 0;
  } else if (playerMove === "scissors" && computerMove === "paper") {
    return 1;
  } else if (playerMove === "scissors" && computerMove === "rock") {
    return -1;
  } else if (playerMove === "scissors" && computerMove === "scissors") {
    return 0;
  }
}

// let result = getWinner(playerMove(), computerChoice());

// function continuePlay() {
//   let r = confirm("Continue Playing?");
//   if (r === true) {
//   } else {
//     alert("Thank you for playing! Bye!");
//     stillPlaying = false;
//   }
// }

// continuePlay();

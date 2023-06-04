// const cells = document.querySelectorAll(".cell");
// const restartBtn = document.getElementById("restartBtn");
// const statusText = document.getElementById("statusText");
// const xScore = document.getElementById("x-score");
// const oScore = document.getElementById("o-score");
// let xCount = 0;
// let oCount = 0;

// let winCondition = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];
// let currentPlayer = "X";
// let running = false;
// let option = ["", "", "", "", "", "", "", "", ""];

// initializeGame();

// function initializeGame() {
//   cells.forEach((cell) => cell.addEventListener("click", cellclicked));
//   restartBtn.addEventListener("click", restartGame);
//   statusText.textContent = `${currentPlayer}'s turn`;
//   running = true;
// }

// function cellclicked() {
//   let cellIndex = this.getAttribute("cellIndex");

//   if (option[cellIndex] != "" || !running) {
//     return;
//   }

//   updateCell(this, cellIndex);
//   checkWinner();
// }

// function updateCell(cell, index) {
//   cell.textContent = currentPlayer;
//   option[index] = currentPlayer;
// }

// function ChangePlayer() {
//   currentPlayer = currentPlayer == "X" ? "O" : "X";
//   statusText.textContent = `${currentPlayer}'s turn`;
// }

// function checkWinner() {
//   let roundWon = false;

//   for (let i = 0; i < winCondition.length; i++) {
//     let condition = winCondition[i];
//     let cellA = option[condition[0]];
//     let cellB = option[condition[1]];
//     let cellC = option[condition[2]];

//     if (cellA == "" || cellB == "" || cellC == "") {
//       continue;
//     }
//     if (cellA == cellB && cellB == cellC) {
//       roundWon = true;
//       break;
//     }
//   }

//   if (roundWon) {
//     statusText.textContent = `${currentPlayer} Win`;
//     running = false;

//     if (currentPlayer == "X") {
//       xCount++;
//       xScore.textContent = xCount;
//     } else if (currentPlayer == "O") {
//       oCount++;
//       oScore.textContent = oCount;
//     }
//   } else if (!option.includes("")) {
//     statusText.textContent = `Draw`;
//     running = false;
//   } else {
//     ChangePlayer();
//   }
// }

// function restartGame() {
//   cells.forEach((cell) => (cell.textContent = ""));
//   currentPlayer = "X";
//   statusText.textContent = `${currentPlayer}'s turn`;
//   running = true;
//   option = ["", "", "", "", "", "", "", "", ""];
// }

const cells = document.querySelectorAll(".cell");
const restartBtn = document.getElementById("restartBtn");
const resetBtn = document.getElementById("resetBtn");
const statusText = document.getElementById("statusText");
const xScore = document.getElementById("x-score");
const oScore = document.getElementById("o-score");
let xCount = 0;
let oCount = 0;

let winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let running = false;
let option = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

initializeGame();
resetBtn.addEventListener("click", resetScore);

function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellclicked));
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `Player ${currentPlayer}'s Turn`;
  running = true;
}

function cellclicked() {
  let cellIndex = this.getAttribute("cellIndex");

  if (option[cellIndex] != "" || !running) {
    return;
  }

  cellUpdate(this, cellIndex);
  checkWinner();
}

function cellUpdate(cell, index) {
  option[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function playerUpdate() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  statusText.textContent = `Player ${currentPlayer}'s Turn`;
}

function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < winCondition.length; i++) {
    let condition = winCondition[i];
    let cellA = option[condition[0]];
    let cellB = option[condition[1]];
    let cellC = option[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = `Player ${currentPlayer} Win`;
    running = false;
    if (currentPlayer == "X") {
      xCount++;
      xScore.textContent = xCount;
    } else if (currentPlayer == "O") {
      oCount++;
      oScore.textContent = oCount;
    }
  } else if (!option.includes("")) {
    statusText.textContent = "Draw";
    running = false;
  } else {
    playerUpdate();
  }
}

function restartGame() {
  option = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  statusText.textContent = `Player ${currentPlayer}'s Turn`;
  cells.forEach((cell) => (cell.textContent = ""));
  running = true;
}

function resetScore() {
  xCount = 0;
  oCount = 0;
  xScore.textContent = xCount;
  oScore.textContent = oCount;
}

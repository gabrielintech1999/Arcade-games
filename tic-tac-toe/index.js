import { isMoveValid, switchPlayer, updateBoard } from "./utils.js";

// let isGameActive = true

// let currentPlayer = "X"

function handleClick(e) {

   // console.log(e);
    
  // console.log("OK");
  // console.log(e.target);

  const clickedCell = e.target;

  const clickedCellIndex = clickedCell.getAttribute("data-index");

  console.log(isMoveValid(clickedCellIndex));

 if (isMoveValid(clickedCellIndex)) return

  updateBoard(clickedCellIndex, clickedCell)
  switchPlayer()

  // board[clickedCellIndex] = currentPlayer

  // clickedCell.textContent = currentPlayer

  // handleResultValidation();

  //   console.log(clickedCellIndex);
}

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => cell.addEventListener("click", handleClick));

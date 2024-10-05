let isGameActive = true
let currentPlayer = "O"



let board = ["", "", "", "", "", "", "", "", ""];

export const isMoveValid = (clickedCellIndex) => {
    console.log(clickedCellIndex);
    
   return board[clickedCellIndex] !== "" && isGameActive;
}

export const updateBoard = (clickedCellIndex, clickedCell) => {
    board[clickedCellIndex] = currentPlayer
    clickedCell.textContent = currentPlayer
 }

 export const switchPlayer  = () => {
    currentPlayer = currentPlayer === "X" ? "O": "X"
 }



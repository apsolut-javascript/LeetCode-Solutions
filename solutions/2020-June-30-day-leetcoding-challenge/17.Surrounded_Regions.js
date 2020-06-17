/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board.length < 3) return board;
  const height = board.length,
    width = board[0].length;
  for (let i = 0; i < height; i++) {
    if (board[i][0] == "O") updateCell(board, i, 0);
    if (board[i][width - 1] == "O") updateCell(board, i, width - 1);
  }

  for (let i = 0; i < width; i++) {
    if (board[0][i] == "O") updateCell(board, 0, i);
    if (board[height - 1][i] == "O") updateCell(board, height - 1, i);
  }

  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      if (board[i][j] != "O") continue;
      board[i][j] = "X";
    }
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (board[i][j] != null) continue;
      board[i][j] = "O";
    }
  }
};

function updateCell(board, i, j) {
  if (board[i][j] != "O") return;
  const height = board.length,
    width = board[0].length;
  board[i][j] = null;
  if (i > 0) updateCell(board, i - 1, j);
  if (i < height - 1) updateCell(board, i + 1, j);
  if (j > 0) updateCell(board, i, j - 1);
  if (j < width - 1) updateCell(board, i, j + 1);
}

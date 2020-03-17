/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const tracking = Array.from({ length: board.length }, () => []);
  const remainWords = word.slice(1);
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] == word[0]) {
        tracking[row][col] = 1;
        const result = backTracking(board, tracking, row, col, remainWords);
        if (result) {
          return true;
        }
        tracking[row][col] = 0;
      }
    }
  }

  return false;
};

function backTracking(board, tracking, row, col, word) {
  if (word.length == 0) return true;

  // up
  if (
    row > 0 &&
    tracking[row - 1][col] != 1 &&
    board[row - 1][col] == word[0]
  ) {
    tracking[row - 1][col] = 1;
    if (backTracking(board, tracking, row - 1, col, word.slice(1))) {
      return true;
    }
    tracking[row - 1][col] = 0;
  }

  // right
  if (
    col < board[0].length - 1 &&
    tracking[row][col + 1] != 1 &&
    board[row][col + 1] == word[0]
  ) {
    tracking[row][col + 1] = 1;
    if (backTracking(board, tracking, row, col + 1, word.slice(1))) {
      return true;
    }
    tracking[row][col + 1] = 0;
  }

  // down
  if (
    row < board.length - 1 &&
    tracking[row + 1][col] != 1 &&
    board[row + 1][col] == word[0]
  ) {
    tracking[row + 1][col] = 1;
    if (backTracking(board, tracking, row + 1, col, word.slice(1))) {
      return true;
    }
    tracking[row + 1][col] = 0;
  }

  // left
  if (
    col > 0 &&
    tracking[row][col - 1] != 1 &&
    board[row][col - 1] == word[0]
  ) {
    tracking[row][col - 1] = 1;
    if (backTracking(board, tracking, row, col - 1, word.slice(1))) {
      return true;
    }
    tracking[row][col - 1] = 0;
  }

  return false;
}
// @lc code=end

// export default exist;

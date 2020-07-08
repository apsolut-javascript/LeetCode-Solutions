/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const val = board[row][col]
      if (val == ".") continue
      if (board[row].reduce((p, c) => (c == val ? p + 1 : p), 0) > 1)
        return false
      if (
        board.map(a => a[col]).reduce((p, c) => (c == val ? p + 1 : p), 0) > 1
      )
        return false

      let count = 0,
        rowSect = Math.floor(row / 3) * 3,
        colSect = Math.floor(col / 3) * 3
      for (let x = rowSect; x < rowSect + 3; x++) {
        for (let y = colSect; y < colSect + 3; y++) {
          if (board[x][y] != val) continue

          count++
          if (count > 1) {
            return false
          }
        }
      }
    }
  }

  return true
}

module.exports = isValidSudoku

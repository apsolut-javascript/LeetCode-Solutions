/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

const validValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const rowSet = Array.from({ length: 9 }).map(a => new Set())
  const colSet = Array.from({ length: 9 }).map(a => new Set())
  const blockSet = Array.from({ length: 9 }).map(a => new Set())

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const val = board[row][col]
      if (val == ".") continue
      rowSet[row].add(val)
      colSet[col].add(val)
      const block = getBlock(row, col)
      blockSet[block].add(val)
    }
  }

  function trySolve() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] != ".") continue
        const values = getAllValidValues(row, col)
        for (let i = 0; i < values.length; i++) {
          const val = values[i]
          board[row][col] = val

          const set1 = rowSet[row]
          const set2 = colSet[col]
          const set3 = blockSet[getBlock(row, col)]

          set1.add(val)
          set2.add(val)
          set3.add(val)
          if (trySolve()) {
            return true
          }
          set1.delete(val)
          set2.delete(val)
          set3.delete(val)
        }
        board[row][col] = "."
        return false
      }
    }

    return true
  }

  function getAllValidValues(row, col) {
    const set1 = rowSet[row]
    const set2 = colSet[col]
    const set3 = blockSet[getBlock(row, col)]

    return validValues.filter(a => !set1.has(a) && !set2.has(a) && !set3.has(a))
  }

  trySolve()
}

function getBlock(row, col) {
  return Math.floor(row / 3) * 3 + Math.floor(col / 3)
}

module.exports = solveSudoku

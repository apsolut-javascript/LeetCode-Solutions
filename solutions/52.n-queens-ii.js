/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 */
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let result = 0
  const ans = []

  function getRow(row) {
    for (let col = 0; col < n; col++) {
      if (!isValidPos(row, col)) continue

      if (row == n - 1) {
        result++
      } else {
        ans.push(col)
        getRow(row + 1)
        ans.pop()
      }
    }
  }

  function isValidPos(row, col) {
    if (ans.some(a => a == col)) return false

    for (let r = row - 1, offset = 1; r >= 0; r--, offset++) {
      const left = col - offset
      const val = ans[r]
      if (0 <= left && val == left) return false

      const right = col + offset
      if (right < n && val == right) return false
    }

    return true
  }

  getRow(0)
  return result
}

module.exports = totalNQueens

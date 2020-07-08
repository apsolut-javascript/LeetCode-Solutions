/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const result = []

  function getRow(row, ans) {
    if (row == n) {
      result.push(ans)
      return
    }

    for (let col = 0; col < n; col++) {
      if (!isValidPos(row, col, ans)) continue

      const val = "Q".padStart(col + 1, ".").padEnd(n, ".")
      getRow(row + 1, [...ans, val])
    }
  }

  function isValidPos(row, col, ans) {
    if (ans.some(a => a[col] == "Q")) return false

    for (let r = row - 1, offset = 1; r >= 0; r--, offset++) {
      const left = col - offset
      if (0 <= left && ans[r][left] == "Q") return false

      const right = col + offset
      if (right < n && ans[r][right] == "Q") return false
    }

    return true
  }

  getRow(0, [])
  return result
}

module.exports = solveNQueens

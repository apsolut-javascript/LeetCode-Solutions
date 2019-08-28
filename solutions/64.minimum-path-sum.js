/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (grid.length == 0) return 0
  const result = Array.from({ length: grid.length }, () => [])
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i == 0) {
        if (j == 0) {
          result[i][j] = grid[i][j]
        } else {
          result[i][j] = grid[i][j] + result[i][j - 1]
        }

        continue
      }

      if (j == 0) {
        result[i][j] = grid[i][j] + result[i - 1][j]
        continue
      }

      result[i][j] = grid[i][j] + Math.min(result[i - 1][j], result[i][j - 1])
    }
  }

  return result[grid.length - 1][grid[0].length - 1]
}

module.exports = minPathSum

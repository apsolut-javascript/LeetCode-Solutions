/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (n == 1) return 1
  if (n == 2) return m

  const result = Array.from({ length: m }, () => Array.from({ length: n }))
  result[0].fill(1)
  for (let i = 1; i < m; i++) {
    result[i][0] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      result[i][j] = result[i - 1][j] + result[i][j - 1]
    }
  }

  return result[m - 1][n - 1]
}

module.exports = uniquePaths

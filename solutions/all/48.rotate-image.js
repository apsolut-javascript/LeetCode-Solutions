/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const maxDepath = matrix.length / 2 + 1
  const n = matrix.length

  for (let depth = 0; depth < maxDepath; depth++) {
    for (let i = depth; i < matrix.length - depth - 1; i++) {
      let temp1 = matrix[i][n - 1 - depth]
      matrix[i][n - 1 - depth] = matrix[depth][i]

      let temp2 = matrix[n - 1 - depth][n - 1 - i]
      matrix[n - 1 - depth][n - 1 - i] = temp1

      temp1 = matrix[n - 1 - i][depth]
      matrix[n - 1 - i][depth] = temp2

      matrix[depth][i] = temp1
    }
  }
}

module.exports = rotate

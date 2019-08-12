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
  const maxDepath = Math.trunc(matrix.length / 2)
  const n = matrix.length
  const temps = []

  function rotateDepth(depth) {
    if (depth > maxDepath) return
    for (let i = depth; i < matrix.length - depth - 1; i++) {
      temps.push(matrix[i][n - 1 - depth])
      matrix[i][n - 1 - depth] = matrix[depth][i]

      temps.push(matrix[n - 1 - depth][n - 1 - i])
      matrix[n - 1 - depth][n - 1 - i] = temps.shift()

      temps.push(matrix[n - 1 - i][depth])
      matrix[n - 1 - i][depth] = temps.shift()

      matrix[depth][i] = temps.shift()
    }

    rotateDepth(depth + 1)
  }

  rotateDepth(0)

  return matrix
}

module.exports = rotate

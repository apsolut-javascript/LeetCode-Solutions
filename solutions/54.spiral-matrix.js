/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length == 0) return []

  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1,
    result = []

  while (left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    top++

    if (bottom < top) break
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right])
    }
    right--

    if (right < left) break
    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i])
    }
    bottom--

    if (bottom < top) break
    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left])
    }
    left++
  }

  return result
}

module.exports = spiralOrder

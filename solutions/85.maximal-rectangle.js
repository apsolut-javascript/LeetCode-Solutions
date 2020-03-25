/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  let maxArea = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if ((matrix.length - i) * matrix[0].length <= maxArea) {
        return maxArea;
      }

      if (matrix[i][j] == 0) continue;

      const area = getArea(matrix, i, j);
      if (maxArea < area) maxArea = area;
    }
  }

  return maxArea;
};

function getArea(matrix, row, col) {
  let maxArea = 0;

  for (let i = row; i < matrix.length; i++) {
    if (matrix[i][col] == 0) break;

    for (let j = col; j < matrix[0].length; j++) {
      if (!isAllValid(matrix, row, i, col, j)) break;

      const area = (i - row + 1) * (j - col + 1);
      if (maxArea < area) maxArea = area;
    }
  }

  return maxArea;
}

function isAllValid(matrix, rowStart, rowEnd, colStart, colEnd) {
  for (let i = rowStart; i <= rowEnd; i++) {
    for (let j = colStart; j <= colEnd; j++) {
      if (matrix[i][j] == 0) return false;
    }
  }

  return true;
}

module.exports = maximalRectangle;
// @lc code=end

/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length == 0 || matrix[0].length == 0) return false;

  const width = matrix[0].length;
  const length = matrix.length * width;
  let start = 0;
  let end = length - 1;
  while (start <= end) {
    const mid = (start + end) >> 1;
    const i = (mid / width) | 0;
    const j = mid % width;
    const val = matrix[i][j];
    if (val == target) return true;
    if (val < target) start = mid + 1;
    else end = mid - 1;
  }

  return false;
};

module.exports = searchMatrix;

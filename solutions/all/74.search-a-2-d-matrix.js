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
var searchMatrix = function(matrix, target) {
  if (matrix.length == 0 || matrix[0].length == 0) return false;

  const n = matrix[0].length;
  let low = 0,
    up = matrix.length - 1;
  let mid = 0;
  while (low <= up) {
    mid = ((up - low) >> 1) + low;
    const start = matrix[mid][0],
      end = matrix[mid][n - 1];
    if (target < start) {
      up = mid - 1;
    } else if (end < target) {
      low = mid + 1;
    } else {
      if (start == target || target == end) return true;
      break;
    }
  }

  const group = matrix[mid];
  low = 1;
  up = n - 2;
  while (low <= up) {
    mid = ((up - low) >> 1) + low;
    const num = group[mid];
    if (num < target) {
      low = mid + 1;
    } else if (target < num) {
      up = mid - 1;
    } else {
      return true;
    }
  }

  return false;
};

module.exports = searchMatrix;

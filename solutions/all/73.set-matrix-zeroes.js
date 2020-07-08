/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const row = new Set();
  const col = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        row.add(i);
        col.add(j);
      }
    }
  }

  row.forEach(a => {
    for (let i = 0; i < matrix[a].length; i++) {
      matrix[a][i] = 0;
    }
  });

  col.forEach(a => {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][a] = 0;
    }
  });

  return matrix;
};

module.exports = setZeroes;

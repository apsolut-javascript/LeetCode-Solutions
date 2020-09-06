/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function (A, B) {
  cleanup(A);
  cleanup(B);

  if (A.length == 0 || B.length == 0 || A[0].length == 0 || B[0].length == 0)
    return 0;

  return Math.max(traverseMatrix(A, B), traverseMatrix(B, A));
};

function traverseMatrix(A, B) {
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      max = Math.max(max, getOverlap(i, j));
    }
  }

  function getOverlap(row, col) {
    let count = 0;
    for (let i = 0; i < Math.min(A.length - row, B.length); i++) {
      for (let j = 0; j < Math.min(A[0].length - col, B[0].length); j++) {
        if (A[i + row][j + col] + B[i][j] == 2) count++;
      }
    }
    return count;
  }

  return max;
}

function cleanup(matrix) {
  while (matrix.length > 0 && matrix[0].every(a => a == 0)) matrix.splice(0, 1);
  while (matrix.length > 0 && matrix[matrix.length - 1].every(a => a == 0))
    matrix.splice(matrix.length - 1, 1);
  if (matrix.length == 0) return;
  while (matrix[0].length > 0 && matrix.every(a => a[0] == 0))
    matrix.forEach(a => a.splice(0, 1));
  while (matrix[0].length > 0 && matrix.every(a => a[a.length - 1] == 0))
    matrix.forEach(a => a.splice(a.length - 1, 1));
}

module.exports = largestOverlap;

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const cur = matrix[i][j];
      if (cur == 0) continue;

      if (cur > max) max = cur;

      if (i == 0 || j == 0) continue;

      const prev = matrix[i - 1][j - 1];
      if (prev == 0) continue;

      let width = 0;
      for (; width < prev; width++) {
        if (matrix[i - width - 1][j] == 0 || matrix[i][j - width - 1] == 0)
          break;
      }

      if (width > 0) {
        const length = Number(cur) + width;
        matrix[i][j] = length;
        if (length > max) max = length;
      }
    }
  }

  return max ** 2;
};

module.exports = maximalSquare;

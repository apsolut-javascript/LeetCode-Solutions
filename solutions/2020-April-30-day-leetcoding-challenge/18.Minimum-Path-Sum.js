/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const sum = Array.from({ length: grid.length }, _ => []);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const steps = grid[i][j];
      let minSteps = 0;
      if (i > 0 || j > 0) {
        if (i == 0) {
          minSteps = sum[i][j - 1];
        } else if (j == 0) {
          minSteps = sum[i - 1][j];
        } else {
          minSteps = Math.min(sum[i - 1][j], sum[i][j - 1]);
        }
      }
      sum[i].push(steps + minSteps);
    }
  }

  return sum[sum.length - 1][sum[0].length - 1];
};

module.exports = minPathSum;

/**
 * @param {number[][]} dungeon
 * @return {number}
 */

var calculateMinimumHP = function (dungeon) {
  const height = dungeon.length;
  const width = dungeon[0].length;
  const dp = Array.from({ length: height + 1 }, (v, i) => []);
  for (let i = 0; i < width + 1; i++) {
    dp[height][i] = Number.POSITIVE_INFINITY;
  }

  for (let i = 0; i < height + 1; i++) {
    dp[i][width] = Number.POSITIVE_INFINITY;
  }
  dp[height][width - 1] = 1;
  dp[height - 1][width] = 1;

  for (let i = height - 1; i >= 0; i--) {
    for (let j = width - 1; j >= 0; j--) {
      const val = dungeon[i][j];
      const need = Math.min(dp[i + 1][j], dp[i][j + 1]) - val;
      dp[i][j] = Math.max(need, 1);
    }
  }

  return dp[0][0];
};

calculateMinimumHP([[0]]);
calculateMinimumHP([
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5],
]);

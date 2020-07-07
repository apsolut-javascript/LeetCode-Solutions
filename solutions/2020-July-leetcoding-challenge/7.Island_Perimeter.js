/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let ans = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 0) continue;

      if (i == 0 || grid[i - 1][j] == 0) ans++;
      if (i == grid.length - 1 || grid[i + 1][j] == 0) ans++;
      if (j == 0 || grid[i][j - 1] == 0) ans++;
      if (j == grid[0].length - 1 || grid[i][j + 1] == 0) ans++;
    }
  }

  return ans;
};

islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
]);

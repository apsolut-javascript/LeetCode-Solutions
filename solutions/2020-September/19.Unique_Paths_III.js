/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  function tryPos(i, j) {
    if (grid[i] == null) return false;
    const val = grid[i][j];
    if (val == 2) return grid.every(a => a.every(b => b != 0));
    if (val != 0) return false;

    grid[i][j] = 3;
    const ans =
      tryPos(i - 1, j) + tryPos(i + 1, j) + tryPos(i, j - 1) + tryPos(i, j + 1);
    grid[i][j] = 0;
    return ans;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] != 1) continue;

      return (
        tryPos(i - 1, j) +
        tryPos(i + 1, j) +
        tryPos(i, j - 1) +
        tryPos(i, j + 1)
      );
    }
  }

  return false;
};

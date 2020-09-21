/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  function tryPos(i, j, zeros) {
    if (grid[i] == null) return false;
    const val = grid[i][j];
    if (val == 2) return zeros == 0;
    if (val != 0) return false;

    grid[i][j] = 3;
    const ans =
      tryPos(i - 1, j, zeros - 1) +
      tryPos(i + 1, j, zeros - 1) +
      tryPos(i, j - 1, zeros - 1) +
      tryPos(i, j + 1, zeros - 1);
    grid[i][j] = 0;
    return ans;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] != 1) continue;
      let zeros = 0;
      grid.forEach(a => (zeros += a.filter(b => b == 0).length));
      return (
        tryPos(i - 1, j, zeros) +
        tryPos(i + 1, j, zeros) +
        tryPos(i, j - 1, zeros) +
        tryPos(i, j + 1, zeros)
      );
    }
  }

  return false;
};

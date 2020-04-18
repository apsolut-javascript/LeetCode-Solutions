/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] != 1) continue;

      count++;
      setIsland(grid, i, j, count + 1);
    }
  }

  return count;
};

function setIsland(grid, i, j, num) {
  grid[i][j] = num;
  if (i > 0 && grid[i - 1][j] == 1) setIsland(grid, i - 1, j, num);
  if (i + 1 < grid.length && grid[i + 1][j] == 1)
    setIsland(grid, i + 1, j, num);
  if (j > 0 && grid[i][j - 1] == 1) setIsland(grid, i, j - 1, num);
  if (j + 1 < grid[0].length && grid[i][j + 1] == 1)
    setIsland(grid, i, j + 1, num);
}

module.exports = numIslands;

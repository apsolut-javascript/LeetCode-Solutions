/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid.length == 0) return 0
  if (obstacleGrid[0][0] == 1) return 0

  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] == 1) {
        obstacleGrid[i][j] = 0
        continue
      }

      if (i == 0) {
        if (j == 0) {
          obstacleGrid[i][j] = 1
        } else {
          obstacleGrid[i][j] = obstacleGrid[i][j - 1]
        }

        continue
      }

      if (j == 0) {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j]
        continue
      }

      obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
    }
  }

  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
}
module.exports = uniquePathsWithObstacles

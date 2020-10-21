/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let i = 0;
  while (i < asteroids.length - 1) {
    const val = asteroids[i];
    if (val < 0 || asteroids[i + 1] > 0) {
      i++;
      continue;
    }

    const sum = val + asteroids[i + 1];
    if (sum > 0) {
      asteroids.splice(i + 1, 1);
    } else if (sum == 0) {
      asteroids.splice(i, 2);
      i = Math.max(i - 1, 0);
    } else {
      asteroids.splice(i, 1);
      i = Math.max(i - 1, 0);
    }
  }
  return asteroids;
};

module.exports = asteroidCollision;
// @lc code=end

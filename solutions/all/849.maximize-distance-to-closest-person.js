/*
 * @lc app=leetcode id=849 lang=javascript
 *
 * [849] Maximize Distance to Closest Person
 */

// @lc code=start
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  if (seats.length == 2) {
    return 1;
  }

  let start = null;
  let max = 1;
  for (let i = 0; i < seats.length; i++) {
    const val = seats[i];
    if (val == 0) continue;

    const dist = start == null ? i : (i - start) >> 1;
    max = Math.max(dist, max);
    start = i;
  }

  max = Math.max(max, seats.length - 1 - start);

  return max;
};
// @lc code=end

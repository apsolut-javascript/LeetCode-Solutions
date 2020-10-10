/*
 * @lc app=leetcode id=452 lang=javascript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length == 0) return 0;
  points.sort((a, b) => (a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]));
  let ans = 1;
  let start = 0;
  let end = 1;
  let right = points[0][1];
  while (end < points.length) {
    const [l, r] = points[end];
    if (right < l) {
      ans++;
      start = end;
      right = r;
    } else if (r < right) {
      right = r;
    }
    end++;
  }

  return ans;
};

module.exports = findMinArrowShots;
// @lc code=end

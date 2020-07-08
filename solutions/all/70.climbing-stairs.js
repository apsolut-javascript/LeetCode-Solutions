/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n == 1) return 1;
  let a = 1,
    b = 2,
    i = 3;
  while (i <= n) {
    let c = a + b;
    a = b;
    b = c;
    i++;
  }

  return b;
};

module.exports = climbStairs;

/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let n = x;
  while (n * n > x) {
    n = Math.floor((n + x / n) / 2);
  }

  return n;
};

module.exports = mySqrt;

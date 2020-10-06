/*
 * @lc app=leetcode id=1009 lang=javascript
 *
 * [1009] Complement of Base 10 Integer
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
  if (N == 0) return 1;
  let mask = 1;
  while (mask <= N) {
    mask <<= 1;
  }
  mask -= 1;
  return N ^ mask;
};

module.exports = bitwiseComplement;
// @lc code=end

/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n == 0) return 1
  if (n == 1) return x
  if (n == -1) return 1 / x

  let result = myPow(x, n >> 1)
  result *= result
  if (n % 2 == 0) {
    return result
  }

  return result * x
}

module.exports = myPow

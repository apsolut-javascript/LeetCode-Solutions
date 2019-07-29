/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const neg = (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  if (dividend == 0 || dividend < divisor) return 0

  let result = 0
  if (divisor == 1) {
    result = dividend
  } else if (divisor == dividend) {
    result = 1
  } else if (divisor == 2 && dividend < 2147483648) {
    result = dividend >> 1
  } else {
    const bits = [divisor]
    let bit = divisor + divisor
    while (bit <= dividend) {
      bits.push(bit)
      bit += bit
    }

    let bitResult = "0b1"
    let sum = bits[bits.length - 1]
    for (let i = bits.length - 2; i >= 0; i--) {
      const val = bits[i]
      if (sum + val <= dividend) {
        sum += val
        bitResult += "1"
      } else {
        bitResult += "0"
      }
    }

    result = Number(bitResult)
  }

  if (neg) {
    result = -result
  }

  return Math.min(result, 2147483647)
}

module.exports = divide

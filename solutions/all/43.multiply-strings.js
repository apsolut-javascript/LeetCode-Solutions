/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 == "0" || num2 == "0") return "0"
  const sum = [],
    n1 = num1.split("").map(a => Number(a)),
    n2 = num2.split("").map(a => Number(a))

  n1.reverse()
  n2.reverse()

  for (let i = 0; i < n1.length; i++) {
    for (let j = 0; j < n2.length; j++) {
      add(sum, i + j, n1[i] * n2[j])
    }
  }

  sum.reverse()
  return sum.join("")
}

function add(sum, index, val) {
  let total = (sum[index] || 0) + val
  if (total > 9) {
    add(sum, index + 1, Math.trunc(total / 10))
    total %= 10
  }

  sum[index] = total
}

module.exports = multiply

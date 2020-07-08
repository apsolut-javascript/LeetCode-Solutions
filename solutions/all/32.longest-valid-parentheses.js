/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if (!s) return 0
  s = s.trimLeft(")")
  s = s.trimRight("(")
  if (!s) return 0

  let maxLen = 0
  let left = 0
  let right = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ")") {
      right++
    } else {
      left++
    }

    if (left == right) {
      maxLen = Math.max(maxLen, left * 2)
    } else if (left < right) {
      left = right = 0
    }
  }

  left = right = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == ")") {
      right++
    } else {
      left++
    }

    if (left == right) {
      maxLen = Math.max(maxLen, left * 2)
    } else if (right < left) {
      left = right = 0
    }
  }

  return maxLen
}

module.exports = longestValidParentheses

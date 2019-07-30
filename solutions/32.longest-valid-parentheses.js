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
  for (let i = 0; i < s.length; i++) {
    if (s.length - i < maxLen) break
    let stack = 0
    let start = i
    for (let j = i; j < s.length; j++) {
      if (s[j] == ")" && stack == 0) {
        start = j + 1
        continue
      }

      if (s[j] == "(") {
        stack++
        if (stack > s.length - j) break
      } else {
        stack--
        if (stack == 0) {
          const len = j - start + 1
          if (len > maxLen) maxLen = len
        }
      }
    }
  }

  return maxLen
}

module.exports = longestValidParentheses

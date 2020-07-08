/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

const mapping = {
  "}": "{",
  "]": "[",
  ")": "(",
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 != 0) return false
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i)
    const val = mapping[c]
    if (!val) {
      stack.push(c)
    } else {
      if (stack.length == 0 || stack.pop() != val) {
        return false
      }
    }
  }

  return stack.length == 0
}

module.exports = isValid

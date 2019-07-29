/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) return 0

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let found = true
    for (let j = 0; j < needle.length; j++) {
      if (needle.charAt(j) != haystack[i + j]) {
        found = false
        break
      }
    }

    if (found) {
      return i
    }
  }

  return -1
}

module.exports = strStr

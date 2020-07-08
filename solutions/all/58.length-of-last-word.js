/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (s.length == 0) return 0

  let result = 0,
    isEnd = true

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == " ") {
      if (isEnd) continue

      break
    }
    if (s[i] != " " && isEnd) {
      isEnd = false
    }
    result++
  }

  return result
}

module.exports = lengthOfLastWord

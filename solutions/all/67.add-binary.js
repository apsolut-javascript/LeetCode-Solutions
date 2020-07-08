/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let result = []
  let maxLen = Math.max(a.length, b.length)
  let isUp = false

  for (let i = a.length - 1, j = b.length - 1; maxLen > 0; i--, j--, maxLen--) {
    const s1 = a[i] || "0"
    const s2 = b[j] || "0"

    if (s1 == "1" && s2 == "1") {
      result.push(isUp ? "1" : "0")
      isUp = true
    } else if (s1 == "0" && s2 == "0") {
      result.push(isUp ? "1" : "0")
      isUp = false
    } else {
      result.push(isUp ? "0" : "1")
    }
  }

  if (isUp) result.push("1")
  result.reverse()
  return result.join("")
}

module.exports = addBinary

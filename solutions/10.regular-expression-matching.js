/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let pIndex = p.length - 1
  let sIndex = s.length - 1
  let isAsterisk = false
  const isCurrentMatched = () => p[pIndex] === "." || p[pIndex] === s[sIndex]
  while (pIndex >= 0 && sIndex >= 0) {
    const pattern = p[pIndex]
    if (pattern === "*") {
      isAsterisk = true
      pIndex--
      continue
    }

    if (!isCurrentMatched() && !isAsterisk) {
      return false
    } else if (isAsterisk) {
      if (isCurrentMatched()) {
        if (isMatch(s.slice(0, sIndex), p.slice(0, pIndex + 1))) {
          return true
        }
        if (isMatch(s.slice(0, sIndex + 1), p.slice(0, pIndex))) {
          return true
        }
        sIndex--
      } else {
        pIndex--
        isAsterisk = false
      }
    } else {
      pIndex--
      sIndex--
    }
  }

  if (sIndex >= 0) return false

  while (pIndex >= 0) {
    if (isAsterisk) {
      pIndex--
      isAsterisk = false
      continue
    }

    if (pIndex > 0 && p[pIndex] === "*") {
      pIndex -= 2
    } else {
      return false
    }
  }

  return true
}

module.exports = isMatch

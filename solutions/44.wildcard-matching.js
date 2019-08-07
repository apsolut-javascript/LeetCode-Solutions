/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 */
/**
 * @param {string} s
 * @param {string} pattern
 * @return {boolean}
 */
var isMatch = function(s, p) {
  return subMatch(s, 0, p.replace(/\*+/g, "*"), 0)
}

function subMatch(s, sStart, p, pStart) {
  if (s.length < sStart || p.length < pStart) return false
  if (s.length == sStart && p.length == pStart) return true

  const pattern = p[pStart]
  if (pattern == "*") {
    if (pStart == p.length - 1) return true
    let nextAsterisk = p.indexOf("*", pStart + 1)
    if (nextAsterisk == -1) {
      const subString = s.slice(-(p.length - pStart - 1))
      const subPattern = p.slice(pStart + 1)
      return subPattern.split("").every((c, i) => c == "?" || subString[i] == c)
    }
    const subPattern = p.slice(pStart + 1, nextAsterisk)
    let nextMatch = getNextMatch(s, subPattern, sStart)
    while (nextMatch != -1) {
      if (
        subMatch(
          s,
          nextMatch + subPattern.length,
          p,
          pStart + 1 + subPattern.length
        )
      ) {
        return true
      }

      nextMatch = getNextMatch(s, subPattern, nextMatch + 1)
    }

    return false
  }

  if (pattern != "?" && pattern != s[sStart]) return false

  return subMatch(s, sStart + 1, p, pStart + 1)
}

function getNextMatch(s, pattern, index) {
  for (let i = index; i < s.length; i++) {
    let found = true
    for (let j = 0; j < pattern.length; j++) {
      const p = pattern[j]
      if (p == "?" || s[i + j] == p) continue

      found = false
    }

    if (found) {
      return i
    }
  }

  return -1
}

module.exports = isMatch

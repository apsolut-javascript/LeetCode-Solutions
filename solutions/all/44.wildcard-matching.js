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
  return subMatch(s, 0, p.replace(/\*+/g, "*"), 0, [])
}

function subMatch(s, sStart, p, pStart, cache) {
  const cachedResult = cache[sStart] && cache[sStart][pStart]
  if (cachedResult != undefined) return cachedResult[2]
  if (s.length < sStart || p.length < pStart) {
    return cacheResult(cache, sStart, pStart, false)
  }
  if (s.length == sStart && p.length == pStart) {
    return cacheResult(cache, sStart, pStart, true)
  }

  let sIndex = sStart
  let pIndex = pStart
  while (sIndex < s.length && pIndex < p.length) {
    const pattern = p[pIndex]

    if (pattern == "*") {
      if (pIndex == p.length - 1) {
        return cacheResult(cache, sStart, pStart, true)
      }

      let nextAsterisk = p.indexOf("*", pIndex + 1)
      if (nextAsterisk == -1) {
        const subString = s.slice(sIndex).slice(-(p.length - pIndex - 1))
        const subPattern = p.slice(pIndex + 1)
        const result =
          subString.length == subPattern.length &&
          subPattern.split("").every((c, i) => c == "?" || subString[i] == c)

        return cacheResult(cache, sStart, pStart, result)
      }
      const subPattern = p.slice(pIndex + 1, nextAsterisk)
      let nextMatch = getNextMatch(s, subPattern, sIndex)
      while (nextMatch != -1) {
        if (
          subMatch(
            s,
            nextMatch + subPattern.length,
            p,
            pIndex + 1 + subPattern.length,
            cache
          )
        ) {
          return cacheResult(cache, sStart, pStart, true)
        }

        nextMatch = getNextMatch(s, subPattern, nextMatch + 1)
      }

      return cacheResult(cache, sStart, pStart, false)
    }

    if (pattern != "?" && pattern != s[sIndex]) {
      return cacheResult(cache, sStart, pStart, false)
    }

    sIndex++
    pIndex++
  }

  if (pIndex == p.length - 1 && p[pIndex] == "*") {
    return cacheResult(cache, sStart, pStart, true)
  }
  const result = sIndex == s.length && pIndex == p.length
  return cacheResult(cache, sStart, pStart, result)
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

function cacheResult(cache, sStart, pStart, result) {
  if (!cache[sStart]) {
    cache[sStart] = []
  }
  cache[sStart][pStart] = result
  return result
}

module.exports = isMatch

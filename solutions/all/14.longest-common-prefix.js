/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const sample = strs.pop()
  if (strs.length === 0) return sample || ""

  for (let i = 0; i < sample.length; i++) {
    if (!strs.every(a => a.charAt(i) === sample.charAt(i))) {
      return sample.slice(0, i)
    }
  }

  return sample
}

module.exports = longestCommonPrefix

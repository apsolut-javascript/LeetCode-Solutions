/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const groups = {}
  strs.forEach(a => {
    const s = a
      .split("")
      .sort()
      .join("")
    const group = groups[s]
    if (group) {
      group.push(a)
    } else {
      groups[s] = [a]
    }
  })

  return Object.values(groups)
}

module.exports = groupAnagrams

/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const result = permute(nums)
  result.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] != b[i]) return a[i] - b[i]
    }

    return 0
  })

  for (let i = result.length - 1; i > 0; i--) {
    const current = result[i]
    const next = result[i - 1]
    if (current.every((a, j) => a == next[j])) {
      result.splice(i, 1)
    }
  }

  return result
}

var permute = function(nums) {
  if (nums.length == 1) return [nums]
  const result = []
  nums.forEach((a, i) => {
    const remains = nums.slice(0, i).concat(nums.slice(i + 1))
    const sub = permute(remains)
    sub.forEach(b => b.unshift(a))
    result.push(...sub)
  })
  return result
}

module.exports = permuteUnique

/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
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

module.exports = permute

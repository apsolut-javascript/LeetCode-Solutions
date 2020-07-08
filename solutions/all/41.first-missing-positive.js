/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if (nums.length == 0) return 1
  const result = [1]
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]
    if (val < 1 || nums.length < val) continue

    result[val] = 1
  }

  for (let i = 1; i < result.length; i++) {
    if (result[i] != 1) {
      return i
    }
  }

  return result.length
}

module.exports = firstMissingPositive

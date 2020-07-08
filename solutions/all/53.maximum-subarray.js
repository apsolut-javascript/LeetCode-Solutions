/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length == 1) return nums[0]

  let max = Number.MIN_SAFE_INTEGER,
    sum = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]
    if (sum < 0) {
      if (sum < val) {
        sum = val
      }
    } else {
      sum += val
    }

    if (sum > max) {
      max = sum
    }
  }

  return max
}

module.exports = maxSubArray

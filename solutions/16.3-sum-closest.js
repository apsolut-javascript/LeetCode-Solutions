/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b)
  let nearest = Number.POSITIVE_INFINITY
  let result = null
  for (let i = 0; i < nums.length - 1; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue
    const x = nums[i]
    let start = i + 1
    let end = nums.length - 1
    while (start < end) {
      const sum = x + nums[start] + nums[end]
      if (sum === target) {
        return target
      } else if (sum > target) {
        do {
          end--
        } while (nums[end] === nums[end + 1] && start < end)
      } else {
        do {
          start++
        } while (nums[start] === nums[start - 1] && start < end)
      }
      const distance = Math.abs(sum - target)
      if (distance < nearest) {
        nearest = distance
        result = sum
      }
    }
  }

  return result
}

module.exports = threeSumClosest

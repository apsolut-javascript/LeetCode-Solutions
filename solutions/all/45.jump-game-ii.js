/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let result = 0
  let i = 0
  while (i < nums.length - 1) {
    result++
    const steps = nums[i]
    if (nums.length - 1 <= steps + i) {
      break
    }
    let max = steps,
      index = steps
    for (let j = 1; j <= steps; j++) {
      const distance = nums[i + j] + j
      if (distance > max) {
        max = distance
        index = j
      }
    }
    i += index
  }

  return result
}

module.exports = jump

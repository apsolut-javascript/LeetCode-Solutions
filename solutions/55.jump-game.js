/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length == 1 && nums[0] == 0) return true

  let blockIndex = null
  for (let i = nums.length - 2; i >= 0; i--) {
    const val = nums[i]
    if (blockIndex != null) {
      if (0 < val && blockIndex - i < val) {
        blockIndex = null
      }
    } else if (val == 0) {
      blockIndex = i
    }
  }

  return blockIndex == null
}

module.exports = canJump

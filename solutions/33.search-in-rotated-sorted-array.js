/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length == 0) return -1
  let start = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      start = i + 1
      break
    }
  }

  let left = 0,
    right = nums.length
  while (left <= right) {
    const mid = (((right - left) / 2) | 0) + left
    const offset = (mid + start) % nums.length
    if (nums[offset] < target) {
      left = mid + 1
    } else if (target < nums[offset]) {
      right = mid - 1
    } else {
      return offset
    }
  }

  return -1
}

module.exports = search

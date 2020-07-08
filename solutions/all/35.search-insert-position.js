/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.length == 0) return 0
  let l = 0,
    r = nums.length - 1,
    val = null,
    m = null

  while (l <= r) {
    m = Math.floor((r - l) / 2 + l)
    val = nums[m]
    if (val < target) {
      l++
    } else if (val > target) {
      r--
    } else {
      return m
    }
  }

  return val < target ? m + 1 : m
}

module.exports = searchInsert

/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

const notFound = [-1, -1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length == 0) return notFound

  let l = 0,
    r = nums.length - 1
  while (l <= r) {
    let m = Math.floor((r - l) / 2 + l)
    const val = nums[m]
    if (val < target) {
      l = m + 1
    } else if (val > target) {
      r = m - 1
    } else {
      let start = m,
        end = m
      while (start > 0 && nums[start - 1] == target) {
        start--
      }
      while (end < nums.length - 1 && nums[end + 1] == target) {
        end++
      }

      return [start, end]
    }
  }

  return notFound
}

module.exports = searchRange

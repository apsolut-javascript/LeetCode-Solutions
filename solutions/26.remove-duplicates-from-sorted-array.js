/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0
  let len = 0
  while (i < nums.length) {
    const j = i
    do {
      i++
    } while (nums[i] == nums[j])
    nums[len] = nums[j]

    len++
  }

  nums.length = len

  return len
}

module.exports = removeDuplicates

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
  let i = nums.length - 1
  let j = i - 1
  while (j >= 0) {
    let count = 0
    while (j >= 0 && nums[i] == nums[j]) {
      j--
      count++
    }

    if (count > 0) {
      nums.splice(j + 1, count)
    }
    i = j
    j--
  }

  return nums.length
}

module.exports = removeDuplicates

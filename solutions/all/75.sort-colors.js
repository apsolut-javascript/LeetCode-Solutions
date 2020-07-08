/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let zero = 0,
    one = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element == 0) zero++;
    else if (element == 1) one++;
  }

  for (let i = 0; i < zero; i++) {
    nums[i] = 0;
  }

  for (let i = zero; i < zero + one; i++) {
    nums[i] = 1;
  }

  for (let i = zero + one; i < nums.length; i++) {
    nums[i] = 2;
  }

  return nums;
};

module.exports = sortColors;

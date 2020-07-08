/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  while (i < nums.length - 2) {
    if (nums[i] == nums[i + 2]) {
      nums.splice(i + 2, 1);
    } else {
      i++;
    }
  }

  return nums.length;
};
// @lc code=end

export default removeDuplicates;

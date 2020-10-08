/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = (start + end) >> 1;
    const val = nums[mid];
    if (val == target) return mid;
    if (val < target) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
};
// @lc code=end

/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let pivot = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      pivot = i + 1;
      break;
    }
  }

  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const middle = ((end - start) / 2 + start) | 0;
    const cur = nums[(middle + pivot) % nums.length];
    if (cur == target) {
      return true;
    }
    if (cur < target) {
      start = middle + 1;
    }
    if (target < cur) {
      end = middle - 1;
    }
  }

  return false;
};

// @lc code=end

export default search;

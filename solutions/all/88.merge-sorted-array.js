/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m);
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < n) {
    if (nums1[i] <= nums2[j]) {
      i++;
      continue;
    }

    nums1.splice(i, 0, nums2[j]);
    i++;
    j++;
  }

  if (j < n) {
    nums1.splice(i, 0, ...nums2.slice(j));
  }
};
// @lc code=end

module.exports = merge;

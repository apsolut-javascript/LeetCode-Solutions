/*
 * @lc app=leetcode id=532 lang=javascript
 *
 * [532] K-diff Pairs in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  let ans = 0;
  let start = 0;
  let end = 1;
  nums.sort((a, b) => a - b);
  while (end < nums.length) {
    if (start == end) {
      end++;
      continue;
    }
    const diff = nums[end] - nums[start];
    if (diff == k) {
      ans++;
    }
    if (diff <= k) {
      do {
        end++;
      } while (nums[end - 1] == nums[end]);
    } else {
      do {
        start++;
      } while (nums[start - 1] == nums[start]);
    }
  }

  return ans;
};

module.exports = findPairs;
// @lc code=end

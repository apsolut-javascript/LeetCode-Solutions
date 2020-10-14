/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  function calc(start, end) {
    const sum = [0, 0, ...nums.slice(start, start + 2)];
    for (let i = start + 2; i < end; i++) {
      sum.push(Math.max(sum[sum.length - 2], sum[sum.length - 3]) + nums[i]);
    }

    return Math.max(sum[sum.length - 1], sum[sum.length - 2]);
  }

  return Math.max(calc(0, nums.length - 1), calc(1, nums.length));
};

module.exports = rob;
// @lc code=end

/*
 * @lc app=leetcode id=673 lang=javascript
 *
 * [673] Number of Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  if (nums.length < 2) return nums.length;

  let maxLength = 1;
  let maxCount = 1;
  const dp = [[1, 1]];
  for (let i = 1; i < nums.length; i++) {
    const val = nums[i];

    let longest = 1;
    let count = 1;
    for (let j = i - 1; j >= 0; j--) {
      const target = nums[j];
      if (target < val) {
        if (dp[j][0] + 1 > longest) {
          longest = dp[j][0] + 1;
          count = dp[j][1];
        } else if (dp[j][0] + 1 == longest) {
          count += dp[j][1];
        }
      }
    }

    dp.push([longest, count]);
    if (longest == maxLength) {
      maxCount += count;
    }
    if (longest > maxLength) {
      maxLength = longest;
      maxCount = count;
    }
  }

  return maxCount;
};

module.exports = findNumberOfLIS;

// @lc code=end

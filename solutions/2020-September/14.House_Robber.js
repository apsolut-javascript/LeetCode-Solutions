/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0;
  const dp = [];
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    dp[i] = val + Math.max(dp[i - 2] || 0, dp[i - 3] || 0);
  }

  return Math.max.apply(null, dp);
};

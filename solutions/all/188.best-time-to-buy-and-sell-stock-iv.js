/*
 * @lc app=leetcode id=188 lang=javascript
 *
 * [188] Best Time to Buy and Sell Stock IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (k == 0 || prices.length == 0) return 0;
  const { length } = prices;
  if (k >= length >> 1) {
    let isHolding = false;
    let profix = 0;
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < prices[i + 1] && !isHolding) {
        isHolding = true;
        profix -= prices[i];
      } else if (prices[i] > prices[i + 1] && isHolding) {
        profix += prices[i];
        isHolding = false;
      } else if (isHolding && i == prices.length - 1) {
        profix += prices[i];
      }
    }

    return profix;
  }

  const dp = Array.from({ length: k + 1 }, b => [0, Number.MIN_SAFE_INTEGER]);
  for (let i = 1; i <= prices.length; i++) {
    const val = prices[i - 1];
    for (let j = 0; j <= k; j++) {
      const notHolding = Math.max(dp[j][0], dp[j][1] + val);
      let holding = dp[j][1];
      if (j > 0) {
        holding = Math.max(dp[j][1], dp[j - 1][0] - val);
      }
      dp[j][0] = notHolding;
      dp[j][1] = holding;
    }
  }

  return dp.reduce((p, c) => Math.max(p, Math.max(...c)), 0);
};

module.exports = maxProfit;

// @lc code=end

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const dp = [];
  return findMaxProfit(prices, 0, dp);
};

function findMaxProfit(prices, start, dp) {
  if (dp[start] != null) return dp[start];

  let maxSum = 0;
  for (let i = start; i < prices.length - 1; i++) {
    if (prices[i] >= prices[i + 1]) continue;
    if (dp[i] != null) {
      if (dp[i] > maxSum) {
        maxSum = dp[i];
      }
      continue;
    }

    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] >= prices[j] || prices[j + 1] >= prices[j]) continue;

      let sum = prices[j] - prices[i];
      sum += findMaxProfit(prices, j + 1, dp);
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  dp[start] = maxSum;
  return maxSum;
}

module.exports = maxProfit;

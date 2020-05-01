/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  let isBuy = true;
  let curPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    if (isBuy) {
      if (prices[i + 1] <= prices[i]) continue;
      curPrice = prices[i];
      isBuy = false;
    } else {
      if (prices[i + 1] >= prices[i]) continue;
      profit += prices[i] - curPrice;
      isBuy = true;
    }
  }

  return profit;
};

module.exports = maxProfit;

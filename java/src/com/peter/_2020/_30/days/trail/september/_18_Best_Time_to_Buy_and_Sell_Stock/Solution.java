package com.peter._2020._30.days.trail.september._18_Best_Time_to_Buy_and_Sell_Stock;

public class Solution {
    public int maxProfit(int[] prices) {
        if (prices.length < 1) return 0;
        int max = 0;
        int minBuyIn = prices[0];
        for (int i = 1; i < prices.length; i++) {
            minBuyIn = Math.min(minBuyIn, prices[i]);
            max = Math.max(max, prices[i] - minBuyIn);
        }

        return max;
    }
}

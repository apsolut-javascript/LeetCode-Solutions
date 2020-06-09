package com.peter._2020._30.days.trail.june._7_Coin_Change_2;

import java.util.Arrays;
import java.util.HashMap;

public class Solution {
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.change(500, new int[]{3, 5, 7, 8, 9, 10, 11}));
    }

    public int change(int amount, int[] coins) {
        if (amount == 0) return 1;

        HashMap<Integer, int[]> dp = new HashMap<>();
        return recursiveGetChange(amount, coins, 0, dp);
    }

    private int recursiveGetChange(int amount, int[] coins, int index, HashMap<Integer, int[]> dp) {
        if (amount == 0 || index == coins.length) return 0;

        if (dp.containsKey(amount)) {
            var cache = dp.get(amount);
            if (cache[index] != -1) return cache[index];
        }

        var result = 0;
        var coin = coins[index];
        var count = amount / coin;
        if (amount % coin == 0) result++;
        for (int i = 0; i <= count; i++) {
            result += recursiveGetChange(amount - coin * i, coins, index + 1, dp);
        }

        if (!dp.containsKey(amount)) {
            var cache = new int[coins.length];
            Arrays.fill(cache, -1);
            dp.put(amount, cache);
        }
        dp.get(amount)[index] = result;

        return result;
    }
}

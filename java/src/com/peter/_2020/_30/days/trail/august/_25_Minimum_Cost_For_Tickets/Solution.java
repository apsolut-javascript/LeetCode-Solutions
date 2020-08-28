package com.peter._2020._30.days.trail.august._25_Minimum_Cost_For_Tickets;

import java.util.*;

public class Solution {
    public int mincostTickets(int[] days, int[] costs) {
        return new Sub(days, costs).getValue();
    }

    class Sub {
        private final TreeMap<Integer, Integer> dayIndex = new TreeMap<>();
        private final int[] dp;
        private final int[] days;
        private final int[] costs;

        public Sub(int[] days, int[] costs) {
            this.days = days;
            this.costs = costs;
            for (int i = 0; i < days.length; i++) {
                dayIndex.put(days[i], i);
            }

            dp = new int[days.length];
        }

        public int getValue() {
            for (int i = dp.length - 1; i >= 0; i--) {
                int cost1 = getNextVal(i, 1) + costs[0];
                int cost7 = getNextVal(i, 7) + costs[1];
                int cost30 = getNextVal(i, 30) + costs[2];

                dp[i] = Math.min(Math.min(cost1, cost7), cost30);
            }

            return dp[0];
        }

        private int getNextVal(int startDayIndex, int daysAdd) {
            Map.Entry<Integer, Integer> nextTravelDayEntry = dayIndex.ceilingEntry(days[startDayIndex] + daysAdd);
            if (nextTravelDayEntry == null) {
                return 0;
            }

            return dp[nextTravelDayEntry.getValue()];
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        assert solution.mincostTickets(new int[]{1, 4, 6, 7, 8, 20}, new int[]{7, 2, 15}) == 6;
        assert solution.mincostTickets(new int[]{1, 4, 6, 7, 8, 20}, new int[]{2, 7, 15}) == 11;
        assert solution.mincostTickets(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31}, new int[]{2, 7, 15}) == 17;
        assert solution.mincostTickets(new int[]{1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21,
                24, 25, 27, 28, 29, 30, 31, 34, 37, 38, 39, 41, 43, 44, 45, 47, 48, 49, 54, 57, 60, 62, 63, 66, 69,
                70, 72, 74, 76, 78, 80, 81, 82, 83, 84, 85, 88, 89, 91, 93, 94, 97, 99}, new int[]{9, 38, 134}) == 423;
    }

}

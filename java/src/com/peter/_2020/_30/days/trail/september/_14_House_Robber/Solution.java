package com.peter._2020._30.days.trail.september._14_House_Robber;

import java.util.ArrayList;

public class Solution {
    public int rob(int[] nums) {
        if (nums.length == 0) return 0;

        int lastVal1 = 0;
        int lastVal2 = 0;
        int lastVal3 = 0;
        for (int i = 0; i < nums.length; i++) {
            int val = nums[i] + Math.max(lastVal1, lastVal2);
            lastVal1 = lastVal2;
            lastVal2 = lastVal3;
            lastVal3 = val;
        }

        return Math.max(lastVal2, lastVal3);
    }
}

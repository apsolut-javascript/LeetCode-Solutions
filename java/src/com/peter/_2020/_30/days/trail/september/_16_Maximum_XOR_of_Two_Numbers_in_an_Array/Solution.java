package com.peter._2020._30.days.trail.september._16_Maximum_XOR_of_Two_Numbers_in_an_Array;

public class Solution {
    public int findMaximumXOR(int[] nums) {
        if (nums.length < 1) return 0;
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < nums.length; i++) {
            for (int j = i; j < nums.length; j++) {
                int val = nums[i] ^ nums[j];
                if (val > max) max = val;
            }
        }

        return max;
    }
}

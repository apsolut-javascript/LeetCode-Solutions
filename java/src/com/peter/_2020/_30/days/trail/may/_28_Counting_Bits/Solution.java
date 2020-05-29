package com.peter._2020._30.days.trail.may._28_Counting_Bits;

import java.util.Arrays;

public class Solution {
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(Arrays.toString(solution.countBits(5)));
    }

    public int[] countBits(int num) {
        var result = new int[num + 1];
        int end = 1, offset = 0;
        for (int i = 1; i < result.length; i++) {
            if (i == end) {
                end <<= 1;
                offset = 0;
            }

            result[i] = 1 + result[offset++];
        }
        return result;
    }
}

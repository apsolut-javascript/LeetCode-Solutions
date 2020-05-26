package com.peter._2020._30.days.trail.may._26_Contiguous_Array;

import java.util.Arrays;

public class Solution {
    public static void main(String[] args) {
        Solution solution = new Solution();
        assert solution.findMaxLength(new int[]{0, 1}) == 2;
        assert solution.findMaxLength(new int[]{0, 1, 0}) == 2;
        assert solution.findMaxLength(new int[]{0, 1, 0, 1}) == 4;
        assert solution.findMaxLength(new int[]{0, 0, 1, 0, 0, 0, 1, 1}) == 6;
        assert solution.findMaxLength(new int[]{0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1}) == 68;
    }

    public int findMaxLength(int[] nums) {
        if (nums.length == 0) return 0;
        int[] ones = new int[nums.length];
        var max = nums.length % 2 == 0 ? nums.length : nums.length - 1;
        ones[0] = nums[0];
        for (int i = 1; i < nums.length; i++) {
            ones[i] = ones[i - 1] + nums[i];
        }

        while (max > 0) {
            var val = max / 2;
            if (ones[max - 1] == val) break;
            for (int i = 1; i + max - 1 < nums.length; i++) {
                if (ones[i + max - 1] - ones[i - 1] == val) return max;
            }
            max -= 2;
        }

        return max;
    }
}

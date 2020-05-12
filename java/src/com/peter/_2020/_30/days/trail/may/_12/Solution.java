package com.peter._2020._30.days.trail.may._12;

public class Solution {
    public int singleNonDuplicate(int[] nums) {
        int cur = nums[0];
        int count = 1;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == nums[i - 1]) {
                count++;
                continue;
            }

            if (count == 1) return cur;

            cur = nums[i];
            count = 1;
        }

       return cur;
    }
}

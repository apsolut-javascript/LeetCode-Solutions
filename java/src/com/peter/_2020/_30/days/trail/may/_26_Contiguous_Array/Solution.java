package com.peter._2020._30.days.trail.may._26_Contiguous_Array;

import java.util.HashMap;

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
        int max = 0, count = 0;
        var map = new HashMap<Integer, Integer>();
        map.put(0, -1);
        for (int i = 0; i < nums.length; i++) {
            count += nums[i] == 0 ? -1 : 1;
            if (map.containsKey(count)) {
                int dist = i - map.get(count);
                if (dist > max) {
                    max = dist;
                }
            } else {
                map.put(count, i);
            }
        }

        return max;
    }
}

package com.peter._2020._30.days.trail.june._10_Search_Insert_Position;

import java.util.Arrays;

public class Solution {
    public static void main(String[] args) {
        Solution solution = new Solution();
        assert solution.searchInsert(new int[]{1, 3, 5, 6}, 5) == 2;
        assert solution.searchInsert(new int[]{1, 3, 5, 6}, 2) == 1;
        assert solution.searchInsert(new int[]{1, 3, 5, 6}, 7) == 4;
        assert solution.searchInsert(new int[]{1, 3, 5, 6}, 0) == 0;
    }

    public int searchInsert(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l <= r) {
            var mid = (l + r) >>> 1;
            int val = nums[mid];
            if (val == target) return mid;
            if (val < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return l;
    }
}

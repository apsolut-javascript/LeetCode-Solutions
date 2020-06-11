package com.peter._2020._30.days.trail.june._11_Sort_Colors;

import java.util.Arrays;

public class Solution {
    public static void main(String[] args) {
        Solution solution = new Solution();

        solution.print(new int[]{2, 0, 2, 1, 1, 0});
        solution.print(new int[]{0, 0});
        solution.print(new int[]{2, 0});
        solution.print(new int[]{0, 2});
        solution.print(new int[]{1, 2, 2, 2, 2, 0, 0, 0, 1, 1});
    }

    private void print(int[] nums) {
        sortColors(nums);
        System.out.println("nums = " + Arrays.toString(nums));
    }

    public void sortColors(int[] nums) {
        int left = 0, right = nums.length - 1;
        while (left < nums.length && nums[left] == 0) left++;
        for (int i = left + 1; i < nums.length; i++) {
            if (nums[i] != 0) continue;

            nums[i] = nums[left];
            nums[left] = 0;
            left++;
        }

        while (right >= 0 && nums[right] == 2) right--;
        if (left >= right) return;
        for (int i = right - 1; i >= left; i--) {
            if (nums[i] != 2) continue;

            nums[i] = nums[right];
            nums[right] = 2;
            right--;
        }
    }
}

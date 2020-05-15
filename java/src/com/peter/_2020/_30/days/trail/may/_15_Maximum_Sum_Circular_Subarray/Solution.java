package com.peter._2020._30.days.trail.may._15_Maximum_Sum_Circular_Subarray;

public class Solution {
    public static void main(String[] args) {
        var s = new Solution();

        assert s.maxSubarraySumCircular(new int[]{1, -2, 3, -2}) == 3;
        assert s.maxSubarraySumCircular(new int[]{5, -3, 5}) == 10;
        assert s.maxSubarraySumCircular(new int[]{3, -1, 2, -1}) == 4;
        assert s.maxSubarraySumCircular(new int[]{3, -2, 2, -3}) == 3;
        assert s.maxSubarraySumCircular(new int[]{-2, -3, -1}) == -1;
        assert s.maxSubarraySumCircular(new int[]{-2, 4, -5, 4, -5, 9, 4}) == 15;
        assert s.maxSubarraySumCircular(new int[]{0, 2, -2}) == 2;

        System.out.println("Congrats!");
    }

    public int maxSubarraySumCircular(int[] A) {
        var max = A[0];

        for (int i = 0; i < A.length; i++) {
            int cur = A[i];
            if (cur > max) {
                max = cur;
            }
            if (cur <= 0) {
                continue;
            }

            var sum = cur;
            for (int j = i + 1; j % A.length != i; j++) {
                sum += A[j % A.length];
                if (sum > max) {
                    max = sum;
                }

                if (sum < 0) {
                    if (j < A.length) i = j;
                    break;
                }
            }
        }

        return max;
    }
}

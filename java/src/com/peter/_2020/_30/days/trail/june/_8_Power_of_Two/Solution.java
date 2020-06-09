package com.peter._2020._30.days.trail.june._8_Power_of_Two;

public class Solution {
    public static void main(String[] args) {
        Solution solution = new Solution();
        assert solution.isPowerOfTwo(1);
        assert solution.isPowerOfTwo(16);
        assert !solution.isPowerOfTwo(218);
    }

    public boolean isPowerOfTwo(int n) {
        while (n > 0) {
            if (n == 1) return true;
            if (n % 2 != 0) return false;
            n >>= 1;
        }

        return false;
    }
}

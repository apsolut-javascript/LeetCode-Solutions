package com.peter._2020._30.days.trail.may._18.Permutation_in_String;

import java.util.ArrayList;
import java.util.Arrays;

public class Solution {
    public static void main(String[] args) {
        var s = new Solution();
        assert s.checkInclusion("ab", "oba");
        assert s.checkInclusion("ab", "eidbaooo");
        assert !s.checkInclusion("ab", "eidboaooo");

    }

    public boolean checkInclusion(String s1, String s2) {
        var aPoint = "a".codePointAt(0);
        var chars = new int[26];
        s1.chars().forEach(a -> {
            chars[a - aPoint]++;
        });

        var charCount = Arrays.stream(chars).filter(a -> a > 0).count();

        var zeros = 0;
        for (int i = 0; i < s2.length(); i++) {
            var newPoint = --chars[s2.codePointAt(i) - aPoint];
            if (newPoint == 0) zeros++;
            else if (newPoint == -1) zeros--;
            if (zeros == charCount) {
                return true;
            }

            if (i >= s1.length() - 1) {
                newPoint = ++chars[s2.codePointAt(i - s1.length() + 1) - aPoint];
                if (newPoint == 1) zeros--;
                else if (newPoint == 0) zeros++;
            }
        }

        return false;
    }
}

package com.peter._2020._30.days.trail.june._9_Is_Subsequence;

import java.util.Arrays;

public class Solution {
    public static void main(String[] args) {
        Solution solution = new Solution();
        assert solution.isSubsequence("abc", "ahbgdc");
        assert !solution.isSubsequence("axc", "ahbgdc");
        assert solution.isSubsequence("", "ahbgdc");
        assert !solution.isSubsequence("asdf", "");
    }

    public boolean isSubsequence(String s, String t) {
        int i = 0, j = 0;
        while (i < s.length() && j < t.length()) {
            if (s.charAt(i) == t.charAt(j)) i++;
            j++;
        }

        return i == s.length();
    }
}

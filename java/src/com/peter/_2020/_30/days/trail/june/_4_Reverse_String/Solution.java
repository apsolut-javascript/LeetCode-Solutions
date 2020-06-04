package com.peter._2020._30.days.trail.june._4_Reverse_String;

public class Solution {
    public void reverseString(char[] s) {
        int l = 0, r = s.length - 1;
        while (l < r) {
            var c = s[l];
            if (s[r] != c) {
                s[l] = s[r];
                s[r] = c;
            }

            l++;
            r--;
        }
    }
}

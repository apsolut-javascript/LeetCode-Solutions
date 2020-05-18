package com.peter._2020._30.days.trail.may._17_Find_All_Anagrams_in_a_String;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

public class Solution {
    public static void main(String[] args) {
        var s = new Solution();
        System.out.println(s.findAnagrams("cbaebabacd", "abc"));
        System.out.println(s.findAnagrams("abab", "ab"));
    }

    public List<Integer> findAnagrams(String s, String p) {
        var result = new ArrayList<Integer>();
        var aPoint = "a".codePointAt(0);
        var chars = new int[26];
        p.chars().forEach(a -> {
            chars[a - aPoint]++;
        });

        var charCount = p.chars().distinct().count();

        var zeros = 0;
        for (int i = 0; i < s.length(); i++) {
            int point = s.codePointAt(i) - aPoint;
            chars[point]--;
            if (chars[point] == 0) zeros++;
            if (chars[point] == -1) zeros--;
            if (zeros == charCount) {
                result.add(i - p.length() + 1);
            }

            if (i >= p.length() - 1) {
                var oldPoint = s.codePointAt(i - p.length() + 1) - aPoint;
                chars[oldPoint]++;
                if (chars[oldPoint] == 1) zeros--;
                if (chars[oldPoint] == 0) zeros++;
            }
        }

        return result;
    }
}

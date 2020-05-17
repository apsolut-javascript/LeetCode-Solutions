package com.peter._2020._30.days.trail.may._17_Find_All_Anagrams_in_a_String;

import java.util.ArrayList;
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
        var chars = new HashMap<Integer, Integer>();
        p.chars().forEach(a -> {
            chars.put(a, chars.getOrDefault(a, 0) + 1);
        });

        var zeros = 0;
        for (int i = 0; i < s.length(); i++) {
            int point = s.codePointAt(i);
            if (chars.containsKey(point)) {
                var newRemain = chars.compute(point, (k, v) -> v - 1);
                if (newRemain == 0) zeros++;
                if (newRemain == -1) zeros--;
                if (newRemain == 0 && zeros == chars.size()) {
                    result.add(i - p.length() + 1);
                }
            }

            if (i >= p.length() - 1) {
                var newRemain = chars.computeIfPresent(s.codePointAt(i - p.length() + 1), (k, v) -> v + 1);
                if (newRemain == null) continue;
                if (newRemain == 1) zeros--;
                if (newRemain == 0) zeros++;
            }
        }

        return result;
    }
}

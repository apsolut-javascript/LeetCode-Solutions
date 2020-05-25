package com.peter._2020._30.days.trail.may._22_Sort_Characters_By_Frequency;

import java.util.*;
import java.util.stream.Collectors;

public class Solution {
    public static void main(String[] args) {
        Solution solution = new Solution();
        assert solution.frequencySort("tree").equals("eert");
    }

    public String frequencySort(String s) {
        var frequency = new HashMap<Character, Integer>();
        for (int i = 0; i < s.length(); i++) {
            var c = s.charAt(i);
            frequency.put(c, frequency.getOrDefault(c, 0) + 1);
        }
        List<Map.Entry<Character, Integer>> entries = new ArrayList<>(frequency.entrySet());
        entries.sort((o1, o2) -> o2.getValue() - o1.getValue());
        var sb = new StringBuilder(s.length());
        for (Map.Entry<Character, Integer> e : entries) {
            sb.append(String.valueOf(e.getKey()).repeat(e.getValue()));
        }

        return sb.toString();
    }
}

package com.peter._2020._30.days.trail.september._19_Sequential_Digits;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Solution {
    public List<Integer> sequentialDigits(int low, int high) {
        if (low > high || low > 123456789) return Collections.emptyList();

        int next = findNextNumber(low);
        if (next > high) return Collections.emptyList();
        List<Integer> result = new ArrayList<>();
        result.add(next);
        result.addAll(sequentialDigits(next + 1, high));
        return result;
    }

    private int findNextNumber(int low) {
        String s = String.valueOf(low);
        StringBuilder sb = new StringBuilder();
        int start = (s.charAt(0) - '0');
        int val = 0;
        int length = s.length();
        while (true) {
            sb.delete(0, sb.length());
            for (int i = start; sb.length() < length; i++) {
                if (i > 9) break;
                sb.append(i);
            }
            val = Integer.parseInt(sb.toString());
            if (val >= low) break;
            if (++start > 9) {
                start = 1;
                length++;
            }
        }

        return val;
    }
}

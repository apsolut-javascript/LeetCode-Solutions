package com.peter._2020._30.days.trail.september._13_Insert_Interval;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        if (intervals.length == 0) return new int[][]{newInterval};
        List<int[]> ans = new ArrayList<>(intervals.length);
        int start = newInterval[0];
        int end = newInterval[1];
        int index = -1;
        for (int i = 0; i < intervals.length; i++) {
            int[] val = intervals[i];
            int l = val[0];
            int r = val[1];
            if (r < start || end < l) {
                if (index == -1 && end < l) {
                    ans.add(newInterval);
                    index = i;
                }
                ans.add(val);
            } else {
                if (index == -1) {
                    index = i;
                    val[0] = Math.min(val[0], newInterval[0]);
                    val[1] = Math.max(val[1], newInterval[1]);
                    ans.add(val);
                }
                int[] overlapped = ans.get(index);
                overlapped[0] = Math.min(val[0], overlapped[0]);
                overlapped[1] = Math.max(val[1], overlapped[1]);
            }
        }

        if (index == -1) {
            ans.add(newInterval);
        }

        return ans.toArray(new int[0][]);
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println("result = " + Arrays.deepToString(solution.insert(new int[][]{{1, 3}, {6, 9}}, new int[]{2
                , 5})));
        System.out.println("result = " + Arrays.deepToString(solution.insert(new int[][]{{1, 2}, {3, 5}, {6, 7}, {8,
                        10}, {12, 16}}
                , new int[]{4, 8})));
    }
}

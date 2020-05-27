package com.peter._2020._30.days.trail.may._23_Interval_List_Intersections;

import java.util.ArrayList;

public class Solution {
    public int[][] intervalIntersection(int[][] A, int[][] B) {
        var result = new ArrayList<int[]>();
        int i = 0, j = 0;
        while (i < A.length && j < B.length) {
            var a = A[i];
            var b = B[j];
            if (b[1] < a[0]) {
                j++;
            } else if (a[1] < b[0]) {
                i++;
            } else {
                result.add(new int[]{Math.max(a[0], b[0]), Math.min(a[1], b[1])});
                if (a[1] < b[1]) {
                    i++;
                } else {
                    j++;
                }
            }
        }

        var arr = new int[result.size()][];
        for (int k = 0; k < result.size(); k++) {
            arr[k] = result.get(k);
        }
        return arr;
    }
}

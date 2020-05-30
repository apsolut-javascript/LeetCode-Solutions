package com.peter._2020._30.days.trail.may._30_K_Closest_Points_to_Origin;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

public class Solution {
    public static void main(String[] args) {
        Solution solution = new Solution();
        for (int[] ints : solution.kClosest(new int[][]{{3, 3}, {5, -1}, {-2, 4}}, 2)) {
            System.out.println(Arrays.toString(ints));
        }

        for (int[] ints : solution.kClosest(new int[][]{{1, 3}, {-2, 2}, {2, -2}}, 2)) {
            System.out.println(Arrays.toString(ints));
        }
    }

    public int[][] kClosest(int[][] points, int K) {
        if (K == points.length) return points;

        var pows = new int[points.length];
        for (int i = 0; i < points.length; i++) {
            var p = points[i];
            pows[i] = p[0] * p[0] + p[1] * p[1];
        }

        var sortedPows = pows.clone();
        Arrays.sort(sortedPows);
        var max = sortedPows[K - 1];

        var result = new ArrayList<int[]>();
        for (int i = 0; i < pows.length; i++) {
            if (pows[i] > max) continue;

            result.add(points[i]);
            if (result.size() == K) break;
        }

        return result.toArray(new int[K][]);
    }
}

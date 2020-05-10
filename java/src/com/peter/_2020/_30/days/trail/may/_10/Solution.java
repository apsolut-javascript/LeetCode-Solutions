package com.peter._2020._30.days.trail.may._10;

import java.util.*;

public class Solution {
    public static void main(String[] args) {
        var s = new Solution();
        assert s.findJudge(2, new int[][]{{1, 2}}) == 2;
        assert s.findJudge(3, new int[][]{{1, 3}, {2, 3}}) == 3;
        assert s.findJudge(3, new int[][]{{1, 3}, {2, 3}, {3, 1}}) == -1;
        assert s.findJudge(1, new int[][]{}) == 1;
    }

    public int findJudge(int N, int[][] trust) {
        var result = new int[N + 1];
        Arrays.fill(result, 0);
        for (var t : trust) {
            result[t[0]] = -1;
            var i = t[1];
            var v = result[i];
            if (v == -1) continue;

            result[i] = v + 1;
        }

        for (int i = 1; i < result.length; i++) {
            if (result[i] == N - 1) return i;
        }

        return -1;
    }
}

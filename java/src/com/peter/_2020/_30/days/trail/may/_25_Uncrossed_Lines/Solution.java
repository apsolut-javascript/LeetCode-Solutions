package com.peter._2020._30.days.trail.may._25_Uncrossed_Lines;

import java.util.*;
import java.util.stream.Collectors;

public class Solution {
    public static void main(String[] args) {
        var s = new Solution();
        assert s.maxUncrossedLines(new int[]{1, 4, 2}, new int[]{1, 2, 4}) == 2;
        assert s.maxUncrossedLines(new int[]{10, 5, 2, 1, 5, 2}, new int[]{2, 5, 1, 2, 5}) == 3;
        assert s.maxUncrossedLines(new int[]{1, 9, 2, 5, 1}, new int[]{1, 3, 7, 1, 7, 5}) == 2;
        assert s.maxUncrossedLines(new int[]{1, 1, 2, 1, 2}, new int[]{1, 3, 2, 3, 1}) == 3;
        assert s.maxUncrossedLines(new int[]{1, 1, 3, 5, 3, 3, 5, 5, 1, 1}, new int[]{2, 3, 2, 1, 3, 5, 3, 2, 2, 1}) == 5;
        assert s.maxUncrossedLines(new int[]{4, 1, 2, 5, 1, 5, 3, 4, 1, 5}, new int[]{3, 1, 1, 3, 2, 5, 2, 4, 1, 3, 2, 2, 5, 5, 3, 5, 5, 1, 2, 1}) == 7;
    }

    public int maxUncrossedLines(int[] A, int[] B) {
        var dp = new int[A.length][B.length];
        for (int i = A.length - 1; i >= 0; i--) {
            for (int j = B.length - 1; j >= 0; j--) {
                findCrossedLines(A, B, dp, i, j);
            }
        }

        return dp[0][0];
    }

    private void findCrossedLines(int[] A, int[] B, int[][] dp, int i, int j) {
        var max = A[i] == B[j] ? 1 : 0;

        if (i + 1 < A.length && j + 1 < B.length) {
            max = Math.max(max + dp[i + 1][j + 1], dp[i][j + 1]);
            max = Math.max(max, dp[i + 1][j]);
        } else if (i + 1 < A.length && j == B.length - 1 && max < dp[i + 1][j]) {
            max = dp[i + 1][j];
        } else if (j + 1 < B.length && i == A.length - 1 && max < dp[i][j + 1]) {
            max = dp[i][j + 1];
        }

        dp[i][j] = max;
    }
}

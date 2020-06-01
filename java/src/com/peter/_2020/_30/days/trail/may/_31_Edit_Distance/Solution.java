package com.peter._2020._30.days.trail.may._31_Edit_Distance;

import javax.management.remote.rmi.RMIJRMPServerImpl;
import java.util.Arrays;

public class Solution {
    public static void main(String[] args) {
        Solution solution = new Solution();
        assert solution.minDistance("horse", "ros") == 3;
        assert solution.minDistance("intention", "execution") == 5;
        assert solution.minDistance("park", "spake") == 3;
        assert solution.minDistance("sea", "eat") == 2;
        assert solution.minDistance("plasma", "altruism") == 6;
        assert solution.minDistance("trinitrophenylmethylnitramine", "dinitrophenylhydrazine") == 10;
        assert solution.minDistance("pneumonoultramicroscopicsilicovolcanoconiosis", "ultramicroscopically") == 27;
    }

    public int minDistance(String word1, String word2) {
        var dp = new int[word1.length()][word2.length()];
        for (int[] arr : dp) {
            Arrays.fill(arr, -1);
        }
        return dfs(word1, word2, 0, 0, dp);
    }

    private int dfs(String w1, String w2, int i, int j, int[][] dp) {
        if (w1.length() == i) return w2.length() - j;
        if (w2.length() == j) return w1.length() - i;

        if (dp[i][j] != -1) return dp[i][j];

        if (w1.charAt(i) == w2.charAt(j)) {
            int val = dfs(w1, w2, i + 1, j + 1, dp);
            dp[i][j] = val;
            return val;
        }

        int dist = Math.min(dfs(w1, w2, i + 1, j, dp), dfs(w1, w2, i, j + 1, dp));
        int val = 1 + Math.min(dist, dfs(w1, w2, i + 1, j + 1, dp));
        dp[i][j] = val;
        return val;
    }
}

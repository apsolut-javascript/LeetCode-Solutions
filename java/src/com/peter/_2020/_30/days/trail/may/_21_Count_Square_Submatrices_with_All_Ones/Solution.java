package com.peter._2020._30.days.trail.may._21_Count_Square_Submatrices_with_All_Ones;

import java.util.Arrays;

public class Solution {
    public static void main(String[] args) {
        var s = new Solution();
        assert s.countSquares(new int[][]{
                {0, 1, 1, 1},
                {1, 1, 1, 1},
                {0, 1, 1, 1}
        }) == 15;
        assert s.countSquares(new int[][]{
                {1, 0, 1},
                {1, 1, 0},
                {1, 1, 0}
        }) == 7;
    }

    public int countSquares(int[][] matrix) {
        var result = 0;

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] == 0) continue;

                result++;
                result += findSquares(matrix, i, j);
            }
        }

        return result;
    }

    private int findSquares(int[][] matrix, int row, int col) {
        var result = 0;
        var length = 1;
        while (true) {
            for (int i = row; i <= row + length; i++) {
                if (i == matrix.length) return result;
                for (int j = col; j <= col + length; j++) {
                    if (j == matrix[0].length) return result;
                    if (matrix[i][j] != 1) return result;
                }
            }
            result++;
            length++;
        }
    }
}

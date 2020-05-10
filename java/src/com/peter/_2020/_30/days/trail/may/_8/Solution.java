package com.peter._2020._30.days.trail.may._8;

public class Solution {
    public static void main(String[] args) {
        int[][] input = {{-4, -3}, {1, 0}, {3, -1}, {0, -1}, {-5, 2}};
        System.out.println(Solution.checkStraightLine(input));
    }

    public static boolean checkStraightLine(int[][] coordinates) {
        double slope = ((double) (coordinates[1][1] - coordinates[0][1])) / ((double) (coordinates[1][0] - coordinates[0][0]));

        for (int i = 2; i < coordinates.length; i++) {
            double curSlope = ((double) (coordinates[i][1] - coordinates[i - 1][1])) / ((double) (coordinates[i][0] - coordinates[i - 1][0]));
            if (curSlope != slope)
                return false;
        }

        return true;
    }

}

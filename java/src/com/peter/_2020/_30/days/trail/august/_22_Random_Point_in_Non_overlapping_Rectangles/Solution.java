package com.peter._2020._30.days.trail.august._22_Random_Point_in_Non_overlapping_Rectangles;

import java.util.Arrays;
import java.util.concurrent.ThreadLocalRandom;

public class Solution {
    private int totalSize;
    private final int[] rectSize;
    private final int[][] rects;

    public Solution(int[][] rects) {
        this.rects = rects;
        rectSize = new int[rects.length];
        for (int i = 0; i < rectSize.length; i++) {
            int[] a = rects[i];
            int size = (a[2] - a[0] + 1) * (a[3] - a[1] + 1);
            totalSize += size;
            rectSize[i] = totalSize;
        }
    }

    public int[] pick() {
        ThreadLocalRandom random = ThreadLocalRandom.current();
        int rand = random.nextInt(totalSize);
        int index = Arrays.binarySearch(rectSize, rand);
        if (index < 0) {
            index = -index - 1;
        } else {
            index++;
        }
        int[] rect = rects[index];
        int x = random.nextInt(rect[0], rect[2] + 1);
        int y = random.nextInt(rect[1], rect[3] + 1);

        return new int[]{x, y};
    }

    public static void main(String[] args) {
        Solution solution = new Solution(new int[][]{{82918473, -57180867, 82918476, -57180863}, {83793579, 18088559,
                83793580, 18088560}
                , {66574245, 26243152, 66574246, 26243153}, {72983930, 11921716, 72983934, 11921720}});
        for (int i = 0; i < 1000; i++) {
            System.out.println("solution.pick() = " + Arrays.toString(solution.pick()));
        }
    }
}

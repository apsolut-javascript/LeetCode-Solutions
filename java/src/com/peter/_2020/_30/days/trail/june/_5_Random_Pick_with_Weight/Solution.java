package com.peter._2020._30.days.trail.june._5_Random_Pick_with_Weight;

import java.util.Arrays;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class Solution {


    public static void main(String[] args) {
        System.out.println("new Random().nextInt(1) = " + new Random().nextInt(1));
        System.out.println("new Random().nextInt(1) = " + new Random().nextInt(1));
        System.out.println("new Random().nextInt(1) = " + new Random().nextInt(1));
        System.out.println("new Random().nextInt(2) = " + new Random().nextInt(2));
        System.out.println("new Random().nextInt(2) = " + new Random().nextInt(2));
        System.out.println("new Random().nextInt(2) = " + new Random().nextInt(2));
        Solution solution = new Solution(new int[]{3, 14, 1, 7});
        System.out.println(solution.pickIndex());
        System.out.println(solution.pickIndex());
        System.out.println(solution.pickIndex());
    }

    private final int[] weights;
    private final int bound;

    public Solution(int[] w) {
        for (int i = 1; i < w.length; i++) {
            w[i] += w[i - 1];
        }

        weights = w;
        bound = w[w.length - 1] + 1;
    }

    public int pickIndex() {
        var weight = ThreadLocalRandom.current().nextInt(1, bound);
        var index = Arrays.binarySearch(weights, weight);
        if (index >= 0) return index;
        return -index - 1;
    }
}

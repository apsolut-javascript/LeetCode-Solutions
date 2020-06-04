package com.peter._2020._30.days.trail.june._3_Two_City_Scheduling;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

class Solution {
    public int twoCitySchedCost(int[][] costs) {
        Arrays.sort(costs, (a, b) -> (a[0] - a[1]) - (b[0] - b[1]));
        final var n = costs.length / 2;
        return IntStream.range(0, costs.length)
                .map(i -> i < n ? costs[i][0] : costs[i][1]).sum();
    }
}
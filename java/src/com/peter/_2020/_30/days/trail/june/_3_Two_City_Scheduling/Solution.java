package com.peter._2020._30.days.trail.june._3_Two_City_Scheduling;

import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public int twoCitySchedCost(int[][] costs) {
        int N = costs.length / 2;
        while (true) {
            int left = 0, right = costs.length - 1;
            int pivot = costs[N][0] - costs[N][1];
            while (costs[left][0] - costs[left][1] <= pivot && left < N) left++;
            while (costs[right][0] - costs[right][1] >= pivot && N < right) right--;

            if (left == right) break;
            var temp = costs[left];
            costs[left] = costs[right];
            costs[right] = temp;
        }

        var cost = 0;
        for (int i = 0; i < costs.length; i++) {
            cost += i < N ? costs[i][0] : costs[i][1];
        }

        return cost;
    }
}
package com.peter._2020._30.days.trail.september._21_Car_Pooling;

import java.util.NavigableMap;
import java.util.TreeMap;

public class Solution {
    public boolean carPooling(int[][] trips, int capacity) {
        TreeMap<Integer, Integer> map = new TreeMap<>();
        for (int[] trip : trips) {
            map.computeIfPresent(trip[1], (k, v) -> v + trip[0]);
            map.putIfAbsent(trip[1], trip[0]);
            map.computeIfPresent(trip[2], (k, v) -> v - trip[0]);
            map.putIfAbsent(trip[2], -trip[0]);
        }

        int cur = 0;
        for (Integer passenger : map.values()) {
            cur += passenger;
            if (cur > capacity) return false;
        }

        return true;
    }
}

package com.peter._2020._30.days.trail.september._25_Largest_Number;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Solution {
    public String largestNumber(int[] nums) {
        List<String> numsStr = Arrays.stream(nums)
                .mapToObj(String::valueOf)
                .sorted((a, b) -> {
                    return (b + a).compareTo(a + b);
                }).collect(Collectors.toList());
        if (numsStr.get(0).equals("0")) return "0";

        return String.join("", numsStr);
    }
}

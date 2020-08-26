package com.peter._2020._30.days.trail.august._26_Fizz_Buzz;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Solution {
    public static final String fizz = "Fizz";
    public static final String buzz = "Buzz";
    public static final String fizzBuzz = "FizzBuzz";

    public List<String> fizzBuzz2(int n) {
        return Stream.iterate(1, a -> a + 1)
                .map(a -> {
                    if (a % 15 == 0) return fizzBuzz;
                    if (a % 3 == 0) return fizz;
                    if (a % 5 == 0) return buzz;

                    return a.toString();
                })
                .limit(n)
                .collect(Collectors.toList());
    }

    public List<String> fizzBuzz(int n) {
        ArrayList<String> list = new ArrayList<>(n);
        for (int i = 1; i <= n; i++) {
            String s = "";
            if (i % 3 == 0) s += "Fizz";
            if (i % 5 == 0) s += "Buzz";

            list.add(s.isBlank() ? Integer.toString(i) : s);
        }

        return list;
    }


}

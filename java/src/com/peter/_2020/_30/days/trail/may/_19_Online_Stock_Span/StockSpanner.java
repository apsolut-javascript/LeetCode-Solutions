package com.peter._2020._30.days.trail.may._19_Online_Stock_Span;

import java.util.ArrayDeque;
import java.util.Deque;

public class StockSpanner {
    private final Deque<int[]> history = new ArrayDeque<>();

    public int next(int price) {
        var count = 1;
        while (history.size() > 0) {
            var last = history.peek();
            if (last[0] > price) break;
            count += last[1];
            history.pop();
        }

        history.push(new int[]{price, count});

        return count;
    }
}

package com.peter;

import com.peter._2020._30.days.trail.may._16_Odd_Even_Linked_List.Solution;

import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.PriorityQueue;

public class Application {
    public static void main(String[] args) {
        var start = Instant.now();
        play();
        var end = Instant.now();
        var duration = Duration.between(start, end);
        System.out.println(duration.toMillis() + "ms");
    }

    private static void play() {
        var list = new ArrayList<Integer>();
        list.add(1);
        list.add(3);
        list.add(3);
        list.add(2);
        list.add(2);
        list.add(2);
        list.add(2);
        list.add(1);
        list.add(4);

        Collections.sort(list);
        System.out.println(Collections.binarySearch(list, 2));

        list.forEach(System.out::println);
    }
}

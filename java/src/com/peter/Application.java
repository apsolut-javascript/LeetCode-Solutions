package com.peter;

import com.peter._2020._30.days.trail.may._16_Odd_Even_Linked_List.Solution;

import java.time.Duration;
import java.time.Instant;

public class Application {
    public static void main(String[] args) {
        var start = Instant.now();
        play();
        var end = Instant.now();
        var duration = Duration.between(start, end);
        System.out.println(duration.toMillis() + "ms");
    }

    private static void play() {
        for (int i : "aA".chars().toArray()) {
            System.out.println(i);
        }
    }
}

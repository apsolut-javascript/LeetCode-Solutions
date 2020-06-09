package com.peter;

import com.peter._2020._30.days.trail.may._16_Odd_Even_Linked_List.Solution;
import com.peter.utils.TreeNode;

import java.time.Duration;
import java.time.Instant;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;

public class Application {
    public static void main(String[] args) {
        var start = Instant.now();
        play();
        var end = Instant.now();
        var duration = Duration.between(start, end);
        System.out.println(duration.toMillis() + "ms");
    }

    private static void play() {
    }
}

package com.peter;

import com.peter._2020._30.days.trail.may._16_Odd_Even_Linked_List.Solution;
import com.peter.utils.TreeNode;

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
        var root = TreeNode.createTree("[5,3,6,2,4,null,null,1]");
        System.out.println(root.val);
        System.out.println(root.left.val);
        System.out.println(root.right.val);
    }
}

package com.peter._2020._30.days.trail.may._29_Course_Schedule;

import java.util.*;
import java.util.stream.Collectors;

public class Solution {
    public static void main(String[] args) {
        Solution solution = new Solution();
        assert solution.canFinish(2, new int[][]{{1, 0}});
        assert !solution.canFinish(2, new int[][]{{1, 0}, {0, 1}});
        assert !solution.canFinish(3, new int[][]{{1, 0}, {1, 2}, {0, 1}});
        assert solution.canFinish(3, new int[][]{{1, 0}, {2, 0},});
    }

    public boolean canFinish(int numCourses, int[][] prerequisites) {
        if (prerequisites.length < 2) return true;
        List<Set<Integer>> courses = new ArrayList<>(numCourses);
        for (int i = 0; i < numCourses; i++) {
            courses.add(new HashSet<>());
        }

        for (int[] p : prerequisites) {
            courses.get(p[0]).add(p[1]);
        }

        while (true) {
            var found = false;
            var fulfilledCount = 0;
            for (Set<Integer> c : courses) {
                if (c.isEmpty()) {
                    fulfilledCount++;
                    continue;
                }

                List<Integer> fulfilled = c.stream().filter(a -> courses.get(a).isEmpty()).collect(Collectors.toList());
                if (fulfilled.isEmpty()) continue;

                c.removeAll(fulfilled);
                found = true;
            }

            if (fulfilledCount == courses.size()) return true;

            if (!found) return false;
        }
    }
}

package com.peter._2020._30.days.trail.june._12_Insert_Delete_GetRandom;

import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.ThreadLocalRandom;

public class RandomizedSet {
    private final Set<Integer> set;

    /**
     * Initialize your data structure here.
     */
    public RandomizedSet() {
        set = new HashSet<>();
    }

    /**
     * Inserts a value to the set. Returns true if the set did not already contain the specified element.
     */
    public boolean insert(int val) {
        return set.add(val);
    }

    /**
     * Removes a value from the set. Returns true if the set contained the specified element.
     */
    public boolean remove(int val) {
        return set.remove(val);
    }

    /**
     * Get a random element from the set.
     */
    public int getRandom() {
        int i = ThreadLocalRandom.current().nextInt(set.size());
        return set.stream().skip(i).findFirst().orElse(0);
    }
}

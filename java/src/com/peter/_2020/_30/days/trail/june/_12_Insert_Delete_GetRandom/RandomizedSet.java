package com.peter._2020._30.days.trail.june._12_Insert_Delete_GetRandom;

import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

public class RandomizedSet {
    public static void main(String[] args) {
        var a = new RandomizedSet();
        a.insert(1);
        a.insert(2);
        a.remove(1);
        a.insert(3);
        a.remove(2);
        System.out.println("a.getRandom() = " + a.getRandom());
    }

    private final Map<Integer, Integer> map = new HashMap<>();
    private final List<Integer> list = new ArrayList<>();

    /**
     * Inserts a value to the set. Returns true if the set did not already contain the specified element.
     */
    public boolean insert(int val) {
        if (map.containsKey(val)) return false;
        map.put(val, list.size());
        list.add(val);
        return true;
    }

    /**
     * Removes a value from the set. Returns true if the set contained the specified element.
     */
    public boolean remove(int val) {
        if (!map.containsKey(val)) return false;
        Integer index = map.get(val);
        int tail = list.size() - 1;
        if (index != tail) {
            Integer element = list.get(tail);
            Collections.swap(list, index, tail);
            map.put(element, index);
        }
        list.remove(tail);
        map.remove(val);
        return true;
    }

    /**
     * Get a random element from the set.
     */
    public int getRandom() {
        return list.get(ThreadLocalRandom.current().nextInt(list.size()));
    }
}

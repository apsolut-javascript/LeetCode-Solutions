package com.peter._2020._30.days.trail.september._4_Partition_Labels;

import java.util.*;

public class Solution {
    public List<Integer> partitionLabels(String S) {
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < S.length(); i++) {
            char c = S.charAt(i);
            map.compute(c, (k, v) -> v == null ? 1 : v + 1);
        }

        LinkedList<Integer> result = new LinkedList<>();
        int sub = 0;
        HashMap<Character, Integer> cur = new HashMap<>();
        for (int i = 0; i < S.length(); i++) {
            char c = S.charAt(i);
            sub++;
            cur.compute(c, (k, v) -> v == null ? 1 : v + 1);

            if(cur.get(c).equals(map.get(c))){
                boolean isAllMatch = cur.entrySet().stream().allMatch(e -> e.getValue().equals(map.get(e.getKey())));
                if(isAllMatch){
                    result.add(sub);
                    sub = 0;
                    cur.clear();
                }
            }
        }

        return result;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        List<Integer> result = solution.partitionLabels("ababcbacadefegdehijhklij");
        System.out.println("result = " + result);
    }
}
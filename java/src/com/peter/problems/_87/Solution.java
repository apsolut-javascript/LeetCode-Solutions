package com.peter.problems._87;//Given a string s1, we may represent it as a binary tree by partitioning it to
//two non-empty substrings recursively. 
//
// Below is one possible representation of s1 = "great": 
//
// 
//    great
//   /    \
//  gr    eat
// / \    /  \
//g   r  e   at
//           / \
//          a   t
// 
//
// To scramble the string, we may choose any non-leaf node and swap its two chil
//dren. 
//
// For example, if we choose the node "gr" and swap its two children, it produce
//s a scrambled string "rgeat". 
//
// 
//    rgeat
//   /    \
//  rg    eat
// / \    /  \
//r   g  e   at
//           / \
//          a   t
// 
//
// We say that "rgeat" is a scrambled string of "great". 
//
// Similarly, if we continue to swap the children of nodes "eat" and "at", it pr
//oduces a scrambled string "rgtae". 
//
// 
//    rgtae
//   /    \
//  rg    tae
// / \    /  \
//r   g  ta  e
//       / \
//      t   a
// 
//
// We say that "rgtae" is a scrambled string of "great". 
//
// Given two strings s1 and s2 of the same length, determine if s2 is a scramble
//d string of s1. 
//
// Example 1: 
//
// 
//Input: s1 = "great", s2 = "rgeat"
//Output: true
// 
//
// Example 2: 
//
// 
//Input: s1 = "abcde", s2 = "caebd"
//Output: false 
// Related Topics String Dynamic Programming


import java.util.*;

//leetcode submit region begin(Prohibit modification and deletion)
class Solution {
    public static void main(String[] args) {
        var s = new Solution();
        assert !s.isScramble("abcd", "cadb");
//        assert s.isScramble("abcd", "cabd");
        assert !s.isScramble("abcdefghij", "efghijcadb");
        assert s.isScramble("abb", "bab");
        assert s.isScramble("abb", "bba");
        assert s.isScramble("great", "rgeat");
        assert !s.isScramble("abcde", "caebd");
    }

    public boolean isScramble(String s1, String s2) {
        if (s1.equals(s2)) return true;

        var chars = new HashMap<Character, Integer>();
        for (int i = 0; i < s1.length(); i++) {
            chars.put(s1.charAt(i), chars.getOrDefault(s1.charAt(i), 0) + 1);
            chars.put(s2.charAt(i), chars.getOrDefault(s2.charAt(i), 0) - 1);
        }
        if (chars.values().stream().anyMatch(a -> a != 0)) {
            return false;
        }

        for (int i = 1; i < s1.length(); i++) {
            if (isScramble(s1.substring(i), s2.substring(i)) && isScramble(s1.substring(0, i), s2.substring(0, i))) {
                return true;
            }
            if (isScramble(s1.substring(i), s2.substring(0, s1.length() - i)) && isScramble(s1.substring(0, i), s2.substring(s1.length() - i))) {
                return true;
            }
        }

        return false;
    }
}
//leetcode submit region end(Prohibit modification and deletion)

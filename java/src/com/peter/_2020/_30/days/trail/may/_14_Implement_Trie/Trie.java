package com.peter._2020._30.days.trail.may._14_Implement_Trie;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Hashtable;
import java.util.Set;

class Trie {

    private Set<String> words = new HashSet<>();
    private HashMap<Character, Object> prefixes = new HashMap<>();

    /**
     * Inserts a word into the trie.
     */
    public void insert(String word) {
        words.add(word);
        var cur = prefixes;
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);
            cur.putIfAbsent(c, new HashMap<Character, Object>());
            cur = ((HashMap<Character, Object>) cur.get(c));
        }
    }

    /**
     * Returns if the word is in the trie.
     */
    public boolean search(String word) {
        return words.contains(word);
    }

    /**
     * Returns if there is any word in the trie that starts with the given prefix.
     */
    public boolean startsWith(String prefix) {
        var cur = prefixes;
        for (int i = 0; i < prefix.length(); i++) {
            var c = prefix.charAt(i);
            if (!cur.containsKey(c)) {
                return false;
            }
            cur = (HashMap<Character, Object>) cur.get(c);
        }

        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */


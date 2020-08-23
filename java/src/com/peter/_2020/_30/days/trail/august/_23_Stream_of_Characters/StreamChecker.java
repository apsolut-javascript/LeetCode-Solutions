package com.peter._2020._30.days.trail.august._23_Stream_of_Characters;

import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

public class StreamChecker {
    private final StringBuilder sb = new StringBuilder();
    private final Set<String> strings;
    private final Integer maxLength;
    private final Set<Integer> lengths;
    private final Set<Character> lastChars;

    public StreamChecker(String[] words) {
        strings = Arrays.stream(words).collect(Collectors.toSet());
        maxLength = strings.stream().map(String::length).max(Integer::compareTo).orElse(0);
        lengths = strings.stream().map(String::length).collect(Collectors.toUnmodifiableSet());
        lastChars = strings.stream().map(a -> a.charAt(a.length() - 1)).collect(Collectors.toUnmodifiableSet());
    }

    public boolean query(char letter) {
        sb.append(letter);
        if (sb.length() > maxLength) {
            sb.deleteCharAt(0);
        }
        if (!lastChars.contains(letter)) return false;

        for (Integer length : lengths) {
            if (length > sb.length()) continue;
            String s = sb.substring(sb.length() - length);
            if (strings.contains(s)) return true;
        }

        return false;
    }

    public static void main(String[] args) {
        StreamChecker streamChecker = new StreamChecker(new String[]{"cd", "f", "kl"}); // init
        // the dictionary.
        assert !streamChecker.query('a');          // return false
        assert !streamChecker.query('b');          // return false
        assert !streamChecker.query('c');          // return false
        assert streamChecker.query('d');          // return true, because 'cd' is in the wordlist
        assert !streamChecker.query('e');          // return false
        assert streamChecker.query('f');          // return true, because 'f' is in the wordlist
        assert !streamChecker.query('g');          // return false
        assert !streamChecker.query('h');          // return false
        assert !streamChecker.query('i');          // return false
        assert !streamChecker.query('j');          // return false
        assert !streamChecker.query('k');          // return false
        assert streamChecker.query('l');          // return true, because 'kl' is in the wordlist

        System.out.println("success!");
    }
}

"""
3. Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
"""

class Solution:
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        sub, max_len = '', 0
        for c in s:
            if c in sub:
                sub = sub[sub.index(c) + 1:]
            
            sub += c
            
            if len(sub) > max_len:
                max_len = len(sub)
            
        return max_len
        

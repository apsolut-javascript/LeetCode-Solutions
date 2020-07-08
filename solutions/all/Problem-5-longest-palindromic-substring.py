"""
5. Longest Palindromic Substring
https://leetcode.com/problems/longest-palindromic-substring/description/
"""
class Solution:
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        t = '^#' + '#'.join(s) + '#$'
        c, r = 0, 0
        p = [0] * len(t)
        for i in range(1, len(t) - 1):
            m = 2 * c - i
            l = min(r - i, p[m]) if r > i else 0
            while t[i - 1 - l] == t[i + 1 + l]:
                l += 1
            p[i] = l
            if i + l > r:
                r = i + l
                c = i

        max_i, max_v = 0, 0
        for i, v in enumerate(p):
            if v > max_v:
                max_i = i
                max_v = v

        i = (max_i - 1 - max_v) // 2
        return s[i:  i + max_v]
        

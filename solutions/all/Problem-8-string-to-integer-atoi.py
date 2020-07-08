"""
7. Reverse Integer
https://leetcode.com/problems/reverse-integer/description/
"""


class Solution:
    INT_MAX = 2147483647
    INT_MIN = -2147483648

    def myAtoi(self, s):
        """
        :type s: str
        :rtype: int
        """
        s = s.strip()
        firstChar = len(s)
        for i, c in enumerate(s):
            if c.isalpha() or c.isspace():
                firstChar = i
                break

        result = 0
        try:
            result = int(s[:firstChar])
        except ValueError:
            pass

        if result > Solution.INT_MAX:
            result = Solution.INT_MAX
        if result < Solution.INT_MIN:
            result = Solution.INT_MIN
        return result


# a = Solution()
# assert a.myAtoi('1') == 1
# assert a.myAtoi('+1') == 1
# assert a.myAtoi('++1') == 0
# assert a.myAtoi('--1') == 0
# assert a.myAtoi('aa') == 0
# assert a.myAtoi('+000123aa') == 123
# assert a.myAtoi('123 456') == 123

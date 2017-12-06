"""
7. Reverse Integer
https://leetcode.com/problems/reverse-integer/description/
"""


class Solution:
    int32Max = (int('1' * 32, 2) - 1) // 2

    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        result = int(str(x)[::-1]) if x >= 0 else -self.reverse(-x)

        if result > Solution.int32Max:
            result = 0

        return result

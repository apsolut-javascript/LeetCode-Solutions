"""
6. ZigZag Conversion
https://leetcode.com/problems/zigzag-conversion/description/
"""


class Solution:
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        if numRows == 1:
            return s

        if numRows == 2:
            return s[0::2] + s[1::2]

        arr = []
        for i in range(numRows):
            arr.append([])

        r, c, inc = 0, 0, True
        for i in range(len(s)):
            arr[r].append(s[i])
            if inc:
                if r == numRows - 1:
                    r -= 1
                    inc = False
                else:
                    r += 1
            else:
                r -= 1
                c += 1
                if r == 0:
                    inc = True

        return ''.join([''.join(a) for a in arr])

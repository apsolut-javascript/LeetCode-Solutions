"""
9. Palindrome Number
https://leetcode.com/problems/palindrome-number/description/
"""


class Solution:
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:
            return False

        if x % 10 == x:
            return True

        before, after = x, 0
        while before > 0:
            after *= 10
            after += (before % 10)
            before //= 10
        return after == x

# a = Solution()
# assert a.isPalindrome(1)
# assert a.isPalindrome(10) == False
# assert a.isPalindrome(11)
# assert a.isPalindrome(111)
# assert a.isPalindrome(121)
# assert a.isPalindrome(12321)
# assert a.isPalindrome(-12321) == False

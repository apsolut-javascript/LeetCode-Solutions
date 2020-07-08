# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        v1, v2 = [], []
        while l1 != None:
            v1.append(l1.val)
            l1 = l1.next
        while l2 != None:
            v2.append(l2.val)
            l2 = l2.next
        
        result = []
        carry = False
        max_len = max(len(v1), len(v2))
        for i in range(max_len):
            v = (v1[i] if i < len(v1) else 0) + (v2[i] if i < len(v2) else 0)
            if carry:
                v += 1
            if v > 9:
                carry = True
                v %= 10
            else:
                carry = False
            
            result.append(v)
            
        if carry:
            result.append(1)
                
        return result
        

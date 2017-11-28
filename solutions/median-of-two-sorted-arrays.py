class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        
        num = sorted(nums1 + nums2)
        l = len(num)
        if l % 2 == 0:
            mid = l // 2 - 1
            return sum(num[mid: mid + 2]) / 2
        
        mid = l // 2
        return num[mid]

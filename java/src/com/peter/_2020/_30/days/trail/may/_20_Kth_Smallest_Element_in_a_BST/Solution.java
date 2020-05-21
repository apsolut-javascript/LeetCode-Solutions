package com.peter._2020._30.days.trail.may._20_Kth_Smallest_Element_in_a_BST;

import com.peter.utils.TreeNode;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class Solution {
    public static void main(String[] args) {
        var s = new Solution();
        assert s.kthSmallest(TreeNode.createTree("[3,1,4,null,2]"), 1) == 1;
        assert s.kthSmallest(TreeNode.createTree("[5,3,6,2,4,null,null,1]"), 3) == 3;
        assert s.kthSmallest(TreeNode.createTree("[5,3,6,1,4,null,null,null,2]"), 2) == 2;
    }

    public int kthSmallest(TreeNode root, int k) {
        var nums = new ArrayList<Integer>();
        traverseTree(root, nums);

        Collections.sort(nums);
        return nums.get(k - 1);
    }

    private void traverseTree(TreeNode root, List<Integer> nums) {
        if (root == null) return;

        nums.add(root.val);
        traverseTree(root.left, nums);
        traverseTree(root.right, nums);
    }
}

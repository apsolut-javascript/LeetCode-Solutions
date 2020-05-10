package com.peter._2020._30.days.trail.may._7;

import com.peter.utils.TreeNode;

/**
 * Definition for a binary tree node.
 * public class com.peter.utils.TreeNode {
 * int val;
 * com.peter.utils.TreeNode left;
 * com.peter.utils.TreeNode right;
 * com.peter.utils.TreeNode() {}
 * com.peter.utils.TreeNode(int val) { this.val = val; }
 * com.peter.utils.TreeNode(int val, com.peter.utils.TreeNode left, com.peter.utils.TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    boolean isCousins(TreeNode root, int x, int y) {
        var target1 = getDepth(root, root.left, x, 1);
        if (target1 == null) target1 = getDepth(root, root.right, x, 1);

        var target2 = getDepth(root, root.left, y, 1);
        if (target2 == null) target2 = getDepth(root, root.right, y, 1);

        if(target1 == null || target2 ==null) return false;

        return target1.left != target2.left && target1.val == target2.val;
    }

    private TreeNode getDepth(TreeNode parent, TreeNode child, int target, int depth) {
        if (child == null) return null;

        if (child.val == target) {
            return new TreeNode(depth, parent, parent);
        }

        var result = getDepth(child, child.left, target, depth + 1);
        if (result != null) return result;
        return getDepth(child, child.right, target, depth + 1);
    }
}

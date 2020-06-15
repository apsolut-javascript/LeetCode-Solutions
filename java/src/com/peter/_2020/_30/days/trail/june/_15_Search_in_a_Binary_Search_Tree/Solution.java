package com.peter._2020._30.days.trail.june._15_Search_in_a_Binary_Search_Tree;

import com.peter.utils.TreeNode;

import java.util.ArrayDeque;
import java.util.Queue;

public class Solution {
    public TreeNode searchBST(TreeNode root, int val) {
        if (root == null) return null;
        var queue = new ArrayDeque<TreeNode>();
        queue.add(root);
        while (!queue.isEmpty()) {
            var node = queue.removeLast();
            if (node.val == val) return node;
            if (node.left != null) queue.add(node.left);
            if (node.right != null) queue.add(node.right);
        }

        return null;
    }
}

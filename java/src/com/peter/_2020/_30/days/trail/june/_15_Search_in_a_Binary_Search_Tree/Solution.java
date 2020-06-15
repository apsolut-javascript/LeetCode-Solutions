package com.peter._2020._30.days.trail.june._15_Search_in_a_Binary_Search_Tree;

import com.peter.utils.TreeNode;

import java.util.ArrayDeque;
import java.util.Queue;

public class Solution {
    public TreeNode searchBST(TreeNode root, int val) {
        if (root == null) return null;
        if (root.val == val) return root;
        var result = searchBST(root.left, val);
        if (result == null) {
            result = searchBST(root.right, val);
        }
        return result;
    }
}

package com.peter._2020._30.days.trail.june._1_Invert_Binary_Tree;

import com.peter.utils.TreeNode;

public class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) return null;

        var temp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(temp);

        return root;
    }
}

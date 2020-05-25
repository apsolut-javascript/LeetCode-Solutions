package com.peter._2020._30.days.trail.may._24_Construct_Binary_Search_Tree_from_Preorder_Traversal;

import com.peter.utils.TreeNode;

public class Solution {
    public TreeNode bstFromPreorder(int[] preorder) {
        var root = new TreeNode(preorder[0]);
        for (int i = 1; i < preorder.length; i++) {
            var val = preorder[i];
            var node = root;
            while (true) {
                if (node.val < val) {
                    if (node.right == null) {
                        node.right = new TreeNode(val);
                        break;
                    } else {
                        node = node.right;
                    }
                } else {
                    if (node.left == null) {
                        node.left = new TreeNode(val);
                        break;
                    } else {
                        node = node.left;
                    }
                }
            }
        }

        return root;
    }
}

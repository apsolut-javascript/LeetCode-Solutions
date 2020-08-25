package com.peter._2020._30.days.trail.august._24_Sum_of_Left_Leaves;

import com.peter.utils.TreeNode;

public class Solution {
    public int sumOfLeftLeaves(TreeNode root) {
        if (root == null) {
            return 0;
        }

        return dfs(root.left, true) + dfs(root.right, false);
    }

    private int dfs(TreeNode node, boolean isLeft) {
        if (node == null) return 0;

        if (node.left == null && node.right == null && isLeft) return node.val;

        return dfs(node.left, true) + dfs(node.right, false);
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        assert solution.sumOfLeftLeaves(TreeNode.createTree("[3,9,20,null,null,15,7]")) == 24;
        assert solution.sumOfLeftLeaves(TreeNode.createTree("[0,2,4,1,null,3,-1,5,1,null,6,null,8]")) == 5;
    }
}

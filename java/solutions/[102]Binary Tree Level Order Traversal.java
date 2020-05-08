//Given a binary tree, return the level order traversal of its nodes' values. (i
//e, from left to right, level by level).
//
//
//For example:
//Given binary tree [3,9,20,null,null,15,7],
//
//    3
//   / \
//  9  20
//    /  \
//   15   7
//
//
//
//return its level order traversal as:
//
//[
//  [3],
//  [9,20],
//  [15,7]
//]
//
// Related Topics Tree Breadth-first Search


//leetcode submit region begin(Prohibit modification and deletion)

import java.util.ArrayList;
import java.util.List;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */

class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();

        buildLevel(root, result, 0);

        return result;
    }

    private void buildLevel(TreeNode node, List<List<Integer>> order, int depth) {
        if (node == null) return;

        if (order.size() <= depth) {
            order.add(new ArrayList<>());
        }

        order.get(depth).add(node.val);
        buildLevel(node.left, order, depth + 1);
        buildLevel(node.right, order, depth + 1);
    }

}
//leetcode submit region end(Prohibit modification and deletion)

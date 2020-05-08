
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
    public boolean isCousins(TreeNode root, int x, int y) {
        var target1 = getDepth(root, root.left, x, 1);
        if (target1 == null) target1 = getDepth(root, root.right, x, 1);

        var target2 = getDepth(root, root.left, y, 1);
        if (target2 == null) target2 = getDepth(root, root.right, y, 1);

        if(target1 == null || target2 ==null) return false;

        return target1.left != target2.left && target1.val == target2.val;
    }

    TreeNode getDepth(TreeNode parent, TreeNode child, int target, int depth) {
        if (child == null) return null;

        if (child.val == target) {
            return new TreeNode(depth, parent, parent);
        }

        var result = getDepth(child, child.left, target, depth + 1);
        if (result != null) return result;
        return getDepth(child, child.right, target, depth + 1);
    }
}

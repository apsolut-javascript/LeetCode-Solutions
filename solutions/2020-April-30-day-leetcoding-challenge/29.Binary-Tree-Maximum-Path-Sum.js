/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  if (root == null) return Number.NEGATIVE_INFINITY;
  const { val, left, right } = root;
  const l = getMaxSum(left);
  const r = getMaxSum(right);
  return Math.max(
    val,
    val + l,
    val + r,
    val + l + r,
    maxPathSum(left),
    maxPathSum(right)
  );
};

function getMaxSum(node) {
  if (node == null) return Number.NEGATIVE_INFINITY;

  const { val, left, right } = node;
  return Math.max(val, val + getMaxSum(left), val + getMaxSum(right));
}

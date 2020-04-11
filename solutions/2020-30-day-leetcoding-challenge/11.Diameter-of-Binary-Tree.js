/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  if (root == null) return 0;

  const { left, right } = root;
  const diameter = deepestLength(left) + deepestLength(right);

  return Math.max(
    diameter,
    diameterOfBinaryTree(left),
    diameterOfBinaryTree(right)
  );
};

function deepestLength(root) {
  if (root == null) return 0;

  const { left, right } = root;

  return 1 + Math.max(deepestLength(left), deepestLength(right));
}

module.exports = diameterOfBinaryTree;

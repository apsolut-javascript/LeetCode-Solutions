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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  const { val, left, right } = root;
  if (val == x || val == y) {
    return false;
  }

  const xDepth = findVal(root, left, x) || findVal(root, right, x);
  const yDepth = findVal(root, left, y) || findVal(root, right, y);

  return xDepth.parent != yDepth.parent && xDepth.depth == yDepth.depth;
};

function findVal(parent, child, target, depth = 1) {
  if (child == null) return null;

  const { val, left, right } = child;
  if (val == target) return { parent, depth };

  return (
    findVal(child, left, target, depth + 1) ||
    findVal(child, right, target, depth + 1)
  );
}

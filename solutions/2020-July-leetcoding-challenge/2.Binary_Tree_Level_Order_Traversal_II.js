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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const levels = [];

  constructLevel(levels, root, 0);
  levels.reverse();
  return levels;
};

function constructLevel(levels, node, i) {
  if (node == null) return;
  if (levels[i] == null) levels[i] = [];

  levels[i].push(node.val);
  constructLevel(levels, node.left, i + 1);
  constructLevel(levels, node.right, i + 1);
}

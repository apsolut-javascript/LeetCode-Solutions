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
var zigzagLevelOrder = function (root) {
  const ans = [];
  if (root == null) return ans;

  function setLevel(node, level) {
    if (node == null) return;
    if (ans[level] == null) ans[level] = [];

    const { left, right, val } = node;
    ans[level].push(val);
    setLevel(left, level + 1);
    setLevel(right, level + 1);
  }

  setLevel(root, 0);
  for (let i = 1; i < ans.length; i += 2) {
    ans[i].reverse();
  }

  return ans;
};

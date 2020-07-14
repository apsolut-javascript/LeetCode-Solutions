/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */

// @lc code=start
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return checkNode(root);
};

function checkNode(node, min, max) {
  if (node == null) return true;
  const { val, left, right } = node;
  if (val <= min || max <= val) return false;
  if (left && val <= left.val) return false;
  if (right && right.val <= val) return false;
  return checkNode(left, min, val) && checkNode(right, val, max);
}

module.exports = isValidBST;
// @lc code=end

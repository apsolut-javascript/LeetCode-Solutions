/*
 * @lc app=leetcode id=701 lang=javascript
 *
 * [701] Insert into a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, newVal) {
  if (root == null) return new TreeNode(newVal);
  const { val, left, right } = root;
  if (val < newVal) {
    root.right = insertIntoBST(right, newVal);
  } else {
    root.left = insertIntoBST(left, newVal);
  }

  return root;
};
// @lc code=end

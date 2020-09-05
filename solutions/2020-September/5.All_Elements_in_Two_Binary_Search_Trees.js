/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  const arr = [];
  traveseNode(root1, arr);
  traveseNode(root2, arr);
  arr.sort((a, b) => a - b);
  return arr;
};

function traveseNode(node, arr) {
  if (node == null) return;

  const { val, left, right } = node;
  arr.push(val);
  traveseNode(left, arr);
  traveseNode(right, arr);
}

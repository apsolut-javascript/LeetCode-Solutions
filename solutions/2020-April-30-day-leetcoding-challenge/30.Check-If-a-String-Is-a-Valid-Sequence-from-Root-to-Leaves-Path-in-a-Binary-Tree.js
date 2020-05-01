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
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function (root, arr, index = 0) {
  if (root.val != arr[index]) {
    return false;
  }

  index++;
  if (arr.length == index && root.left == null && root.right == null)
    return true;

  let result = false;

  if (root.left) {
    result |= isValidSequence(root.left, arr, index);
  }

  if (result) return true;

  if (root.right) {
    result |= isValidSequence(root.right, arr, index);
  }

  return result;
};

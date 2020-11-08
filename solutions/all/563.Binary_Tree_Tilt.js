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
var findTilt = function (root) {
  if (!root) return 0;
  calculateNodes(root);
  return sumTilt(root);
};

function calculateNodes(node) {
  if (!node) return;
  const { left, right, val } = node;
  calculateNodes(left);
  calculateNodes(right);
  let sum = val;
  let tilt = 0;
  if (left) {
    sum += left.sum;
    tilt = left.sum;
  }
  if (right) {
    sum += right.sum;
    tilt = tilt - right.sum;
  }

  node.sum = sum;
  node.tilt = Math.abs(tilt);
}

function sumTilt(node) {
  if (!node) return 0;
  const { tilt, left, right } = node;
  return sumTilt(left) + sumTilt(right) + tilt;
}

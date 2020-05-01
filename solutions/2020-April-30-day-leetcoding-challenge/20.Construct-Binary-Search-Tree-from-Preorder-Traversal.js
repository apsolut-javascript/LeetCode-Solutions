function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  const root = new TreeNode(preorder[0]);
  for (let i = 1; i < preorder.length; i++) {
    let node = root;
    let val = preorder[i];
    while (node) {
      if (val < node.val) {
        if (node.left) {
          node = node.left;
        } else {
          node.left = new TreeNode(val);
          break;
        }
      } else {
        if (node.right) {
          node = node.right;
        } else {
          node.right = new TreeNode(val);
          break;
        }
      }
    }
  }
  return root;
};

module.exports = bstFromPreorder;

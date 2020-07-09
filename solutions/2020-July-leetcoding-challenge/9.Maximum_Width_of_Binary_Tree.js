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
var widthOfBinaryTree = function (root) {
  const levels = [];
  let maxDepth = 0;

  function dfs(node, depth) {
    if (levels[depth] == null) levels[depth] = [];
    if (node != null || levels[depth].length > 0) {
      levels[depth].push(node == null ? null : node.val);
    }
    if (node == null) {
      if (depth >= maxDepth) return;
      dfs(null, depth + 1);
      dfs(null, depth + 1);
    } else {
      maxDepth = Math.max(depth, maxDepth);
      dfs(node.left, depth + 1);
      dfs(node.right, depth + 1);
    }
  }

  dfs(root, 0);
  let maxWidth = 0;
  for (let i = 0; i < levels.length; i++) {
    const l = levels[i];
    for (let j = l.length - 1; j >= 0; j--) {
      if (l[j] == null) continue;
      const width = j + 1;
      maxWidth = Math.max(maxWidth, width);
      break;
    }
  }
  return;
};

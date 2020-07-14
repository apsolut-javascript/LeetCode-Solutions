function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function arrToNodes(arr) {
  if (!arr || arr.length == 0) return null;

  const nodes = arr.map(a => (a == null ? null : new TreeNode(a)));
  for (let i = 0; i < nodes.length; i++) {
    const cur = nodes[i];
    if (cur == null) continue;

    const leftIndex = i * 2 + 1;
    if (leftIndex >= nodes.length) break;
    cur.left = nodes[leftIndex];

    const rightIndex = i * 2 + 2;
    if (rightIndex >= nodes.length) break;
    cur.right = nodes[rightIndex];
  }

  return nodes[0];
}

module.exports = {
  arrToNodes,
};

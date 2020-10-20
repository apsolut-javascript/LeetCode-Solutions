/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node, nodes) {
  if (!node) return node;
  if (!nodes) nodes = [];

  const { val, neighbors } = node;
  if (!nodes[val]) {
    nodes[val] = { val, neighbors: [] };
  } else {
    return nodes[val];
  }
  const newNode = nodes[val];
  newNode.neighbors = neighbors.map(a => cloneGraph(a, nodes));
  return newNode;
};
// @lc code=end

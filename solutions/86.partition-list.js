/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(nodes, x) {
  if (nodes == null || nodes.val == null) return nodes;

  let tail = {};
  const head = tail;
  let cur = nodes;
  let tail2 = {};
  let head2 = tail2;

  while (cur) {
    const next = cur.next;
    cur.next = null;

    if (cur.val < x) {
      tail.next = cur;
      tail = tail.next;
    } else {
      tail2.next = cur;
      tail2 = tail2.next;
    }

    cur = next;
  }

  if (head2.next) {
    tail.next = head2.next;
  }

  return head.next;
};
// @lc code=end

module.exports = partition;

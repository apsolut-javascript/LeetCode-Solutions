/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (!head?.next) return head;
  let newHead = head;
  let cur = head.next;
  newHead.next = null;
  while (cur) {
    const { next } = cur;
    cur.next = null;
    newHead = insert(newHead, cur);
    cur = next;
  }
  return newHead;
};

function insert(head, node) {
  if (!node) return head;
  const { val } = node;
  if (val <= head.val) {
    node.next = head;
    return node;
  }

  let cur = head;
  while (cur) {
    if (!cur.next) {
      cur.next = node;
      break;
    }

    const { next } = cur;
    if (val <= next.val) {
      cur.next = node;
      node.next = next;
      break;
    }

    cur = cur.next;
  }

  return head;
}
// @lc code=end

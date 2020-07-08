/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) return null

  const dummy = { next: head }
  let tail = dummy

  while (tail.next && tail.next.next) {
    const next = tail.next
    const next2 = next.next
    const next3 = next2.next
    tail.next = next2
    next2.next = next
    next.next = next3
    tail = next
  }

  return dummy.next
}

module.exports = swapPairs

/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (head.next == null && n == 1) return null
  let beforeTarget = null,
    target = null,
    num = 1,
    current = head
  while (current != null) {
    if (num >= n + 1) {
      beforeTarget = beforeTarget ? beforeTarget.next : head
    }
    if (num >= n) {
      target = target ? target.next : head
    }
    num++
    current = current.next
  }

  if (target && !beforeTarget) {
    return target.next
  }

  if (beforeTarget) {
    beforeTarget.next = beforeTarget.next.next
  }

  return head
}

module.exports = removeNthFromEnd

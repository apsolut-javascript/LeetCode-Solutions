/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (k == 0 || !head || !head.next) return head

  let newHead = head,
    newTail = null,
    tail = head,
    distance = 1,
    len = 1
  while (tail.next) {
    len++
    if (distance < k) {
      distance++
    } else {
      newTail = newHead
      newHead = newHead.next
    }

    if (tail.next != null) {
      tail = tail.next
    } else {
      break
    }
  }

  if (newTail == null || distance < k) return rotateRight(head, k % len)

  tail.next = head
  newTail.next = null

  return newHead
}

module.exports = rotateRight

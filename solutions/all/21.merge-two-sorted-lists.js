/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) return l1 || l2
  let h1 = null,
    h2 = null
  if (l1.val <= l2.val) {
    h1 = l1
    h2 = l2
  } else {
    h1 = l2
    h2 = l1
  }
  const dummy = { next: h1 }

  while (h2 != null) {
    while (h1.val < h2.val) {
      if (!h1.next) {
        h1.next = h2
        return dummy.next
      }

      if (h1.next.val <= h2.val) {
        h1 = h1.next
      } else {
        break
      }
    }

    const next = h1.next
    const next2 = h2.next
    h2.next = next
    h1.next = h2
    h2 = next2
  }

  return dummy.next
}

module.exports = mergeTwoLists

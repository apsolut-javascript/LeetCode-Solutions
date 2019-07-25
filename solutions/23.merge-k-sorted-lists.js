/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists) return null
  for (let i = lists.length - 1; i >= 0; i--) {
    if (!lists[i]) lists.splice(i, 1)
  }
  if (lists.length == 0) return null
  if (lists.length == 1) return lists[0]

  lists.sort((a, b) => b.val - a.val)

  const head = { next: null }
  let tail = head
  while (lists.length > 1) {
    const node = lists[lists.length - 1]
    if (!node.next) {
      lists.pop()
    } else {
      lists[lists.length - 1] = node.next
      lists.sort((a, b) => b.val - a.val)
    }
    tail.next = node
    tail = tail.next
  }

  tail.next = lists[0]
  return head.next
}

module.exports = mergeKLists

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
  if (!lists || lists.length == 0) return null

  const head = { next: null }
  let tail = head
  let i = 0
  while (true) {
    const avail = lists.filter(a => a && a.val != null)
    if (avail.length == 0) break

    const val = avail.reduce(
      (p, c) => (p <= c.val ? p : c.val),
      Number.POSITIVE_INFINITY
    )
    for (let i = 0; i < lists.length; i++) {
      if (!lists[i] || lists[i].val != val) continue

      lists[i] = lists[i].next
      break
    }
    tail.next = { val }
    tail = tail.next
    i++
    if (i > 100000) {
      break
    }
  }

  return head.next
}

module.exports = mergeKLists

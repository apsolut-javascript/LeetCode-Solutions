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

  const head = { next: null }
  let tail = head
  while (true) {
    let index = null
    let val = Number.MAX_VALUE
    for (let i = lists.length - 1; i >= 0; i--) {
      if (lists[i].val > val) {
        continue
      }

      val = lists[i].val
      index = i
    }
    if (index == null) {
      break
    }

    if (!lists[index].next) {
      lists.splice(index, 1)
    } else {
      lists[index] = lists[index].next
    }
    tail.next = { val }
    tail = tail.next
  }

  return head.next
}

module.exports = mergeKLists

/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
var reverseKGroup = function(nodes, k) {
  if (k == 1 || !nodes || !nodes.next) return nodes

  const dummy = { next: nodes }
  let groupDummy = dummy

  canReverse: while (true) {
    let tail = groupDummy
    for (let i = 0; i < k; i++) {
      if (tail.next) {
        tail = tail.next
      } else {
        break canReverse
      }
    }

    const nextGroup = tail.next
    const groupTail = groupDummy.next

    let pointer = groupDummy.next
    let head = null

    for (let i = 0; i < k; i++) {
      const next = pointer.next
      pointer.next = head
      head = pointer
      pointer = next
    }

    groupTail.next = nextGroup
    groupDummy.next = head
    groupDummy = groupTail
  }

  return dummy.next
}

module.exports = reverseKGroup

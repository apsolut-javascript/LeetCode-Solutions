/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return null;

  let newHead = head;
  let isDuplicate = false;
  while (newHead.next && newHead.val == newHead.next.val) {
    newHead = newHead.next;
    isDuplicate = true;
  }

  if (isDuplicate) {
    if (!newHead.next) return null;
    newHead = deleteDuplicates(newHead.next);
  }

  if (newHead && newHead.next != null) {
    newHead.next = deleteDuplicates(newHead.next);
  }

  return newHead;
};
// @lc code=end

export default deleteDuplicates;

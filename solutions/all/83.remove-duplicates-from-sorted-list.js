/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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

  while (head.next && head.val == head.next.val) {
    head.next = head.next.next;
  }

  if (head.next) {
    head.next = deleteDuplicates(head.next);
  }

  return head;
};
// @lc code=end

// export default deleteDuplicates;

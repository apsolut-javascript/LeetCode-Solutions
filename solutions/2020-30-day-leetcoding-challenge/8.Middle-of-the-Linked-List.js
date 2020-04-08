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
var middleNode = function(head) {
  let mid = { next: head };
  let cur = head;
  let count = 0;
  while (cur) {
    count++;
    cur = cur.next;
  }

  for (let i = 0; i < Math.floor(count / 2 + 1); i++) {
    mid = mid.next;
  }

  return mid;
};

module.exports = middleNode;

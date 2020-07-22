/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  while (head && head.val == val) head = head.next;
  if (!head) return null;

  let node = head;
  while (node.next) {
    if (node.next.val == val) node.next = node.next.next;
    else node = node.next;
  }
  return head;
};

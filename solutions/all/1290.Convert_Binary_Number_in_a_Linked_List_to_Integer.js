/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let ans = 0;
  let cur = head;
  while (cur) {
    ans <<= 1;
    const { next, val } = cur;
    if (val) ans++;
    cur = next;
  }
  return ans;
};

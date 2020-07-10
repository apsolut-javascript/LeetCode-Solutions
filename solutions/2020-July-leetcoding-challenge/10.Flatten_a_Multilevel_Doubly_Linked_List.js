/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (head == null) return null;

  let cur = head;
  while (cur != null) {
    const { next, child } = cur;
    if (child != null) {
      const children = flatten(child);
      cur.child = null;
      cur.next = children;
      children.prev = cur;
      let tail = children;
      if (next != null) {
        while (tail.next) tail = tail.next;
        tail.next = next;
        next.prev = tail;
      }
    }

    cur = next;
  }

  return head;
};

module.exports = flatten;

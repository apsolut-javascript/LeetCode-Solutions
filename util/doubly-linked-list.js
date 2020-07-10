function Node(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}

function arrToNodes(arr) {
  if (arr.length == 0) return null;
  const head = new Node(arr[0]);
  let cur = head;
  let child = null;
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    if (val != null) {
      if (child == null) {
        const node = new Node(val, cur);
        cur.next = node;
        cur = node;
      } else {
        child.child = arrToNodes(arr.slice(i));
        break;
      }
    } else {
      if (child == null) child = head;
      else child = child.next;
    }
  }

  return head;
}

function nodesToArr(head) {
  if (head == null) return [];
  const result = [];
  let cur = head;
  while (cur != null) {
    result.push(cur.val);
    if (cur.child) {
      result.push(...nodesToArr(cur.child));
    }
    cur = cur.next;
  }

  return result;
}

module.exports = { arrToNodes, nodesToArr };

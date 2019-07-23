import mergeTwoLists from "../solutions/21.merge-two-sorted-lists"

function ListNode(val) {
  this.val = val
  this.next = null
}

const createList = vals => {
  const head = new ListNode(null)
  let tail = head
  vals.forEach(a => {
    const node = new ListNode(a)
    tail.next = node
    tail = node
  })
  return head.next
}

const toList = head => {
  const list = []
  let node = head
  while (node != null) {
    list.push(node.val)
    node = node.next
  }
  return list
}

describe("problem 21", () => {
  test("case 1", () => {
    const l1 = createList([1, 2, 4])
    const l2 = createList([1, 3, 4])

    const result = toList(mergeTwoLists(l1, l2))
    const expected = [1, 1, 2, 3, 4, 4]
    expect(result).toHaveLength(expected.length)
    result.forEach((a, i) => {
      expect(a).toBe(expected[i])
    })
  })

  test("case 2", () => {
    const l1 = createList([-6, -5, 6, 6, 7])
    const l2 = createList([0])

    const result = toList(mergeTwoLists(l1, l2))
    const expected = [-6, -5, 0, 6, 6, 7]
    expect(result).toHaveLength(expected.length)
    result.forEach((a, i) => {
      expect(a).toBe(expected[i])
    })
  })
})

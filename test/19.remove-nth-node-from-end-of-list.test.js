import removeNthFromEnd from "../solutions/19.remove-nth-node-from-end-of-list"

function ListNode(val) {
  this.val = val
  this.next = null
}
describe("problem 19", () => {
  test("caes 1", () => {
    const head = new ListNode(1)
    let tail = head
    for (let i = 2; i <= 5; i++) {
      const node = new ListNode(i)
      tail.next = node
      tail = node
    }

    removeNthFromEnd(head, 2)
    let node = head
    const result = []
    while (node != null) {
      result.push(node.val)
      node = node.next
    }

    const expected = [1, 2, 3, 5]
    expect(result).toHaveLength(expected.length)
    result.forEach(a => {
      expect(expected).toContainEqual(a)
    })
  })

  test("caes 2", () => {
    const head = new ListNode(1)
    let tail = head
    for (let i = 2; i <= 5; i++) {
      const node = new ListNode(i)
      tail.next = node
      tail = node
    }

    const resultNodes = removeNthFromEnd(head, 5)
    let node = resultNodes
    const result = []
    while (node != null) {
      result.push(node.val)
      node = node.next
    }

    const expected = [2, 3, 4, 5]
    expect(result).toHaveLength(expected.length)
    result.forEach(a => {
      expect(expected).toContainEqual(a)
    })
  })

  test("caes 3", () => {
    const head = new ListNode(1)
    let tail = head
    for (let i = 2; i <= 5; i++) {
      const node = new ListNode(i)
      tail.next = node
      tail = node
    }

    removeNthFromEnd(head, 1)
    let node = head
    const result = []
    while (node != null) {
      result.push(node.val)
      node = node.next
    }

    const expected = [1, 2, 3, 4]
    expect(result).toHaveLength(expected.length)
    result.forEach(a => {
      expect(expected).toContainEqual(a)
    })
  })
})

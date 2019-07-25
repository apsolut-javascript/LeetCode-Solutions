import mergeKLists from "../solutions/23.merge-k-sorted-lists"
import { toList, createList } from "../util/linked-list"

describe("problem 23", () => {
  test("case 1", () => {
    const l1 = createList([1, 4, 5])
    const l2 = createList([1, 3, 4])
    const l3 = createList([2, 6])
    const result = toList(mergeKLists([l1, l2, l3]))
    const expected = [1, 1, 2, 3, 4, 4, 5, 6]
    expected.forEach(a => {
      expect(result).toContainEqual(a)
    })

    expect(result).toHaveLength(expected.length)
  })

  test("case 2", () => {
    const result = toList(mergeKLists([]))
    const expected = []
    expected.forEach(a => {
      expect(result).toContainEqual(a)
    })

    expect(result).toHaveLength(expected.length)
  })
})

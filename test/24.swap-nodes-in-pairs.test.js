import swapPairs from "../solutions/24.swap-nodes-in-pairs"
import { toList, createList } from "../util/linked-list"

describe("probelm 24", () => {
  test("case 1", () => {
    const result = toList(swapPairs(createList([1, 2, 3, 4])))
    const expected = [2, 1, 4, 3]
    expected.forEach((a, i) => {
      expect(result[i]).toBe(a)
    })

    expect(result).toHaveLength(expected.length)
  })
})

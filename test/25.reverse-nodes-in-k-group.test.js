import reverseKGroup from "../solutions/25.reverse-nodes-in-k-group"
import { toList, createList } from "../util/linked-list"

describe("problem 25", () => {
  test("case 1", () => {
    const result = toList(reverseKGroup(createList([1, 2, 3, 4, 5]), 2))
    const answer = [2, 1, 4, 3, 5]
    result.forEach((a, i) => {
      expect(a).toBe(answer[i])
    })
    expect(result).toHaveLength(answer.length)
  })

  test("case 2", () => {
    const result = toList(reverseKGroup(createList([1, 2, 3, 4, 5]), 3))
    const answer = [3, 2, 1, 4, 5]
    result.forEach((a, i) => {
      expect(a).toBe(answer[i])
    })
    expect(result).toHaveLength(answer.length)
  })

  test("case 3", () => {
    const result = toList(reverseKGroup(createList([1, 2, 3, 4, 5]), 1))
    const answer = [1, 2, 3, 4, 5]
    result.forEach((a, i) => {
      expect(a).toBe(answer[i])
    })
    expect(result).toHaveLength(answer.length)
  })
})

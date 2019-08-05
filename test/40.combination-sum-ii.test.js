import target from "../solutions/40.combination-sum-ii"
import { twoDimensionsArrayCompare } from "../util/comparator"

describe("problem 40", () => {
  test("case 1", () => {
    const result = target([10, 1, 2, 7, 6, 1, 5], 8)
    const answer = [[1, 7], [1, 2, 5], [2, 6], [1, 1, 6]]
    twoDimensionsArrayCompare(result, answer)
  })

  test("case 2", () => {
    const result = target([2, 5, 2, 1, 2], 5)
    const answer = [[1, 2, 2], [5]]
    twoDimensionsArrayCompare(result, answer)
  })
})

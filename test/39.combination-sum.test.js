import target from "../solutions/39.combination-sum"
import { twoDimensionsArrayCompare } from "../util/comparator"

describe("problem 39", () => {
  test("case 1", () => {
    const result = target([2, 3, 6, 7], 7)
    const answer = [[7], [2, 2, 3]]
    twoDimensionsArrayCompare(result, answer)
  })

  test("case 2", () => {
    const result = target([2, 3, 5], 8)
    const answer = [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
    twoDimensionsArrayCompare(result, answer)
  })
})

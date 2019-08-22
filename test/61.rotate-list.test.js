import target from "../solutions/61.rotate-list"
import { createList, toList } from "../util/linked-list"

describe("problem 61", () => {
  test("case 1", () => {
    const input = createList([1, 2, 3, 4, 5])
    const ans = [4, 5, 1, 2, 3]
    const result = toList(target(input, 2))
    expect(result).toEqual(ans)
  })

  test("case 2", () => {
    const input = createList([0, 1, 2])
    const ans = [2, 0, 1]
    const result = toList(target(input, 4))
    expect(result).toEqual(ans)
  })

  test("case 3", () => {
    const input = createList([0, 1, 2])
    const ans = [0, 1, 2]
    const result = toList(target(input, 6))
    expect(result).toEqual(ans)
  })

  test("case 4", () => {
    const input = createList([0, 1, 2])
    const ans = [0, 1, 2]
    const result = toList(target(input, 0))
    expect(result).toEqual(ans)
  })

  test("case 5", () => {
    const input = createList([1])
    const ans = [1]
    const result = toList(target(input, 5))
    expect(result).toEqual(ans)
  })

  test("case 6", () => {
    const input = createList([1, 2, 3])
    const ans = [2, 3, 1]
    const result = toList(target(input, 2000000000))
    expect(result).toEqual(ans)
  })
})

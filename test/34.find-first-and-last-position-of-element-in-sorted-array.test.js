import target from "../solutions/34.find-first-and-last-position-of-element-in-sorted-array"

describe("problem 34", () => {
  test("case 1", () => {
    const result = target([5, 7, 7, 8, 8, 10], 8)
    const answer = [3, 4]
    result.forEach((a, i) => {
      expect(a).toBe(answer[i])
    })
    expect(result).toHaveLength(answer.length)
  })

  test("case 2", () => {
    const result = target([5, 7, 7, 8, 8, 10], 6)
    const answer = [-1, -1]
    result.forEach((a, i) => {
      expect(a).toBe(answer[i])
    })
    expect(result).toHaveLength(answer.length)
  })

  test("case 3", () => {
    const result = target([], 6)
    const answer = [-1, -1]
    result.forEach((a, i) => {
      expect(a).toBe(answer[i])
    })
    expect(result).toHaveLength(answer.length)
  })

  test("case 4", () => {
    const result = target([5], 6)
    const answer = [-1, -1]
    result.forEach((a, i) => {
      expect(a).toBe(answer[i])
    })
    expect(result).toHaveLength(answer.length)
  })

  test("case 5", () => {
    const result = target([6], 6)
    const answer = [0, 0]
    result.forEach((a, i) => {
      expect(a).toBe(answer[i])
    })
    expect(result).toHaveLength(answer.length)
  })
})

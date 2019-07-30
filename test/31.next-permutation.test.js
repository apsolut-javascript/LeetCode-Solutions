import target from "../solutions/31.next-permutation"

describe("problem 31", () => {
  test("case 1", () => {
    const input = [1, 2, 3]
    const answer = [1, 3, 2]
    target(input)
    answer.forEach((a, i) => {
      expect(input[i]).toBe(a)
    })
    expect(input).toHaveLength(answer.length)
  })

  test("case 2", () => {
    const input = [3, 2, 1]
    const answer = [1, 2, 3]
    target(input)
    answer.forEach((a, i) => {
      expect(input[i]).toBe(a)
    })
    expect(input).toHaveLength(answer.length)
  })

  test("case 3", () => {
    const input = [1, 1, 5]
    const answer = [1, 5, 1]
    target(input)
    answer.forEach((a, i) => {
      expect(input[i]).toBe(a)
    })
    expect(input).toHaveLength(answer.length)
  })

  test("case 4", () => {
    const input = [1, 3, 2]
    const answer = [2, 1, 3]
    target(input)
    answer.forEach((a, i) => {
      expect(input[i]).toBe(a)
    })
    expect(input).toHaveLength(answer.length)
  })

  test("case 5", () => {
    const input = [5, 4, 7, 5, 3, 2]
    const answer = [5, 5, 2, 3, 4, 7]
    target(input)
    answer.forEach((a, i) => {
      expect(input[i]).toBe(a)
    })
    expect(input).toHaveLength(answer.length)
  })
})

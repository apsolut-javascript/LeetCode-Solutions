import target from "../solutions/57.insert-interval"

describe("problem 57", () => {
  test("case 1", () => {
    expect(target([[1, 3], [6, 9]], [2, 5])).toEqual([[1, 5], [6, 9]])
  })

  test("case 2", () => {
    const result = target([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])
    expect(result).toEqual([[1, 2], [3, 10], [12, 16]])
  })
})

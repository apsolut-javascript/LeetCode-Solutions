import target from "../solutions/42.trapping-rain-water"

describe("problem 42", () => {
  test("case 1", () => {
    expect(target([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6)
  })

  test("case 2", () => {
    expect(target([5, 4, 1, 2])).toBe(1)
  })

  test("case 3", () => {
    expect(target([5, 2, 1, 2, 1, 5])).toBe(14)
  })

  test("case 4", () => {
    expect(
      target([
        6,
        4,
        2,
        0,
        3,
        2,
        0,
        3,
        1,
        4,
        5,
        3,
        2,
        7,
        5,
        3,
        0,
        1,
        2,
        1,
        3,
        4,
        6,
        8,
        1,
        3,
      ])
    ).toBe(83)
  })
})

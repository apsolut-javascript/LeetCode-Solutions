import target from "../solutions/55.jump-game"

describe("problem 55", () => {
  test("case 1", () => {
    expect(target([2, 3, 1, 1, 4])).toBeTruthy()
  })

  test("case 2", () => {
    expect(target([3, 2, 1, 0, 4])).toBeFalsy()
  })

  test("case 3", () => {
    expect(target([0, 2, 1, 0, 4])).toBeFalsy()
  })

  test("case 4", () => {
    expect(target([0])).toBeTruthy()
  })

  test("case 5", () => {
    expect(target([1, 1, 1, 0])).toBeTruthy()
  })

  test("case 6", () => {
    expect(target([2, 0, 1, 0, 1])).toBeFalsy()
  })
})

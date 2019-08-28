import target from "../solutions/66.plus-one"

describe("problem 66", () => {
  test("case 1", () => {
    expect(target([1, 2, 3])).toEqual([1, 2, 4])
  })

  test("case 2", () => {
    expect(target([4, 3, 2, 1])).toEqual([4, 3, 2, 2])
  })

  test("case 3", () => {
    expect(target([9, 9])).toEqual([1, 0, 0])
  })

  test("case 4", () => {
    expect(target([9])).toEqual([1, 0])
  })
})

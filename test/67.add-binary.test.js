import target from "../solutions/67.add-binary"

describe("problem 67", () => {
  test("case 1", () => {
    expect(target("11", "1")).toBe("100")
  })

  test("case 2", () => {
    expect(target("1010", "1011")).toBe("10101")
  })
})

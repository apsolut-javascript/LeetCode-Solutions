import target from "../solutions/43.multiply-strings"

describe("problem 43", () => {
  test("case 1", () => {
    expect(target("2", "3")).toBe("6")
  })

  test("case 2", () => {
    expect(target("123", "456")).toBe("56088")
  })
})

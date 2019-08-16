import target from "../solutions/60.permutation-sequence"

describe("problem 60", () => {
  test("case 1", () => {
    expect(target(3, 3)).toBe("213")
  })

  test("case 2", () => {
    expect(target(4, 9)).toBe("2314")
  })

  test("case 3", () => {
    expect(target(4, 4)).toBe("1342")
  })

  test("case 4", () => {
    expect(target(4, 1)).toBe("1234")
  })

  test("case 5", () => {
    expect(target(4, 24)).toBe("4321")
  })
})

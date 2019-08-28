import target from "../solutions/65.valid-number"

describe("problem 65", () => {
  test("case 1", () => {
    expect(target("0")).toBeTruthy()
  })

  test("case 2", () => {
    expect(target("2e10")).toBeTruthy()
  })

  test("case 3", () => {
    expect(target("-90e3")).toBeTruthy()
  })

  test("case 4", () => {
    expect(target("6e-1")).toBeTruthy()
  })

  test("case 5", () => {
    expect(target("53.5e93")).toBeTruthy()
  })

  test("case 6", () => {
    expect(target("abc")).toBeFalsy()
  })

  test("case 7", () => {
    expect(target("1 a")).toBeFalsy()
  })

  test("case 8", () => {
    expect(target("1e")).toBeFalsy()
  })

  test("case 9", () => {
    expect(target("e3")).toBeFalsy()
  })

  test("case 10", () => {
    expect(target("99e2.5")).toBeFalsy()
  })

  test("case 11", () => {
    expect(target("--6")).toBeFalsy()
  })

  test("case 12", () => {
    expect(target("-+3")).toBeFalsy()
  })

  test("case 13", () => {
    expect(target("95a54e53")).toBeFalsy()
  })

  test("case 14", () => {
    expect(target(" ")).toBeFalsy()
  })

  test("case 15", () => {
    expect(target("123.123.123")).toBeFalsy()
  })

  test("case 16", () => {
    expect(target("123..123123")).toBeFalsy()
  })

  test("case 17", () => {
    expect(target("123.")).toBeTruthy()
  })

  test("case 18", () => {
    expect(target(".123")).toBeTruthy()
  })
})

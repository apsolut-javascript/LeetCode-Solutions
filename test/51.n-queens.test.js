import target from "../solutions/51.n-queens"

describe("problem 51", () => {
  test("case 1", () => {
    expect(target(4)).toEqual([
      [
        ".Q..", // Solution 1
        "...Q",
        "Q...",
        "..Q.",
      ],

      [
        "..Q.", // Solution 2
        "Q...",
        "...Q",
        ".Q..",
      ],
    ])
  })
})

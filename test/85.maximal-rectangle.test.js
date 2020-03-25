import target from "../solutions/85.maximal-rectangle";

describe("problem 85", () => {
  test("case 1", () => {
    expect(
      target([
        ["1", "0", "1", "0", "0"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"],
      ])
    ).toBe(6);
  });
});

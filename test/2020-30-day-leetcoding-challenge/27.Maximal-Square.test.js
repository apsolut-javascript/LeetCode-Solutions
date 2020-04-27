import target from "../../solutions/2020-30-day-leetcoding-challenge/27.Maximal-Square";

describe("tests for 2020-30-day-leetcoding-challenge problem 27", () => {
  test("case 1", () => {
    expect(
      target([
        [1, 0, 1, 0, 0],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0],
      ])
    ).toBe(4);
  });

  test("case 2", () => {
    expect(
      target([
        ["1", "0", "1", "0", "0"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"],
      ])
    ).toBe(4);
  });

  test("case 3", () => {
    expect(
      target([
        ["0", "0", "0", "1"],
        ["1", "1", "0", "1"],
        ["1", "1", "1", "1"],
        ["0", "1", "1", "1"],
        ["0", "1", "1", "1"],
      ])
    ).toBe(9);
  });
});

import target from "../../solutions/2020-30-day-leetcoding-challenge/18.Minimum-Path-Sum";

describe("tests for 2020-30-day-leetcoding-challenge problem 18", () => {
  test("case 1", () => {
    const input = [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ];
    expect(target(input)).toBe(7);
  });
});

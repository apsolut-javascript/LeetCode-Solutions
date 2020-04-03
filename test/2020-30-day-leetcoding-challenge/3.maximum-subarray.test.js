import target from "../../solutions/2020-30-day-leetcoding-challenge/3.maximum-subarray";

describe("tests for 2020-30-day-leetcoding-challenge problem 3", () => {
  test("case 1", () => {
    expect(target([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test("case 2", () => {
    expect(target([-1])).toBe(-1);
  });
});

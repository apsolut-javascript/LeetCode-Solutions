import target from "../../solutions/2020-30-day-leetcoding-challenge/1.single-number";

describe("tests for 2020-30-day-leetcoding-challenge problem 1", () => {
  test("case 1", () => {
    expect(target([2, 2, 1])).toBe(1);
  });

  test("case 2", () => {
    expect(target([4, 1, 2, 1, 2])).toBe(4);
  });
});

import target from "../../solutions/2020-30-day-leetcoding-challenge/7.Counting-Elements";

describe("tests for 2020-30-day-leetcoding-challenge problem 5", () => {
  test("case 1", () => {
    expect(target([1, 2, 3])).toBe(2);
  });

  test("case 2", () => {
    expect(target([1, 1, 3, 3, 5, 5, 7, 7])).toBe(0);
  });

  test("case 3", () => {
    expect(target([1, 3, 2, 3, 5, 0])).toBe(3);
  });

  test("case 4", () => {
    expect(target([1, 1, 2, 2])).toBe(2);
  });
});

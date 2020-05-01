import target from "../../solutions/2020-30-day-leetcoding-challenge/5.Best-Time-to-Buy-and-Sell-Stock-II";

describe("tests for 2020-30-day-leetcoding-challenge problem 5", () => {
  test("case 1", () => {
    expect(target([7, 1, 5, 3, 6, 4])).toBe(7);
  });

  test("case 2", () => {
    expect(target([1, 2, 3, 4, 5])).toBe(4);
  });

  test("case 3", () => {
    expect(target([7, 6, 4, 3, 1])).toBe(0);
  });

  test("case 4", () => {
    const length = 100000;
    expect(target(Array.from({ length }, (_, i) => length - i))).toBe(0);
  });
});

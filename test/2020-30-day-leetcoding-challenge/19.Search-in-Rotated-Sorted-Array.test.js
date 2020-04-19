import target from "../../solutions/2020-30-day-leetcoding-challenge/19.Search-in-Rotated-Sorted-Array";

describe("tests for 2020-30-day-leetcoding-challenge problem 18", () => {
  test("case 1", () => {
    expect(target([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  test("case 2", () => {
    expect(target([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  test("case 3", () => {
    expect(target([1, 3], 0)).toBe(-1);
  });

  test("case 4", () => {
    expect(target([1, 3], 2)).toBe(-1);
  });

  test("case 5", () => {
    expect(target([1, 3], 1)).toBe(0);
  });
});

import target from "../../solutions/2020-30-day-leetcoding-challenge/12.Last-Stone-Weight";

describe("tests for 2020-30-day-leetcoding-challenge problem 11", () => {
  test("case 1", () => {
    expect(target([2, 7, 4, 1, 8, 1])).toBe(1);
  });

  test("case 2", () => {
    expect(target([2, 2])).toBe(0);
  });

  test("case 3", () => {
    expect(target([8, 10, 4])).toBe(2);
  });
});

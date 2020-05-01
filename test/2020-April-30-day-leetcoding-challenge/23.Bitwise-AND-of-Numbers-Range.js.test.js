import target from "../../solutions/2020-30-day-leetcoding-challenge/23.Bitwise-AND-of-Numbers-Range";

describe("tests for 2020-30-day-leetcoding-challenge problem 23", () => {
  test("case 1", () => {
    expect(target(5, 7)).toBe(4);
  });

  test("case 2", () => {
    expect(target(0, 1)).toBe(0);
  });

  test("case 3", () => {
    expect(target(0, 2147483647)).toBe(0);
  });

  test("case 4", () => {
    expect(target(5, 7)).toBe(4);
  });
});

import target from "../../solutions/2020-30-day-leetcoding-challenge/25.Jump-Game";

describe("tests for 2020-30-day-leetcoding-challenge problem 23", () => {
  test("case 1", () => {
    expect(target([2, 3, 1, 1, 4])).toBeTruthy();
  });

  test("case 2", () => {
    expect(target([3, 2, 1, 0, 4])).toBeFalsy();
  });

  test("case 3", () => {
    expect(target([0])).toBeTruthy();
  });
});

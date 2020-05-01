import target from "../../solutions/2020-30-day-leetcoding-challenge/15.Product-of-Array-Except-Self";

describe("tests for 2020-30-day-leetcoding-challenge problem 15", () => {
  test("case 1", () => {
    expect(target([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  test("case 2", () => {
    expect(target([0, 0, 0])).toEqual([0, 0, 0]);
  });

  test("case 3", () => {
    expect(target([1, 0])).toEqual([0, 1]);
  });
});

import target from "../../solutions/2020-30-day-leetcoding-challenge/14.Perform-String-Shifts";

describe("tests for 2020-30-day-leetcoding-challenge problem 14", () => {
  test("case 1", () => {
    expect(
      target("abc", [
        [0, 1],
        [1, 2],
      ])
    ).toBe("cab");
  });

  test("case 2", () => {
    expect(
      target("abcdefg", [
        [1, 1],
        [1, 1],
        [0, 2],
        [1, 3],
      ])
    ).toBe("efgabcd");
  });
});

import target from "../../solutions/2020-30-day-leetcoding-challenge/17.Number-of-Islands";

describe("tests for 2020-30-day-leetcoding-challenge problem 17", () => {
  test("case 1", () => {
    const input = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    expect(target(input)).toBe(1);
  });

  test("case 2", () => {
    const input = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    expect(target(input)).toBe(3);
  });

  test("case 3", () => {
    const input = [
      ["1", "0", "1", "1", "1"],
      ["1", "0", "1", "0", "1"],
      ["1", "1", "1", "0", "1"],
    ];
    expect(target(input)).toBe(1);
  });
});

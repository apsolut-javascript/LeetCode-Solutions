const target = require("./14.Angle_Between_Hands_of_a_Clock");

describe("2020-July-leetcoding-challenge 14", () => {
  test("case 1", () => {
    expect(target(12, 30)).toBe(165);
  });

  test("case 2", () => {
    expect(target(3, 30)).toBe(75);
  });

  test("case 3", () => {
    expect(target(3, 15)).toBe(7.5);
  });

  test("case 4", () => {
    expect(target(4, 50)).toBe(155);
  });

  test("case 5", () => {
    expect(target(12, 0)).toBe(0);
  });
});

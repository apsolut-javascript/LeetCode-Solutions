import target from "../solutions/70.climbing-stairs";

describe("problem 70", () => {
  test("case 1", () => {
    expect(target(2)).toBe(2);
  });

  test("case 2", () => {
    expect(target(3)).toBe(3);
  });

  test("case 3", () => {
    expect(target(4)).toBe(5);
  });
});

import target from "../solutions/69.sqrt-x";

describe("problem 69", () => {
  test("case 1", () => {
    expect(target(4)).toBe(2);
  });

  test("case 2", () => {
    expect(target(8)).toBe(2);
  });

  test("case 3", () => {
    expect(target(5)).toBe(2);
  });
});

import target from "../solutions/72.edit-distance";

describe("problem 72", () => {
  test("case 1", () => {
    expect(target("horse", "ros")).toBe(3);
  });

  test("case 2", () => {
    expect(target("intention", "execution")).toBe(5);
  });

  test("case 3", () => {
    expect(target("a", "b")).toBe(1);
  });
});

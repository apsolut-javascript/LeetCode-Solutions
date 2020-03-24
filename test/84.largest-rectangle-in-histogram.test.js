import target from "../solutions/84.largest-rectangle-in-histogram";

describe("problem 84", () => {
  test("case 1", () => {
    expect(target([2, 1, 5, 6, 2, 3])).toBe(10);
  });

  test("case 2", () => {
    expect(target([1, 1, 1, 1, 1, 1])).toBe(6);
  });

  test("case 3", () => {
    expect(target([1])).toBe(1);
  });

  test("case 4", () => {
    expect(target([2])).toBe(2);
  });

  test("case 5", () => {
    expect(target([2, 1])).toBe(2);
  });

  test("case 6", () => {
    expect(target([20])).toBe(20);
  });

  test("case 7", () => {
    expect(target([0])).toBe(0);
  });

  test("case 8", () => {
    expect(target([1, 1, 1, 5, 1, 1, 1])).toBe(7);
  });

  test("case 9", () => {
    expect(target([1, 2])).toBe(2);
  });

  test("case 10", () => {
    expect(target(Array.from({ length: 20000 }, (_, i) => i))).toBe(100000000);
  });

  test("case 11", () => {
    expect(target([1, 2, 2])).toBe(4);
  });

  test("case 12", () => {
    expect(target([4, 2, 0, 3, 2, 5])).toBe(6);
  });
});

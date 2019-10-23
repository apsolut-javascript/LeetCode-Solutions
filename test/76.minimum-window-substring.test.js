import target from "../solutions/76.minimum-window-substring";

describe("problem 76", () => {
  test("case 1", () => {
    expect(target("ADOBECODEBANC", "ABC")).toBe("BANC");
  });

  test("case 2", () => {
    expect(target("a", "aa")).toBe("");
  });

  test("case 3", () => {
    expect(target("aa", "aa")).toBe("aa");
  });

  test("case 4", () => {
    expect(target("BANC", "ABC")).toBe("BANC");
  });
});

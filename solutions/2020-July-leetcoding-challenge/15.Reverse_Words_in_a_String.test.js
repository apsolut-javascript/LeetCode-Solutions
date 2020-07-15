const target = require("./15.Reverse_Words_in_a_String");

describe("2020-July-leetcoding-challenge 15", () => {
  test("case 1", () => {
    expect(target("the sky is blue")).toBe("blue is sky the");
  });

  test("case 2", () => {
    expect(target("  hello world!  ")).toBe("world! hello");
  });

  test("case 3", () => {
    expect(target("a   good   example")).toBe("example good a");
  });
});

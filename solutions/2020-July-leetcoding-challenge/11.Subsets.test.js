const target = require("./11.Subsets");

describe("2020-July-leetcoding-challenge 11", () => {
  test("case 1", () => {
    const result = target([1, 2, 3]);
    const ans = [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []];
    expect(result).toHaveLength(8);
    ans.forEach(a => {
      expect(result).toContainEqual(a);
    });
  });
});

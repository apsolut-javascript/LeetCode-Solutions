const target = require("./24.All_Paths_From_Source_to_Target");

describe("2020-July-leetcoding-challenge 24", () => {
  test("case 1", () => {
    const ans = [
      [0, 1, 3],
      [0, 2, 3],
    ];

    const result = target([[1, 2], [3], [3], []]);
    console.log("---------> : result", result);
    expect(result).toHaveLength(ans.length);
    ans.forEach(a => {
      expect(result).toContainEqual(a);
    });
  });
});

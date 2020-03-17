import target from "../solutions/79.word-search";

describe("problem 79", () => {
  test("case 1", () => {
    expect(
      target(
        [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        "ABCCED"
      )
    ).toBeTruthy();
  });

  test("case 2", () => {
    expect(
      target(
        [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        "SEE"
      )
    ).toBeTruthy();
  });

  test("case 3", () => {
    expect(
      target(
        [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        "ABCB"
      )
    ).toBeFalsy();
  });
});

const target = require("./21.Word_Search");

describe("2020-July-leetcoding-challenge 21", () => {
  const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];

  test("case 1", () => {
    expect(target(board, "ABCCED")).toBeTruthy();
  });

  test("case 2", () => {
    expect(target(board, "SEE")).toBeTruthy();
  });

  test("case 3", () => {
    expect(target(board, "ABCB")).toBeFalsy();
  });
});

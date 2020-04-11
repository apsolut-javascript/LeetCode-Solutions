import target from "../../solutions/2020-30-day-leetcoding-challenge/11.Diameter-of-Binary-Tree";

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

describe("tests for 2020-30-day-leetcoding-challenge problem 11", () => {
  test("case 1", () => {
    const root = new TreeNode();
    root.left = new TreeNode();
    root.right = new TreeNode();
    root.left.left = new TreeNode();
    root.left.right = new TreeNode();
    expect(target(root)).toBe(3);
  });
});

const target = require("./12.Reverse_Bits");

describe("2020-July-leetcoding-challenge 12", () => {
  test("case 1", () => {
    const result = target(43261596);
    expect(result.toBit()).toBe((964176192).toBit());
  });

  test("case 2", () => {
    const result = target(4294967293);
    expect(result.toBit()).toBe((3221225471).toBit());
  });
});

Number.prototype.toBit = function () {
  return this.toString(2).padStart(32, "0");
};

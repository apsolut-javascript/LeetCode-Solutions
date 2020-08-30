const target = require("./29.Pancake_Sorting");

describe("2020-august 29", () => {
  test("case 1", () => {
    const result = target([1, 2, 3]);
    expect(result).toEqual([]);
  });

  test("case 2", () => {
    const question = [3, 2, 4, 1];
    const result = target(question);
    console.log("---------> : question", question);
    console.log("---------> : result", result);
    for (let i = 0; i < question.length - 1; i++) {
      expect(question[i]).toBeLessThan(question[i + 1]);
    }
    expect(result.length).toBeLessThan(question.length * 10);
    result.forEach(a => expect(a).toBeGreaterThan(1));
  });
});

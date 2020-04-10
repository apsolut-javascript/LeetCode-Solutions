import target from "../../solutions/2020-30-day-leetcoding-challenge/10.Min-Stack";

describe("tests for 2020-30-day-leetcoding-challenge problem 10", () => {
  test("case 1", () => {
    const t = new target();
    // expect(t.getMin()).toBeUndefined();
    t.push(1);
    expect(t.top()).toBe(1);
    t.push(-1);
    expect(t.getMin()).toBe(-1);
    expect(t.pop()).toBe(-1);
    expect(t.getMin()).toBe(1);
  });
});

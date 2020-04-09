import target from "../../solutions/2020-30-day-leetcoding-challenge/9.Backspace-String-Compare";

describe("tests for 2020-30-day-leetcoding-challenge problem 9", () => {
  test("case 1", () => {
    expect(target("ab#c", "ad#c")).toBeTruthy();
  });

  test("case 2", () => {
    expect(target("ab##", "c#d#")).toBeTruthy();
  });

  test("case 3", () => {
    expect(target("a##c", "#a#c")).toBeTruthy();
  });

  test("case 4", () => {
    expect(target("a#c", "b")).toBeFalsy();
  });
});

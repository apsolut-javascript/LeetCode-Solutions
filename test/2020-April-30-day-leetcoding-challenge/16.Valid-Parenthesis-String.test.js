import target from "../../solutions/2020-30-day-leetcoding-challenge/16.Valid-Parenthesis-String";

describe("tests for 2020-30-day-leetcoding-challenge problem 15", () => {
  test("case 1", () => {
    expect(target("()")).toBeTruthy();
  });

  test("case 2", () => {
    expect(target("(*)")).toBeTruthy();
  });

  test("case 3", () => {
    expect(target("(*))")).toBeTruthy();
  });

  test("case 4", () => {
    expect(target("((*)")).toBeTruthy();
  });

  test("case 5", () => {
    expect(target("*(()")).toBeFalsy();
  });

  test("case 6", () => {
    expect(
      target(
        "(())()())(*))(((((())()*))**))**()(*(()()*)(**(())()**)((**(()(((()()**)())*(*))(())()()*"
      )
    ).toBeFalsy();
  });

  test("case 7", () => {
    expect(target("*())")).toBeTruthy();
  });

  test("case 8", () => {
    expect(
      target("(())((())()()(*)(*()(())())())()()((()())((()))(*")
    ).toBeFalsy();
  });

  test("case 9", () => {
    expect(target("((())()()(*)(*()(())())())()()((()())((()))(*")).toBeFalsy();
  });

  test("case 10", () => {
    expect(
      target(
        "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"
      )
    ).toBeFalsy();
  });

  test("case 11", () => {
    expect(
      target("(((*))(((*)))(((*)")
      // target("(())(())(((()*()()()))()((()()(*()())))(((*)()")
    ).toBeFalsy();
  });
});

// ("((*)(*()(())())())()()((()())((()))(*");

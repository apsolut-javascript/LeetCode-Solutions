import target from "../../solutions/2020-30-day-leetcoding-challenge/26.Longest-Common-Subsequence";

describe("tests for 2020-30-day-leetcoding-challenge problem 26", () => {
  test("case 1", () => {
    expect(target("abcde", "ace")).toBe(3);
  });

  test("case 2", () => {
    expect(target("ace", "ace")).toBe(3);
  });

  test("case 3", () => {
    expect(target("ace", "dfg")).toBe(0);
  });

  test("case 4", () => {
    expect(target("cbade", "ace")).toBe(2);
  });

  test("case 5", () => {
    expect(target("eeebbccba", "ace")).toBe(1);
  });

  test("case 6", () => {
    expect(target("ylqpejqbalahwr", "yrkzavgdmdgtqpg")).toBe(3);
  });

  test("case 7", () => {
    expect(
      target(
        "hergrwzsjgjmnwfwjyxyhafstetgbydobynmxabavodsfwbqbevozkjkpwvw",
        "pgrwlabutilctsrgbgxorwjezspgxwredqjklabwterwzyzstwpobwjujwjkb"
      )
    ).toBe(19);
  });
});

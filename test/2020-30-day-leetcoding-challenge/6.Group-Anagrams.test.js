import target from "../../solutions/2020-30-day-leetcoding-challenge/6.Group-Anagrams";

describe("tests for 2020-30-day-leetcoding-challenge problem 5", () => {
  test("case 1", () => {
    const result = target(["eat", "tea", "tan", "ate", "nat", "bat"]);
    const answer = [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]];
    expect(result).toHaveLength(answer.length);
    answer.forEach(a => a.sort());
    result.forEach(a => {
      a.sort();
      expect(answer).toContainEqual(a);
    });
  });
});

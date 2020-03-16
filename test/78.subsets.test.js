import target from "../solutions/78.subsets";

describe("problem 78", () => {
  test("case 1", () => {
    const answer = [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []];

    const result = target([1, 2, 3]);

    expect(result).toHaveLength(answer.length);
    answer.forEach(a => {
      expect(result).toContainEqual(a);
    });
  });

  test("case 2", () => {
    const answer = [
      [],
      [3],
      [2],
      [2, 3],
      [4],
      [3, 4],
      [2, 4],
      [2, 3, 4],
      [1],
      [1, 3],
      [1, 2],
      [1, 2, 3],
      [1, 4],
      [1, 3, 4],
      [1, 2, 4],
      [1, 2, 3, 4],
    ];

    const result = target([3, 2, 4, 1]);

    expect(result).toHaveLength(answer.length);
    answer.forEach(a => {
      expect(result).toContainEqual(a);
    });
  });

  test("case 3", () => {
    const answer = [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []];

    const result = target([1, 2, 3, 4, 5, 6, 7, 8, 10, 0]);

    expect(result).toHaveLength(answer.length);
    answer.forEach(a => {
      expect(result).toContainEqual(a);
    });
  });
});

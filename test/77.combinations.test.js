import target from "../solutions/77.combinations";

describe("problem 77", () => {
  test("case 1", () => {
    const answer = [
      [2, 4],
      [3, 4],
      [2, 3],
      [1, 2],
      [1, 3],
      [1, 4],
    ];
    const result = target(4, 2);
    expect(result).toHaveLength(answer.length);
    result.forEach(a => {
      expect(answer).toContainEqual(a);
    });
  });

  test("case 2", () => {
    const answer = [[2], [3], [4], [1]];
    const result = target(4, 1);
    expect(result).toHaveLength(answer.length);
    result.forEach(a => {
      expect(answer).toContainEqual(a);
    });
  });

  test("case 3", () => {
    const answer = [
      [1, 2, 3],
      [2, 3, 4],
      [1, 2, 4],
      [1, 3, 4],
    ];
    const result = target(4, 3);
    expect(result).toHaveLength(answer.length);
    result.forEach(a => {
      expect(answer).toContainEqual(a);
    });
  });

  test("case 4", () => {
    const answer = [[1, 2, 3, 4]];
    const result = target(4, 4);
    expect(result).toHaveLength(answer.length);
    result.forEach(a => {
      expect(answer).toContainEqual(a);
    });
  });

  test("case 5", () => {
    const answer = [
      [1, 2, 3, 4],
      [1, 2, 3, 5],
      [1, 2, 4, 5],
      [1, 3, 4, 5],
      [2, 3, 4, 5],
    ];
    const result = target(5, 4);
    expect(result).toHaveLength(answer.length);
    result.forEach(a => {
      expect(answer).toContainEqual(a);
    });
  });

  test("case 6", () => {
    const answer = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]];
    const result = target(13, 13);
    expect(result).toHaveLength(answer.length);
    result.forEach(a => {
      expect(answer).toContainEqual(a);
    });
  });
});

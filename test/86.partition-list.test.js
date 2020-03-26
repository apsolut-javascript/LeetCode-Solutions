import { createList, toList } from "../util/linked-list";
import target from "../solutions/86.partition-list";

describe("problem 86", () => {
  test("case 1", () => {
    const result = toList(target(createList([1, 4, 3, 2, 5, 2]), 3));
    const answer = [1, 2, 2, 4, 3, 5];
    expect(answer).toEqual(result);
  });

  test("case 2", () => {
    const result = toList(target(createList([1, 4, 3, 2, 5, 2]), 10));
    const answer = [1, 4, 3, 2, 5, 2];
    expect(answer).toEqual(result);
  });

  test("case 3", () => {
    const result = toList(target(createList([1, 4, 3, 2, 5, 2]), 0));
    const answer = [1, 4, 3, 2, 5, 2];
    expect(answer).toEqual(result);
  });
});

import target from "../solutions/82.remove-duplicates-from-sorted-list-ii";
import { createList, toList } from "../util/linked-list";

describe("problem 82", () => {
  test("case 1", () => {
    const head = createList([1, 2, 3, 3, 4, 4, 5]);
    const result = toList(target(head));
    const answer = [1, 2, 5];
    expect(result).toEqual(answer);
  });

  test("case 2", () => {
    const head = createList([1, 1, 1, 2, 3]);
    const result = toList(target(head));
    const answer = [2, 3];
    expect(result).toEqual(answer);
  });

  test("case 3", () => {
    const head = createList([1, 1, 1, 2, 3, 3]);
    const result = toList(target(head));
    const answer = [2];
    expect(result).toEqual(answer);
  });

  test("case 4", () => {
    const head = createList([1]);
    const result = toList(target(head));
    const answer = [1];
    expect(result).toEqual(answer);
  });

  test("case 5", () => {
    const head = createList([1, 1, 2, 2]);
    const result = toList(target(head));
    const answer = [];
    expect(result).toEqual(answer);
  });
});

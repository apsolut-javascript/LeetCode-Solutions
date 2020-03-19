import { createList, toList } from "../util/linked-list";
import target from "../solutions/83.remove-duplicates-from-sorted-list";

describe("problem 83", () => {
  test("case 1", () => {
    const head = createList([1, 2, 3, 3, 4, 4, 5]);
    const result = toList(target(head));
    const answer = [1, 2, 3, 4, 5];
    expect(result).toEqual(answer);
  });

  test("case 2", () => {
    const head = createList([1, 1, 1, 2, 3]);
    const result = toList(target(head));
    const answer = [1, 2, 3];
    expect(result).toEqual(answer);
  });

  test("case 3", () => {
    const head = createList([1, 1, 1, 2, 3, 3]);
    const result = toList(target(head));
    const answer = [1, 2, 3];
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
    const answer = [1, 2];
    expect(result).toEqual(answer);
  });

  test("case 6", () => {
    const head = createList([]);
    const result = toList(target(head));
    const answer = [];
    expect(result).toEqual(answer);
  });
});

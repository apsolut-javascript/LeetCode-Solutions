import target from "../../solutions/2020-30-day-leetcoding-challenge/8.Middle-of-the-Linked-List";
import { createList, toList } from "../../util/linked-list";

describe("tests for 2020-30-day-leetcoding-challenge problem 8", () => {
  test("case 1", () => {
    const result = toList(target(createList([1, 2, 3, 4, 5])));
    const asnwer = [3, 4, 5];
    expect(result).toEqual(asnwer);
  });

  test("case 2", () => {
    const result = toList(target(createList([1, 2, 3, 4, 5, 6])));
    const asnwer = [4, 5, 6];
    expect(result).toEqual(asnwer);
  });

  test("case 3", () => {
    const result = toList(target(createList([1, 2, 3, 4])));
    const asnwer = [3, 4];
    expect(result).toEqual(asnwer);
  });
});

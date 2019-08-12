import target from "../solutions/49.group-anagrams"
import { twoDimensionsArrayCompare } from "../util/comparator"

describe("problem 49", () => {
  test("case 1", () => {
    const output = target(["eat", "tea", "tan", "ate", "nat", "bat"])
    const ans = [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]]
    twoDimensionsArrayCompare(output, ans)
  })
})

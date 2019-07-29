import findSubstring from "../solutions/30.substring-with-concatenation-of-all-words"

describe("problem 30", () => {
  test("case 1", () => {
    const result = findSubstring("barfoothefoobarman", ["foo", "bar"])
    const answer = [0, 9]
    answer.forEach(a => {
      expect(result).toContainEqual(a)
    })

    expect(result).toHaveLength(answer.length)
  })

  test("case 2", () => {
    const result = findSubstring("wordgoodgoodgoodbestword", [
      "word",
      "good",
      "best",
      "word",
    ])
    const answer = []
    answer.forEach(a => {
      expect(result).toContainEqual(a)
    })

    expect(result).toHaveLength(answer.length)
  })
})

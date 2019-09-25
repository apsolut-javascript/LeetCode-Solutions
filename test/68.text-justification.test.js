import target from "../solutions/68.text-justification";

describe("problem 68", () => {
  test("case 1", () => {
    expect(
      target(
        ["This", "is", "an", "example", "of", "text", "justification."],
        16
      )
    ).toEqual(["This    is    an", "example  of text", "justification.  "]);
  });

  test("case 2", () => {
    expect(
      target(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
    ).toEqual(["What   must   be", "acknowledgment  ", "shall be        "]);
  });

  test("case 3", () => {
    expect(
      target(
        [
          "Science",
          "is",
          "what",
          "we",
          "understand",
          "well",
          "enough",
          "to",
          "explain",
          "to",
          "a",
          "computer.",
          "Art",
          "is",
          "everything",
          "else",
          "we",
          "do",
        ],
        20
      )
    ).toEqual([
      "Science  is  what we",
      "understand      well",
      "enough to explain to",
      "a  computer.  Art is",
      "everything  else  we",
      "do                  ",
    ]);
  });
});

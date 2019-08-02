export function twoDimensionsArrayCompare(result, answer) {
  result.forEach(a => {
    expect(
      answer.some(b => b.length == a.length && a.every(c => b.includes(c)))
    ).toBeTruthy()
  })

  expect(result).toHaveLength(answer.length)
}

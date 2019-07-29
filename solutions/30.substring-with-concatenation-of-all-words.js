/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (!s || words.length == 0 || words.every(a => a.length == 0)) return []

  const result = []
  const starts = words.reduce((p, c) => {
    p.add(c[0])
    return p
  }, new Set())

  const wordLength = words[0].length
  const maxLength = s.length - words.length * wordLength + 1
  outer: for (let i = 0; i < maxLength; i++) {
    if (!starts.has(s[i])) {
      continue
    }

    const remainWords = [...words]
    for (let j = 0; j < words.length; j++) {
      const startIndex = i + j * wordLength
      const word = s.slice(startIndex, startIndex + wordLength)
      const index = remainWords.indexOf(word)
      if (index == -1) {
        continue outer
      }
      remainWords.splice(index, 1)
    }
    result.push(i)
  }

  return result
}

module.exports = findSubstring

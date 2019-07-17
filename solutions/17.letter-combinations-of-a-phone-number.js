/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

const digitMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return []
  const letters = Array.prototype.map.call(digits, a => digitMap[a])
  while (letters.length > 1) {
    const x = letters[letters.length - 2]
    const y = letters[letters.length - 1]
    const combined = []
    x.forEach(a => y.forEach(b => combined.push(a + b)))
    letters[letters.length - 2] = combined

    letters.pop()
  }

  return letters.pop()
}

module.exports = letterCombinations

/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

const romanMapping = {
  CM: 900,
  CD: 400,
  XL: 40,
  XC: 90,
  IV: 4,
  IX: 9,
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let result = 0
  let index = 0
  while (index < s.length) {
    while (index + 1 < s.length) {
      const sub = s.slice(index, index + 2)
      const val = romanMapping[sub]
      if (val) {
        index += 2
        result += val
        continue
      }

      break
    }

    const val = romanMapping[s[index]]
    if (val) {
      result += val
      index += 1
    }
  }
  return result
}

module.exports = romanToInt

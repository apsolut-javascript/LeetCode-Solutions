/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (b.length > a.length) return addBinary(b, a)

  const result = a.split("")

  let isUp = false
  let i = a.length - 1

  for (let j = b.length - 1; j >= 0; i--, j--) {
    const sum = a[i] + b[j]
    if (sum == "00") {
      result[i] = isUp ? "1" : "0"
      isUp = false
    } else if (sum == "11") {
      result[i] = isUp ? "1" : "0"
      isUp = true
    } else {
      result[i] = isUp ? "0" : "1"
    }
  }

  while (isUp) {
    if (i >= 0) {
      if (a[i] == "1") {
        result[i] = "0"
      } else {
        result[i] = "1"
        break
      }
    } else {
      result.unshift("1")
      break
    }

    i--
  }

  return result.join("")
}

module.exports = addBinary

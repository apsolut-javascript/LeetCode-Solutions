/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

const anotherNumRomanMap = (num, one, five, ten) => {
  switch (num) {
    case 10:
      return ten
    case 9:
      return `${one}${ten}`
    case 8:
      return `${five}${one}${one}${one}`
    case 7:
      return `${five}${one}${one}`
    case 6:
      return `${five}${one}`
    case 5:
      return five
    case 4:
      return `${one}${five}`
    case 3:
      return `${one}${one}${one}`
    case 2:
      return `${one}${one}`
    case 1:
      return one
  }

  throw Error("Invalid Number: ", num)
}

// const numRomanMap = (num, one, five, ten) => {
//   return [
//     `${one}`,
//     `${one}${one}`,
//     `${one}${one}${one}`,
//     `${one}${five}`,
//     `${five}`,
//     `${five}${one}`,
//     `${five}${one}${one}`,
//     `${five}${one}${one}${one}`,
//     `${one}${ten}`,
//     `${ten}`,
//   ][num - 1]
// }

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
  let remain = num
  let result = ""
  while (remain > 1000) {
    remain -= 1000
    result += "M"
  }

  if (remain > 100) {
    const quotient = Math.floor(remain / 100)
    result += anotherNumRomanMap(quotient, "C", "D", "M")
    remain %= 100
  }

  if (remain > 10) {
    const quotient = Math.floor(remain / 10)
    result += anotherNumRomanMap(quotient, "X", "L", "C")
    remain %= 10
  }

  if (remain > 0) result += anotherNumRomanMap(remain, "I", "V", "X")

  return result
}

module.exports = intToRoman

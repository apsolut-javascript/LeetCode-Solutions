/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 */

const baseReg = /^[+-]?(\d*\.?\d+|\d+\.)$/
const exponentReg = /^[+-]?\d+$/

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  s = s.trim()
  if (s.length == 0) return false

  const [base, exponent, other] = s.split("e")
  if (other != undefined) return false
  if (!baseReg.test(base)) return false
  if (exponent != undefined) {
    if (!exponentReg.test(exponent)) return false
  }

  return true
}

module.exports = isNumber

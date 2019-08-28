/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  return /^\s*[+-]?(\d*\.?\d+|\d+\.)(e[+-]?\d+)?\s*$/.test(s)
}

module.exports = isNumber

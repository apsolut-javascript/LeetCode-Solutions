/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

const cache = [[], ["()"], ["()()", "(())"]]
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (!cache[n]) {
    const result = new Set()
    generateParenthesis(n - 1).forEach(a => {
      for (let i = a.length - 1; i > 0; i--) {
        if (a.charAt(i - 1) == "(" && a.charAt(i) == ")") {
          result.add(a.slice(0, i) + "()" + a.slice(i))
          result.add(a.slice(0, i + 1) + "()" + a.slice(i + 1))
          i--
        }
      }
    })
    cache[n] = [...result.values()]
  }

  return cache[n]
}

module.exports = generateParenthesis

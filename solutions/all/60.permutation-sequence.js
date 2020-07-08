/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  if (n == 1) return "1"
  if (n == 2) return k == 1 ? "12" : "21"

  return joinWords(Array.from({ length: n }, (_, i) => String(i + 1)), k - 1)
}

function joinWords(words, k) {
  if (words.length == 1) return words[0]

  const totalLength = getPermutationLength(words.length)
  const groupLength = totalLength / words.length
  const group = Math.trunc(k / groupLength)
  const word = words.splice(group, 1)
  const newK = k % groupLength
  return word + joinWords(words, newK)
}

const cache = [1, 2]
function getPermutationLength(n) {
  if (cache[n - 1]) return cache[n - 1]

  const result = n * getPermutationLength(n - 1)
  cache[n - 1] = result
  return result
}

module.exports = getPermutation

/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  if (candidates.length == 0) return []
  candidates.sort((a, b) => a - b)

  const result = getResult(candidates, target, 0)
  return result
}

function getResult(candidates, target, start) {
  const result = []

  for (let i = start; i < candidates.length; i++) {
    const val = candidates[i]
    if (val > target) break
    if (val == target) {
      result.push([target])
      break
    }
    if (i > start && val == candidates[i - 1]) continue

    const newTarget = target - val
    const subResult = getResult(candidates, newTarget, i + 1)
    if (subResult && subResult.length > 0) {
      subResult.forEach(a => {
        result.push([val, ...a])
      })
    }
  }

  return result
}

module.exports = combinationSum2

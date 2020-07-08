/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  if (candidates.length == 0) return []

  const result = []

  for (let i = candidates.length; i >= 0; i--) {
    let val = candidates[i]
    if (val > target) continue
    const sub = candidates.slice(0, i)
    const current = [val]
    while (val <= target) {
      if (val == target) {
        result.push([...current])
        break
      }

      const subResults = combinationSum(sub, target - val)
      if (subResults.length) {
        result.push(...subResults.map(a => [...a, ...current]))
      }
      val += candidates[i]
      current.push(candidates[i])
    }
  }

  return result
}

module.exports = combinationSum

/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let first = tryMerge(intervals)
  let final = tryMerge(first)
  while (final.length != first.length) {
    first = final
    final = tryMerge(first)
  }

  return final
}

function tryMerge(intervals) {
  const result = []
  outer: for (let i = 0; i < intervals.length; i++) {
    const [intervalLeft, intervalRight] = intervals[i]
    for (let j = result.length - 1; j >= 0; j--) {
      const [resultLeft, resultRight] = result[j]
      if (resultRight < intervalLeft || intervalRight < resultLeft) continue
      result[j][0] = Math.min(intervalLeft, resultLeft)
      result[j][1] = Math.max(intervalRight, resultRight)
      continue outer
    }

    result.push(intervals[i])
  }

  return result
}

module.exports = merge

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
  let result = tryMerge(intervals)

  let recheck = tryMerge(result)
  while (recheck.length != result.length) {
    result = recheck
    recheck = tryMerge(result)
  }

  return recheck
}

function tryMerge(intervals) {
  const result = []
  outer: for (let i = 0; i < intervals.length; i++) {
    const [intervalLeft, intervalRight] = intervals[i]
    for (let j = result.length - 1; j >= 0; j--) {
      const [resultLeft, resultRight] = result[j]
      if (resultLeft <= intervalLeft && intervalLeft <= resultRight) {
        result[j][1] = Math.max(intervalRight, resultRight)
        continue outer
      }

      if (resultLeft <= intervalRight && intervalRight <= resultRight) {
        result[j][0] = Math.min(intervalLeft, resultLeft)
        continue outer
      }

      if (intervalLeft < resultLeft && resultRight < intervalRight) {
        result.splice(j, 1)
      }
    }

    result.push(intervals[i])
  }

  return result
}

module.exports = merge

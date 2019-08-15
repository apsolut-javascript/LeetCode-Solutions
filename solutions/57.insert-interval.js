/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length == 0) return [newInterval]

  const [newLeft, newRight] = newInterval
  for (let i = 0; i < intervals.length; i++) {
    const [left, right] = intervals[i]
    if (right < newLeft) {
      continue
    }

    if (newRight < left) {
      intervals.splice(i, 0, newInterval)
      return intervals
    }

    intervals.splice(i, 1)
    return insert(intervals, [
      Math.min(left, newLeft),
      Math.max(right, newRight),
    ])
  }

  intervals.push(newInterval)
  return intervals
}

module.exports = insert

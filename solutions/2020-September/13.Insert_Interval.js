/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (!intervals || !intervals.length) return [newInterval];
  const [start, end] = newInterval;
  if (end < intervals[0][0]) {
    intervals.unshift(newInterval);
    return intervals;
  }

  if (intervals[intervals.length - 1][1] < start) {
    intervals.push(newInterval);
    return intervals;
  }

  let startIndex = -1;
  let endIndex = -1;
  for (let i = 0; i < intervals.length; i++) {
    const [l, r] = intervals[i];
    if (r < start) continue;
    if (end < l) {
      if (startIndex == -1) {
        intervals.splice(i, 0, newInterval);
        return intervals;
      }
      break;
    }
    if (startIndex == -1) startIndex = i;

    endIndex = i;
  }

  const mergedInterval = [
    Math.min(start, intervals[startIndex][0]),
    Math.max(end, intervals[endIndex][1]),
  ];

  intervals.splice(startIndex, endIndex - startIndex + 1, mergedInterval);

  return intervals;
};

module.exports = insert;

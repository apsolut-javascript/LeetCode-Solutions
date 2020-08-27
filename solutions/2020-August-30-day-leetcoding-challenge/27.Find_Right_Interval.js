/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  const startDict = {};
  intervals.forEach((a, i) => {
    startDict[a[0]] = i;
  });

  const starts = Object.keys(startDict);
  starts.sort((a, b) => a - b);

  const result = [];
  intervals.forEach(a => {
    const rightInterval = starts.find(b => a[1] <= b);
    result.push(rightInterval == null ? -1 : startDict[rightInterval]);
  });

  return result;
};

module.exports = findRightInterval;

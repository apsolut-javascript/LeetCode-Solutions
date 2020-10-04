/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  const covers = new Map();

  intervals.forEach(a => {
    const [start, end] = a;
    const coverdList = [];
    let isValid = true;
    covers.forEach((val, key) => {
      if (key <= start && end <= val) {
        isValid = false;
      }
      if (start <= key && val <= end) {
        coverdList.push(key);
      }
    });

    if (isValid) covers.set(start, end);
    coverdList.forEach(a => covers.delete(a));
  });

  return covers.size;
};

module.exports = removeCoveredIntervals;

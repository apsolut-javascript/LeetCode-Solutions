/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const count = nums.reduce((p, c) => {
    if (p[c] == null) p[c] = 0;
    p[c] += 1;
    return p;
  }, {});
  const entries = Object.entries(count);
  entries.sort((a, b) => b[1] - a[1]);
  const result = entries.slice(0, k).map(a => Number(a[0]));
  return result;
};

module.exports = topKFrequent;

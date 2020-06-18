/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  if (citations.length == 0) return 0;
  if (citations[0] >= citations.length) return citations.length;
  let l = 0,
    r = citations.length - 1,
    max = 0;

  while (l <= r) {
    const mid = (l + r) >> 1;
    const val = citations[mid];
    const count = citations.length - mid;
    if (val == count) return val;
    if (val > count) {
      max = Math.max(count, max);
      r = mid - 1;
    } else {
      l = mid + 1;
      max = Math.max(val, max);
    }
  }

  return max;
};

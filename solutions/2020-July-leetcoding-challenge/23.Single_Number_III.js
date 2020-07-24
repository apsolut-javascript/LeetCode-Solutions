/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const set = new Set();
  for (const v of nums) {
    if (set.has(v)) {
      set.delete(v);
    } else {
      set.add(v);
    }
  }

  return [...set];
};

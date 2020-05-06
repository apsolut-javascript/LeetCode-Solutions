/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const major = nums.length / 2;
  const elements = {};
  for (let i = 0; i < nums.length; i++) {
    const c = nums[i];

    if (elements[c] == null) elements[c] = 1;
    else {
      elements[c]++;
      if (elements[c] > major) return c;
    }
  }
  const elements = Array.prototype.reduce.call(
    nums,
    (p, c) => {
      return p;
    },
    {}
  );

  for (const [k, v] of Object.entries(elements)) {
    if (v > major) return k;
  }
};

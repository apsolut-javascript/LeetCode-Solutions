/** * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  const dict = nums.reduce((p, c) => {
    if (p[c] == null) p[c] = 0;
    p[c]++;
    return p;
  }, {});

  nums.sort((a, b) => a - b);
  const ans = [];
  if (dict[0] > 2) ans.push([0, 0, 0]);
  for (let i = 0; i < nums.length; i++) {
    const v1 = nums[i];
    if (i > 0 && nums[i - 1] == v1) continue;
    if (v1 >= 0) break;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      const v2 = nums[j];
      const target = -(v1 + v2);
      if (target < v2) break;
      if (target == v2) {
        if (dict[v2] > 1) ans.push([v1, v2, target]);
      } else {
        if (dict[target] != null) ans.push([v1, v2, target]);
      }
    }
  }

  return ans;
};

module.exports = threeSum;

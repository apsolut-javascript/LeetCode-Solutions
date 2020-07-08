/** * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  const set = new Set(nums);

  nums.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    const v1 = nums[i];
    if (i > 0 && nums[i - 1] == v1) continue;
    if (v1 > 0) break;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      const v2 = nums[j];
      const target = -(v1 + v2);
      if (target < v2) break;
      if (target == v2) {
        if (nums[j + 1] == target) ans.push([v1, v2, target]);
      } else {
        if (set.has(target)) ans.push([v1, v2, target]);
      }
    }
  }

  return ans;
};

module.exports = threeSum;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (val >= k) continue;
    ans++;
    let product = val;
    let j = i + 1;
    for (; j < nums.length; j++) {
      const v = nums[j];
      product *= v;
      if (product >= k) {
        break;
      }
      ans++;
    }
    if (j == nums.length) {
      ans += calcSum(j - i + 1);
      break;
    }
  }

  return ans;
};

function calcSum(a) {
  if (a <= 1) return a;
  return a + calcSum(a - 1);
}

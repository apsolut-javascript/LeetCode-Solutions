/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  function min(left, right) {
    if (left + 1 == right) return Math.min(nums[left], nums[right]);
    while (left < right) {
      const mid = (left + right) >> 1;
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else if (nums[left] > nums[mid]) {
        right = mid;
        left++;
      } else {
        return Math.min(min(left, mid), min(mid, right));
      }
    }

    return nums[right];
  }

  return min(0, nums.length - 1);
};

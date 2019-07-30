/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] <= nums[i - 1]) {
      continue
    }

    let minVal = Number.POSITIVE_INFINITY
    let minIndex = null
    const target = nums[i - 1]
    for (let j = nums.length - 1; j >= i; j--) {
      const val = nums[j]
      if (val < minVal && target < val) {
        minIndex = j
        minVal = val
      }
    }

    nums[minIndex] = nums[i - 1]
    nums[i - 1] = minVal

    for (let x = i; x < nums.length; x++) {
      for (let y = x + 1; y < nums.length; y++) {
        if (nums[y] < nums[x]) {
          const temp = nums[x]
          nums[x] = nums[y]
          nums[y] = temp
        }
      }
    }

    return
  }

  nums.sort((a, b) => a - b)
  return
}

module.exports = nextPermutation

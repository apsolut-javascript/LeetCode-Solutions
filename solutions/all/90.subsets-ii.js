/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = [[]]
    if (nums.length == 0) return result

    nums.sort((a, b) => a - b)
    for (let i = 1; i <= nums.length; i++) {
        result.push(...getSub(nums, i))
    }

    return result
};

function getSub(nums, length) {
    if (length == 1) return [...new Set(nums)].map(a => [a])
    if (length == nums.length) return [nums]
    const result = []
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i]
        if (val == nums[i - 1]) continue
        const sub = getSub([...nums.slice(i + 1)], length - 1)
        sub.forEach(a => {
            a.push(val)
            result.push(a)
        });
    }

    return result
}

// @lc code=end

module.exports = subsetsWithDup;

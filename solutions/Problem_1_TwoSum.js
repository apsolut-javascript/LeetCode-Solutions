/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 */

'use strict'

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    console.log(`result of [${nums}], ${target}`);
    console.log(solution1(nums, target));
    console.log(solution2(nums, target));
    console.log(solution3(nums, target));

    return solution1(nums, target);
};


const solution1 = (nums, target) => {
    for (var i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] === difference) {
                return [i, j];
            }
        }
    }
};

const solution2 = (nums, target) => {
    const differenceSet = new Set(nums.map(n => target - n));
    let intersection = nums.filter(n => differenceSet.has(n));
    if (intersection.length === 3) {
        intersection = intersection.filter(n => n !== target / 2);
    }

    // Notice I use indexOf and lastIndexOf so that we can find different index 
    // even intersection[0] === intersection[1]
    return [nums.indexOf(intersection[0]), nums.lastIndexOf(intersection[1])]
};

const solution3 = (nums, target) => {
    const sortedNums = nums.map(n => n);
    sortedNums.sort((a, b) => a - b);
    let lower = 0,
        upper = sortedNums.length - 1;
    while (lower < upper) {
        let sum = sortedNums[lower] + sortedNums[upper];
        if (target === sum) {
            break;
        }

        if (sum < target) {
            lower++;
        } else {
            upper--;
        }
    }

    // Here we use indexOf and lastIndexOf to find different index if 
    // sortedNums[lower] === sortedNums[upper]
    const result = [nums.indexOf(sortedNums[lower]), nums.lastIndexOf(sortedNums[upper])];
    result.sort();
    return result;
}

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([0, 1, 2, 0], 0);

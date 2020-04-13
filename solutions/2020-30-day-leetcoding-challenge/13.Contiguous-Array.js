/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    const stack = [nums[i]];
    let length = 0;
    for (let j = i + 1; j < nums.length; j++) {
      const cur = nums[j];
      if (stack.length == 0) {
        stack.push(cur);
        continue;
      }

      if (stack[stack.length - 1] == cur) {
        stack.push(cur);
      } else {
        stack.pop();
        length += 2;
        if (stack.length == 0 && length > maxLength) maxLength = length;
      }
    }
  }

  return maxLength;
};

module.exports = findMaxLength;

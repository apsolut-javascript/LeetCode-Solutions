/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  const nums = Array.from({ length: n }, (v, i) => i + 1);
  return findResult(nums, k - 1);
};

function findResult(nums, k) {
  if (nums.length == 1) return nums[0].toString();
  const total = getTotal(nums.length);
  const sectionSize = total / nums.length;
  const section = (k / sectionSize) | 0;
  const val = nums.splice(section, 1);
  return val + findResult(nums, k % sectionSize);
}

function getTotal(n) {
  return n > 1 ? n * getTotal(n - 1) : n;
}

getPermutation(3, 3);
getPermutation(4, 9);
console.log(2314);

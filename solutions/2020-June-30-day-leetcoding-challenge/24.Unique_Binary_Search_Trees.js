/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (n < 3) return n;
  if (n == 3) return 5;

  let ans = numTrees(n - 1) * 2;
  for (let i = 2; i <= n - 1; i++) {
    ans += numTrees(i - 1) * numTrees(n - i);
  }

  return ans;
};

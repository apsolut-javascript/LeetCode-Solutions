/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  if (s.length < 11) return [];
  let nums = s
    .replace(/A/g, "1")
    .replace(/C/g, "3")
    .replace(/G/g, "5")
    .replace(/T/g, "7")
    .split("")
    .map(a => Number.parseInt(a));
  const sums = [nums.slice(0, 10).reduce((p, c) => p + Number.parseInt(c), 0)];
  for (let i = 10; i < nums.length; i++) {
    sums.push(sums[sums.length - 1] + nums[i] - nums[i - 10]);
  }
  const numsFreq = sums.reduce((p, c) => {
    const m = new Map();
    m.se;
    if (!p.has(c)) p.set(c, 1);
    else p.set(c, p.get(c) + 1);
    return p;
  }, new Map());
  const sFreq = new Map();
  nums.forEach((a, i) => {
    if (numsFreq.get(a) == 1) return;
    const str = s.slice(i, i + 10);
    if (!sFreq.has(str)) sFreq.set(str, 1);
    else sFreq.set(str, sFreq.get(str) + 1);
  });

  const ans = [];
  for (const [key, val] of sFreq.entries()) {
    if (val > 1) ans.push(key);
  }

  return ans;
};

module.exports = findRepeatedDnaSequences;
// @lc code=end

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const set1 = new Set(text1);
  const set2 = new Set(text2);
  set1.forEach(a => {
    if (!set2.has(a)) set1.delete(a);
  });

  if (set1.size == 0) return 0;

  const s1 = removeUnique(text1, set1);
  const s2 = removeUnique(text2, set1);

  console.log("---------> : longestCommonSubsequence -> s1 : s2", s1, s2);
  return getLongest(s1.length > s2 ? s2 : s1, s1.length > s2 ? s1 : s2, 0, 0);
};

function removeUnique(text, set) {
  return text
    .split("")
    .filter(a => set.has(a))
    .join("");
}

function getLongest(s1, s2, index1, index2) {
  if (s1.length == index1 || s2.length == index2) return 0;

  let longest = 0;
  const i = s2.indexOf(s1[index1], index2);
  if (i != -1) {
    longest = 1 + getLongest(s1, s2, index1 + 1, i + 1);
  }

  return Math.max(longest, getLongest(s1, s2, index1 + 1, index2));
}

module.exports = longestCommonSubsequence;

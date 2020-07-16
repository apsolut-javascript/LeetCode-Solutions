/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim().replace(/\s{2,}/g, " ");
  const words = s.split(" ");
  words.reverse();
  return words.join(" ");
};

module.exports = reverseWords;

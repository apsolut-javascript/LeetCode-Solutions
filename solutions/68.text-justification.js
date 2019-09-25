/*
 * @lc app=leetcode id=68 lang=javascript
 *
 * [68] Text Justification
 */
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  const groups = [];
  let g = [];
  let len = 0;

  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const wLen = w.length;
    if (wLen + len > maxWidth) {
      len = wLen + 1;
      groups.push(g);
      g = [w];
    } else {
      g.push(w);
      len += wLen + 1;
    }
  }

  const result = groups.map(a => {
    if (a.length === 1) {
      return a[0].padEnd(maxWidth, " ");
    }
    const totalWidth = a.reduce((p, c) => p + c.length, 0);
    const wordCount = a.length;
    const missingSpaces = maxWidth - totalWidth;
    const eachSpace = " ".repeat(Math.floor(missingSpaces / (wordCount - 1)));
    const extraSpaces = missingSpaces % (wordCount - 1);
    let str = "";
    for (let i = 0; i < a.length - 1; i++) {
      str += a[i] + eachSpace + (i < extraSpaces ? " " : "");
    }

    return str + a[a.length - 1];
  });

  result.push(g.join(" ").padEnd(maxWidth, " "));
  return result;
};

module.exports = fullJustify;

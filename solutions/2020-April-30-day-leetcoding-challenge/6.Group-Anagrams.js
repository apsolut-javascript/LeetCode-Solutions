/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const dict = {};
  strs.forEach(a => {
    const arr = a.split("");
    arr.sort();
    const key = arr.join("");

    if (dict[key] == null) {
      dict[key] = [];
    }

    dict[key].push(a);
  });

  return Object.values(dict);
};

module.exports = groupAnagrams;

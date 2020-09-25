/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const strArr = nums.map(a => a.toString());
  strArr.sort((a, b) => {
    const minLength = Math.min(a.length, b.length);
    for (let i = 0; i < minLength; i++) {
      if (a[i] != b[i]) return -a[i].localeCompare(b[i]);
    }

    if (a.length == b.length) return 0;
    return (b + a).localeCompare(a + b);
  });

  return strArr[0] == "0" ? "0" : strArr.join("");
};

module.exports = largestNumber;

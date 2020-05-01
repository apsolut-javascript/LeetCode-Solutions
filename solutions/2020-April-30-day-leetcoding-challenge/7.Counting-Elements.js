/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
  const exists = new Set(arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (exists.has(element + 1)) {
      count++;
    }
  }

  return count;
};

module.exports = countElements;

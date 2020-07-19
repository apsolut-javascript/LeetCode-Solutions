/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a.length > b.length) return addBinary(b, a);
  if (a.length == 0) return b;

  let result = "";
  let i = a.length - 1,
    j = b.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0 && a[i--] == "1") sum++;
    if (j >= 0 && b[j--] == "1") sum++;
    result = (sum % 2) + result;
    carry = sum >> 1;
  }

  if (carry > 0) result = carry + result;

  return result;
};

module.exports = addBinary;

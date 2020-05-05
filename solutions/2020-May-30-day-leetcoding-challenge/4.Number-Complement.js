/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const complement = [];
  while (num > 0) {
    complement.unshift(num % 2 == 0 ? 1 : 0);
    num >>= 1;
  }

  return Number.parseInt(complement.join(""), 2);
};

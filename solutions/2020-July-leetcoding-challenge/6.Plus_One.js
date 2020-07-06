/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i]++;
      break;
    } else {
      if (i == 0) {
        digits[i] = 1;
        digits.push(0);
      } else {
        digits[i] = 0;
      }
    }
  }

  return digits;
};

plusOne([1, 2, 3]);
plusOne([4, 3, 2, 1]);
plusOne([4, 3, 2, 9]);
plusOne([9, 9, 9]);

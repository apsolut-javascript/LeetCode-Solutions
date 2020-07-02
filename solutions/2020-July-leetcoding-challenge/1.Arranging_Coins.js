/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  if (n == 0) return 0;

  let min = 1,
    max = (n >> 1) + 1;
  while (min <= max) {
    const step = (max + min) >> 1;
    const need = (step / 2) * (1 + step);
    if (need == n) return step;
    if (n < need) {
      max = step - 1;
    } else {
      min = step + 1;
    }
  }

  return min - 1;
};

console.log(arrangeCoins(1) == 1);
console.log(arrangeCoins(2) == 1);
console.log(arrangeCoins(3) == 2);
console.log(arrangeCoins(5) == 2);
console.log(arrangeCoins(8) == 3);
console.log(arrangeCoins(10) == 4);
console.log(arrangeCoins(2147483647) == 65535);

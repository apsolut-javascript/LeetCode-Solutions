/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  if (n <= 5) return n;

  const all = new Set([1]);
  let newSet = new Set([1, 2, 3, 4, 5]);

  const max = n + (n >> 1);
  while (all.size < max) {
    const temp = new Set();
    newSet.forEach(a => {
      temp.add(a * 2);
      temp.add(a * 3);
      temp.add(a * 4);
      temp.add(a * 5);
      temp.add(a * 6);
      temp.add(a * 8);
      temp.add(a * 9);
      temp.add(a * 10);
    });
    temp.forEach(a => all.add(a));
    newSet = temp;
  }

  const result = [...all];
  result.sort((a, b) => a - b);

  return result[n - 1];
};

console.log(nthUglyNumber(10) == 12);
console.log(nthUglyNumber(12) == 16);
console.log(nthUglyNumber(23) == 48);
console.log(nthUglyNumber(27) == 64);
console.log(nthUglyNumber(77) == 729);
console.log(nthUglyNumber(51) == 250);
console.log(nthUglyNumber(105) == 1875);

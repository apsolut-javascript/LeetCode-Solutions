/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
const cache = [];
var prisonAfterNDays = function (cells, N) {
  const { length } = cells;
  const masks = Array.from({ length }, (_, i) => 1 << (length - i - 1));
  const fullbits = masks.reduce((p, c) => p | c, 0);
  const resetBit = Array.from({ length }, (_, i) => fullbits ^ masks[i]);
  let now = 0;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] == 1) now |= masks[i];
  }
  let next = now;
  next &= resetBit[0];
  next &= resetBit[length - 1];

  let day = 0;
  let firstEnterDay = -1;
  let firstEnterValue = -1;
  while (day < N) {
    if (cache[now] != null) {
      if (firstEnterValue == -1) {
        firstEnterValue = now;
        firstEnterDay = day;
      } else if (now == firstEnterValue) {
        const loopDays = day - firstEnterDay;
        while (day + loopDays < N) day += loopDays;
      }
      now = cache[now];
      day++;
      continue;
    }
    for (let i = 1; i < length - 1; i++) {
      const isOccupied = !(now & masks[i - 1]) == !(now & masks[i + 1]);
      if (isOccupied) {
        next |= masks[i];
      } else {
        next &= resetBit[i];
      }
    }

    cache[now] = next;
    now = next;
    day++;
  }

  const result = Array.from({ length }, (_, i) =>
    (now & masks[i]) > 0 ? 1 : 0
  );
  return result;
};

prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 1);
prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 7);
prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0], 1000000000);
prisonAfterNDays([1, 0, 1, 0, 0, 0, 1, 0], 788566492);
prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 922880584);
// console.log(
//   JSON.stringify(prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0], 1000000000)) ==
//     JSON.stringify([0, 0, 1, 1, 1, 1, 1, 0])
// );
// console.log(
//   JSON.stringify(prisonAfterNDays([1, 0, 0, 0, 1, 0, 0, 1], 99)) ==
//     JSON.stringify([0, 0, 1, 0, 1, 0, 0, 0])
// );
console.log("done");

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    const a = stones.pop();
    const b = stones.pop();
    const c = Math.abs(a - b);
    if (c != 0) stones.push(c);
  }

  return stones.length > 0 ? stones[0] : 0;
};

module.exports = lastStoneWeight;

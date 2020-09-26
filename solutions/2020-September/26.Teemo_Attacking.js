/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (!timeSeries.length) return 0;
  let ans = duration;
  let start = timeSeries[0];
  for (let i = 1; i < timeSeries.length; i++) {
    const end = timeSeries[i];
    ans += Math.min(duration, end - start);
    start = end;
  }

  return ans;
};

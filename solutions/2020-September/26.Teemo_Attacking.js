/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (!timeSeries.length) return 0;
  let ans = duration;
  for (let i = 0; i < timeSeries.length - 1; i++) {
    const start = timeSeries[i];
    const end = timeSeries[i + 1];
    ans += Math.min(duration, end - start);
  }

  return ans;
};

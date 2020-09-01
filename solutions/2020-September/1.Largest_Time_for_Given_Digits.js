/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function (A) {
  const candidates = getTimePermutarions([...A]);
  const validTimes = candidates.filter(a => isValidTime(a));
  if (validTimes.length == 0) return "";
  validTimes.sort((a, b) => {
    const hour = getHour(a) - getHour(b);
    if (hour != 0) return hour;

    return getMinute(a) - getMinute(b);
  });

  const max = validTimes[validTimes.length - 1];
  return `${getHour(max).toString().padStart(2, "0")}:${getMinute(max)
    .toString()
    .padStart(2, "0")}`;
};

function getHour(arr) {
  return arr[0] * 10 + arr[1];
}

const getMinute = arr => arr[2] * 10 + arr[3];

function getTimePermutarions(arr) {
  if (arr.length <= 1) return [arr];
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    getTimePermutarions([...arr.slice(0, i), ...arr.slice(i + 1)]).forEach(
      a => {
        ans.push([arr[i], ...a]);
      }
    );
  }

  return ans;
}

function isValidTime(arr) {
  if (getHour(arr) > 23) return false;
  if (getMinute(arr) > 59) return false;
  return true;
}

module.exports = largestTimeFromDigits;

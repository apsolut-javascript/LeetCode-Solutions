/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const passengers = [];
  for (let i = 0; i < trips.length; i++) {
    const [num_passengers, start_location, end_location] = trips[i];
    if (passengers[start_location] == null) passengers[start_location] = 0;
    if (passengers[end_location] == null) passengers[end_location] = 0;
    passengers[start_location] += num_passengers;
    passengers[end_location] -= num_passengers;
  }

  let cur = 0;
  for (let i = 0; i < passengers.length; i++) {
    const now = passengers[i];
    if (!now) continue;

    cur += now;
    if (cur > capacity) return false;
  }

  return true;
};

module.exports = carPooling;

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  const hAngle = hour * 30 + minutes / 2;
  const mAngle = minutes * 6;
  const angle = Math.abs(hAngle - mAngle);
  return Math.min(angle, 360 - angle);
};

module.exports = angleClock;

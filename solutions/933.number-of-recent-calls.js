/*
 * @lc app=leetcode id=933 lang=javascript
 *
 * [933] Number of Recent Calls
 */

// @lc code=start

var RecentCounter = function () {
  this.recent = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  while (this.recent.length > 0) {
    if (this.recent[0] >= t - 3000) break;
    this.recent.shift();
  }
  this.recent.push(t);
  return this.recent.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

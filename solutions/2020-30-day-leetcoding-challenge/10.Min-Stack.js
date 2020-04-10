/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.min = Number.POSITIVE_INFINITY;
  this.isLatestMin = true;
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.isLatestMin && x < this.min) {
    this.min = x;
  }
  return this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const x = this.stack.pop();
  if (x == this.min) {
    this.isLatestMin = false;
  }

  return x;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (!this.isLatestMin) {
    this.min = this.stack.reduce(
      (p, c) => Math.min(p, c),
      Number.POSITIVE_INFINITY
    );
    this.isLatestMin = true;
  }
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = MinStack;

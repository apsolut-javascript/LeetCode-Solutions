/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.stack = [];
  this.capacity = capacity;
  this.cache = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const val = this.cache[key];
  if (val == null) {
    return -1;
  }

  if (this.stack[0] != key) {
    const i = this.stack.indexOf(key);
    this.stack.splice(i, 1);
    this.stack.unshift(key);
  }

  return val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const i = this.stack.indexOf(key);
  if (i == -1) {
    if (this.stack.length >= this.capacity) {
      const staleKey = this.stack.pop();
      delete this.cache[staleKey];
    }
  } else {
    this.stack.splice(i, 1);
  }

  this.stack.unshift(key);

  this.cache[key] = value;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

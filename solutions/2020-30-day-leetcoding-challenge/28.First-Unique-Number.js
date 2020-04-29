/**
 * @param {number[]} nums
 */
var FirstUnique = function (nums) {
  this.firstIndex = 0;
  this.items = [];
  this.nums = [];

  for (let i = 0; i < nums.length; i++) {
    add.call(this, nums[i]);
  }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
  for (let i = this.firstIndex; i < this.nums.length; i++) {
    const value = this.nums[i];
    if (this.items[value] != true) continue;

    this.firstIndex = i;
    return value;
  }

  return -1;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
  add.call(this, value);
};

function add(value) {
  const status = this.items[value];
  if (status == null) {
    this.items[value] = true;
    this.nums.push(value);
  } else if (status == true) {
    this.items[value] = false;
  }
}
/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */

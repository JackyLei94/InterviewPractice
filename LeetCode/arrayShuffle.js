// Function
const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[rand]] = [arr[rand], arr[i]];
  }
  return arr;
}

// Class solution
var Solution = function(nums) {
  this.nums = nums;
  this.original = [...nums];
};

Solution.prototype.reset = function() {
  for (let i = 0; i < this.nums.length; i++) {
    this.nums[i] = this.original[i];
  }
  return this.nums;
};

Solution.prototype.shuffle = function() {
  const nums = this.nums;
  for (let i = nums.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [nums[i], nums[rand]] = [nums[rand], nums[i]];
  }
  return nums;
};
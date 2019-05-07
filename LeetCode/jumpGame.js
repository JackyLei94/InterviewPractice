// DP Method
var canJump = function(nums) {
  let reach = 0;
  for (let i = 0; i <= reach && i < nums.length - 1; i++) {
    reach = Math.max(i + nums[i], reach);
  }
  return reach >= nums.length - 1;
};

// Greedy Method
var canJump = function(nums) {
  let last = nums.length - 1;
  for (let i = last - 1; i >= 0; i--) {
    if (i + nums[i] >= last) {
      last = i;
    }
  }
  return last === 0;
};

// Backtracking Method
const canJump = nums => {
  return jump(nums);
};

const jump = (nums, idx = 0) => {
  let val = nums[idx];
  if (idx === nums.length - 1) {
    return true;
  }
  if (val === 0) {
    return false;
  }
  for (let i = val; i >= 1; i--) {
    if (jump(nums, idx + i)) {
      return true;
    }
  }
  return false;
}
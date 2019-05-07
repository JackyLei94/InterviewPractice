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
var increasingTriplet = function(nums) {
  let min = nums[0];
  let updatedNextMin = Infinity;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= min && nums[i] <= updatedNextMin) {
      min = nums[i];
    } else if (nums[i] <= updatedNextMin) {
      updatedNextMin = nums[i];
    } else {
      return true;
    }
  }
  return false;
};
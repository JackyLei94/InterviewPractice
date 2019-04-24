var threeSum = function(nums) {
  let solutions = [];
  if (nums.length < 3) {
      return solutions;
  }
  nums = nums.sort((a,b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
        return solutions;
    }
    if (nums[i] === nums[i - 1]) {
        continue;
    }
    for (let start = i + 1, end = nums.length - 1; start < end;) {
      if (nums[i] + nums[start] + nums[end] === 0) {
        solutions.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
        while (nums[start] === nums[start - 1]) {
          start++;
        }
        while (nums[end] === nums[end + 1]) {
          end--;
        }
      } else if (nums[i] + nums[start] + nums[end] < 0) {
        start++;
      } else {
        end--;
      }
    }
  }
  return solutions;
};
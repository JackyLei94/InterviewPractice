var subsets = function(nums) {
  let powerSet = [];
  const getSubsets = (start = 0, array = []) => {
      if (start === nums.length + 1) {
          return;
      }
      powerSet.push(array);
      for (let i = start; i < nums.length; i++) {
          getSubsets(i + 1, array.concat(nums[i]));
      }
  }
  getSubsets();
  return powerSet;
};
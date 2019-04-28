var subsetsWithDup = function(nums) {
  nums.sort((a,b) => a - b);
  let subsets = [];
  const getSubsets = (start = 0, array = []) => {
    subsets.push(array);
    for (let i = start; i < nums.length; i++) {
      if (i === start || nums[i] !== nums[i - 1])
      getSubsets(i + 1, array.concat(nums[i]));
    }
  }
  getSubsets();
  return subsets;
};
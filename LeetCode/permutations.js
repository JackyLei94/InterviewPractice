var permute = function(nums) {
  let output = [];
  const getPermutations = (array = []) => {
    if (array.length === nums.length) {
      return output.push(array);
    } 
    for (let i = 0; i < nums.length; i++) {
      if (!array.includes(nums[i])) {
        getPermutations(array.concat(nums[i]));
      }
    }
  }
  getPermutations()
  return output;
};
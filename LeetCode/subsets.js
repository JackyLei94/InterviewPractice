var subsets = function(nums) {
  let powerSet = [[]];
  const getSubsets = (index, array = []) => {
      if (index === nums.length) {
          return;
      }
      powerSet.push(array);
      for (let i = index; i < nums.length; i++) {
          getSubsets(i + 1, array.concat(nums[i]));
      }
  }
  for (let i = 0; i < nums.length; i++) {
      getSubsets(i);
  }
  return powerSet;
};

console.log(subsets([1,2,3]));
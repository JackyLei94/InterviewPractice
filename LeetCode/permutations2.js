const permuteUnique = nums => {
  nums.sort((a,b) => a - b);
  const seen = new Array(nums.length);
  const permutations = [];
  backtrack(nums, permutations, [], seen);
  return permutations;
};

const backtrack = (nums, permutations, temp, seen) => {
  if (temp.length === nums.length) {
    permutations.push(temp.slice());
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i-1] && !seen[i-1]) {
      continue;
    }
    if (!seen[i]) {
      temp.push(nums[i]);
      seen[i] = 1;
      backtrack(nums, permutations, temp, seen);
      seen[i] = 0;
      temp.pop(); 
    }
  }
}
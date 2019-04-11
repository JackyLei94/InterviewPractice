// Method 1: Hash Table
// Time: O(n), Space: O(n)
let twoSum = function(nums, target) {
  let hashTable = {};
  for (let i = 0; i < nums.length; i++) {
      if (hashTable[nums[i]] !== undefined) {
          return [hashTable[nums[i]], i];
      }
      const diff = target - nums[i];
      hashTable[diff] = i;
  }
};

// Method 2: Two Pointers
// Time: O(nlog(n)), Space: O(1)
// ** Space will only be constant if not returning original indices, the values, or a boolean
let twoSum = function(nums, target) {
  nums.sort();

  let left = 0;
  let right = nums.length - 1;

  while (left !== right) {
    if (nums[left] + nums[right] === target) {
      return [left, right];
    } 

    if (nums[left] + nums[right] > target) {
      right--;
    }
    
    if (nums[left] + nums[right] < target) {
      left++;
    }
  }
}
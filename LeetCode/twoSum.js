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
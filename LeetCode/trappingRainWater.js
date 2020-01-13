/**
 * @param {number[]} height
 * @return {number}
 */

/**
 * Brute Force:
 * As we iterate, we will always know what the tallest wall we already encountered.
 * This means that every time we encounter a lesser height, we only need to look ahead
 * to if there is a wall high enough to trap water.
 *
 * When you find two walls (back and ahead) that are greater than the current height,
 * the amount of water trapped is simply limited by the shorter wall.
 * */
var trap = function(height) {
  let left = 0;
  let trappedWater = 0;

  for (let i = 0; i < height.length; i++) {
      const curr = height[i];
      left = Math.max(left, curr);
      let right = 0;
      for (let j = i + 1; j < height.length; j++) {
          right = Math.max(right, height[j]);
      }

      let walls = Math.min(left, right);
      if (walls > curr) {
          trappedWater += walls - curr;
      }
          }

  return trappedWater;
};

/**
 * Two Pointer:
 * Rain water is trapped if the current height is less than left and right highest walls we've seen so far (leftMax, rightMax).
 *
 * The key to using two pointers is to know that we must take take action based on the lesser of the two maxes.
 * Moving from the lesser max to the higher max, if the current height is less than the lesser max, we can add the trapped
 * water limited by the lesser max. If the current height is greater than the lesser max, we can update the lesser max.
 *
 * It is important to note that the lesser max can come from either direction, therefore we must create the conditionals for when
 * the leftMax is the lesser max as well as when the rightMax is the lesser max.
 * */

var trap = function(height) {
  if (height.length === 0) return 0;

  let p1 = 0;
  let p2 = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;
  let result = 0;

  while (p1 <= p2) {
      if (leftMax <= rightMax) {
          if (height[p1] > leftMax) leftMax = height[p1];
          else result += leftMax - height[p1];
          p1++;
      } else {
          if (height[p2] > rightMax) rightMax = height[p2];
          else result += rightMax - height[p2]
          p2--;
      }
  }

  return result;
}
const minimumDistance = (area, numRows, numColumns) => {

};

// Tests
const grid1 = [
  [1]
];

const grid2 = [
  [1,0,0],
  [0,0,0],
  [0,0,9]
];

const grid3 = [
  [1,1,1,1,0,0,0,0,0],
  [0,0,0,1,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,0],
  [0,1,0,0,0,0,0,1,0],
  [0,1,1,1,1,1,1,1,0],
  [0,9,0,0,0,0,0,0,0],
];

const grid4 = [];

console.log('Expect: -1. Result: ', minimumDistance(grid1, 1, 1));
console.log('Expect: -1. Result: ', minimumDistance(grid2, 3, 3));
console.log('Expect: 10. Result: ', minimumDistance(grid3, 6, 9));
console.log('Expect: -1. Result: ', minimumDistance(grid4, 0, 0));


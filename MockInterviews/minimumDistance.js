// Breadth First Search
const minimumDistance = (area, numRows, numColumns) => {
  if (numRows === 0) return -1;
  
  const validate = (row, col, dist) => {
    if (row < 0 || col < 0 || row >= numRows || col >= numColumns || area[row][col] === 0) return;
    if (area[row][col] === 9) return queue.push(dist);
    queue.push([row, col, dist + 1]);
  };

  let queue = [[0,0,1]];
  
  while (queue.length) {
    let curr = queue.shift();
    if (typeof(curr) === 'number') return curr;
    let row = curr[0];
    let col = curr[1];
    let dist = curr[2];
    area[row][col] = 0;
    validate(row + 1, col, dist);
    validate(row - 1, col, dist);
    validate(row, col + 1, dist);
    validate(row, col - 1, dist);
  }

  return -1;
};

// Depth First Search
const minimumDistance = (area, numRows, numColumns) => {
  let min = Infinity;
  const traverse = (grid, row, col, dist) => {
    if (row < 0 || col < 0 || row >= numRows || col >= numColumns || grid[row][col] === 0) return;
    if (grid[row][col] === 9) return min = Math.min(min, dist);
    grid[row][col] = 0;
    traverse(grid, row + 1, col, dist + 1);
    traverse(grid, row - 1, col, dist + 1);
    traverse(grid, row, col + 1, dist + 1);
    traverse(grid, row, col - 1, dist + 1);
    grid[row][col] = 1;
  };
  traverse(area, 0, 0, 0);
  return min === Infinity ? -1 : min;
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

// console.log('Expect: -1. Result: ', minimumDistance(grid1, 1, 1));
// console.log('Expect: -1. Result: ', minimumDistance(grid2, 3, 3));
console.log('Expect: 10. Result: ', minimumDistance(grid3, 6, 9));
// console.log('Expect: -1. Result: ', minimumDistance(grid4, 0, 0));


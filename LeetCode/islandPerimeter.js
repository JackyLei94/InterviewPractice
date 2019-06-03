const islandPerimeter = grid => {
  const height = grid.length;
  const width = height && grid[0].length;
  let perimeter = 0;
  
  const validateLand = (row, col) => {
    if (row >= height || col >= width || grid[row][col] === 0) return;
    perimeter -= 2;
  };
  
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j]) {
        perimeter += 4;
        validateLand(i + 1, j);
        validateLand(i, j + 1);
      };
    }
  }
  
  return perimeter;
};
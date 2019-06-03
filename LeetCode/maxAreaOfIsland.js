const maxAreaOfIsland = grid => {
  const height = grid.length;
  const width = height && grid[0].length;
  let maxArea = 0;
  let area = 0;
  
  const bloom = (row, col) => {
    if (row < 0 || col < 0 || row === height || col === width || grid[row][col] === 0) return;
    grid[row][col] = 0;
    area++;
    bloom(row + 1, col);
    bloom(row - 1, col);
    bloom(row, col + 1);
    bloom(row, col - 1);
  }
    
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j]) {
        bloom(i, j);
        maxArea = Math.max(area, maxArea);
        area = 0;
      }
    }
  }
  return maxArea;
};
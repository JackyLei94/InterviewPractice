var numIslands = function(grid) {
  const height = grid.length;
  const width = height && grid[0].length;

  let count = 0;
  
  const bloom = (row, col) => {
      if (row < 0 || col < 0 || row === height || col === width) {
          return;
      } else if (grid[row][col] === "0") {
          return;
      };
      
      grid[row][col] = "0";
      bloom(row, col - 1);
      bloom(row, col + 1);
      bloom(row - 1, col);
      bloom(row + 1, col);
  } 
  
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === "1") {
              count++;
              bloom(i, j);
          }
      }
  }
  return count;
};
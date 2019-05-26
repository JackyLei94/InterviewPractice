const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
};

// Time complexity:
// Best: n^2
// Average: n^2 
// Worst: n^2
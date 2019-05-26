// Optimized
// Don't check values already bubble sorted (50% increase)
// Set flag to return if entire array is sorted; (best case n)
const bubbleSort = arr => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let sorted = true;
    for (let j = len - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        sorted = false;
      }
    }
    if (sorted) {
      return arr;
    }
  }
  return arr;
};

// Unoptimized
const bubbleSort = arr => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
};

// Time complexity:
// Best: n
// Average: n^2 
// Worst: n^2
const insertionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    let idx = i - 1;
    while (idx > - 1 && arr[idx] > val) {
      arr[idx + 1] = arr[idx];
      idx--;
    }
    arr[idx + 1] = val;
  }
  return arr;
};

// Time complexity:
// Best: n
// Average: n^2
// Worst: n^2
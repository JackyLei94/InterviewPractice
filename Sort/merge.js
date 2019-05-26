const mergeSort = arr => {
  // Divider
  const divide = (arr, left, right) => {
    if (left === right) return [arr[left]];
    const midpoint = Math.floor((left + right)/2);
    return merge(divide(arr, left, midpoint), divide(arr, midpoint + 1, right));
  }

  // Merger
  const merge = (arr1, arr2) => {
    const output = [];
    let idx1 = 0;
    let idx2 = 0;
    while (idx1 < arr1.length || idx2 < arr2.length) {
      const val1 = arr1[idx1];
      const val2 = arr2[idx2];
      if (idx2 === arr2.length || val1 <= val2) {
        output.push(val1);
        idx1++;
      } else if (idx1 === arr1.length || val2 < val1) {
        output.push(val2);
        idx2++;
      }
    }
    return output;
  }

  // Mergesort
  return divide(arr, 0, arr.length - 1);
};

// Time Complexity:
// Best: nlog(n)
// Average: nlog(n)
// Worst: nlog(n)
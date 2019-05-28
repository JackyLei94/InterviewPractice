// Optimized with pointers
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivot = right;
    let partitionIndex = partition(arr, pivot, left, right)
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

const partition = (arr, pivot, left, right) => {
  let pivotVal = arr[pivot];
  let partitionIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, pivot, partitionIndex);
  return partitionIndex;
}

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Naive with concat
const quickSort = arr => {
  if (arr.length === 1 || arr.length === 0) return arr;
  let less = [];
  let equal = [];
  let greater = [];
  let pivot = arr[arr.length - 1];
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (val < pivot) {
      less.push(arr[i]);
    } else if (val > pivot) {
      greater.push(val);
    } else if (val === pivot) {
      equal.push(val);
    }
  };
  return quickSort(less).concat(equal).concat(quickSort(greater));
};
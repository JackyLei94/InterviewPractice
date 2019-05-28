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
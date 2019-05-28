// Quick Select Method
// Time complexity: 
// Average: n
// Worst case: n^2
const kClosest = (points, K) => {
  quickSelect(points, K, 0, points.length - 1);
  return points.slice(0, K);
}

const quickSelect = (arr, K, left, right) => {
  if (left < right) {
    let pivot = right;
    let partitionIndex = partition(arr, pivot, left, right);
    if (partitionIndex === K - 1) {
      return;
    } else if (partitionIndex > K - 1) {
      quickSelect(arr, K, left, partitionIndex - 1);
    } else {
      quickSelect(arr, K, partitionIndex + 1, right);
    }
  }
}

const partition = (arr, pivot, left, right) => {
  let pivotValue = getDistance(arr[pivot]);
  let partitionIndex = left;
  for (let i = left; i < right; i++) {
    if (getDistance(arr[i]) < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, pivot, partitionIndex);
  return partitionIndex;
}

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
};

const getDistance = point => {
  return Math.sqrt(point[0]**2 + point[1]**2);
};


// // Naive solution
// Time complexity: nlog(n);
const kClosest = (points, K) => {
  return points.sort((a,b) => getDistance(a) - getDistance(b)).slice(0,K);
};

const getDistance = point => {
  return Math.sqrt(point[0]**2 + point[1]**2);
};
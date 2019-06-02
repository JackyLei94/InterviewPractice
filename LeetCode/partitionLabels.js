const partitionLabels = S => {
  let output = [];
  let start = 0;
  let last = getLastIdx(S, start);
  while (last < S.length) {
    for (let i = start; i < last; i++) {
      let idx = getLastIdx(S, i);
      if (idx > last) {
        last = idx;
      }
    }
    output.push(last + 1 - start);
    start = last + 1;
    last = getLastIdx(S, start);
  }
  return output;
};

const getLastIdx = (arr, start) => {
  let char = arr[start];
  let lastIdx;
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === char) {
      lastIdx = i;
    }
  }
  return lastIdx;
};
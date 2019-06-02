var partitionLabels = function(S) {
  let output = [];
  let seen = {};
  let start = 0;
  let last = 0;

  for (let i = 0; i <= S.length; i++) {
    if (i > last) {
      output.push(last - start + 1);
      start = i;
    } 

    let char = S[i];
    if (!seen.hasOwnProperty(char)) {
      last = Math.max(last, getLastIdx(S, char));
      seen[char] = last;
    }
  }

  return output;
};

const getLastIdx = (arr, char) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === char) return i;
  }
};
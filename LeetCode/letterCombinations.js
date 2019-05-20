const hashMap = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
}

const letterCombinations = (digits) => {
  if (!digits.length) return [];
  let output = [];
  backtrack(digits, output);
  return output;
};

const backtrack = (digits, output, temp = "", start = 0) => {
  if (temp.length === digits.length) {
    return output.push(temp);
  }
  let chars = hashMap[digits[start]];
  for (let i = 0; i < chars.length; i++) {
    backtrack(digits, output, temp + chars[i], start + 1);
  }
}

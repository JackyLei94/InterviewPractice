const generateParenthesis = n => {
  let output = [];
  backtrack(n, output, '', 0, 0);
  return output;
};

const backtrack = (max, output, curr, open, close) => {
  if (close === max) {
    output.push(curr);
    return;
  }

  if (open < max) {
    backtrack(max, output, curr + '(', open + 1, close);
  }
  
  if (close < open) {
    backtrack(max, output, curr + ')', open, close + 1);
  }
}
const combinationSum = (candidates, target) => {
  const solutions = [];
  backtrack(candidates, target, solutions, []);
  return solutions;
};

const backtrack = (candidates, target, solutions, temp, sum = 0, start = 0) => {
  if (sum === target) {
    solutions.push(temp.slice());
    return;
  }
  if (sum > target) {
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    temp.push(candidates[i]);
    sum += candidates[i];
    backtrack(candidates, target, solutions, temp, sum, i);
    sum -= candidates[i];
    temp.pop();
  }
}
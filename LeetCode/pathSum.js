var hasPathSum = function(root, sum) {
  let result = false;
  const findPathSum = (node, currentSum = 0) => {
    if (result === true) {
      return;
    }
    if (node) {
      currentSum += node.val;
      if (node.left) {
        findPathSum(node.left, currentSum);
      }
      if (node.right) {
        findPathSum(node.right, currentSum);
      }
      if (node.left === null && node.right === null) {
        result = currentSum === sum ? true : false;
      }
    }
  }
  findPathSum(root)
  return result;
};
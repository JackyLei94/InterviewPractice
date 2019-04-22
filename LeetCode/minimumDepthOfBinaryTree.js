var minDepth = function(root) {
  let minDepth = 0;
  const findMinDepth = (node, currentDepth = 0) => {
    if (node) {
      currentDepth++;
      if (node.left) {
        findMinDepth(node.left, currentDepth);
      }
      if (node.right) {
        findMinDepth(node.right, currentDepth);
      }
      if (node.left === null && node.right === null) {
        minDepth = (minDepth === 0 || currentDepth < minDepth) ? currentDepth : minDepth;
      }
    }
  }
  findMinDepth(root);
  return minDepth;
};
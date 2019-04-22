var largestValues = function(root) {
  let values = [];
  const traverse = (node, level = 0) => {
      if (node) {
          if (values[level] === undefined || node.val > values[level]) {
              values[level] = node.val;
          }
          if (node.left) {
          traverse(node.left, level + 1);
          }
          if (node.right) {
              traverse(node.right, level + 1);
          }
      }
  }
  traverse(root);
  return values;
};
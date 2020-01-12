/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// DFS
var invertTree = function(root) {
  if (!root) return null;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

// BFS
var invertTree = (root) => {
  const queue = [root];

  const invert = (node) => {
      if (!node) return;
      const temp = node.left;
      node.left = node.right;
      node.right = temp;

      queue.push(node.right);
      queue.push(node.left);
  }

  while (queue.length) {
      const node = queue.shift();
      invert(node);
  }

  return root;
}

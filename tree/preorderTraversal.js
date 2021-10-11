const tree = require("./tree");

function preOrderTraversal(tree) {
  let data = [];
  traverseTree(tree);
  return data;

  function traverseTree(node) {
    data.push(node.data);

    if (node.left) {
      traverseTree(node.left);
    }
    if (node.right) {
      traverseTree(node.right);
    }
    return;
  }
}

let preOrderTraversedData = preOrderTraversal(tree);
console.log(preOrderTraversedData);

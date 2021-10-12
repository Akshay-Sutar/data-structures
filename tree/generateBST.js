const tree = require("./tree");

class BST {
  constructor(tree) {
    this.BST = null;
    this.tree = tree;
    this.data = [];
  }

  traverseTree = (node) => {
    if (node.left) {
      this.traverseTree(node.left);
    }
    this.data.push(node.data);

    if (node.right) {
      this.traverseTree(node.right);
    }
  };

  insertNode = (node) => {
    if (this.BST === null) {
      this.BST = node;
    }
  };

  generateBST = () => {
    this.traverseTree(this.tree);
    this.data.sort((x, y) => x - y);

    return this.BST;
  };
}

new BST(tree).generateBST();

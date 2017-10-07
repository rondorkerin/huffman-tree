const _ = require('lodash');

class HuffmanTree {
  // values is an array of characters or numbers which must be encoded
  // constructs a huffman tree
  constructor(values) {
    const frequencies = this.findFrequencies(values);
    this.tree = this.constructTree(frequencies);
  }

  findFrequencies(values) {
    const frequencies = _.groupBy(values);
    const mappedSum = _.mapValues(frequencies, (valueList) => {
      return { frequency: valueList.length, value: valueList[0] }
    })
    return this.sortFrequencies(Object.values(mappedSum));
  }

  sortFrequencies(frequencies) {
    return _.sortBy(frequencies, ['frequency']);
  }

  /*
   * [ { frequency: 1, value: 'h' },
   * { frequency: 1, value: 'e' },
   * { frequency: 1, value: 'w' },
   * { frequency: 1, value: 'r' },
   * { frequency: 1, value: 'd' },
   * { frequency: 2, value: 'o' },
   * { frequency: 3, value: 'l' } ]
   */
  constructTree(frequencies) {
    while (frequencies.length > 1) {
      let leftNode = frequencies.shift();
      let rightNode = frequencies.shift();
      let newNode = {
        left: leftNode,
        right: rightNode,
        value: null,
        frequency: leftNode.frequency + rightNode.frequency
      }
      frequencies.unshift(newNode);
      frequencies = this.sortFrequencies(frequencies);
    }
    return frequencies[0];
  }

  encode(plainString) {
    var self = this;
    let binaryEncoding = plainString.split('').map(function(character) {
      return self.encodeCharacter(character, self.tree, []);
    }).join('');
    return binaryEncoding;
  }

  decodeBinaryArray(binaryArray) {

  }

  encodeCharacter(character, node, encodedBinaryArray) {
    // base case: we hit a leaf and there was no match
    if (node == null) {
      return null;
    }
    if (node.value == character) {
      return encodedBinaryArray.join('');
    }
    let leftSearch = this.encodeCharacter(character, node.left, encodedBinaryArray.concat(['0']));
    if (leftSearch) {
      return leftSearch;
    }
    let rightSearch = this.encodeCharacter(character, node.right, encodedBinaryArray.concat(['1']))
    if (rightSearch) {
      return rightSearch;
    }

    // we've hit a node with two dead ends, therefore the encoding is elsewhere on the tree.
    return null;
  }

  // traverse the binary tree according to the code
  decode(binaryString) {
    let binaryArray = binaryString.split('');
    let outputArray = [];
    let currentNode = this.tree;
    let index = 0;
    for (let binaryNumber of binaryArray) {
      debugger;
      if (binaryNumber == '0') {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
      if (currentNode.value != null) {
        outputArray.push(currentNode.value);
        currentNode = this.tree;
      }
      index++;//for debugging purposes to see which binary number we're on in the array
    }

    debugger;
    return outputArray.join('');
  }

  toString() {
    return JSON.stringify(this.tree);
  }

}

module.exports = HuffmanTree;

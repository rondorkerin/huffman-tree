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
    return _.sortBy(Object.values(mappedSum), ['frequency']);
  }

  constructTree(frequencies) {

  }

  encode() {
    return [];
  }

  toString() {
    return '';
  }

}

module.exports = HuffmanTree;

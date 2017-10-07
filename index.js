const HuffmanTree = require('./huffman-tree');

if (process.argv.length < 3) {
  console.log('usage: node index.js [string]');
}

const characterArray = process.argv.slice(2).join('').split('')
let x = new HuffmanTree(characterArray);
let tree = x.toString()
console.log('generated tree', tree);
let encoded = x.encode(characterArray.join(''));
console.log('encoded input as', encoded);
let decoded = x.decode(encoded);
console.log('decoded output to ', decoded);

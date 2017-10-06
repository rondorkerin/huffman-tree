const HuffmanTree = require('./huffman-tree');

if (process.argv.length < 4) {
  console.log('usage: node index.js [decode|encode] [number]');
}

let operation = console.log(process.argv[2]);
let number = console.log(process.argv[3]);

let x = new HuffmanTree(process.argv.slice(3).join('').split(''));
console.log(x.toString());

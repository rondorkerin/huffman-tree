# Huffman Coding
Huffman coding is used as a basis in many encoding algorithms such as gzip. I wanted
to experiment with building a tree and encoding stuff. I learned that JS is a really silly
language for this, but it's so easy to experiment with data structures in JS that I decided
to use it.

# How to use

`node index.js hello world > out.txt`
This encodes the string to a binary array, outputs the binary array, then decodes the string.

# Lessons
* JS takes all the fun out of systems programming by having very high level abstractions.
* JS does not have a binary type (had to create a string array of binary strings, which is completely inefficient)
* Constructing a tree is often not recursive (in this case iterative)
* dealing with binary arrays and character arrays is very annoying in JS

# Questions.
* The process of encoding requires a tree search, making it inefficient?
* The process of decoding is more efficient than encoding?


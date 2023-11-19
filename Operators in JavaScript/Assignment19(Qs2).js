// Describe the usage of the comma operator in JavaScript and provide an example.

var x = 1, y = 2, z = 3;
var result = (x++, y++, z++);

console.log(result); // Outputs: 3
console.log(x, y, z); // Outputs: 2 3 4
const greet = require('./greeting');
const getColorfulMessage = require('./colorful-message');
const readFile = require('./read-file');

const name = 'Bob';
console.log(greet(name));
console.log(getColorfulMessage());
readFile();

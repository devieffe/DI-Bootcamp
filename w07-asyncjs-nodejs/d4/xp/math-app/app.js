
const _ = require('lodash');
const math = require('./math.js');

const sum = math.add(5, 10);
console.log(`Sum: ${sum}`);

const product = math.multiply(5, 10);
console.log(`Product: ${product}`);

const numbers = [10, 20, 30, 40, 50];
const total = _.sum(numbers);
console.log(`Total using lodash: ${total}`);

const maxNumber = _.max(numbers);
console.log(`Max number using lodash: ${maxNumber}`);

// Daily Challenge: Type Guard With Union Types
// Description: Create a function that uses type guards to handle different types of inputs from a union type and perform specific operations based on the input type.
// Exercise:
// Create a function processInput that accepts an input of type number | string | boolean. The function should perform the following operations:
// If the input is a number, return its square.
// If the input is a string, return the uppercase version of the string.
// If the input is a boolean, return the negated value.


function processInput(input: number | string | boolean): number | string | boolean {
    if (typeof input === 'number') {
      return input * input;
    } else if (typeof input === 'string') {
      return input.toUpperCase();
    } else if (typeof input === 'boolean') {
      return !input;
    } else {
      throw new Error('Unsupported type');
    }
  }

console.log(processInput(15));         
console.log(processInput('hello'));  
console.log(processInput(true));   
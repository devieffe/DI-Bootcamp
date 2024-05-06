const people = ["Greg", "Mary", "Devon", "James"];

// remove "Greg"
const firstElement = people.shift();
console.log(people);

// "James" to "Jason"
people.splice(4, "Jason");
console.log(people);

// add name to the end
people.splice(arr.length, 0, "Dave");
console.log(people);

// index of Mary
let mary = people.indexOf("Mary");
console.log(mary);

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this 
// const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
const lastElement = people.pop();
people.splice(0, 2);

const copypeople = people.slice(1, 3);

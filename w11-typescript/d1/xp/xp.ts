// Running with ts-node

// 🌟 Exercise 1: Hello, World! Program
// Description: Create a simple “Hello, World!” program in TypeScript.
// Create a TypeScript program that logs the message “Hello, World!” to the console.

console.log('hello world');


// 🌟 Exercise 2: Type Annotations
// Description: Use type annotations to specify the types of variables.
// Define a variable age of type number and a variable name of type string, and log them to the console.

let vAge: number = 25;
let vName: string = "Alice";

console.log(`Name: ${vName}`);
console.log(`Age: ${vAge}`);


// 🌟 Exercise 3: Union Types
// How to use union types in TypeScript.
// How to define variables that can hold either a string or a number.
// Description: Use union types to declare a variable that can hold either a string or a number.
// Define a variable id that can be either a string or a number.

let id: string | number;

id = "abc123";
console.log(`ID (string): ${id}`); 
id = 456;
console.log(`ID (number): ${id}`);


// 🌟 Exercise 4: Control Flow With If...Else
// How to use if...else statements to control program flow.
// How to handle different conditions using if...else statements.
// Description: Use if...else statements to control the flow of a program.
// Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.

function checkNumber(num: number): string {
    if (num > 0) {
      return 'The number is positive.';
    } else if (num < 0) {
      return 'The number is negative.';
    } else {
      return 'The number is zero.';
    }
  }
  
console.log(checkNumber(10)); 
console.log(checkNumber(-5));
console.log(checkNumber(0)); 


// 🌟 Exercise 5: Function Overloading
// How to use function overloading in TypeScript.
// How to define functions that can accept different types of arguments.
// Description: Use function overloading to define a function that can accept different types and numbers of arguments.
// Create a function called add that can add two numbers together or concatenate two strings.

function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b; 
  } else {
    throw new Error('Not same type.');
  }
}

console.log(add(5, 3));   
console.log(add('Hello, ', 'World!'));



// 🌟 Exercise 6: Tuple Types
// How to use tuple types in TypeScript.
// How to define functions that return multiple values of different types.
// Description: Use tuple types to define a function that returns multiple values of different types.
// Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.

function getDetails(xname: string, age: number): [string, number, string] {
    const greeting = `Hello, my name is ${xname} and I am ${age} years old.`;
    return [xname, age, greeting];
  }
  
const [xname, age, message] = getDetails('Alice', 30);
  
console.log(xname); 
console.log(age);  
console.log(message); 
  


// 🌟 Exercise 7: Object Type Annotations
// How to use object type annotations in TypeScript.
// How to define the shape of an object using an interface.
// Description: Use object type annotations to define the shape of an object.
// Create a function createPerson that returns an object representing a person, with properties for name and age, using object type annotations.

interface Person {
    name: string;
    age: number;
  }
  
function createPerson(name: string, age: number): Person {
    return {
      name: name,
      age: age
    };
  }
  
  const nperson = createPerson('Alice', 30);
  
  console.log(nperson.name); // Output: Alice
  console.log(nperson.age);  // Output: 30
  

// 🌟 Exercise 8: Type Assertions
// How to use type assertions in TypeScript.
// How to cast variables to specific types when TypeScript cannot infer the type.
// Description: Use type assertions to specify the type of a variable that TypeScript cannot infer.
// Given an HTML element, use a type assertion to cast it to a specific type and access its properties.

// const element = document.getElementById('myInput');
// const inputElement = element as HTMLInputElement;
// inputElement.value = 'Hello, TypeScript!';
// console.log(inputElement.value);

// const nonNullInputElement = document.getElementById('myInput') as HTMLInputElement;

// nonNullInputElement.focus();



// 🌟 Exercise 9: Switch Statement With Complex Conditions
// How to use a switch statement in TypeScript.
// How to handle multiple conditions using complex cases in a switch statement.
// Description: Use a switch statement with complex conditions to determine different behaviors.
// Create a function getAction that takes a string representing a user role and returns an action for the user. Use a switch statement with complex conditions to handle multiple roles.

enum UserRoles {
    Admin = 'admin',
    Editor = 'editor',
    Viewer = 'viewer',
    Guest = 'guest',
}

type Action = 'Create' | 'Edit' | 'View' | 'Access Restricted';

function getActions(role: UserRoles): Action {
    switch (role) {
        case UserRoles.Admin:
            return 'Create'; 
        case UserRoles.Editor:
            return 'Edit';
        case UserRoles.Viewer:
            return 'View'; 
        case UserRoles.Guest:
            return 'Access Restricted'; 
        default:
            return 'Access Restricted';
    }
}

const userRole: UserRoles = UserRoles.Editor;
const action: Action = getActions(userRole);

console.log(`The action for ${userRole} is ${action}.`);



// 🌟 Exercise 10: Function Overloading With Default Parameters
// How to use function overloading in TypeScript.
// How to create overloaded functions with default parameters.
// Description: Create an overloaded function with a default parameter.
// Create an overloaded function greet that can either take a name and greet the person, or take no arguments and return a default greeting.

function greets(name: string): string;
// function greets(): string;

function greets(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return 'Hello, World!'; 
    }
}

console.log(greets('Alice')); 
console.log(greets());
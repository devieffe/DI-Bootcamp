// Daily Challenge : Union Type Validator
// What You Will Learn:
// How to create a function that uses union types to validate variable types.
// How to compare the type of a value against a list of allowed types.
// How to use loops in TypeScript to iterate through an array of allowed types.
// Description:
// Create a function called validateUnionType that accepts a value and an array of allowed types (as strings). 
// The function should check if the value is of one of the allowed types and return true if it is; otherwise, 
// it should return false. Use this function to validate the type of variables in a program.
// Instructions
// Create a function called validateUnionType(value: any, allowedTypes: string[]): 
// boolean that takes a value and an array of allowed types (as strings). 
// The function should return true if the value is one of the allowed types; otherwise, 
// it should return false. Demonstrate its usage by validating variables with different types.
// In this daily challenge exercise, you create a function called validateUnionType that accepts 
// a value and an array of allowed types. The function checks if the type of the value matches any of 
// the allowed types and returns true if it does. If the value is not of an allowed type, the function returns false. 
// The exercise demonstrates the usage of the function by validating different types of variables 
// (e.g., string, number, boolean) against a set of allowed types.


function validateUT(value: any, allowedTypes: string[]): boolean {
    const vType = typeof value;

    for (const type of allowedTypes) {
      if (vType === type) {
        return true;
      }
    }

    return false;
  }
  
  const allowedTypes = ["string", "number", "boolean"];
  
  const testv1 = "Hello, world!";
  const testv2 = 42;
  const testv3 = true;
  const testv4 = { name: "Dave" };
  
  console.log(validateUT(testv1, allowedTypes)); 
  console.log(validateUT(testv2, allowedTypes)); 
  console.log(validateUT(testv3, allowedTypes));
  console.log(validateUT(testv4, allowedTypes));
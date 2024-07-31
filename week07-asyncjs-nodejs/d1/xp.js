// ex1 : Comparison
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
// Test:
// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))


function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`${num} <= 10`);
        } else {
            reject(`${num} > 10`);
        }
    });
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));



// ex2 : Promises
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

function FourSec() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("success");
        }, 4000);
    });
}

FourSec().then((message) => {
    console.log(message);  
});



// ex3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const ResWithThree = Promise.resolve(3);

ResWithThree.then((value) => {
    console.log(value);  
});


const RejWithBoo = Promise.reject("Boo!");

RejWithBoo.catch((error) => {
    console.log(error); 
});
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using 
// two nested for loops (Nested means one inside the other - 
// check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on 
// the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

// single

let slines = 6;
let spattern = "";

for (let i = 1; i <= slines; i++) {
    // Add '*' to the pattern for each iteration
    spattern += "* ".repeat(i).trim() + "\n";
}

console.log(spattern);


// nested

let nlines = 6;
let npattern = "";

for (let i = 1; i <= nlines; i++) {
    for (let j = 1; j <= i; j++) {
        npattern += "* ";
    }
    npattern += "\n";
}

console.log(npattern);
// Count how many keys and values are in the object below
// Display : "The x# key is : --- The x# value is : ---".


let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}


console.log('keys: ', Object.keys(myObj).length);
console.log('values: ', Object.values(myObj).length);


let xkey = 0;
let xvalue = 0;

for (let key in myObj) {
    if (myObj.hasOwnProperty(key)) {
        xkey++;
        xvalue++;
        console.log(`The ${xkey} key is: ${key} - The ${xvalue} value is: ${myObj[key]}`);
    }
}


//Analyse this code before executing it. What will be the output ?

const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };
console.log(admin);

// smth like admin: true, name: 'Lydia', age: 21
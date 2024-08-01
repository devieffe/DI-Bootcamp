// ex1 : List Of People
// const people = ["Greg", "Mary", "Devon", "James"];
// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
// Write code to replace “James” to “Jason”.
// Write code to add your name to the end of the people array.
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
// Write code that gives the index of “Foo”. Why does it return -1 ?
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?


const people = ["Greg", "Mary", "Devon", "James"];

// remove "Greg"
const firstElement = people.shift();
console.log(people);

// Find the index of "James" and replace it with "Jason"
const indexOfJames = people.indexOf("James");
if (indexOfJames !== -1) {
    people[indexOfJames] = "Jason";
}
console.log(people);

// add name to the end
people.splice(people.length, 0, "Dave");
console.log(people);

// index of Mary
let mary = people.indexOf("Mary");
console.log(mary);

// Copy the array using slice method excluding "Mary" and "YourName"
const peopleCopy = people.slice(1, -1);
console.log(peopleCopy);

// Get the index of "Foo"
const indexOfFoo = people.indexOf("Foo");
console.log(indexOfFoo);

// Get the last element of the array
const lastElm = people[people.length - 1];
console.log(lastElm);


// Loop through the array and log each person
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// Loop through the array and log each person until "Devon"
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
}



// ex2 : Your Favorite Colors
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

const colors = ["blue", "green", "cyan", "orange"];

for (let i = 0; i < colors.length; i++) {
    console.log(`#${i + 1} choice is ${colors[i]}`);
}


// ex3 : Repeat The Question
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?


function askNum() {
    let userInp;
    do {
        userInp = 25;
        const number = Number(userInp);

        if (isNaN(number)) {
            console.log("Not a valid number.");
        } else {
            if (number < 10) {
                console.log("Smaller than 10.");
            } else {
                console.log("OK");
            }
        }
    } while (isNaN(userInp) || Number(userInp) < 10);
}

askNum();





// ex4
// Review About Objects
// Copy and paste the above object to your Javascript file.
// Console.log the number of floors in the building.
// Console.log how many apartments are on the floors 1 and 3.
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.


const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};

console.log("Floors: ", building.numberOfFloors);

const FirstFloor = building.numberOfAptByFloor.firstFloor;
const ThirdFloor = building.numberOfAptByFloor.thirdFloor;
console.log("1st floor: ", FirstFloor);
console.log("3rd floor: ", ThirdFloor);

const secondTenant = building.nameOfTenants[1];
const roomsForSecondTenant = building.numberOfRoomsAndRent.dan[0];
console.log("Second tenant: ", secondTenant);
console.log("Rooms for the second tenant: ", roomsForSecondTenant);
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent: +1200");
} else {
    console.log("Dan's rent: same");
}

console.log("Dan's rent:", building.numberOfRoomsAndRent.dan[1]);



// ex5
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.


const family = {
    father: "Dany",
    mother: "Jane",
    son: "Jack",
    daughter: "Davey"
};

console.log("\nFamily: ");
for (const key in family) {
    console.log(key);
}
console.log("Names: ");
for (const key in family) {
    console.log(family[key]);
}


// ex6
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'reindeer'
//   }
//   Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”


const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  };
  
let sentence = "";
  
for (const key in details) {
    sentence += `${key} ${details[key]} `;
}
  
console.log('\n' + sentence.trim());



// ex7
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”


const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const firstLetters = names.map(name => name[0]);

firstLetters.sort();

const SocName = firstLetters.join("");

console.log('\n' + SocName);


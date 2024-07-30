// ex1: Colors
// Using this array :
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.


const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
  console.log(`${index + 1}# - ${color}.`);
});

const hasViolet = colors.includes("Violet");

if (hasViolet) {
  console.log("violet: true");
} else {
  console.log("violet: false");
}




// ex2 : Colors #2
// Using these arrays :
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.


console.log("\n");

const newcolors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

newcolors.forEach((color, index) => {
  const position = index + 1;
  const suffix = (position % 10 === 1 && position !== 11) ? ordinal[1] :
                 (position % 10 === 2 && position !== 12) ? ordinal[2] :
                 (position % 10 === 3 && position !== 13) ? ordinal[3] :
                 ordinal[0];

  console.log(`${position}${suffix} - ${color}.`);
});




// ex3 : Analyzing
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];
// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// ------2------
// const country = "USA";
// console.log([...country]);
// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

// 1: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// 2: ['U', 'S', 'A']

// 3: [undefined, undefined]


// ex4 : Employees
// Using this array:
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]
// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.


const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

const welcomeStudents = users.map(user => `Hello ${user.firstName}`);

console.log("\n" + welcomeStudents);



const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');

console.log(fullStackResidents);



const fullStackLastNames = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => user.lastName);

console.log(fullStackLastNames);




// ex5 : Star Wars
// Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// Use the reduce() method to combine all of these into a single string.


const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const comb = epic.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);

console.log("\n" + comb);




// ex6 : Employees #2
// Using this object:
// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)


console.log("\n");

const students = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false },
  ];
  
  const passedStudents = students.filter(student => student.isPassed);
  
  passedStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
  });
  
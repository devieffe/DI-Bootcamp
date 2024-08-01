//ex1 : Scope
//Analyse the code below, and predict what will be the value of a in all the following functions.
//Write your prediction as comments in a js file. Explain your predictions.


// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert("inside the funcOne function ${a}");
// }

// #1.1 - run in the console:
//funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

// >>> THERE WILL BE OUTPUT LIKE a = 3



//#2
//let a = 0;
// function funcTwo() {
//    a = 5;
// }

// console.log(a);

// function funcThree() {
//    alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared  with const instead of let ?

// >>> CONST MAKES OUTPUT LIKE a = 5



// //#3
//  function funcFour() {
//      window.a = "hello";
//  }


//  function funcFive() {
//      alert(`inside the funcFive function ${a}`);
//  }

// // // #3.1 - run in the console:
//  funcFour()
//  funcFive()

// >>> OUTPUT hello




// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     console.log(a);
// }


// // #4.1 - run in the console:
// funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?

// >>> OUTPUT test (with const and let)




// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     console.log(a);
// }
// console.log('outside of if: ' + a)

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?

// >>> OUTPUT IS THE SAME WITH const





//ex2 : Ternary Operator
//Using the code below:
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator.
//If winBattle() is true, the experiencePoints variable should be equal to 10, 
//else the variable should be equal to 1.
// Console.log the experiencePoints variable.

// function winBattle(){
//     return true;
// }


const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);





// ex3 : Is It A String ?
// Write a JavaScript arrow function that checks whether the value of 
//the argument passed, is a string or not. The function should return 
//true or false
// Check out the example below to see the expected output
// Example:
// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

const isString = (value) => typeof value === 'string';


//ex4 : Find The Sum
//Create a one line function (ie. an arrow function) that receives 
//two numbers as parameters and returns the sum.


const x = (a, b) => a + b;

console.log(x(1, 2));



// ex5 : Kg And Grams
// Create a function that receives a weight in kilograms and returns it in grams. 
//(Hint: 1 kg is 1000gr)
// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration 
//and function expression.
// Finally, use a one line arrow function and invoke it.


//declaration
function kgToGramsDeclaration(kg) {
    return kg * 1000;
}

console.log(kgToGramsDeclaration(5)); 

// expression:
const kgToGramsExpression = function(kg) {
    return kg * 1000;
};

console.log(kgToGramsExpression(5));

// arrow
const kgToGramsArrow = kg => kg * 1000;

console.log(kgToGramsArrow(5));




// ex6 : Fortune Teller
// Create a self invoking function that takes 4 arguments: number of children, 
//partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like 
//"You will be a <job title> in <geographic location>, 
//and married to <partner's name> with <number of children> kids."

// html: <div id="fortune"></div>

(function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    const fortune = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
    //document.getElementById('fortune').textContent = fortune;
})(2, 'Ben', 'New York', 'Software Engineer');




// ex7 : Welcome
// John has just signed in to your website and you want to welcome him.
// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: 
// the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the 
// user and his profile picture.

{/*
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome User</title>
</head>
<body>
    <nav id="navbar">
        <!-- Navbar content -->
    </nav>

<script>
(function(username) {
    const navbar = document.getElementById('navbar');
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `<p>${username}!</p><img src="profile.jpg" alt="${username}">`;
    navbar.appendChild(userDiv);
})('John');
</script>
</body>
</html>
*/}



{/* //ex8: Juice Bar
//You will use nested functions, to open a new juice bar.
//Part I:
//The outer function named makeJuice receives 1 argument: the size of the
//beverage the client wants - small, medium or large.
//The inner function named addIngredients receives 3 ingredients, and displays 
//on the DOM a sentence like The client wants a <size drink> juice, containing 
//<first ingredient>, <second ingredient>, <third ingredient>".
//Invoke the inner function ONCE inside the outer function. Then invoke 
//the outer function in the global scope.
//Part II:
//In the makeJuice function, create an empty array named ingredients.
//The addIngredients function should now receive 3 ingredients, and push them 
//into the ingredients array.
//Create a new inner function named displayJuice that displays on the DOM a 
//sentence like The client wants a <size drink> juice, containing 
//<first ingredient>, <second ingredient>, <third ingredient>".
//The client wants 6 ingredients in his juice, therefore, invoke 
//the addIngredients function TWICE. Then invoke once the displayJuice function. 
//Finally, invoke the makeJuice function in the global scope. */}



function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        document.getElementById('output').textContent = `Juice ${size} with ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
    }
    addIngredients('apple', 'banana', 'orange');
}
makeJuice('medium');

function makeJuice(size) {
    const ingredients = [];
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }
    function displayJuice() {
        document.getElementById('output').textContent = `Juice ${size} with ${ingredients.join(', ')}.`;
    }
    addIngredients('apple', 'banana', 'orange');
    addIngredients('strawberry', 'pineapple', 'kiwi');
    displayJuice();
}
makeJuice('large');
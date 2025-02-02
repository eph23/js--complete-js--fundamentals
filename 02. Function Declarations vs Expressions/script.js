"use strict";

// Function Declaration
function calcAgeDeclarations(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const ageFromDeclaration = calcAgeDeclarations(1988);
console.log("Function Declaration", ageFromDeclaration);

// NOTE: Parameters
/* 
Parameters are like local variable, only available in the particular function. In JavaScript, parameters are variables that you list as part of a function definition. They act as placeholders for values that will be passed to the function when it is called. We use parameters in function declarations to give functions the ability to receive input and perform actions based on that input
*/

// Function Expressions
const calcAgeExpression = function (birthYear) {
    return 2037 - birthYear;
};

const ageFromExpressions = calcAgeExpression(1988);
console.log("Function Expression", ageFromExpressions);

// NOTE: Functions are values
/* 
In JavaScript, functions are values because they are first-class objects. This means functions can be:

✅ Assigned to variables
✅ Passed as arguments to other functions
✅ Returned from other functions
✅ Stored in data structures like arrays and objects
*/
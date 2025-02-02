"use strict";
// Function Declaration
function calcAgeDeclarations(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const ageFromDeclaration = calcAgeDeclarations(1988);
console.log("Function Declaration", ageFromDeclaration);

// Function Expressions
const calcAgeExpression = function (birthYear) {
    return 2037 - birthYear;
};

const ageFromExpressions = calcAgeExpression(1988);
console.log("Function Expression", ageFromExpressions);

// Arrow Functions
// Simple form of arrow function
const calcAgeArrow = (birthYear) => 2037 - birthYear;
const ageFromArrow = calcAgeArrow(1988);
console.log("Arrow Function ", ageFromArrow);

// NOTE: Arrow Functions (Shorter form)
/* 
An arrow function is a shorter way to write a function expression in JavaScript. It uses the => (arrow) syntax and is commonly used for concise function expressions, especially in functional programming.
If there’s only one expression, it automatically returns the value.
*/

// Arrow Functions (Extended form)
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    //     return retirement;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1988, "Ephraim"));
console.log(yearsUntilRetirement(1980, "Bob"));

// NOTE: When to Use Arrow Functions?
/* 
✔ For short, simple functions
✔ For array methods (map, filter, reduce)
✔ For maintaining this in callbacks (like event listeners or promises)
❌ Avoid in object methods and constructors 
*/

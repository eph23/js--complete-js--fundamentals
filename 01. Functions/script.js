"use strict";

/* NOTE: Functions are fundamental building blocks of modern JavaScript
A function in JavaScript is a reusable block of code designed to perform a specific task. Functions help organize code, improve reusability, and make debugging easier.
*/

// Function Declaration
function logger() {
    console.log("Ephraim");
}

// Calling/invoking/running function
logger();

/* NOTE: Function with arguments
A function with arguments is a function that takes input values (parameters) when called. These parameters allow the function to work dynamically with different values. 
*/

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(2, 4);
console.log(orangeJuice);

/* NOTE: Although often used interchangeably, arguments and parameters have different meanings in JavaScript.
 */

// NOTE: Parameters (Placeholders in Function Definition)
/* 
1. Parameters are variables declared in a function definition.
2. They act as placeholders for the values (arguments) that will be passed when the function is called.
*/

// NOTE: Arguments (Actual Values Passed to the Function)
/* 
1. Arguments are the actual values passed to a function when it is called.
2. These values replace the parameters and are used inside the function. 
*/

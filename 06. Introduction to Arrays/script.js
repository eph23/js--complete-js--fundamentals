"use strict";

/* NOTE: An array is a data structure that stores multiple values in a single variable. Arrays can hold different data types, including numbers, strings, objects, and even other arrays. */

/* 
✔ Arrays store multiple values in a single variable.
✔ Elements are accessed using indexes (starting from 0).
✔ Arrays come with built-in methods for adding, removing, and modifying elements.
✔ You can loop through an array using for, forEach, or map.
✔ Useful for storing lists of data in JavaScript programs.
*/

// Array literal
const friends = ["Michael", "Steven", "Jay"];
console.log(friends);

// Array constructor
const birthYears = new Array(1991, 1984, 2008, 2020);
console.log(birthYears);

// Accessing array value
console.log(friends[0]);
console.log(friends[2]);

// Array property
console.log(friends.length);
console.log(friends[friends.length - 1]);

/* NOTE: Arrays can accept expressions as elements. An expression is any valid unit of code that produces a value. Since JavaScript evaluates expressions before adding them to an array, you can include mathematical operations, function calls, or variables inside an array.
 */

// NOTE: Expression vs. Statement
/*  
An expression is a piece of code that produces a value. It can be used inside variables, arrays, functions, etc.
✅ Always produces a value
✅ Can be used inside arrays, function arguments, etc.

A statement is a complete instruction that performs an action. Statements don’t necessarily return a value but control the flow of the program.

✅ Performs an action
✅ Does NOT always return a value
✅ Can contain expressions (e.g., x > 5 inside if statement)
*/

// Mutating Array value
friends[2] = "Antu";
console.log(friends);

const firstName = "Ephraim";
const eph = [firstName, "S", 2037 - 1988, "teacher", friends];
console.log(eph);
console.log(eph.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[years.length - 1]),
];

console.log(ages);

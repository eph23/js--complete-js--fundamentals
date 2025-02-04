"use strict";
// Basic array methods

const friends = ["Michael", "Steven", "Alice"];
console.log(friends);

// Adding elements to the end of the array
friends.push("Jay");
console.log(friends);

// Adding elements to the beginning of the array
friends.unshift("John");
console.log(friends);

// Removing elements from the end of the array
const popped = friends.pop();
console.log(friends);
console.log(popped);

// Removing elements from the beginning of the array
const shifted = friends.shift();
console.log(friends);
console.log(shifted);

/* NOTE: indexOf() Method in JavaScript
The indexOf() method searches for an element in an array and returns its first index. If the element is not found, it returns -1. */
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

/* NOTE: includes() Method in JavaScript
The includes() method checks if an array contains a specific value and returns true or false. */
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

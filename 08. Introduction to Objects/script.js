"use strict";

// NOTE: Objects
/* 
An object is a collection of key-value pairs where each key (property) is mapped to a specific value. It is used to store and manage data efficiently.

✔ Objects store key-value pairs (properties).
✔ Use dot notation (.) or bracket notation ([]) to access properties.
✔ Objects can store methods (functions inside objects).
✔ The this keyword refers to the current object.
✔ Use for...in to loop through properties.


*/

const eph = {
    firstName: "Ephraim",
    lastName: "S",
    age: 2037 - 1988,
    friends: ["Michael", "Steven", "John"],
};

console.log(eph);


// NOTE: Objects vs. Arrays
/* Feature	          Objects	               Arrays
Data Structure	     Key-value pairs          Ordered list
Access	          Dot/bracket notation	Index (arr[0])
Best for	          Storing structured data	Lists of similar items
Looping	          for...in loop	          for, forEach(), map()
 */
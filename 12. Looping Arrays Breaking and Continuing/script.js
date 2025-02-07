"use strict";
// for Loop in practice
const eph = [
    "Ephraim",
    "S",
    2037 - 1988,
    "Web Dev",
    ["Michael", "Bob", "Steven"],
];

const types = [];

for (let i = 0; i < 5; i++) {
    console.log(eph[i], typeof eph[i]);

    //     types[i] = typeof eph[i];
    types.push(typeof eph[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// Continue and break
// continue Statement
/* 
Skips the current iteration but keeps looping.
Execution jumps to the next iteration of the loop. 
*/

console.log(`=== ONLY STRINGS ===`);

for (let i = 0; i < eph.length; i++) {
    if (typeof eph[i] !== "string") {
        continue;
    } else {
        console.log(eph[i], typeof eph[i]);
    }
}

// NOTE: break Statement
/* 
Stops the loop entirely when a condition is met.
Execution exits the loop immediately. 
*/

console.log(`=== BREAK WITH NUMBER ===`);

for (let i = 0; i < eph.length; i++) {
    if (typeof eph[i] === "number") {
        break;
    } else {
        console.log(eph[i], typeof eph[i]);
    }
}

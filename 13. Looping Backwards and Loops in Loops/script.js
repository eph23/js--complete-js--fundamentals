"use strict";

const eph = [
    "Ephraim",
    "S",
    2037 - 1988,
    "Web Dev",
    ["Michael", "Bob", "Steven"],
];

// NOTE: Looping Backwards with a for Loop
/* 
Looping backwards means iterating from a higher index or number to a lower one. This is useful when working with arrays, countdowns, or reversing data. 
*/

for (let i = eph.length; i >= 0; i--) {
    console.log(eph[i]);
}

// Nested Loop
/* 
A nested loop is a loop inside another loop. The inner loop runs completely for each iteration of the outer loop. 
*/

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---- Starting Exercise ${exercise} ----`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`---- Lifting weights 🏋️‍♂️ rep ${rep} ----`);
    }
}

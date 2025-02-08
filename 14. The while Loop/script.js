"use strict";

// NOTE: The while loop
/* 
The while loop is a conditional loop that runs as long as a condition remains true. It's useful when the number of iterations is not known in advance. 
*/

let rep = 1;

while (rep <= 10) {
    console.log(`Lifting weights 🏋️‍♂️ rep ${rep}`);
    rep++;
}

let dice = Math.floor(Math.random() * 6 + 1);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.floor(Math.random() * 6 + 1);
    if (dice === 6) {
        console.log(`---END---`);
    }
}

/* 
✔ while loop runs until a condition becomes false.
✔ Used when the number of iterations is unknown.
✔ Use break to stop the loop early.
✔ Use continue to skip an iteration.
✔ Be careful of infinite loops!
*/
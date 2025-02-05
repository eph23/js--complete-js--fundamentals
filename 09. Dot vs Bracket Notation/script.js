"use strict";

const eph = {
    firstName: "Ephraim",
    lastName: "S",
    age: 2037 - 1988,
    job: "WebDev",
    friends: ["Michael", "Steven", "John"],
};

console.log(eph);

// NOTE: Accessing Object properties
/* 
1️⃣ Dot Notation (.) → object.key
2️⃣ Bracket Notation ([]) → object["key"]
*/
console.log(eph.lastName);
console.log(eph.firstName);

const nameKey = "Name";
console.log(eph["first" + nameKey]);
console.log(eph["last" + nameKey]);

/* const interestedIn = prompt(
    `What do you want to know about Ephraim? Choose between firstName, lastName, age, job, friends.`
);

console.log(eph[interestedIn]);

if (eph[interestedIn]) {
    console.log(eph[interestedIn]);
} else {
    console.log(
        `Wrong request! Choose between firstName, lastName, age, job, friends.`
    );
}
 */

// Mutating object property
eph.location = "Sylhet, BD";
eph["facebook"] = "@ephraims23";

console.log(eph);

// Challenge
/* 
Ephraim has 3 friends and his best friend is called Steven.
*/

console.log(
    `${eph.firstName} has ${eph.friends.length} friends and his best friend is called ${eph.friends[1]}.`
);

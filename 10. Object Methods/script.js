"use strict";

// NOTE: Object Methods
/* 
An object method is a function that is defined inside an object and can operate on that object's properties. Methods allow objects to perform actions.

✔ Object methods are functions inside objects.
✔ Use this to refer to the object itself.
✔ Use regular functions instead of arrow functions for object methods.
✔ Object.keys(), Object.values(), and Object.entries() help extract object data.
*/

const eph = {
    firstName: "Ephraim",
    lastName: "S",
    birthYear: 1988,
    job: "Web Dev",
    friends: ["Michael", "Jay", "Steven"],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummery: function () {
        return `${eph.firstName} is a ${eph.calcAge()} years old ${
            eph.job
        }, and he hes ${eph.hasDriversLicense ? "a" : "no"} drivers license`;
    },
};

console.log(eph.calcAge());
console.log(eph["calcAge"]());

console.log(eph.age);

// Challenge: Write a method getSummery
/* Ephraim is a 49 years old Web Dev, and hes a drivers license*/
console.log(eph.getSummery());

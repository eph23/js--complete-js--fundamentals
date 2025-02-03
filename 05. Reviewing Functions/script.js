"use strict";

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        return `${firstName} has already retired`;
    }
};

console.log(yearsUntilRetirement(1988, "Ephraim"));

// return Statement in JavaScript
/* 
The return statement is used in functions to send a value back to the caller. When a function encounters return, it stops execution and returns the specified value. 
*/

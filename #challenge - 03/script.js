"use strict";

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/* ********************************************************************************************** */
/*                                            SOLUTION                                            */
/* ********************************************************************************************** */

// Objective 1

const mark = {
    fullName: "Mark Miller",
    weight: 78,
    height: 1.6,

    // Objective 2
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    },
};

const john = {
    fullName: "John Smith",
    weight: 92,
    height: 1.95,

    // Objective 2
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    },
};

mark.calcBMI();
john.calcBMI();

// Objective 3
if (mark.bmi > john.bmi) {
    console.log(
        `${mark.fullName}'s BMI (${Math.trunc(
            mark.calcBMI()
        )}) is higher than ${john.fullName}'s (${Math.trunc(john.calcBMI())})!`
    );
} else if (john.bmi > mark.bmi) {
    `${john.fullName}'s BMI (${Math.trunc(john.calcBMI())}) is higher than ${
        mark.fullName
    }'s (${Math.trunc(mark.calcBMI())})!`;
}

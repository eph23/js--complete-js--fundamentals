"use strict";

// Helper function
function cutFruitPieces(fruit) {
    return fruit * 4;
}

// Calling helper function inside another function
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// NOTE: Helper function
/* 
A helper function is a small, reusable function that performs a specific task to support a larger function or program. It helps reduce code duplication, improves readability, and makes debugging easier.

Why Use Helper Functions?
✅ Code Reusability – Write once, use multiple times
✅ Readability & Maintainability – Easier to understand and debug
✅ Modularity – Breaks down complex logic into smaller, manageable functions
*/

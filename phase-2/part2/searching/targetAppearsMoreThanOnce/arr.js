// Target Appears More Than Once
// Given an array:

// let arr = [3, 7, 2, 7, 5, 7, 1];
// let target = 7;
// Write a JavaScript program to check whether the target element appears more than once in the array.

// If it appears more than once, print:

// Element appears more than once
// Otherwise print:

// Element does not appear more than once

let arr = [3, 7, 2, 7, 5, 7, 1];
let target = 7;
let appearance = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    appearance += 1;
  }
}

if (appearance > 1) {
  console.log("Element appears more than once");
} else console.log("Element does not appear more than once");

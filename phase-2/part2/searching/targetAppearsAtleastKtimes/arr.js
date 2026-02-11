// 🔹 Question 1: At Least K Times
// Given:

// let arr = [4, 7, 2, 7, 5, 7, 1, 2];
// let target = 7;
// let k = 3;
// 👉 Question:
// Check whether the number 7 appears at least 3 times in the array.

// If yes → print "Yes"

// If no → print "No"

let arr = [4, 7, 2, 7, 5, 7, 1, 2];
let target = 7;
let k = 3;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (target === arr[i]) {
    count += 1;
  }
}

if (count >= k) {
  console.log("The target appears atleast k times");
} else console.log("The target appears less than k times");

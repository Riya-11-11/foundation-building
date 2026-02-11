//  Question 2: Smallest Element Greater Than Target
// Given:

// let arr = [10, 5, 20, 8, 25, 15];
// let target = 12;
// 👉 Question:
// Find the smallest number that is greater than 12.

let arr = [10, 5, 20, 8, 25, 15];
let target = 12;
let smallestNum = Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > target && arr[i] < smallestNum) {
    smallestNum = arr[i];
  }
}

if (smallestNum === Infinity) {
  console.log(-1);
} else console.log(smallestNum);

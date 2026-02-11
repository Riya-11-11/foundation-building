// let arr = [10, 5, 20, 8, 25, 15];
// let target = 18;
// 👉 Question:
// Find the largest number that is smaller than 18.

// Expected Output:

// 15
// If no number is smaller than target → print -1.

let arr = [10, 5, 20, 8, 25, 15];
let target = 18;
let largest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < target && arr[i] > largest) {
    largest = arr[i];
  }
}

if (largest === -Infinity) {
  console.log(-1);
} else console.log(largest);

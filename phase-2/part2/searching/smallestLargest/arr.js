// let arr = [3, 9, 1, 7, 6, 8];
// let target = 5;
// Find:
// Smallest number greater than 5
// Largest number smaller than 5
// Print both.

let arr = [3, 9, 1, 7, 6, 8];
let target = 5;
let smallest = Infinity;
let largest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > target && arr[i] < smallest) {
    smallest = arr[i];
  }
  if (arr[i] < target && arr[i] > largest) {
    largest = arr[i];
  }
}

if (smallest === Infinity) {
  console.log("No number greater than target");
} else console.log("Smallest greater:", smallest);

if (largest === -Infinity) {
  console.log("No number smaller than target");
} else console.log("largest greater:", largest);

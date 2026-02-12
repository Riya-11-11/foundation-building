// let arr = [2, 9, 4, 7, 12, 6];
// let target = 8;
// 👉 Question:
// Find the element in the array that is nearest (closest) to 8

let arr = [2, 9, 4, 7, 12, 6];
let target = 8;

let minDiff = Infinity;
let nearest;

for (let i = 0; i < arr.length; i++) {
  let diff = Math.abs(arr[i] - target);

  if (diff < minDiff) {
    minDiff = diff;
    nearest = arr[i];
  }
}

console.log(nearest);

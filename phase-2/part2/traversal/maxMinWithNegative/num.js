// Input: [-10, -3, -25, -1]
// Output:
// Max = -1
// Min = -25

let arr = [-10, -3, -25, -1];
let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log("max: ", max);
console.log("min: ", min);

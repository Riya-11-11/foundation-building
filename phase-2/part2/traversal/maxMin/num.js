// Input: [3, 7, 1, 9, 4]
// Output:
// Max = 9
// Min = 1

let arr = [3, 7, 1, 9, 4];
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

// Input: [-5, -10, -3, -8]
// Output: -5

let arr = [-5, -10, -3, -8];
let secLargest = Infinity;

for (let i = 0; i < arr.length; i++) {
  let max = arr[0];
  if (arr[i + 1] > max) {
    secLargest = max;
    max = arr[i + 1];
  }
}

console.log(secLargest);

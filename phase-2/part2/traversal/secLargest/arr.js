// Input: [10, 20, 5, 20, 8]
// Output: 10

let arr = [10, 20, 5, 20, 8];
let secLargest = 0;

for (let i = 0; i < arr.length; i++) {
  let max = arr[0];
  if (arr[i + 1] > max) {
    secLargest = max;
    max = arr[i + 1];
  }
}
console.log(secLargest);

// Element With Maximum Frequency
// Given:
// let arr = [3, 7, 3, 2, 7, 3, 4, 7, 7];
// 👉 Question:
// Find the element that appears maximum number of times.


let arr = [3, 7, 3, 2, 7, 3, 4, 7, 7];
let freq = {};
let maxCount = 0;
let maxNum = 0;

for (let i = 0; i < arr.length; i++) {
  let elem = arr[i];
  if (freq[elem]) {
    freq[elem] += 1;
  } else {
    freq[elem] = 1;
  }
  if (freq[elem] > maxCount) {
    maxCount = freq[elem];
    maxNum = elem;
  }
}

console.log(maxNum);
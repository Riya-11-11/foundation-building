// ✅ Question 9: Count Frequency of a Given Number
// Given:
// let arr = [4, 2, 7, 2, 9, 2, 5];
// let target = 2;

let arr = [4, 2, 7, 2, 9, 2, 5];
let target = 2;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    count++;
  }
}

console.log(count);

// [4, 7, 2, 7, 5, 7, 9]
// Target: 7
// 👉 Print the index of the LAST occurrence of 7.
// 👉 If not found, print -1.
// 👉 Use only one loop.

let arr = [4, 7, 2, 7, 5, 7, 9];
let target = 7;
let lastIndex = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    lastIndex = i;
  }
}

if (lastIndex !== -1) {
  console.log(lastIndex);
} else console.log(-1);

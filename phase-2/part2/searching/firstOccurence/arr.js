// [3, 6, 1, 8, 6, 4]
// and the target number 6,
// find the index of its first occurrence.
// If not found, print -1.

let arr = [3, 6, 1, 8, 6, 4];
let target = 6;
let isFound = false;

for (let i = 0; i < arr.length; i++) {
  if (target === arr[i]) {
    isFound = true;
    console.log(i);
    break;
  }
}
if (!isFound) {
  console.log(-1);
}

// First Non-Repeating Element
// Given:
// let arr = [4, 5, 1, 2, 0, 4, 1, 2];
// 👉 Question:
// Find the first element that appears only once.

let arr = [4, 5, 1, 2, 0, 4, 1, 2];

for (let i = 0; i < arr.length; i++) {
  let isRepeat = false;

  for (let j = 0; j < arr.length; j++) {
    if (i == j) continue;
    if (arr[i] === arr[j]) {
      isRepeat = true;
      break;
    }
  }
  if (isRepeat == false) {
    console.log(arr[i]);
    break;
  }
}

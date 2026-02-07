// let arr = [4, 7, 2, 9, 5]
// and the target number 9,
// check whether the number exists in the array or not.
// Print "Found" or "Not Found".

let arr = [4, 7, 2, 9, 5];
let target = 9;
let isFound = false;

for (let i = 0; i < arr.length; i++) {
  if (target === arr[i]) {
    isFound = true;
    break;
  }
}

if (isFound) {
  console.log("Found");
} else console.log("Not Found");

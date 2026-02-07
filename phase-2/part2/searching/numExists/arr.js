// [10, 20, 30, 40, 50]
// and the target number 25,
// check whether the number exists in the array or not.

let arr = [10, 20, 30, 40, 50];
let target = 25;
let isExist = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    isExist = true;
    break;
  }
}
console.log(isExist);

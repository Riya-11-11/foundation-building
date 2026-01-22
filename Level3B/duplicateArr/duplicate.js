// [1,2,2,3,1] → [1,2,3]

let arr = [1, 2, 2, 3, 1];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < newArr.length; j++) {
    if (arr[i] === newArr[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);

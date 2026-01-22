// [1,2,2,3,1,4] → 3

let arr = [1, 2, 2, 3, 1, 4];

for (let i = 0; i < arr.length; i++) {
  let elem = arr[i];
  let isRepeate = false;
  for (let j = 0; j < arr.length; j++) {
    if (i == j) continue;

    if (elem == arr[j]) {
      isRepeate = true;
    }
  }
  if (isRepeate == false) {
    console.log(elem);
    break;
  }
}

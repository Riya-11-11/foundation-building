// Input: 1234
// Output: 4321

let num = 1234;
let reversedNum = 0;

while (num > 0) {
  let digit = num % 10;
  reversedNum = reversedNum * 10 + digit;
  num = Math.floor(num / 10);
}
console.log(reversedNum);

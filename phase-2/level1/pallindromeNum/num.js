// Input: 121 → Output: true
// Input: 123 → Output: false

let num = 123;
let originalNum = num;
let reversedNum = 0;

while (num > 0) {
  let digit = num % 10;
  reversedNum = reversedNum * 10 + digit;
  num = Math.floor(num / 10);
}

let isPallindrome = originalNum === reversedNum;
console.log(isPallindrome);

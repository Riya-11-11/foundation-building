// Input: 987
// 9 + 8 + 7 = 24
// 2 + 4 = 6
// Output: 6

let num = 987;

while (num >= 10) {
  let sum = 0
  while (num> 0) {
  sum += num%10;
  num = Math.floor(num / 10);
}
num = sum
}

console.log(num);


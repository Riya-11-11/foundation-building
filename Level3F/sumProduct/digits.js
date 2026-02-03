// Sum of Digits & Product of Digits
// Input: 234 → sum: 9, product: 24

let input = 234;
let sum = 0;
let product = 1;

while (input > 0) {
  let digit = input % 10;
  sum += digit;
  product *= digit;
  input = Math.floor(input / 10);
}

console.log("Sum: ", sum);
console.log("Product: ", product);

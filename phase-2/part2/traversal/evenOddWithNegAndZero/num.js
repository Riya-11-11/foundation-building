// Input: [-2, -5, 0, 7, 8]
// Output:
// Even = 3
// Odd = 2

let arr = [-2, -5, 0, 7, 8];
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenCount++;
  } else oddCount++;
}

console.log("Even Numbers Are: ", evenCount);
console.log("Odd Numbers Are: ", oddCount);

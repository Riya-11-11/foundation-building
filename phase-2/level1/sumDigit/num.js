// Input: 345
// Output: 12 (3 + 4 + 5)

let num = 345
let sum = 0

while (num>0) {
    let digit = num%10
    sum += digit
    num = Math.floor(num/10)
}

console.log(sum);

// Input: 12345
// Output:
// Even digits: 2
// Odd digits: 3

let num = 12345
let evenNum = 0
let oddNum = 0

while (num>0) {
    let digit = num%10
    if (digit%2==0) {
        evenNum++
    }else oddNum++
    num = Math.floor(num/10)
}

console.log("Even", evenNum);
console.log("Odd", oddNum);


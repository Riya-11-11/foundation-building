// Input: 98765
// Output: 5

let num = 98765
let count = 0

while (num>0) {
    count++
    num = Math.floor(num/10)
}

console.log(count);

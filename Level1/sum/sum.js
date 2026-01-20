let num =1234
let sum = 0

while (num>0) {
    let digit = num%10 //get the last digit
    sum += digit
    num = Math.floor(num/10)
}

console.log(sum);

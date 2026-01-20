let num = 234
let product = 1 

while (num > 0) {
     let digit = num%10
     product = product * digit
     num = Math.floor(num/10)
 }

console.log(product);

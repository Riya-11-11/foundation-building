// Prime Numbers in Range
// Find all primes between 10 and 50
// Bonus: track sum of primes while printing.

let start = 10;
let end = 50;
let sum = 0;

for (let num = start; num <= end; num++) {
  let isPrime = true;

  if (num < 2) {
    isPrime = false;
  }

  for (let i = 2; i < num ; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  
  if (isPrime) {
    console.log(num);
    sum += num;
  }
}
console.log("sum of prime numbers: ", sum);

// Fibonacci Check
// Check if a number is part of Fibonacci sequence.
// Input: 21 → true, 22 → false

let input = 21;

let first = 0;
let sec = 1;
let isFib = false

for (let i = 0; ; i++) {
  let next = first + sec;
  if (next == input) {
    isFib = true
    break;
  }else if (next>input) {
    break;
  }
  
 first = sec
 sec = next
}

console.log(isFib);

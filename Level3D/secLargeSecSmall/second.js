// Second Largest & Second Smallest
// Find both in a single pass.
// Think: can you track them with 2–3 variables only?

let arr = [5, 1, 9, 3, 7, 2];
let largest = arr[0];
let smallest = arr[0];
let secLargest = -Infinity;
let secSmallest = Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    secSmallest = smallest;
    smallest = arr[i];
  } else if (arr[i] > smallest && arr[i] < secSmallest) {
    secSmallest = arr[i];
  }

  if (arr[i] > largest) {
    secLargest = largest;
    largest = arr[i];
  } else if (arr[i] < largest && arr[i] > secLargest) {
    secLargest = arr[i];
  }
}

console.log("secLargest:", secLargest, "and secSmallest:", secSmallest);

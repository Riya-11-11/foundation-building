// Find Missing Number
// Array: [1,2,4,5,6] → missing 3
// Do this without sorting.

let arr = [1,2,4,5,6]
let max = arr[0]
let actualSum = 0

for (let i = 1; i < arr.length; i++) {
    if (arr[i]>max) {
        max=arr[i]
    }
}

let expected_sum = (max*(max+1))/2

for (let i = 0; i < arr.length; i++) {
    actualSum+=arr[i]
}

let missingNum = expected_sum - actualSum
console.log(missingNum);

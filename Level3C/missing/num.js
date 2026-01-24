// [1,2,4,5] → 3

let arr = [1,2,4,5]
let max = arr[0]
for (let i = 1; i < arr.length; i++) {
    if (arr[i]>max) {
        max = arr[i]
    }  
}

let expected_sum = (max*(max+1))/2 //maths formula...

let sum =0
for (let i = 0; i < arr.length; i++) {
    sum+=arr[i]   
}

let missing_val = expected_sum - sum
console.log(missing_val);



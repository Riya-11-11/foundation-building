// Given [1,2,3,4,5] and N=2, output [4,5,1,2,3]


let arr = [1,2,3,4,5]
let n = 2
let len = arr.length
let result = []

//place last n elems to first...
for (let i = 0; i < n; i++) {
    result[i] = arr[len-n+i]
}

//place remaining elems
for (let i = n; i < len; i++) {
    result[i] = arr[i-n]  
}

console.log(result);





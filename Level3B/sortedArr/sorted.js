// [1,2,3,5] → true
// [1,3,2] → false

let arr = [1,2,3,5]
isSorted = true

for (let i = 0; i < arr.length-1; i++){
    let prevElem= arr[i]
    let nextElem = arr[i+1]
     if (prevElem > nextElem ) {
         isSorted = false
         break
     }  
}
console.log(isSorted); 



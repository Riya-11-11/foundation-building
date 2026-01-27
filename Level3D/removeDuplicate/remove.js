// Remove Duplicates from Array
// Input: [1,2,2,3,1,4] → [1,2,3,4]
// No built-in functions like Set

let arr = [1,2,2,3,1,4]
let result = []

for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false
    for (let j = 0; j < result.length; j++) {
        if (arr[i]===result[j]) {
            isDuplicate = true
            break
        }
       
    }

    if (isDuplicate==false) {
        result.push(arr[i])
    }
}
console.log(result);

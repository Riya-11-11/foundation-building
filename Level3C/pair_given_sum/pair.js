// arr = [2,7,11,15], target = 9
// → [2,7]

let arr = [2,7,11,15]
let target = 17
let result = []

for (let i = 0; i < arr.length; i++) {
    let prevElem = arr[i]
    for (let j = 1; j < arr.length; j++) {
        let nextElem = arr[j]
        let sum = prevElem + nextElem
        if (sum == target) {
            result.push(prevElem, nextElem)
        }
        
    }
    
}
console.log(result);
